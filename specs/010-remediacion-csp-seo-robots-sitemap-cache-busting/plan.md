# Plan Técnico — Feature 010: Remediación de CSP (Cloudflare Insights), Actualización SEO/Robots/Sitemap, Actualización de Consola y Cache-Busting de Assets

Estado: 🔄 En revisión / Propuesta  
Referencia: `specs/010-remediacion-csp-seo-robots-sitemap-cache-busting/spec.md`  

---

## 1. Módulos Afectados y Arquitectura

1. **`_headers` (Cloudflare Pages):**
   - Actualización de la directiva `Content-Security-Policy`:
     - `script-src`: Añadir `https://static.cloudflareinsights.com`.
     - `connect-src`: Añadir `https://cloudflareinsights.com`.
2. **`js/terminal-effects.js` (Branding en Consola):**
   - Modificación de la función `printSystemBanner()` sustituyendo la línea de especialidades por el enfoque en psicoterapeutas y consulta privada.
3. **`sitemap.xml` & `robots.txt` (SEO & Indexabilidad):**
   - Incorporar `https://cristhianruiz.dev/aviso-de-privacidad` al sitemap.
   - Actualizar `<lastmod>2026-09-24</lastmod>` en las entradas.
   - Confirmar directivas de `robots.txt`.
4. **`index.html` & `aviso-de-privacidad.html` (Cache-Busting & Metadatos):**
   - Actualizar todos los enlaces de CSS (`main.css`, `navbar.css`, `hero.css`, `terminal.css`, `trust-operator.css`, `pricing.css`, `faq.css`, `form.css`, `footer.css`, `privacy.css`) y scripts JS (`theme-manager.js`, `terminal-effects.js`, `config.js`) a la versión unificada `?v=6.0`.
   - Ajustar el texto `"description"` en Schema.org JSON-LD de `index.html`.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

### Decisión 1: Inclusión de Cloudflare Insights en el CSP
- **Decisión:** Agregar explícitamente `https://static.cloudflareinsights.com` en `script-src` y `https://cloudflareinsights.com` en `connect-src`.
- **Alternativa Descartada:** Desactivar Cloudflare Web Analytics desde el panel de Cloudflare. *Motivo de descarte:* Cloudflare Analytics proporciona métricas de tráfico y Web Vitals sin cookies invasivas ni necesidad de consentimiento GDPR, siendo de gran valor operativo para el sitio sin comprometer la privacidad de los pacientes.

### Decisión 2: Versionado Unificado de Assets (`?v=6.0`)
- **Decisión:** Incrementar a `?v=6.0` en todas las referencias de CSS y JS en el HTML.
- **Alternativa Descartada:** Introducir un sistema de bundling complejo (Webpack, Rollup, Vite). *Motivo de descarte:* La Constitución del proyecto (Principio 3) prohíbe frameworks pesados y dependencias innecesarias para la landing; el control de versión mediante query strings es nativo, directo y 100% efectivo contra la caché HTTP 304.

---

## 3. Pruebas y Validación

1. **Prueba de Consola:**
   - Cargar el sitio en navegador local y verificar que no haya errores de CSP de Cloudflare y que el banner de bienvenida imprima el copy de psicoterapia.
2. **Prueba de Responsividad a 998px:**
   - Verificar con viewport `998x614` (el del usuario) que se renderice el menú hamburguesa móvil sin solapamientos.
3. **Suite Automatizada:**
   - Ejecutar `npm test` y confirmar 16/16 tests pasando.
