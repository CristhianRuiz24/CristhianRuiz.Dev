# Especificación — Feature 009: Hiper-Especialización para Psicoterapeutas, Entornos Visuales en Previews, Claridad de Dominio Anual y Sección FAQ

**Estado:** 📋 Borrador para Aprobación  
**Fecha:** 2026-09-24  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 001–008.

---

## 1. Contexto y Justificación del Negocio

Tras la auditoría comercial y visual del sitio `cristhianruiz.dev`, se identificaron cuatro áreas clave para maximizar la conversión, la confianza y la claridad del cliente objetivo (psicólogos y psicoterapeutas con consulta privada):

1. **Hiper-Especialización del Copy (Psicoterapia vs. Salud General):**
   Actualmente persisten menciones de carácter generalista como *"Presencia Médica"* o *"médicos independientes"*. Para conectar profundamente con el psicoterapeuta privado, la oferta debe hablar exclusivamente de su realidad clínica: sesiones terapéuticas (individuales/pareja), teleterapia, notas de evolución psicoterapéutica bajo secreto profesional y ausencia de comisiones intermediarias.

2. **Refinamiento de "Entornos Visuales" en Previews y Demo en Vivo:**
   - En el caso **PsicoLau (`#web-ui`)**, la tarjeta de preview presenta el logotipo recortado sobre un fondo plano sin un "entorno" o marco estructurado de presentación clínica que le otorgue empaque prémium.
   - En la sección **Gestión de Consultas (`#infrastructure`)**, los botones *"Explorar Sitio Web Demo"* y *"Probar Panel Clínico en 1 Clic"* y los 3 pilares se muestran desarticulados, sin un contenedor de tarjeta ("dock") ni tarjetas individuales con contraste y profundidad que delimiten claramente cada módulo del sistema.

3. **Claridad Cristalina del Costo de Dominio Propio Anual:**
   Los especialistas de la salud suelen confundir los conceptos de "desarrollo web", "hospedaje" y "dominio anual". Es indispensable transparentar:
   - Que el dominio (`.com`, `.mx`) es un costo anual externo (~$195 a $800 MXN / año) que siempre se registra a su nombre.
   - Que en el **Paquete 01**, el mantenimiento/hospedaje es **$0 MXN / mes de por vida**, pero el dominio se renueva anualmente.
   - Que en el **Paquete 02**, al optar por la modalidad anual (**$4,990 MXN / año**), *se ahorran 2 meses completos Y el dominio .com está incluido gratis durante el 1er año*, pasando a renovarse normalmente a partir del 2do año.

4. **Nueva Sección de Preguntas Frecuentes (`#faq`):**
   Los psicoterapeutas tienen objeciones y dudas recurrentes antes de contactar: cómo cobran a sus pacientes, qué tan seguras son sus notas, si pueden hacer sesiones por Zoom/Meet, tiempos de entrega y migración desde papel/Excel. Una sección de FAQ con formato de acordeón accesible (`<details>` y `<summary>`) resolverá estas dudas y aumentará la conversión hacia WhatsApp.

---

## 2. Alcance (Scope)

### En Alcance (In Scope):
- **Especialización de Copy:**
  - Renombrar el Paquete 01 a *"Paquete 01 · Presencia Terapéutica Multi-Página"* (o *"Presencia Clínica para Terapeutas"*).
  - Purgar el término "médico/médica" en titulares y descripciones de venta, reemplazándolo por "psicólogos, psicoterapeutas y terapeutas".
  - Reforzar el vocabulario clínico terapéutico: sesiones semanales, notas de evolución, teleterapia y secreto profesional.
- **Entorno Visual en Caso PsicoLau (`#web-ui`):**
  - Rediseñar `.minimal-preview-card` para que funcione como un marco de escaparate clínico prémium: cabecera sutil con status en vivo (`psicolau.com · Plataforma en Producción`), contenedor con padding armónico para el logo (sin cortes visuales abruptos), síntesis de resultados y botón de acción directa.
