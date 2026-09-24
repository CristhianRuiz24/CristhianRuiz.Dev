# Especificación — Feature 008: Simplificación Visual Integral, Purga de Sobrecarga, Conexión de Demo en Vivo, Nuevos Precios y Retiro del Formulario de Contacto

## 1. Contexto y Problema

A pesar de las optimizaciones cromáticas y de seguridad previas, la interfaz de `cristhianruiz.dev` padece de **sobrecarga visual y saturación informativa** en múltiples secciones clave. Esto contradice el Principio 2 de la Constitución del proyecto (*"Estética Clinical SaaS / Health Tech con Máxima Usabilidad y Anti-caos visual: transmitiendo paz y control"*).

Asimismo, el modelo comercial y los canales de conversión han evolucionado:
1. **Canal Único de Conversión (WhatsApp Directo):** En el sector salud privado en México y Latinoamérica, los especialistas y psicólogos prefieren el contacto directo e inmediato por WhatsApp. El formulario por escrito (`#contact-form`) añade fricción, carga cognitiva, campos innecesarios y riesgo de spam/despacho de correo, diluyendo la llamada a la acción principal. Por lo tanto, se retira por completo el formulario y su divisor, dejando una tarjeta centralizada de WhatsApp sobria, directa y sin barreras.
2. **Actualización de Precios y Términos Comerciales:**
   - **Paquete 01 (Presencia Médica Multi-Página):** Pasa de $4,500 MXN a **$4,800 MXN** ($2,400 / $2,400 en esquema 50/50), con entrega express en **48 a 72 horas hábiles**, alojamiento de alta velocidad incluido sin mensualidad ($0 MXN/mes), dominio a precio de costo (~$195 MXN/año en Cloudflare) y arquitectura formal de 8 páginas independientes.
   - **Paquete 02 (Consultorio Inteligente):** Pasa de $5,500 MXN a **$5,900 MXN** ($2,950 / $2,950 en esquema 50/50), entrega en **3 a 5 días hábiles**, con suscripción de plataforma de $499 MXN/mes o $4,990 MXN/año (con dominio .com de regalo el primer año), integrando la Suite Clínica Privada (agenda semanal interactiva 7:00 a.m.–12:00 a.m., citas en serie, 24 colores, Zoom/Meet en 1 clic, cobro WhatsApp multi-país, expedientes NOM-004-SSA3 / LFPDPPP con AES-256-GCM, y módulo contable con exportación Excel/PDF y botón para contadora).
3. **Proliferación de Badges / "Badge-itis":** Múltiples micro-etiquetas y pastillas de colores (`badge-accent`, `badge-success`, etc.) apelmazados en cabeceras de tarjetas, como los badges de ventana `[ ~ Especialidad: Neuropsicología ]` y `[ • En Producción ]` que saturan la vista.
4. **Ventanas y Marcos Simulados de Sistema Operativo:** Persistencia de marcos con 3 dots de colores (rojo, amarillo, verde) y barras de URL falsas en `#web-ui` y `#infrastructure`, reminiscencia innecesaria de interfaces de escritorio de programador.
5. **Redundancia Informativa en "Presencia Digital" (PsicoLau):** La URL `psicolau.com`, la especialidad y los beneficios se repiten hasta en 4 lugares dentro de la misma sección (en la barra simulada, en una ficha técnica de 4 filas en la columna izquierda, en los bullets de reto/solución, y en los chips del testimonio).
6. **Simulador Ficticio en "Gestión de Consultas":** La sección `#infrastructure` contiene un mockup interactivo pesado con 4 pestañas y datos simulados en HTML rígido (agenda semanal falsa, expedientes ficticios, cobros ficticios), en lugar de enlazar y exhibir la plataforma real y operativa ya desplegada en producción: **`https://demo.cristhianruiz.dev/`** y su panel clínico **`https://demo.cristhianruiz.dev/panel/`** (con botón de acceso rápido en 1 clic).
7. **Residuos de Terminología Técnica en "Sobre Mí":** Etiquetas como `operator-id`, `operator-clearance`, `operator-status-tag` y `operator-role-tag` que fragmentan la lectura de la biografía profesional.

---

## 2. Requisitos Funcionales (EARS)

