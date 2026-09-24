# Especificación — Feature 010: Remediación de CSP (Cloudflare Insights), Actualización SEO/Robots/Sitemap, Actualización de Consola y Cache-Busting de Assets

Estado: 🔄 En revisión / Propuesta  
Fecha de creación: 2026-09-24  
Última actualización: 2026-09-24  
Autores: Cristhian Ruiz / Antigravity  

---

## 1. Contexto y Dolor del Negocio

Tras el despliegue de la Feature 009, se identificaron cuatro aspectos técnicos y de posicionamiento que requieren atención inmediata:

1. **Violación de Content Security Policy (CSP) en Cloudflare Pages:**
   - El script de analítica automática de Cloudflare (`https://static.cloudflareinsights.com/beacon.min.js`) es bloqueado por la directiva estricta `script-src 'self' 'unsafe-inline'` definida en el archivo `_headers`, arrojando una advertencia de error en la consola del navegador y privando al sitio de métricas operativas de rendimiento Web Vitals.
2. **Problema de Caché HTTP 304 en la Barra de Navegación:**
   - Los navegadores de los visitantes y del cliente mantienen en caché las hojas de estilo anteriores (`navbar.css?v=5.1-humanized`), lo que ocasiona que a resoluciones intermedias (como ~998px o pantallas de laptop) se siga ejecutando el CSS previo donde el botón de alternar tema se encimaba sobre el enlace *"Sobre Mí"*. Se requiere un versionado explícito (*cache-busting*) para invalidar la caché local.
3. **Banner Residual en Consola de Desarrollador:**
   - La función `printSystemBanner()` en `js/terminal-effects.js` aún imprime un enfoque comercial desactualizado (*"Enfoque: Clínicas, Psicología, Odontología y Nutrición"*), inconsistente con la hiper-especialización actual en psicoterapeutas y salud mental.
4. **Desactualización de Metadatos SEO, Sitemap y Robots:**
   - El archivo `sitemap.xml` tiene una fecha obsoleta (`2026-08-31`) y carece de la URL formal de `aviso-de-privacidad.html`.
   - Los metadatos de `index.html` (Title, Meta Description, Open Graph, Twitter y Schema.org JSON-LD) requieren alineación total con la propuesta de valor orientada a psicoterapeutas.

---

## 2. Alcance (Scope)

### Dentro de Alcance (In Scope):
- **Actualización de `_headers`:**
  - Agregar `https://static.cloudflareinsights.com` a la directiva `script-src`.
  - Agregar `https://cloudflareinsights.com` a la directiva `connect-src` para permitir el reporte de métricas analíticas sin violaciones.
- **Cache-Busting de Assets (CSS y JS):**
  - Incrementar la versión de todos los enlaces a archivos CSS y JS en `index.html` y `aviso-de-privacidad.html` a `?v=6.0` para forzar la recarga inmediata del nuevo CSS de Flexbox y breakpoint de 1080px en todos los navegadores.
- **Corrección del Banner de Consola (`js/terminal-effects.js`):**
  - Actualizar el texto del banner de bienvenida a *"Enfoque: Software & Plataformas Web para Psicoterapeutas y Consulta Privada"*.
- **Optimización de SEO, Robots y Sitemap:**
  - Actualizar `sitemap.xml` incorporando `https://cristhianruiz.dev/` y `https://cristhianruiz.dev/aviso-de-privacidad`, actualizando `lastmod` a `2026-09-24`.
  - Auditar `robots.txt` para asegurar la indexación universal y la declaración del Sitemap canónico.
  - Sintonizar los metadatos de `index.html` (Title, Description, Open Graph, Schema.org) con el enfoque exclusivo en psicoterapeutas y salud mental.

### Fuera de Alcance (Out of Scope):
- Alterar la lógica interna de Cloudflare Pages o funciones serverless en `functions/api/contact.js`.
- Modificar el contenido textual o las 7 preguntas de la sección `#faq`.
- Agregar librerías de analítica pesadas de terceros (Google Analytics, Mixpanel, etc.).

---

## 3. Criterios de Aceptación (Requisitos Funcionales en Notación EARS)

