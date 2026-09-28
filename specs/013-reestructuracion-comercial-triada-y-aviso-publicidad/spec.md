# Especificación — Feature 013: Reestructuración Comercial de Landing Page: Tríada de Oferta (Web, Software Estándar y Desarrollo a Medida) y Diferenciador de Aviso de Publicidad

**Estado:** ✅ Aprobada para Ejecución  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 001–012.

---

## 1. Contexto y Justificación del Negocio

Tras una auditoría exhaustiva del posicionamiento comercial de `cristhianruiz.dev`, se identificó que la versión actual presenta una desalineación crítica de expectativas para el profesional de la salud mental:
1. **Confusión en el Alcance del Producto ("Plataformas a Medida"):** Actualmente la landing promete *"Plataformas a Medida"* y que *"cada detalle se adapta al flujo de la consulta"*. Esto transmite erróneamente que el panel clínico interno se programa desde cero para cada cliente por el precio base ($5,900 MXN), cuando en realidad el software de gestión es un producto estándar robusto y probado.
2. **Mezcla de Tres Propuestas Distintas:** La página mezcla sin delimitación clara: (a) sitios web personalizados, (b) software clínico estándar (Consultorio Inteligente) y (c) desarrollo a medida para requerimientos avanzados.
3. **Promesas Comerciales Especulativas en Hero:** El titular actual (*"atrae más pacientes"*) promete un resultado comercial externo condicionado por factores ajenos al software. Se debe reemplazar por una propuesta de valor sólida sobre lo que efectivamente se entrega: representación profesional de marca y orden operativo de la consulta.
4. **Subutilización de la Demo Operativa:** La suite clínica de demostración en vivo (`demo.cristhianruiz.dev`) tiene un potencial enorme de conversión que debe elevarse para reducir la fricción de contratación.
5. **Oportunidad de Diferenciación Normativa (Aviso de Publicidad):** Los profesionales de la salud en México enfrentan incertidumbre sobre las regulaciones de publicidad sanitaria (COFEPRIS). Incorporar una guía práctica y orientación sobre el aviso de publicidad como parte de la puesta en marcha añade un valor percibido altísimo y ético que ningún desarrollador web genérico ofrece.

---

## 2. Principios de la Nueva Estructura Comercial

La nueva arquitectura de mensaje se sostiene sobre tres pilares transparentes:
- **Tu Página Web:** 100% personalizada con la identidad visual, contenido, servicios, fotos, dominio y enfoque del profesional.
- **Tu Plataforma de Gestión (Consultorio Inteligente):** Software estándar de CrisDev, desarrollado específicamente para el flujo habitual de profesionales de la salud mental, listo para operar sin fallas ni demoras.
- **Desarrollo a Medida:** Servicio complementario para clínicas, equipos o prácticas que requieran múltiples especialistas, recepción o flujos especiales (cotizado de forma independiente).
- **Acompañamiento Normativo:** Orientación práctica con el aviso de publicidad para servicios de salud, estableciendo claramente que CrisDev orienta pero no sustituye la asesoría legal ni realiza trámites como gestor.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Hero Section (`#hero`):**
  - Titular: *"Tu consultorio profesional, en un solo lugar"*.
  - Subtítulo: *"Una página web creada para representar tu práctica profesional y una plataforma privada para gestionar tu agenda, pacientes, expedientes y consultas."*
  - Mantra / Micro-copia: *"Tu marca. Tu información. Tu consultorio."*
  - CTAs principales: `[Quiero modernizar mi consulta]` (ancla a `#contact`) y `[Ver planes y precios]` (ancla a `#pricing`).
  - Badges de confianza: *"Sin comisiones por paciente · Atención directa 1 a 1 · Diseñado para profesionales de la salud"*.
- **Nueva Sub-sección / Bloque de Claridad de Oferta (`#value-prop` / sub-hero):**
  - Declaración del problema: *"Tener una consulta privada no debería significar administrar tu día entre WhatsApp, Excel, libretas y diferentes aplicaciones."*
  - Presentación clara de la dualidad (Tu página web personalizada vs. Tu plataforma de gestión estándar).
  - Frase de anclaje obligatoria: *"La página web se adapta a tu marca. La plataforma utiliza el sistema estándar de CrisDev, desarrollado específicamente para la gestión de consultas."*
