# Sesión activa — CrisDev (`cristhianruiz.dev`)

**Última actualización:** 2026-09-08
**Fase SDD actual:** Feature 003: Armonización Tipográfica de Botones Comerciales (T1 a T3 Completadas)

## Lo que se logró en esta sesión

1. **Feature 003: Armonización Tipográfica de Botones y Elementos de Lectura (Completada):**
   - **Migración a Plus Jakarta Sans:** Se modificó la clase base `.btn` en `css/main.css` para utilizar `font-family: var(--font-sans); font-weight: 600; letter-spacing: -0.01em;`, otorgando a todos los botones del sitio la estética redondeada, moderna y médica del proyecto.
   - **Remoción de Uppercase Forzado:** Se sustituyó `text-transform: uppercase` por `text-transform: none;`, permitiendo que botones comerciales como *"Consultar por WhatsApp"*, *"Ver Planes y Precios"*, *"Elegir Paquete"* y *"Enviar Solicitud"* se muestren con capitalización natural humana.
   - **Tratamiento de la Métrica "Privada":** En `index.html` y `css/components/terminal.css`, se asignó la clase `.stat-word` con `Plus Jakarta Sans` a la palabra *"Privada"*, eliminando los trazos cuadrados de editor de código y conservando `JetBrains Mono` únicamente para la métrica numérica *"0%"*.
   - **Validación Multi-Dispositivo:** Comprobación en navegador (desktop 1280px y móvil 390px) confirmando adaptación fluida, centrado perfecto de iconos SVG y cero errores JS.

1. **Feature 002: Modo Oscuro Clínico (Clinical Deep Navy) Completo:**
   - **Tokens Design System:** Definición de la paleta *Clinical Deep Navy* en `css/main.css` (`--bg-primary: #0B1120`, `--bg-surface: #111C35`, `--text-primary: #F8FAFC`, `--text-secondary: #94A3B8`, `--color-accent: #38BDF8`).
   - **Módulo JS & Anti-FOUC:** `js/theme-manager.js` con detección automática de `prefers-color-scheme`, persistencia en `localStorage`, despacho de eventos y script síncrono anti-parpadeo blanco en `<head>`.
   - **Botón Toggle Sol/Luna:** Integrado en desktop y en la barra móvil junto al botón hamburguesa con iconos SVG vectoriales nítidos y animación fluida.
   - **Logo Dinámico:** Conmutación automática a `logo-crisdev-white.svg` en modo oscuro y `logo-crisdev.svg` en modo claro.
   - **Drawer Móvil:** Integración de control accesible de tema dentro del menú desplegable con botón cerrar (X) y botón "Inicio".

2. **Armonización Cromática de Textos y Badges en Modo Claro y Oscuro (T6):**
   - **Hero Title:** Se retiró el `highlight-primary` de *"organiza tus consultas en automático."* para que adopte el color de texto primario (`#F8FAFC` blanco clínico en modo oscuro / `#1A365D` azul marino en modo claro), dejando únicamente *"atrae más pacientes"* en azul cerúleo.
   - **Tipografía Principal:** Se corrigió `.text-primary` en `css/main.css` y `css/components/hero.css` para utilizar `var(--text-primary)` en lugar de `var(--color-primary)`, resolviendo que negritas y subtítulos se volvieran cyan en modo oscuro.
   - **Panel de Control Clínico (Badges y Pastillas):** Se implementaron tokens dedicados para modo oscuro en `css/components/terminal.css`:
     - `.pill-green` y `.is-paid`: verde salvia luminoso `#34D399` sobre fondo translúcido y borde verde suave.
     - `.pill-orange` y `.is-pending`: ámbar cálido `#FBBF24` sobre fondo translúcido y borde ámbar suave.
     - `.pill-neutral` (`14 Consultas`): superficie elevada con texto secundario legible.
     - `.cobranza-row-card`: borde lateral izquierdo en ámbar `#F59E0B`.
     - `.btn-mock-whatsapp`: verde WhatsApp `#25D366` con ratio de contraste accesible >7:1.
     - `.metric-val-pending`: balance contable en ámbar `#B45309` (claro) y `#FBBF24` (oscuro).
   - **Limpieza de Variables:** Se eliminaron variables CSS huérfanas en `terminal.css` (`--accent-blue-bright`) y se unificaron los iconos de seguridad en Azul Cerúleo (`text-accent`) y checkmarks en Verde Confianza (`text-success`).
   - **Validación Visual:** Comprobación rigurosa en navegador en ambos modos (claro y oscuro) con cero errores de consola.

