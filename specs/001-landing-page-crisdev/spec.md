# Spec 001 — Landing Page & Portafolio Cyber-Terminal CrisDev

## Contexto y objetivo
Plataforma web de captación comercial y portafolio profesional para **CrisDev (Cristhian Ruiz - Software & Web Engineering)**. Resuelve la necesidad de convertir profesionales de la salud —con foco principal en **psicólogos, terapeutas y especialistas en salud mental**, y alcance para médicos, dentistas, nutriólogos y profesionales con consulta por agenda— en clientes. Combina una presencia digital de alta conversión con estética *DedSec / Cyber-Terminal*, traduciendo la arquitectura operativa (expedientes confidenciales, notas de sesión, automatización y seguridad) en beneficios directos de negocio (más pacientes, menos tiempo perdido en WhatsApp, control total y cero comisiones). Despliegue 100% estático, modular y ultra-rápido para Cloudflare Pages.

---

## Usuarios / actores
- **Visitante / Prospecto Primario:** Psicólogo, neuropsicólogo, terapeuta o especialista de la salud que busca profesionalizar su presencia online, proteger notas de sesión y automatizar el agendamiento de pacientes.
- **Visitante / Prospecto Secundario:** Dentista, médico, nutriólogo o administrador de clínica con modelo de consulta basada en citas y expedientes privados.
- **Operador / Ingeniero (Cristhian Ruiz):** Dueño del sitio que recibe las solicitudes de contacto y presenta sus soluciones técnicas y comerciales.

---

## Historias de usuario
- **H1 (Comprensión de Valor y Empatía):** Como psicólogo o profesional de la salud, quiero entender en menos de 5 segundos cómo una presencia digital profesional y un sistema a medida pueden llenar mi agenda y organizar mis consultas, para decidir si consultar los servicios.
- **H2 (Evidencia de Frontend y Captación):** Como especialista, quiero ver un caso de éxito real del sector salud mental (ej. *psicolau.com*) con su enfoque cálido y conversión directa a WhatsApp, para comprobar la efectividad del diseño.
- **H3 (Gestión de Consultas y Expedientes):** Como terapeuta o médico con consulta privada, quiero ver cómo se organizan las notas de sesión y los expedientes sin requerir hojas de Excel desordenadas, para tener certeza de que ahorraré tiempo administrativo.
- **H4 (Secreto Profesional y Confianza):** Como profesional que maneja datos clínicos y terapéuticos sensibles, quiero conocer los estándares de confidencialidad y ver la credencial del ingeniero responsable, para tener total tranquilidad y confianza de trato 1 a 1.
- **H5 (Conversión Sin Fricción):** Como prospecto interesado, quiero contactar directamente por WhatsApp o enviar una solicitud estructurada por formulario, para recibir una propuesta o asesoría personalizada sin intermediarios.

---

## Requisitos funcionales (Criterios de aceptación en EARS)

### 1. Navegación y Encabezado
- **RF-1 (Ubicuo):** EL SISTEMA mantendrá visible en el encabezado la identidad de marca `CrisDev // Cristhian Ruiz`, el indicador de disponibilidad `● DISPONIBLE PARA PROYECTOS` (con pulso visual), los enlaces de navegación (`Presencia Digital`, `Sistemas a Medida`, `Privacidad`, `Sobre Mí`) y un botón CTA `Consultar por WhatsApp`.
- **RF-2 (Evento):** CUANDO el usuario hace clic en el botón de WhatsApp (Navbar o Contacto), EL SISTEMA abrirá en una nueva pestaña la conversación de WhatsApp hacia el número oficial (+52 81 3093 8884) con el mensaje precargado específico para especialistas de la salud: *"Hola Cristhian, vi tu sitio y me interesa una cotización para mi consulta"*, disponible de forma nativa en el atributo `href` estático y validado por módulo JS.

### 2. Hero Section (Atracción y Propuesta de Valor)
- **RF-3 (Ubicuo):** EL SISTEMA presentará:
  1. Tag superior: `● SOLUCIONES WEB PARA PSICÓLOGOS Y PROFESIONALES DE LA SALUD`.
  2. Titular principal de alto impacto: *"Una presencia digital que atrae más pacientes y un sistema que organiza tus consultas en automático."* con acentos de color en Cyan y Azul eléctrico.
  3. Subtítulo enfocado en dolor/beneficio: *"Desarrollo sitios web de alta conversión y plataformas a medida para psicólogos, terapeutas y especialistas de la salud. Menos tiempo perdido en WhatsApp, expedientes confidenciales y cero comisiones mensuales."*
  4. Tres badges de métricas de autoridad: `⚡ Web Rápida y Disponible 24/7`, `💰 Cero Comisiones por Consulta`, `🔒 Expedientes 100% Privados y Seguros`.
  5. Botones de acción: `[ Solicitar Asesoría Gratuita → ]` (hacia `#contact`) y `[ Ver Casos y Soluciones ]` (hacia `#web-ui`).