### RF-1 (Ubicuo): Erradicación de Marcos de Ventana Falsa y Purgado Global de Badges Innecesarios
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará todas las tarjetas de proyectos y demostraciones como **superficies editoriales clínicas prémium**, eliminando por completo los controles de ventana simulada (los tres puntos de colores `.terminal-dots` `.dot-red`, `.dot-yellow`, `.dot-green` y las barras de direcciones URL falsas `.browser-address-bar`).
- **RF-1.2 (Ubicuo):** EL SISTEMA purgará los badges secundarios y redundantes apelmazados en las cabeceras de las tarjetas, específicamente los badges `[ Especialidad: Neuropsicología ]` y `[ En Producción ]`, permitiendo que el contenido respire con espaciado limpio.
- **RF-1.3 (Ubicuo):** EL SISTEMA eliminará micro-etiquetas redundantes en las secciones de Contacto y Sobre Mí que dupliquen información ya provista en los títulos y subtítulos.

---

### RF-2: Rediseño Editorial y Desahogo del Caso PsicoLau (`#web-ui`)
- **RF-2.1 (Ubicuo):** EL SISTEMA presentará el caso de estudio de PsicoLau estructurado en un layout limpio de 2 columnas o flujo editorial desahogado:
  - **Columna / Bloque Visual:** Mockup o previsualización pulcra de la interfaz de PsicoLau, destacando el logotipo de la clínica y un botón de acción directo y visible: *"Visitar psicolau.com en vivo ↗"*.
  - **Columna / Bloque Comercial:** Titular claro, síntesis de valor (Reto y Solución en textos breves y fluidos) y tarjeta de testimonio verificado.
- **RF-2.2 (Ubicuo):** EL SISTEMA eliminará la ficha técnica redundante de 4 filas (`.project-clinical-card`: *Sitio Web Oficial*, *Especialidad Clínica*, *Captación de Pacientes*, *Tranquilidad*), integrando su valor directamente en el copy fluido.
- **RF-2.3 (Ubicuo):** EL SISTEMA eliminará las píldoras de métricas duplicadas (`.case-stats-grid`: *0% Comisiones a Terceros* y *Suite Clínica Privada*), evitando reiterar la métrica ya comunicada en el Hero.
- **RF-2.4 (Ubicuo):** EL SISTEMA eliminará los 3 chips secundarios con checkmarks (`✓ Panel Clínico Privado`, `✓ Secreto Profesional`, `✓ Acompañamiento Cercano`) dentro de la tarjeta de testimonio de Laura Gómez.
- **RF-2.5 (Evento):** CUANDO el usuario interactúe con el elemento `<details>` del testimonio, EL SISTEMA desplegará la recomendación completa original de la Mtra. Ana Laura Gómez de manera fluida y legible.

---

### RF-3: Exhibición y Conexión de la Demo en Vivo (`#infrastructure`)
- **RF-3.1 (Ubicuo):** EL SISTEMA reemplazará el mockup estático hardcodeado de 4 pestañas (`#clinical-suite-demo`: agenda, expedientes, cobranza y contable simulados) por una **Tarjeta Prémium de Demostración en Vivo** orientada a la solución real **`PSICOCLÍNICA`**.
- **RF-3.2 (Ubicuo):** EL SISTEMA incorporará dos llamadas a la acción (CTAs) prominentes y diferenciadas hacia los entornos de demostración reales:
  - **CTA 1 (Web del Paciente):** Enlace directo a `https://demo.cristhianruiz.dev/` con el texto *"Explorar Sitio Web Demo ↗"* (abre en nueva pestaña con `rel="noopener noreferrer"`).
  - **CTA 2 (Suite Clínica Privada):** Enlace prioritario a `https://demo.cristhianruiz.dev/panel/` con el texto *"Probar Panel Clínico en 1 Clic ↗"* (abre en nueva pestaña con `rel="noopener noreferrer"`).
- **RF-3.3 (Ubicuo):** EL SISTEMA acompañará la demostración con 3 pilares de funcionalidad clínica sintetizados (Agenda Automatizada, Expedientes Confidenciales y Control de Pagos sin Comisiones), eliminando números de gran tamaño y etiquetas duplicadas.
- **RF-3.4 (Opcional):** DONDE se presente el acceso al panel demo (`/panel/`), EL SISTEMA indicará sutilmente al especialista que la prueba cuenta con acceso rápido inmediato sin necesidad de registro previo.

---

