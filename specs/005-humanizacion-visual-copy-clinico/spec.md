# Especificación — Feature 005: Humanización Visual y Purga Integral de Jerga Tech (Clinical Human Presence)

## 1. Contexto y Problema
La plataforma ha avanzado en su diseño y paleta de colores, pero conserva múltiples vestigios visuales y textuales de "sitio de desarrollador / hacker / ciberseguridad / SaaS de software". Entre ellos:
- **Burbujas / pastillas encapsuladas:** Las etiquetas de sección (`.section-tag`) y badges de tarjetas están encerrados en cápsulas celestes con borde, asemejándose a etiquetas de base de datos o tags de repositorios de software.
- **Micro-iconos y tipografía monospace en métricas del Hero:** El uso del rayo (`⚡`), el símbolo `%` redundante al lado de `0%` (`% 0%`) y la fuente `JetBrains Mono` estrecha en `24/7`, `0%` y `100%` proyecta monitoreo de servidores en la nube en lugar de beneficios para un profesional de la salud.
- **Ventanas simuladas de computadora:** Secciones completas simulando ventanas de macOS con 3 puntos de colores (`.dot-red`, `.dot-yellow`, `.dot-green`) y barras de URL falsas con rutas (`/panel`, `panel.psicolau.com / expediente`).
- **Jerga técnica y ciberseguridad militar:** Términos como *"Telemetría"*, *"Sistema Activo"*, *"Conversión"*, *"Cifrado AES-256"*, *"Blindaje / Blindada"*, *"Sesión encriptada"*, *"Cloudflare"*, *"Landing Page"*, *"SEO Local"*, *"Diseño arquitecturas"* y *"Auditoría de Pagos"* que resultan ajenos, fríos y confusos para psicólogos, terapeutas y médicos.

El objetivo de esta especificación es desterrar de raíz todos estos elementos, logrando que cada elemento visual y textual respire **calidez humana, claridad médica, estética de salud de alta gama y empatía profesional**.

---

## 2. Requisitos Funcionales (EARS)

### RF-1: Sobretítulos Editoriales Limpios (Erradicación de Burbujas `.section-tag`)
- **RF-1.1:** El sistema mostrará todos los sobretítulos de sección (`.section-tag`) como **texto editorial plano sin encapsular** (sin caja de fondo, sin borde, sin `border-radius` de pastilla), con tipografía `Plus Jakarta Sans` (`font-weight: 700`, color `var(--color-accent)`).
- **RF-1.2:** Los textos de los sobretítulos se estandarizarán en formato editorial sobrio:
  - *"CASO DE ÉXITO · PSICOLOGÍA Y SALUD"* (en sección `#web-ui`)
  - *"GESTIÓN DE CONSULTAS · SALUD PRIVADA"* (en sección `#infrastructure`)
  - *"SECRETO PROFESIONAL · CONFIDENCIALIDAD"* (en sección `#security`)
  - *"INVERSIÓN TRANSPARENTE · SIN COMISIONES"* (en sección `#pricing`)
  - *"CONTACTO DIRECTO · ASESORÍA PERSONALIZADA"* (en sección `#contact`)
  - *"CONFIDENCIALIDAD · TRANSPARENCIA MÉDICA"* (en `aviso-de-privacidad.html`)

### RF-2: Banner de Métricas del Hero Humano y Limpio
- **RF-2.1:** Los valores numéricos `24/7`, `0%` y `100%` se renderizarán en tipografía **`Plus Jakarta Sans`** (`font-weight: 800; font-size: 1.65rem`), eliminando `JetBrains Mono` de estos valores comerciales.
- **RF-2.2:** Se eliminarán los micro-iconos apelmazados al lado del número (el rayo tech, el `%` redundante pegado a `0%` y el candado pegado a `100%`), permitiendo que el número grande y limpio protagonice la métrica.
- **RF-2.3:** Los textos explicativos se humanizarán:
  - `24/7` · *Tu consultorio visible en internet siempre*
  - `0%` · *Cero comisiones por paciente agendado*
  - `100%` · *Expedientes privados bajo secreto profesional*

### RF-3: Caso PsicoLau (Transformación de Telemetría a Ficha de Consultorio)
- **RF-3.1:** Se eliminará la caja `.preview-telemetry-box` y toda referencia a "telemetría", "conversión" y "notas cifradas".
- **RF-3.2:** Se implementará una **Ficha de Resultados** en tipografía `Plus Jakarta Sans`, fondo blanco pulcro y formato clínico claro:
  - **Sitio Web Oficial:** *psicolau.com*
  - **Especialidad Clínica:** *Neuropsicología y Terapia Privada*
  - **Captación de Pacientes:** *Agendamiento directo en 2 clics por WhatsApp*
  - **Tranquilidad:** *Historiales y notas bajo estricto secreto profesional*
