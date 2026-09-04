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
 * Prints a DedSec / Cyber-Terminal greeting in the browser developer console
 */
function printSystemBanner() {
  const banner = `
%c=============================================================
%c   CrisDev // Cyber-Terminal Operating Environment
%c   Operator: Cristhian Ruiz — Software & Web Engineering
%c   Target: Health Clinics, Psychology, Dentistry & Nutrition
%c   System Status: [ONLINE] // TLS 1.3 // AES-256
%c=============================================================
`;
  console.log(
    banner,
    'color: #30363D; font-weight: bold;',
    'color: #00F0FF; font-weight: bold; font-size: 13px;',
    'color: #38BDF8; font-weight: bold;',
    'color: #8B949E;',
    'color: #00F0FF;',
    'color: #30363D; font-weight: bold;'
  );
}

function initApp() {
  initWhatsAppButtons();
  initSmoothScroll();
  initClinicalSuiteTabs();
  printSystemBanner();
}

// Initialize on DOM Ready or immediately if document is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


