/**
 * CrisDev — Theme Manager Module
 * Manages Dark/Light mode switching, persistence, and system preference detection.
 * Author: Cristhian Ruiz - Software & Web Engineering
 */

const STORAGE_KEY = 'crisdev_theme';
const LOGO_LIGHT = 'assets/images/logo-crisdev.svg';
const LOGO_DARK = 'assets/images/logo-crisdev-white.svg';

/**
 * Safely retrieves stored theme from localStorage.
 * @returns {'dark' | 'light' | null}
 */
export function getStoredTheme() {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val === 'dark' || val === 'light' ? val : null;
  } catch (err) {
    return null;
  }
}

/**
 * Detects system color scheme preference.
 * @returns {'dark' | 'light'}
 */
export function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

/**
 * Returns current effective theme (stored preference or system default).
 * @returns {'dark' | 'light'}
 */
export function getEffectiveTheme() {
  return getStoredTheme() || getSystemTheme();
}

/**
 * Updates header logo image source according to active theme.
 * @param {'dark' | 'light'} theme 
 */
function updateHeaderLogos(theme) {
  const logos = document.querySelectorAll('.brand-logo-img, .site-logo-img, .header-brand img');
  logos.forEach(logo => {
    // Only update header logo; footer already uses white logo on dark background
    if (logo.closest('.site-header') || logo.closest('#header')) {
      const targetSrc = theme === 'dark' ? LOGO_DARK : LOGO_LIGHT;
      if (logo.getAttribute('src') !== targetSrc) {
        logo.setAttribute('src', targetSrc);
      }
    }
  });
}

/**
 * Updates ARIA attributes and visual state of all theme toggle buttons.
 * @param {'dark' | 'light'} theme 
 */
function updateToggleButtons(theme) {
  const isDark = theme === 'dark';
  const toggles = document.querySelectorAll('.theme-toggle');
  toggles.forEach(toggle => {
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggle.setAttribute(
      'aria-label',
      isDark ? 'Cambiar a modo claro (día)' : 'Cambiar a modo oscuro (noche)'
    );
    toggle.setAttribute(
      'title',
      isDark ? 'Modo Claro' : 'Modo Oscuro'
    );
  });

  const statusLabels = document.querySelectorAll('.theme-toggle-status');
  statusLabels.forEach(label => {
    label.textContent = isDark ? 'Oscuro' : 'Claro';
  });
}

/**
 * Applies a theme to documentElement and saves preference.
 * @param {'dark' | 'light'} theme 
 * @param {boolean} [save=true] Whether to persist in localStorage
 */
export function setTheme(theme, save = true) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);

  if (save) {
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch (err) {
      // Ignore if localStorage is blocked
    }
  }

  updateHeaderLogos(nextTheme);
  updateToggleButtons(nextTheme);

  // Dispatch custom event for listeners
  window.dispatchEvent(new CustomEvent('themechange', {
    detail: { theme: nextTheme }
  }));
}

/**
 * Toggles between dark and light themes.
 */
export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || getEffectiveTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next, true);
}

/**
 * Initializes theme listeners, system matchMedia watcher, and DOM controls.
 */
export function initThemeManager() {
  const activeTheme = getEffectiveTheme();
  setTheme(activeTheme, false);

  // Bind clicks on all toggle buttons (Header, Drawer, etc.)
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.theme-toggle');
    if (toggle) {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Watch for OS preference changes if no manual preference has been set
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (event) => {
      if (!getStoredTheme()) {
        setTheme(event.matches ? 'dark' : 'light', false);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemChange);
    }
  }
}

// Auto-initialize when loaded as a module or standalone script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeManager);
} else {
  initThemeManager();
}
