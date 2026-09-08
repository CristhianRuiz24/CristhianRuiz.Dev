# Spec 002 — Modo Oscuro Clínico (Clinical Deep Navy Dark Mode)

## Contexto y objetivo
Proporcionar a los visitantes de **CrisDev (Cristhian Ruiz - Software & Web Engineering)** la capacidad de experimentar el sitio tanto en su modo claro predeterminado (*Clinical SaaS White*) como en un modo oscuro de alto impacto y confort visual (*Clinical Deep Navy*).

El objetivo es doble:
1. **Ergonomía visual y accesibilidad:** Permitir una lectura cómoda y relajada para especialistas de la salud y prospectos que navegan en entornos con poca luz o que tienen preferencia activa por interfaces oscuras en sus sistemas operativos.
2. **Coherencia técnica y de marca:** Demostrar una ingeniería frontend limpia y refinada mediante variables CSS centralizadas, transiciones de color fluidas, sincronización automática entre páginas, prevención absoluta del parpadeo de carga (*Flash of Light Theme*) y respeto por la sobriedad médica y profesional exigida en [docs/constitution.md](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/docs/constitution.md).

---

## Usuarios / actores
- **Visitante / Prospecto de la Salud:** Navega por la web buscando servicios de desarrollo web y software médico. Puede tener su dispositivo configurado en modo oscuro por defecto o preferir alternarlo manualmente con un solo toque sin perder su contexto de lectura.
- **Usuario Recurrente:** Ha visitado el sitio previamente y espera que su preferencia de tema persista en visitas futuras y entre diferentes páginas del sitio (`index.html` y `aviso-de-privacidad.html`).

---

## Historias de usuario
- **H1 (Preferencia Automática):** Como usuario con mi sistema operativo o navegador configurado en modo oscuro, quiero que la web de CrisDev cargue inmediatamente en modo oscuro sin destellos blancos molestos, para disfrutar de una experiencia visual integrada con mi entorno desde el primer milisegundo.
- **H2 (Control Manual sin Fricción):** Como visitante, quiero alternar en cualquier momento entre modo claro y modo oscuro pulsando un botón accesible y visible tanto en escritorio como en móvil, para elegir la visualización que me resulte más cómoda según la hora del día.
- **H3 (Persistencia Cross-Page):** Como visitante interesado en el aviso de privacidad o en volver a la landing más tarde, quiero que mi elección de tema se recuerde al navegar entre páginas y al recargar la web, para no tener que reconfigurarla constantemente.
- **H4 (Legibilidad y Confianza Clínica):** Como profesional de la salud (psicólogo, médico), quiero que el modo oscuro conserve la seriedad, pulcritud y claridad del contenido (tablas de precios, testimonios, formularios, casos de estudio y telemetría), sin saturación de colores agresivos ni contrastes estridentes.

---

## Requisitos funcionales (Criterios de aceptación en EARS)

### 1. Detección, Inicialización y Prevención de FOUC
- **RF-1 (Ubicuo):** EL SISTEMA mantendrá la definición de tokens cromáticos para el tema claro (`[data-theme="light"]` o predeterminado) y el tema oscuro (`[data-theme="dark"]`) mediante variables CSS nativas centralizadas en la capa de diseño base.
- **RF-2 (Estado):** MIENTRAS la página se encuentre cargando en el navegador, EL SISTEMA evaluará la preferencia guardada en `localStorage('crisdev_theme')`; si existe un valor guardado (`dark` o `light`), EL SISTEMA aplicará dicho tema al elemento raíz `<html>` antes de que el contenido comience a pintarse en pantalla, evitando cualquier parpadeo de luz blanca (*Flash of Unstyled Content / FOUC*).
- **RF-3 (Estado):** MIENTRAS no exista una preferencia previa guardada en `localStorage`, EL SISTEMA consultará la preferencia del sistema del usuario mediante `window.matchMedia('(prefers-color-scheme: dark)')` y aplicará el tema correspondiente de forma automática.
- **RF-4 (Evento):** CUANDO el usuario cambie la preferencia de tema de su sistema operativo mientras el sitio esté abierto y no haya forzado una elección manual, EL SISTEMA actualizará automáticamente el tema de la interfaz en tiempo real.