### RF-4: Humanización y Desahogo de la Sección "Sobre Mí" (`#operator`)
- **RF-4.1 (Ubicuo):** EL SISTEMA eliminará las clases y elementos con terminología residual de operador (`.operator-id`, `.operator-clearance`, `.operator-status-tag`, `.operator-role-tag`).
- **RF-4.2 (Ubicuo):** EL SISTEMA presentará el perfil de Cristhian Ruiz con una jerarquía limpia:
  - Fotografía profesional del desarrollador.
  - Título y rol humano: *"Cristhian Ruiz — Ingeniero de Software & Web"*.
  - Indicador sutil de disponibilidad para consultorios.
  - Biografía concisa enfocada en la empatía con el profesional de la salud.
  - 3 pilares de trabajo directo (Trato 1 a 1, adaptado a tu consulta, enfoque en tranquilidad).

---

### RF-5: Actualización Comercial de Planes y Precios (`#pricing`)
- **RF-5.1 (Ubicuo):** EL SISTEMA actualizará el titular y subtítulo de la sección de precios:
  - Título: *"Soluciones Tecnológicas para Profesionales de la Salud"*.
  - Subtítulo: *"Diseñadas específicamente para psicólogos, terapeutas y médicos independientes. Desde una presencia digital de alto impacto hasta un sistema integral que automatiza tu agenda, expedientes médicos y finanzas clínicas en una sola plataforma."*
- **RF-5.2 (Ubicuo):** EL SISTEMA presentará el **Paquete 01 · Presencia Médica Multi-Página**:
  - Subtítulo de paquete: *"Presencia Digital Completa"*.
  - Audiencia ideal: *"Ideal para especialistas que gestionan sus citas de forma tradicional (papel, WhatsApp o Excel) pero necesitan proyectar máxima autoridad en internet, posicionar sus especialidades y captar pacientes privados con una web formal."*
  - Inversión: **$4,800 MXN** (Pago Único Inicial).
  - Facilidad de pago: Esquema 50/50: **$2,400 MXN** anticipo · **$2,400 MXN** al entregar.
  - Mantenimiento: **$0 MXN / mes** (Alojamiento de alta velocidad incluido sin mensualidades fijas obligatorias).
  - Dominio propio (.com): **~$195 MXN / año** (Registrado a tu nombre en Cloudflare a precio de costo, SSL bancario incluido).
  - Tiempo de entrega express: **48 a 72 horas hábiles** a partir de la recepción de información.
  - Características del sitio (8 páginas independientes):
    - Arquitectura de 8 páginas (Inicio, Sobre Mí, Áreas de Atención, Experiencia y Formación, Testimonios, Preguntas Frecuentes, Contacto Directo, Aviso de Privacidad Integral).
    - Integración Instantánea a WhatsApp (botones interactivos en 1 clic).
    - Formulario de Contacto Inteligente con envío estructurado a WhatsApp.
    - Carga en menos de 1 segundo (calificación 100/100 Google PageSpeed, sin WordPress).
    - SEO Local para tu Ciudad con datos estructurados Schema.org.
  - Enlace de WhatsApp: `Hola Cristhian, me interesa el Paquete Presencia Médica Multi-Página ($4,800 MXN) para mi consulta`.
- **RF-5.3 (Ubicuo):** EL SISTEMA presentará el **Paquete 02 · Consultorio Inteligente**:
  - Ribbon destacado: *"★ Más Elegido por Especialistas"*.
  - Subtítulo de paquete: *"Automatización Clínica y Financiera Integral"*.
  - Audiencia ideal: *"Ideal para profesionales que desean digitalizar su consulta privada, erradicar el caos de notas dispersas, blindar la confidencialidad médica de sus pacientes y ahorrar horas de cuadre al cierre de cada mes."*
  - Inversión inicial: **$5,900 MXN** (Montaje y Configuración Inicial - Pago Único).
  - Facilidad de pago: Esquema 50/50: **$2,950 MXN** anticipo · **$2,950 MXN** al entregar.
  - Suscripción de plataforma y servidor clínico seguro:
    - Opción Mensual: **$499 MXN / mes** (Menos del costo de una sola consulta privada).
    - Opción Anual: **$4,990 MXN / año** (Ahorras 2 meses completos) **+ ¡Tu dominio .com va de regalo el 1er año!**
  - Tiempo de entrega: **3 a 5 días hábiles** con entrega llave en mano.
  - Características de la solución (Todo lo del Paquete 01 de 8 páginas, más Suite Clínica Privada):
    - Acceso Clínico Privado y Seguro protegido con tokens JWT individuales.
    - Agenda Semanal Interactiva (7:00 a.m. a 12:00 a.m., citas en serie de 2 a 12 sesiones, 24 colores).
    - Acceso en 1 Clic a Videollamadas (Zoom / Google Meet) en cada cita online.
    - Confirmación y Cobro por WhatsApp con prefijos para más de 20 países.
    - Expedientes Clínicos con Cifrado Militar (AES-256-GCM) apego estricto a NOM-004-SSA3 y LFPDPPP.
    - Calculadora y Módulo Contable Mensual (auditoría en 1 clic, botón "Copiar para Contadora", exportación Excel CSV / PDF sin exponer nombres clínicos).
    - Soporte Técnico Directo y Respaldos automáticos en la nube.
  - Enlace de WhatsApp: `Hola Cristhian, me interesa el Paquete Consultorio Inteligente ($5,900 MXN) para mi consulta`.

