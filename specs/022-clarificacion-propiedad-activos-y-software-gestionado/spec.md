# Especificación — Feature 022: Clarificación de Propiedad de Activos y Software Clínico Gestionado

**Estado:** ⏳ Pendiente de Aprobación  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`), Features 015, 016, 019, 020 y 021.

---

## 1. Contexto y Diagnóstico

En la propuesta de valor de **CrisDev**, uno de los mayores ganchos comerciales frente a directorios y plataformas cerradas (como Doctoralia) es el concepto de *"Propiedad de Activo Digital Propio"* frente al *"Alquiler Perpetuo (SaaS)"*.

Sin embargo, una auditoría meticulosa de los textos vigentes en la landing page (`index.html`), en la página de comparativa (`comparativa-doctoralia.html`) y en `/llms.txt` reveló afirmaciones ambiguas que requieren delimitación jurídica y técnica:

### Textos Ambiguos Detectados:
1. **`index.html` (Línea 1385, Tabla Comparativa):**
   - *"Activo digital propio: Tu sitio web, tu base de datos y tu panel te pertenecen con código limpio y dominio a tu nombre."*
   - **Riesgo:** Sugiere falsamente que el cliente adquiere la propiedad del código fuente del software del panel clínico para autohospedarlo o redistribuirlo, cuando en realidad el panel es un motor SaaS gestionado en la nube con licenciamiento de uso exclusivo.
2. **`comparativa-doctoralia.html` (Línea 283, Matriz Comparativa):**
   - *"Activo patrimonial propio: El sitio web, el dominio y el software clínico son tuyos. No dependes de los términos de una empresa externa."*
   - **Riesgo:** Confunde la soberanía de la información médica (los datos de los pacientes) con la propiedad del software clínico subyacente.
3. **`/llms.txt` (Línea 68, Tabla Comparativa):**
   - *"Activo digital propio: Tu sitio web, base de datos y panel te pertenecen."*
   - **Riesgo:** Propaga a modelos de lenguaje de IA la idea incorrecta de que el panel se entrega como código fuente propiedad del cliente.
4. **Ausencia de FAQ Específico sobre Propiedad y Datos:**
   - La sección de Preguntas Frecuentes no detalla con claridad pedagógica qué le pertenece al cliente (dominio, sitio web estático, base de datos de pacientes exportable) y qué es operado como infraestructura gestionada (servidores, parches, seguridad y backups del panel).

---

## 2. Principios y Objetivos

- **Transparencia Comercial Total (Cero Letra Chiquita Confusa):** Delimitar con absoluta claridad técnica qué componentes son propiedad del terapeuta y cómo opera el panel clínico.
- **Enfoque de Beneficio ("Soberanía de Datos + Cero Preocupaciones Técnicas"):** Posicionar el software gestionado como una ventaja indispensable para el médico (quien no desea ni debe lidiar con mantenimiento de servidores, parches de seguridad ni balanceadores en la nube).
- **Consistencia 1:1 en Todo el Ecosistema:** Sincronizar simultáneamente `index.html`, `comparativa-doctoralia.html`, datos estructurados Schema.org JSON-LD (`FAQPage`) y `/llms.txt`.

---

## 3. Delimitación de Propiedad (El Modelo Acordado)

| Componente | Nivel de Propiedad | Explicación Comercial / Técnica |
| :--- | :--- | :--- |
| **Dominio (`.com` / `.mx`)** | **100% del Terapeuta** | Registrado a su nombre o transferible; no queda retenido por CrisDev ni intermediarios. |
| **Sitio Web Público** | **100% del Terapeuta** | Diseño a medida, textos, activos multimedia y código estático de su vitrina pública. |
| **Expedientes y Pacientes** | **100% del Terapeuta** | Soberanía total: la base de datos PostgreSQL privada y los expedientes clínicos (NOM-004-SSA3) son propiedad exclusiva del consultorio y son exportables en cualquier momento. |
| **Panel Clínico (El Sistema)** | **Software Gestionado en la Nube** | Infraestructura en la nube con soporte continuo: CrisDev administra los servidores, certificados SSL, parches de seguridad y respaldos automáticos. |

---

## 4. Alcance (Scope)

### En Alcance (In Scope):
- **Actualización de la Tabla Comparativa en `index.html`:**
  - Sustituir la celda de modelo de propiedad por la fórmula consensuada:
    *"Soberanía de datos y web propia: Tu sitio web, dominio y base de datos de pacientes te pertenecen al 100%. El panel clínico opera como software gestionado en la nube con mantenimiento y seguridad continuos."*
- **Actualización de la Matriz Comparativa en `comparativa-doctoralia.html`:**
  - Sustituir *"el software clínico son tuyos"* por la formulación de soberanía de datos y plataforma gestionada.
- **Sincronización en `/llms.txt`:**
  - Actualizar la fila `Modelo` de la tabla comparativa en markdown para reflejar la distinción idéntica.
- **Incorporación de Nueva Pregunta en el FAQ de `index.html` y `comparativa-doctoralia.html`:**
  - Pregunta: *¿De quién es la propiedad de mi sitio web y de los expedientes de mis pacientes?*
  - Respuesta completa explicando la propiedad del dominio, la web pública, la soberanía y exportabilidad de la base de datos médica, y el carácter gestionado del panel clínico.
- **Actualización de Metadatos Schema.org JSON-LD (`FAQPage`):**
  - Añadir la nueva pregunta y respuesta al array `mainEntity` de datos estructurados para Google.
- **Pruebas Automatizadas de Integridad (`tests/`):**
  - Verificar que ninguna página contenga la frase errónea *"tu panel te pertenecen"* ni *"el software clínico son tuyos"*.
  - Validar la presencia del nuevo FAQ en `index.html` y Schema.org.

### Fuera de Alcance (Out of Scope):
- Modificar la arquitectura de software o bases de datos (es una remediación de copy, transparencia jurídica y SEO).
- Cambiar tarifas o esquemas de renovación del Paquete 02 ($5,900 inicial + $4,990/año).

---

## 5. Requisitos Funcionales (Notación EARS)

### Módulo 1: Tablas Comparativas y Resúmenes
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará en la fila de *Modelo de Propiedad* de `#comparison` en `index.html`:
  - `<strong>Soberanía de datos y web propia:</strong> Tu sitio web, dominio y base de datos de pacientes te pertenecen al 100%. El panel clínico opera como software gestionado en la nube con mantenimiento y seguridad continuos.`
