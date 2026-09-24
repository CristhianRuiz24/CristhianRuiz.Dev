# Desglose de Tareas: Remediación de Auditoría

- [x] **T1: Blindaje Serverless (CORS, Honeypot, Errores y Validación)**
  - **Archivos:** `functions/api/contact.js`
  - **Acciones:**
    - Restringir CORS explícitamente a `https://cristhianruiz.dev` y `http://localhost:3000`.
    - Añadir validación estricta de regex/longitud en campos `email`, `phone` y `name`.
    - Implementar captura de `honeypot` (si llega lleno, retornar status HTTP 200 falso de inmediato sin enviar el correo).
    - Ocultar `err.message` y `resendError` en el bloque `catch`, devolviendo "Error interno del servidor".
  - **Hecho cuando:** La API devuelva código HTTP 400 con datos inválidos, 200 en envíos con el honeypot detectado, y rechace peticiones CORS desde orígenes no autorizados.

- [x] **T2: Modificación Frontend Formulario y Honeypot**
  - **Archivos:** `index.html`, `js/validation-utils.js` (si aplica)
  - **Acciones:**
    - Añadir un campo oculto `website` (o similar) como honeypot al formulario de `index.html` asegurando que los estilos lo invisibilicen visualmente sin usar `display: none` directo si es evitable (o con clase adecuada).
    - Asegurar que la lógica de JS envíe este campo dentro del payload JSON al backend.
  - **Hecho cuando:** El payload de red enviado hacia la API `/api/contact` contenga el campo señuelo honeypot en blanco en un flujo de usuario real.

- [x] **T3: Implementación CSP y Seguridad Global**
  - **Archivos:** `_headers`
  - **Acciones:**
    - Crear el archivo `_headers` en la raíz (o editar si existe) añadiendo la política global de `Content-Security-Policy`.
  - **Hecho cuando:** Exista un archivo `_headers` con la configuración CSP requerida para proteger la aplicación.

- [x] **T4: Refactorización CSS y Privacidad**
  - **Archivos:** `aviso-de-privacidad.html`, `css/components/privacy.css`
  - **Acciones:**
    - Extraer los estilos encapsulados en `<style>` dentro del HTML de privacidad.
    - Moverlos hacia el nuevo archivo `css/components/privacy.css`.
    - Vincular la hoja de estilo en el `<head>` del HTML.
  - **Hecho cuando:** El HTML `aviso-de-privacidad.html` carezca de la etiqueta `<style>` y cargue exitosamente su CSS externo.

- [x] **T5: Optimización de Performance (Fonts y Redundancias)**
  - **Archivos:** `index.html`, `aviso-de-privacidad.html`, `css/main.css`
  - **Acciones:**
    - Eliminar la directiva `@import` de fuentes en `main.css`.
    - Incorporar la carga de Google Fonts por medio de `<link rel="preload">` y `<link rel="stylesheet">` en los HTMLs.
    - Eliminar la llamada redundante/duplicada a `js/config.js` en `index.html`.
    - Homogeneizar el `<meta name="theme-color">` hacia la misma paleta oscura (`#0A0C10`).
  - **Hecho cuando:** No existan directivas `@import` bloqueantes en los CSS y la consola no arroje advertencias de carga repetida de scripts.

- [x] **T6: Salvaguardas Grid e Iconografía**
  - **Archivos:** `css/layout/navbar.css` (o equivalentes de Grid estructural), `index.html` (sección de precios)
  - **Acciones:**
    - Modificar la propiedad de columnas grid a `minmax(0, 1fr)` en el contenedor principal afectado y anexar `min-width: 0` a sus hijos directos.
    - Remplazar el carácter Unicode "★" en la tabla de precios por un icono vectorial SVG estilizado (con la clase correspondiente y usando `currentColor`).
  - **Hecho cuando:** El inspeccionador de elementos valide la protección del Grid CSS y los emojis Unicode hayan sido eliminados en favor del SVG.

- [x] **T7: Limpieza de Repositorio de Assets**
  - **Archivos:** Carpeta `assets/img/` y derivados.
  - **Acciones:**
    - Identificar mediante búsqueda imágenes o iconos en la carpeta que no estén siendo referenciados en ningún CSS o HTML del proyecto.
    - Borrarlos físicamente y preparar para el commit final.
  - **Hecho cuando:** El directorio de assets únicamente contenga los archivos multimedia activamente referenciados y visibles en el código productivo.
