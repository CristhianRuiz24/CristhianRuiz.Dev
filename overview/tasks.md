# Tareas — CrisDev (`cristhianruiz.dev`)
Estado general: Features 001 a 012 completadas y desplegadas en producción.

Referencia principal: `specs/001-landing-page-crisdev/tasks.md` a `specs/006-optimizacion-arquitectura-calidad-testing/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Fundamentos de diseño y tokens CSS (Dark Mode DedSec) | ✅ hecho | `css/main.css` |
| **T2** | Estructura HTML5 semántica y metadatos SEO | ✅ hecho | `index.html` |
| **T3** | Header / Navbar y Hero Section comercial | ✅ hecho | `css/components/navbar.css`, `css/components/hero.css` |
| **T4** | Terminal 01: Presencia Digital (Caso psicolau.com) | ✅ hecho | `css/components/terminal.css` |
| **T5** | Terminal 02: Arquitectura Operativa (Bases de Datos Clínicas) | ✅ hecho | `css/components/terminal.css` |
| **T6** | Protocolos de Seguridad (Trust) y Terminal de Operador (Access ID) | ✅ hecho | `css/components/trust-operator.css` |
| **T7** | Módulo de configuración JS y enlaces WhatsApp | ✅ hecho | `js/config.js`, `js/terminal-effects.js` |
| **T8** | Formulario Cyber-Terminal con validación EARS, shake y respuesta API | ✅ hecho | `css/components/form.css`, `js/form-handler.js` |
| **T9** | Footer, responsive polish y validación de aceptación (RF-1 al RF-15) | ✅ hecho | `css/components/footer.css` |
| **T10** | Copywriting comercial orientado a psicólogos y salud (Spec 001 actualizada) | ✅ hecho | `spec.md`, `index.html`, `config.js`, `form-handler.js` |
| **T11** | Optimización Copy CTA Hero, Grid de 3 Pilares y WhatsApp Natural | ✅ hecho | `index.html`, `terminal.css`, `config.js` |
| **T12** | Quitar métrica +180% en PsicoLau y ajustar a 2 columnas (Opción A) | ✅ hecho | `spec.md`, `index.html`, `terminal.css` |
| **T13** | Arreglar enlaces de WhatsApp con número y mensaje precargado | ✅ hecho | `spec.md`, `index.html`, `config.js` |
| **T14** | Página de Aviso de Privacidad y enlace en Footer | ✅ hecho | `spec.md`, `aviso-de-privacidad.html`, `index.html` |
| **T15** | Optimización de datos estructurados Schema.org JSON-LD | ✅ hecho | `index.html` |
| **T16** | Integración de Testimonio Real de Laura Gómez en PsicoLau | ✅ hecho | `spec.md`, `index.html`, `terminal.css` |
| **T17** | Mitigación de Choque Visual y Dualidad en Hero | ✅ hecho | `index.html`, `hero.css` |
| **T18** | Mockup Interactivo de Suite Clínica Privada (4 pestañas) | ✅ hecho | `index.html`, `terminal.css`, `terminal-effects.js` |
| **T19** | Sección de Planes y Precios Transparentes (#pricing) | ✅ hecho | `index.html`, `pricing.css` |
| **T23** | Eliminación de botón brillante (.system-status) y actualización de Favicon SVG | ✅ hecho | `index.html`, `aviso-de-privacidad.html`, `navbar.css`, `assets/images/favicon.svg` |
| **T24** | Remoción de badges superiores del Hero (.hero-badge) | ✅ hecho | `index.html` |
| **T25** | Equilibrado de espaciado en Navbar (Grid 3 columnas + gaps) y nuevo copy Hero | ✅ hecho | `navbar.css`, `index.html` |
| **T26** | Logo footer transparente, contraste en Aviso Privacidad, badges PsicoLau y paleta Panel Clínico | ✅ hecho | `footer.css`, `terminal.css`, `main.css`, `index.html`, `aviso-de-privacidad.html` |
| **T27** | Armonización de color en precios (#pricing): sustitución de texto verde por Azul Clínico | ✅ hecho | `index.html` |
| **T28** | Remoción de tag 'INGENIERÍA · SOBRE MÍ' y armonización clínica de hover y sombras en tarjetas | ✅ hecho | `index.html`, `terminal.css`, `pricing.css`, `trust-operator.css`, `form.css`, `main.css` |
| **T29** | Configuración estratégica de enlaces sociales en footer (remoción de GitHub e integración de Facebook) | ✅ hecho | `index.html`, `aviso-de-privacidad.html` |
| **T30** | Menú Hamburguesa Móvil (Triple Raya) y Drawer Desplegable exclusivo para celular | ✅ hecho | `index.html`, `navbar.css`, `terminal-effects.js` |
| **T31** | Sustitución de foto personal en Open Graph (WhatsApp/Redes) por logo oficial con fondo azul marino | ✅ hecho | `index.html`, `aviso-de-privacidad.html`, `assets/images/og-image.png` |
| **T32** | Optimización de nitidez y contraste en imagen Open Graph para WhatsApp (trazo visible y cero blur) | ✅ hecho | `index.html`, `aviso-de-privacidad.html`, `assets/images/og-image.png` |
| **T33** | Icono hamburguesa móvil en SVG vectorial simétrico y uniforme | ✅ hecho | `index.html`, `css/components/navbar.css` |
| **T34** | Botón de 'Inicio' en la barra de navegación y drawer móvil con scroll suave al tope | ✅ hecho | `index.html`, `css/components/navbar.css`, `js/terminal-effects.js` |
| **T35** | Calibración de espaciado y desahogo entre 'Sobre Mí' y botón WhatsApp en Header | ✅ hecho | `index.html`, `css/components/navbar.css` |

---

# Feature 002: Modo Oscuro Clínico (Clinical Deep Navy)

Referencia: `specs/002-dark-mode/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Tokens CSS de Modo Oscuro en Design System | ✅ hecho | `css/main.css` |
| **T2** | Script Anti-FOUC en `<head>` y Módulo JS Theme Manager | ✅ hecho | `js/theme-manager.js`, `index.html`, `aviso-de-privacidad.html` |
| **T3** | Componente Toggle Button (Sol/Luna SVG) en Navbar | ✅ hecho | `index.html`, `aviso-de-privacidad.html`, `css/components/navbar.css` |
| **T4** | Adaptación de Logo de Cabecera y Contraste de Componentes | ✅ hecho | `js/theme-manager.js`, `terminal.css`, `pricing.css`, `form.css`, `footer.css` |
| **T5** | Integración en Drawer Móvil y Validación Multi-Página / Responsive | ✅ hecho | `index.html`, `css/components/navbar.css`, `js/theme-manager.js` |
| **T6** | Armonización cromática de textos y badges en Hero y Panel Clínico (Claro y Oscuro) | ✅ hecho | `index.html`, `css/components/hero.css`, `css/components/terminal.css`, `css/main.css` |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 003: Armonización Tipográfica de Botones y Elementos de Lectura

