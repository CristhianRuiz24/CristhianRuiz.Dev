# Tareas — Feature 010: Remediación de CSP (Cloudflare Insights), Actualización SEO/Robots/Sitemap, Actualización de Consola y Cache-Busting de Assets

Estado general: ✅ Completado  
Referencia: `specs/010-remediacion-csp-seo-robots-sitemap-cache-busting/spec.md` y `plan.md`  

| ID | Tarea | Estado | Archivos Afectados | Condición de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Remediación de Directivas CSP para Cloudflare Web Analytics en `_headers` | ✅ hecho | `_headers` | Hecho cuando: `script-src` incluya `https://static.cloudflareinsights.com` y `connect-src` incluya `https://cloudflareinsights.com`, permitiendo la carga del beacon sin violaciones de política. |
| **T2** | Actualización de Copy Comercial en Banner de Consola (`js/terminal-effects.js`) | ✅ hecho | `js/terminal-effects.js` | Hecho cuando: `printSystemBanner()` imprima el enfoque enfocado exclusivamente en psicoterapeutas y consulta privada, sin menciones a odontología o nutrición. |
| **T3** | Actualización y Extensión de `sitemap.xml` y Validación de `robots.txt` | ✅ hecho | `sitemap.xml`, `robots.txt` | Hecho cuando: `sitemap.xml` incluya las URLs de la home y de `/aviso-de-privacidad` con `<lastmod>2026-09-24</lastmod>`, y `robots.txt` referencie el sitemap canónico. |
| **T4** | Sintonización de Schema.org JSON-LD y Metadatos SEO en `index.html` | ✅ hecho | `index.html` | Hecho cuando: El JSON-LD y las meta etiquetas reflejen con precisión el desarrollo de software y páginas web para psicólogos y terapeutas. |
| **T5** | Cache-Busting Masivo Unificado (`?v=6.0`) en Assets CSS y JS | ✅ hecho | `index.html`, `aviso-de-privacidad.html` | Hecho cuando: Todos los enlaces a CSS y scripts JS en ambas páginas incluyan `?v=6.0` para invalidar la caché HTTP 304 de versiones previas del navbar. |
| **T6** | Validación Automatizada de Tests y Comprobación en Viewport de Usuario (998x614) | ✅ hecho | `tests/`, `index.html` | Hecho cuando: `npm test` pase 16/16 sin fallos, la consola del navegador reporte 0 violaciones de CSP y el viewport 998x614 muestre el menú móvil limpio sin solapamientos. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