- **RF-4 (Evento):** CUANDO el usuario presione el CTA principal del Hero, EL SISTEMA realizará un desplazamiento suave (*smooth scroll*) hacia la sección de contacto / terminales.

### 3. Terminal 01: Presencia Digital & Full-Stack (Caso de Estudio Psicolau.com)
- **RF-5 (Ubicuo):** EL SISTEMA exhibirá el caso de estudio integral de *PsicoLau.com* enfocado en Problema → Solución → Resultados mediante:
  1. Subtítulo: *"Caso de estudio: Cómo ayudamos a la Neuropsicóloga Ana Laura Gómez a multiplicar sus consultas y gestionar sus sesiones sin intermediarios."*
  2. Telemetría orientada al cliente: `SITIO_EN_VIVO: https://psicolau.com`, `ESPECIALIDAD: Neuropsicología Clínica`, `SEGURIDAD: Expedientes & Notas Cifradas`.
  3. Botón de acceso directo en vivo `[ Visitar psicolau.com en vivo ↗ ]`.
  4. Desglose de valor:
     - **El Reto:** *"La especialista invertía horas respondiendo dudas repetitivas por mensaje y gestionaba las notas de sus pacientes de forma dispersa."*
     - **La Solución:** *"Diseñamos una plataforma cálida y profesional que genera confianza inmediata, guía al paciente a agendar en 2 clics a WhatsApp y le brinda un panel privado para sus notas y agenda."*
     - **Resultados de Negocio:** `0% Comisiones a Terceros` y `Suite Clínica Privada (/panel)` en un layout optimizado de 2 columnas de alta legibilidad.
  5. Testimonio Real Verificado: Card técnica con recomendación de la Mtra. Ana Laura Gómez (Fundadora de PsicoLau), cita de alto impacto sobre el sistema completo de práctica profesional, 3 chips de autoridad y desplegable semántico para la reseña íntegra.
  6. Botón CTA: `[ Cotizar una Plataforma Similar para Mi Consulta → ]`.
- **RF-6 (Evento):** CUANDO el usuario interactúe con la tarjeta del caso de estudio, EL SISTEMA mostrará efectos sutiles de hover con micro-animaciones tipo escaneo/borde neón sin alterar la legibilidad.

### 4. Terminal 02: Sistemas a Medida & Gestión de Consultas (Antes "Arquitectura Operativa")
- **RF-7 (Ubicuo):** EL SISTEMA presentará la sección de administración clínica con:
  1. Tag: `[SISTEMAS_A_MEDIDA // GESTIÓN_CLÍNICA]`.
  2. Titular: *"Plataformas a Medida para Gestionar tu Consulta Sin Caos"*.
  3. Subtítulo: *"Diseñado especialmente para el flujo de psicólogos y profesionales de la salud: olvídate de las libretas, notas dispersas y el estrés de agenda."*
- **RF-8 (Ubicuo):** EL SISTEMA exhibirá un grid estructurado de 3 tarjetas de alto impacto para los pilares de gestión:
  1. `01` **Expedientes y Notas de Sesión Digitales:** Historial de cada paciente, notas de evolución y archivos en un solo lugar seguro, accesible desde celular o computadora con total privacidad (`[PRIVACIDAD: 100% BLINDADA]`).
  2. `02` **Recordatorios Automáticos de Sesiones:** Reduce ausencias y cancelaciones de última hora notificando automáticamente a tus pacientes antes de cada consulta o sesión (`[WHATSAPP: EN AUTOMÁTICO]`).
  3. `03` **Control de Consultas e Ingresos:** Visualiza en segundos tus pacientes activos, sesiones atendidas e ingresos del mes con total claridad sin hojas de Excel (`[MÉTRICAS: TIEMPO REAL]`).
  4. Botón de acción: `[ Cotizar un Sistema para mi Consulta → ]` hacia `#contact`.

### 5. Bloque de Confidencialidad & Secreto Profesional (Trust Section)
- **RF-9 (Ubicuo):** EL SISTEMA presentará 3 pilares de confianza y privacidad:
  1. **Secreto Profesional y Privacidad Rigurosa:** Historiales y notas de terapia blindados con los más altos estándares de confidencialidad (`[CONFIDENCIALIDAD: 100%]`).
  2. **Tú Eres el Único Dueño de tu Información:** Sin depender de plataformas SaaS que cobran comisiones por cita o retienen los datos de tus pacientes (`[PROPIEDAD: 100% TUYA]`).
  3. **Soporte Directo 1 a 1:** Comunicación directa y personalizada con el ingeniero que programó tu sistema (`[SOPORTE: DIRECTO 1 A 1]`).

