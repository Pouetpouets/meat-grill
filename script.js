// ============================================
// Render menu from MENU_DATA (menu-data.js)
// ============================================
(function() {
  // Support preview from admin panel
  if (new URLSearchParams(location.search).has('preview')) {
    try {
      const preview = JSON.parse(localStorage.getItem('MENU_DATA_PREVIEW'));
      if (preview) Object.assign(MENU_DATA, preview);
    } catch(e) {}
  }

  const info = MENU_DATA.info;
  const cats = MENU_DATA.categories;

  // Hero
  document.getElementById('hero-tag').textContent = `COPPONEX · DEPUIS ${info.since}`;
  document.getElementById('hero-title').innerHTML = `${info.tagline.split('&')[0]}<br><span class="accent">&${info.tagline.split('&')[1] || ' grillades'}</span>`;
  document.getElementById('hero-sub').textContent = info.subtitle;
  if (info.phone) {
    document.getElementById('hero-phone').href = `tel:${info.phone}`;
  }

  // Contact
  document.getElementById('contact-address').innerHTML = `<strong>${info.address}</strong><br>${info.city}`;

  // Menu tabs
  const tabsEl = document.getElementById('menu-tabs');
  const contentEl = document.getElementById('menu-content');

  cats.forEach((cat, i) => {
    // Tab
    const btn = document.createElement('button');
    btn.className = 'tab' + (i === 0 ? ' active' : '');
    btn.dataset.tab = cat.id;
    btn.textContent = cat.label;
    tabsEl.appendChild(btn);

    // Category grid
    const grid = document.createElement('div');
    grid.className = 'menu-category' + (i !== 0 ? ' hidden' : '');
    grid.dataset.category = cat.id;

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item';
      card.innerHTML = `
        <div class="menu-item-header">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.desc}</p>
        ${item.badge ? `<span class="badge${item.badgeType ? ' ' + item.badgeType : ''}">${item.badge}</span>` : ''}
      `;
      grid.appendChild(card);
    });

    contentEl.appendChild(grid);
  });

  // Tab clicks
  tabsEl.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const id = tab.dataset.tab;
      contentEl.querySelectorAll('.menu-category').forEach(c => {
        c.classList.toggle('hidden', c.dataset.category !== id);
      });
    });
  });

  // Mobile nav
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  // Highlight today
  const today = new Date().getDay();
  document.querySelectorAll('.hours-row').forEach(row => {
    if (parseInt(row.dataset.day) === today) row.classList.add('today');
  });

  // Open/closed badge
  function getStatus() {
    const now = new Date();
    const day = now.getDay();
    const time = now.getHours() * 60 + now.getMinutes();
    if (day === 4) return { open: false, text: "Fermé aujourd'hui (jeudi)" };
    const lunch = time >= 660 && time < 840;
    const dinner = time >= 1080 && time < 1320;
    if (lunch || dinner) return { open: true, text: 'Ouvert maintenant 🟢' };
    if (time < 660) return { open: false, text: 'Ouvre à 11h' };
    if (time < 1080) return { open: false, text: 'Ouvre à 18h' };
    return { open: false, text: 'Fermé — on rouvre demain à 11h' };
  }
  const badge = document.getElementById('status-badge');
  const s = getStatus();
  badge.textContent = s.text;
  badge.className = 'hours-status ' + (s.open ? 'open' : 'closed');

  // Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 50 ? '0 1px 8px rgba(0,0,0,0.06)' : 'none';
  }, { passive: true });
})();
