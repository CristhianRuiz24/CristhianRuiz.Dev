# Especificación — Feature 014: Reordenamiento de Navegación (FAQ al Final), Claridad en Enlaces a Videollamadas y Alcance de Personalización en Paquete 01

**Estado:** ✅ Aprobada para Ejecución  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 001–013.

---

## 1. Contexto y Justificación del Negocio

A partir de la revisión interactiva de la versión local de la landing page con el usuario, se identificaron tres oportunidades clave de optimización comercial y fidelidad técnica:

1. **Inconsistencia de Flujo y Orden de FAQ / Sobre Mí:**
   - En la barra de navegación (`header.html`), `FAQ` se encontraba posicionado antes de `Privacidad` y `Sobre Mí`.
   - Adicionalmente, en el cuerpo de `index.html`, la sección `#pricing` aparecía después de `#operator` (Sobre Mí), mientras que en el navbar figuraba antes.
   - Es necesario alinear tanto la barra de navegación como el flujo de lectura secuencial del usuario para que el recorrido sea: descubrimiento de soluciones y demo &rarr; precios transparentes &rarr; garantías de seguridad &rarr; perfil profesional humano (Sobre Mí) &rarr; resolución de objeciones (FAQ al final) &rarr; conversión final (Contacto).

2. **Precisión Técnica en el Módulo de Videollamadas:**
   - La etiqueta actual *"✓ Videollamadas integradas"* sugiere la presencia de una plataforma nativa de videoconferencias dentro del sistema (como un software WebRTC o servidor de streaming propio), lo cual no refleja la arquitectura real.
   - La funcionalidad operativa real consiste en la capacidad de generar, almacenar y vincular enlaces directos a salas de **Zoom** o **Google Meet** en cada cita de la agenda con 1 solo clic.
   - Para salvaguardar la honestidad técnica y evitar reclamos por falsas expectativas, el concepto debe reemplazarse por *"Enlaces para videollamadas (Zoom / Google Meet)"* en todos los puntos de contacto (Soluciones, Demo de 5 pilares, Precios y FAQ).

3. **Claridad del Alcance de Personalización en el Paquete 01 (Presencia Digital):**
   - La redacción anterior (*"Hasta 8 secciones dedicadas"*) transmitía una estructura rígida tipo plantilla.
   - El profesional debe saber con total certidumbre que la personalización completa de su página web está incluida (añadir secciones adicionales, adaptar las existentes a su enfoque, modificar estructura, redacción, fotografía e identidad visual).
   - Simultáneamente, se debe establecer un límite transparente para proteger la viabilidad del proyecto: modificaciones estructurales complejas (como portales de pacientes con login, pasarelas de cobro con membresías, multi-idioma con bases de datos o software a medida) requieren una cotización independiente.

---

## 2. Principios y Objetivos

- **Coherencia Jerárquica 1:1:** El orden de los enlaces de la barra de navegación, el drawer móvil y el pie de página debe coincidir de forma idéntica con el orden secuencial de las secciones en el DOM de `index.html`.
- **Honestidad y Transparencia Técnica:** Cada beneficio comercial debe describir con precisión la ingeniería que se entrega al cliente, sin hipérboles que prometan infraestructura inexistente.
- **Límites Comerciales Claros:** Estimular la confianza del cliente en la adaptabilidad de su sitio web sin dejar lagunas que permitan asumir desarrollos de software complejos por el costo de una landing page.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Reordenamiento Estructural y de Navegación:**
  - Sincronización en `partials/header.html` (navbar desktop y drawer móvil), `partials/footer.html` e `index.html`.
  - Orden unificado: `Inicio` (`#hero`) &rarr; `Presencia Digital` (`#web-ui`) &rarr; `Gestión de Consultas` (`#infrastructure`) &rarr; `Planes y Precios` (`#pricing`) &rarr; `Privacidad` (`#security`) &rarr; `Sobre Mí` (`#operator`) &rarr; `FAQ` (`#faq`) &rarr; `Contacto` (`#contact`).
  - Reubicación física de las secciones en `index.html` para respetar dicha secuencia natural.
- **Ajuste de Terminología en Videollamadas:**
  - Reemplazo de *"Videollamadas integradas"* por *"Enlaces para videollamadas (Zoom / Google Meet)"* o redacción equivalente sin ambigüedad en:
    - Tarjeta *"Tu Plataforma de Gestión"* en la sección `#solutions`.
    - Tarjeta del 5.º Pilar en la sección `#infrastructure` (Demo).
    - Viñeta de características del Paquete 02 en `#pricing`.
    - Pregunta frecuente n.º 8 en `#faq`.
    - Schema.org JSON-LD y `/llms.txt`.
- **Refuerzo de Personalización y Límites en Paquete 01 (`#pricing` y `#faq`):**
  - Viñeta de Paquete 01 actualizada: Especificar que la personalización está 100% incluida (posibilidad de agregar más secciones o modificar las existentes según la necesidad de la consulta).
  - Caja de alcance en la tarjeta de Paquete 01: *"La personalización de tu identidad, secciones y contenido está incluida en el diseño web. Requerimientos técnicos avanzados o sistemas especiales se cotizan por separado."*
  - FAQ 1 y FAQ 9 enriquecidas con ejemplos concretos de qué entra en la personalización de la página web y qué entra como cotización de desarrollo a medida.
- **Sincronización de Partials y Pruebas:**
  - Ejecución de `npm run sync:partials`.
  - Validación del 100% de la suite de pruebas automatizadas (`npm test`).

