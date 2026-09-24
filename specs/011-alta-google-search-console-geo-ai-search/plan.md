# Plan Técnico — Feature 011: Alta en Google Search, Optimización para Motores de Inteligencia Artificial (GEO / AI Search), Schema FAQPage y llms.txt

Estado: 🔄 En revisión / Propuesta  
Referencia: `specs/011-alta-google-search-console-geo-ai-search/spec.md`  

---

## 1. Módulos Afectados y Arquitectura

1. **`index.html` (Schema.org JSON-LD Enriquecido):**
   - Incorporación de esquema multidimensional `@graph` que combina:
     - `@type: "ProfessionalService"` (CrisDev, servicios web para psicoterapeutas, precios, datos de contacto).
     - `@type: "Person"` (Cristhian Ruiz, Software & Web Engineer).
     - `@type: "FAQPage"` (Las 7 preguntas y respuestas de la sección `#faq`).
     - Soporte para metaetiqueta `google-site-verification`.
2. **`llms.txt` (Estándar de Contexto para Inteligencias Artificiales):**
   - Archivo Markdown estructurado en la raíz del dominio para que ChatGPT, Perplexity, Claude y Gemini procesen la información de CrisDev.
3. **`robots.txt` (Rastreadores Web y de IA):**
   - Directivas explícitas de bienvenida y allowlist para rastreadores de Google, Bing, OpenAI (GPTBot, ChatGPT-User), Perplexity (PerplexityBot), Anthropic (ClaudeBot) y Apple.
4. **Guía Operativa de Google Search Console & Bing Webmaster Tools:**
   - Documentación paso a paso en `docs/seo-alta-google-search-console.md` con las instrucciones precisas para verificar propiedad, enviar sitemap y forzar indexación.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

### Decisión 1: Estructura Schema.org `@graph` con `FAQPage`
- **Decisión:** Agrupar en un solo script JSON-LD un arreglo `@graph` con `ProfessionalService`, `Person` y `FAQPage`.
- **Alternativa Descartada:** Usar múltiples etiquetas `<script type="application/ld+json">` separadas. *Motivo de descarte:* El enfoque `@graph` unificado interconecta las entidades (Cristhian Ruiz es el fundador de CrisDev, CrisDev ofrece los servicios y CrisDev responde las FAQs), maximizando la coherencia semántica para el Knowledge Graph de Google y los LLMs.

### Decisión 2: Formato del Archivo `llms.txt`
- **Decisión:** Seguir la especificación formal de `llms.txt` (propuesta por Jeremy Howard / Fast.ai y adoptada por la industria), estructurado con H1, resumen ejecutivo, enlaces canónicos y secciones de especificación.
- **Alternativa Descartada:** Crear un archivo JSON propietario. *Motivo de descarte:* Los LLMs están preentrenados y optimizados para procesar texto plano y Markdown con tokens limpios en lugar de JSON verboso.

---

## 3. Pruebas y Validación

1. **Validación de JSON-LD:**
   - Comprobar parseo sintáctico de JSON sin errores de comillas, caracteres de escape o campos requeridos de Schema.org.
2. **Validación de Accesibilidad de `llms.txt`:**
   - Verificar lectura de `http://localhost:3000/llms.txt`.
3. **Suite Automatizada:**
   - Ejecutar `npm test` y confirmar 16/16 tests pasando.