- **RF-1.2 (Ubicuo):** EL SISTEMA presentará en la fila de *Modelo Económico* de `comparativa-doctoralia.html`:
  - `<strong>Soberanía de datos y web propia:</strong> Tu sitio web, dominio y base de datos de pacientes son 100% tuyos (exportables en cualquier momento). El panel clínico opera como software gestionado con seguridad y respaldos continuos.`
- **RF-1.3 (Ubicuo):** EL SISTEMA reflejará en `/llms.txt` la distinción técnica exacta: web, dominio y base de datos de propiedad exclusiva del cliente; panel clínico en modalidad de software gestionado.

### Módulo 2: Sección de Preguntas Frecuentes (FAQ) y Schema.org
- **RF-2.1 (Ubicuo):** EL SISTEMA incluirá en el acordeón de Preguntas Frecuentes (`#faq`) de `index.html` una pregunta dedicada:
  - **Pregunta:** *¿De quién es la propiedad de mi página web y de los expedientes de mis pacientes?*
  - **Respuesta:** *Tu dominio y tu sitio web público son 100% tu propiedad. Tus expedientes y base de datos clínica te pertenecen exclusivamente a ti bajo secreto profesional (lineamientos NOM-004-SSA3) y puedes exportarlos en cualquier momento. El panel clínico opera como un software gestionado en la nube con soporte continuo: nosotros nos encargamos del mantenimiento de servidores, la seguridad, los respaldos diarios y las actualizaciones para que tu consultorio funcione sin fricción técnica.*
- **RF-2.2 (Ubicuo):** EL SISTEMA actualizará los metadatos estructurados Schema.org JSON-LD (`FAQPage`) en `index.html` integrando esta entidad en `mainEntity`.
- **RF-2.3 (Ubicuo):** EL SISTEMA sincronizará esta misma aclaración en la sección de preguntas frecuentes de `comparativa-doctoralia.html` y sus metadatos Schema.org JSON-LD.

### Módulo 3: Pruebas de Regresión y Ausencia de Ambigüedades
- **RF-3.1 (Ubicuo):** EL SISTEMA verificará mediante pruebas automatizadas que ninguna página del sitio contenga textos que afirmen que el código del panel clínico se cede o se entrega como código fuente propiedad del cliente.
- **RF-3.2 (Ubicuo):** EL SISTEMA confirmará la coherencia en `npm test` con el 100% de las suites en verde.

---

## 6. Criterios de Aceptación y Verificación

1. **Búsqueda global limpia:** Cero ocurrencias de *"tu panel te pertenecen"* o *"el software clínico son tuyos"*.
2. **FAQ visible y accesible:** La nueva pregunta de propiedad renderiza adecuadamente en modo claro y oscuro, con interacción nativa `<details>` / acordeón.
3. **Validación Schema.org:** El JSON-LD `FAQPage` valida limpiamente la nueva entidad sin errores de sintaxis.
4. **Pruebas en verde:** `npm test` pasa al 100% sin regresiones.
