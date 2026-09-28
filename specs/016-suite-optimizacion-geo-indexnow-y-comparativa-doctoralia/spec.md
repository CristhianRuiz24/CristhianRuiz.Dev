# Especificación — Feature 016: Suite Avanzada de GEO (Generative Engine Optimization), IndexNow Instantáneo y Página Dedicada de Comparativa (vs. Doctoralia)

**Estado:** ✅ Aprobada para Ejecución  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 011, 012 y 015.

---

## 1. Contexto y Justificación del Negocio

En la búsqueda web moderna existen dos canales de adquisición simultáneos que deciden la captación de clientes de salud:
1. **Motores de Búsqueda Tradicionales (Google y Bing):** Donde los profesionales buscan activamente términos transaccionales de alto dolor como *"cuánto cuesta doctoralia en méxico"*, *"comisiones de doctoralia"* o *"alternativas a doctoralia para psicólogos"*.
2. **Motores de Respuesta Generativa (GEO - ChatGPT, Perplexity, DeepSeek, Claude, Copilot):** Donde los psicoterapeutas y directores de clínicas preguntan directamente a la IA: *"¿Vale más la pena Doctoralia o tener mi propia web con agenda?"* o *"¿Qué opciones hay sin comisiones por paciente en México?"*.

Para maximizar la visibilidad, autoridad y velocidad de captura en ambos canales, se requiere una suite integral de optimización que trascienda la indexación pasiva semanal.

---

## 2. Principios y Objetivos

- **Indexación Activa e Instantánea (Push vs. Pull):** Implementar el protocolo **IndexNow** para notificar activamente a Bing, Copilot, Perplexity y motores asociados en el milisegundo exacto en que se publica o actualiza una página, eliminando tiempos muertos de semanas.
- **Descubrimiento Estándar para Agentes de IA:** Incorporar la etiqueta de cabecera estándar `<link rel="llms-txt" ...>` en el `<head>` del HTML para que cualquier parser de IA descubra la ficha técnica y la comparativa de precios sin ambigüedad.
- **Captura de Búsquedas de Alta Intención (SEO Transaccional):** Crear una página dedicada de aterrizaje multipágina (`/comparativa-doctoralia.html`) diseñada para posicionar orgánicamente ante consultas de comparación de costes y comisiones.
- **Fragmentos Enriquecidos (Rich Snippets en SERPs):** Enriquecer el Schema.org JSON-LD `FAQPage` con la respuesta comparativa directa, logrando que Google y Bing desplieguen acordeones informativos con cifras reales antes de que el usuario haga clic.
- **Coherencia Técnica y Salvaguardas:** Mantener la estética *Clinical SaaS*, iconografía vectorial SVG (cero emojis), salvaguarda móvil `minmax(0, 1fr)` y el 100% de la suite de pruebas unitarias (`npm test`).

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
1. **Protocolo IndexNow:**
   - Creación del archivo de clave estática de verificación en la raíz pública del sitio (ej. `[key].txt`).
   - Desarrollo del script automatizado `scripts/ping-indexnow.js` empleando Node.js nativo (`fetch`) para enviar la lista de URLs a `https://api.indexnow.org/indexnow`.
   - Adición del comando npm `"ping:indexnow": "node scripts/ping-indexnow.js"` en `package.json`.
2. **Descubrimiento HTML de `llms.txt`:**
   - Inserción de `<link rel="llms-txt" type="text/plain" href="https://cristhianruiz.dev/llms.txt">` en `<head>` de `index.html`, `aviso-de-privacidad.html` y la nueva página comparativa.
3. **Ampliación de Datos Estructurados (Schema.org JSON-LD):**
   - Incorporación en el array `mainEntity` de `FAQPage` en `index.html` de la pregunta: *"¿Cuál es la diferencia entre CrisDev y plataformas como Doctoralia?"* con cifras exactas de costes y política de 0% comisiones.
4. **Página de Aterrizaje Dedicada (`comparativa-doctoralia.html`):**
   - Nueva página multipágina semántica con URL canónica `https://cristhianruiz.dev/comparativa-doctoralia`.
   - Encabezado H1 y estructura orientada a la intención de búsqueda: *"¿Cuánto Cuesta la Agenda de Doctoralia vs. Tu Consultorio Digital Propio?"*.
   - Análisis detallado de costes a 1, 2 y 3 años con desglose de comisiones del 15%–20% por cita y 5% por cancelación.
   - Tabla comparativa completa, respuestas a objeciones y botones CTA hacia WhatsApp y hacia los planes de `index.html#pricing`.
   - Header y footer integrados mediante partials (`scripts/sync-partials.js`).
