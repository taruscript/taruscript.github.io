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
  for (let lat = -60; lat <= 60; lat += 30) grid.push(sample(144, t => onGlobe(t * 360, lat)));
  for (let lon = 0; lon < 360; lon += 30) grid.push(sample(72, t => onGlobe(lon, t * 180 - 90)));

  const hubs = [[139.7,35.7],[103.8,1.4],[72.9,19.1],[2.4,48.9],[151.2,-33.9],
    [55.3,25.2],[37,-1.3],[-122.4,37.8],[-74,40.7],[-46.6,-23.6]].map(([lon, lat]) => onGlobe(lon, lat));
  const routes = [[0,1],[0,4],[1,2],[1,4],[2,5],[3,5],[5,6],[3,8],[7,8],[8,9],[7,0]].map(([a,b]) =>
    sample(64, t => hubs[a].clone().lerp(hubs[b], t).normalize().multiplyScalar(1 + .13 * Math.sin(Math.PI * t))));

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
  const spokeEnd = lane => 2.22 + (lane % 3) * .22;
  function orientGlobe(q, time) {
    return q.setFromAxisAngle(up, -91 * rad + time * .045).premultiply(pitch).premultiply(tilt);
  }

  function perimeter(time) {
    for (let i = 0; i < 8; i++) {
      if (uplinks.includes(i)) continue;
      ctx.save();
      ctx.rotate(spokeAngle(i));
      const end = spokeEnd(i);
      ctx.beginPath();
      ctx.moveTo(1.19, 0);
      ctx.lineTo(1.43, 0);
      ctx.lineTo(1.57, -.14);
      ctx.lineTo(end, -.14);
      ctx.strokeStyle = 'rgba(108,195,191,.20)';
      ctx.stroke();
      ctx.fillStyle = 'rgba(129,221,208,.48)';
      ctx.fillRect(end, -.15, .023, .023);
      ctx.restore();
    }
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

  // A repeating illustrative wave. Shorter launch intervals create pressure without flashing.
  const events = [
    {at: 0, lane: 5}, {at: 2.8, lane: 0}, {at: 4.8, lane: 6},
    {at: 6.2, lane: 2}, {at: 7.2, lane: 5, breach: true}, {at: 7.9, lane: 7},
    {at: 8.5, lane: 0}, {at: 9, lane: 2}, {at: 9.5, lane: 6},
    {at: 12.8, lane: 5}, {at: 15.6, lane: 7}
  ];
  const impactRotation = new Quaternion();

  function incoming(lane, progress) {
    const angle = spokeAngle(lane);
    const x = spokeEnd(lane) + (1.19 - spokeEnd(lane)) * progress;
    const y = -Math.max(0, Math.min(.14, x - 1.43));
    return {x: x * Math.cos(angle) - y * Math.sin(angle), y: x * Math.sin(angle) + y * Math.cos(angle)};
  }

  function trace(a, b, color) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  function breachedNode(port, age, time) {
    // Select at impact time so the endpoint stays attached to the same rotating hub.
    orientGlobe(impactRotation, time - age);
    let nearest, distance = Infinity;
    for (const hub of hubs) {
      const p = projected.copy(hub).applyQuaternion(impactRotation);
      if (p.z < .25) continue;
      const d = Math.hypot(p.x - port.x, -p.y - port.y);
      if (d < distance) { nearest = hub; distance = d; }
    }
    if (!nearest) return;
    const p = projected.copy(nearest).applyQuaternion(rotation);
    const travel = Math.min(1, age / .9);
    const x = port.x + (p.x - port.x) * travel;
    const y = port.y + (-p.y - port.y) * travel;
    ctx.globalAlpha = Math.min(1, (3 - age) / .9);
    trace(port, {x, y}, 'rgba(255,71,85,.64)');
    spot(x, y, .023, '#ff495b');
    if (travel === 1) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 4);
      ctx.strokeStyle = '#ff6774';
      ctx.strokeRect(-.045, -.045, .09, .09);
      ctx.restore();
    }
  }

  function drawIncidents(time) {
    const cycle = 18;
    const approach = 1.8;
    ctx.save();
    ctx.lineWidth = 1.5 / radius;
    for (const event of events) {
      const age = ((time + 1.3 - event.at) % cycle + cycle) % cycle;
      const afterImpact = age - approach;
      if (afterImpact >= (event.breach ? 3 : 1)) continue;
      ctx.globalAlpha = 1;
      const progress = Math.min(1, age / approach);
      const head = incoming(event.lane, progress);
      if (afterImpact < 0) {
        const tail = incoming(event.lane, Math.max(0, progress - .13));
        ctx.globalAlpha = Math.min(1, age / .24);
        trace(tail, head, '#e6a35e');
        spot(head.x, head.y, .019, '#ffd494');
      } else if (event.breach) {
        breachedNode(head, afterImpact, time);
      } else {
        ctx.globalAlpha = 1 - afterImpact;
        const angle = spokeAngle(event.lane);
        ring(0, 0, 1.19, '#a4ffda', angle - .105, angle + .105);
        ring(head.x, head.y, .025 + .095 * afterImpact, '#91ebcd');
      }
    }
    ctx.restore();
  }

  let width, height, dpr, radius, centerX, centerY;
  let elapsed = reduced.matches ? 9 : 0;
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
    perimeter(elapsed);

    const sphere = ctx.createRadialGradient(-.36, -.45, .06, .02, .1, 1.14);
    sphere.addColorStop(0, '#163e4b');
    sphere.addColorStop(.67, '#0e2c3a');
    sphere.addColorStop(.94, '#0a1e30');
    sphere.addColorStop(1, '#20505a');
    spot(0, 0, 1, sphere);
    orientGlobe(rotation, elapsed);
    for (const line of grid) path(line, 'rgba(104,191,192,.17)');
    ctx.fillStyle = '#68cbb4';
    for (const point of dots) {
      const p = projected.copy(point).applyQuaternion(rotation);
      if (p.z <= 0) continue;
      const size = (.005 + .006 * p.z);
      ctx.globalAlpha = .34 + .62 * p.z;
      ctx.fillRect(p.x - size / 2, -p.y - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
    ring(0, 0, 1, 'rgba(114,228,214,.52)');
    routes.forEach((route, i) => {
      path(route, 'rgba(151,246,220,.56)');
      const index = Math.floor(((elapsed * .125 + i * .37) % 1) * (route.length - 1));
      const p = projected.copy(route[index]).applyQuaternion(rotation);
      if (p.z > 0) spot(p.x, -p.y, .011, '#dafff0');
    });
    for (const hub of hubs) {
      const p = projected.copy(hub).applyQuaternion(rotation);
      if (p.z <= 0) continue;
      ring(p.x, -p.y, .035, 'rgba(170,255,224,.68)');
      spot(p.x, -p.y, .018, '#d2ffe9');
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