Referencia: `specs/003-harmonizacion-tipografica-botones/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Migración de la clase base `.btn` a `Plus Jakarta Sans` y remoción de uppercase | ✅ hecho | `css/main.css` |
| **T2** | Armonización tipográfica de la métrica "Privada" en PsicoLau | ✅ hecho | `index.html`, `css/components/terminal.css` |
| **T3** | Calibración visual y validación en Desktop y Móvil (Ambos Temas) | ✅ hecho | Navegador, `css/main.css`, `css/components/navbar.css` |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

# Feature 004: Transición Integral a Estética Cálida y Humana (Clinical SaaS)

Referencia: `specs/004-transicion-estetica-clinical-saas/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Uniformidad cromática del Banner de Métricas en el Hero | ✅ hecho | `index.html` |
| **T2** | Rediseño de `.section-tag` a píldoras cálidas en `Plus Jakarta Sans` y Title Case | ✅ hecho | `css/main.css`, `index.html`, `aviso-de-privacidad.html` |
| **T3** | Limpieza de terminal en Formulario de Contacto (header formal SVG, error sans-serif) | ✅ hecho | `index.html`, `css/components/form.css` |
| **T4** | Humanización tipográfica y estética de la tarjeta "Sobre Mí" (sin scanlines ni jerga militar) | ✅ hecho | `index.html`, `css/components/trust-operator.css` |
| **T5** | Armonización de ventana PsicoLau, chips sans-serif, ribbon de precios y aviso de privacidad | ✅ hecho | `index.html`, `terminal.css`, `pricing.css`, `aviso-de-privacidad.html`, `terminal-effects.js` |
| **T6** | Validación visual en Desktop y Móvil (Ambos Temas) y despliegue | ✅ hecho | Navegador, documentación SDD, Git |