- **Elevación y Estructura del Demo (`#infrastructure`):**
  - Titular: *"Conoce tu plataforma antes de contratar"*.
  - Subtítulo enfocado en prueba previa: *"No tienes que imaginar cómo funciona. Puedes probar una demostración del sistema y conocer la agenda, los expedientes, las notas y las herramientas administrativas antes de tomar una decisión."*
  - Enlaces de acción directa al demo web y al panel clínico de 1 clic sin registro.
  - Presentación modular de los 5 pilares operativos: Agenda semanal, Pacientes, Expedientes y notas (NOM-004-SSA3), Cobranza y Videollamadas (Zoom/Meet).
- **Reencuadre del Caso PsicoLau (`#web-ui`):**
  - Etiquetado explícito como *"Caso de Estudio: Desarrollo Personalizado"*.
  - Narrativa orientada a la web representativa de marca y a PsicoLau como ejemplo de solución avanzada.
  - Tres ejes de la web: Diseñada para generar confianza, Tu propia marca y Pensada para celulares.
- **Sección de Precios (`#pricing`):**
  - Mantenimiento exacto de los importes aprobados: $4,800 MXN para Presencia Digital y $5,900 MXN + $499 MXN/mes (o $4,990 MXN/año) para Consultorio Inteligente.
  - Inclusión en ambos paquetes de la *"Guía para aviso de publicidad (orientación sobre requisitos para servicios de salud)"*.
  - Aclaración explícita en Consultorio Inteligente: *"La personalización de tu identidad y contenido está incluida en la página web. Las funcionalidades adicionales o desarrollos especiales para necesidades específicas se cotizan por separado."*
  - Módulo destacado satélite: *"¿Y si necesito algo diferente? Desarrollo a Medida para clínicas y equipos (cotización independiente)"*.
- **Aviso de Publicidad (Bloque Informativo / Diferenciador):**
  - Bloque explicativo sobre la orientación en el aviso de publicidad ante normativas de salud, con deslinde legal transparente (*"CrisDev no realiza el trámite en tu nombre ni sustituye la asesoría legal o regulatoria"*).
- **Perfil Profesional (`#operator`):**
  - Reescritura humanizada: *"¿Quién está detrás de CrisDev? — Soy Cristhian Ruiz"*.
  - Enfoque: *"No te entrego una plantilla y desaparezco. Hablas directamente con la persona que diseña y desarrolla tu solución."*
- **Sección FAQ (`#faq`):**
  - Actualización y ampliación a 10 preguntas estratégicas que integran las dudas de personalización (web vs. panel), aviso de publicidad, cotizaciones a medida y demostración interactiva.
- **Sección Contacto (`#contact`):**
  - Cierre con el lema: *"Una web que representa tu práctica. Una plataforma para organizarla. Una persona detrás para ayudarte."*
- **Metadatos SEO, Schema.org y `llms.txt`:**
  - Sintonización fina de descripciones en JSON-LD y `/llms.txt` para eliminar *"a medida"* del paquete estándar y reflejar con exactitud la tríada.

### Fuera de Alcance (Out of Scope):
- Modificar el backend serverless `functions/api/contact.js`.
- Modificar la paleta de colores CSS base ni el sistema de tokens existente.
- Alterar la lógica del reproductor interactivo ni dependencias externas.
- Gestionar trámites de COFEPRIS ante dependencias de gobierno.

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Hero Section y Posicionamiento Inicial
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará en la cabecera del Hero el titular principal: *"Tu consultorio profesional, en un solo lugar"*.
- **RF-1.2 (Ubicuo):** EL SISTEMA presentará como subtítulo del Hero: *"Una página web creada para representar tu práctica profesional y una plataforma privada para gestionar tu agenda, pacientes, expedientes y consultas."*
- **RF-1.3 (Ubicuo):** EL SISTEMA exhibirá el lema de marca: *"Tu marca. Tu información. Tu consultorio."*
- **RF-1.4 (Ubicuo):** EL SISTEMA desplegará dos botones principales de acción: `[Quiero modernizar mi consulta]` que dirigirá a `#contact` y `[Ver planes y precios]` que dirigirá a `#pricing`.
- **RF-1.5 (Ubicuo):** EL SISTEMA reemplazará las métricas abstractas por la barra de confianza: *"Sin comisiones por paciente · Atención directa 1 a 1 · Diseñado para profesionales de la salud"*.

