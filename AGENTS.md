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
- **SDD estricto:** Ante cualquier cambio de funcionalidad, actualizar primero la spec correspondiente.

## Al terminar cualquier tarea
- **Verificación obligatoria:**
  1. Validar visualmente la interfaz tanto en viewport móvil (375px-430px) como en escritorio (1200px+).
  2. Verificar que los botones y llamadas a la acción (CTAs) funcionen y apunten a los destinos correctos.
  3. Comprobar que la consola del navegador no arroje errores ni advertencias de JS.
  4. Cruzar la implementación contra los requisitos funcionales (RF) de la spec activa.