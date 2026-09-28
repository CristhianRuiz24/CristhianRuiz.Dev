# Plan Técnico — Feature 019: Suite de Conversión Comercial: Calculadora Interactiva de Ahorro y ROI, Badges de Confianza Médica (NOM-004) y Demostración Consultiva en Vivo

**Estado:** 📝 En Revisión  
**Fecha:** 2026-09-28  
**Referencia:** `specs/019-calculadora-ahorro-badges-confianza-y-demo-en-vivo/spec.md`

---

## 1. Arquitectura de Archivos y Componentes

| Archivo | Tipo de Cambio | Responsabilidad |
| :--- | :--- | :--- |
| `css/components/savings-calculator.css` | **Creación** | Estilos modulares del range slider, tarjetas de métricas, presets rápidos y responsive safeguards `minmax(0, 1fr)`. |
| `css/components/hero.css` | **Modificación** | Estilos de la franja de badges de confianza médica (`.hero-trust-badges`) con soporte Light/Dark Mode. |
| `css/main.css` | **Modificación** | Inclusión de `@import 'components/savings-calculator.css';`. |
| `js/modules/savings-calculator.js` | **Creación** | Lógica de cálculo en tiempo real, formateo monetario MXN, presets rápidos y sincronización dinámica con enlace de WhatsApp. |
| `index.html` | **Modificación** | Inserción de badges en Hero, estructura de sección `#savings-calculator`, opción de demo de 15 min en `#contact` y carga modular del script. |
| `tests/savings-calculator.test.js` | **Creación** | Pruebas unitarias Node.js para las fórmulas de ahorro a 3 años y casos límite ($500, $1,500, $3,000 MXN). |

---

## 2. Especificación Técnica de Componentes

### A. Badges de Confianza en el Hero (`.hero-trust-badges`)
- Ubicación: Inmediatamente después de `.hero-actions` en `index.html`.
- Layout: Flexbox elástico con `gap: var(--spacing-sm)` y `flex-wrap: wrap`.
- Iconos: SVG con `stroke="currentColor"`, tamaño `16x16px` o `18x18px`:
  1. *Shield Check* -> `NOM-004-SSA3-2012 (Expediente Clínico)`
  2. *Server / Database* -> `Base de Datos Privada (PostgreSQL / Supabase)`
  3. *Zap / Lock-off* -> `0% Comisiones · $0 Rentas Mensuales`

### B. Calculadora Interactiva de Ahorro (`#savings-calculator`)
- Ubicación: En `index.html`, entre la sección `#pricing` y `#comparison`.
- Elementos:
  1. Header editorial: Título `"Calcula tu Ahorro Real frente a Rentas Mensuales"` y subtítulo.
  2. Presets rápidos (Botones con `data-preset-value`):
     - `DIY / Wix ($400/m)`
     - `Agenda SaaS / Encuadrado ($990/m)`
     - `Doctoralia ($1,800/m)`
  3. Range Slider nativo: `<input type="range" id="monthly-expense-slider" min="500" max="3000" step="100" value="1800">`.
  4. Selector de Paquete CrisDev: Toggle o pills para alternar entre Paquete 01 ($4,800) y Paquete 02 ($5,900).
  5. Live Output Grid (3 tarjetas comparativas):
     - Tarjeta A: Gasto Acumulado en Suscripciones a 3 Años (`$64,800 MXN`).
     - Tarjeta B: Inversión Única CrisDev (`$4,800` o `$5,900 MXN`).
     - Tarjeta C (Destacada con Neon Glow): **Ahorro Neto en 3 Años** (`+$58,900 MXN`) + Mensaje de Retorno por Reducción de Ausentismo.
  6. CTA dinámico: Botón hacia WhatsApp / `#contact` con texto preformateado.

### C. Opción de Demo Consultiva en Contacto (`#contact`)
- Selector visual: Checkbox o radio button estilizado `"Deseo agendar una videollamada demostrativa de 15 minutos en pantalla compartida"`.
- Modificación del enlace de WhatsApp para enviar el mensaje con la solicitud de demo en vivo.

---

## 3. Plan de Pruebas y Validación

1. **Unit Testing (`npm test`):**
   - Ejecutar `node --test tests/savings-calculator.test.js`.
   - Validar coherencia numérica en todos los rangos ($500 - $3,000 MXN).
2. **Visual & Responsive Testing:**
   - Comprobación en viewport móvil (375px a 430px) y escritorio (1280px+).
   - Comprobación multi-tema (Claro y Modo Oscuro Deep Navy).
3. **Consola y Rendimiento:**
   - 0 errores en consola JS, sin FOUC, interacción a 60 fps.
