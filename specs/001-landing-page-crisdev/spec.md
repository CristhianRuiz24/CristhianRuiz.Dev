# Spec 001 — Landing Page & Portafolio Cyber-Terminal CrisDev

## Contexto y objetivo
Plataforma web de captación comercial y portafolio profesional para **CrisDev (Cristhian Ruiz - Software & Web Engineering)**. Resuelve la necesidad de convertir profesionales de la salud y servicios independientes (psicólogos, dentistas, nutriólogos) en clientes, combinando una presencia digital de alta conversión con estética *DedSec / Cyber-Terminal* y demostrando solvencia en arquitectura operativa (bases de datos clínicas, seguridad y automatización). Despliegue 100% estático, modular y ultra-rápido para Cloudflare Pages.

---

## Usuarios / actores
- **Visitante / Prospecto Clínico:** Psicólogo, dentista, médico, nutriólogo o administrador de clínica que busca digitalizar su consulta, mejorar su captación o proteger historiales médicos.
- **Operador / Ingeniero (Cristhian Ruiz):** Dueño del sitio que recibe las solicitudes de contacto y presenta sus soluciones técnicas.

---

## Historias de usuario
- **H1 (Comprensión de Valor):** Como profesional de la salud, quiero entender en menos de 5 segundos cómo la ingeniería de software puede escalar y ordenar mi consultorio, para decidir si explorar los servicios.
- **H2 (Evidencia de Frontend):** Como profesional de la salud, quiero ver un caso de éxito real (ej. *psicolau.com*) con su rendimiento y enfoque mobile-first, para comprobar la calidad del diseño y la conversión web.
- **H3 (Evidencia de Datos e Infraestructura):** Como director de consultorio, quiero ver cómo se estructuran y protegen los expedientes médicos digitales, para confiar en la seguridad y orden de mi información clínica.
- **H4 (Validación de Confianza y Seguridad):** Como profesional que maneja datos sensibles de pacientes, quiero conocer los protocolos de seguridad y ver la credencial profesional del ingeniero, para tener certeza y tranquilidad antes de contactarlo.
- **H5 (Conversión Inmediata):** Como prospecto interesado, quiero contactar directamente por WhatsApp o enviar una solicitud estructurada por formulario, para recibir un diagnóstico/presupuesto sin fricciones.

---

## Requisitos funcionales (Criterios de aceptación en EARS)

### 1. Navegación y Encabezado
- **RF-1 (Ubicuo):** EL SISTEMA mantendrá visible en el encabezado la identidad de marca `CrisDev // Cristhian Ruiz`, el indicador parpadeante `[SYSTEM: ONLINE]` y un botón CTA de acceso directo a WhatsApp.
- **RF-2 (Evento):** CUANDO el usuario hace clic en el botón de WhatsApp del Navbar, EL SISTEMA abrirá en una nueva pestaña la conversación de WhatsApp con un mensaje predeterminado de contacto profesional.

### 2. Hero Section (Atracción y Propuesta de Valor)
- **RF-3 (Ubicuo):** EL SISTEMA presentará el titular principal de alto impacto: *"Ingeniería de software para multiplicar clientes y automatizar tu agenda"*, acompañado de una llamada a la acción principal para iniciar diagnóstico técnico y métricas de autoridad en vivo.
- **RF-4 (Evento):** CUANDO el usuario presione el CTA principal del Hero, EL SISTEMA realizará un desplazamiento suave (*smooth scroll*) hacia la sección de contacto / terminales.

### 3. Terminal 01: Presencia Digital & Full-Stack (Caso de Estudio Psicolau.com)
- **RF-5 (Ubicuo):** EL SISTEMA exhibirá el caso de estudio integral de *PsicoLau.com* mediante:
  1. Un mockup fiel a la identidad visual real de PsicoLau (logo mariposa-psi, paleta turquesa/rosa, copy clínico y botón "Agenda tu consulta").
  2. Un botón / enlace directo `[EXPLORAR SITIO EN VIVO ↗]` apuntando a `https://psicolau.com`.
  3. Badge de arquitectura completa `[FULL-STACK: Cloudflare Pages + Node.js/Express + PostgreSQL Supabase + Prisma + AES-256]`.
  4. Desglose detallado del **Frontend de Alta Conversión** y de la **Suite Clínica / Panel Administrativo a Medida** (Agenda Semanal, Expedientes Cifrados AES-256-GCM, Control Financiero/KPIs y Automatización con WhatsApp).
