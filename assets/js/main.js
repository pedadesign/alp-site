/* Applied Linguistics Press — main.js */

(function () {
  'use strict';

  /* ── Active nav link ─────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Book card click → detail page ──────────────────────── */
  document.querySelectorAll('[data-book-href]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') return; // let inline links through
      const href = card.dataset.bookHref;
      if (href) window.location.href = href;
    });
  });

  /* ── Catalog filter tabs ─────────────────────────────────── */
  const filterTabs = document.querySelectorAll('[data-filter-tab]');
  const bookCards  = document.querySelectorAll('[data-series]');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      const filter = tab.dataset.filterTab;
      bookCards.forEach(function (card) {
        const show = filter === 'all'
          || card.dataset.series === filter
          || card.dataset.year  === filter
          || card.dataset.type  === filter;
        card.closest('.book-card-wrap').style.display = show ? '' : 'none';
      });
      updateResultCount();
    });
  });

  /* ── Catalog search ──────────────────────────────────────── */
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const q = searchInput.value.toLowerCase().trim();
      bookCards.forEach(function (card) {
        const wrap = card.closest('.book-card-wrap');
        if (!wrap) return;
        const text = card.dataset.search || '';
        wrap.style.display = (q === '' || text.includes(q)) ? '' : 'none';
      });
      updateResultCount();
    });
  }

  function updateResultCount () {
    const counter = document.getElementById('result-count');
    if (!counter) return;
    const visible = document.querySelectorAll('.book-card-wrap:not([style*="none"])').length;
    counter.textContent = visible;
  }

  /* ── Sidebar checkbox filters ────────────────────────────── */
  document.querySelectorAll('.sidebar-checkbox').forEach(function (cb) {
    cb.addEventListener('change', applyCheckboxFilters);
  });

  function applyCheckboxFilters () {
    const checked = {};
    document.querySelectorAll('.sidebar-checkbox:checked').forEach(function (cb) {
      const group = cb.dataset.group;
      if (!checked[group]) checked[group] = [];
      checked[group].push(cb.dataset.value);
    });
    bookCards.forEach(function (card) {
      const wrap = card.closest('.book-card-wrap');
      if (!wrap) return;
      let show = true;
      Object.keys(checked).forEach(function (group) {
        if (checked[group].length === 0) return;
        const cardVal = card.dataset[group];
        if (!checked[group].includes(cardVal)) show = false;
      });
      wrap.style.display = show ? '' : 'none';
    });
    updateResultCount();
  }

  /* ── Smooth scroll for in-page anchors ──────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
