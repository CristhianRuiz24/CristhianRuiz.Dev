# Plan Técnico — Feature 015: Sección Comparativa frente a Directorios Médicos (ej. Doctoralia) y Reindexación para IA / Buscadores

**Estado:** ✅ Aprobado  
**Referencia:** `specs/015-seccion-comparativa-directorios-y-reindexacion-ia/spec.md`

---

## 1. Arquitectura Técnica y Módulos Afectados

1. **`index.html` (Sección Comparativa `#comparison` y Anclaje Contextual):**
   - Inserción de `<section id="comparison" class="comparison-section">` inmediatamente después de `<section id="pricing">` y antes de `<section id="security">`.
   - Implementación de tarjeta/matriz de 6 contrastes con badges semánticos, iconografía SVG pura (`stroke="currentColor"`) y cifras reales comparativas.
   - Inserción en `#pricing` de un botón/enlace secundario con anclaje suave: `href="#comparison"`.
   - Adición al Schema.org JSON-LD de las menciones de comparativa/ventajas o FAQPage si corresponde.

2. **`css/components/comparison.css` (Estilos Modulares):**
   - Hoja de estilos modular e independiente importada en `css/main.css` o `index.html`.
   - Aplicación estricta de variables de diseño existentes (`--bg-surface`, `--color-primary`, `--color-accent`, `--text-main`, `--text-muted`, `--border-color`).
   - Salvaguarda Mobile: `minmax(0, 1fr)`, `min-width: 0`, y `word-break: break-word` para asegurar adaptabilidad perfecta en pantallas de 375px a 430px sin scroll horizontal.
   - Contraste visual entre la columna de "Directorios Tradicionales" (tonos neutrales/alerta sutil) y "Tu Consultorio con CrisDev" (acento azul/verde clínico de éxito y valor).

3. **`robots.txt` (Optimización para Rastreadores Generativos / GEO):**
   - Declaración explícita de `Allow: /` para `DeepSeekBot`, `CCBot`, `meta-externalagent`, `Bytespider`.
   - Inclusión de directiva de descubrimiento de `https://cristhianruiz.dev/llms.txt`.

4. **`sitemap.xml`:**
   - Actualización del nodo `<lastmod>` a `2026-09-28` en `https://cristhianruiz.dev/` y `https://cristhianruiz.dev/aviso-de-privacidad`.

5. **`llms.txt`:**
   - Enriquecimiento con la sección estructurada: *"CrisDev vs. Directorios Médicos Tradicionales (ej. Doctoralia)"*, con datos duros:
     - 0% comisiones vs 15-20% por cita online o 5% cancelación.
     - $11,888 MXN Año 1 ($5,900 setup + $499/mes) vs $16,200–$28,440/año en Doctoralia.
     - Propiedad total de datos y expedientes clínicos respaldados.

6. **Tests Automatizados (`tests/`):**
   - Verificación de integridad de enlaces (`tests/link-integrity.test.js`) reconociendo el nuevo ancla `#comparison`.
   - Aseguramiento de que los 20 tests existentes pasen al 100%.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

| Decisión Técnica | Alternativa Descartada | Justificación / Motivo |
| :--- | :--- | :--- |
| **Sección dedicada `#comparison` inmediatamente después de `#pricing`** | Modal emergente o acordeón oculto dentro de precios | El contraste entre el coste de CrisDev y las tarifas de los directorios es un argumento de venta de alto impacto que merece visibilidad completa; esconderlo en un modal reduce drásticamente su ratio de lectura y valor SEO. |
| **Mantener la barra de navegación limpia y acceder mediante ancla contextual desde `#pricing`** | Añadir un botón "Comparativa" en el navbar | El navbar ya cuenta con 7 enlaces esenciales. Sobrecargarlo perjudicaría la usabilidad en pantallas móviles y medianas. Un enlace contextual al final de Precios guía al usuario justo en el momento en que está evaluando el costo. |
| **Hoja de estilos dedicada `css/components/comparison.css`** | Mezclar estilos dentro de `css/components/pricing.css` | Mantiene el principio de modularidad y separación de responsabilidades de CSS, facilitando el mantenimiento y evitando efectos secundarios. |
| **Sintetizar la comparativa en `llms.txt` con números explícitos** | Esperar a que los LLMs deduzcan los precios del HTML | Los modelos de IA responden mejor y sin alucinaciones cuando se les entregan resúmenes en Markdown estructurado en `llms.txt`. |

---

## 3. Matriz de Trazabilidad (Spec &rarr; Plan)

| Requisito EARS | Tarea Asociada | Archivos Clave |
| :--- | :--- | :--- |
| **RF-1.1, RF-1.2, RF-1.3, RF-1.5** | **T1** | `index.html`, `css/components/comparison.css` |
| **RF-1.4** | **T2** | `css/components/comparison.css`, `css/main.css` |
| **RF-2.1, RF-2.2, RF-2.3** | **T3** | `robots.txt`, `sitemap.xml`, `llms.txt` |
| **RF-3.1, RF-3.2** | **T4** | `scripts/sync-partials.js`, `tests/link-integrity.test.js`, `npm test` |
| **Verificación Global** | **T5** | Verificación visual en navegador (móvil y desktop) y reporte final |