### Fuera de Alcance (Out of Scope):
- Alterar los precios establecidos ($4,800 MXN para Presencia Digital y $5,900 MXN para Consultorio Inteligente).
- Modificar el backend serverless de contacto (`functions/api/contact.js`).
- Modificar la lógica de temas o el reproductor interactivo.

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Reordenamiento de Navegación y Secciones
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará los enlaces de navegación en `header.html` (desktop y drawer móvil) y `footer.html` en la siguiente secuencia estricta:
  1. `Inicio` (`#hero`)
  2. `Presencia Digital` (`#web-ui`)
  3. `Gestión de Consultas` (`#infrastructure`)
  4. `Planes y Precios` (`#pricing`)
  5. `Privacidad` (`#security`)
  6. `Sobre Mí` (`#operator`)
  7. `FAQ` (`#faq`)
- **RF-1.2 (Ubicuo):** EL SISTEMA estructurará las secciones en el cuerpo principal de `index.html` en el orden secuencial idéntico:
  1. Hero Section (`#hero`)
  2. Bloque de Claridad / Dualidad (`#solutions`)
  3. Demostración y Pilares del Sistema (`#infrastructure`)
  4. Presencia Digital y Caso PsicoLau (`#web-ui`)
  5. Planes y Precios Transparentes (`#pricing`)
  6. Seguridad, Privacidad y Cifrado (`#security`)
  7. Sobre Mí / Perfil Profesional (`#operator`)
  8. Preguntas Frecuentes (`#faq`)
  9. Contacto Directo (`#contact`)

### Módulo 2: Precisión en Enlaces a Videollamadas
- **RF-2.1 (Ubicuo):** EN LA TARJETA DE GESTIÓN DE `#solutions`, EL SISTEMA sustituirá la viñeta *"✓ Videollamadas integradas"* por *"✓ Enlaces a videollamadas (Zoom / Google Meet)"*.
- **RF-2.2 (Ubicuo):** EN LOS PILARES DEL DEMO EN `#infrastructure`, EL SISTEMA titulará la tarjeta del módulo de videollamadas como *"Enlaces a Videollamadas"* con la descripción enfocada en la asociación de links de Zoom o Google Meet a cada consulta agendada.
- **RF-2.3 (Ubicuo):** EN LA LISTA DE CARACTERÍSTICAS DE `#pricing` (Paquete 02), EL SISTEMA exhibirá *"Enlaces para Zoom / Meet: Incorpora fácilmente el link de tu videollamada en tus citas online."*
- **RF-2.4 (Ubicuo):** EN LA SECCIÓN `#faq` (Pregunta 8), EL SISTEMA responderá con precisión que el panel permite añadir el enlace de Zoom o Meet a la cita virtual para abrirla y compartirla con el paciente, sin presentarlo como un servidor propio de streaming.

### Módulo 3: Alcance de Personalización en Paquete 01 y Límite de Cambios Grandes
- **RF-3.1 (Ubicuo):** EN EL PAQUETE 01 DE `#pricing`, EL SISTEMA actualizará la viñeta de arquitectura web detallando que la personalización está incluida (capacidad de agregar más secciones o adaptar las existentes a las necesidades de la consulta).
- **RF-3.2 (Ubicuo):** EN EL PAQUETE 01 DE `#pricing`, EL SISTEMA desplegará una caja de alcance (`.pricing-scope-clarification`) que indique: *"La personalización de tu identidad, secciones y contenido está incluida en el diseño web. Requerimientos técnicos avanzados o integraciones especiales se cotizan por separado."*
- **RF-3.3 (Ubicuo):** EN LA SECCIÓN `#faq`, EL SISTEMA especificará con claridad qué incluye la personalización (secciones a medida, contenido, trayectoria, fotos, enlaces, colores y estructura) y qué se considera un cambio grande sujeto a cotización independiente (desarrollo de portales de usuarios, pasarelas de pago recurrentes o integraciones con sistemas externos).

### Módulo 4: Sincronización y Consistencia de Enlaces
- **RF-4.1 (Ubicuo):** EL SISTEMA garantizará que todos los enlaces internos tipo ancla (`#...`) continúen apuntando a identificadores válidos en el DOM de `index.html`.
- **RF-4.2 (Ubicuo):** EL SISTEMA sincronizará los cambios de cabecera y pie de página en `aviso-de-privacidad.html` mediante el script `scripts/sync-partials.js`.

---

## 5. Plan de Verificación

1. **Pruebas Automatizadas (`npm test`):**
   - Ejecución de la suite completa de 20 tests verificando:
     - Integridad de tokens CSS (`tests/css-tokens.test.js`).
     - Integridad de anclas de navegación en `index.html` y `aviso-de-privacidad.html` (`tests/link-integrity.test.js`).
     - Validación y sanitización de formularios (`tests/form-validation.test.js`).
     - Cumplimiento de longitud en `<title>` y `<meta name="description">` (`tests/seo-metadata.test.js`).
2. **Sincronización de Partials (`npm run sync:partials`):**
   - Verificación de replicación homogénea en `index.html` y `aviso-de-privacidad.html`.
3. **Verificación Visual en Navegador (`http://localhost:3000`):**
   - Validar que el orden en el Navbar (`Planes y Precios` &rarr; `Privacidad` &rarr; `Sobre Mí` &rarr; `FAQ`) se corresponda perfectamente con el scroll visual de la página.
   - Confirmar que la tarjeta de Soluciones y el Demo ya no muestren "Videollamadas integradas".
   - Confirmar la presencia de la nota de personalización y alcance en la tarjeta de Presencia Digital ($4,800 MXN).