1. **Reemplazo Integral por el Logo Oficial:**
   - Incorporación del SVG oficial del cliente (`assets/images/logo-crisdev.svg`) tanto en el Navbar principal como en el Footer.
   - Ajuste métrico del `viewBox` del SVG para un renderizado horizontal sin márgenes transparentes vacíos.
   - Enlace oficial a `assets/images/favicon.png` y `apple-touch-icon`.
2. **Centralización del CTA "Consultar por WhatsApp":**
   - **Hero:** Botón primario centralizado y destacado para iniciar conversación directa en WhatsApp.
   - **Sección de Contacto (`#contact`):** Reestructurada con tarjeta central de conversión inmediata por WhatsApp (`max-width: 760px; margin: 0 auto`), con beneficios 1 a 1 y botón de acción principal, seguida de un divisor sutil y el formulario estructurado para cotizaciones por escrito.
   - **Botón Flotante Permanente:** Incorporado en la esquina inferior derecha con badge animado en hover y adaptación responsive mobile.
   - **Navbar:** Prevención de saltos de línea indeseados (`white-space: nowrap`), garantizando visualización limpia en 1 línea.
3. **Eliminación del Botón/Badge Brillante:**
   - Se removió por completo el indicador `.system-status` ("● Disponible para proyectos") del encabezado en `index.html` y `aviso-de-privacidad.html`, junto con la animación de pulso y glow en `navbar.css`.
   - El Navbar ahora presenta una distribución simétrica y despejada: Logo a la izquierda, navegación al centro y CTA a la derecha.
4. **Actualización de Favicon Oficial en SVG Vectorial:**
   - Se integró el SVG oficial proporcionado por el usuario (`assets/images/favicon.svg`), garantizando nitidez perfecta e infinita escalabilidad en todas las pestañas y resoluciones de pantalla.
   - Se enlazó en `index.html` y `aviso-de-privacidad.html` con versión de cache-busting `?v=2.1`.
5. **Remoción de Badges Superiores del Hero:**
   - Se eliminó el contenedor `.hero-badge` (`Soluciones Web para Psicólogos y Salud` y `Entrega Máxima: 3 Semanas`) para que la sección Hero arranque directamente con el titular de alta conversión, ganando limpieza y minimalismo.
6. **Equilibrado Armónico del Navbar y Actualización del Copy Hero (T25):**
   - **Distribución Navbar:** Se implementó un layout simétrico con CSS Grid de 3 columnas (`1fr auto 1fr`) para la barra de navegación en desktop. El logo queda anclado a la izquierda, los enlaces centrados con respiración adecuada (`gap: 2rem; font-size: 0.9rem`) y el botón de WhatsApp a la derecha, eliminando el vacío asimétrico previo.
   - **Adaptabilidad Responsive:** En pantallas móviles y tablets (`<=992px`) y en páginas secundarias (como `aviso-de-privacidad.html`), se preserva automáticamente `display: flex; justify-content: space-between;` sin desbordamientos.
   - **Copy del Hero:** Se actualizó el párrafo `.hero-description` exactamente al texto requerido: *"Diseño la cara pública de tu consultorio con una estética cálida, accesible y humana para tus pacientes, respaldada con un panel de agenda y expedientes privados."*