### 6. Terminal de Operador (Perfil Profesional & Metodología)
- **RF-10 (Ubicuo):** EL SISTEMA mostrará la tarjeta de perfil profesional con fotografía tratada de Cristhian Ruiz, titular *"Quién Desarrolla tu Solución"*, descripción enfocada en resolver problemas reales de consulta y 3 fortalezas clave:
  1. **Trato directo 1 a 1:** Sin ejecutivos de ventas ni intermediarios. Hablas directo con quien programa tu sistema.
  2. **Adaptado al flujo real de tu consulta:** Diseñado a la medida de cómo atiendes a tus pacientes y organizas tus sesiones.
  3. **Enfoque en tranquilidad y rentabilidad:** Más tiempo para tus pacientes y cero fricción tecnológica.

### 7. Sección de Conversión & Formulario Cyber-Terminal
- **RF-11 (Ubicuo):** EL SISTEMA ofrecerá dos canales de conversión independientes: un botón primario de WhatsApp `[ CONSULTAR POR WHATSAPP ]` y un formulario estructurado con placeholders claros (`Ej. Lic. Ana Morales (Psicóloga / Terapeuta / Especialista)`).
- **RF-12 (Evento):** CUANDO el usuario presione el botón de envío del formulario (`[ Enviar Mensaje y Cotizar Proyecto ]`), EL SISTEMA validará los campos y enviará los datos mediante la API asíncrona.
- **RF-13 (Excepción):** SI el usuario intenta enviar el formulario con campos vacíos o inválidos, ENTONCES EL SISTEMA:
  1. Cambiará el borde del campo afectado a Magenta/Rojo Glitch (`#FF0055` / `#FF3333`).
  2. Inyectará debajo del campo un mensaje de error tipo `> [ERROR_01]: EL PARÁMETRO 'NOMBRE' ES REQUERIDO`.
  3. Ejecutará una microinterrupción visual tipo sacudida (*shake*) de 0.3s en el campo.
  4. Modificará el texto del botón a `[POR FAVOR REVISA LOS DATOS INGRESADOS]` en color rojo durante 2 segundos.
- **RF-14 (Evento):** CUANDO la API de correo retorne un código de éxito (HTTP 200), EL SISTEMA mostrará en el contenedor el mensaje de éxito:
  `> [ESTADO]: MENSAJE ENVIADO CON ÉXITO.`
  `> HE RECIBIDO TU INFORMACIÓN DE MANERA SEGURA.`
  `> ME PONDRÉ EN CONTACTO CONTIGO EN MENOS DE 24 HORAS.`
  `> [FIN_DEL_PROCESO]`

### 8. Footer y Aviso de Privacidad
- **RF-15 (Ubicuo):** EL SISTEMA incluirá en el footer copyright, enlaces de navegación, enlace a `Aviso de Privacidad` (`aviso-de-privacidad.html`), perfiles de validación profesional (LinkedIn, GitHub) y la firma técnica `[END_OF_TRANSMISSION]`.
- **RF-16 (Ubicuo):** EL SISTEMA proveerá una página dedicada de Aviso de Privacidad (`aviso-de-privacidad.html`) bajo el sistema estético Cyber-Terminal con:
  1. Header con enlace de retorno `[ ← Volver al Inicio ]`.
  2. Tratamiento de datos recopilados en `cristhianruiz.dev` (formulario de contacto) exclusivamente para dar respuesta y cotizaciones, sin cesión a terceros.
  3. Explicación de arquitectura de seguridad y confidencialidad médica en sistemas y plataformas desarrolladas a medida.
  4. Delimitación clara de responsabilidad: el profesional de la salud o consultorio titular de cada sistema es el único responsable del tratamiento de los datos personales de sus pacientes.
  5. Nota de transparencia recomendando asesoría legal en caso de requerir un aviso de privacidad formal y vinculante.

### 9. Planes y Precios Transparentes & Mockup de Suite Clínica
- **RF-17 (Ubicuo):** EL SISTEMA proveerá una sección de Planes y Precios (`#pricing`) con desglose de inversión transparente para profesionales de la salud:
  1. Paquete 01 (Presencia Digital Directa): $4,500 MXN pago único (esquema 50/50: $2,250 anticipo / $2,250 entrega), $0 mensualidades forzosas, dominio al costo en Cloudflare (~$200 a $800 MXN/año), entrega máxima en 3 semanas y enlace directo a WhatsApp con mensaje precargado.
  2. Paquete 02 (Consultorio Inteligente - Recomendado): $5,500 MXN pago inicial (esquema 50/50: $2,750 anticipo / $2,750 entrega), suscripción de sistema de $499 MXN/mes o anualidad de $4,990 MXN/año (ahorra 2 meses), dominio al costo, entrega máxima en 3 semanas, listado de módulos clínicos y enlace directo a WhatsApp con mensaje precargado.
