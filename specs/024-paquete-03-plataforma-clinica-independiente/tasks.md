# Tareas — Feature 024: Paquete 03 - Plataforma Clínica Independiente (Solo Software/Agenda) y Tríada Comercial

**Estado:** ✅ Completada y Validada al 100%  
**Referencia:** `specs/024-paquete-03-plataforma-clinica-independiente/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Diseño y Estilos del Grid de 3 Columnas para la Tríada Comercial en `pricing.css`**
  - **Archivos:** `css/components/pricing.css`
  - **Alcance:**
    - Reconfigurar `.pricing-grid` para desplegar 3 columnas en pantallas grandes (`@media (min-width: 1024px)`) mediante `grid-template-columns: repeat(3, minmax(0, 1fr))`.
    - Ajustar estilos responsivos para tablets (1 o 2 columnas) y móviles (<768px, 1 columna apilada).
    - Asegurar que la tarjeta del Paquete 02 conserve su borde jerárquico destacado y su badge superior sin desalinear la altura del grid.
  - **Hecho cuando:** La cuadrícula se distribuya equilibradamente en 3 columnas en desktop y se apile de forma limpia en móvil con salvaguarda `minmax(0, 1fr)`. (Completado: grid 3 cols con salvaguardas, títulos balanceados y CTA alineados).

- [x] **T2: Integración de la Tarjeta Comercial del Paquete 03 en `#pricing` de `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:**
    - Insertar la tarjeta del Paquete 03 (Plataforma Clínica) entre el Paquete 01 y el Paquete 02.
    - Incluir: Sobretítulo editorial (*«¿Ya tienes página web o trabajas por redes sociales?»*), nombre comercial (*«Plataforma Clínica»*), descripción de dolor/beneficio, precio `$1,900 MXN (Pago Inicial de Puesta en Marcha)`, desglose de anticipo (`$950 MXN anticipo · $950 MXN al entregar tu plataforma lista`), cuota de servidor/mantenimiento (`$499 MXN / mes` o `$4,990 MXN / año`) y tiempo de entrega (`24 a 48 horas hábiles`).
    - Integrar acordeón `<details class="pricing-details-accordion">` con inclusiones completas y botón directo a WhatsApp con mensaje precargado específico.
  - **Hecho cuando:** La tarjeta esté presente en el DOM, su acordeón funcione con suavidad y el botón de WhatsApp apunte al número oficial con su texto codificado. (Completado: tarjeta integrada con badges armonizados y CTA directo).

- [x] **T3: Extensión Reactiva de la Calculadora de Ahorro y ROI para Paquete 03**
  - **Archivos:** `index.html`, `js/modules/savings-calculator.js`, `css/components/savings-calculator.css`
  - **Alcance:**
    - Agregar el tercer botón conmutador en `#savings-calculator`: `Plataforma Clínica (Paquete 03)`.
    - Actualizar `calculateSavings` en `js/modules/savings-calculator.js` para admitir `pkg3` con costo a 3 años de `$19,864 MXN` ($1,900 setup + $499 × 36) y cálculo de amortización en meses.
    - Manejar el estado consultivo (`isConsultative`) cuando el gasto sea menor o igual a $499/mes (ej. Wix $400/mes) invitando a alternar al Paquete 01.
    - Adaptar textos dinámicos de recuperación y actualizar el enlace dinámico de WhatsApp generado por `buildWhatsappUrl`.
  - **Hecho cuando:** Al seleccionar `pkg3`, la calculadora recalcule reactivamente la matemática a 3 años, el enlace de WhatsApp y el estado consultivo en tiempo real. (Completado: soporte integral para pkg3 con matemática exacta y selector responsive).

- [x] **T4: Pregunta Frecuente sobre Contratación Exclusiva de la Plataforma en `#faq` de `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:**
    - Añadir en la sección `#faq` el acordeón con la pregunta: *«¿Puedo contratar únicamente la plataforma clínica si ya tengo mi propia página web o uso redes sociales?»*.
    - Redactar la respuesta explicando que se configura en 24-48h, se asigna un subdominio seguro (o se conecta al subdominio del cliente), y que en el futuro puede integrar la página web si lo desea.
  - **Hecho cuando:** La pregunta esté presente en `#faq` de `index.html` con formato semántico `<details class="faq-item">`. (Completado: pregunta integrada y FAQ 6 actualizada con los 3 paquetes).

- [x] **T5: Sincronización en `comparativa-doctoralia.html`, Schema.org JSON-LD y `/llms.txt`**
  - **Archivos:** `comparativa-doctoralia.html`, `index.html`, `/llms.txt`
  - **Alcance:**
    - En `comparativa-doctoralia.html`, añadir mención clara en la tabla y en las notas de que es posible contratar solo la plataforma clínica por $1,900 setup + $499/mes como alternativa directa a Doctoralia.
    - En `index.html`, actualizar Schema.org JSON-LD añadiendo la nueva oferta al catálogo `ProfessionalService` y la nueva pregunta a `FAQPage`.
    - En `/llms.txt`, reflejar la estructura de los 3 paquetes y sus especificaciones para motores de IA.
  - **Hecho cuando:** Los archivos de datos estructurados, comparativa y directorio de IA reflejen con total exactitud la nueva oferta comercial. (Completado: Schema.org, comparativa y llms.txt sincronizados al 100%).

- [x] **T6: Ampliación de la Suite de Pruebas Automatizadas en Node.js**
  - **Archivos:** `tests/savings-calculator.test.js`, `tests/link-integrity.test.js`
  - **Alcance:**
    - Agregar pruebas unitarias en `tests/savings-calculator.test.js` para validar la matemática de `pkg3` contra Encuadrado ($990/mes), Doctoralia ($1,350 y $2,370/mes) y Wix ($400/mes en estado consultivo).
    - Agregar pruebas en `tests/link-integrity.test.js` validando la presencia del Paquete 03 en `#pricing`, su enlace de WhatsApp y la nueva FAQ.
    - Ejecutar `npm test` y verificar que el 100% de las pruebas pasen en verde.
  - **Hecho cuando:** La suite pase completa al 100% sin dependencias externas. (Completado: 47/47 pruebas pasando al 100% en verde).

- [x] **T7: Verificación Visual en Navegador (Desktop y Móvil), Validación de Consola y Cierre Documental**
  - **Archivos:** `overview/tasks.md`, `overview/session.md`
  - **Alcance:**
    - Inspección visual con el subagente de navegador en escritorio (1280px) y móviles (375px y 390px) en modo claro y modo oscuro.
    - Comprobación de ausencia de errores o advertencias en la consola del navegador.
    - Sincronización de bitácoras en `overview/tasks.md` y `overview/session.md`.
    - Presentación de resumen de cambios al usuario esperando autorización explícita para commit y push.
  - **Hecho cuando:** La interfaz esté verificada visualmente, la consola esté limpia y la documentación actualizada. (Completado: validado en desktop y mobile con browser subagent, 0 errores/warnings en consola y bitácoras sincronizadas).