# Feature 005: Humanización Visual y Purga Integral de Jerga Tech (Clinical Human Presence)

Referencia: `specs/005-humanizacion-visual-copy-clinico/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Banner de Métricas del Hero Humano y Limpio (sans-serif, sin micro-iconos tech) | ✅ hecho | `index.html`, `css/components/hero.css` |
| **T2** | Erradicación de burbujas en `.section-tag` (Sobretítulos Editoriales Planos) | ✅ hecho | `css/main.css`, `index.html`, `aviso-de-privacidad.html` |
| **T3** | Ficha de Resultados PsicoLau (Purga de Telemetría, Conversión y `/panel`) | ✅ hecho | `index.html`, `css/components/terminal.css` |
| **T4** | Transformación de la Demo del Consultorio y Renombramiento de Menú | ✅ hecho | `index.html`, `css/components/terminal.css`, `aviso-de-privacidad.html` |
| **T5** | Purga de Jerga en Seguridad, Precios y Tarjetas de Confianza | ✅ hecho | `index.html`, `css/components/trust-operator.css`, `css/components/pricing.css` |
| **T6** | Validación visual en Desktop y Móvil (Ambos Temas) y despliegue | ✅ hecho | Navegador, documentación SDD, Git |

# Feature 006: Optimización de Arquitectura, DRY, Testing Automatizado y Git Governance

Referencia: `specs/006-optimizacion-arquitectura-calidad-testing/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Extracción de Partials y Script DRY (`sync-partials.js`) | ✅ hecho | `partials/header.html`, `partials/footer.html`, `scripts/sync-partials.js`, `package.json` |
| **T2** | Suite de Pruebas: Validación de Formulario y Sanitización | ✅ hecho | `tests/form-validation.test.js`, `js/validation-utils.js`, `js/form-handler.js` |
| **T3** | Suite de Pruebas: Integridad de Navegación y Anclas | ✅ hecho | `tests/link-integrity.test.js` |
| **T4** | Suite de Pruebas: Consistencia de Variables CSS | ✅ hecho | `tests/css-tokens.test.js`, `css/main.css` |
| **T5** | Git Governance: Formalización de Reglas de Aprobación | ✅ hecho | `AGENTS.md`, `GEMINI.md`, `package.json` |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 007: Remediación de Auditoría (Seguridad y Deuda Técnica)

