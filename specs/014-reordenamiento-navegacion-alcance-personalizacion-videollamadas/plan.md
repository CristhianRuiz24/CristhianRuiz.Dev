# Plan Técnico — Feature 014: Reordenamiento de Navegación (FAQ al Final), Claridad en Enlaces a Videollamadas y Alcance de Personalización en Paquete 01

**Estado:** ✅ Aprobado  
**Referencia:** `specs/014-reordenamiento-navegacion-alcance-personalizacion-videollamadas/spec.md`

---

## 1. Arquitectura Técnica y Módulos Afectados

El objetivo de esta intervención es puramente estructural, de usabilidad y de precisión en el copywriting técnico, sin alterar tokens de diseño, paleta cromática ni backend serverless:

1. **`partials/header.html` (Fuente Única de Verdad de Cabecera):**
   - Sincronización del orden de navegación desktop (`.header-nav`):
     - `Inicio` (`#hero`)
     - `Presencia Digital` (`#web-ui`)
     - `Gestión de Consultas` (`#infrastructure`)
     - `Planes y Precios` (`#pricing`)
     - `Privacidad` (`#security`)
     - `Sobre Mí` (`#operator`)
     - `FAQ` (`#faq`)
   - Sincronización del drawer móvil (`.mobile-nav-links`) con el mismo orden idéntico.
2. **`partials/footer.html` (Fuente Única de Verdad de Pie de Página):**
   - Actualización de los enlaces de pie de página para coincidir con la secuencia unificada.
3. **`index.html` (Estructura DOM y Copy):**
   - Reubicación de la sección `<section class="pricing-section" id="pricing">` para situarse después de `#web-ui` y antes de `#security`.
   - Reubicación de la sección `<section class="faq-section" id="faq">` para ubicarse después de `#operator` y antes de `#contact`.
   - Modificación de la viñeta de videollamadas en `#solutions` (tarjeta *Tu Plataforma de Gestión*).
   - Actualización del 5.º pilar en `#infrastructure` (*Enlaces para Videollamadas*).
   - Inclusión de la caja de alcance de personalización `.pricing-scope-clarification` en el Paquete 01 de `#pricing`.
   - Refuerzo de la viñeta de personalización en Paquete 01.
   - Actualización de FAQ 1, FAQ 8 y FAQ 9 con delimitación explícita de alcance.
   - Sintonización de Schema.org JSON-LD.
4. **`llms.txt`:**
   - Actualización de descripciones de videollamadas y personalización del Paquete 01 para motores de IA.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

| Decisión Técnica | Alternativa Descartada | Justificación / Motivo |
| :--- | :--- | :--- |
| **Reordenar físicamente el DOM de `index.html` para empatar 1:1 con el navbar** | Mover sólo los enlaces del navbar dejando las secciones desordenadas | Si el orden de navegación difiere del flujo visual, al hacer click en enlaces contiguos el scroll salta de arriba hacia abajo erráticamente. Además, el orden lógico de compra es: Oferta &rarr; Precios &rarr; Seguridad &rarr; Persona detrás &rarr; Dudas (FAQ) &rarr; Contacto. |
| **Cambiar "Videollamadas integradas" por "Enlaces para videollamadas (Zoom / Google Meet)"** | Eliminar por completo la mención a videollamadas | Los psicólogos atienden con frecuencia pacientes online. Decir que pueden asociar enlaces de Zoom o Google Meet a cada cita agrega un valor real y concreto, pero sin mentir prometiendo un software de videollamada propio. |
| **Reutilizar la clase `.pricing-scope-clarification` en el Paquete 01** | Crear una nueva clase CSS ad-hoc | La clase ya cuenta con diseño, bordes, tipografía contenida y compatibilidad con modo claro y oscuro. Reutilizarla preserva la consistencia visual y no añade peso de CSS innecesario. |

---

## 3. Matriz de Trazabilidad (Spec &rarr; Plan)

| Requisito EARS | Tarea Asociada | Archivos Clave |
| :--- | :--- | :--- |
| **RF-1.1, RF-4.1, RF-4.2** | **T1** | `partials/header.html`, `partials/footer.html`, `scripts/sync-partials.js` |
| **RF-1.2** | **T2** | `index.html` (reordenamiento de secciones `#pricing`, `#security`, `#operator`, `#faq`) |
| **RF-2.1, RF-2.2, RF-2.3, RF-2.4** | **T3** | `index.html` (`#solutions`, `#infrastructure`, `#pricing`, `#faq`) |
| **RF-3.1, RF-3.2, RF-3.3** | **T4** | `index.html` (`#pricing`, `#faq`) |
| **RF-3.3, RF-2.4** | **T5** | `index.html` (JSON-LD), `llms.txt` |
| **RF-4.1, RF-4.2** | **T6** | `scripts/sync-partials.js`, `tests/` (`npm test`), verificación visual |
