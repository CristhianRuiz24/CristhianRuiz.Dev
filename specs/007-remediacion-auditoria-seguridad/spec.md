# Especificación: Remediación de Auditoría (Seguridad y Deuda Técnica)

## 1. Visión General
Esta especificación define la implementación de las recomendaciones prioritarias resultantes de la auditoría de código del proyecto. Su enfoque principal es blindar la API Serverless contra abusos (spam/CORS), robustecer la seguridad global (CSP, ocultamiento de errores) y limpiar la deuda técnica identificada en CSS, assets y redundancias de código.

No incluye la implementación de un linter estricto ni pruebas unitarias para funciones serverless, con el objetivo de preservar la filosofía de cero dependencias externas y enfocarse en mejoras directas al código fuente existente.

## 2. Alcance (In / Out of Scope)
**In Scope:**
- Restricción de orígenes CORS en el servidor (`functions/api/contact.js`).
- Adición de cabeceras de seguridad como CSP (`_headers`).
- Implementación de Honeypot en frontend (formulario) y backend (API).
- Validación de datos redundante en el backend (API) equivalente a las del frontend.
- Ocultamiento de trazas de error del servidor en respuestas 500/502.
- Refactorización de estilos inline/embebidos hacia CSS modulares (`aviso-de-privacidad.html`).
- Limpieza y optimización en carga de fuentes y redundancias de HTML (scripts repetidos).
- Limpieza de assets huérfanos (imágenes no referenciadas).
- Actualización de grid rules para salvaguarda mobile-first.

**Out of Scope:**
- Configuración de dependencias externas como ESlint, Prettier o Husky.
- Frameworks de Testing (Jest, Mocha) para API / Tema.
- Rate Limiting basado en base de datos o Redis (se confía en Cloudflare WAF/Honeypot de momento).

## 3. Requisitos Funcionales (EARS)

### 3.1. Seguridad y API (SEC)
- **RF-1 (Ubicuo):** EL SISTEMA debe restringir explícitamente el acceso a la API `contact.js` mediante CORS, permitiendo peticiones exclusivamente desde orígenes autorizados (`https://cristhianruiz.dev` y `http://localhost:3000`).
- **RF-2 (Ubicuo):** EL SISTEMA debe incluir una cabecera `Content-Security-Policy` estricta en sus respuestas, restringiendo la ejecución de scripts y recursos para prevenir ataques XSS.
- **RF-3 (Evento):** CUANDO la API de contacto recibe una petición, EL SISTEMA debe validar el formato y la longitud de los campos (email, teléfono, nombre) antes de interactuar con servicios externos (Resend).
- **RF-4 (Excepción):** SI ocurre un error interno en la API (500/502) al interactuar con servicios de terceros, ENTONCES EL SISTEMA debe devolver al cliente un mensaje genérico (e.g. "Error al procesar la solicitud") sin revelar la traza original o mensajes de excepción del servidor.
- **RF-5 (Evento):** CUANDO el formulario de contacto se envíe con el campo oculto anti-spam (Honeypot) lleno, EL SISTEMA debe abortar el envío real a Resend y devolver una respuesta exitosa falsa al cliente.

### 3.2. Modularidad y Deuda Técnica (MOD)
- **RF-6 (Ubicuo):** EL SISTEMA debe aislar los estilos de diseño específicos de la vista de privacidad en un archivo CSS independiente (`privacy.css`), erradicando las etiquetas `<style>` del archivo HTML.
- **RF-7 (Ubicuo):** EL SISTEMA debe importar las tipografías globales vía etiquetas `<link>` precargadas en el HTML, eliminando la directiva bloqueante `@import` del archivo CSS principal.
- **RF-8 (Ubicuo):** EL SISTEMA debe definir consistentemente la directiva `minmax(0, 1fr)` con protección `min-width: 0` en todas las arquitecturas de Grid aplicables (e.g., Navbar), para prevenir desbordamientos estructurales en dispositivos móviles.
- **RF-9 (Ubicuo):** EL SISTEMA debe utilizar iconografía vectorial SVG (cumpliendo con la normativa técnica visual) para elementos decorativos como cintas de precio, descartando el uso de emojis Unicode nativos del sistema operativo.
- **RF-10 (Ubicuo):** EL SISTEMA debe mantener la consistencia entre las distintas vistas web respecto a metadatos (como `theme-color`) y eliminar redundancias en la inclusión de scripts modulares (`config.js`).

## 4. Arquitectura y Tecnologías
- **Backend/API:** Cloudflare Pages Functions (`_worker.js` / `functions/api/`).
- **Frontend:** HTML5 Semántico, CSS3 Variables, ES6 Modules.
- **Despliegue:** Sistema `sync-partials.js` (mantener sincronización de headers).
