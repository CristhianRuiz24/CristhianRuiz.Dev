# Tareas — Feature 021: Remediación de Calculadora de Ahorro, ROI Real y Blindaje Comercial

**Estado:** ✅ Completada y Validada al 100%  
Referencia: `specs/021-remediacion-calculadora-ahorro-roi-y-blindaje-comercial/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Refactorización Matemática, Amortización Real y Formateo de Moneda Negativa**
  - **Archivos:** `js/modules/savings-calculator.js`
  - **Alcance:** 
    - Corregir `formatCurrencyMXN` para anteponer el signo menos al símbolo de pesos en valores negativos (`-$X,XXX MXN`).
    - Recalibrar `calculateSavings` para que devuelva `isConsultative: true` y `roiMonths: 0` cuando `netSavings <= 0`.
    - Ajustar la amortización de `pkg2` para computar meses reales durante el Año 1 (`Math.ceil(5900 / expense)`) únicamente cuando `expense >= 492`.
  - **Hecho cuando:** `calculateSavings(400, 'pkg2')` retorne `netSavings: -1480`, `roiMonths: 0` e `isConsultative: true`, y `formatCurrencyMXN(-1480, true)` devuelva `-$1,480 MXN`.

- [x] **T2: Asociación Inteligente de Presets del Mercado a Paquetes CrisDev**
  - **Archivos:** `index.html`, `js/modules/savings-calculator.js`
  - **Alcance:**
    - Agregar atributos `data-suggested-package="pkg1"` al preset de Wix ($400) y `data-suggested-package="pkg2"` a los presets de Encuadrado ($990), Doctoralia Starter ($1,350) y Doctoralia Plus ($2,370).
    - En el escuchador de eventos click de los presets, actualizar no solo el valor del slider sino conmutar automáticamente la píldora activa de paquete hacia el paquete sugerido y recalcular.
  - **Hecho cuando:** Al hacer clic en Wix ($400), la calculadora seleccione automáticamente `Paquete 01 (Solo Web)` y muestre un ahorro positivo de `+$9,600 MXN`.

- [x] **T3: Estilos y Renderizado del Estado Consultivo (`.card-consultative`) y CTA Dinámico**
  - **Archivos:** `css/components/savings-calculator.css`, `index.html`, `js/modules/savings-calculator.js`
  - **Alcance:**
    - Diseñar estilos para `.calc-metric-card.card-consultative` con fondo sobrio azul pizarra/neutro, borde suave y cero acentos verdes.
    - Cuando `netSavings <= 0`, ocultar el badge de amortización, mostrar titular de comparativa de alcance, texto explicativo y botón interactivo para conmutar a Paquete 01.
    - Actualizar el botón de WhatsApp para que en estado consultivo ofrezca asesoría personalizada sin cifras negativas.
  - **Hecho cuando:** Al forzar Paquete 02 con $400/mes, la tarjeta destacada cambie a modo consultivo sin números verdes ni badges falsos, y el botón de WhatsApp no contenga textos con pérdidas.

- [x] **T4: Adaptación Contextual del Banner de Retorno de Inversión**
  - **Archivos:** `index.html`, `js/modules/savings-calculator.js`
  - **Alcance:**
    - Hacer reactivo el contenedor `.calculator-recovery-banner`:
      - Si `packageType === 'pkg1'`: mostrar mensaje de retorno por captación de nuevos pacientes en web propia sin comisiones.
      - Si `packageType === 'pkg2'`: mostrar mensaje de mitigación de ausentismo mediante recordatorios automáticos de WhatsApp.
  - **Hecho cuando:** Cambiar de paquete actualice suavemente el texto del banner con el argumento comercial correspondiente.

- [x] **T5: Suite de Pruebas Automatizadas en Node.js**
  - **Archivos:** `tests/savings-calculator.test.js`
  - **Alcance:**
    - Expandir `tests/savings-calculator.test.js` con pruebas unitarias para:
      - Formateo de números negativos (`-$1,480 MXN`).
      - Detección de estado consultivo cuando `netSavings <= 0`.
      - Amortización exacta para $400 en pkg1, $990 en pkg2, $1,350 en pkg2, $2,370 en pkg2.
      - Generación de URL de WhatsApp en estado de ahorro normal vs estado consultivo.
  - **Hecho cuando:** `npm test` ejecute y pase el 100% de las pruebas sin fallos.

- [x] **T6: Verificación Visual en Navegador (Desktop y Móvil) y Cierre Documental**
  - **Archivos:** Servidor local (puerto 3000), `overview/tasks.md`, `overview/session.md`
  - **Alcance:**
    - Probar en navegador la interacción de presets, el cambio fluido a Paquete 01 con Wix, el comportamiento del estado consultivo al arrastrar manualmente el slider a $400 en Paquete 02, y la adaptación del banner inferior.
    - Validar en viewport móvil (390px) y escritorio (1200px+), verificando 0 errores en consola.
  - **Hecho cuando:** Toda la experiencia de la calculadora sea matemáticamente impecable y visualmente sólida.
