# Spec 004 — Transición a Estética Cálida y Humana (Clinical SaaS)

## Contexto y objetivo
El proyecto nació originalmente con un concepto "DedSec / Cyber-Terminal". Sin embargo, la propuesta de valor comercial y el público objetivo real son **psicólogos, dentistas, nutriólogos y profesionales de la salud mental**. 

Para estos clientes, los elementos que emulan terminales de Linux, consolas de hacker, credenciales de espionaje o ventanas de servidor generan frialdad, desconfianza o confusión, contradiciendo directamente la promesa central del sitio:
> *"Diseño la cara pública de tu consultorio con una estética cálida, accesible y humana para tus pacientes, respaldada con un panel de agenda y expedientes privados."*

El objetivo de esta especificación es sustituir de forma integral todos los elementos y estilos residuales de "consola de comandos / terminal hacker" por una estética **Clinical SaaS cálida, humana, confiable y moderna**, alineada con plataformas líderes como Stripe, Calm Health o SimplePractice.

---

## Usuarios / actores
- **Especialistas de la Salud (Psicólogos, Psiquiatras, Médicos):** Desean ver una plataforma que inspire serenidad, orden clínico, pulcritud médica y empatía para sus pacientes.
- **Pacientes Finales:** Perciben un consultorio digital accesible, confiable y acogedor.
- **Cristhian Ruiz (Ingeniero de Software):** Proyecta solidez técnica y seriedad operativa sin parecer un hacker clandestino ni un operador militar.

---

## Historias de usuario
- **H1 (Etiquetas y Secciones Médicas):** Como visitante, quiero que los identificadores de sección (*"Caso de Estudio"*, *"Sistemas a Medida"*, *"Privacidad"*) se presenten como pastillas o chips clínicos modernos en tipografía suave (`Plus Jakarta Sans`), en lugar de comandos de consola en monospace.
- **H2 (Armonía en el Hero):** Como usuario que llega al sitio, quiero que las 3 métricas del banner (`24/7`, `0%`, `100%`) compartan el mismo color Azul Cerúleo de acento para percibir un diseño profesional, equilibrado y simétrico.
- **H3 (Perfil Profesional Humano):** Como especialista que busca contratar a Cristhian, quiero ver un perfil profesional de ingeniería cálido, transparente y empático, sin jerga de "agente/operador" ni encabezados de credencial militar.
- **H4 (Formulario Acogedor):** Como prospecto que desea cotizar por escrito, quiero que el formulario de contacto sea una tarjeta limpia y elegante de solicitud formal, sin puntos de terminal ni barras simuladas con emojis de candado.

---

## Requisitos funcionales (Criterios de aceptación en EARS)

### 1. Banner de Métricas del Hero
- **RF-1 (Ubicuo):** EL SISTEMA asignará la clase de color `text-accent` (Azul Cerúleo `#0077B6` en claro / `#38BDF8` en oscuro) a las 3 métricas del Hero (`24/7`, `0%`, `100%`), garantizando uniformidad cromática absoluta.

### 2. Etiquetas de Sección (`.section-tag`)
- **RF-2 (Ubicuo):** EL SISTEMA actualizará `.section-tag` en [css/main.css](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/css/main.css) para emplear:
  - `font-family: var(--font-sans)` (`Plus Jakarta Sans`).
  - `font-weight: 700`.
  - `border-radius: var(--radius-full)` (diseño de píldora médica moderna).
  - `text-transform: none` con mayúsculas iniciales limpias (Title Case).
- **RF-3 (Ubicuo):** EL SISTEMA actualizará los textos de `.section-tag` en [index.html](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/index.html) y [aviso-de-privacidad.html](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/aviso-de-privacidad.html) a formato natural:
  - *"Caso de Estudio · Psicología y Salud"*
  - *"Sistemas a Medida · Gestión Clínica"*
  - *"Privacidad · Secreto Profesional"*
  - *"Planes · Inversión Transparente"*
  - *"Contacto Directo · Cotización"*
  - *"Confidencialidad · Transparencia"*

### 3. Tarjeta de Perfil Profesional ("Sobre Mí")
- **RF-4 (Ubicuo):** EL SISTEMA rediseñará el encabezado de la tarjeta de perfil profesional en [index.html](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/index.html) y [css/components/trust-operator.css](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/css/components/trust-operator.css):
  - Sustituirá el texto de carnet militar *"Ingeniero Responsable: Cristhian Ruiz"* por un encabezado claro de perfil profesional.
  - Asignará al indicador de disponibilidad `● Disponible para nuevos proyectos` la tipografía `Plus Jakarta Sans` con peso 600.
  - Asignará a la etiqueta de especialidad y al badge bajo la foto la tipografía `Plus Jakarta Sans` (`font-weight: 700`), eliminando las fuentes monospace cuadradas.

### 4. Tarjetas de Showcase y Formulario de Contacto
- **RF-5 (Evento):** EN EL FORMULARIO DE CONTACTO (`#form-container`), EL SISTEMA eliminará los puntos semáforo de consola (`.terminal-dots`) y la barra falsa con emoji `🔒`, reemplazándolos por un encabezado de tarjeta formal de cotización con icono SVG y título claro.
- **RF-6 (Evento):** EN EL CASO DE ESTUDIO PSICOLAU, EL SISTEMA estilizará la barra superior como una visualización limpia de navegador web moderno (*"psicolau.com · Plataforma Clínica"*), con dots en tonos neutros suaves y discretos en lugar de colores semáforo estridentes.
- **RF-7 (Ubicuo):** EN EL BOTÓN DE COPIAR DEL REPORTE CONTABLE (`.btn-mock-copy`), EL SISTEMA asignará `font-family: var(--font-sans)` para armonizar con el resto de los botones de la Suite.

---

## Casos límite y excepciones
- **SI** se visualizan horas de consulta (`08:00 AM`), números de teléfono o cifras de balance contable (`$8,450.00`), **ENTONCES EL SISTEMA** preservará `JetBrains Mono` por tratarse de datos numéricos y de precisión cronológica.

---

## Lo que queda fuera de alcance (Out of Scope)
- No se alterará la estructura funcional del formulario ni la lógica de envío hacia Cloudflare Workers.
- No se modificará la interactividad de las 4 pestañas de la Suite Clínica (Agenda, Expedientes, Cobranza, Contable).
