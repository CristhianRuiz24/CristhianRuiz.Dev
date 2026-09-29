# Especificación — Feature 023: Objeciones de Confianza Operativa (Respaldos, Exportación de Datos y Continuidad en la Nube)

**Estado:** ⏳ Pendiente de Aprobación  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`), Features 020, 021 y 022, retroalimentación directa y acuerdos de honestidad operativa.

---

## 1. Contexto y Diagnóstico

El análisis crítico de conversión y psicología de compra para profesionales de la salud reveló objeciones pragmáticas que cualquier psicólogo o terapeuta con consulta privada formal evalúa antes de contratar y que deben comunicarse con estricto apego a lo que el servicio puede demostrar y cumplir de forma inmediata:

1. **Custodia y Soberanía de Expedientes (Anti-Secuestro de Datos):** El profesional teme que al contratar un software clínico sus pacientes queden atrapados y no pueda llevárselos si decide marcharse. Debe aclararse con sobriedad que se realizan respaldos periódicos en la nube y que, si decide migrar, se le entrega a solicitud su padrón de pacientes y notas en un **formato estándar (como CSV u hoja de cálculo)**, sin prometer botones o formatos que la interfaz no posea hoy.
2. **Continuidad Operativa y Desacoplamiento de Infraestructura:** El cliente valora el trato 1 a 1 con Cristhian, pero surge la duda: *"¿Qué pasa si un día no estás disponible de inmediato?"*. Debe explicarse con precisión que el sistema no corre en una computadora personal y delimitar técnicamente:
   - **La web pública** corre sobre la red de Cloudflare (alta velocidad, $0/mes permanente).
   - **El panel clínico y la base de datos** corren en servidores en la nube dedicados con mantenimiento y seguridad continua (justificando transparentemente los $499 MXN/mes).
3. **Guardarraíl Fiscal (Exclusión Consciente de CFDI en la Web Pública):** Aunque Cristhian cuenta con RFC activo, el flujo de timbrado CFDI 4.0 no está automatizado ni familiarizado aún. Prometer públicamente en la landing *"Facturación fiscal CFDI (SAT)"* representa un riesgo comercial grave si un cliente la exige al transferir el anticipo. Por tanto, **se excluye cualquier mención pública de CFDI en la web**, manteniéndose como acuerdo privado por WhatsApp con entrega de comprobante formal.

---

## 2. Principios y Guardarraíles de Honestidad Técnica

- **Regla "Under-promise, Over-deliver":** Solo se publica en la web lo que se puede entregar y demostrar en 5 minutos.
- **Cero Hipérboles ni SLAs Ficticios:** Prohibido inventar porcentajes corporativos como "99.9% de uptime garantizado". Se describe la arquitectura en la nube con sobriedad.
- **Delimitación Asimétrica de Servidores (Cloudflare vs. Panel Clínico):** Evitar atribuir el panel clínico a Cloudflare para no generar contradicción comercial con la cuota de $499/mes del Paquete 02.
- **Sincronización Total del Ecosistema:** Sincronizar simultáneamente `index.html`, `comparativa-doctoralia.html`, datos estructurados Schema.org JSON-LD (`FAQPage`) y `/llms.txt`.

---

## 3. Matriz de Objeciones y Respuestas Verificables

| Objeción del Profesional | Respuesta Comercial y Técnica Verificable | Ubicación |
| :--- | :--- | :--- |
| **¿Cómo protegen mi información y qué pasa con los respaldos?** | Respaldos periódicos de la base de datos en servidores seguros en la nube. Los datos no quedan secuestrados: si el cliente migra o requiere una copia local, se le entrega su padrón de pacientes y registros en formato estándar (CSV u hoja de cálculo) a solicitud. | `#faq` (`index.html` y `comparativa-doctoralia.html`), Schema.org |
| **¿Qué sucede si un día no estás disponible de inmediato?** | Tu web pública corre en Cloudflare ($0/mes) y tu plataforma clínica en servidores en la nube dedicados, funcionando de forma autónoma 24/7 sin depender de un equipo local. El soporte es directo y personal por WhatsApp, pero la operación de tu consulta nunca se detiene. | `#faq` (`index.html`), Schema.org |

---

## 4. Alcance (Scope)

### En Alcance (In Scope):
- **Integración de 2 Nuevas Preguntas Frecuentes en `index.html`:**
  1. *¿Cómo protegen mi información y cómo puedo exportar los expedientes de mis pacientes?*
  2. *¿Qué sucede si un día no estás disponible de inmediato o hay un imprevisto?* (con distinción precisa entre Cloudflare para la web pública y servidores dedicados en la nube para el panel).
