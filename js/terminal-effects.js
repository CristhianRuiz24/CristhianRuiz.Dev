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

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppButtons();
  initSmoothScroll();
  printSystemBanner();
});
