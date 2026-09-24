# Tareas — Feature 009: Hiper-Especialización para Psicoterapeutas, Entornos Visuales en Previews, Claridad de Dominio Anual y Sección FAQ

Estado general: ✅ Completado
Referencia: `specs/009-refinamiento-psicoterapia-faq-y-entornos-visuales/spec.md` y `plan.md`

| ID | Tarea | Estado | Archivos Afectados | Condición de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Entorno Visual y Escaparate Prémium en Caso PsicoLau (`#web-ui`) | ✅ hecho | `index.html`, `css/components/terminal.css` | Hecho cuando: La tarjeta de preview de PsicoLau cuente con una cabecera de escaparate estructurada (`psicolau.com · Plataforma en Producción`), el logo tenga márgenes de respiro en 360° sin cortes abruptos y el botón de visita se integre con armonía. |
| **T2** | Entorno Visual, Dock de Acciones y Pilares Modulares en Gestión de Consultas (`#infrastructure`) | ✅ hecho | `index.html`, `css/components/terminal.css` | Hecho cuando: Las pastillas del encabezado se muestren claramente separadas, los botones de acción se alojen en un dock elevado contrastado y cada uno de los 3 pilares se estructure en una tarjeta modular individual con icono en caja redondeada. |
| **T3** | Hiper-Especialización de Copy y Claridad de Dominio Anual en Precios (`#pricing`) | ✅ hecho | `index.html`, `css/components/pricing.css` | Hecho cuando: El Paquete 01 se renombre a *"Presencia Terapéutica Multi-Página"*, se purguen menciones genéricas de médicos, y se detalle con exactitud el pago anual de dominio (~$195 a $800/año) y la gratuidad del primer año en el Paquete 02 anual. |
| **T4** | Creación del Componente Modular CSS de Acordeones (`css/components/faq.css`) | ✅ hecho | `css/components/faq.css`, `index.html` | Hecho cuando: Se cree `faq.css` con estilos para `<details>` y `<summary>`, animaciones de chevron/rotación, soporte multi-tema (claro/oscuro) y se enlace en `<head>`. |
| **T5** | Implementación de la Sección de Preguntas Frecuentes (`#faq`) y Sincronización de Navegación | ✅ hecho | `index.html`, `partials/header.html`, `partials/footer.html`, `aviso-de-privacidad.html` | Hecho cuando: Se inserte la sección `#faq` antes de `#contact` con las 7 preguntas estratégicas para psicoterapeutas, se añada el enlace en Navbar, drawer móvil y footer, y `npm run sync:partials` se ejecute sin discrepancias. |
| **T6** | Validación Integral de Suite de Tests Automatizados y Renderizado en Navegador | ✅ hecho | `tests/`, `index.html` | Hecho cuando: `npm test` pase 16/16 sin errores, la validación visual en navegador confirme 0 errores en consola y renderizado impecable en desktop y móvil (390px). |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
