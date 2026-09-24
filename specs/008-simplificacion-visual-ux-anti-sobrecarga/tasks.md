# Tareas — Feature 008: Simplificación Visual Integral, Purga de Sobrecarga, Conexión de Demo en Vivo y Nuevos Precios

Estado general: ✅ Completado
Referencia: `specs/008-simplificacion-visual-ux-anti-sobrecarga/spec.md` y `plan.md`

| ID | Tarea | Estado | Archivos Afectados | Condición de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Desahogo Visual de Presencia Digital (Caso PsicoLau) | ✅ hecho | `index.html`, `css/components/terminal.css` | Hecho cuando: Se eliminen los dots de ventana, la barra de URL falsa, los badges secundarios (`[ Especialidad: Neuropsicología ]` y `[ En Producción ]`), la ficha técnica de 4 filas y las pills duplicadas de métricas, preservando el testimonio con `<details>`. |
| **T2** | Conexión de Demo en Vivo y Renovación de Gestión de Consultas (`#infrastructure`) | ✅ hecho | `index.html`, `css/components/terminal.css` | Hecho cuando: Se retire el mockup interactivo hardcodeado de 4 pestañas y se incorpore la tarjeta prémium de PSICOCLÍNICA con los 2 CTAs a `demo.cristhianruiz.dev` y `demo.cristhianruiz.dev/panel/` con 3 pilares sintetizados. |
| **T3** | Humanización y Desahogo de la Sección Sobre Mí (`#operator`) | ✅ hecho | `index.html`, `css/components/trust-operator.css` | Hecho cuando: Se hayan purgado las etiquetas y clases de operador (`.operator-id`, `.operator-clearance`, etc.) y el perfil de Cristhian Ruiz se presente con jerarquía editorial limpia y cálida. |
| **T4** | Actualización Comercial de Planes y Precios (`#pricing`) | ✅ hecho | `index.html`, `css/components/pricing.css` | Hecho cuando: Se reflejen con precisión los nuevos precios ($4,800 y $5,900), tiempos de entrega (48-72h y 3-5 días), arquitectura de 8 páginas, Suite Clínica NOM-004-SSA3 / AES-256-GCM y los enlaces de WhatsApp actualizados. |
| **T5** | Retiro del Formulario por Escrito y Centralización en WhatsApp (`#contact`) | ✅ hecho | `index.html`, `css/components/form.css` | Hecho cuando: Se hayan eliminado el formulario por escrito y el divisor de `#contact`, la tarjeta de WhatsApp sea el único canal central de conversión y se desvincule `form-handler.js` de `index.html`. |
| **T6** | Estilos CSS, Adaptación Multi-Tema y Responsividad Mobile | ✅ hecho | `css/components/terminal.css`, `css/components/pricing.css`, `css/components/trust-operator.css`, `css/components/form.css` | Hecho cuando: El diseño se visualice sin errores en modo claro y modo oscuro, respetando `minmax(0, 1fr)` y sin desbordamientos en móviles (375px a 430px). |
| **T7** | Validación de Suite de Tests Automatizados e Integridad General | ✅ hecho | `tests/`, `index.html`, `partials/` | Hecho cuando: `npm test` pase al 100% sin advertencias, los partials estén sincronizados con `npm run sync:partials` y la consola del navegador reporte 0 errores de JS. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