---

### RF-6: Centralización Total en WhatsApp y Retiro del Formulario de Contacto (`#contact`)
- **RF-6.1 (Ubicuo):** EL SISTEMA eliminará por completo el formulario por escrito (`.contact-form-wrapper`, `#form-container`, `#contact-form`, `#form-success`) y el separador divisorio (`.contact-divider`), suprimiendo del DOM todos los inputs y el botón de cotización por escrito.
- **RF-6.2 (Ubicuo):** EL SISTEMA centralizará la sección de Contacto (`#contact`) en una **Tarjeta de Conversión Directa a WhatsApp** limpia, elegante y sin fricciones:
  - Subtítulo de sección humanizado: *"Conversemos directamente sobre los objetivos de tu consulta, dudas o cotización personalizada sin intermediarios ni demoras."*
  - Eliminación de la micro-etiqueta `Vía Rápida · Atención Inmediata`.
  - Beneficios claros (Atención personalizada 1 a 1 con Cristhian Ruiz, respuesta rápida, asesoría sin compromiso).
  - Botón primario de WhatsApp destacado con mensaje precargado.
- **RF-6.3 (Ubicuo):** EL SISTEMA desvinculará `form-handler.js` de `index.html` y actualizará la suite de pruebas automatizadas (`tests/form-validation.test.js` / `tests/link-integrity.test.js`) para validar la nueva arquitectura sin errores, manteniendo `npm test` al 100%.

---

### RF-7 (Estado): Coherencia Visual Multi-Tema y Responsividad
- **RF-7.1 (Estado):** MIENTRAS esté activo el tema claro o el tema oscuro, EL SISTEMA garantizará ratios de contraste accesibles (WCAG AA > 4.5:1) en todas las tarjetas simplificadas, textos y botones.
- **RF-7.2 (Estado):** MIENTRAS el sitio se visualice en pantallas móviles (375px a 430px), EL SISTEMA mantendrá layouts fluidos bajo la regla `minmax(0, 1fr)` con `min-width: 0`, previniendo cualquier desbordamiento horizontal.

---

## 3. Criterios de Aceptación

1. **Cero marcos de ventana simulada:** No existen `.dot-red`, `.dot-yellow`, `.dot-green` ni barras de URL falsas en el código de producción.
2. **Cero badges innecesarios:** Los badges `[ Especialidad: Neuropsicología ]` y `[ En Producción ]` han sido eliminados por completo de `#web-ui`.
3. **PsicoLau limpio y sin redundancia:** Ficha técnica de 4 filas y pills de métricas duplicadas eliminadas; testimonio legible con carta completa en `<details>`.
4. **Demo real en vivo conectada:** La sección `#infrastructure` apunta directamente a `https://demo.cristhianruiz.dev/` y `https://demo.cristhianruiz.dev/panel/`, habiendo purgado el mockup ficticio hardcodeado de 4 pestañas.
5. **Sección Sobre Mí humanizada:** Purgados los identificadores de "operador" y "clearance".
6. **Precios y oferta 100% actualizados:**
   - Paquete 01: $4,800 MXN ($2,400 / $2,400), entrega en 48–72h, arquitectura de 8 páginas, $0 mensualidad, dominio ~$195 MXN/año.
   - Paquete 02: $5,900 MXN ($2,950 / $2,950), entrega en 3–5 días, $499/mes o $4,990/año (dominio gratis 1er año), Suite Privada con JWT, agenda 7am–12am, NOM-004-SSA3 / AES-256-GCM y módulo contable.
7. **Formulario de contacto retirado y WhatsApp centralizado:** Eliminado el formulario por escrito y el divisor de `#contact`; canal de WhatsApp directo como vía única de conversión.
8. **Integridad funcional:** Suite de pruebas (`npm test`) pasando al 100% y cero errores en la consola del navegador.
