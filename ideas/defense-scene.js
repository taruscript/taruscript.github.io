(() => {
  'use strict';

  const canvas = document.querySelector('.defense-scene');
  const ctx = canvas.getContext('2d');
  if (!ctx || typeof DefenseMath === 'undefined') return;

  const { Vector3, Quaternion } = DefenseMath;
  const rad = Math.PI / 180;
  const turn = 2 * Math.PI;
  const network = document.querySelector('.peer-network');
  const uplinks = [1, 3, 4];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const up = new Vector3(0, 1, 0);
  const pitch = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), 18 * rad);
  const tilt = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), -12 * rad);
  const rotation = new Quaternion();
  const projected = new Vector3();

  function onGlobe(lon, lat) {
    const latitude = lat * rad;
    return new Vector3(Math.cos(latitude) * Math.sin(lon * rad),
      Math.sin(latitude), Math.cos(latitude) * Math.cos(lon * rad));
  }

  // Simplified continent silhouettes, sampled once into a dot map.
  const land = [
    [[-168,66],[-156,71],[-130,69],[-112,74],[-81,71],[-77,62],[-63,63],[-53,47],[-67,45],[-82,31],[-81,25],[-88,30],[-97,26],[-96,20],[-87,22],[-89,17],[-80,9],[-83,8],[-93,16],[-105,20],[-117,32],[-125,48],[-134,57],[-146,61],[-164,55],[-153,62]],
    [[-81,12],[-71,12],[-60,8],[-50,1],[-35,-6],[-40,-20],[-49,-29],[-56,-38],[-68,-55],[-75,-50],[-71,-34],[-76,-15],[-81,-5]],
    [[-54,59],[-44,60],[-21,76],[-19,82],[-47,84],[-64,78],[-57,70]],
    [[-17,15],[-16,29],[-6,36],[11,37],[25,32],[33,32],[42,13],[51,12],[48,3],[41,-12],[35,-23],[27,-34],[18,-35],[12,-19],[9,-7],[9,3],[-2,5],[-10,5]],
    [[-10,36],[-9,43],[-1,44],[-5,49],[5,52],[8,57],[16,55],[23,59],[18,65],[12,56],[5,59],[15,69],[29,71],[41,67],[66,69],[79,74],[101,78],[115,73],[139,72],[161,69],[180,66],[180,61],[163,60],[157,51],[155,58],[144,59],[136,54],[141,48],[134,43],[130,42],[129,35],[126,35],[125,40],[120,39],[122,31],[118,25],[109,21],[106,10],[102,10],[99,16],[103,2],[100,5],[95,17],[90,22],[86,20],[78,8],[73,15],[68,24],[58,25],[57,22],[45,13],[42,16],[35,30],[27,37],[22,37],[16,42],[17,38],[12,43],[8,44],[3,41],[-1,37]],
    [[113,-22],[122,-17],[131,-12],[136,-14],[142,-11],[146,-19],[153,-27],[150,-37],[140,-38],[129,-32],[115,-35]],
    [[-8,51],[1,51],[-2,59],[-6,58]], [[43,-13],[50,-12],[47,-25],[44,-24]],
    [[130,31],[135,33],[142,41],[141,37],[136,34],[132,32]], [[140,42],[145,45],[145,42]],
    [[95,5],[99,4],[106,-5],[104,-6]], [[108,-2],[110,4],[118,7],[118,0],[114,-4]],
    [[130,-2],[141,-3],[151,-10],[142,-9]], [[166,-46],[173,-40],[178,-37],[175,-42],[169,-47]]
  ];

  function inside(lon, lat, outline) {
    let hit = false;
    for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
      const [x, y] = outline[i], [px, py] = outline[j];
      if ((y > lat) !== (py > lat) && lon < (px - x) * (lat - y) / (py - y) + x) hit = !hit;
    }
    return hit;
  }

  const dots = [];
  for (let lat = -55; lat <= 82; lat += 2.15) {
    const step = 2.15 / Math.cos(lat * rad);
    for (let lon = -180; lon < 180; lon += step) {
      if (land.some(outline => inside(lon, lat, outline))) dots.push(onGlobe(lon, lat));
    }
  }

  const sample = (segments, fn) => Array.from({length: segments + 1}, (_, i) => fn(i / segments));
  const grid = [];
  for (let lat = -60; lat <= 60; lat += 15) grid.push(sample(144, t => onGlobe(t * 360, lat)));
  for (let lon = 0; lon < 360; lon += 15) grid.push(sample(72, t => onGlobe(lon, t * 180 - 90)));

  const hubs = [[139.7,35.7],[103.8,1.4],[72.9,19.1],[2.4,48.9],[151.2,-33.9],
    [55.3,25.2],[37,-1.3],[-122.4,37.8],[-74,40.7],[-46.6,-23.6]].map(([lon, lat]) => onGlobe(lon, lat));
  function corridor(source, target, lift, segments = 64) {
    const angle = source.angleTo(target);
    const tangent = target.clone().addScaledVector(source, -Math.cos(angle)).normalize();
    return sample(segments, t => source.clone().multiplyScalar(Math.cos(angle * t))
      .addScaledVector(tangent, Math.sin(angle * t)).multiplyScalar(1 + lift * Math.sin(Math.PI * t)));
  }

  const routes = [[0,1],[0,4],[1,2],[1,4],[2,5],[3,5],[5,6],[3,8],[7,8],[8,9],[7,0]].map(([a,b]) =>
    [.06, .12, .18].map(lift => corridor(hubs[a], hubs[b], lift)));

  function path(points, color) {
    ctx.beginPath();
    let connected = false;
    for (const point of points) {
      const p = projected.copy(point).applyQuaternion(rotation);
      if (p.z < 0) { connected = false; continue; }
      if (connected) ctx.lineTo(p.x, -p.y);
      else ctx.moveTo(p.x, -p.y);
      connected = true;
    }
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function ring(x, y, radius, color, start = 0, end = turn) {
    ctx.beginPath();
    ctx.arc(x, y, radius, start, end);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function spot(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, turn);
    ctx.fillStyle = color;
    ctx.fill();
  }

  const spokeAngle = lane => (lane * 45 - 17) * rad;
  function orientGlobe(time) {
    rotation.setFromAxisAngle(up, -98 * rad + time * turn / 80).premultiply(pitch).premultiply(tilt);
  }

  function observationGrid() {
    ctx.save();
    ctx.strokeStyle = 'rgba(65,133,218,.18)';
    ctx.lineWidth = .65 / radius;
    ctx.beginPath();
    for (let i = -9; i <= 9; i++) {
      ctx.moveTo(i * .20, .52);
      ctx.lineTo(i * .54, 1.49);
    }
    for (const depth of [.52, .58, .66, .77, .93, 1.15, 1.49]) {
      const extent = 1.8 + (depth - .52) * 3.15;
      ctx.moveTo(-extent, depth);
      ctx.lineTo(extent, depth);
    }
    ctx.stroke();
    ctx.restore();
  }

  function perimeter(time) {
    ring(0, 0, 1.19, 'rgba(108,209,196,.29)');
    for (let i = 0; i < 96; i++) {
      const a = turn * i / 96;
      const major = i % 8 === 0;
      ctx.beginPath();
      ctx.moveTo(1.22 * Math.cos(a), 1.22 * Math.sin(a));
      const r = major ? 1.27 : 1.234;
      ctx.lineTo(r * Math.cos(a), r * Math.sin(a));
      ctx.strokeStyle = major ? '#6eaaa9' : 'rgba(115,178,182,.37)';
      ctx.stroke();
    }
    const sweep = time * .12;
    ring(0, 0, 1.19, '#83dccc', sweep, sweep + .38);
    spot(1.19 * Math.cos(sweep + .38), 1.19 * Math.sin(sweep + .38), .017, '#c9fff0');
  }

  // MDDR 2026 p.32: share of customer threat impact, Jan–Jun 2026, in published order.
  // Normalize within the twelve reported destinations; coordinates are illustrative.
  const destinations = [
    ['米国', 25.5, -98, 38], ['イスラエル', 7.6, 34.9, 32], ['ウクライナ', 4.8, 31, 49],
    ['台湾', 3.9, 121, 23.6], ['英国', 3.8, -1.6, 52.5], ['UAE', 2.8, 54.4, 24.4],
    ['インド', 2.5, 78, 22], ['日本', 2.5, 138, 36], ['カナダ', 1.8, -98, 54],
    ['ドイツ', 1.7, 10, 51], ['豪州', 1.5, 134, -25], ['フィリピン', 1.5, 122, 13]
  ].map(([name, share, lon, lat]) => ({ name, share, point: onGlobe(lon, lat) }));
  const totalShare = destinations.reduce((sum, site) => sum + site.share, 0);
  function destinationAt(fraction) {
    let amount = fraction * totalShare;
    for (const site of destinations) {
      amount -= site.share;
      if (amount < 0) return site;
    }
    return destinations[destinations.length - 1];
  }
  const sensorRadius = .085;

  function screen(point) {
    const p = projected.copy(point).applyQuaternion(rotation);
    return {x: p.x, y: -p.y, z: p.z};
  }

  function trackPoint(track, position) {
    const i = Math.floor(position);
    const a = screen(track[i]), b = screen(track[Math.min(i + 1, track.length - 1)]);
    return {x: a.x + (b.x - a.x) * (position - i), y: a.y + (b.y - a.y) * (position - i),
      z: a.z + (b.z - a.z) * (position - i)};
  }

  // Sample the same land dots as the map, with a repeatable schedule for each source.
  const usedOrigins = new Set();
  const trafficSources = Array.from({length: 320}, (_, i) => {
    // Permute equal-width strata to keep origins independent of destination rank.
    const target = destinationAt(((i * 137 % 320) + .5) / 320);
    let index = Math.floor((i + .5) * dots.length / 320);
    while (usedOrigins.has(index) || dots[index].distanceTo(target.point) < .45) index = (index + 1) % dots.length;
    usedOrigins.add(index);
    const origin = dots[index];
    const phase = i * .61803398875 % 1;
    return {
      origin, target, track: corridor(origin, target.point, .025 + .09 * phase, 40),
      background: 18 * phase, burst: 4.8 + 4.5 * (i * .754877666 % 1),
      duration: 2.2 + 1.5 * phase
    };
  });

  // Highlight outcomes on actual simulated routes, including on the far hemisphere.
  const events = trafficSources.filter((_, i) => i % 5 === 0).map((flow, i) => ({
    target: flow.target, track: flow.track, at: flow.burst + (i % 4) * 3,
    breach: i % 9 === 0
  }));

  const waveClock = time => (time + 6.7) % 18;

  function drawTraffic(time) {
    const clock = waveClock(time);
    const compact = radius < 95;
    ctx.save();
    ctx.lineWidth = (compact ? .57 : .84) / radius;
    ctx.strokeStyle = '#e4a15e';
    for (const [index, flow] of trafficSources.entries()) {
      if (compact && index % 3 === 0) continue;
      const node = screen(flow.target.point);
      // A steady trickle is joined by two overlapping waves with closely spaced launches.
      for (const start of [flow.background, flow.burst, flow.burst + 1.85]) {
        const age = (clock - start + 18) % 18;
        if (age >= flow.duration) continue;
        const progress = age / flow.duration;
        const last = flow.track.length - 1;
        const head = Math.floor(last * progress);
        const tail = Math.max(0, head - 8);
        let penDown = false;
        ctx.beginPath();
        for (let j = tail; j <= Math.min(head + 1, last); j++) {
          const p = projected.copy(flow.track[j]);
          if (j > head) p.lerpVectors(flow.track[head], flow.track[j], last * progress - head);
          p.applyQuaternion(rotation);
          if (p.z <= 0 || (node.z > 0 && Math.hypot(p.x - node.x, -p.y - node.y) < sensorRadius)) {
            penDown = false;
            continue;
          }
          if (penDown) ctx.lineTo(p.x, -p.y);
          else ctx.moveTo(p.x, -p.y);
          penDown = true;
        }
        ctx.globalAlpha = (.22 + .28 * (1 - progress)) * Math.min(1, age * 5);
        ctx.stroke();
        if (penDown) {
          ctx.fillStyle = '#ffd69b';
          const size = (compact ? 1 : 1.5) / radius;
          ctx.fillRect(projected.x - size / 2, -projected.y - size / 2, size, size);
        }
        if (age < .65) {
          const p = projected.copy(flow.origin).applyQuaternion(rotation);
          if (p.z > 0) {
            ctx.globalAlpha = .5 * (1 - age / .65);
            spot(p.x, -p.y, .009, '#f2b871');
          }
        }
      }
    }
    ctx.restore();
  }

  function drawIncidents(time) {
    const cycle = 18, approach = 1.8;
    ctx.save();
    ctx.lineWidth = 1.5 / radius;
    for (const {at, target, breach, track} of events) {
      const age = (waveClock(time) - at + cycle) % cycle;
      const afterImpact = age - approach;
      if (afterImpact >= (breach ? 3 : 1)) continue;
      const node = screen(target.point);
      if (node.z < .08) continue;
      // Find the first contact with the local receiver ring along this projected route.
      let edge = track.length - 2;
      while (edge > 0) {
        const p = screen(track[edge]);
        if (Math.hypot(p.x - node.x, p.y - node.y) >= sensorRadius) break;
        edge--;
      }
      const outside = screen(track[edge]), inside = screen(track[edge + 1]);
      const outerDistance = Math.hypot(outside.x - node.x, outside.y - node.y);
      const innerDistance = Math.hypot(inside.x - node.x, inside.y - node.y);
      if (outerDistance <= sensorRadius || outerDistance <= innerDistance) continue;
      const contact = edge + (outerDistance - sensorRadius) / (outerDistance - innerDistance);
      const position = contact * Math.min(1, age / approach);
      const head = trackPoint(track, position);
      if (head.z <= 0) continue;
      ctx.globalAlpha = 1;
      if (afterImpact < 0) {
        ctx.globalAlpha = Math.min(1, age / .25);
        const tail = trackPoint(track, Math.max(0, position - 5));
        ctx.beginPath();
        ctx.moveTo(tail.z > 0 ? tail.x : head.x, tail.z > 0 ? tail.y : head.y);
        ctx.lineTo(head.x, head.y);
        ctx.strokeStyle = '#e6a35e';
        ctx.stroke();
        spot(head.x, head.y, .018, '#ffd494');
      } else if (breach) {
        const t = Math.min(1, afterImpact / .55);
        const x = head.x + (node.x - head.x) * t, y = head.y + (node.y - head.y) * t;
        ctx.globalAlpha = Math.min(1, (3 - afterImpact) / .8);
        ctx.beginPath();
        ctx.moveTo(head.x, head.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#ff6774';
        ctx.stroke();
        spot(x, y, .023, '#ff495b');
        if (t === 1) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.strokeRect(-.047, -.047, .094, .094);
          ctx.restore();
        }
      } else {
        ctx.globalAlpha = 1 - afterImpact;
        const bearing = Math.atan2(head.y - node.y, head.x - node.x);
        ring(node.x, node.y, sensorRadius, '#a4ffda', bearing - .85, bearing + .85);
        ring(head.x, head.y, .016 + .058 * afterImpact, '#91ebcd');
      }
    }
    ctx.restore();
  }

  let width, height, dpr, radius, centerX, centerY;
  let elapsed = reduced.matches ? 3.6 : 0;
  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.translate(centerX, centerY);
    ctx.scale(radius, radius);
    ctx.lineWidth = .8 / radius;
    const halo = ctx.createRadialGradient(0, 0, .6, 0, 0, 1.65);
    halo.addColorStop(0, 'rgba(24,161,146,.14)');
    halo.addColorStop(.38, 'rgba(32,158,158,.12)');
    halo.addColorStop(1, 'rgba(16,89,110,0)');
    ctx.fillStyle = halo;
    ctx.fillRect(-1.65, -1.65, 3.3, 3.3);
    observationGrid();
    perimeter(elapsed);

    const sphere = ctx.createRadialGradient(-.36, -.45, .06, .02, .1, 1.14);
    sphere.addColorStop(0, '#16374e');
    sphere.addColorStop(.67, '#102b46');
    sphere.addColorStop(.94, '#0a1e30');
    sphere.addColorStop(1, '#1a435c');
    spot(0, 0, 1, sphere);
    orientGlobe(elapsed);
    for (const line of grid) path(line, 'rgba(76,163,239,.26)');
    ctx.fillStyle = '#78c8d1';
    for (const point of dots) {
      const p = projected.copy(point).applyQuaternion(rotation);
      if (p.z <= 0) continue;
      const size = (.005 + .006 * p.z);
      ctx.globalAlpha = .34 + .62 * p.z;
      ctx.fillRect(p.x - size / 2, -p.y - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
    ring(0, 0, 1, 'rgba(114,228,214,.52)');
    routes.forEach((bundle, i) => {
      const baseline = bundle[0];
      if (projected.copy(baseline[0]).applyQuaternion(rotation).z <= 0 ||
          projected.copy(baseline[baseline.length - 1]).applyQuaternion(rotation).z <= 0) return;
      for (const route of bundle) path(route, 'rgba(93,191,242,.44)');
      const route = bundle[i % bundle.length];
      const index = Math.floor(((elapsed * .125 + i * .37) % 1) * (route.length - 1));
      const p = projected.copy(route[index]).applyQuaternion(rotation);
      if (p.z > 0) spot(p.x, -p.y, .011, '#cfedff');
    });
    drawTraffic(elapsed);
    const labels = [];
    for (const site of destinations) {
      const {x, y, z} = screen(site.point);
      if (z <= 0) continue;
      spot(x, y, .017, '#dcf8ff');
      ring(x, y, sensorRadius, '#65bcff');
      ring(x, y, sensorRadius + .018, 'rgba(107,195,244,.55)', -.8, 1.3);
      if (radius < 95 || z < .2) continue;
      ctx.font = (10 / radius) + 'px sans-serif';
      const left = x + sensorRadius + .025;
      const right = left + ctx.measureText(site.name).width;
      if (labels.some(box => left < box.right && right > box.left && Math.abs(y - box.y) * radius < 13)) continue;
      labels.push({left, right, y});
      ctx.fillStyle = '#cfefff';
      ctx.fillText(site.name, left, y + .02);
    }
    drawIncidents(elapsed);
  }

  // The mesh uses page coordinates so its three uplinks stay on the globe as the page scrolls.
  function layoutNetwork() {
    const bounds = network.getBoundingClientRect();
    const globe = canvas.getBoundingClientRect();
    const cx = globe.left - bounds.left + centerX;
    const cy = globe.top - bounds.top + centerY;
    const compact = bounds.width < 600;
    const cols = Math.max(3, Math.ceil(bounds.width / (compact ? 115 : 180)));
    const stepX = bounds.width / cols;
    const stepY = compact ? 112 : 141;
    const rows = Math.ceil(bounds.height / stepY) + 2;
    const fragment = document.createDocumentFragment();
    const peers = [];
    const edges = [];
    const faces = [];
    const routes = [];
    let seed = 73;
    function random() {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 4294967296;
    }
    function svg(tag, attrs, parent = fragment) {
      const element = document.createElementNS(network.namespaceURI, tag);
      for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
      parent.append(element);
      return element;
    }
    const coord = p => p.x.toFixed(1) + ',' + p.y.toFixed(1);
    // Keep links outside the dial, including diagonals with both ends outside it.
    function clearsGlobe(a, b) {
      const dx = b.x - a.x, dy = b.y - a.y;
      const t = Math.max(0, Math.min(1, ((cx - a.x) * dx + (cy - a.y) * dy) / (dx * dx + dy * dy)));
      return Math.hypot(a.x + dx * t - cx, a.y + dy * t - cy) > radius * 1.29;
    }
    function link(a, b) {
      if (!a || !b || !clearsGlobe(a, b)) return false;
      edges.push('M' + coord(a) + 'L' + coord(b));
      a.links.push(b);
      b.links.push(a);
      return true;
    }
    for (let row = 0; row < rows; row++) {
      const band = [];
      for (let col = 0; col <= cols + 1; col++) {
        const x = (col - .48 + (row % 2) * .42 + (random() - .5) * .75) * stepX;
        const y = (row - .48 + (random() - .5) * .8) * stepY;
        band.push({x, y, links: []});
      }
      peers.push(band);
    }
    for (let row = 1; row < rows; row++) {
      for (let col = 0; col <= cols; col++) {
        const peer = peers[row][col], right = peers[row][col + 1], prev = peers[row - 1][col];
        const across = link(peer, right);
        const up = link(peer, prev);
        if (random() < .57 && link(prev, right) && across && up && random() < .38) {
          faces.push('M' + coord(peer) + 'L' + coord(right) + 'L' + coord(prev) + 'Z');
        }
      }
    }
    const nodes = peers.flat().filter(p => p.links.length);
    function walk(start, count) {
      const trail = [start];
      while (trail.length < count) {
        const current = trail[trail.length - 1];
        const choices = current.links.filter(p => !trail.includes(p));
        if (!choices.length) break;
        trail.push(choices[Math.floor(random() * choices.length)]);
      }
      return trail.map(coord);
    }
    for (const i of uplinks) {
      const angle = spokeAngle(i);
      const cos = Math.cos(angle), sin = Math.sin(angle);
      const port = (x, y = 0) => ({x: cx + radius * (x * cos - y * sin), y: cy + radius * (x * sin + y * cos)});
      const tip = port(1.57, -.14);
      const outward = nodes.filter(p => (p.x - tip.x) * cos + (p.y - tip.y) * sin > 0 && clearsGlobe(tip, p));
      const nearest = outward.sort((a, b) => Math.hypot(a.x - tip.x, a.y - tip.y) - Math.hypot(b.x - tip.x, b.y - tip.y))[0];
      if (nearest) routes.push([coord(port(1.19)), coord(port(1.43)), coord(tip), ...walk(nearest, 4)]);
    }
    // Local exchanges continue throughout the document, independently of the globe.
    for (let row = 1; row < rows; row += 2) {
      const candidates = peers[row].filter(p => p.links.length > 1 && p.x > 0 && p.x < bounds.width);
      if (candidates.length) routes.push(walk(candidates[Math.floor(random() * candidates.length)], 4));
    }
    svg('path', {d: faces.join(''), class: 'peer-face'});
    svg('path', {d: edges.join(''), class: 'peer-links'});
    for (const route of routes) {
      const d = 'M' + route.join('L');
      svg('path', {d, class: 'peer-route'});
      const packet = svg('g', {});
      svg('circle', {r: 5, opacity: .12, class: 'peer-packet'}, packet);
      svg('circle', {r: 1.7, class: 'peer-packet'}, packet);
      svg('animateMotion', {path: d, dur: (6 + random() * 4) + 's',
        begin: -random() * 10 + 's', repeatCount: 'indefinite', calcMode: 'paced'}, packet);
    }
    for (const peer of nodes) {
      if (peer.links.length >= 4 && random() < .44) {
        svg('circle', {cx: peer.x, cy: peer.y, r: 4.3, class: 'peer-relay'});
      }
      svg('circle', {cx: peer.x, cy: peer.y, r: 1.8, class: 'peer-node'});
    }
    network.replaceChildren(fragment);
    updateNetworkPlayback();
  }

  function updateNetworkPlayback() {
    if (reduced.matches || document.hidden) network.pauseAnimations();
    else network.unpauseAnimations();
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    const compact = window.matchMedia('(max-width: 590px)').matches;
    radius = Math.min(height * .36, width * .153, 164);
    centerX = width * (compact ? .81 : .78);
    centerY = height * (compact ? .53 : .49);
    draw();
    layoutNetwork();
  }

  let visible = false, frame = 0, last = 0;
  function animate(now) {
    if (!last) last = now;
    if (now - last >= 1000 / 30) {
      elapsed += Math.min(now - last, 100) / 1000;
      last = now;
      draw();
    }
    frame = requestAnimationFrame(animate);
  }
  function updatePlayback() {
    updateNetworkPlayback();
    cancelAnimationFrame(frame);
    last = 0;
    if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(animate);
  }

  resize();
  const layout = new ResizeObserver(resize);
  layout.observe(canvas);
  layout.observe(network);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updatePlayback();
  }).observe(canvas);
  reduced.addEventListener('change', updatePlayback);
  document.addEventListener('visibilitychange', updatePlayback);
})();
