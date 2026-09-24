# Plan Técnico: Remediación de Auditoría (Seguridad y Deuda Técnica)

## 1. Módulos Afectados
- **Backend/API (Serverless):**
  - `functions/api/contact.js` (Modificación de cabeceras CORS, validación de inputs, manejo de honeypot, catch de errores).
  - `_headers` (Configuración de Content-Security-Policy).
- **Frontend HTML:**
  - `index.html` (Añadir input oculto para honeypot, `<link>` para Google Fonts, remover redundancia de `config.js`).
  - `aviso-de-privacidad.html` (Remover `<style>`, igualar `theme-color`).
- **Frontend CSS:**
  - `css/main.css` (Remover `@import` de Google Fonts).
  - `css/components/privacy.css` (Creación e inyección de estilos de privacidad).
  - `css/layout/navbar.css` (Aplicar `minmax(0, 1fr)`).
  - `css/components/pricing.css` (Sustitución de emoji ★ por SVG).

## 2. Decisiones Técnicas

### 2.1. Prevención Anti-Spam (Honeypot)
- **Decisión:** Implementar un Honeypot pasivo basado en campo oculto (input con clase que lo esconda de usuarios legítimos, pero lo deje visible para bots que leen el DOM).
- **Alternativa descartada:** Integración con reCAPTCHA v3 o Cloudflare Turnstile.
- **Motivo:** Los CAPTCHAs requieren dependencias externas (scripts adicionales) que van en contra de la política *zero-dependency* estricta en el cliente y añaden peso a la carga inicial. Un honeypot invisible es 100% nativo y detiene a la abrumadora mayoría del spam automatizado, siendo suficiente en esta etapa.

### 2.2. Validación Redundante en Backend
- **Decisión:** Reutilizar reglas RegEx nativas dentro de `contact.js` para validar email, teléfono (longitud mínima) y nombre de forma estricta.
- **Alternativa descartada:** Importar una librería de validación de esquemas como Zod o Joi en la función serverless.
- **Motivo:** Mantener el peso de la función mínimo y libre de empaquetadores complejos. Las validaciones requeridas (tipos primitivos y regex) son directas y manejables en Javascript vainilla puro, manteniéndonos fieles a la arquitectura actual.

### 2.3. Aplicación de Content-Security-Policy (CSP)
- **Decisión:** Declarar CSP estricto vía el archivo `_headers` de Cloudflare Pages usando directivas estándar (`default-src 'self'`, `script-src 'self' 'unsafe-inline'`, etc. adaptadas).
- **Alternativa descartada:** Aplicar CSP a través de la etiqueta `<meta>` en la cabecera de cada archivo HTML.
- **Motivo:** El archivo `_headers` inyecta las políticas a nivel de red (CDN Edge), lo que lo hace universal, más seguro y más fácil de mantener que múltiples etiquetas HTML descentralizadas.
