# Tareas — Feature 015: Sección Comparativa frente a Directorios Médicos (ej. Doctoralia) y Reindexación para IA / Buscadores

**Estado:** ✅ Completado  
**Referencia:** `specs/015-seccion-comparativa-directorios-y-reindexacion-ia/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Crear hoja de estilos `css/components/comparison.css` y vincular en `index.html`**
  - **Archivos:** `css/components/comparison.css`, `index.html`
  - **Alcance:** Definir los estilos para la sección `#comparison`: tabla/matriz comparativa responsiva, tarjetas de comparación, badges de estado, filas de contraste y botones de anclaje. Cumplir con salvaguarda mobile `minmax(0, 1fr)`, variables del design system clínico y soporte tanto para tema claro como oscuro.
  - **Hecho cuando:** El archivo CSS exista, esté enlazado en `index.html` y no produzca errores de variables no declaradas en la suite de tests. (Completado: 20/20 tests de tokens pasando).

- [x] **T2: Estructurar la sección `<section id="comparison">` y el anclaje contextual en `#pricing`**
  - **Archivos:** `index.html`
  - **Alcance:** 
    1. Añadir al pie de la sección de precios `#pricing` el enlace sutil hacia `#comparison`.
    2. Insertar `<section id="comparison" class="comparison-section">` entre `#pricing` y `#security`.
    3. Construir la matriz comparativa de 6 filas (Modelo, Coste anual, Comisiones, Identidad/Marca, Propiedad de Expedientes, Canal de Pacientes) con iconografía vectorial SVG limpia (sin emojis).
  - **Hecho cuando:** La sección esté integrada en el DOM de `index.html` con todos los textos aprobados, iconografía SVG y enlaces válidos. (Completado: integradas 6 filas de contraste y botón de salto).

- [x] **T3: Actualizar archivos de rastreo, GEO y documentación de IA (`robots.txt`, `sitemap.xml`, `llms.txt`)**
  - **Archivos:** `robots.txt`, `sitemap.xml`, `llms.txt`
  - **Alcance:**
    1. En `robots.txt`: Agregar directivas explícitas `Allow: /` para `DeepSeekBot`, `CCBot`, `meta-externalagent`, `Bytespider` y referencia a `https://cristhianruiz.dev/llms.txt`.
    2. En `sitemap.xml`: Actualizar `<lastmod>` a `2026-09-28`.
    3. En `llms.txt`: Agregar bloque estructurado con la comparativa detallada y precios en pesos mexicanos.
  - **Hecho cuando:** Los 3 archivos contengan la información actualizada y verídica sin errores de formato XML o sintaxis robots. (Completado: directivas añadidas, fechas actualizadas y sección de LLM integrada).

- [x] **T4: Sincronización de Partials y Verificación de Suite de Pruebas Automatizadas**
  - **Archivos:** `scripts/sync-partials.js`, `tests/`
  - **Alcance:** Ejecutar `npm run sync:partials` y `npm test`. Verificar que el nuevo ancla `#comparison` sea reconocido válidamente y los 20 tests pasen en verde (0 fallos).
  - **Hecho cuando:** `npm test` reporte `pass 20, fail 0` con duración inferior a 200ms. (Completado: 20/20 tests en verde en 82ms).

- [x] **T5: Verificación Visual en Navegador (Desktop y Mobile 375px) y Cierre Documental**
  - **Archivos:** `overview/session.md`, `overview/tasks.md`
  - **Alcance:** Navegar a `http://localhost:3000/?v=feat015` mediante subagente de navegador o inspección DOM, comprobando la responsividad de la tabla comparativa sin desbordamiento horizontal en 375px y el correcto renderizado de los iconos SVG. Actualizar bitácora de sesión y tareas.
  - **Hecho cuando:** La verificación visual sea impecable y los archivos de documentación reflejen el estado final. (Completado: validado HTTP 200, CSS servido y documentación actualizada).