- **Entorno Visual en Gestión de Consultas (`#infrastructure`):**
  - Dotar a la sección de un contenedor principal prémium (`.live-demo-card`) con bordes sutiles, micro-gradiente y sombra aérea.
  - Estructurar los dos botones CTA en un "dock de acciones" destacado con iconos SVG claros y fondo contrastado.
  - Estructurar los 3 pilares en un grid de tarjetas modulares (`.demo-pillar-card`) con icono en caja redondeada con fondo temático, tipografía jerárquica y borde sutil para que se sientan como módulos tangibles de software.
- **Transparencia en Precios y Dominio (`#pricing`):**
  - Actualizar los bloques de desglose de dominio en ambas tarjetas, explicitando la renovación anual (~$195 a $800 MXN/año) y la gratuidad del 1er año en la anualidad del Paquete 02.
- **Nueva Sección de Preguntas Frecuentes (`#faq`):**
  - Integrar la sección `#faq` entre `#pricing` y `#contact`.
  - Diseñar acordeones nativos accesibles (`<details>` / `<summary>`) con animación suave de apertura e icono giratorio.
  - Incluir 7 preguntas estratégicas de alta conversión para psicoterapeutas.
  - Añadir enlace al menú de navegación principal (`Navbar`), drawer móvil y pie de página (`Footer`).

### Fuera de Alcance (Out of Scope):
- Modificar el backend de `functions/api/contact.js` o bases de datos de producción.
- Incorporar librerías JS pesadas o de acordeones de terceros.
- Modificar la política de privacidad de `aviso-de-privacidad.html` más allá de los enlaces de menú sincronizados.

---

## 3. Criterios de Aceptación (Requisitos Funcionales en Notación EARS)

### Módulo 1: Hiper-Especialización para Psicoterapia
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará el catálogo de servicios, títulos de paquetes y copys comerciales dirigiéndose explícitamente a psicólogos, psicoterapeutas y terapeutas clínicos con consulta privada, eliminando referencias genéricas a "médicos" o "servicios médicos".
- **RF-1.2 (Ubicuo):** EL SISTEMA nombrará al Paquete 01 como *"Paquete 01 · Presencia Terapéutica Multi-Página"* con el titular *"Presencia Digital para Terapeutas"*.

### Módulo 2: Entornos Visuales y Previews
- **RF-2.1 (Ubicuo):** EN LA SECCIÓN `#web-ui` (Caso PsicoLau), EL SISTEMA enmarcará la vista previa del proyecto dentro de una tarjeta estructurada con cabecera de escaparate (`preview-showcase-bar`), contenedor de logo con margen de respiro completo (evitando cortes visuales en los bordes) y botón de visita destacado.
- **RF-2.2 (Ubicuo):** EN LA SECCIÓN `#infrastructure` (Demo en Vivo), EL SISTEMA estructurará la tarjeta `.live-demo-card` separando con claridad:
  1. Badge de estatus y titular de la demo.
  2. Un contenedor destacado de acciones (`demo-actions-dock`) que agrupe los dos botones (`Explorar Sitio Web Demo` y `Probar Panel Clínico en 1 Clic`).
  3. Un grid de 3 tarjetas modulares (`demo-pillars-grid`), donde cada pilar posea su propia tarjeta elevada con icono vectorial, título y descripción.

### Módulo 3: Transparencia de Dominio Anual en Precios
- **RF-3.1 (Ubicuo):** EN EL PAQUETE 01 (`#pricing`), EL SISTEMA especificará en el desglose de inversión que el costo del dominio propio es de *"~$195 a $800 MXN / año (renovación anual registrada a tu nombre con hosting de alta velocidad de por vida por $0/mes)"*.
- **RF-3.2 (Ubicuo):** EN EL PAQUETE 02 (`#pricing`), EL SISTEMA declarará expresamente que la anualidad de $4,990 MXN/año incluye el dominio .com gratis durante el primer año (ahorro de 2 meses completos), indicando que a partir del segundo año la renovación del dominio corre por cuenta del cliente con tarifa estándar (~$195 a $800 MXN/año).

