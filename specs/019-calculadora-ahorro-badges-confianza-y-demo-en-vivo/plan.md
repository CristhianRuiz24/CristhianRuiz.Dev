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

### A. Badges de Confianza en el Hero (`.hero-trust-bar`)
- Ubicación: En la columna izquierda del Hero (`.hero-content`), inmediatamente después de `.hero-actions`.
- Layout: Contenedor flex elástico con `gap: 0.65rem` y `flex-wrap: wrap`.
- Iconos: SVG técnicos con `stroke="currentColor"`, tamaño `15x15px`:
  1. *Shield Check* -> `Lineamientos NOM-004-SSA3 (Expedientes)`
  2. *Server / Database* -> `Base de Datos Privada (PostgreSQL)`
  3. *Zap / Percentage* -> `0% Comisiones por Paciente`

### B. Calculadora Interactiva de Ahorro (`#savings-calculator`)
- Ubicación: En `index.html`, entre la sección `#pricing` y `#comparison`.
- Elementos:
  1. Header editorial: Título `"Calcula tu Ahorro Real frente a Plataformas de Renta"` y subtítulo orientativo.
  2. Presets rápidos (Botones con `data-preset-value`):
     - `DIY / Wix ($400/m)`
     - `Agenda SaaS ($990/m)`
     - `Doctoralia Starter ($1,350/m)`
     - `Doctoralia Plus ($2,370/m)`
  3. Range Slider nativo: `<input type="range" id="monthlyExpenseSlider" min="500" max="3000" step="100" value="1350">`.
  4. Selector de Paquete CrisDev: Toggle o pastillas para alternar entre Paquete 01 ($4,800) y Paquete 02 ($15,880 a 3 años).
  5. Live Output Grid (3 tarjetas comparativas):
     - Tarjeta A: Gasto Acumulado en Suscripciones a 3 Años (`$XX,XXX MXN`).
     - Tarjeta B: Inversión en CrisDev a 3 Años (`$4,800` o `$15,880 MXN` con nota de anualidad).
     - Tarjeta C (Destacada con Neon Glow): **Ahorro Neto en 3 Años** (`+$XX,XXX MXN`) + Métrica de Amortización por Ausentismo.
  6. CTA dinámico: Botón hacia WhatsApp con texto preformateado con el cálculo exacto.

### C. Opción de Demo Consultiva en Contacto (`#contact`)
- Selector visual: Toggle/pills de selección de tipo de contacto:
  1. *"Hablar por WhatsApp"* (consulta habitual)
  2. *"Agendar Demo de 15 Min"* (videollamada en pantalla compartida)
- Modificación reactiva del enlace de WhatsApp para enviar el mensaje con la solicitud de demo en vivo.

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
