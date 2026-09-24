# Especificación — Feature 011: Alta en Google Search, Optimización para Motores de Inteligencia Artificial (GEO / AI Search), Schema FAQPage y llms.txt

Estado: 🔄 En revisión / Propuesta  
Fecha de creación: 2026-09-24  
Última actualización: 2026-09-24  
Autores: Cristhian Ruiz / Antigravity  

---

## 1. Contexto y Dolor del Negocio

El sitio `cristhianruiz.dev` ya cuenta con diseño prémium, copy hiper-especializado en psicoterapia, transparencia de precios y sección de preguntas frecuentes. Sin embargo:

1. **Visibilidad en Búsquedas Tradicionales (Google Search):**
   - El sitio requiere ser dado de alta e indexado formalmente en **Google Search Console** para que Google rastree el sitemap, reconozca la autoridad del dominio y comience a posicionar las palabras clave de terapeutas y psicólogos en México.
2. **Visibilidad en Inteligencias Artificiales Comerciales (GEO - Generative Engine Optimization):**
   - Modelos como **ChatGPT (OpenAI Search), Perplexity, Claude y Google Gemini** responden recomendaciones de servicios consultando sitios web en tiempo real o consumiendo datos estructurados.
   - Si el sitio no cuenta con metadatos estructurados enriquecidos (Schema.org `FAQPage` y `Service`) ni un archivo de contexto para LLMs (`llms.txt`), las IA no pueden citar a CrisDev con precisión cuando los psicólogos pregunten: *"¿Quién hace páginas web o sistemas para psicólogos en México?"* o *"¿Cuánto cuesta una web y sistema para consultorio privado?"*.
3. **Rich Snippets en Google:**
   - La sección de Preguntas Frecuentes (`#faq`) no está reflejada en datos estructurados JSON-LD, perdiendo la oportunidad de aparecer con acordeones expandibles directamente en la página de resultados de Google (SERP).

---

## 2. Alcance (Scope)

### Dentro de Alcance (In Scope):
- **Datos Estructurados Schema.org Enriquecidos (`index.html`):**
  - Implementar el schema `@type: "FAQPage"` conteniendo las 7 preguntas estratégicas de la sección `#faq` con sus respuestas completas en texto plano limpio.
  - Expandir el schema `@type: "ProfessionalService"` para declarar servicios clínicos específicos (`hasOfferCatalog`), precios en MXN y especialidad en psicoterapia.
  - Incluir atributos de entidad persona (`@type: "Person"`) con credenciales y áreas de conocimiento (`knowsAbout`).
- **Creación de `llms.txt` (Estándar para IAs):**
  - Crear el archivo raíz `llms.txt` conforme al estándar de la industria, proporcionando a los LLMs un resumen claro de la propuesta de valor, los dos paquetes (Presencia Terapéutica $4,800 MXN y Consultorio Inteligente $5,900 MXN), características clave (agenda, NOM-004-SSA3, cobros, videollamadas) y formas de contacto.
- **Optimización de `robots.txt` para Rastreadores de IA:**
  - Asegurar directivas explícitas de bienvenida para los principales user-agents de IA: `Googlebot`, `Bingbot`, `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Applebot-Extended`.
- **Integración para Google Search Console (GSC):**
  - Disponer el soporte para la etiqueta meta de verificación `<meta name="google-site-verification" content="[TOKEN]" />` en `<head>` de `index.html`.
  - Crear una guía paso a paso para que el usuario registre la propiedad en GSC, envíe el `sitemap.xml` y solicite indexación prioritaria.
- **Sincronización con Bing Webmaster Tools:**
  - Guía de importación directa desde Google Search Console para alimentar el índice de Microsoft Bing y ChatGPT Search.

### Fuera de Alcance (Out of Scope):
- Campañas publicitarias de pago (Google Ads / Meta Ads).
- Creación de perfiles en Google Maps / Google Business Profile (requiere dirección física validada por correo postal o video por parte del usuario).

---

## 3. Criterios de Aceptación (Requisitos Funcionales en Notación EARS)

### Módulo 1: Datos Estructurados Schema.org `FAQPage` y Servicios
- **RF-1.1 (Ubicuo):** EL SISTEMA inyectará en `<script type="application/ld+json">` de `index.html` un esquema válido `@type: "FAQPage"` que contenga exactamente las 7 preguntas y respuestas de la sección `#faq`.
- **RF-1.2 (Ubicuo):** EL SISTEMA definirá en el esquema de servicio los dos paquetes comerciales con su respectivo precio en moneda nacional (`MXN`), moneda, tipo de pago y enlaces de cotización.
- **RF-1.3 (Ubicuo):** EL SISTEMA garantizará que el JSON-LD pase sin errores ni advertencias la validación del *Rich Results Test* de Google y de *Schema.org Validator*.

### Módulo 2: Estándar `llms.txt` para Inteligencias Artificiales
- **RF-2.1 (Ubicuo):** EL SISTEMA servirá un archivo estático en la raíz `/llms.txt` accesible públicamente vía HTTP/HTTPS con encabezado `text/plain; charset=utf-8`.
- **RF-2.2 (Ubicuo):** EL ARCHIVO `llms.txt` contendrá:
  1. Identidad: CrisDev / Cristhian Ruiz (Ingeniero de Software y Web).
  2. Especialidad: Desarrollo de páginas web y plataformas privadas para psicólogos y terapeutas con consulta privada.
  3. Servicios detallados con precios transparentes ($4,800 MXN y $5,900 MXN).
  4. Características técnicas clave (agenda inteligente, expedientes NOM-004-SSA3 con cifrado AES-256, sin comisiones por consulta, integración Zoom/Meet).
  5. Caso de éxito referenciado: PsicoLau (Neuropsicología Clínica - Laura Gómez).
  6. Canales de contacto directo (WhatsApp y correo).

### Módulo 3: Política de Rastreo Abierto en `robots.txt`
- **RF-3.1 (Ubicuo):** EL ARCHIVO `robots.txt` permitirá explícitamente el rastreo a todos los agentes (`User-agent: *`, `Allow: /`) e incluirá secciones descriptivas confirmando el acceso sin restricciones para `GPTBot`, `PerplexityBot` y `ClaudeBot`.
- **RF-3.2 (Ubicuo):** EL ARCHIVO `robots.txt` incluirá la referencia canónica hacia `Sitemap: https://cristhianruiz.dev/sitemap.xml`.

### Módulo 4: Verificación de Google Search Console
- **RF-4.1 (Opcional):** DONDE el usuario proporcione su código de verificación de Google Search Console (`google-site-verification`), EL SISTEMA lo integrará en la etiqueta `<meta name="google-site-verification" content="...">` en el `<head>` de `index.html`.
- **RF-4.2 (Ubicuo):** EL SISTEMA documentará el procedimiento operativo estándar para la indexación inmediata de URLs mediante la herramienta de inspección de URLs de Google Search Console.

---

## 4. Plan de Verificación

1. **Validación de Sintaxis JSON-LD:**
   - Validar sintácticamente que el bloque JSON-LD sea JSON válido y cumpla con el estándar de `FAQPage` y `ProfessionalService`.
2. **Validación de `llms.txt`:**
   - Confirmar que `/llms.txt` exista físicamente en la raíz del repositorio y sea servido correctamente por el servidor web local.
3. **Validación de `robots.txt` y `sitemap.xml`:**
   - Comprobar que `robots.txt` y `sitemap.xml` sean accesibles y coherentes entre sí.
4. **Ejecución de Suite de Tests Automatizados (`npm test`):**
   - Asegurar 16/16 tests pasando.
