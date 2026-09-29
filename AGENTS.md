# AGENTS.md — CrisDev (Cristhian Ruiz - Software & Web Engineering)

## Proyecto
Portafolio profesional y plataforma de captación de clientes para el sector salud y servicios profesionales (psicólogos, dentistas, nutriólogos). Combina una presencia digital de alta conversión con estética "DedSec / Cyber-Terminal" y la demostración de arquitectura técnica operativa (bases de datos clínicas, automatización y seguridad).

## Comandos
- Ejecutar entorno local: `npx -y serve .` (o servidor local estático en puerto asignado)
- Tests / Validación funcional: Validación en navegador y verificación de enlaces/scripts
- Lint / Formato: Verificación de sintaxis CSS/JS estándar

## Estilo y convenciones
- **Frontend:** HTML5 semántico, CSS3 modular estructurado con variables CSS nativas, JavaScript ES6+ Vanilla.
- **Idioma del código:** Estrictamente inglés para variables, funciones, clases, IDs, nombres de archivos y mensajes de Git (`feat: ...`, `fix: ...`).
- **Idioma de la UI / Copy:** Español para todos los textos comerciales, CTAs y formularios.
- **Idioma de documentación:** Español para especificaciones, diagramas y notas de sesión.
- **Tipografía:** Monospace únicamente para métricas, metadatos y acentos técnicos; Sans-serif para textos de lectura.

## Reglas
- Lee `docs/constitution.md` y la spec activa en `specs/` antes de escribir o modificar código.
- **Copy comercial:** Prohibida la jerga técnica innecesaria en descripciones de venta y servicios (enfocarse en dolor/beneficio: agendamiento, privacidad, control).
- **Dependencias:** Prohibidas librerías pesadas/innecesarias (sin jQuery, sin frameworks pesados en el frontend base).
- **Estética controlada (Anti-caos):** Los efectos glitch/terminal deben ser acentos discretos; nunca comprometer la legibilidad ni la usabilidad de la web.
- **Salvaguarda Mobile (`minmax(0, 1fr)`):** En CSS Grid/Flexbox, declarar siempre `minmax(0, 1fr)` en lugar de `1fr` plano y asignar `min-width: 0` / `word-break: break-word` en elementos hijos para evitar que textos monospace o código fuercen `min-content` y desborden la pantalla en móviles.
- **Iconografía técnica (Cero emojis de sistema):** Prohibido el uso de emojis Unicode estándar en la interfaz (por su aspecto infantil y renderizado heterogéneo entre plataformas). Emplear exclusivamente iconos vectoriales SVG limpios con `stroke="currentColor"` y efectos neón/glow (Cyan/Azul/Verde) para preservar la sobriedad técnica y la coherencia visual.
- **Protocolo Browser Subagent (Anti-Bucle & Ahorro de Tokens):** En toda tarea que invoque al subagente de navegador:
  1. *Límite Fail-Fast:* Incluir en el prompt la cláusula de corte: máximo 2 intentos por interacción; si la interfaz no cambia al segundo intento, capturar pantalla del estado actual, reportar el obstáculo y TERMINAR de inmediato (prohibido reintentar indefinidamente ajustando coordenadas).
  2. *Cache-Busting local:* En servidores locales (`localhost`), navegar siempre con un query string único (`?v=...`) para evitar evaluar vistas en caché 304.
  3. *Verificaciones atómicas:* Priorizar capturas visuales de renderizado sobre flujos interactivos extensos.
