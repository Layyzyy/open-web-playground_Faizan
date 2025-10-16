/**
 * Site Interactivity Script
 * - Responsive nav + smooth scroll (existing)
 * - Form validation with inline errors
 * - Tooltips and modal dialogs
 * - Robust event handling and error handling
 */

(function () {
  'use strict';

  function safe(fn, context) {
    try { return fn.call(context); } catch (e) { console.error('[script.js]', e); }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // ===== Responsive Navigation =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

    function toggleMenu() {
      if (!hamburger || !navMenu) return;
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
      if (!isExpanded && navLinks && navLinks[0]) navLinks[0].focus();
      else hamburger.focus();
    }

    if (hamburger) {
      hamburger.addEventListener('click', () => safe(toggleMenu));
      hamburger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); safe(toggleMenu); }
      });
    }

    document.addEventListener('click', e => {
      if (!hamburger || !navMenu) return;
      const isMenuOpen = navMenu.classList.contains('active');
      if (!isMenuOpen) return;
      const insideMenu = navMenu.contains(e.target);
      const onHamburger = hamburger.contains(e.target);
      if (!insideMenu && !onHamburger) safe(toggleMenu);
    });

    if (navLinks && navLinks.forEach) {
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('active')) safe(toggleMenu);
        });
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) safe(toggleMenu);
    });

    window.addEventListener('resize', (() => {
      let t; return () => { clearTimeout(t); t = setTimeout(() => {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
          hamburger && hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          hamburger && hamburger.setAttribute('aria-expanded', 'false');
        }
      }, 200); };
    })());

    // ===== Smooth Scroll for anchor links =====
    if (navLinks && navLinks.forEach) {
      navLinks.forEach(link => {
        link.addEventListener('click', e => {
          const href = link.getAttribute('href') || '';
          if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', href);
            }
          }
        });
      });
    }

    // ===== Theme Switcher (existing support) =====
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') document.body.classList.add('dark-mode');
    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
      const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      const newLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeToggle && themeToggle.setAttribute('aria-label', newLabel);
    }
    if (themeToggle) {
      themeToggle.addEventListener('click', () => safe(toggleTheme));
      themeToggle.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); safe(toggleTheme); }
      });
      const initialLabel = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeToggle.setAttribute('aria-label', initialLabel);
    }

    // ===== Tooltips =====
    // Elements with data-tooltip will show a tooltip on hover/focus
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    let tooltipNode;
    function showTooltip(el) {
      const text = el.getAttribute('data-tooltip');
      if (!text) return;
      tooltipNode = document.createElement('div');
      tooltipNode.className = 'tooltip';
      tooltipNode.role = 'tooltip';
      tooltipNode.textContent = text;
      document.body.appendChild(tooltipNode);
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top - tooltipNode.offsetHeight - 8;
      const left = window.scrollX + rect.left + (rect.width - tooltipNode.offsetWidth) / 2;
      tooltipNode.style.position = 'absolute';
      tooltipNode.style.top = Math.max(0, top) + 'px';
      tooltipNode.style.left = Math.max(0, left) + 'px';
    }
    function hideTooltip() {
      if (tooltipNode && tooltipNode.parentNode) tooltipNode.parentNode.removeChild(tooltipNode);
      tooltipNode = null;
    }
    tooltipElements.forEach(el => {
      el.addEventListener('mouseenter', () => safe(() => showTooltip(el)));
      el.addEventListener('mouseleave', () => safe(hideTooltip));
      el.addEventListener('focus', () => safe(() => showTooltip(el)));
      el.addEventListener('blur', () => safe(hideTooltip));
    });

    // ===== Modal Dialogs =====
    // Any element with [data-modal-target="#id"] opens modal; modal has [id] and [data-modal]
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-modal]');
    const overlay = document.querySelector('[data-modal-overlay]');

    function openModal(modal) {
      if (!modal) return;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      overlay && overlay.classList.add('visible');
      // focus first focusable
      const focusable = modal.querySelector('a, button:not([disabled]), input, select, textarea');
      if (focusable) focusable.focus();
    }
    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove('open');
      document.body.style.overflow = '';
      overlay && overlay.classList.remove('visible');
    }

    openModalButtons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const selector = btn.getAttribute('data-modal-target');
        const modal = selector ? document.querySelector(selector) : null;
        safe(() => openModal(modal));
      });
    });
    closeModalButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('[data-modal]');
        safe(() => closeModal(modal));
      });
    });
    if (overlay) {
      overlay.addEventListener('click', () => {
        document.querySelectorAll('[data-modal].open').forEach(m => safe(() => closeModal(m)));
      });
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('[data-modal].open').forEach(m => safe(() => closeModal(m)));
      }
    });

    // ===== Form Validation =====
    // Forms with [data-validate] will be validated on submit; inputs use data-rules="required|email|min:3|max:20"
    function setError(input, message) {
      const field = input.closest('.form-field') || input.parentElement;
      if (!field) return;
      let error = field.querySelector('.error-message');
      if (!error) {
        error = document.createElement('div');
        error.className = 'error-message';
        error.setAttribute('role', 'alert');
        field.appendChild(error);
      }
      error.textContent = message;
      input.setAttribute('aria-invalid', 'true');
    }
    function clearError(input) {
      const field = input.closest('.form-field') || input.parentElement;
      if (!field) return;
      const error = field.querySelector('.error-message');
      if (error) error.textContent = '';
      input.removeAttribute('aria-invalid');
    }
    const validators = {
      required: (v) => v.trim().length > 0 || 'This field is required',
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(v) || 'Please enter a valid email',
      min: (v, n) => v.trim().length >= Number(n) || `Minimum ${n} characters required`,
      max: (v, n) => v.trim().length <= Number(n) || `Maximum ${n} characters allowed`,
      pattern: (v, p) => new RegExp(p).test(v) || 'Invalid format'
    };

    function validateInput(input) {
      const rulesStr = input.getAttribute('data-rules') || '';
      if (!rulesStr) { clearError(input); return true; }
      const rules = rulesStr.split('|');
      for (const rule of rules) {
        const [name, param] = rule.split(':');
        const fn = validators[name];
        if (!fn) continue;
        const res = fn(input.value || '', param);
        if (res !== true) { setError(input, String(res)); return false; }
      }
      clearError(input); return true;
    }

    document.querySelectorAll('form[data-validate]').forEach(form => {
      form.setAttribute('novalidate', 'true');
      form.addEventListener('submit', e => {
        let ok = true;
        form.querySelectorAll('input, textarea, select').forEach(inp => {
          if (!validateInput(inp)) ok = false;
        });
        if (!ok) e.preventDefault();
      });
      form.addEventListener('input', e => {
        const t = e.target;
        if (t && (t.matches('input, textarea, select'))) validateInput(t);
      });
      form.addEventListener('blur', e => {
        const t = e.target;
        if (t && (t.matches('input, textarea, select'))) validateInput(t);
      }, true);
    });

    // ===== Generic Event Listeners (examples) =====
    // Buttons with data-action toggle aria-pressed and emit custom event
    document.querySelectorAll('[data-action]')
      .forEach(btn => btn.addEventListener('click', () => {
        const pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
        btn.dispatchEvent(new CustomEvent('action:toggled', { bubbles: true }));
      }));
  });

  // Utility: trap focus inside an element (e.g., modal)
  window.trapFocus = function trapFocus(element) {
    if (!element) return;
    const focusable = element.querySelectorAll('a[href], button:not([disabled]), textarea, input, select');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    element.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  };
})();
