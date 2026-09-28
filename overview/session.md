# Sesión activa — CrisDev (`cristhianruiz.dev`)

**Última actualización:** 2026-09-28
**Fase SDD actual:** Feature 014: Reordenamiento de Navegación (FAQ al Final), Claridad en Enlaces a Videollamadas y Alcance de Personalización en Paquete 01 — Spec Aprobada (En ejecución T1)

## Lo que se logró en esta sesión

1. **Feature 009: Hiper-Especialización para Psicoterapeutas, Entornos Visuales y Sección FAQ (Completada):**
   - **Entorno Visual de Escaparate en Caso PsicoLau (`#web-ui`):**
     - Se integró la tarjeta de escaparate `.preview-showcase-card` con barra de estado superior estructurada (`psicolau.com · Plataforma en Producción`).
     - El logo de PsicoLau cuenta ahora con un marco contenedor `.showcase-logo-frame` con margen de respiro en 360° evitando cortes abruptos.
     - Se añadieron etiquetas sutiles de especialidad y botón armónico para visitar el sitio en vivo.
   - **Entorno Visual, Dock de Acciones y Pilares en Gestión de Consultas (`#infrastructure`):**
     - Se estructuraron las pastillas de encabezado con espacio y contraste claro.
     - Se creó el dock elevado `.demo-actions-dock` para agrupar los dos botones de acción (`Explorar Sitio Web Demo` y `Probar Panel Clínico en 1 Clic`) junto a la nota de acceso sin registro.
     - Cada uno de los 3 pilares se convirtió en una tarjeta modular individual (`.demo-pillar-card`) con iconos vectoriales en caja redondeada con contraste accesible.
   - **Hiper-Especialización de Copy y Claridad de Dominio Anual en Precios (`#pricing`):**
     - Se renombró el Paquete 01 a *"Paquete 01 · Presencia Terapéutica Multi-Página"* (titular: *"Presencia Digital para Terapeutas"*).
     - Se purgaron todas las menciones genéricas de "médicos/servicios médicos" en titulares y descripciones, enfocando el mensaje en psicólogos y terapeutas independientes.
     - Se detalló con total transparencia la inversión anual en dominio: en Paquete 01 se especificó hosting $0/mes de por vida y renovación de dominio estándar (~$195 a $800 MXN/año); en Paquete 02 se aclaró que la anualidad ($4,990 MXN/año) incluye el dominio .com gratis el 1er año y luego se renueva normalmente.
   - **Componente CSS Modular de Acordeones (`css/components/faq.css`):**
     - Se creó el archivo modular `css/components/faq.css` con estilos nativos para `<details>` y `<summary>`.
     - Animación suave de apertura y rotación de chevron (180°), compatibilidad multi-tema (claro/oscuro) y salvaguarda móvil `minmax(0, 1fr)` y `word-break: break-word`.
   - **Implementación de la Sección de Preguntas Frecuentes (`#faq`) y Sincronización:**
     - Se implementó la sección `#faq` antes de `#contact` con 7 preguntas estratégicas de alta conversión para psicoterapeutas.
     - Se añadieron los enlaces de navegación a `#faq` en `partials/header.html` (navbar desktop y drawer móvil) y `partials/footer.html`.
     - Se ejecutó `npm run sync:partials` replicando con éxito los cambios en `index.html` y `aviso-de-privacidad.html`.
   - **Validación Automatizada y Visual:**
     - Suite completa de 16 tests automatizados pasando al 100% (`npm test`).
     - Verificación visual exhaustiva en navegador con `browser_subagent` en desktop (1280px) y móvil (390px), confirmando despliegue de acordeones y 0 errores de JavaScript en consola.
   - **Corrección de Solapamiento en Navbar Desktop:**
     - Se reemplazó el grid rígido de 3 columnas por un contenedor Flexbox fluido (`justify-content: space-between`).
     - Se ajustó el texto del enlace en la barra de escritorio a `FAQ` (conservando `Preguntas Frecuentes` en el drawer móvil).
     - Se recalibró el breakpoint del menú móvil a `1080px` con gaps compactos, eliminando por completo cualquier colisión o encimamiento entre los enlaces y los botones de acción en pantallas medianas.