- **Sincronización en `comparativa-doctoralia.html`:**
  - Pregunta sobre respaldos y exportación de datos en formato estándar en el FAQ visual y en su bloque Schema.org.
- **Actualización de Metadatos Estructurados Schema.org JSON-LD (`FAQPage`):**
  - Inclusión de las entidades validadas en el array `mainEntity` de `index.html` y `comparativa-doctoralia.html`.
- **Actualización de `/llms.txt`:**
  - Respaldos periódicos, exportabilidad abierta a solicitud en CSV/hoja de cálculo y continuidad en la nube.
- **Retiro Total de Menciones a Facturación CFDI:**
  - Purgar cualquier texto de CFDI de `index.html`, `comparativa-doctoralia.html`, Schema.org y `/llms.txt` para proteger la operación fiscal de Cristhian.
- **Ampliación de Pruebas Automatizadas (`tests/link-integrity.test.js`):**
  - Validar presencia de respaldos, exportación estándar, ausencia de CFDI público y ausencia de SLAs inflados ("99.9%").

### Fuera de Alcance (Out of Scope):
- Promesas públicas de timbrado CFDI (gestionado caso a caso por WhatsApp).
- Modificaciones en la base de datos PostgreSQL o pasarelas de pago.

---

## 5. Requisitos Funcionales (Notación EARS)

### Módulo 1: Preguntas Frecuentes en `index.html`
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará en `#faq` de `index.html` la pregunta sobre respaldos y exportación:
  - **Pregunta:** *¿Cómo protegen mi información y cómo puedo exportar los expedientes de mis pacientes?*
  - **Respuesta:** *Tu base de datos clínica opera de forma privada e independiente. Realizamos respaldos periódicos de la información en servidores seguros en la nube para protegerla ante cualquier contingencia. Además, tu información nunca queda cautiva: si en algún momento decides cambiar de sistema o requieres una copia local, te entregamos a solicitud la exportación completa de tu padrón de pacientes y registros en un formato estándar (como CSV u hoja de cálculo).*
- **RF-1.2 (Ubicuo):** EL SISTEMA presentará en `#faq` de `index.html` la pregunta sobre continuidad y soporte:
  - **Pregunta:** *¿Qué sucede si un día no estás disponible de inmediato o hay un imprevisto?*
  - **Respuesta:** *Tu sitio web público está alojado sobre la infraestructura global de Cloudflare y tu plataforma clínica opera en servidores en la nube dedicados, por lo que funcionan de forma completamente autónoma las 24 horas del día sin depender de una computadora personal. Si requieres mantenimiento, ajustes o resolución de dudas, el soporte es directo y personal conmigo vía WhatsApp, pero la operación continua de tu consultorio y la recepción de pacientes nunca se detienen.*
- **RF-1.3 (Excepción):** SI el usuario revisa el FAQ público, ENTONCES EL SISTEMA NO mostrará promesas de facturación fiscal CFDI para prevenir compromisos fiscales no automatizados.

### Módulo 2: Sincronización en `comparativa-doctoralia.html`, Schema.org y `/llms.txt`
- **RF-2.1 (Ubicuo):** EL SISTEMA incluirá en `comparativa-doctoralia.html` la pregunta sobre protección de expedientes y exportación en formato estándar tanto en el HTML como en Schema.org JSON-LD `FAQPage`.
- **RF-2.2 (Ubicuo):** EL SISTEMA reflejará en `llms.txt` la política de respaldos periódicos, exportación estándar a solicitud y continuidad en la nube, sin menciones a CFDI público.

### Módulo 3: Pruebas Automatizadas de Integridad
- **RF-3.1 (Ubicuo):** EL SISTEMA verificará mediante `tests/link-integrity.test.js` que:
  - Las preguntas de respaldos y continuidad estén presentes.
  - No existan menciones a CFDI en el HTML público ni en llms.txt.
  - No existan afirmaciones no sustentadas de "99.9% de uptime" ni "secreto profesional garantizado".
- **RF-3.2 (Ubicuo):** EL SISTEMA superará el 100% de las pruebas automatizadas con `npm test`.

---

## 6. Criterios de Aceptación

1. **Alineación Comercial:** Ninguna mención pública a facturación CFDI en la web.
2. **Claridad de Servidores:** Distinción explícita entre Cloudflare (web pública) y servidores dedicados en la nube (panel clínico).
3. **Pruebas en Verde:** 41/41 tests pasando en `npm test`.