7. **Corrección de Contraste, Logo de Footer Transparente y Paleta Clínica (T26):**
   - **Logo en Footer:** Se eliminó la caja blanca contenedora y se generó [`assets/images/logo-crisdev-white.svg`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/assets/images/logo-crisdev-white.svg) con trazos blancos y cyan eléctrico para un renderizado directo, pulcro y 100% transparente sobre el fondo azul marino del footer.
   - **Legibilidad en Aviso de Privacidad:** Se corrigió el color de texto en la caja de descargo legal (Sec. 05), eliminando el gris claro residual (`#D1D5DB`) y estableciendo tonos de alto contraste (`#475569` y `#1A365D`) con borde indicador azul.
   - **Badges de Caso PsicoLau:** Se sustituyeron los botones cuadrados monospace por pills modernas sans-serif (`Especialidad: Neuropsicología` con icono de pulso médico y `En Producción` con punto verde esmeralda con pulso animado). Se reemplazaron emojis de candado por iconos SVG limpios.
   - **Hover en Recomendación de Laura:** Se corrigió el estado `:hover` para que el texto y la flecha permanezcan en azul clínico nítido (`#1A365D` / `#0077B6`), eliminando el bug donde se volvían blancos e invisibles.
   - **Calibración de Panel Clínico:** Se sustituyeron los colores neón deslavados de la versión oscura (`#34D399` y `#FBBF24`) por tonos clínicos de alto contraste (`#065F46` para Pagado / 9 Pagadas y `#92400E` para Por Cobrar / 5 Por Cobrar), logrando una estética médica 100% armoniosa y legible.
8. **Armonización Cromática en Planes y Precios (T27):**
   - En el Paquete 01 (*Presencia Digital Directa*), se sustituyó el texto verde plano en `Mantenimiento o Sistema: $0 MXN / mes (De por vida)` por **Azul Clínico (`text-accent`: `#0077B6`)**.
   - Esto genera una correspondencia visual perfecta con el Paquete 02 (*Consultorio Inteligente*), donde el costo recurrente (`$499 MXN / mes`) también usa `text-accent`, unificando la jerarquía cromática de la sección de precios.
9. **Remoción de Tag 'INGENIERÍA · SOBRE MÍ' y Armonización Clínica de Hover y Sombras (T28):**
   - **Remoción de Tag:** Se eliminó la etiqueta `<div class="section-tag">INGENIERÍA · SOBRE MÍ</div>` en la sección `#operator` de `index.html`, dejando un inicio limpio y directo con el título *"Quién Desarrolla Tu Solución"*.
   - **Purga de Sombras Negras y Neón en Tarjetas:** En la tarjeta de preview interactivo de PsicoLau (`.minimal-preview-card`), se eliminó la sombra oscura densa (`0 16px 45px rgba(0, 0, 0, 0.75)`), el borde cian y el resplandor antiguo. Ahora se eleva suavemente (`translateY(-4px)`), con borde en Azul Clínico (`#0077B6`) y sombra aérea suave (`var(--shadow-hover)`).
   - **Armonización General de Hovers:** Se unificaron las tarjetas de Precios (`.pricing-card:hover`), Tarjetas de Insights (`.insight-card:hover`), Protocolos (`.trust-card:hover`), Terminales (`.terminal-card:hover`) y Contacto (`.centered-whatsapp-card:hover`), todas con transición fluida a borde azul clínico y sombra ligera.
   - **Calibración de .section-tag:** Se actualizaron los badges de sección en `css/main.css` a fondo y borde azul sutil con texto `#0077B6`.

10. **Alineación Estratégica de Enlaces Sociales (T29):**
    - Se removió el enlace a GitHub del pie de página y del schema JSON-LD, eliminando ruido técnico innecesario para clientes de salud.
    - Se incorporó el enlace directo a Facebook (`https://www.facebook.com/profile.php?id=61594210641667&locale=es_LA`) junto con LinkedIn (`Facebook · LinkedIn`), conectando con la red principal donde interactúan los especialistas de la salud independientes en México y Latinoamérica.
    - Se unificó el texto legal de copyright en el footer de `aviso-de-privacidad.html`.