2. **Feature 010: Remediación de CSP, SEO/Robots/Sitemap, Consola y Cache-Busting (Completada):**
   - **Remediación de CSP (`_headers`):**
     - Se añadió `https://static.cloudflareinsights.com` en `script-src` y `https://cloudflareinsights.com` en `connect-src`, eliminando la violación de CSP del beacon de Cloudflare Analytics.
   - **Actualización de Branding en Consola (`js/terminal-effects.js`):**
     - Se ajustó el banner de `printSystemBanner()` sustituyendo la mención a odontología/nutrición por *"Enfoque: Software & Plataformas Web para Psicoterapeutas y Consulta Privada"*.
   - **Indexación y Sitemap (`sitemap.xml` & `robots.txt`):**
     - Se incorporó la URL `/aviso-de-privacidad` y se actualizó `<lastmod>2026-09-24</lastmod>`.
   - **Metadatos SEO y Schema.org (`index.html`):**
     - Sintonizados `<title>`, `<meta name="description">`, Open Graph, Twitter y Schema.org JSON-LD para posicionamiento exclusivo en psicoterapia y salud mental.
   - **Cache-Busting Masivo Unificado (`?v=6.0`):**
     - Se versionaron todos los CSS y scripts JS en `index.html` y `aviso-de-privacidad.html` a `?v=6.0`, forzando la recarga limpia de `navbar.css` (con breakpoint a 1080px y Flexbox) y erradicando cualquier solapamiento residual por caché HTTP 304.
   - **Validación Automatizada y Visual:**
     - 16/16 tests pasando (`npm test`) y comprobación visual a 998x614 y 1280px con 0 errores en consola.