### 2. Control de Interfaz (Toggle Button en Desktop y Móvil)
- **RF-5 (Ubicuo):** EL SISTEMA mostrará un botón de control de tema interactivo y accesible (`aria-label` descriptivo) ubicado en la barra de navegación de escritorio (junto al botón de WhatsApp) y dentro del entorno móvil (accesible en la cabecera y/o en el drawer desplegable).
- **RF-6 (Estado):** MIENTRAS el tema activo sea claro, EL SISTEMA mostrará en el botón el icono vectorial de Luna (indicando la acción de cambiar a noche/oscuro).
- **RF-7 (Estado):** MIENTRAS el tema activo sea oscuro, EL SISTEMA mostrará en el botón el icono vectorial de Sol (indicando la acción de cambiar a día/claro).
- **RF-8 (Evento):** CUANDO el usuario haga clic o toque en el botón de control de tema, EL SISTEMA alternará el tema actual (`dark` ↔ `light`), actualizará el atributo `data-theme` en el elemento `<html>`, guardará la nueva preferencia en `localStorage('crisdev_theme')` y actualizará el icono visible del botón con una transición fluida.

### 3. Paleta Cromática "Clinical Deep Navy"
- **RF-9 (Estado):** MIENTRAS el modo oscuro esté activo, EL SISTEMA aplicará los siguientes tokens de color calibrados para confort médico:
  - Fondo base principal (`--bg-primary`): Azul medianoche profundo (`#0A0F1D` o `#0B132B`).
  - Superficies y tarjetas (`--bg-surface`, `--bg-surface-elevated`): Azul pizarra clínico enriquecido (`#111C35` / `#17223B`).
  - Textos de alta legibilidad: Primario en Blanco Clínico (`#F8FAFC`), Secundario en Gris Perla (`#94A3B8`) y Muted en Azul Grisáceo (`#64748B`).
  - Bordes y separadores (`--border-subtle`, `--border-muted`): Azul pizarra translúcido (`rgba(148, 163, 184, 0.12)` a `rgba(148, 163, 184, 0.2)`).
  - Acentos de marca (`--color-accent`): Cyan médico / Azul Cerúleo luminoso (`#38BDF8` / `#0077B6`) garantizando un ratio de contraste WCAG AA superior a 4.5:1 sobre los fondos oscuros.
- **RF-10 (Ubicuo):** EL SISTEMA aplicará transiciones CSS suaves (`background-color`, `border-color`, `color` con duración de 0.25s a 0.3s) al alternar entre modos, evitando cambios bruscos o parpadeos agresivos a la vista.

### 4. Adaptación de Elementos Gráficos y Marca
- **RF-11 (Estado):** MIENTRAS el modo oscuro esté activo, EL SISTEMA alternará automáticamente el logotipo oficial del encabezado a la versión de alto contraste con trazos blancos y cyan ([assets/images/logo-crisdev-white.svg](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/assets/images/logo-crisdev-white.svg)).
- **RF-12 (Estado):** MIENTRAS el modo claro esté activo, EL SISTEMA mantendrá el logotipo estándar oficial ([assets/images/logo-crisdev.svg](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/assets/images/logo-crisdev.svg)).
- **RF-13 (Estado):** MIENTRAS el modo oscuro esté activo, EL SISTEMA adaptará el fondo del drawer móvil (`#mobileNavDrawer`), las tarjetas de precios (`#pricing`), el terminal de previsualización clínica (`#psicolau`), las tarjetas de testimonios y los inputs del formulario de contacto para mantener contraste y legibilidad óptimos sin romper la estructura.

### 5. Alcance Multi-Página
- **RF-14 (Ubicuo):** EL SISTEMA garantizará paridad de soporte del modo oscuro tanto en la página principal ([index.html](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/index.html)) como en la página secundaria de Aviso de Privacidad ([aviso-de-privacidad.html](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/aviso-de-privacidad.html)).

---

## Casos límite y excepciones
- **SI** el usuario tiene deshabilitado `localStorage` (modo incógnito estricto o políticas de privacidad del navegador), **ENTONCES EL SISTEMA** alternará el tema en memoria durante la sesión activa sin arrojar errores de JavaScript en consola.
- **SI** el navegador no soporta `matchMedia` o `prefers-color-scheme`, **ENTONCES EL SISTEMA** aplicará el tema claro por defecto.

---

## Fuera de alcance (Out of Scope)
- Temas cromáticos adicionales (ej. tema sepia, alto contraste monocrático o temas personalizados por usuario).
- Backend o sincronización en base de datos de la preferencia de tema (se mantiene 100% en cliente mediante cookies/localStorage sin requerir cuenta o login).
- Alteración de las imágenes externas o capturas del caso PsicoLau (se mantienen con sus colores de diseño originales, adaptando únicamente sus marcos y tarjetas contenedoras).
