# Especificación — Feature 024: Paquete 03 - Plataforma Clínica Independiente (Solo Software/Agenda) y Tríada Comercial

**Estado:** ⏳ Pendiente de Aprobación  
**Fecha:** 2026-10-04  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`), Features 019, 020, 021, 022 y 023, entrevista de requerimientos SDD.

---

## 1. Contexto y Diagnóstico

Actualmente, el catálogo comercial de CrisDev ofrece dos paquetes en la sección `#pricing`:
1. **Paquete 01 (Presencia Digital):** $4,800 MXN (Pago único, $0/mes en Cloudflare). Enfocado en terapeutas que solo buscan una página web para captar pacientes y ya resuelven la administración por su cuenta.
2. **Paquete 02 (Consultorio Inteligente):** $5,900 MXN inicial + $499 MXN / mes. Oferta completa que unifica la página web pública con la plataforma clínica privada.

### El segmento desatendido:
Existe un perfil de profesional de la salud mental con consulta activa que:
- **Ya cuenta con una página web** (en WordPress, Wix, Squarespace) y no desea pagar por rediseñarla.
- **Opera primordialmente mediante redes sociales** (Instagram, TikTok, WhatsApp Business) y su dolor urgente no es tener una web, sino el caos operativo: notas en libretas o Word, falta de control en expedientes clínicos bajo lineamientos de la NOM-004-SSA3, y desorganización de horarios.
- **Huye de las tarifas abusivas de directorios y SaaS clínicos** como Doctoralia ($1,350 a $2,370 MXN/mes) o Encuadrado ($990 MXN/mes), pero no quiere verse forzado a contratar el paquete de $5,900 MXN con diseño web para acceder al software.

### La Solución:
Crear la estructura comercial en **Tríada Coherente (3 columnas ordenadas 01, 02, 03)** en la landing page:
- **Paquete 01 (Solo Web):** $4,800 MXN pago único ($0/mes).
- **Paquete 02 (Solo Software Clínico):** $1,900 MXN inicial (esquema 50/50: $950 / $950) + $499 MXN / mes.
- **Paquete 03 (Todo Incluido - Destacado):** $5,900 MXN inicial + $499 MXN / mes (anclaje de alto valor percibido).

---

## 2. Principios y Guardarraíles de Honestidad Técnica

- **Delimitación de Alcance (Backoffice Privado Exclusivo):** Este paquete entrega exclusivamente el panel privado de administración para el terapeuta (`/panel`). No incluye portal de agendamiento público de pacientes ni diseño de páginas web. El terapeuta coordina con sus pacientes directamente vía WhatsApp o llamada (método preferido para filtrado terapéutico previo) y gestiona internamente sus horarios, expedientes y notas.
- **Alojamiento Flexible:** Se entrega configurado bajo un subdominio seguro asignado por CrisDev (ej. `dr-juan.cristhianruiz.dev/panel`) o bajo un subdominio del dominio existente del cliente si ya cuenta con uno (ej. `citas.drjuan.com` o `panel.drjuan.com`).
- **Puesta en Marcha Rápida (24 a 48 horas hábiles):** Al no requerir redacción comercial ni diseño de interfaz pública personalizada, el despliegue técnico consiste en inicializar la base de datos en PostgreSQL, aprovisionar credenciales y realizar la sesión de inducción 1 a 1.
- **Matemática Verificable y Transparente en Calculadora:** La inversión a 3 años del Paquete 02 es de **$19,864 MXN** ($1,900 setup + $499 × 36 meses). Comparado con Encuadrado ($990/mes × 36 = $35,640 MXN), produce un **ahorro neto real de +$15,776 MXN**. Frente a Doctoralia Starter ($1,350/mes × 36 = $48,600 MXN), produce un **ahorro neto real de +$28,736 MXN**.
- **Guardarraíl Consultivo Protegido:** Si un usuario selecciona un gasto de constructor web simple (como Wix a $400/mes), el sistema no arrojará amortizaciones falsas para la Plataforma Clínica, sino que activará el estado consultivo (`isConsultative`) explicando que una plataforma clínica con expedientes NOM-004 no compite en alcance con un constructor estático de páginas.

---

## 3. Matriz Comercial de la Tríada

