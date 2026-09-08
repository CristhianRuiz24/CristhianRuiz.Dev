# Tareas — Feature 003: Armonización Tipográfica de Botones y Elementos de Lectura

Referencia: `specs/003-harmonizacion-tipografica-botones/plan.md`

| ID | Tarea | Archivos afectados | Estado | Criterio de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Migración de la clase base `.btn` a `Plus Jakarta Sans` y remoción de uppercase | `css/main.css` | ✅ hecho | La clase `.btn` en `css/main.css` declara `font-family: var(--font-sans); font-weight: 600; letter-spacing: -0.01em; text-transform: none;`, provocando que todos los botones (`.btn-primary`, `.btn-secondary`, `.btn-submit`, `.cta-whatsapp`) se rendericen con la tipografía limpia y redondeada de la web en mayúsculas/minúsculas naturales, sin tocar los estilos de borde, color ni padding existentes. |
| **T2** | Armonización tipográfica de la métrica "Privada" en PsicoLau | `index.html`, `css/components/terminal.css` | ✅ hecho | En el caso de estudio de PsicoLau, la palabra *"Privada"* utiliza `Plus Jakarta Sans` con peso 800 mediante una clase dedicada (ej. `.stat-word` o `.stat-number.is-text`), eliminando las letras monospace cuadradas mientras la métrica adyacente *"0%"* permanece en `JetBrains Mono`. |
| **T3** | Calibración visual y validación en Desktop y Móvil (Ambos Temas) | Navegador, `css/main.css`, `css/components/navbar.css` | ✅ hecho | Se valida con `browser_subagent` en viewport móvil (375px) y escritorio (1280px) tanto en Modo Claro como en Modo Oscuro que los botones mantengan alineación perfecta con sus iconos SVG (WhatsApp, flechas), que no haya desbordamientos de texto en celulares y que la consola permanezca con cero errores JS. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