11. **Menú Hamburguesa Móvil (Triple Raya) y Drawer Desplegable (T30):**
    - En pantallas móviles (`<=992px`), se ocultó el botón superior de texto `[CONSULTAR POR WHATSAPP]`, desahogando la cabecera.
    - Se implementó el botón accesible de triple raya (`#mobileMenuToggle`), con animación suave de las tres barras hacia una `✕` azul clínica al abrirse.
    - Se creó el panel desplegable (`#mobileNavDrawer`) con fondo blanco clínico sólido (sin transparencias que trasluzcan el hero de fondo), incluyendo los 5 enlaces de navegación táctil (Presencia Digital, Sistemas a Medida, Planes y Precios, Privacidad, Sobre Mí) con flechas SVG, además del botón CTA a WhatsApp.
    - Se conectó cierre automático por clic en enlace (con scroll suave hacia la sección elegida), clic en el telón de fondo (`#mobileNavBackdrop`), tecla `Escape` o redimensionamiento a desktop.
    - En escritorio (`>=993px`), la barra de navegación se mantiene exactamente igual (layout simétrico de 3 columnas con enlaces en el centro y botón de WhatsApp a la derecha; el botón hamburguesa permanece oculto).

12. **Actualización de Imagen Open Graph para WhatsApp y Redes Sociales (T31):**
    - Se reemplazó la foto de perfil personal en `og:image` por el imagotipo oficial corporativo con fondo blanco clínico (`assets/images/og-image.png`).
    - Resolución estándar de 1200x630 px con zona segura central de 630x630 px para que no se corte en miniaturas cuadradas de WhatsApp.

13. **Optimización de Nitidez, Contraste y Trazo en Open Graph (T32):**
    - **Línea Superior del Icono:** Se reforzó el trazo superior del monitor de la laptop utilizando el render vectorial de alta definición (con grosor consistente de marco en lugar del trazo subpíxel de 2px), garantizando que no desaparezca al comprimirse en miniaturas de 60-80px.
    - **Eliminación de Subtítulo Borroso:** Se retiró la frase secundaria *"Tu espacio digital."* del banner Open Graph, eliminando el manchón grisáceo y permitiendo que el nombre de marca `CrisDev` y el isotipo respiren con máxima nitidez.
    - **Zona Segura Cuadrada:** Dimensiones calibradas para que el imagotipo quede perfectamente centrado tanto en el lienzo completo de 1200x630 px como en el recorte/letterbox cuadrado de WhatsApp (630x630 px).
    - **Cache-Busting Actualizado:** Enlaces actualizados con query string `?v=4.0-crisp` en `index.html` y `aviso-de-privacidad.html` para forzar a los scrapers de WhatsApp y redes a purgar su caché y renderizar la nueva imagen al instante.

14. **Icono de Hamburguesa Móvil SVG Vectorial Uniforme (T33):**
    - **Uniformidad Geométrica Absoluta:** Se reemplazaron las barras hechas con etiquetas `<span>` y flexbox (que sufrían de distorsión por subpíxel y anti-aliasing asimétrico en pantallas de alta densidad) por un SVG vectorial nativo (`stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`).
    - **Líneas Idénticas:** Las 3 líneas horizontales tienen exactamente la misma longitud (17 px), el mismo grosor (2 px), la misma separación equidistante (5.5 px) y extremos redondeados idénticos.
    - **Transición Suave al Abrir:** Al abrir el drawer, el botón alterna suavemente hacia un icono SVG de cruz (`✕`) con rotación y desvanecimiento acelerados por hardware.
    - **Bordes Redondeados Suaves:** El contenedor del botón se actualizó a `border-radius: var(--radius-md)` (8px) para un look moderno y equilibrado, eliminando la sensación tosca anterior.

