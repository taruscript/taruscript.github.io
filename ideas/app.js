(() => {
  'use strict';
  const quadrants = ['AC','AD','BC','BD'];
  const labels = {
    AC: 'AIで守る × 技術', AD: 'AIで守る × 制度・運用・政策',
    BC: 'AIとの共生 × 技術', BD: 'AIとの共生 × 制度・運用・政策'
  };
  const searchInput = document.getElementById('search-input');
  const resultCounter = document.getElementById('result-counter');
  const drawer = document.getElementById('drawer');
  const scrim = document.getElementById('drawer-scrim');
  const drawerScroll = document.getElementById('drawer-scroll');
  const toast = document.getElementById('toast');
  let currentFilter = 'all';
  let currentTopicId = null;
  let lastTrigger = null;
  let toastTimer;

  const pad = id => String(id).padStart(2, '0');
  const normalize = input => input.toLocaleLowerCase('ja').normalize('NFKC');
  const keyFor = topic => normalize([
    topic.title, topic.short, topic.summary, topic.technology.name, topic.technology.description,
    topic.prompt, topic.security.example, topic.security.discussion, topic.deliverable, ...topic.tags
  ].join(' '));

  function makePoint(topic) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-point';
    button.dataset.topic = pad(topic.id);
    button.setAttribute('aria-label', `テーマ${pad(topic.id)}　${topic.title}　詳細を開く`);
    button.textContent = pad(topic.id);
    const title = document.createElement('span');
    title.className = 'point-title';
    title.textContent = topic.short;
    button.append(title);
    button.addEventListener('click', () => { lastTrigger = button; openTopic(topic.id); });
    return button;
  }

  const plots = quadrants.map(quad => {
    const grid = document.getElementById(`topics-${quad}`);
    const points = topics.filter(topic => topic.quadrant === quad).map(topic => {
      const slot = document.createElement('li');
      slot.style.left = `${topic.position.x}%`;
      slot.style.top = `${topic.position.y}%`;
      const button = makePoint(topic);
      slot.append(button);
      grid.append(slot);
      return {slot, keywords: keyFor(topic)};
    });
    return {quad, points, counter: document.getElementById(`count-${quad}`)};
  });

  function renderMatrix() {
    const query = normalize(searchInput.value.trim());
    let total = 0;
    for (const {quad, points, counter} of plots) {
      const includeQuadrant = currentFilter === 'all' || quad.includes(currentFilter);
      let count = 0;
      for (const {slot, keywords} of points) {
        const matches = includeQuadrant && keywords.includes(query);
        slot.setAttribute('aria-hidden', String(!matches));
        if (matches) count++;
      }
      counter.textContent = `${count} / ${points.length}`;
      total += count;
    }
    resultCounter.innerHTML = `<strong>${total}</strong> / ${topics.length} 件`;
    document.getElementById('matrix-empty').hidden = total !== 0;
  }

  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll('.filter-button').forEach(btn => btn.setAttribute('aria-pressed', String(btn === button)));
      renderMatrix();
    });
  });
  searchInput.addEventListener('input', renderMatrix);

  function showTopic(id, options = {}) {
    const topic = topics.find(t => t.id === Number(id));
    if (!topic) return false;
    const wasOpen = drawer.classList.contains('is-open');
    currentTopicId = topic.id;
    drawer.dataset.quad = topic.quadrant;
    document.getElementById('drawer-number').textContent = pad(topic.id);
    document.getElementById('drawer-quadrant').textContent = `${topic.quadrant[0]} × ${topic.quadrant[1]}`;
    document.getElementById('drawer-kind').textContent = labels[topic.quadrant];
    document.getElementById('drawer-title').textContent = topic.title;
    document.getElementById('drawer-summary').textContent = topic.summary;
    document.getElementById('drawer-technology').textContent = topic.technology.name;
    document.getElementById('drawer-technology-description').textContent = topic.technology.description;
    document.getElementById('drawer-security').open = false;
    document.getElementById('drawer-attack-example').textContent = topic.security.example;
    document.getElementById('drawer-security-discussion').textContent = topic.security.discussion;
    document.getElementById('drawer-hint').open = false;
    document.getElementById('drawer-prompt').textContent = topic.prompt;
    document.getElementById('drawer-deliverable').textContent = topic.deliverable;
    document.getElementById('drawer-position').textContent = `${topic.id} / 32`;
    drawerScroll.scrollTop = 0;
    drawer.classList.add('is-open'); scrim.classList.add('is-open');
    drawer.setAttribute('aria-hidden','false');
    document.body.classList.add('drawer-open');
    if (!wasOpen) document.getElementById('drawer-close').focus({preventScroll: true});
    if (options.updateUrl !== false) {
      const path = `${location.pathname}${location.search}#topic-${pad(topic.id)}`;
      try {
        if (wasOpen) history.replaceState(history.state, '', path);
        else history.pushState({modalFromPage:true}, '', path);
      } catch (_) { /* Some sandboxed previews cannot update browser history. */ }
    }
    return true;
  }

  function openTopic(id) { showTopic(id, {updateUrl:true}); }
  function hideDrawer() {
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open'); scrim.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open'); currentTopicId = null;
    if (lastTrigger && lastTrigger.isConnected) lastTrigger.focus({preventScroll:true});
  }
  function closeTopic() {
    if (history.state && history.state.modalFromPage) {
      history.back();
    } else {
      try { history.replaceState(null, '', `${location.pathname}${location.search}`); }
      catch (_) { /* Closing must still work in sandboxed previews. */ }
      hideDrawer();
    }
  }
  function syncFromUrl() {
    const match = /^#topic-(\d{1,2})$/.exec(location.hash);
    if (match && showTopic(Number(match[1]), {updateUrl:false})) return;
    hideDrawer();
  }
  window.addEventListener('popstate', syncFromUrl);
  window.addEventListener('hashchange', syncFromUrl);
  document.getElementById('drawer-close').addEventListener('click', closeTopic);
  scrim.addEventListener('click', closeTopic);
  document.getElementById('prev-topic').addEventListener('click', () => openTopic(currentTopicId === 1 ? 32 : currentTopicId - 1));
  document.getElementById('next-topic').addEventListener('click', () => openTopic(currentTopicId === 32 ? 1 : currentTopicId + 1));

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  }
  document.getElementById('copy-topic-link').addEventListener('click', async () => {
    const url = `${location.href.split('#')[0]}#topic-${pad(currentTopicId)}`;
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(url);
      showToast('テーマのURLをコピーしました');
    } catch (_) {
      const input = document.createElement('textarea');
      input.value = url;
      input.className = 'clipboard-input';
      document.body.append(input); input.select();
      const copied = document.execCommand && document.execCommand('copy');
      input.remove();
      if (copied) showToast('テーマのURLをコピーしました');
      else window.prompt('こちらのURLをコピーしてください', url);
    }
  });

  document.addEventListener('keydown', event => {
    if (!drawer.classList.contains('is-open')) return;
    if (event.key === 'Escape') { event.preventDefault(); closeTopic(); return; }
    if (event.key !== 'Tab') return;
    const focusables = [...drawer.querySelectorAll('button:not([disabled]), summary, a[href], input:not([disabled])')];
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length-1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  renderMatrix();
  syncFromUrl();
})();
