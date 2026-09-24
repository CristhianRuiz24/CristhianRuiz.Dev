# Guía Operativa — Alta, Envío de Sitemap e Indexación Inmediata en Google Search Console y Bing Webmaster Tools

Esta guía detalla los pasos para completar la indexación en Google y Microsoft Bing (que alimenta a ChatGPT Web Search), aprovechando que la propiedad `cristhianruiz.dev` ya está verificada en Google Search Console.

---

## Paso 1: Enviar el Sitemap en Google Search Console

Dado que ya tienes abierta la consola de `cristhianruiz.dev`:

1. En el menú lateral izquierdo, bajo la sección **Indexación**, haz clic en **Sitemaps**.
2. Verás un campo que dice:  
   `https://cristhianruiz.dev/ [ Añadir un sitemap nuevo ]`
3. En el cuadro de texto, escribe únicamente:  
   `sitemap.xml`
4. Haz clic en el botón **Enviar**.
5. Google procesará el archivo en unos segundos y mostrará el estado:  
   **"Correcto"** (en verde) indicando que detectó las 2 páginas (`/` y `/aviso-de-privacidad`).

---

## Paso 2: Solicitar Indexación Inmediata de la URL Principal (Googlebot Prioritario)

Para no tener que esperar días a que el rastreador pase por su cuenta:

1. En la barra superior de Search Console (donde dice *"Inspeccionar las URL de cristhianruiz.dev"*):
2. Escribe la URL completa:  
   `https://cristhianruiz.dev/` y presiona **Enter**.
3. Google recuperará los datos del índice. Verás una pantalla que dice *"La URL no está en Google"* o *"La URL está en Google"*.
4. Haz clic en el botón **"Probar URL publicada"** (esquina superior derecha). Google tardará entre 1 y 2 minutos en simular el rastreo en vivo y confirmará que la página es apta para móviles y que el Schema.org (`FAQPage` y `ProfessionalService`) está perfecto.
5. Luego, haz clic en el botón **"Solicitar indexación"**.
6. Aparecerá un aviso emergente: *"Se ha añadido a la cola de rastreo prioritaria"*.
7. Opcional: Puedes repetir este mismo paso para `https://cristhianruiz.dev/aviso-de-privacidad`.

---

## Paso 3: Sincronizar con Bing Webmaster Tools (Alimenta a ChatGPT Web Search)

OpenAI (ChatGPT) utiliza la API de búsqueda web de Microsoft Bing para consultar páginas y citar fuentes en tiempo real.

1. Ingresa a: **[https://www.bing.com/webmasters](https://www.bing.com/webmasters/)**
2. Haz clic en **Iniciar sesión** y selecciona **Google** (usa la misma cuenta de Google con la que entraste a Search Console).
3. Bing te presentará dos opciones para añadir tu sitio:
   - Selecciona la opción recomendada: **"Importar tus sitios desde Google Search Console"**.
4. Haz clic en **Continuar** y concede los permisos de lectura de Search Console.
5. Selecciona `cristhianruiz.dev` y haz clic en **Importar**.
6. ¡Listo! Bing importará la verificación, el sitemap y la configuración de forma instantánea sin necesidad de configurar registros DNS adicionales.

---

## Paso 4: Monitoreo de Rich Snippets (Preguntas Frecuentes en Google)

En aproximadamente 24 a 48 horas:
1. En Google Search Console, en el menú lateral izquierdo aparecerá una nueva pestaña llamada **Preguntas Frecuentes (FAQ)** bajo la sección "Mejoras".
2. Ahí Google confirmará la lectura de las 7 preguntas de tu página con 0 errores, comenzando a desplegarlas como acordeones en los resultados de búsqueda.
