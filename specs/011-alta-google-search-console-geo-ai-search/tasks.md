# Tareas — Feature 011: Alta en Google Search, Optimización para Motores de Inteligencia Artificial (GEO / AI Search), Schema FAQPage y llms.txt

Estado general: ✅ Completado  
Referencia: `specs/011-alta-google-search-console-geo-ai-search/spec.md` y `plan.md`  

| ID | Tarea | Estado | Archivos Afectados | Condición de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Implementación de Schema.org Unificado `@graph` (`FAQPage`, `ProfessionalService`, `Person`) | ✅ hecho | `index.html` | Hecho cuando: El JSON-LD contenga las 7 preguntas/respuestas de la sección FAQ, la entidad CrisDev con ofertas de servicios ($4,800 y $5,900 MXN) y la persona Cristhian Ruiz con sintaxis válida. |
| **T2** | Creación del Archivo de Contexto para Inteligencias Artificiales (`llms.txt`) | ✅ hecho | `llms.txt` | Hecho cuando: Exista `/llms.txt` en la raíz con resumen ejecutivo, descripción de paquetes comerciales, características técnicas (NOM-004-SSA3, agenda, etc.), caso PsicoLau y canales de contacto. |
| **T3** | Optimización de `robots.txt` para Motores Tradicionales y Rastreadores de IA | ✅ hecho | `robots.txt` | Hecho cuando: `robots.txt` declare acceso abierto y dé bienvenida explícita a `Googlebot`, `Bingbot`, `GPTBot`, `PerplexityBot`, `ClaudeBot` y referencie `sitemap.xml`. |
| **T4** | Guía Operativa de Registro e Indexación en Google Search Console y Bing | ✅ hecho | `docs/seo-alta-google-search-console.md` | Hecho cuando: Se redacte la guía paso a paso para dar de alta el dominio, verificar propiedad (DNS / meta tag), enviar el sitemap y solicitar indexación prioritaria en Google y Bing. |
| **T5** | Validación Automatizada de Tests y Accesibilidad Web | ✅ hecho | `tests/`, `index.html` | Hecho cuando: `npm test` pase 16/16 sin errores y el archivo `/llms.txt` sea servido exitosamente en el servidor local. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
