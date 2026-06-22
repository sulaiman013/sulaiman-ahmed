/* ===========================================================
   IC Insightful BOT — Architecture Site
   Init: Lucide icons + Mermaid v11 + theme toggle + nav
   =========================================================== */

(function () {
  'use strict';

  const root = document.documentElement;

  /* ---------- LUCIDE ---------- */
  function renderLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      try { window.lucide.createIcons({ attrs: { 'stroke-width': 2 } }); }
      catch (e) { console.warn('lucide failed:', e); }
    }
  }

  /* ---------- THEME ---------- */
  // Light is the default. Always set the attribute explicitly so the
  // CSS variable blocks (:root, html[data-theme="light"], html[data-theme="dark"])
  // resolve deterministically — never rely on attribute absence.
  const stored = localStorage.getItem('ic-theme');
  root.setAttribute('data-theme', stored === 'dark' ? 'dark' : 'light');

  const toggle = document.getElementById('themeToggle');

  function isDark() {
    return root.getAttribute('data-theme') === 'dark';
  }

  function setToggleIcon() {
    if (!toggle) return;
    toggle.innerHTML = `<i data-lucide="${isDark() ? 'moon' : 'sun'}"></i>`;
    renderLucide();
  }

  /* ---------- MERMAID ---------- */
  // Cache original source so we can re-render on theme switch.
  // (Mermaid replaces the <pre> contents with SVG — we need the source back to re-init.)
  function cacheMermaidSources() {
    document.querySelectorAll('pre.mermaid').forEach((el, i) => {
      if (!el.dataset.src) el.dataset.src = el.textContent.trim();
      if (!el.id) el.id = 'm-' + i;
    });
  }

  function resetMermaidBlocks() {
    document.querySelectorAll('pre.mermaid').forEach(el => {
      if (el.dataset.src) {
        el.textContent = el.dataset.src;
        el.removeAttribute('data-processed');
        el.classList.remove('is-rendered');
      }
    });
  }

  function initMermaid() {
    if (!window.mermaid) return;
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: isDark() ? 'dark' : 'default',
      fontFamily: 'Inter, system-ui, sans-serif',
      flowchart: {
        curve: 'basis',
        padding: 16,
        nodeSpacing: 50,
        rankSpacing: 60,
        htmlLabels: true,
        useMaxWidth: true,
        diagramPadding: 14
      },
      sequence: {
        actorMargin: 56,
        boxMargin: 12,
        messageMargin: 36,
        wrap: true,
        useMaxWidth: true,
        actorFontSize: 13,
        noteFontSize: 12,
        messageFontSize: 13
      }
    });
  }

  async function renderMermaid() {
    if (!window.mermaid) {
      console.warn('mermaid not loaded yet');
      return;
    }
    cacheMermaidSources();
    resetMermaidBlocks();
    initMermaid();
    try {
      await window.mermaid.run({ querySelector: 'pre.mermaid' });
      document.querySelectorAll('pre.mermaid').forEach(el => el.classList.add('is-rendered'));
    } catch (err) {
      // fall back: show raw source (better than blank boxes)
      document.querySelectorAll('pre.mermaid').forEach(el => el.classList.add('is-rendered'));
      console.warn('mermaid run() error:', err);
    }
  }

  window.__renderMermaid = renderMermaid;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    localStorage.setItem('ic-theme', theme);
    setToggleIcon();
    renderMermaid().then(() => { if (window.__wireLightbox) window.__wireLightbox(); });
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      setTheme(isDark() ? 'light' : 'dark');
    });
  }

  /* ---------- NAV HIGHLIGHT ---------- */
  const navLinks = Array.from(document.querySelectorAll('.topnav a'));
  const sectionMap = navLinks
    .map(a => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      return el ? { a, el } : null;
    })
    .filter(Boolean);

  function highlightNav() {
    const scrollPos = window.scrollY + 140;
    let active = null;
    for (const { a, el } of sectionMap) {
      if (el.offsetTop <= scrollPos) active = a;
    }
    navLinks.forEach(a => a.classList.toggle('active', a === active));
  }

  if (sectionMap.length) {
    let raf = 0;
    window.addEventListener('scroll', () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => { raf = 0; highlightNav(); });
    }, { passive: true });
    highlightNav();
  }

  /* ---------- LIGHTBOX ---------- */
  const lb = {
    el: null, stage: null, canvas: null, level: null,
    scale: 1, tx: 0, ty: 0,
    minScale: 0.3, maxScale: 6,
    dragging: false, dragStartX: 0, dragStartY: 0, dragOrigX: 0, dragOrigY: 0,
    sourceWrap: null
  };

  function lbApply(noAnim) {
    if (!lb.canvas) return;
    if (noAnim) lb.canvas.classList.add('no-anim'); else lb.canvas.classList.remove('no-anim');
    lb.canvas.style.transform =
      `translate(calc(-50% + ${lb.tx}px), calc(-50% + ${lb.ty}px)) scale(${lb.scale})`;
    if (lb.level) lb.level.textContent = Math.round(lb.scale * 100) + '%';
  }

  function lbReset() {
    lb.scale = 1; lb.tx = 0; lb.ty = 0;
    lbApply(false);
  }

  function lbZoom(delta, cx, cy) {
    const prev = lb.scale;
    let next = prev * (delta > 0 ? 1.15 : 1 / 1.15);
    next = Math.max(lb.minScale, Math.min(lb.maxScale, next));
    if (next === prev) return;
    if (cx !== undefined && lb.stage) {
      // zoom toward cursor
      const rect = lb.stage.getBoundingClientRect();
      const ox = cx - rect.left - rect.width / 2;
      const oy = cy - rect.top - rect.height / 2;
      const ratio = next / prev;
      lb.tx = ox - (ox - lb.tx) * ratio;
      lb.ty = oy - (oy - lb.ty) * ratio;
    }
    lb.scale = next;
    lbApply(true);
  }

  function lbOpen(wrap) {
    if (!lb.el) {
      lb.el = document.getElementById('lightbox');
      lb.stage = document.getElementById('lightboxStage');
      lb.canvas = document.getElementById('lightboxCanvas');
      lb.level = document.getElementById('lbZoomLevel');
    }
    if (!lb.el || !lb.canvas) return;
    const svg = wrap.querySelector('pre.mermaid svg');
    if (!svg) {
      console.warn('no SVG to expand yet');
      return;
    }
    lb.sourceWrap = wrap;

    // Use the SVG's INTRINSIC viewBox dimensions, not the page-constrained
    // rendered size. Mermaid SVGs have viewBox="0 0 W H" where W/H are the
    // natural layout dimensions — text + foreignObject sizing assume those.
    // Cloning at a smaller width clips foreignObject HTML content.
    let naturalW, naturalH;
    if (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) {
      naturalW = svg.viewBox.baseVal.width;
      naturalH = svg.viewBox.baseVal.height;
    } else {
      const r = svg.getBoundingClientRect();
      naturalW = r.width || 1000;
      naturalH = r.height || 600;
    }

    const cloned = svg.cloneNode(true);
    // strip Mermaid's max-width style (it pins to viewBox-width, but we want
    // freedom to scale via canvas transform)
    cloned.removeAttribute('style');
    // explicit attributes win over any inherited CSS
    cloned.setAttribute('width', naturalW);
    cloned.setAttribute('height', naturalH);
    cloned.style.display = 'block';
    cloned.style.maxWidth = 'none';
    cloned.style.maxHeight = 'none';

    lb.canvas.innerHTML = '';
    lb.canvas.appendChild(cloned);

    // Open first so stage has its real dimensions when we measure.
    lb.el.classList.add('is-open');
    lb.el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');

    // Compute fit-scale and apply on next frame (after layout).
    requestAnimationFrame(() => {
      const stageRect = lb.stage.getBoundingClientRect();
      const padX = 100, padY = 100;
      const fitW = (stageRect.width  - padX) / naturalW;
      const fitH = (stageRect.height - padY) / naturalH;
      const fit = Math.min(fitW, fitH);
      // start at fit-to-stage but cap so small diagrams don't blow up
      lb.scale = Math.min(Math.max(fit, 0.3), 2.5);
      lb.tx = 0;
      lb.ty = 0;
      lbApply(false);
    });
  }

  function lbOpenImage(img) {
    if (!lb.el) {
      lb.el = document.getElementById('lightbox');
      lb.stage = document.getElementById('lightboxStage');
      lb.canvas = document.getElementById('lightboxCanvas');
      lb.level = document.getElementById('lbZoomLevel');
    }
    if (!lb.el || !lb.canvas) return;

    const cloned = document.createElement('img');
    cloned.src = img.src;
    cloned.alt = img.alt || '';
    cloned.style.display = 'block';
    cloned.style.maxWidth = 'none';
    cloned.style.maxHeight = 'none';

    lb.canvas.innerHTML = '';
    lb.canvas.appendChild(cloned);

    lb.el.classList.add('is-open');
    lb.el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');

    // wait for the image to load so we know its natural dimensions
    const fit = () => {
      const stageRect = lb.stage.getBoundingClientRect();
      const naturalW = cloned.naturalWidth || 1200;
      const naturalH = cloned.naturalHeight || 800;
      cloned.style.width = naturalW + 'px';
      cloned.style.height = naturalH + 'px';
      const padX = 100, padY = 100;
      const fitW = (stageRect.width - padX) / naturalW;
      const fitH = (stageRect.height - padY) / naturalH;
      const f = Math.min(fitW, fitH);
      lb.scale = Math.min(Math.max(f, 0.1), 2);
      lb.tx = 0;
      lb.ty = 0;
      lbApply(false);
    };
    if (cloned.complete) fit();
    else cloned.addEventListener('load', fit, { once: true });
  }

  function lbClose() {
    if (!lb.el) return;
    lb.el.classList.remove('is-open');
    lb.el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
    setTimeout(() => { if (lb.canvas) lb.canvas.innerHTML = ''; }, 250);
  }

  function lbWireUp() {
    // open on diagram click — both .diagram-wrap (single) and .diagram-card (fast/slow path columns)
    document.querySelectorAll('.diagram-wrap, .diagram-card').forEach(wrap => {
      if (wrap.dataset.lbWired) return;
      // skip cards that don't actually contain a mermaid SVG
      if (!wrap.querySelector('pre.mermaid')) return;
      wrap.dataset.lbWired = '1';
      wrap.addEventListener('click', (e) => {
        // don't open if user is selecting text
        if (window.getSelection && String(window.getSelection()).length) return;
        lbOpen(wrap);
      });
    });

    // also wire .shot containers — open the raw <img> in the lightbox
    document.querySelectorAll('.shot').forEach(shot => {
      if (shot.dataset.lbWired) return;
      const img = shot.querySelector('img');
      if (!img) return;
      shot.dataset.lbWired = '1';
      shot.addEventListener('click', (e) => {
        if (window.getSelection && String(window.getSelection()).length) return;
        lbOpenImage(img);
      });
    });

    // toolbar + close
    const $ = id => document.getElementById(id);
    const bind = (id, fn) => { const el = $(id); if (el && !el.dataset.lbBound) { el.dataset.lbBound = '1'; el.addEventListener('click', fn); } };
    bind('lbZoomIn',  () => lbZoom(+1));
    bind('lbZoomOut', () => lbZoom(-1));
    bind('lbReset',   lbReset);
    bind('lbClose',   lbClose);
    const bd = $('lightboxBackdrop');
    if (bd && !bd.dataset.lbBound) { bd.dataset.lbBound = '1'; bd.addEventListener('click', lbClose); }

    // wheel zoom on stage
    const stage = $('lightboxStage');
    if (stage && !stage.dataset.lbBound) {
      stage.dataset.lbBound = '1';
      stage.addEventListener('wheel', (e) => {
        if (!document.getElementById('lightbox').classList.contains('is-open')) return;
        e.preventDefault();
        lbZoom(e.deltaY < 0 ? +1 : -1, e.clientX, e.clientY);
      }, { passive: false });

      // drag to pan
      stage.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        lb.dragging = true;
        lb.dragStartX = e.clientX; lb.dragStartY = e.clientY;
        lb.dragOrigX = lb.tx; lb.dragOrigY = lb.ty;
        e.preventDefault();
      });
      window.addEventListener('mousemove', (e) => {
        if (!lb.dragging) return;
        lb.tx = lb.dragOrigX + (e.clientX - lb.dragStartX);
        lb.ty = lb.dragOrigY + (e.clientY - lb.dragStartY);
        lbApply(true);
      });
      window.addEventListener('mouseup', () => { lb.dragging = false; });
      window.addEventListener('mouseleave', () => { lb.dragging = false; });

      // touch (single-finger pan)
      stage.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        lb.dragging = true;
        lb.dragStartX = t.clientX; lb.dragStartY = t.clientY;
        lb.dragOrigX = lb.tx; lb.dragOrigY = lb.ty;
      }, { passive: true });
      stage.addEventListener('touchmove', (e) => {
        if (!lb.dragging || e.touches.length !== 1) return;
        const t = e.touches[0];
        lb.tx = lb.dragOrigX + (t.clientX - lb.dragStartX);
        lb.ty = lb.dragOrigY + (t.clientY - lb.dragStartY);
        lbApply(true);
      }, { passive: true });
      stage.addEventListener('touchend', () => { lb.dragging = false; });
    }

    // global keys
    if (!document.body.dataset.lbKeys) {
      document.body.dataset.lbKeys = '1';
      document.addEventListener('keydown', (e) => {
        const open = document.getElementById('lightbox')?.classList.contains('is-open');
        if (!open) return;
        if (e.key === 'Escape') { e.preventDefault(); lbClose(); }
        else if (e.key === '+' || e.key === '=') { e.preventDefault(); lbZoom(+1); }
        else if (e.key === '-' || e.key === '_') { e.preventDefault(); lbZoom(-1); }
        else if (e.key === '0') { e.preventDefault(); lbReset(); }
      });
    }
  }
  window.__wireLightbox = lbWireUp;

  /* ---------- INIT ---------- */
  function init() {
    setToggleIcon();
    renderLucide();
    renderMermaid().then(() => lbWireUp());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // safety net — re-render Lucide once everything (including async CDNs) settles
  window.addEventListener('load', () => {
    renderLucide();
    if (!document.querySelector('pre.mermaid.is-rendered')) {
      renderMermaid().then(() => lbWireUp());
    } else {
      lbWireUp();
    }
  });

})();