3. **Feature 011: Alta en Google Search, Optimización para IAs (GEO / AI Search), Schema FAQPage y llms.txt (Completada):**
   - **Schema.org `@graph` Unificado (`index.html`):**
     - Integradas entidades interconectadas: `ProfessionalService` (paquetes $4,800 y $5,900 MXN), `Person` (Cristhian Ruiz con `knowsAbout`) y `FAQPage` con las 7 preguntas/respuestas para Rich Snippets en Google.
   - **Estándar `llms.txt` para Inteligencias Artificiales:**
     - Creado `/llms.txt` con la documentación estructurada de CrisDev para que ChatGPT, Claude, Perplexity y Gemini recomienden a Cristhian Ruiz al buscar soluciones para psicólogos.
   - **Optimización de `robots.txt`:**
     - Acceso abierto general y bienvenida explícita a bots de IA (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`) y sitemap canónico.
   - **Guía de Search Console & Bing (`docs/seo-alta-google-search-console.md`):**
     - Procedimiento paso a paso para el envío del sitemap `sitemap.xml`, solicitud de indexación prioritaria y sincronización en 1 clic con Microsoft Bing.
   - **Validación Automatizada:**
     - 16/16 tests pasando y sintaxis JSON-LD validada al 100%.

4. **Feature 012: Calibración de Longitud de Title y Meta Description para Bing y Google (Completada):**
   - **`<title>` Calibrado en `index.html`:**
     - Ajustado a `CrisDev | Cristhian Ruiz — Web para Psicoterapeutas` (51 caracteres), cumpliendo holgadamente el límite de Bing y Google (máximo 65 caracteres) y evitando truncamientos con `...`.
   - **`<meta name="description">` Calibrada en `index.html`:**
     - Sintetizada a `Desarrollo web y plataformas clínicas para psicólogos y terapeutas. Agenda automatizada, expedientes NOM-004 y captación de pacientes sin comisiones.` (149 caracteres), entrando con precisión en el rango recomendado de Bing (120 a 160 caracteres).
   - **Suite de Pruebas de Metadatos (`tests/seo-metadata.test.js`):**
     - Añadida suite automatizada nativa con 4 pruebas adicionales que verifican permanentemente que ni `index.html` ni `aviso-de-privacidad.html` excedan los 65 caracteres de título ni salgan del rango 120-160 de descripción.
   - **Resultados de Pruebas:**
     - 20/20 tests pasando exitosamente (`npm test`).

5. **Feature 013: Reestructuración Comercial de Landing Page: Tríada de Oferta y Diferenciador de Aviso de Publicidad (Completada):**
   - **Erradicación de Falsas Expectativas ("A Medida"):** Se eliminó la ambigüedad que hacía creer que el panel clínico base se programa desde cero por $5,900 MXN, delimitando la oferta estándar frente a encargos especiales.
   - **Tríada de Valor Transparente:**
     1. *Tu Página Web:* 100% personalizada con identidad, servicios y fotos del cliente.
     2. *Tu Plataforma de Gestión (Consultorio Inteligente):* Sistema estándar de CrisDev, probado y optimizado para la consulta privada.
     3. *Desarrollo a Medida:* Módulo satélite para clínicas, múltiples especialistas o flujos complejos (cotizado por separado).
   - **Diferenciador Normativo (Guía para Aviso de Publicidad):** Integrado en ambos paquetes y con tarjeta explicativa destacada (`.pricing-compliance-card`), orientando sobre publicidad sanitaria en México con deslinde legal transparente.
   - **Hero & Sub-Hero Renovados:** Titular *"Tu consultorio profesional, en un solo lugar"*, subtítulo dual, CTAs a `#contact` y `#pricing`, y barra de garantías.
   - **Bloque de Dualidad (`#solutions`):** *"Una Presencia Profesional y una Gestión Más Sencilla"* con frase de anclaje de alcance.
   - **Elevación de la Suite Demo (`#infrastructure`):** *"Conoce tu Plataforma Antes de Contratar"*, dock de acciones en 1 clic y 5 tarjetas de pilares modulares.
   - **Reencuadre de PsicoLau (`#web-ui`):** Etiquetado explícito como *"Caso de Estudio: Desarrollo Personalizado"*.
   - **Sobre Mí, Contacto y 11 FAQs:** Trato directo 1 a 1 con Cristhian Ruiz, mantra de cierre y 11 acordeones nativos sincronizados con Schema.org `FAQPage` y `/llms.txt`.
   - **Sincronización y Pruebas:** `npm run sync:partials` ejecutado y 20/20 tests automatizados pasando en verde.

6. **Feature 014: Reordenamiento de Navegación (FAQ al Final), Claridad en Enlaces a Videollamadas y Alcance de Personalización en Paquete 01 (Completada):**
   - **Reordenamiento Estructural 1:1:** Se sincronizó la barra de navegación (`header.html`), el drawer móvil, el pie de página (`footer.html`) y el DOM de `index.html` para que el flujo sea: `Inicio` &rarr; `Presencia Digital` &rarr; `Gestión de Consultas` &rarr; `Planes y Precios` &rarr; `Privacidad` &rarr; `Sobre Mí` &rarr; `FAQ` &rarr; `Contacto`.
   - **Honestidad Técnica en Videollamadas:** Se erradicó la frase *"Videollamadas integradas"* (que prometía falsamente un servidor de streaming/WebRTC propio), reemplazándola por *"Enlaces para videollamadas (Zoom / Google Meet)"* en Soluciones, Demo (5.º pilar), Precios y FAQ.
   - **Personalización Incluida y Delimitación en Paquete 01:** Se aclaró en la viñeta de Presencia Digital que la personalización de secciones está incluida (adaptar o añadir secciones), se incorporó la caja de alcance `.pricing-scope-clarification` y se delimitaron en las FAQs 1 y 9 qué requerimientos técnicos avanzados requieren cotización de desarrollo a medida.
   - **Sincronización y Validación:** Sincronización de partials ejecutada y 20/20 tests pasando en verde.

## En qué quedó el proyecto

- **Features 001 a 014 Completadas:**
  - Landing page optimizada y probada localmente en `http://localhost:3000/`.
  - **Pruebas Automatizadas:** 20/20 tests pasando en verde con `npm test`.
  - **Git Governance:** Todos los cambios se mantienen en el working tree sin commit/push automático, a la espera de la autorización explícita del usuario.

## Próximo paso

- Esperar la revisión visual del usuario en `http://localhost:3000/?v=feat014` y proceder con `git commit` y `git push` una vez autorizado.