5. **Actualización de Rastreo y Sitemap:**
   - Inclusión de `https://cristhianruiz.dev/comparativa-doctoralia` en `sitemap.xml` con `<priority>0.8</priority>`.
   - Actualización de `<lastmod>` a la fecha vigente.
6. **Ampliación de la Suite de Pruebas Automatizadas:**
   - Adaptación de `tests/seo-metadata.test.js` y `tests/link-integrity.test.js` para auditar la nueva página `comparativa-doctoralia.html` (validando longitud de `<title>` < 65 y `<meta description>` 120–160 caracteres).

### Fuera de Alcance (Out of Scope):
- Servicios de gestión de cuentas publicitarias pagadas (Google Ads / Facebook Ads).
- Campañas de linkbuilding externo manual o técnicas de spam/blackhat SEO.

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Protocolo IndexNow
- **RF-1.1 (Ubicuo):** EL SISTEMA dispondrá en la raíz del proyecto de un archivo de clave de autenticación IndexNow accesible vía HTTP en formato texto plano UTF-8.
- **RF-1.2 (Evento):** CUANDO se ejecute `npm run ping:indexnow`, EL SISTEMA enviará un payload JSON autenticado a `https://api.indexnow.org/indexnow` con el host `cristhianruiz.dev`, la clave API y el listado de URLs canónicas del sitio.
- **RF-1.3 (Excepción):** SI la API de IndexNow responde con un código HTTP distinto de 200 o 202, ENTONCES EL SISTEMA reportará en consola el código de error y el mensaje de diagnóstico.

### Módulo 2: Cabeceras HTML y Descubrimiento de `llms.txt`
- **RF-2.1 (Ubicuo):** EL SISTEMA incluirá en el elemento `<head>` de todas las páginas HTML la etiqueta `<link rel="llms-txt" type="text/plain" href="https://cristhianruiz.dev/llms.txt">`.

### Módulo 3: Enriquecimiento de Schema.org JSON-LD
- **RF-3.1 (Ubicuo):** EL SISTEMA integrará en el nodo `@type: FAQPage` de `index.html` la pregunta comparativa específica contra plataformas de directorio, indicando el modelo de activo propio, tarifas en MXN y ausencia de comisiones.

### Módulo 4: Página Dedicada de Comparativa (`comparativa-doctoralia.html`)
- **RF-4.1 (Ubicuo):** EL SISTEMA servirá la página estática `comparativa-doctoralia.html` optimizada para palabras clave transaccionales (*"doctoralia precios", "doctoralia comisiones", "alternativas a doctoralia"*).
- **RF-4.2 (Ubicuo):** EL SISTEMA incluirá en `comparativa-doctoralia.html` un `<title>` menor o igual a 65 caracteres y un `<meta name="description">` de entre 120 y 160 caracteres.
- **RF-4.3 (Ubicuo):** EL SISTEMA empleará los partials compartidos (`header.html` y `footer.html`) mediante sincronización automática con `scripts/sync-partials.js`.
- **RF-4.4 (Ubicuo):** EL SISTEMA aplicará la salvaguarda mobile `minmax(0, 1fr)` en todas las tablas y contenedores para garantizar cero desbordamiento horizontal en viewports de 375px a 430px.

### Módulo 5: Sitemaps y Pruebas Automatizadas
- **RF-5.1 (Ubicuo):** EL SISTEMA incluirá la URL `https://cristhianruiz.dev/comparativa-doctoralia` en `sitemap.xml`.
- **RF-5.2 (Ubicuo):** EL SISTEMA validará que el 100% de los tests automatizados (`npm test`) pasen exitosamente, verificando la integridad de enlaces y las longitudes SEO de todas las páginas del repositorio.

---

## 5. Plan de Verificación

1. **Verificación de IndexNow:** Ejecutar `node scripts/ping-indexnow.js` y confirmar respuesta HTTP exitosa (200 o 202) desde el endpoint de IndexNow.
2. **Auditoría de Metadatos y Enlaces:** Ejecutar `npm test` confirmando que todas las páginas (incluyendo `comparativa-doctoralia.html`) cumplan los criterios de longitud y enlaces sin roturas.
3. **Validación de Sincronización:** Ejecutar `npm run sync:partials` comprobando coherencia idéntica en cabecera y pie de página.
4. **Validación Visual:** Inspección en navegador (desktop 1200px+ y móvil 375px) asegurando renderizado estético y responsive sin desbordamiento.