- **RF-6 (Evento):** CUANDO el usuario interactúe con la tarjeta del caso de estudio, EL SISTEMA mostrará efectos sutiles de hover con micro-animaciones tipo escaneo/borde neón sin alterar la legibilidad.

### 4. Terminal 02: Arquitectura Operativa & Bases de Datos
- **RF-7 (Ubicuo):** EL SISTEMA desplegará una demostración visual interactiva o estilizada de un modelo de datos (diagrama ER / JSON de registros) con las etiquetas `[ENCRYPTED_DATA]` y `[SECURE_CONNECTION]`.
- **RF-8 (Ubicuo):** EL SISTEMA explicará el valor de negocio de la arquitectura: modelado relacional 3FN (PostgreSQL/MySQL) para historiales, esquemas NoSQL (MongoDB Atlas) para documentación flexible y automatización de agenda y recordatorios con Node.js.

### 5. Bloque de Protocolos de Seguridad & Confianza (Trust Section)
- **RF-9 (Ubicuo):** EL SISTEMA presentará 3 pilares de seguridad mediante tarjetas con iconografía de protección: 1) Privacidad de datos sensibles, 2) Conexiones encriptadas (HTTPS/SSL), y 3) Respaldos automatizados y protección contra vulnerabilidades.

### 6. Terminal de Operador (Perfil Profesional & Metodología)
- **RF-10 (Ubicuo):** EL SISTEMA mostrará una tarjeta estilizada tipo "ID de Acceso / Credencial de Sistema" con la fotografía profesional tratada de Cristhian Ruiz, título de Ingeniero de Software y descripción concisa de metodología (precisión técnica, trato humano y enfoque en negocio).

### 7. Sección de Conversión & Formulario Cyber-Terminal
- **RF-11 (Ubicuo):** EL SISTEMA ofrecerá dos canales de conversión independientes: un botón primario `[INICIAR CONEXIÓN DIRECTA EN WHATSAPP]` y un formulario estructurado (Nombre, Clínica/Consultorio, Requerimiento).
- **RF-12 (Evento):** CUANDO el usuario complete los campos requeridos y presione `[EJECUTAR TRANSMISIÓN]`, EL SISTEMA enviará los datos mediante una API asíncrona (Formspree/EmailJS).
- **RF-13 (Excepción):** SI el usuario intenta enviar el formulario con campos vacíos o inválidos, ENTONCES EL SISTEMA:
  1. Cambiará el borde del campo afectado a Magenta/Rojo Glitch (`#FF0055` / `#FF3333`).
  2. Inyectará debajo del campo un mensaje de error en monospace tipo `> [ERROR_01]: EL PARÁMETRO 'NOMBRE' ES REQUERIDO` o `> [ERROR_02]: EL PARÁMETRO 'CLÍNICA O CONSULTORIO' ES REQUERIDO`.
  3. Ejecutará una microinterrupción visual tipo sacudida (*shake*) de 0.3s en el campo.
  4. Modificará el texto del botón a `[FALLO DE SINTAXIS: REVISA LOS DATOS]` en color rojo durante 2 segundos.
- **RF-14 (Evento):** CUANDO la API de correo retorne un código de éxito (HTTP 200), EL SISTEMA ocultará el formulario y mostrará en el mismo contenedor el mensaje de éxito en Azul Eléctrico (`#3B82F6` / `#38BDF8`):
  `> [SYSTEM]: TRANSMISIÓN EXITOSA.`
  `> LOS DATOS HAN SIDO ENCRIPTADOS Y ENVIADOS AL SERVIDOR DE CRIS.`
  `> TIEMPO ESTIMADO DE RESPUESTA: < 24 HORAS.`
  `> [END_OF_PROCESS]`

### 8. Footer
- **RF-15 (Ubicuo):** EL SISTEMA incluirá copyright, enlaces de validación profesional (LinkedIn, GitHub) y la firma técnica `[END_OF_TRANSMISSION]`.

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
