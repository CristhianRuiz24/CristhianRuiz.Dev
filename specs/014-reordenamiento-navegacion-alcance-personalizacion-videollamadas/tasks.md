# Tareas — Feature 014: Reordenamiento de Navegación (FAQ al Final), Claridad en Enlaces a Videollamadas y Alcance de Personalización en Paquete 01

Estado general: ✅ Completado  
Referencia: `specs/014-reordenamiento-navegacion-alcance-personalizacion-videollamadas/spec.md` y `plan.md`

| ID | Tarea | Estado | Archivos Afectados | Condición de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Reordenamiento de enlaces en cabecera y pie de página | ✅ hecho | `partials/header.html`, `partials/footer.html` | Hecho cuando: En la cabecera desktop, drawer móvil y footer, el orden de navegación sea `Inicio` &rarr; `Presencia Digital` &rarr; `Gestión de Consultas` &rarr; `Planes y Precios` &rarr; `Privacidad` &rarr; `Sobre Mí` &rarr; `FAQ`. |
| **T2** | Reordenamiento secuencial de secciones en el DOM de `index.html` | ✅ hecho | `index.html` | Hecho cuando: El flujo de secciones en `index.html` siga exactamente el orden: `#hero` &rarr; `#solutions` &rarr; `#web-ui` &rarr; `#infrastructure` &rarr; `#pricing` &rarr; `#security` &rarr; `#operator` &rarr; `#faq` &rarr; `#contact`. |
| **T3** | Reemplazo de "Videollamadas integradas" por "Enlaces para videollamadas" | ✅ hecho | `index.html` | Hecho cuando: Se sustituya "Videollamadas integradas" por "Enlaces para videollamadas (Zoom / Google Meet)" en la tarjeta de gestión (`#solutions`), en el 5.º pilar de demo (`#infrastructure`), en el Paquete 02 de `#pricing` y en la respuesta de la pregunta 8 de `#faq`. |
| **T4** | Alcance de personalización y delimitación de cambios grandes en Paquete 01 y FAQ | ✅ hecho | `index.html` | Hecho cuando: En Paquete 01 se detalle que la personalización de secciones está incluida, se añada la caja de aclaración de alcance `.pricing-scope-clarification` en la tarjeta de Paquete 01, y en FAQ 1 y 9 se definan claramente los límites entre personalización incluida vs. cotización de desarrollo a medida. |
| **T5** | Sintonización de Schema.org JSON-LD y `llms.txt` | ✅ hecho | `index.html`, `llms.txt` | Hecho cuando: Schema.org y `/llms.txt` reflejen la descripción de enlaces para videollamadas y el alcance de personalización del Paquete 01 sin contradicciones. |
| **T6** | Sincronización de Partials, Validación Automatizada (`npm test`) y Verificación Visual | ✅ hecho | `partials/`, `index.html`, `aviso-de-privacidad.html`, `tests/` | Hecho cuando: `npm run sync:partials` sincronice los partials, los 20 tests pasen en verde y la navegación en `http://localhost:3000` demuestre fluidez y concordancia 1:1 entre menú y scroll de la página. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