Referencia: `specs/007-remediacion-auditoria-seguridad/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Blindaje Serverless (CORS, Honeypot, Errores y Validación) | ✅ hecho | `functions/api/contact.js` |
| **T2** | Modificación Frontend Formulario y Honeypot | ✅ hecho | `index.html`, `js/form-handler.js` |
| **T3** | Implementación CSP y Seguridad Global | ✅ hecho | `_headers` |
| **T4** | Refactorización CSS y Privacidad | ✅ hecho | `aviso-de-privacidad.html`, `css/components/privacy.css` |
| **T5** | Optimización de Performance (Fonts y Redundancias) | ✅ hecho | `index.html`, `aviso-de-privacidad.html`, `css/main.css` |
| **T6** | Salvaguardas Grid e Iconografía | ✅ hecho | `css/components/navbar.css`, `index.html` |
| **T7** | Limpieza de Repositorio de Assets | ✅ hecho | `assets/` |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 008: Simplificación Visual Integral, Purga de Sobrecarga, Conexión de Demo en Vivo y Nuevos Precios

Referencia: `specs/008-simplificacion-visual-ux-anti-sobrecarga/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Desahogo Visual de Presencia Digital (Caso PsicoLau) | ✅ hecho | Eliminados dots de ventana, barra falsa URL, badges secundarios y ficha técnica de 4 filas; conservado testimonio de Laura Gómez con `<details>`. |
| **T2** | Conexión de Demo en Vivo y Renovación de Gestión de Consultas (`#infrastructure`) | ✅ hecho | Retirado mockup interactivo hardcodeado; integrada tarjeta prémium de PSICOCLÍNICA con CTAs a demo y panel clínico, y 3 pilares sintetizados. |
| **T3** | Humanización y Desahogo de la Sección Sobre Mí (`#operator`) | ✅ hecho | Purgadas etiquetas y clases de operador (`.operator-id`, `.operator-clearance`, etc.); perfil humanizado y editorial para Cristhian Ruiz. |
| **T4** | Actualización Comercial de Planes y Precios (`#pricing`) | ✅ hecho | Actualizados precios ($4,800 MXN y $5,900 MXN), esquemas 50/50, tiempos de entrega (48-72h y 3-5 días), arquitectura de 8 páginas y enlaces de WhatsApp. |
| **T5** | Retiro del Formulario por Escrito y Centralización en WhatsApp (`#contact`) | ✅ hecho | Eliminados formulario por escrito, divisor y desvinculado `form-handler.js`; centralizada tarjeta directa de WhatsApp sin fricción. |
| **T6** | Estilos CSS, Adaptación Multi-Tema y Responsividad Mobile | ✅ hecho | Adaptado a modo claro/oscuro, salvaguarda `minmax(0, 1fr)` y breakpoints de 375px a 430px sin desbordamiento horizontal. |
| **T7** | Validación de Suite de Tests Automatizados e Integridad General | ✅ hecho | 16/16 tests pasando (tokens CSS, sanitización, anclas de navegación); partials sincronizados y validación en navegador completada. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 009: Hiper-Especialización para Psicoterapeutas, Entornos Visuales en Previews, Claridad de Dominio Anual y Sección FAQ

Referencia: `specs/009-refinamiento-psicoterapia-faq-y-entornos-visuales/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Entorno Visual y Escaparate Prémium en Caso PsicoLau (`#web-ui`) | ✅ hecho | Enmarcado el logo de PsicoLau en `.preview-showcase-card` con barra de estado superior, margen de respiro en 360°, tags y botón de visita armónico. |
| **T2** | Entorno Visual, Dock de Acciones y Pilares Modulares en Gestión de Consultas (`#infrastructure`) | ✅ hecho | Pastillas de cabecera separadas, dock elevado para CTAs de demo/panel y 3 pilares modulares individuales (`.demo-pillar-card`). |
| **T3** | Hiper-Especialización de Copy y Claridad de Dominio Anual en Precios (`#pricing`) | ✅ hecho | Renombrado a *Presencia Terapéutica*, purga de términos médicos y desglose transparente de renovación de dominio (~$195 a $800 MXN/año) y 1er año incluido en paquete 02. |
| **T4** | Creación del Componente Modular CSS de Acordeones (`css/components/faq.css`) | ✅ hecho | Creado `faq.css` modular nativo con `<details>` y `<summary>`, rotación de chevron y tokens adaptables multi-tema. |
| **T5** | Implementación de la Sección de Preguntas Frecuentes (`#faq`) y Sincronización de Navegación | ✅ hecho | 7 preguntas estratégicas implementadas antes de `#contact`; sincronizado enlace en Navbar, drawer móvil y Footer mediante `sync:partials`. |
| **T6** | Validación Integral de Suite de Tests Automatizados y Renderizado en Navegador | ✅ hecho | 16/16 tests pasando (tokens, sanitización, anclas) y validación visual completada con browser subagent (desktop y mobile 390px, 0 errores consola). |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 010: Remediación de CSP (Cloudflare Insights), Actualización SEO/Robots/Sitemap, Actualización de Consola y Cache-Busting de Assets