### Módulo 1: Remediación de Content Security Policy (CSP)
- **RF-1.1 (Ubicuo):** EL SISTEMA configurará en `_headers` la directiva `script-src` permitiendo `'self'`, `'unsafe-inline'` y el origen confiable `https://static.cloudflareinsights.com`.
- **RF-1.2 (Ubicuo):** EL SISTEMA configurará en `_headers` la directiva `connect-src` permitiendo `'self'` y el origen confiable `https://cloudflareinsights.com`.
- **RF-1.3 (Excepción):** SI el navegador carga el script de baliza analítica de Cloudflare Insights, ENTONCES EL SISTEMA no emitirá ningún bloqueo ni error de violación de directiva CSP en la consola de JavaScript.

### Módulo 2: Cache-Busting Sistemático y Resolución de Caché
- **RF-2.1 (Ubicuo):** EL SISTEMA declarará el query string `?v=6.0` en todas las referencias de hojas de estilo (`<link rel="stylesheet">`) y scripts (`<script src="...">`) tanto en `index.html` como en `aviso-de-privacidad.html`.
- **RF-2.2 (Evento):** CUANDO un usuario o navegador con caché previa visite el sitio, EL SISTEMA forzará la descarga del nuevo CSS (`navbar.css?v=6.0`), garantizando que a anchos de pantalla de 998px o menores se active el menú hamburguesa móvil y no exista superposición física entre enlaces y botones.

### Módulo 3: Sintonización de Consola de Desarrollador
- **RF-3.1 (Evento):** CUANDO se ejecute `printSystemBanner()` al cargar la página, EL SISTEMA imprimirá en la consola del navegador la información profesional de CrisDev con la línea de enfoque: `Enfoque: Software & Plataformas Web para Psicoterapeutas y Consulta Privada`, eliminando menciones a odontología o nutrición.

### Módulo 4: Indexación, Sitemap y Robots.txt
- **RF-4.1 (Ubicuo):** EL SISTEMA mantendrá en `robots.txt` el permiso de rastreo general (`User-agent: *`, `Allow: /`) y la referencia canónica hacia `Sitemap: https://cristhianruiz.dev/sitemap.xml`.
- **RF-4.2 (Ubicuo):** EL SISTEMA incluirá en `sitemap.xml` las dos URLs principales del dominio:
  1. `https://cristhianruiz.dev/` (prioridad `1.0`, cambio semanal).
  2. `https://cristhianruiz.dev/aviso-de-privacidad` (prioridad `0.5`, cambio mensual).
  Ambas con la marca de tiempo `lastmod` actualizada a `2026-09-24`.

### Módulo 5: Metadatos SEO y Datos Estructurados (Schema.org)
- **RF-5.1 (Ubicuo):** EL SISTEMA mantendrá etiquetas `<title>`, `<meta name="description">`, `og:title`, `og:description`, `twitter:title` y `twitter:description` centradas de forma unívoca en psicología, psicoterapia y plataformas de consultorio privado.
- **RF-5.2 (Ubicuo):** EL SISTEMA actualizará en el bloque Schema.org JSON-LD de `index.html` el campo `"description"` reflejando: *"Desarrollo web y plataformas a medida para psicólogos y terapeutas con consulta privada"*.

---

## 4. Plan de Verificación

1. **Inspección de Cabeceras HTTP:**
   - Comprobar que `_headers` contenga la directiva CSP actualizada con `https://static.cloudflareinsights.com` en `script-src` y `https://cloudflareinsights.com` en `connect-src`.
2. **Validación de Enlaces de Assets (Cache-Busting):**
   - Verificar que todos los `<link rel="stylesheet">` y `<script src="...">` en `index.html` y `aviso-de-privacidad.html` utilicen `?v=6.0`.
3. **Consola Limpia y Banner Actualizado (`browser_subagent`):**
   - Levantar servidor local y verificar con subagente que `printSystemBanner()` imprima el copy de psicoterapia.
   - Comprobar que en viewport `998x614` se active el menú hamburguesa móvil sin solapamientos.
4. **Verificación de Sitemap y Robots:**
   - Comprobar sintaxis XML válida de `sitemap.xml` con las 2 rutas.
   - Ejecutar la suite automatizada (`npm test`) para garantizar 16/16 tests pasando.
