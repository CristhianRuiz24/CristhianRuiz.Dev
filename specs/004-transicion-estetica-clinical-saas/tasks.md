# Tareas — Feature 004: Transición a Estética Cálida y Humana (Clinical SaaS)

Referencia: `specs/004-transicion-estetica-clinical-saas/plan.md`

| ID | Tarea | Archivos afectados | Estado | Criterio de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Uniformidad cromática del Banner de Métricas en el Hero | `index.html` | ✅ hecho | En el Hero, la métrica *"0%"* utiliza la clase `text-accent` (igual que *"24/7"* y *"100%"*), logrando que los tres valores numéricos resalten en el mismo Azul Cerúleo de acento tanto en modo claro como en modo oscuro. |
| **T2** | Rediseño de `.section-tag` a píldoras cálidas en `Plus Jakarta Sans` | `css/main.css`, `index.html`, `aviso-de-privacidad.html` | ✅ hecho | Todas las etiquetas de sección (`.section-tag`) se renderizan como píldoras suaves (`border-radius: var(--radius-full)`) con tipografía `Plus Jakarta Sans` (`font-weight: 700`), sin mayúsculas forzadas y con textos en formato natural (ej. *"Caso de Estudio · Psicología y Salud"*). |
| **T3** | Limpieza de terminal en Formulario de Contacto e Icono SVG de Privacidad | `index.html`, `css/components/form.css` | ✅ hecho | Se eliminan los puntos de terminal (`.terminal-dots`) y el emoji `🔒` del encabezado del formulario en `index.html`, sustituyéndolo por un encabezado formal limpio con icono vectorial SVG y título claro de cotización. |
| **T4** | Humanización tipográfica y estética de la tarjeta "Sobre Mí" | `index.html`, `css/components/trust-operator.css` | ✅ hecho | La tarjeta de Cristhian Ruiz muestra sus roles, badges y disponibilidad en `Plus Jakarta Sans` (sin mayúsculas de terminal ni jerga de operador militar), proyectando cercanía y profesionalismo en salud. |
| **T5** | Armonización de ventana web en showcase de PsicoLau y botón contable | `index.html`, `css/components/terminal.css`, `css/components/pricing.css`, `js/terminal-effects.js`, `aviso-de-privacidad.html` | ✅ hecho | En el showcase de PsicoLau, los puntos de la ventana adoptan tonos neutros discretos de aplicación web moderna; chips y botones usan `Plus Jakarta Sans`; se remueven remanentes de emojis y se actualiza el banner de consola. |
| **T6** | Validación visual en Desktop y Móvil (Ambos Temas) y despliegue | Navegador, documentación SDD, Git | ✅ hecho | Se valida con `browser_subagent` en escritorio y móvil que la página proyecte calidez humana, orden médico y cero errores en consola JS; se actualizan `overview/tasks.md` y `overview/session.md` y se sube el commit a GitHub. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