Referencia: `specs/010-remediacion-csp-seo-robots-sitemap-cache-busting/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Remediación de Directivas CSP para Cloudflare Web Analytics en `_headers` | ✅ hecho | Añadido `static.cloudflareinsights.com` en `script-src` y `cloudflareinsights.com` en `connect-src`. |
| **T2** | Actualización de Copy Comercial en Banner de Consola (`js/terminal-effects.js`) | ✅ hecho | Banner actualizado con enfoque exclusivo en psicoterapeutas y consulta privada. |
| **T3** | Actualización y Extensión de `sitemap.xml` y Validación de `robots.txt` | ✅ hecho | Añadida ruta `/aviso-de-privacidad` y fecha `2026-09-24` en `sitemap.xml`. |
| **T4** | Sintonización de Schema.org JSON-LD y Metadatos SEO en `index.html` | ✅ hecho | Metadatos y JSON-LD alineados exclusivamente a psicología y psicoterapia. |
| **T5** | Cache-Busting Masivo Unificado (`?v=6.0`) en Assets CSS y JS | ✅ hecho | Versión `?v=6.0` aplicada a todos los CSS/JS en `index.html` y `aviso-de-privacidad.html`. |
| **T6** | Validación Automatizada de Tests y Comprobación en Viewport de Usuario (998x614) | ✅ hecho | 16/16 tests pasando y comprobación visual a 998x614 sin solapamientos ni errores de consola. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 011: Alta en Google Search, Optimización para Motores de Inteligencia Artificial (GEO / AI Search), Schema FAQPage y llms.txt

Referencia: `specs/011-alta-google-search-console-geo-ai-search/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Implementación de Schema.org Unificado `@graph` (`FAQPage`, `ProfessionalService`, `Person`) | ✅ hecho | `@graph` con 3 entidades: `ProfessionalService` con paquetes ($4,800 y $5,900 MXN), `Person` y `FAQPage` con las 7 preguntas/respuestas. |
| **T2** | Creación del Archivo de Contexto para Inteligencias Artificiales (`llms.txt`) | ✅ hecho | Creado `/llms.txt` en la raíz con resumen ejecutivo, paquetes, caso PsicoLau y canales de contacto para LLMs (ChatGPT, Claude, Perplexity). |
| **T3** | Optimización de `robots.txt` para Motores Tradicionales y Rastreadores de IA | ✅ hecho | Rastreo abierto general y bienvenida explícita a `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` y sitemap canónico. |
| **T4** | Guía Operativa de Registro e Indexación en Google Search Console y Bing | ✅ hecho | Guía redactada en `docs/seo-alta-google-search-console.md` para envío de `sitemap.xml`, inspección prioritaria y sincronización en 1 clic con Bing. |
| **T5** | Validación Automatizada de Tests y Accesibilidad Web | ✅ hecho | 16/16 tests pasando y validación sintáctica de JSON-LD y `/llms.txt` completada. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 012: Calibración de Longitud de Title y Meta Description para Bing y Google

