/* Applied Linguistics Press — components.js
   Injects shared topbar, nav, and footer into every page.
   Call initComponents() after DOM ready.
*/

(function () {
  'use strict';

  /* ── Determine relative path prefix ─────────────────────── */
  const isSubpage = window.location.pathname.includes('/pages/');
  const root = isSubpage ? '../' : './';

  /* ── Top Banner ──────────────────────────────────────────── */
  const TOPBAR = `
<div class="topbar">
  <div class="topbar-mission">
    <span>Scholar-led</span>
    <div class="topbar-dot"></div>
    <span>Diamond Open Access</span>
    <div class="topbar-dot"></div>
    <span>Free to read &amp; free to publish</span>
    <div class="topbar-dot"></div>
    <span>Est. 2023 · Northern Arizona University</span>
  </div>
  <div class="topbar-links">
    <a href="https://twitter.com/AppLingPress" target="_blank" rel="noopener">Twitter/X</a>
    <a href="https://youtube.com/@appliedlinguisticspress" target="_blank" rel="noopener">YouTube</a>
    <a href="https://open.spotify.com/show/4MpDszEI1QlzgbyS41ZSkU" target="_blank" rel="noopener">Podcast</a>
    <a href="${root}pages/contact.html">Contact</a>
  </div>
</div>`;

  /* ── Navigation ──────────────────────────────────────────── */
  const NAV = `
<nav class="site-nav">
  <div class="nav-inner">
    <a class="nav-logo" href="${root}index.html">
      <img class="nav-logo-img" src="${root}assets/images/alp-logo.svg" alt="Applied Linguistics Press logo">
      <div class="nav-logo-text">
        <span class="name">Applied Linguistics Press</span>
        <span class="sub">Open Access · Est. 2023</span>
      </div>
    </a>
    <div class="nav-links">
      <a href="${root}index.html">Home</a>
      <a href="${root}pages/catalog.html">Catalog</a>
      <a href="${root}pages/series.html">Series</a>
      <a href="${root}pages/about.html">About</a>
      <a href="${root}pages/publish.html">Publish</a>
      <a href="${root}pages/faq.html">FAQ</a>
      <a href="${root}pages/resources.html">Resources</a>
      <a class="nav-cta" href="${root}pages/publish.html">Submit a Proposal</a>
    </div>
  </div>
</nav>`;

  /* ── Footer ──────────────────────────────────────────────── */
  const FOOTER = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="logo-wrap">
        <img src="${root}assets/images/alp-logo.svg" alt="ALP" style="height:36px;width:auto;">
        <span class="brand-name">Applied Linguistics Press</span>
      </div>
      <p>Scholar-led, diamond open access academic publisher. No author fees. No reader fees. Founded 2023 and operated entirely by volunteers.</p>
      <div class="footer-social">
        <a class="social-btn" href="https://twitter.com/AppLingPress" target="_blank" rel="noopener" aria-label="Twitter/X">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a class="social-btn" href="https://youtube.com/@appliedlinguisticspress" target="_blank" rel="noopener" aria-label="YouTube">
          <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a class="social-btn" href="https://open.spotify.com/show/4MpDszEI1QlzgbyS41ZSkU" target="_blank" rel="noopener" aria-label="Spotify Podcast">
          <svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Catalog</h4>
      <a href="${root}pages/catalog.html">All titles</a>
      <a href="${root}pages/catalog.html?filter=2025">2025 releases</a>
      <a href="${root}pages/catalog.html?filter=2024">2024 releases</a>
      <a href="${root}pages/series.html">By series</a>
    </div>
    <div class="footer-col">
      <h4>Publish</h4>
      <a href="${root}pages/publish.html">Submit a proposal</a>
      <a href="${root}pages/publish.html#guidelines">Author guidelines</a>
      <a href="${root}pages/publish.html#review">Review process</a>
      <a href="${root}pages/faq.html">FAQ</a>
    </div>
    <div class="footer-col">
      <h4>About</h4>
      <a href="${root}pages/about.html">About ALP</a>
      <a href="${root}pages/about.html#board">Advisory board</a>
      <a href="${root}pages/resources.html">OS Resources</a>
      <a href="${root}pages/grad-programs.html">Grad programs</a>
      <a href="${root}pages/support.html">Support us</a>
      <a href="${root}pages/contact.html">Contact</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Applied Linguistics Press · Content licensed <a href="https://creativecommons.org/licenses/by/4.0/" style="color:rgba(255,255,255,.55);text-decoration:underline;" target="_blank">CC BY 4.0</a> unless otherwise noted</span>
    <div class="oa-badge">
      <div class="oa-dot"></div>
      <span>Diamond Open Access Publisher</span>
    </div>
  </div>
</footer>`;

  /* ── Inject ───────────────────────────────────────────────── */
  function initComponents () {
    const topbarSlot = document.getElementById('topbar-slot');
    const navSlot    = document.getElementById('nav-slot');
    const footerSlot = document.getElementById('footer-slot');
    if (topbarSlot) topbarSlot.innerHTML = TOPBAR;
    if (navSlot)    navSlot.innerHTML    = NAV;
    if (footerSlot) footerSlot.innerHTML = FOOTER;

    /* Set active nav link after injection */
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      const href = a.getAttribute('href');
      if (!href) return;
      const hrefFile = href.split('/').pop();
      const pathFile = path.split('/').pop() || 'index.html';
      if (hrefFile === pathFile) a.classList.add('active');
    });
  }

  document.addEventListener('DOMContentLoaded', initComponents);
  window.initComponents = initComponents;
})();
