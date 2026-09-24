# Plan Técnico — Feature 008: Simplificación Visual Integral, Purga de Sobrecarga, Conexión de Demo en Vivo y Nuevos Precios

## 1. Módulos Afectados y Arquitectura

### 1.1 Archivos Frontend Afectados
- [`index.html`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/index.html):
  - **Sección `#web-ui` (Presencia Digital - PsicoLau):** Eliminación de `.terminal-header` (dots de colores y URL falsa), purga de badges secundarios (`[ Especialidad: Neuropsicología ]` y `[ En Producción ]`), eliminación de `.project-clinical-card` (ficha de 4 filas) y pills duplicadas (`.case-stats-grid`). Eliminación de chips de checkmarks en el testimonio.
  - **Sección `#infrastructure` (Gestión de Consultas):** Retiro de la estructura rígida de 4 pestañas (`#clinical-suite-demo`), sustitución por la **Tarjeta Prémium de Demostración en Vivo PSICOCLÍNICA** con dos accesos directos destacados (`https://demo.cristhianruiz.dev/` y `https://demo.cristhianruiz.dev/panel/`) y 3 pilares simplificados.
  - **Sección `#operator` (Sobre Mí):** Purgado de clases y etiquetas de operador (`.operator-id`, `.operator-clearance`, `.operator-status-tag`, `.operator-role-tag`). Jerarquía editorial limpia y humana.
  - **Sección `#pricing` (Planes y Precios):** Actualización de copys y precios ($4,800 MXN en 48-72h y $5,900 MXN en 3-5 días), esquema 50/50, características multi-página (8 páginas) y Suite Clínica NOM-004-SSA3 / AES-256-GCM.
  - **Sección `#contact` (Contacto):** Eliminación de `.contact-divider`, `.contact-form-wrapper` y `#contact-form`. Centralización de la tarjeta de WhatsApp como único canal de conversión.
  - **Scripts:** Retiro del `<script type="module" src="js/form-handler.js"></script>` en el pie de página.
- [`css/components/terminal.css`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/css/components/terminal.css):
  - Eliminación/limpieza de estilos de ventanas simuladas, dots y pestañas de mockup redundantes.
  - Estilos de la nueva tarjeta de exhibición de demo en vivo (`.live-demo-card`, `.demo-actions-grid`, `.btn-demo-primary`, `.btn-demo-secondary`).
- [`css/components/pricing.css`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/css/components/pricing.css):
  - Ajustes de espaciado, jerarquía de precios actualizados y viñetas concisas de una sola línea.
- [`css/components/trust-operator.css`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/css/components/trust-operator.css):
  - Estilización limpia del perfil humano de Cristhian Ruiz, sin cajas de estatus de operador.
- [`css/components/form.css`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/css/components/form.css):
  - Retiro de reglas asociadas al formulario embebido o preservación mínima sin impacto visual.

### 1.2 Suite de Pruebas Automatizadas
- [`tests/link-integrity.test.js`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/tests/link-integrity.test.js):
  - Verificación de que todos los anclas del menú y enlaces externos (`demo.cristhianruiz.dev`, `psicolau.com`, WhatsApp) sean válidos y existan en el DOM.
- [`tests/form-validation.test.js`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/tests/form-validation.test.js):
  - Adaptar o condicionar la suite unitaria de funciones puras (`validation-utils.js`) para que continúe pasando sin depender de campos del DOM retirados.
- [`tests/css-tokens.test.js`](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/tests/css-tokens.test.js):
  - Verificar que ninguna variable CSS quede huérfana tras la refactorización de estilos.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

### Decisión 1: Tarjeta de Enlaces Directos en Pestaña Nueva vs Embeber un `<iframe>`
- **Decisión:** Presentar una tarjeta prémium de diseño clínico con dos botones destacados que abran `https://demo.cristhianruiz.dev/` y `https://demo.cristhianruiz.dev/panel/` en pestañas nuevas con `rel="noopener noreferrer"`.
- **Alternativa descartada:** Embeber la demo dentro de un `<iframe>` interactivo.
- **Motivo del descarte:** Los iframes degradan severamente el rendimiento y la puntuación de PageSpeed (LCP/CLS), sufren problemas de scroll y usabilidad en pantallas móviles pequeñas, y pueden ser bloqueados por directivas de seguridad (`X-Frame-Options` o CSP).

### Decisión 2: Retiro Completo del Formulario vs Formulario Reducido
- **Decisión:** Eliminar por completo el formulario por escrito y dejar la tarjeta centralizada de WhatsApp como único canal de contacto.
- **Alternativa descartada:** Mantener un formulario simplificado a 2 campos (Nombre y Teléfono).
- **Motivo del descarte:** En el segmento de psicólogos y médicos privados, la conversión es conversacional y directa. El formulario por escrito requería mantenimiento de backend serverless, trampas honeypot y configuración de correos transaccionales; retirarlo elimina fricción para el usuario y deuda técnica del proyecto.

### Decisión 3: Desacople Seguro de Scripts y Pruebas
- **Decisión:** Desvincular `form-handler.js` de `index.html` para no cargar código JavaScript ocioso, manteniendo `validation-utils.js` probado de forma aislada o adaptando `form-validation.test.js` para que el comando `npm test` ejecute de forma transparente y exitosa.
- **Alternativa descartada:** Dejar el script cargado en el HTML con listeners a elementos inexistentes.
- **Motivo del descarte:** Provocaría errores de JavaScript en consola (`Cannot read properties of null`) violando la regla innegociable de `AGENTS.md` (cero errores en consola).

---

## 3. Plan de Verificación y Testing

1. **Pruebas Automatizadas:**
   - Ejecutar `npm test` tras cada modificación: 100% de tests pasando en tiempo récord.
2. **Sincronización de Partials:**
   - Ejecutar `npm run sync:partials` para garantizar que headers y footers compartidos permanezcan sincronizados.
3. **Verificación Visual Multi-Dispositivo:**
   - Comprobar en navegador local en Desktop (1280px+) y Móvil (375px a 430px).
   - Validar ambos modos (Claro y Oscuro).
   - Verificar que no exista desbordamiento horizontal (`overflow-x`) respetando `minmax(0, 1fr)`.
4. **Verificación de Enlaces:**
   - Comprobar que los enlaces a `demo.cristhianruiz.dev`, `demo.cristhianruiz.dev/panel/`, `psicolau.com` y los mensajes predefinidos de WhatsApp con los nuevos precios ($4,800 y $5,900) funcionen correctamente.
