# Tareas — Feature 019: Suite de Conversión Comercial: Calculadora Interactiva de Ahorro y ROI, Badges de Confianza Médica (NOM-004) y Demostración Consultiva en Vivo

**Estado:** ⬜ Pendiente (A la espera de autorización para implementar)  
**Referencia:** `specs/019-calculadora-ahorro-badges-confianza-y-demo-en-vivo/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [ ] **T1: Creación del componente de Badges de Confianza Médica en el Hero**
  - **Archivos:** `index.html`, `css/components/hero.css`
  - **Alcance:** Insertar en el Hero los 3 badges vectoriales SVG (NOM-004, Base de datos privada, $0 rentas / 0% comisiones) con estilos elásticos `minmax(0, 1fr)` y adaptación multi-tema.
  - **Hecho cuando:** Los 3 badges se visualicen perfectamente en desktop y móvil en tema claro y oscuro sin emojis de sistema.

- [ ] **T2: Estilos modulares de la Calculadora de Ahorro (`css/components/savings-calculator.css`)**
  - **Archivos:** `css/components/savings-calculator.css`, `css/main.css`
  - **Alcance:** Diseñar la tarjeta de la calculadora, slider nativo personalizado, botones de presets rápidos, tarjetas de métricas en grid elástico y acentos de glow clínico.
  - **Hecho cuando:** La hoja de estilos esté importada en `main.css` y lista para renderizarse sin dependencias externas.

- [ ] **T3: Estructura HTML de la Sección `#savings-calculator` en `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:** Integrar la sección interactiva entre `#pricing` y `#comparison`, con controles accesibles (`aria-label`, `aria-valuenow`), presets rápidos y métrica de amortización por ausentismo.
  - **Hecho cuando:** La sección esté integrada limpiamente en el flujo secuencial del DOM.

- [ ] **T4: Módulo JavaScript de Cálculo Interactivo y Sincronización de WhatsApp**
  - **Archivos:** `js/modules/savings-calculator.js`, `index.html`
  - **Alcance:** Implementar el cálculo en tiempo real a 36 meses, alternancia de paquetes CrisDev, presets de un clic y actualización dinámica del enlace de WhatsApp.
  - **Hecho cuando:** Mover el slider o presionar un preset recalcule los números instantáneamente y adapte el mensaje de WhatsApp.

- [ ] **T5: Integración del Selector de Demostración Consultiva de 15 Minutos en `#contact`**
  - **Archivos:** `index.html`, `js/modules/savings-calculator.js`
  - **Alcance:** Añadir el selector para videollamada demostrativa de 15 minutos en pantalla compartida y vincularlo al mensaje de WhatsApp.
  - **Hecho cuando:** El terapeuta pueda seleccionar la opción y el CTA prepare el mensaje de demo.

- [ ] **T6: Pruebas Unitarias Automatizadas en Node.js (`tests/savings-calculator.test.js`)**
  - **Archivos:** `tests/savings-calculator.test.js`, `package.json`
  - **Alcance:** Crear pruebas para validar las fórmulas matemáticas del ahorro a 3 años y casos límite.
  - **Hecho cuando:** `npm test` ejecute y apruebe todas las pruebas al 100%.

- [ ] **T7: Verificación Visual en Navegador (Desktop y Móvil) y Cierre Documental**
  - **Archivos:** Servidor local (puerto 3000), `overview/tasks.md`, `overview/session.md`
  - **Alcance:** Verificar la interacción del slider, contraste en modo claro/oscuro, 0 errores en consola JS, y presentar resumen de cambios para gobernanza Git.
  - **Hecho cuando:** Todo el flujo esté probado en vivo sin fricción.