Referencia: `specs/012-calibracion-longitud-seo-title-meta-bing/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Calibración de `<title>` a 51 caracteres en `index.html` | ✅ hecho | `index.html`: `CrisDev | Cristhian Ruiz — Web para Psicoterapeutas` (51 chars <= 65). |
| **T2** | Calibración de `<meta name="description">` a 149 caracteres en `index.html` | ✅ hecho | `index.html`: `Desarrollo web y plataformas clínicas para psicólogos y terapeutas...` (149 chars, 120-160). |
| **T3** | Suite de Pruebas Automatizadas de Metadatos SEO (`tests/seo-metadata.test.js`) | ✅ hecho | Nueva suite de tests con Node.js nativo (20/20 tests pasando). |
| **T4** | Despliegue en Producción y Actualización de Documentación SDD | ✅ hecho | `overview/session.md`, `overview/tasks.md` |

---

# Feature 013: Reestructuración Comercial de Landing Page: Tríada de Oferta y Diferenciador de Aviso de Publicidad

Referencia: `specs/013-reestructuracion-comercial-triada-y-aviso-publicidad/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Hero y Sub-Hero (Claridad de Posicionamiento) | ✅ hecho | `index.html`, `css/components/hero.css`: Nuevo titular, subtítulo, CTAs `#contact` y `#pricing`, barra de confianza. |
| **T2** | Bloque de Claridad de Oferta (Dualidad: Web Personalizada vs Plataforma Estándar) | ✅ hecho | `index.html`, `css/components/terminal.css`: Sección `#solutions` con desglose dual y anclaje de alcance. |
| **T3** | Elevación y Refinamiento del Demo Operativo (`#infrastructure`) a 5 Módulos | ✅ hecho | `index.html`, `css/components/terminal.css`: Invitación a probar antes de contratar y 5 tarjetas modulares. |
| **T4** | Reencuadre de Presencia Digital y Caso PsicoLau (`#web-ui`) | ✅ hecho | `index.html`, `css/components/terminal.css`: 3 pilares de web representativa y etiqueta de Caso Personalizado. |
| **T5** | Precios, Guía de Aviso de Publicidad y Bloque de Desarrollo a Medida (`#pricing`) | ✅ hecho | `index.html`, `css/components/pricing.css`: Paquetes $4,800 y $5,900, guía publicidad, tarjeta con deslinde y bloque a medida. |
| **T6** | Perfil Sobre Mí (`#operator`), Contacto (`#contact`) y Preguntas Frecuentes (`#faq`) | ✅ hecho | `index.html`, `css/components/trust-operator.css`, `css/components/faq.css`: 11 FAQs nativas, trato 1 a 1 y mantra de cierre. |
| **T7** | Sintonización de SEO, Schema.org JSON-LD, `llms.txt` y Metadatos | ✅ hecho | `index.html`, `llms.txt`: `@graph` alineado a 11 FAQs, catálogo de servicios sin 'a medida' estándar, `llms.txt` actualizado. |
| **T8** | Sincronización de Partials, Validación Automatizada (`npm test`) y Verificación Visual en Navegador | ✅ hecho | `partials/`, `index.html`, `tests/`: Partials sincronizados, 20/20 tests en verde, 0 errores 404/consola. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 014: Reordenamiento de Navegación (FAQ al Final), Claridad en Enlaces a Videollamadas y Alcance de Personalización en Paquete 01

Referencia: `specs/014-reordenamiento-navegacion-alcance-personalizacion-videollamadas/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Reordenamiento de enlaces en cabecera y pie de página | ✅ hecho | `partials/header.html`, `partials/footer.html`: Secuencia 1:1 con FAQ al final después de Sobre Mí. |
| **T2** | Reordenamiento secuencial de secciones en el DOM de `index.html` | ✅ hecho | `index.html`: `#pricing` reubicado antes de `#security` y `#operator`, `#faq` al final antes de `#contact`. |
| **T3** | Reemplazo de "Videollamadas integradas" por "Enlaces para videollamadas" | ✅ hecho | `index.html`: Sustituido en Soluciones, 5.º Pilar de Demo, Paquete 02 de Precios y FAQ 8. |
| **T4** | Alcance de personalización y delimitación de cambios grandes en Paquete 01 y FAQ | ✅ hecho | `index.html`: Viñeta reforzada en Paquete 01, caja de alcance `.pricing-scope-clarification` añadida y FAQs 1 y 9 ampliadas. |
| **T5** | Sintonización de Schema.org JSON-LD y `llms.txt` | ✅ hecho | `index.html`, `llms.txt`: `@graph` y archivo `/llms.txt` alineados con los nuevos textos. |
| **T6** | Sincronización de Partials, Validación Automatizada (`npm test`) y Verificación Visual | ✅ hecho | `partials/`, `index.html`, `aviso-de-privacidad.html`, `tests/`: 20/20 tests en verde y sincronización exitosa. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 015: Sección Comparativa frente a Directorios Médicos (ej. Doctoralia) y Reindexación para IA / Buscadores

