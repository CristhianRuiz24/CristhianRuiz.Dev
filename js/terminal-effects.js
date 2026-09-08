/**
 * CrisDev // Terminal Effects & Navigation Interactions
 * Author: Cristhian Ruiz - Software & Web Engineering
 */

import { CONFIG, getWhatsAppUrl } from './config.js';

/**
 * Injects dynamic WhatsApp URLs into all designated CTA buttons
 */
function initWhatsAppButtons() {
  const whatsappButtons = document.querySelectorAll('[data-action="whatsapp-direct"]');
  const targetUrl = getWhatsAppUrl();

  whatsappButtons.forEach((btn) => {
    btn.setAttribute('href', targetUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * Initializes smooth scrolling with header offset for internal anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initializes interactive tabs for the Clinical Suite Mockup
 */
function initClinicalSuiteTabs() {
  const mockup = document.getElementById('clinical-suite-demo');
  if (!mockup) return;

  const tabButtons = mockup.querySelectorAll('.suite-tab-btn');
  const viewPanels = mockup.querySelectorAll('.suite-view-panel');

  tabButtons.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const targetTab = btn.getAttribute('data-tab');
        if (!targetTab) return;

        // Update active state on buttons
        tabButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Update active state on panels
        viewPanels.forEach((panel) => {
          if (panel.id === `view-${targetTab}`) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });
  }

/**
 * Prints a professional system greeting in the browser developer console
 */
function printSystemBanner() {
  const banner = `
%c=============================================================
%c   CrisDev // Clinical Management Environment
%c   Operator: Cristhian Ruiz — Software & Web Engineering
%c   Target: Health Clinics, Psychology, Dentistry & Nutrition
%c   System Status: [ONLINE] // Secure Connection
%c=============================================================
`;
  console.log(
    banner,
    'color: #E2E8F0; font-weight: bold;',
    'color: #0077B6; font-weight: bold; font-size: 13px;',
    'color: #1A365D; font-weight: bold;',
    'color: #475569;',
    'color: #059669;',
    'color: #E2E8F0; font-weight: bold;'
  );
}

/**
 * Initializes mobile hamburger toggle and drawer navigation
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (!toggleBtn || !drawer || !backdrop) return;

  const openMenu = () => {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-active');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-active');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = toggleBtn.classList.contains('is-active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener('click', closeMenu);

  // Close when clicking any nav link inside mobile drawer
  const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Close if window resizes to desktop breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && toggleBtn.classList.contains('is-active')) {
      closeMenu();
    }
  });
}

function initApp() {
  initWhatsAppButtons();
  initSmoothScroll();
  initClinicalSuiteTabs();
  initMobileMenu();
  printSystemBanner();
}

// Initialize on DOM Ready or immediately if document is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}