- **RF-3.3:** El indicador *"Sistema Activo"* con punto de radar se sustituirá por: **`Sitio Web y Plataforma Oficial`** o **`Caso Real en Funcionamiento`**.
- **RF-3.4:** En la métrica lateral se eliminará la ruta técnica `/panel`, mostrándose como: **`Suite Clínica Privada`**.
- **RF-3.5:** En los chips de testimonio se reemplazará *"Consultoría Proactiva"* por *"Acompañamiento Cercano"*.

### RF-4: Demostración de Consultorio (`#infrastructure`)
- **RF-4.1:** Se renombrará el enlace del menú y pie de página de *"Sistemas a Medida"* a **`Gestión de Consultas`** (o `Consultorio Digital`), alineado con el lenguaje de los especialistas de salud.
- **RF-4.2:** Se eliminará la barra con 3 puntos de colores y la ruta `panel.psicolau.com / expediente`. La demo se enmarcará en una superficie clínica elegante con el título *"Demostración del Panel Clínico"*.
- **RF-4.3:** En las pestañas y vistas:
  - *"Auditoría de Pagos"* se renombrará a **`Control de Pagos`**.
  - *"Cifrado AES-256"* se sustituirá por **`Notas 100% Confidenciales`**.
  - *"Auditoría de Pagos y Cobranza WhatsApp"* se sustituirá por **`Control de Pagos y Solicitud por WhatsApp`**.
- **RF-4.4:** En los 3 pilares inferiores:
  - Se sustituirán los números gigantes `01`, `02`, `03` en monospace por tipografía sans-serif elegante o iconos integrados.
  - *"Automatización"* se renombrará a **`Recordatorios Oportunos`**.
  - *"Privacidad 100% Blindada"* se sustituirá por **`Protección y Secreto Profesional`**.
  - *"Métricas en Tiempo Real"* se sustituirá por **`Balance Mensual de tu Consulta`**.

### RF-5: Seguridad, Precios y Purga de Términos IT
- **RF-5.1:** En la sección de Seguridad (`#security`):
  - Título: cambiar *"Confidencialidad y Blindaje"* a **`Protección y Confidencialidad para tu Consulta`**.
  - Se eliminarán las pastillas encapsuladas al pie de cada tarjeta (`[Confidencialidad: 100%]`, etc.) y se sustituirán por viñetas limpias con checkmark: `✓ Confidencialidad bajo secreto profesional`, `✓ Tu sistema te pertenece al 100%, sin comisiones`, `✓ Trato directo con el especialista que crea tu web`.
  - Se purgará el copy de *"viaja y se almacena bajo protocolos de encriptación"* y *"plataformas SaaS secuestran tus datos"*, sustituyéndolos por explicaciones empáticas y reales (referenciando plataformas intermediarias como Doctoralia).
- **RF-5.2:** En la sección de Precios (`#pricing`):
  - Paquete 01: sustituir *"Landing Page"* por **`Sitio web profesional de presentación directa`**, y *"SEO Local"* por **`Configurado para que te encuentren en Google en tu ciudad`**.
  - Paquete 02: sustituir *"(/panel)"* y *"sesión encriptada"* por **`Plataforma privada de consultorio con acceso seguro`**.
  - Nota de dominio: sustituir la mención técnica a *"Cloudflare"* por **`El dominio web (.com con tu nombre) se registra 100% a tu nombre sin intermediarios ni cobros inflados`**.
  - Banner personalizado: sustituir *"Diseño arquitecturas a la medida..."* por **`Desarrollo funciones a la medida de tu consultorio o clínica: cobro con tarjeta, agenda multi-especialista y requerimientos especiales...`**.

---

## 3. Criterios de Aceptación
1. Cero pastillas encapsuladas con fondo y borde en los sobretítulos de sección.
2. Banner de métricas del hero sin rayo, sin `%` redundante, con números en `Plus Jakarta Sans` y textos centrados en el paciente.
3. Caso PsicoLau sin telemetría, sin "conversión", sin `/panel` y con ficha de beneficios humanos.
4. Sección "Sistemas a Medida" rebautizada como "Gestión de Consultas", sin "Auditoría de Pagos", sin "AES-256", sin "Blindaje" y sin "Cloudflare".
5. 100% de coherencia visual en modo claro y oscuro, respetando `minmax(0, 1fr)` en responsive y 0 errores en consola.