Referencia: `specs/015-seccion-comparativa-directorios-y-reindexacion-ia/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Hoja de estilos `css/components/comparison.css` y vinculación en `index.html` | ✅ hecho | `comparison.css`, `index.html`: Estilos modulares, paleta clinical, responsive safeguards `minmax(0, 1fr)`. |
| **T2** | Estructuración de sección `#comparison` y anclaje contextual en `#pricing` | ✅ hecho | `index.html`: Matriz de 6 contrastes clave, SVG icons (cero emojis), botón contextual en precios. |
| **T3** | Actualización de archivos de rastreo, GEO y documentación de IA | ✅ hecho | `robots.txt` (DeepSeekBot, CCBot, meta, Bytespider), `sitemap.xml` (lastmod 2026-09-28), `llms.txt` (tabla comparativa). |
| **T4** | Sincronización de Partials y Verificación de Suite de Pruebas Automatizadas | ✅ hecho | `scripts/sync-partials.js`, `tests/`: 20/20 tests en verde en 82ms. |
| **T5** | Verificación Visual en Navegador (Desktop y Mobile 375px) y Cierre Documental | ✅ hecho | Validado servicio local (HTTP 200), CSS servido, documentación SDD actualizada. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 016: Suite Avanzada de GEO (Generative Engine Optimization), IndexNow Instantáneo y Página Dedicada de Comparativa (vs. Doctoralia)

Referencia: `specs/016-suite-optimizacion-geo-indexnow-y-comparativa-doctoralia/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Módulo IndexNow (Clave de verificación, script de ping y comando npm) | ✅ hecho | `e4d7a8809c954e7d8b584d41fa217c9b.txt`, `scripts/ping-indexnow.js`, `package.json`: ping automatizado a Bing/Copilot/Perplexity. |
| **T2** | Vincular `<link rel="llms-txt">` y enriquecer Schema.org JSON-LD | ✅ hecho | `index.html`, `aviso-de-privacidad.html`: Descubrimiento de `llms.txt` y 12.ª FAQ comparativa en JSON-LD. |
| **T3** | Página de aterrizaje dedicada `comparativa-doctoralia.html` | ✅ hecho | `comparativa-doctoralia.html`: Desglose tarifas Doctoralia, comisiones 15%-20%, tabla ROI 3 años, H1 y FAQs. |
| **T4** | Actualizar `sitemap.xml` y expandir suite de pruebas (`npm test`) | ✅ hecho | `sitemap.xml` (URL añadida con priority 0.8), `tests/seo-metadata.test.js`, `tests/link-integrity.test.js`: 23/23 tests en verde. |
| **T5** | Sincronización final, verificación en servidor local y reporte documental | ✅ hecho | `sync-partials.js` (3 páginas sincronizadas), HTTP 200 en `/comparativa-doctoralia`, documentación SDD al día. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 017: Enlace Contextual de Análisis Profundo a Comparativa Doctoralia en la Landing Principal

Referencia: `specs/017-enlace-contextual-analisis-doctoralia-landing/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Estilos modulares para enlace profundo en `css/components/comparison.css` | ✅ hecho | `comparison.css`: Clases `.comparison-deepdive-box`, `.comparison-callout-main` y `.comparison-deepdive-link`. |
| **T2** | Integrar bloque de enlace contextual en el callout de `#comparison` en `index.html` | ✅ hecho | `index.html`: Enlace semántico directo a `comparativa-doctoralia.html` con micro-transición en flecha. |
| **T3** | Sincronización de partials, validación de suite de pruebas (`npm test`) y reporte documental | ✅ hecho | `sync-partials.js`, `link-integrity.test.js`: 23/23 tests en verde en 59ms. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado

---

# Feature 018: Remediación del Modo Oscuro y Scripts ES Module en Comparativa Doctoralia