### Módulo 2: Claridad Conceptual y Diferenciación (Web vs. Plataforma Estándar)
- **RF-2.1 (Ubicuo):** EL SISTEMA exhibirá una sección explicativa con el encabezado *"Una presencia profesional y una gestión más sencilla"*, detallando el problema de gestionar la práctica entre WhatsApp, Excel y libretas.
- **RF-2.2 (Ubicuo):** EL SISTEMA desglosará de forma paralela los componentes de *"Tu página web"* (diseño personalizado, dominio propio, servicios, WhatsApp, contacto, responsive, SEO local, aviso de privacidad y guía de publicidad) y *"Tu plataforma de gestión"* (agenda semanal, pacientes, expedientes, notas, cobranza, reportes, videollamadas).
- **RF-2.3 (Ubicuo):** EL SISTEMA incluirá en un contenedor destacado la declaración de alcance: *"La página web se adapta a tu marca. La plataforma utiliza el sistema estándar de CrisDev, desarrollado específicamente para la gestión de consultas."*

### Módulo 3: Demostración Interactiva de la Plataforma
- **RF-3.1 (Ubicuo):** EN LA SECCIÓN `#infrastructure`, EL SISTEMA titulará la demo como *"Conoce tu plataforma antes de contratar"* con la bajada *"No tienes que imaginar cómo funciona. Puedes probar una demostración del sistema y conocer la agenda, los expedientes, las notas y las herramientas administrativas antes de tomar una decisión."*
- **RF-3.2 (Evento):** CUANDO EL USUARIO active el botón *"Probar Panel Clínico en 1 Clic"*, EL SISTEMA abrirá en una pestaña nueva la URL `https://demo.cristhianruiz.dev/panel/` con credenciales de prueba autocompletadas.
- **RF-3.3 (Ubicuo):** EL SISTEMA presentará 5 tarjetas de módulos modulares: Agenda semanal, Gestión de pacientes, Expedientes y notas de evolución (NOM-004-SSA3), Control de cobranza y Videollamadas integradas (Zoom/Meet).

### Módulo 4: Reencuadre de Presencia Digital y Caso PsicoLau
- **RF-4.1 (Ubicuo):** EN LA SECCIÓN `#web-ui`, EL SISTEMA titulará el bloque como *"Una web que representa tu práctica"* con el subtítulo *"Tu página no tiene que parecerse a la de todos los demás. Trabajo contigo para crear una presencia digital que comunique quién eres, qué haces y cómo pueden contactarte tus pacientes."*
- **RF-4.2 (Ubicuo):** EN LA TARJETA DE PSICOLAU, EL SISTEMA etiquetará la cabecera con el badge *"Caso de Estudio: Desarrollo Personalizado"*, contextualizándolo como un desarrollo especial histórico y prueba de capacidad técnica para soluciones a medida.

### Módulo 5: Inversión Transparente, Aviso de Publicidad y Desarrollo a Medida
- **RF-5.1 (Ubicuo):** EN EL PAQUETE 01 (`#pricing`), EL SISTEMA estipulará el importe de $4,800 MXN (pago único) bajo el nombre *"Presencia Digital"*, incluyendo explícitamente el concepto *"Guía para aviso de publicidad (orientación sobre requisitos de salud)"* y la aclaración de que el dominio anual corre por cuenta del cliente (~$195 a $800 MXN/año).
- **RF-5.2 (Ubicuo):** EN EL PAQUETE 02 (`#pricing`), EL SISTEMA estipulará el importe de $5,900 MXN (setup inicial) + $499 MXN/mes o $4,990 MXN/año bajo el nombre *"Consultorio Inteligente"*, incorporando *"Guía para aviso de publicidad"* y la advertencia: *"La personalización de tu identidad y contenido está incluida en la página web. Las funcionalidades adicionales o desarrollos especiales para necesidades específicas se cotizan por separado."*
- **RF-5.3 (Ubicuo):** EL SISTEMA presentará un bloque destacado sobre el Aviso de Publicidad que oriente al profesional sobre su importancia en la promoción de servicios de salud, incluyendo el deslinde legal: *"CrisDev no realiza el trámite en tu nombre ni sustituye la asesoría legal o regulatoria. Te proporcionamos la información y orientación necesaria para que puedas gestionarlo correctamente."*
- **RF-5.4 (Ubicuo):** DEBAJO DE LOS PLANES, EL SISTEMA incluirá el bloque satélite *"¿Y si necesito algo diferente? — Desarrollo a medida"*, detallando soporte para clínicas con múltiples especialistas, agendas compartidas, roles de recepción y flujos especiales con cotización independiente.

