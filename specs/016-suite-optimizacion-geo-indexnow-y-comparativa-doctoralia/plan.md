# Plan Técnico — Feature 016: Suite Avanzada de GEO (Generative Engine Optimization), IndexNow Instantáneo y Página Dedicada de Comparativa (vs. Doctoralia)

**Estado:** ✅ Aprobado  
**Referencia:** `specs/016-suite-optimizacion-geo-indexnow-y-comparativa-doctoralia/spec.md`

---

## 1. Arquitectura Técnica y Módulos Afectados

1. **`e4d7a8809c954e7d8b584d41fa217c9b.txt` & `scripts/ping-indexnow.js` (Módulo IndexNow):**
   - Clave pública hexadecimal de 32 caracteres ubicada en la raíz para autenticación de propiedad del host ante Bing y motores afiliados.
   - Script ejecutor en Node.js que construye la petición POST a `https://api.indexnow.org/indexnow` con la lista canónica de URLs (`/`, `/aviso-de-privacidad`, `/comparativa-doctoralia`).
   - Comando `npm run ping:indexnow` integrado en `package.json`.

2. **Cabeceras HTML (`index.html`, `aviso-de-privacidad.html`, `comparativa-doctoralia.html`):**
   - Integración de `<link rel="llms-txt" type="text/plain" href="https://cristhianruiz.dev/llms.txt">` para descubrimiento directo por parsers de IA.

3. **`index.html` (Schema.org JSON-LD):**
   - Incorporación en el nodo `FAQPage` de la 12.ª pregunta frecuente orientada a la comparación con Doctoralia para capturar Rich Snippets en Google.

4. **`comparativa-doctoralia.html` (Página de Aterrizaje Multipágina Dedicada):**
   - Documento HTML semántico con cabecera y pie de página sincronizados mediante `scripts/sync-partials.js`.
   - Paleta de diseño *Clinical SaaS* reutilizando `css/main.css`, `css/components/navbar.css`, `css/components/footer.css`, `css/components/comparison.css` y `css/components/trust-operator.css`.
   - Título calibrado (55 caracteres) y meta description (151 caracteres) para cumplir la regla de oro de Bing y Google.
   - Contenido estructurado: Desglose de planes de Doctoralia en México ($1,350, $1,620 y $2,370 MXN/mes), impacto real de las comisiones del 15%–20%, proyección económica a 3 años y CTA directo a WhatsApp y a los planes de `index.html#pricing`.

5. **`sitemap.xml`:**
   - Incorporación de `https://cristhianruiz.dev/comparativa-doctoralia` con `<priority>0.8</priority>` y `<lastmod>2026-09-28</lastmod>`.

6. **Suite de Pruebas Automatizadas (`tests/`):**
   - `tests/seo-metadata.test.js`: Extensión para verificar que `comparativa-doctoralia.html` cumpla los estándares de longitud SEO (< 65 caracteres de título y 120–160 de descripción).
   - `tests/link-integrity.test.js`: Extensión para verificar que los enlaces y anclas entre `comparativa-doctoralia.html` e `index.html` apunten a IDs existentes.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

| Decisión Técnica | Alternativa Descartada | Justificación / Motivo |
| :--- | :--- | :--- |
| **Página estática HTML dedicada (`comparativa-doctoralia.html`)** | Artículo en un blog dinámico o WordPress externo | Mantiene la arquitectura de Frontend puro, cero dependencias pesadas y carga instantánea en Cloudflare Pages, posicionando directamente bajo el dominio raíz sin overhead de bases de datos. |
| **IndexNow con Node.js nativo (`fetch`)** | Dependencia externa tipo `indexnow` de npm | Siguiendo la Constitución del Proyecto (Cero dependencias innecesarias), Node 18+ soporta `fetch` nativo sin agregar paquetes que inflen `node_modules`. |
| **Clave estática en `.txt` a la raíz** | Configurar validación DNS para cada motor | La especificación oficial de IndexNow valida la propiedad del dominio en 1 milisegundo sirviendo el archivo `.txt` en la raíz pública, siendo la vía más rápida y confiable. |
| **Extender la suite de tests existente (`npm test`)** | Validar manualmente la nueva página | Previene regresiones automáticas en el CI/CD y asegura que cualquier modificación futura mantenga la coherencia en las 3 páginas del sitio. |

---

## 3. Matriz de Trazabilidad (Spec &rarr; Plan)

| Requisito EARS | Tarea Asociada | Archivos Clave |
| :--- | :--- | :--- |
| **RF-1.1, RF-1.2, RF-1.3** | **T1** | `e4d7a8809c954e7d8b584d41fa217c9b.txt`, `scripts/ping-indexnow.js`, `package.json` |
| **RF-2.1, RF-3.1** | **T2** | `index.html`, `aviso-de-privacidad.html` |
| **RF-4.1, RF-4.2, RF-4.3, RF-4.4** | **T3** | `comparativa-doctoralia.html`, `css/components/comparison.css`, `scripts/sync-partials.js` |
| **RF-5.1, RF-5.2** | **T4** | `sitemap.xml`, `tests/seo-metadata.test.js`, `tests/link-integrity.test.js` |
| **Verificación Global** | **T5** | `scripts/ping-indexnow.js`, `npm test`, verificación en navegador y documentación SDD |