Referencia: `specs/018-remediacion-modo-oscuro-comparativa-doctoralia/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Carga modular de `theme-manager.js` con `type="module"` en `comparativa-doctoralia.html` | ✅ hecho | `comparativa-doctoralia.html`: Removidos scripts clásicos innecesarios y aplicada carga canónica ES module con cache-busting `?v=6.0`. |
| **T2** | Prueba de regresión automatizada para scripts modulares en `tests/` | ✅ hecho | `tests/link-integrity.test.js`: Verificación de `type="module"` y existencia física de scripts en repo. 25/25 tests en verde. |
| **T3** | Validación funcional y visual en servidor local | ✅ hecho | Verificado cambio fluido a Clinical Deep Navy (`data-theme="dark"`), cambio dinámico a logo blanco y 0 errores en consola. |
| **T4** | Actualización de bitácora y gobernanza Git | ✅ hecho | Documentación de cierre y push a origin/main autorizado por el usuario. |

---

# Feature 019: Suite de Conversión Comercial: Calculadora Interactiva de Ahorro y ROI, Badges de Confianza Médica (NOM-004) y Demostración Consultiva en Vivo

**Estado:** ⏸️ En pausa temporal (A la espera de estabilizar base matemática y visual en Feature 020)  
Referencia: `specs/019-calculadora-ahorro-badges-confianza-y-demo-en-vivo/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Badges de Confianza Médica en el Hero (NOM-004, DB privada, $0 rentas) | ⏸️ pospuesta | Se integrará tras Feature 020 |
| **T2** | Estilos modulares de la Calculadora de Ahorro (`savings-calculator.css`) | ⏸️ pospuesta | Se integrará tras Feature 020 |
| **T3** | Estructura HTML de la Sección `#savings-calculator` en `index.html` | ⏸️ pospuesta | Se integrará tras Feature 020 |
| **T4** | Módulo JS de Cálculo Interactivo y Sincronización de WhatsApp | ⏸️ pospuesta | Se integrará tras Feature 020 |
| **T5** | Integración del Selector de Demostración Consultiva de 15 Minutos en `#contact` | ⏸️ pospuesta | Se integrará tras Feature 020 |
| **T6** | Pruebas Unitarias Automatizadas en Node.js (`tests/savings-calculator.test.js`) | ⏸️ pospuesta | Se integrará tras Feature 020 |
| **T7** | Verificación Visual en Navegador (Desktop y Móvil) y Cierre Documental | ⏸️ pospuesta | Se integrará tras Feature 020 |

---

# Feature 020: Remediación de Credibilidad Numérica, Prueba Visual en Hero, Blindaje Legal y Pulido de Conversión

**Estado:** ✅ Completada y Validada  
Referencia: `specs/020-remediacion-credibilidad-prueba-visual-hero-y-pulido/tasks.md`

| ID | Tarea | Estado | Nota |
| :--- | :--- | :--- | :--- |
| **T1** | Recalibración Matemática del Ahorro y Fecha de Consulta de Tarifas | ✅ hecho | `index.html`, `comparativa-doctoralia.html`, `llms.txt`: Cifras sincronizadas sin discrepancias, nota de tarifas a septiembre de 2026. |
| **T2** | Blindaje Legal, Titulación Profesional y Actualización de Redes Sociales | ✅ hecho | `partials/footer.html`, `index.html`, `aviso-de-privacidad.html`, `comparativa-doctoralia.html`, `js/terminal-effects.js`: Título a Desarrollador de Software, lineamientos NOM-004, hosting Cloudflare, Facebook e Instagram oficiales (LinkedIn retirado). |
| **T3** | Reparación del Bug CSS en Tabla Desktop y Desahogo de Tarjetas de Precios | ✅ hecho | `css/components/comparison.css`, `css/components/pricing.css`, `index.html`: `.comparison-mobile-label { display: none; }` en desktop y acordeón nativo `<details>` en tarjetas de precios. |
| **T4** | Rediseño Visual del Hero con Mockup de Interfaz Real | ✅ hecho | `index.html`, `css/components/hero.css`, `js/terminal-effects.js`: Hero en 2 columnas desktop con marco `.hero-mockup-frame` interactivo (Agenda Clínica semanal viva y conmutador a PsicoLau). |
| **T5** | Implementación del Botón Flotante de WhatsApp para Móvil | ✅ hecho | `partials/footer.html`, `css/components/footer.css`: Botón flotante semántico `.fab-whatsapp` exclusivo para móviles (<768px) sincronizado en todas las páginas. |
| **T6** | Pruebas Automatizadas de Integridad y Validación Visual en Navegador | ✅ hecho | `tests/link-integrity.test.js`: Suite ampliada a 26/26 tests en verde (75ms). Validación visual en navegador (desktop y móvil 390px, 0 errores en consola). |
| **T7** | Cierre Documental y Gobernanza Git | ✅ hecho | `overview/tasks.md`, `overview/session.md`, `specs/020-.../tasks.md`: Bitácora sincronizada y solicitud formal de autorización para commit/push. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado · ⏸️ pospuesta