### Módulo 6: Perfil Profesional y Trato Directo
- **RF-6.1 (Ubicuo):** EN LA SECCIÓN `#operator`, EL SISTEMA exhibirá el encabezado *"¿Quién está detrás de CrisDev? — Soy Cristhian Ruiz"*, destacando que el cliente trabaja y habla directamente con el ingeniero que diseña y programa su solución.

### Módulo 7: Preguntas Frecuentes Estratégicas
- **RF-7.1 (Ubicuo):** EN LA SECCIÓN `#faq`, EL SISTEMA presentará 10 preguntas con acordeones accesibles `<details>`/`<summary>`:
  1. *¿La página web se puede personalizar?* (Sí, 100% tu identidad, contenido, servicios, fotos, colores y dominio).
  2. *¿El panel también se personaliza?* (Utiliza la plataforma estándar de CrisDev. Desarrollos adicionales se cotizan a medida).
  3. *¿Me ayudan con el aviso de publicidad?* (Sí, guía informativa sobre qué es, por qué aplica y cómo gestionarlo sin sustituir asesoría legal).
  4. *¿Hay comisión por cada paciente o consulta?* (No, cero comisiones porcentuales).
  5. *¿Cómo funciona el pago del dominio y los servidores?* (Desglose transparente anual/mensual).
  6. *¿Es seguro el panel para notas de evolución y secreto profesional?* (NOM-004-SSA3, AES-256 y privacidad absoluta).
  7. *¿Puedo atender pacientes online?* (Integración con Zoom y Google Meet en 1 clic).
  8. *¿Puedo probar el sistema antes de contratar?* (Acceso libre a la demo web y al panel clínico de prueba).
  9. *¿Qué sucede si necesito una función que no existe?* (Evaluación y cotización de desarrollo a medida).
  10. *¿Me ayudan a aprender a utilizarlo?* (Puesta en marcha con sesión de inducción 1 a 1).

---

## 5. Plan de Verificación

1. **Suite de Tests Automatizados (`npm test`):**
   - Ejecución de `node --test tests/*.test.js` garantizando que los 20 tests se mantengan pasando al 100% (anclas de navegación, tokens CSS, sanitización y metadatos SEO).
2. **Sincronización de Partials (`npm run sync:partials`):**
   - Validar que los enlaces y menús permanezcan consistentes entre `partials/header.html`, `partials/footer.html`, `index.html` y `aviso-de-privacidad.html`.
3. **Consistencia de Metadatos SEO y GEO:**
   - Comprobar que `<title>` (<= 65 chars) y `<meta name="description">` (120-160 chars) cumplan con los límites de Bing y Google.
   - Actualizar `llms.txt` y Schema.org JSON-LD para alinear la descripción de los paquetes y eliminar el término "a medida" del producto estándar.
4. **Verificación Visual en Viewports Múltiples (`browser_subagent`):**
   - Escritorio (1280px x 800px): Confirmar legibilidad, armonía de espaciados, contraste y despliegue de los acordeones de FAQ.
   - Móvil (390px x 844px): Confirmar que no haya desbordamiento horizontal (`minmax(0, 1fr)`), que los botones CTA sean fácilmente pulsables y que la tipografía fluya limpiamente.
   - Consola del navegador: Cero errores y cero advertencias de JavaScript.