- **Git Governance (Prohibición de commits automáticos):** Prohibido ejecutar `git commit` o `git push` automáticamente sin previa autorización explícita del usuario en el chat. Antes de cualquier commit, el asistente debe presentar el resumen de cambios, esperar el visto bueno del usuario y únicamente proceder cuando este lo ordene.
- **SDD estricto:** Ante cualquier cambio de funcionalidad, actualizar primero la spec correspondiente.
- **Testing nativo (Zero-Dependency Testing):** En arquitecturas estáticas o Vanilla JS, implementar suites de validación con `node:test` y `node:assert` nativos en lugar de instalar librerías pesadas (Jest, Vitest, Playwright) que inflen el repositorio con dependencias innecesarias, manteniendo la velocidad de ejecución por debajo de 15ms.
- **Sincronización estática de partials (DRY HTML via Delimited Comments):** Para componentes reutilizables (headers, footers, navbars) en sitios estáticos multi-página, utilizar archivos modulares en `partials/` y marcadores HTML delimitados (`<!-- BEGIN:... -->` / `<!-- END:... -->`), sincronizados mediante un script Node.js nativo sin requerir bundlers ni empaquetadores pesados.
- **Contraste en badges técnicos sobre dark surfaces:** Prohibido usar `var(--text-muted)` sobre contenedores oscuros elevados; los badges y etiquetas deben usar acentos temáticos (`badge-cyan`, `badge-blue`) o `var(--text-primary)` con fondo translúcido para garantizar legibilidad instantánea y alto contraste.
- **Cache-busting declarativo en assets estáticos (`?v=...`):** En sitios estáticos servidos sobre CDNs agresivas (ej. Cloudflare Pages con `max-age=14400`), todos los `<link rel="stylesheet">` y `<script>` deben incorporar un query string de versión (`?v=...`) incrementable para prevenir que el navegador reutilice hojas de estilo o scripts obsoletos ante cambios de HTML.
- **Anti-spam nativo via honeypot oculto (Zero-Dependency Bot Trap):** Para formularios de captación sin librerías ni scripts pesados externos (e.g. reCAPTCHA), implementar siempre un campo trampa fuera de pantalla (`aria-hidden="true"`, `tabindex="-1"`), capturado en el backend serverless para retornar HTTP 200 simulado y descartar el envío sin consumir cuota de email transaccional.
- **URLs absolutas en sitemaps para propiedades de dominio GSC (`sc-domain:...`):** En Google Search Console, cuando la propiedad está configurada por DNS como Dominio completo, el campo "Añadir un sitemap" no precarga el host ni protocolo. Cualquier envío relativo (ej. `sitemap.xml`) es rechazado con "Dirección no válida". Debe especificarse siempre la URL canónica absoluta (ej. `https://cristhianruiz.dev/sitemap.xml`).
- **Límites estrictos de longitud SEO en Title (<65 chars) y Meta Description (120-160 chars):** Los títulos de páginas deben mantenerse estrictamente por debajo de 65 caracteres para evitar truncamientos con puntos suspensivos (`...`) en snippets móviles y de escritorio de Google y Bing. Las meta descripciones deben ubicarse entre 120 y 160 caracteres para garantizar un 100% de visibilidad en SERPs sin generar advertencias de calidad técnica.
- **SEO de intención de búsqueda TOFU vs páginas transaccionales (Estrategia Guías Pilar):** Para captar búsquedas de alta intención que comiencen con verbos informativos o instructivos (ej. *"Crear página web para psicólogo"* o *"Cómo hacer..."*), Google prioriza guías paso a paso estructuradas (`/guias/...`) sobre páginas comerciales o de portafolio. Para capturar este tráfico, se deben implementar recursos pilares educativos que resuelvan la duda técnica/legal y funcionen como embudo de conversión (Content-Led Growth) hacia los servicios de desarrollo.
- **Declaración base para elementos exclusivos de móvil (`display: none` por defecto):** Al crear etiquetas auxiliares o wrappers pensados exclusivamente para pantallas pequeñas (e.g. `.comparison-mobile-label`), es obligatorio definir `display: none;` en su selector base y habilitar `display: block` únicamente dentro de la media query `@media (max-width: 767px)`. No declarar la regla base hace que el elemento se pinte de forma redundante o desalineada en escritorio.
- **Guardarraíl comercial en calculadoras de ROI (Estado Consultivo vs ROI Negativo):** Al diseñar calculadoras interactivas de retorno de inversión frente al mercado, nunca proyectar números verdes ni periodos de amortización falsos cuando el paquete seleccionado no genere un ahorro numérico neto (ej. comparar un SaaS clínico completo frente a un constructor básico como Wix a $400/mes). Es obligatorio activar un estado consultivo sobrio (`isConsultative`) que explique la diferencia de alcance técnico (web simple vs base de datos NOM-004), ofrezca alternar al paquete adecuado o dirija a asesoría personalizada, protegiendo la credibilidad técnica y comercial del negocio.
- **Clarificación asimétrica de activos digitales (Soberanía de Datos vs Software Gestionado):** Al comercializar soluciones a profesionales independientes (salud/legal), delimitar con precisión la propiedad de los activos: la base de datos de pacientes (expedientes clínicos NOM-004), el dominio y el código de la web pública son propiedad 100% transferible y exportable del cliente, mientras que el panel clínico de gestión opera como software gestionado en la nube (SaaS privado) con mantenimiento, servidores y parches de seguridad absorbidos por el proveedor. Esto evita promesas legales que comprometan el código fuente de la plataforma sin asustar comercialmente al cliente.

## Al terminar cualquier tarea
- **Verificación obligatoria:**
  1. Validar visualmente la interfaz tanto en viewport móvil (375px-430px) como en escritorio (1200px+).
  2. Verificar que los botones y llamadas a la acción (CTAs) funcionen y apunten a los destinos correctos.
  3. Comprobar que la consola del navegador no arroje errores ni advertencias de JS.
  4. Cruzar la implementación contra los requisitos funcionales (RF) de la spec activa.