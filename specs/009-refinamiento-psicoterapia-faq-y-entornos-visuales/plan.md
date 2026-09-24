# Plan Técnico — Feature 009: Hiper-Especialización para Psicoterapeutas, Entornos Visuales en Previews, Claridad de Dominio Anual y Sección FAQ

**Estado:** 📋 Aprobado para Ejecución  
**Fecha:** 2026-09-24  
**Referencia:** `specs/009-refinamiento-psicoterapia-faq-y-entornos-visuales/spec.md`

---

## 1. Arquitectura y Módulos Afectados

El objetivo es refinamiento estético, de copy y de conversión sin introducir dependencias pesadas, manteniendo el 100% de rendimiento nativo en HTML5/CSS3.

### Archivos Afectados:
1. `index.html`:
   - Integración del enlace `#faq` en Navbar, Drawer móvil y Footer.
   - Refinamiento de copy hacia psicoterapeutas y salud mental en Hero, PsicoLau, Demo y Precios.
   - Estructuración de "entornos visuales" con tarjeta de escaparate en `#web-ui` y dock de acciones con pilares modulares en `#infrastructure`.
   - Inserción de la nueva sección semántica `<section class="faq-section section-spacing" id="faq">` antes de `#contact`.
2. `partials/header.html` y `partials/footer.html`:
   - Adición del enlace ancla `Preguntas Frecuentes` (`#faq`).
3. `css/components/terminal.css`:
   - Estilos del contenedor de escaparate (`.preview-showcase-card`), dock de botones de demo (`.demo-actions-dock`) y tarjetas modulares de pilares (`.demo-pillar-card`).
4. `css/components/pricing.css`:
   - Estilos para la clarificación del costo de dominio propio y anualidad.
5. `css/components/faq.css` (Nuevo componente modular):
   - Estilos de acordeones semánticos (`<details>`, `<summary>`), rotación fluida de icono vectorial (`+` a `✕` o chevron `↓`), micro-interacciones hover y adaptación en modo claro y oscuro.
6. `index.html` y `aviso-de-privacidad.html`:
   - Enlace `<link rel="stylesheet" href="css/components/faq.css?v=1.0">`.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

### Decisión 1: Acordeones con `<details>` y `<summary>` nativos vs. Librerías JS de Acordeón
- **Decisión adoptada:** Emplear `<details>` y `<summary>` nativos de HTML5 con estilizado CSS moderno y pseudo-elementos/iconos vectoriales.
- **Alternativa descartada:** Componentes interactivos en JavaScript con event listeners y manipulación de clases (`.is-open`).
- **Motivo:** Cero JavaScript requerido para la interactividad básica, máxima accesibilidad nativa por teclado y lectores de pantalla, rendimiento instantáneo y compatibilidad universal sin riesgo de rotura de scripts.

### Decisión 2: Modularización en `css/components/faq.css` vs. Agrupar en `main.css`
- **Decisión adoptada:** Crear un archivo dedicado `css/components/faq.css`.
- **Alternativa descartada:** Añadir las reglas de FAQ al final de `main.css`.
- **Motivo:** Preserva la arquitectura modular establecida en el proyecto (`hero.css`, `terminal.css`, `pricing.css`, `form.css`), facilitando el mantenimiento y garantizando un escaneo limpio en la suite de tokens CSS.

### Decisión 3: Estructuración de "Entornos" con Contenedores Elevados vs. Mockup de Navegador con Dots
- **Decisión adoptada:** Utilizar tarjetas de escaparate modernas (*Showcase Cards*) con cabecera sobria, bordes definidos (`var(--border-subtle)`), fondos elevados (`var(--bg-surface-elevated)`) y micro-sombras.
- **Alternativa descartada:** Reintroducir ventanas simuladas con botones de semáforo rojo/amarillo/verde tipo Mac.
- **Motivo:** La Feature 008 erradicó los dots por su aspecto tosco de terminal hacker. Los entornos clínicos contemporáneos (Clinical SaaS) se estructuran con tarjetas sobrias, respiración espacial armónica y docks elevados.

---

## 3. Plan de Migración y Despliegue

1. **Paso 1:** Crear `css/components/faq.css` y vincularlo en `<head>`.
2. **Paso 2:** Refinar la preview de PsicoLau (`#web-ui`) en `index.html` y `css/components/terminal.css` para crear el entorno de escaparate con márgenes 360°.
3. **Paso 3:** Refinar la sección Gestión de Consultas (`#infrastructure`) en `index.html` y `css/components/terminal.css`: dock de botones y pilares modulares.
4. **Paso 4:** Actualizar copy especializado para psicoterapeutas y transparentar el dominio anual en Precios (`#pricing`).
5. **Paso 5:** Implementar la sección `#faq` en `index.html` y actualizar los partials (`header.html`, `footer.html`).
6. **Paso 6:** Sincronizar partials con `npm run sync:partials` y ejecutar la suite de testing automatizada (`npm test`).
7. **Paso 7:** Validación visual en navegador en escritorio y móvil (390px), revisión de consola y reporte final.
