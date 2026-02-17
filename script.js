// ============================================
// MEAT GRILL — Animations + Dynamic rendering
// ============================================
(function() {

  // ---- Preview mode (admin panel) ----
  if (new URLSearchParams(location.search).has('preview')) {
    try {
      const preview = JSON.parse(localStorage.getItem('MENU_DATA_PREVIEW'));
      if (preview) Object.assign(MENU_DATA, preview);
    } catch(e) {}
  }

  const cats = MENU_DATA.categories;

  // ---- Render menu ----
  const tabsEl = document.getElementById('menu-tabs');
  const contentEl = document.getElementById('menu-content');

  function buildCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-item' + (item.img ? ' has-img' : '');
    card.innerHTML = `
      ${item.img ? `<div class="menu-item-img"><img src="${item.img}" alt="${item.name}" loading="lazy" /></div>` : ''}
      <div class="menu-item-body">
        <div class="menu-item-header">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.desc}</p>
        ${item.badge ? `<span class="badge${item.badgeType ? ' ' + item.badgeType : ''}">${item.badge}</span>` : ''}
      </div>
    `;
    return card;
  }

  // "Tous" tab
  const allBtn = document.createElement('button');
  allBtn.className = 'tab active';
  allBtn.dataset.tab = 'all';
  allBtn.textContent = '✨ Tous';
  tabsEl.appendChild(allBtn);

  // All items grid
  const allGrid = document.createElement('div');
  allGrid.className = 'menu-category';
  allGrid.dataset.category = 'all';
  cats.forEach(cat => cat.items.forEach(item => allGrid.appendChild(buildCard(item))));
  contentEl.appendChild(allGrid);

  // Per-category tabs & grids
  cats.forEach((cat) => {
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.dataset.tab = cat.id;
    btn.textContent = cat.label;
    tabsEl.appendChild(btn);

    const grid = document.createElement('div');
    grid.className = 'menu-category hidden';
    grid.dataset.category = cat.id;
    cat.items.forEach(item => grid.appendChild(buildCard(item)));
    contentEl.appendChild(grid);
  });

  // ---- Tab switching with transition ----
  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;

    tabsEl.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const id = tab.dataset.tab;

    contentEl.querySelectorAll('.menu-category').forEach(c => {
      if (c.dataset.category === id) {
        c.classList.remove('hidden');
        // Re-trigger card animations
        c.querySelectorAll('.menu-item').forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(16px)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, i * 60);
        });
      } else {
        c.classList.add('hidden');
      }
    });
  });

  // ---- Mobile nav ----
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  // ---- Highlight today ----
  const today = new Date().getDay();
  document.querySelectorAll('.hours-row').forEach(row => {
    if (parseInt(row.dataset.day) === today) row.classList.add('today');
  });

  // ---- Open/closed status ----
  function getStatus() {
    const now = new Date();
    const day = now.getDay();
    const time = now.getHours() * 60 + now.getMinutes();
    if (day === 4) return { open: false, text: "Fermé aujourd'hui (jeudi)" };
    if (time >= 660 && time < 840) return { open: true, text: 'Ouvert maintenant 🟢' };
    if (time >= 1080 && time < 1320) return { open: true, text: 'Ouvert maintenant 🟢' };
    if (time < 660) return { open: false, text: 'Ouvre à 11h' };
    if (time < 1080) return { open: false, text: 'Reprend à 18h' };
    return { open: false, text: 'Fermé — à demain !' };
  }
  const badge = document.getElementById('status-badge');
  const s = getStatus();
  badge.textContent = s.text;
  badge.className = 'hours-status ' + (s.open ? 'open' : 'closed');

  // ---- Nav scroll effect ----
  const nav = document.getElementById('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    lastScroll = window.scrollY;
  }, { passive: true });

  // ---- Scroll reveal (Intersection Observer) ----
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });
  reveals.forEach(el => observer.observe(el));

  // ---- Counter animation ----
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // ---- Smooth parallax on hero dot grid ----
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `translateY(${y * 0.3}px)`;
      }
    }, { passive: true });
  }

})();
