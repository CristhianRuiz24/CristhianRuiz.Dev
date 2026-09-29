# Tareas — Feature 019: Suite de Conversión Comercial: Calculadora Interactiva de Ahorro y ROI, Badges de Confianza Médica y Demostración Consultiva en Vivo

**Estado:** ✅ Completada y Validada al 100%  
Referencia: `specs/019-calculadora-ahorro-badges-confianza-y-demo-en-vivo/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Creación del componente de Badges de Confianza Médica en el Hero**
  - **Archivos:** `index.html`, `css/components/hero.css`
  - **Alcance:** Actualizar la barra de confianza bajo los botones de acción del Hero con 3 píldoras vectoriales SVG técnicas: *Lineamientos NOM-004-SSA3*, *Base de Datos Privada (PostgreSQL)* y *0% Comisiones por Paciente*.
  - **Hecho cuando:** Los 3 badges se visualicen perfectamente en desktop y móvil en tema claro y oscuro sin emojis de sistema y sin romper el layout de 2 columnas.

- [x] **T2: Estilos modulares de la Calculadora de Ahorro (`css/components/savings-calculator.css`)**
  - **Archivos:** `css/components/savings-calculator.css`, `index.html`
  - **Alcance:** Diseñar la tarjeta de la calculadora, slider nativo personalizado, botones de presets rápidos, tarjetas de métricas en grid elástico `minmax(0, 1fr)` y acentos de glow clínico.
  - **Hecho cuando:** La hoja de estilos esté vinculada con `?v=7.0` y lista para renderizarse sin dependencias externas.

- [x] **T3: Estructura HTML de la Sección `#savings-calculator` en `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:** Integrar la sección interactiva entre `#pricing` y `#comparison`, con controles accesibles (`aria-label`, `aria-valuenow`), presets rápidos ($400, $990, $1,350, $2,370), desglose honesto de inversión CrisDev a 3 años ($4,800 / $15,880 MXN) y métrica de amortización por ausentismo.
  - **Hecho cuando:** La sección esté integrada limpiamente en el flujo secuencial del DOM.

- [x] **T4: Módulo JavaScript de Cálculo Interactivo y Sincronización de WhatsApp**
  - **Archivos:** `js/modules/savings-calculator.js`, `index.html`
  - **Alcance:** Implementar funciones puras exportadas de cálculo a 36 meses, alternancia de paquetes CrisDev, presets de un clic y actualización dinámica del enlace de WhatsApp.
  - **Hecho cuando:** Mover el slider o presionar un preset recalcule los números instantáneamente y adapte el mensaje de WhatsApp.

- [x] **T5: Integración del Selector de Demostración Consultiva de 15 Minutos en `#contact`**
  - **Archivos:** `index.html`, `js/modules/savings-calculator.js`
  - **Alcance:** Añadir el selector interactivo para videollamada demostrativa de 15 minutos en pantalla compartida y vincularlo al mensaje de WhatsApp.
  - **Hecho cuando:** El terapeuta pueda seleccionar la opción y el CTA prepare el mensaje de demo.

- [x] **T6: Pruebas Unitarias Automatizadas en Node.js (`tests/savings-calculator.test.js`)**
  - **Archivos:** `tests/savings-calculator.test.js`, `package.json`
  - **Alcance:** Crear pruebas para validar las fórmulas matemáticas del ahorro a 3 años y casos límite ($500, $1,350, $2,370, $3,000 MXN).
  - **Hecho cuando:** `npm test` ejecute y apruebe todas las pruebas al 100%.

- [x] **T7: Verificación Visual en Navegador (Desktop y Móvil) y Cierre Documental**
  - **Archivos:** Servidor local (puerto 3000), `overview/tasks.md`, `overview/session.md`
  - **Alcance:** Verificar la interacción del slider, contraste en modo claro/oscuro, 0 errores en consola JS, y presentar resumen de cambios para gobernanza Git.
  - **Hecho cuando:** Todo el flujo esté probado en vivo sin fricción.