15. **Botón y Enlace 'Inicio' en Navegación y Drawer Móvil (T34):**
    - **Navegación Desktop:** Se incorporó el enlace `Inicio` como primer elemento en `.header-nav`, con espaciado recalibrado (`gap: 1.65rem` en pantallas grandes y `1.15rem` en intermedias) para mantener la simetría perfecta de 3 columnas del grid del header.
    - **Drawer Móvil:** Se añadió `Inicio` encabezando la lista táctil de enlaces dentro del panel desplegable `#mobileNavDrawer`.
    - **Scroll Suave al Tope:** Se actualizó `initSmoothScroll()` en `js/terminal-effects.js` para que al hacer clic en cualquier enlace hacia `#hero` o `#header`, la página se desplace de forma suave y precisa hasta `top: 0` (el tope absoluto de la página). En móviles, el drawer se cierra automáticamente al pulsarlo.

16. **Calibración de Espaciado y Desahogo entre 'Sobre Mí' y Botón WhatsApp (T35):**
    - **Diagnóstico:** Al incluir un sexto enlace (*Inicio*), el contenedor central `.header-nav` creció en anchura. Debido a que el grid del header no tenía `column-gap` explícito entre la columna central (`auto`) y la derecha (`1fr`), el botón de WhatsApp quedaba a menos de 25px de "Sobre Mí", dando sensación de compresión.
    - **Solución Geométrica:**
      - Se añadió `column-gap: 2rem` a `.header-container:has(.header-nav)`.
      - Se afinó el `gap` entre enlaces a `1.25rem` y la tipografía a `0.86rem`.
      - Se optimizó el padding del botón CTA a `0.5rem 1rem` y tamaño a `0.82rem`.
      - En el rango intermedio (993px–1200px), se fijó `column-gap: 1.25rem`, `gap: 0.95rem` y `font-size: 0.82rem`.
    - **Resultado:** La separación entre "Sobre Mí" y el botón de WhatsApp aumentó a más de 110px en desktop amplio y se mantiene amplia (>50px) y sin quiebres de línea en resoluciones intermedias.

17. **Implementación de Feature 002: Modo Oscuro Clínico (Clinical Deep Navy):**
    - **Tokens de Diseño (`css/main.css`):** Definición de la paleta *Clinical Deep Navy* en `[data-theme="dark"]` y detección de sistema `(prefers-color-scheme: dark)`. Fondo en azul medianoche profundo (`#0A0F1D`), superficies en azul pizarra (`#111C35` / `#17223B`), textos en blanco clínico suave (`#F8FAFC`), bordes sutiles y acentos en azul cerúleo / cyan médico (`#38BDF8`).
    - **Prevención de FOUC:** Inyección de script bloqueante síncrono ultra-ligero en el `<head>` de `index.html` y `aviso-de-privacidad.html` para aplicar el tema antes del primer frame de pintura, eliminando destellos blancos al recargar.
    - **Módulo JS Theme Manager (`js/theme-manager.js`):** Soporte para persistencia en `localStorage('crisdev_theme')`, escucha de cambios en tiempo real del sistema operativo (`matchMedia`), alternancia de tema y sincronización dinámica del logo de cabecera (`logo-crisdev.svg` en modo claro y `logo-crisdev-white.svg` en modo oscuro).
    - **Controles de Tema (Sol/Luna SVG):** Integración de botones `.theme-toggle` accesibles con SVGs vectoriales nativos en el Navbar (junto al botón de WhatsApp en desktop), en el header móvil (junto a la hamburguesa) y dentro del drawer táctil con etiqueta de estado ("OSCURO" / "CLARO").
    - **Armonización de Componentes:** Ajuste de contraste para tarjetas de precios, la preview de PsicoLau, inputs de formulario y protección del fondo oscuro en el footer (`#050914`).
    - **Validación Visual:** Comprobada la ausencia de errores JS en consola y verificado el renderizado perfecto en viewports desktop (1280px) y móvil (390px).

## En qué quedó el proyecto

- Feature 002 (Modo Oscuro Clínico) completamente implementada, verificada y documentada bajo el flujo SDD.
- Modo claro y modo oscuro conviven fluidamente con alternancia manual y por sistema sin destellos.
- Todo probado tanto en desktop como en móvil y en la página secundaria de aviso de privacidad.

## Próximo paso

- Enviar cambios a GitHub (`git commit` y `git push origin main`) para su despliegue automático en Cloudflare Pages.