### Módulo 4: Nueva Sección de Preguntas Frecuentes (`#faq`)
- **RF-4.1 (Ubicuo):** EL SISTEMA incluirá una sección semántica `<section class="faq-section section-spacing" id="faq">` ubicada inmediatamente antes de `#contact`.
- **RF-4.2 (Evento):** CUANDO EL USUARIO pulse sobre el encabezado `<summary>` de una pregunta, EL SISTEMA expandirá suavemente la respuesta mediante el atributo nativo `open` sin requerir JavaScript adicional ni recargar la página.
- **RF-4.3 (Ubicuo):** EL SISTEMA incluirá 7 preguntas clave:
  1. *¿Cómo me pagan mis pacientes sus consultas?* (Cero comisiones, 100% directo a tu cuenta bancaria o efectivo).
  2. *¿Cómo funciona el pago del dominio y los servidores?* (Desglose del pago anual del dominio y gratuidad de alojamiento en Paquete 01 vs. 1er año incluido en Paquete 02 anual).
  3. *¿Es seguro el panel para las notas de evolución y el secreto profesional?* (Cumplimiento de la norma NOM-004-SSA3, cifrado de datos y propiedad exclusiva del terapeuta).
  4. *¿Puedo atender sesiones por videollamada para pacientes online?* (Integración en 1 clic con Zoom y Google Meet en la agenda semanal).
  5. *¿Qué diferencia hay entre el Paquete 01 y el Paquete 02?* (Web multi-página de captación vs. Web + Panel integral de administración clínica).
  6. *¿Qué pasa si actualmente gestiono mis notas y agenda en papel o Excel?* (Proceso de puesta en marcha asistido y transición sencilla).
  7. *¿En cuánto tiempo queda lista mi página o plataforma?* (48 a 72 horas para web multi-página; 3 a 5 días para la plataforma integral).
- **RF-4.4 (Ubicuo):** EL SISTEMA añadirá el enlace `"Preguntas Frecuentes"` en el Navbar de escritorio, en el menú desplegable móvil y en el footer, garantizando la sincronización con `npm run sync:partials`.

### Módulo 5: Salvaguardas Mobile y Multi-Tema
- **RF-5.1 (Ubicuo):** En todos los nuevos estilos y estructuras de CSS Grid/Flexbox creados o modificados, EL SISTEMA declarará obligatoriamente `minmax(0, 1fr)` y `word-break: break-word` para evitar desbordamientos horizontales en dispositivos móviles (375px a 430px).
- **RF-5.2 (Ubicuo):** EL SISTEMA garantizará que todos los nuevos componentes mantengan contraste accesible según las pautas WCAG tanto en modo claro (`[data-theme="light"]`) como en modo oscuro (`[data-theme="dark"]`).

---

## 4. Plan de Verificación

1. **Suite de Tests Automatizados (`npm test`):**
   - Verificar integridad de anclas de navegación (el nuevo enlace `#faq` debe existir y resolverse en `index.html`).
   - Escaneo de tokens CSS (`tests/css-tokens.test.js`) para confirmar cero variables CSS no declaradas.
2. **Sincronización de Partials (`npm run sync:partials`):**
   - Asegurar que `partials/header.html` y `partials/footer.html` repliquen el nuevo enlace a `#faq` en `index.html` y `aviso-de-privacidad.html`.
3. **Validación Visual en Navegador (`browser_subagent`):**
   - Capturar el renderizado del caso PsicoLau con el nuevo entorno visual.
   - Capturar la sección Gestión de Consultas confirmando el dock de botones y el grid de tarjetas de pilares.
   - Comprobar la claridad en los textos de dominio en `#pricing`.
   - Interactuar con los acordeones de la sección `#faq` y confirmar apertura fluida.
   - Verificar en resoluciones desktop (1280px) y mobile (390px) con 0 errores en consola.
