# Tareas — Feature 016: Suite Avanzada de GEO (Generative Engine Optimization), IndexNow Instantáneo y Página Dedicada de Comparativa (vs. Doctoralia)

**Estado:** ✅ Completado  
**Referencia:** `specs/016-suite-optimizacion-geo-indexnow-y-comparativa-doctoralia/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Implementar módulo IndexNow (Clave de verificación, script de ping y comando npm)**
  - **Archivos:** `e4d7a8809c954e7d8b584d41fa217c9b.txt`, `scripts/ping-indexnow.js`, `package.json`
  - **Alcance:** Generar la clave hexadecimal estática en la raíz, programar el script con Node.js `fetch` para notificar a `https://api.indexnow.org/indexnow` y añadir el script `"ping:indexnow"` en `package.json`.
  - **Hecho cuando:** La ejecución de `node scripts/ping-indexnow.js --dry-run` o prueba de ping construya el payload JSON válido y el archivo de clave sea accesible en la raíz. (Completado: verificado con `--dry-run` y curl HTTP 200 en servidor local).

- [x] **T2: Vincular etiqueta `<link rel="llms-txt">` y enriquecer Schema.org JSON-LD en `index.html`**
  - **Archivos:** `index.html`, `aviso-de-privacidad.html`
  - **Alcance:** 
    1. Añadir `<link rel="llms-txt" type="text/plain" href="https://cristhianruiz.dev/llms.txt">` en el `<head>` de `index.html` y `aviso-de-privacidad.html`.
    2. Incorporar la 12.ª pregunta frecuente en el nodo `FAQPage` del Schema.org JSON-LD de `index.html` sobre la comparativa de costes y comisiones frente a Doctoralia.
  - **Hecho cuando:** La etiqueta de descubrimiento esté presente en ambas páginas y la sintaxis JSON-LD sea válida sin errores de parseo. (Completado: verificado y probado).

- [x] **T3: Crear la página de aterrizaje dedicada `comparativa-doctoralia.html` con diseño Clinical SaaS**
  - **Archivos:** `comparativa-doctoralia.html`, `css/components/comparison.css`, `scripts/sync-partials.js`
  - **Alcance:** Estructurar la nueva página con H1, desglose de tarifas de Doctoralia ($1,350 a $2,370 MXN/mes), impacto de las comisiones del 15%–20%, proyección de ahorro a 3 años (> $35,000 MXN), preguntas frecuentes de migración y CTAs a WhatsApp y a los planes de `index.html#pricing`. Integrar partials mediante `scripts/sync-partials.js`.
  - **Hecho cuando:** `comparativa-doctoralia.html` exista, renderice la cabecera y pie de página sincronizados y aplique las salvaguardas responsivas `minmax(0, 1fr)`. (Completado: sincronizado exitosamente con 3 páginas).

- [x] **T4: Actualizar `sitemap.xml` y expandir la suite de pruebas automatizadas (`npm test`)**
  - **Archivos:** `sitemap.xml`, `tests/seo-metadata.test.js`, `tests/link-integrity.test.js`
  - **Alcance:**
    1. Agregar `https://cristhianruiz.dev/comparativa-doctoralia` al `sitemap.xml`.
    2. Extender `tests/seo-metadata.test.js` para auditar `comparativa-doctoralia.html` verificando `<title>` <= 65 chars y `<meta description>` entre 120 y 160 chars.
    3. Extender `tests/link-integrity.test.js` para verificar la integridad de enlaces cruzados en la nueva página.
  - **Hecho cuando:** `npm test` ejecute con éxito todas las pruebas unitarias (aumentando el número de tests pasando en verde a 22+). (Completado: 23/23 tests pasando en verde en 81ms).

- [x] **T5: Sincronización final, verificación en servidor local y reporte documental**
  - **Archivos:** `overview/session.md`, `overview/tasks.md`
  - **Alcance:** Ejecutar `npm run sync:partials`, verificar que `http://localhost:3000/comparativa-doctoralia` responda HTTP 200 y se renderice perfectamente en desktop y móvil (375px), y actualizar los archivos de bitácora y tareas.
  - **Hecho cuando:** La página responda HTTP 200, los tests pasen al 100% y la documentación refleje el cierre de la Feature 016. (Completado: validado HTTP 200 y documentación actualizada).