| Atributo | Paquete 01: Presencia Digital | Paquete 02: Plataforma Clínica | Paquete 03: Consultorio Inteligente ⭐ |
| :--- | :--- | :--- | :--- |
| **Enfoque** | Solo Página Web Pública | Solo Software de Gestión | Todo Incluido (Web + Software) |
| **Ideal para** | Quien ya organiza citas a mano y solo busca captar en Google. | Quien ya tiene web o redes y necesita ordenar citas y expedientes. | Quien busca presencia profesional y control operativo total. |
| **Inversión Inicial** | **$4,800 MXN** (Pago Único) | **$1,900 MXN** (Setup Inicial) | **$5,900 MXN** (Setup Inicial) |
| **Esquema 50/50** | $2,400 anticipo / $2,400 entrega | $950 anticipo / $950 entrega | $2,950 anticipo / $2,950 entrega |
| **Mantenimiento Mensual** | **$0 MXN / mes** (Cloudflare) | **$499 MXN / mes** (o $4,990/año) | **$499 MXN / mes** (o $4,990/año) |
| **Tiempo de Entrega** | 48 a 72 horas hábiles | 24 a 48 horas hábiles | 3 a 5 días hábiles |
| **Página Web Propia** | ✅ Sí (Diseño a medida) | ❌ No incluye sitio web | ✅ Sí (Diseño a medida) |
| **Panel Clínico Privado** | ❌ No | ✅ Sí (Agenda semanal viva) | ✅ Sí (Agenda semanal viva) |
| **Expedientes NOM-004** | ❌ No | ✅ Sí (Historial y notas) | ✅ Sí (Historial y notas) |
| **Videollamadas** | ❌ No | ✅ Enlaces Zoom/Meet | ✅ Enlaces Zoom/Meet |
| **Alojamiento / URL** | Dominio propio en Cloudflare | Subdominio seguro incluido | Dominio + Subdominio privado |

---

## 4. Alcance (Scope)

### En Alcance (In Scope):
1. **Tarjeta Comercial en `#pricing` (`index.html`):**
   - Integración de la tarjeta intermedia del Paquete 03 entre el Paquete 01 y el Paquete 02.
   - Detalle de setup ($1,900 MXN), mensualidad ($499 MXN/mes o $4,990/año), esquema 50/50 ($950/$950) y entrega (24 a 48h).
   - Acordeón nativo `<details>` con el desglose de inclusiones (agenda semanal, expedientes NOM-004, enlaces de videollamadas, respaldos, exportación CSV).
   - Botón directo de WhatsApp con mensaje precargado personalizado para Plataforma Clínica.
2. **Adaptación de Estilos CSS (`pricing.css`):**
   - Transición del grid de precios a 3 columnas en pantallas grandes (`minmax(0, 1fr)`) manteniendo la tarjeta del Paquete 02 destacada visualmente.
   - Salvaguardas responsivas para tabletas y dispositivos móviles (<768px) en diseño vertical limpio.
3. **Calculadora Interactiva de Ahorro y ROI (`#savings-calculator` y `savings-calculator.js`):**
   - Incorporación del tercer botón de conmutación: `Plataforma Clínica (Paquete 03)`.
   - Lógica matemática de cálculo a 3 años para Paquete 03 ($1,900 + $499 × meses).
   - Proyección dinámica de amortización, ahorro neto frente a presets (Encuadrado $990, Doctoralia $1,350 / $2,370) y estado consultivo para Wix ($400).
   - Sincronización del botón de WhatsApp con el cálculo exacto del Paquete 03.
4. **Pregunta Frecuente Dedicada en `#faq` (`index.html`):**
   - Pregunta: *«¿Puedo contratar únicamente la plataforma clínica si ya tengo mi propia página web o trabajo por redes sociales?»*
   - Explicación de la puesta en marcha en 24-48h, asignación de subdominio y migración opcional a web completa en el futuro.
5. **Sincronización en `comparativa-doctoralia.html`:**
   - Mención explícita en el callout y tabla de la posibilidad de contratar solo la plataforma clínica por $1,900 inicial y $499/mes frente a las cuotas de Doctoralia.
6. **Sincronización de Metadatos y Contexto de IA:**
   - Schema.org JSON-LD (`ProfessionalService`, `hasOfferCatalog`, `FAQPage`) en `index.html`.
   - Actualización de `/llms.txt` reflejando los 3 paquetes vigentes y sus condiciones.
7. **Suite de Pruebas Automatizadas:**
   - Actualización de `tests/savings-calculator.test.js` para cubrir la matemática del Paquete 03 y sus casos límite.
   - Actualización de `tests/link-integrity.test.js` para verificar la coherencia de enlaces y textos del Paquete 03.

### Fuera de Alcance (Out of Scope):
- Desarrollo de un portal público de reservas para pacientes (se mantiene la coordinación directa con el terapeuta).
- Modificaciones en la base de datos de producción o lógica backend de autenticación.

---

## 5. Requisitos Funcionales (Notación EARS)

### Módulo 1: Tarjetas de Precios (`#pricing`)
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará en la sección `#pricing` de `index.html` una cuadrícula estructurada con los 3 paquetes en orden numérico: Paquete 01 (Presencia Digital), Paquete 02 (Plataforma Clínica) y Paquete 03 (Consultorio Inteligente - Destacado).
- **RF-1.2 (Ubicuo):** EL SISTEMA mostrará para el Paquete 02 el precio inicial de `$1,900 MXN (Pago Inicial de Puesta en Marcha)`, el desglose de esquema 50/50 (`$950 MXN anticipo · $950 MXN al entregar tu plataforma lista`), la cuota de mantenimiento de `$499 MXN / mes` (o anualidad de `$4,990 MXN / año`) y el tiempo de entrega de `24 a 48 horas hábiles`.
- **RF-1.3 (Ubicuo):** EL SISTEMA incluirá en la tarjeta del Paquete 02 un acordeón desplegable nativo `<details>` con el listado completo de características y un botón directo a WhatsApp con el mensaje:  
  `Hola Cristhian, me interesa implementar la Plataforma Clínica ($1,900 MXN + $499/mes) para gestionar mis citas y expedientes. ¿Cómo podemos iniciar?`
