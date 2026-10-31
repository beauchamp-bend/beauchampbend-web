/* ------------------------------------------------------------------
   Beauchamp Bend — site behaviour
   Vanilla JS. No dependencies.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  /* ---------------------------------------------- current year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* --------------------------------------------- sticky nav shadow -- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------------------ mobile menu ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      links.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // close after tapping a link
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // close on Escape, or when the viewport grows past the breakpoint
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    var mq = window.matchMedia('(min-width: 721px)');
    var onMq = function (e) { if (e.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener('change', onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }

  /* ------------------------------- payment links (see config.js) --- */
  var paymentLinks = (window.BB_CONFIG && window.BB_CONFIG.paymentLinks) || {};

  document.querySelectorAll('[data-buy]').forEach(function (el) {
    var key = el.getAttribute('data-buy');
    var url = paymentLinks[key];

    if (!url) {
      // No payment link configured yet — keep it honest rather than
      // sending someone to a dead checkout.
      el.setAttribute('href', 'contact.html');
      el.setAttribute('title', 'Order by email — online checkout coming soon');
      el.classList.add('is-pending');
      return;
    }

    el.setAttribute('href', url);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* --------------------------------------------------- reveal on --- */
  // Cheap, dependency-free fade-up. Skipped entirely if the user
  // prefers reduced motion or the browser lacks IntersectionObserver.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.card, .practice, .story-grid > *, .band blockquote'
    );

    targets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1)';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { io.observe(el); });
  }
})();