- **RF-18 (Interacción):** EL SISTEMA proveerá en la sección de Arquitectura Operativa (`#infrastructure`) un Mockup Interactivo de la Suite de Gestión Clínica (`#clinical-suite-demo`) diseñado bajo la estética de un Dashboard SaaS de Salud de Alta Gama (sin referencias a clientes específicos, 100% iconografía vectorial SVG y cero emojis de sistema):
  1. Barra de ventana con título genérico `PANEL DE CONTROL CLÍNICO` y badge `[DEMO EN VIVO]`.
  2. Navegación por pestañas tipo *Segmented Control* (Agenda Semanal, Expedientes y Notas, Auditoría de Pagos, Reporte Contable).
  3. Vista de Agenda Semanal con consultas para distintas áreas de la salud (Valoración, Seguimiento, Control Clínico, General, Tratamiento), chips de modalidad (`Online` con SVG de videollamada / `Presencial` con SVG de ubicación), horas en gris neutro y badges de estado translúcidos (`● PAGADO` esmeralda / `● POR COBRAR` ámbar).
  4. Vista de Expedientes con avatares con iniciales, badges de notas de evolución clínicas acumuladas y acceso cifrado AES-256.
  5. Vista de Auditoría de Cobranza con montos de honorarios y botón oficial de solicitud por WhatsApp con SVG nativo.
  6. Vista de Reporte Contable con tarjetas KPI de ingresos y consultas, botón de copia de resumen con icono SVG y nota de confidencialidad médica.


---

## Requisitos no funcionales
- **Rendimiento:** Carga estática ultrarrápida (First Contentful Paint < 1.0s) alojada en Cloudflare Pages.
- **Diseño & Paleta:** Modo oscuro estricto basado en negro azabache (`#0A0C10`), gris pizarra, Cyan Eléctrico (`#00F0FF`) y Azul Eléctrico / Cobalto (`#3B82F6` / `#60A5FA`).
- **Tipografía:** Dualidad estricta: Monospace para métricas/IDs/logs y Sans-Serif moderna para textos comerciales y descripciones.
- **Responsividad:** Experiencia de usuario mobile-first fluida probada en viewports de 375px a 1440px+.
- **Cero Bloat:** Cero frameworks pesados en cliente, cero jQuery, CSS modular con Custom Properties nativas y JS Vanilla ES6+.

---

## Casos límite
- **Pérdida de conectividad al enviar formulario:** SI la petición a la API de formulario falla por red o timeout, ENTONCES EL SISTEMA mostrará un log de error en consola de terminal `> [ERROR_NET]: ERROR DE TRANSMISIÓN. POR FAVOR UTILIZA LA CONEXIÓN DIRECTA POR WHATSAPP` y habilitará el botón de WhatsApp como fallback inmediato.
- **Visualización en pantallas extra pequeñas (320px):** Las tarjetas de terminal, mockups y el ID de operador deben apilarse verticalmente sin desbordamiento horizontal.
- **Desactivación de JavaScript:** Los contenidos clave (propuesta de valor, casos de estudio, botón directo de WhatsApp) deben ser completamente legibles y accesibles en HTML semántico nativo aun sin scripts.

---

## Fuera de alcance
1. Portal de clientes / sistema de login con autenticación.
2. Pasarela de pagos integrada en la web.
3. Gestor de contenidos dinámico (CMS / Blog).
4. Efectos 3D pesados con WebGL / Three.js.
5. Selector de tema claro / Light Mode.
6. Chatbots o widgets flotantes de chat.
7. Internacionalización / soporte multi-idioma (v1 exclusiva en español).
8. Base de datos dinámica para alimentar el contenido del portafolio (sitio 100% estático).

---

## Criterios de finalización
- Implementación completa de las 8 secciones especificadas en HTML5, CSS3 y JS Vanilla.
- Validación funcional de todos los requisitos RF-1 al RF-15.
- Flujo interactivo del formulario con validación in-line en estética DedSec (estados de error, shake, feedback de consola y confirmación en verde).
- Botón de WhatsApp verificado y parametrizado.
- Verificación visual y funcional en viewports móvil (375px) y escritorio (1200px+).
- Cero errores en consola del navegador.

---

## Dudas abiertas
*Ninguna (todos los parámetros fueron clarificados durante la entrevista).*