- **RF-1.4 (Ubicuo):** EL SISTEMA mantendrá la tarjeta del Paquete 03 (Consultorio Inteligente) con su distintivo visual superior (*«Tu Presencia Digital + Tu Plataforma»*) y su borde jerárquico destacado.

### Módulo 2: Calculadora de Ahorro y ROI (`#savings-calculator`)
- **RF-2.1 (Evento):** CUANDO el usuario interactúe con el selector de paquetes en la calculadora, EL SISTEMA permitirá conmutar libremente entre `Solo Web (Paquete 01)`, `Plataforma Clínica (Paquete 02)` y `Consultorio Inteligente (Paquete 03)`.
- **RF-2.2 (Estado):** MIENTRAS el paquete activo sea `pkg2` (Plataforma Clínica), EL SISTEMA calculará el costo a 3 años como `1900 + (499 * 36) = 19,864 MXN`.
- **RF-2.3 (Evento):** CUANDO el usuario seleccione el preset de Encuadrado ($990/mes) o Doctoralia ($1,350 o $2,370/mes), EL SISTEMA activará por defecto el Paquete 02 o el Paquete 03, proyectando el ahorro neto positivo y los meses de amortización reales.
- **RF-2.4 (Excepción):** SI el paquete activo es `pkg2` y el gasto mensual actual es inferior o igual a $499 MXN (ej. Wix a $400/mes), ENTONCES EL SISTEMA activará el estado consultivo (`.card-consultative`), eliminará los números verdes y badges de amortización, y mostrará el botón interactivo para alternar a `Paquete 01 (Solo Web)` o solicitar asesoría personalizada.
- **RF-2.5 (Evento):** CUANDO se recalcule la cifra para el Paquete 02 o 03, EL SISTEMA actualizará el enlace del botón de WhatsApp con el cálculo exacto proyectado a 3 años.

### Módulo 3: Preguntas Frecuentes, SEO y Contexto de IA
- **RF-3.1 (Ubicuo):** EL SISTEMA incorporará en `#faq` de `index.html` la pregunta:  
  *«¿Puedo contratar únicamente la plataforma clínica si ya tengo mi propia página web o uso redes sociales?»* explicando la autonomía del panel, la configuración de subdominio y el tiempo de activación de 24-48 horas.
- **RF-3.2 (Ubicuo):** EL SISTEMA actualizará la entidad `ProfessionalService` en Schema.org JSON-LD de `index.html` para incluir la oferta del Paquete 02 y Paquete 03 dentro del catálogo formal de servicios y añadirá la nueva pregunta a `FAQPage`.
- **RF-3.3 (Ubicuo):** EL SISTEMA sincronizará el archivo `/llms.txt` reflejando la tabla comparativa y descripción de los 3 paquetes vigentes en orden 01, 02 y 03.
- **RF-3.4 (Ubicuo):** EL SISTEMA incluirá en `comparativa-doctoralia.html` la opción de contratar únicamente la plataforma clínica por $1,900 setup + $499/mes (Paquete 02) para quienes buscan una alternativa directa al software de Doctoralia sin cambiar de web.

### Módulo 4: Pruebas y Calidad Automatizada
- **RF-4.1 (Ubicuo):** EL SISTEMA validará mediante `tests/savings-calculator.test.js` la matemática a 3 años de `pkg2` y `pkg3`, la correcta activación del estado consultivo ante valores <= $499/mes, y la generación de URLs de WhatsApp.
- **RF-4.2 (Ubicuo):** EL SISTEMA verificará mediante `tests/link-integrity.test.js` la existencia física de la tarjeta del Paquete 02 y 03, coherencia de precios y enlaces de contacto.
- **RF-4.3 (Ubicuo):** EL SISTEMA superará el 100% de la suite de pruebas nativas con `npm test`.

---

## 6. Criterios de Aceptación

1. **Jerarquía Visual:** En escritorio, la sección `#pricing` muestra 3 tarjetas balanceadas sin desbordamiento horizontal, con el Paquete 02 manteniendo su jerarquía prémium destacada.
2. **Responsividad:** En dispositivos móviles (375px - 430px), las 3 tarjetas se apilan ordenadamente con espaciado uniforme y fuentes legibles.
3. **Cálculo Reactivo en Calculadora:** La calculadora conmuta fluidamente entre los 3 paquetes, actualizando números, badges, estado consultivo y enlace de WhatsApp al instante.
4. **Verificación Automatizada:** Suite de pruebas en Node.js pasando al 100% en verde sin dependencias pesadas.
5. **Cero Errores:** Consola de JavaScript sin errores ni advertencias en ningún tema (claro y oscuro).
