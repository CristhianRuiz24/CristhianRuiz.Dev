# Aprendizajes / propuestas de regla

Cuando el agente nota un patrón que debería volverse regla fija
(en GEMINI.md, AGENTS.md o la constitución) pero no está autorizado a
aplicarlo solo, lo anota aquí para que tú decidas si lo promueves.

## Propuestas pendientes

- [ ] **Protocolo de Testing Nativo (Zero-Dependency Testing):** En arquitecturas estáticas o Vanilla JS, implementar suites de validación con `node:test` y `node:assert` nativos en lugar de instalar librerías pesadas (Jest, Vitest, Playwright) que inflen el repositorio con dependencias innecesarias, manteniendo la velocidad de ejecución por debajo de 15ms.
- [ ] **Sincronización Estática de Partials (DRY HTML via Delimited Comments):** Para componentes reutilizables (headers, footers, navbars) en sitios estáticos multi-página, utilizar archivos modulares en `partials/` y marcadores HTML delimitados (`<!-- BEGIN:... -->` / `<!-- END:... -->`), sincronizados mediante un script Node.js nativo sin requerir bundlers ni empaquetadores pesados.
- [ ] **Contraste en Badges Técnicos sobre Dark Surfaces:** Prohibido usar `var(--text-muted)` sobre contenedores oscuros elevados; los badges y etiquetas deben usar acentos temáticos (`badge-cyan`, `badge-blue`) o `var(--text-primary)` con fondo translúcido para garantizar legibilidad instantánea y alto contraste.
- [ ] **Cache-Busting Declarativo en Assets Estáticos (`?v=...`):** En sitios estáticos servidos sobre CDNs agresivas (ej. Cloudflare Pages con `max-age=14400`), todos los `<link rel="stylesheet">` y `<script>` deben incorporar un query string de versión (`?v=...`) incrementable para prevenir que el navegador reutilice hojas de estilo o scripts obsoletos ante cambios de HTML.
- [ ] **Anti-Spam Nativo via Honeypot Oculto (Zero-Dependency Bot Trap):** Para formularios de captación sin librerías ni scripts pesados externos (e.g. reCAPTCHA), implementar siempre un campo trampa fuera de pantalla (`aria-hidden="true"`, `tabindex="-1"`), capturado en el backend serverless para retornar HTTP 200 simulado y descartar el envío sin consumir cuota de email transaccional.
- [ ] **URLs Absolutas en Sitemaps para Propiedades de Dominio GSC (`sc-domain:...`):** En Google Search Console, cuando la propiedad está configurada por DNS como Dominio completo, el campo "Añadir un sitemap" no precarga el host ni protocolo. Cualquier envío relativo (ej. `sitemap.xml`) es rechazado con "Dirección no válida". Debe especificarse siempre la URL canónica absoluta (ej. `https://cristhianruiz.dev/sitemap.xml`).

## Reglas promovidas a AGENTS.md y GEMINI.md

- [x] **Git Governance (Prohibición de commits y push automáticos):** Prohibido ejecutar `git commit` o `git push` automáticamente sin previa autorización explícita del usuario en el chat. Antes de cualquier commit, el asistente debe presentar el resumen de cambios, esperar el visto bueno del usuario y únicamente proceder cuando este lo ordene — *Promovida a `AGENTS.md` y `GEMINI.md` el 2026-09-08*.
- [x] **CSS Grid & Flexbox Mobile Safeguard (`minmax(0, 1fr)`):** En layouts responsivos, declarar siempre `minmax(0, 1fr)` en lugar de `1fr` plano y asignar `min-width: 0` / `word-break: break-word` a elementos hijos para evitar que strings largos de monospace o bloques de código fuercen el ancho `min-content` y desborden la pantalla en smartphones — *Promovida a `AGENTS.md` el 2026-09-01*.
- [x] **Iconografía Técnica vs Emojis de Sistema (Cero emojis):** Prohibido el uso de emojis Unicode estándar en la interfaz; usar exclusivamente iconos vectoriales SVG con `stroke="currentColor"` y efectos neon glow (Cyan/Azul/Verde) para mantener coherencia técnica y sobriedad — *Promovida a `AGENTS.md` el 2026-09-01*.
- [x] **Protocolo Browser Subagent (Anti-Bucle & Ahorro de Tokens):** Límite estricto Fail-Fast de máximo 2 intentos por acción interactiva en prompts de navegador, cache-busting obligatorio con query param en servidores locales (`?v=...`) y priorización de capturas atómicas sobre flujos interactivos ciegos — *Promovida a `AGENTS.md` el 2026-09-04*.


