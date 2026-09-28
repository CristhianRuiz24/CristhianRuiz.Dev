# Especificación — Feature 015: Sección Comparativa frente a Directorios Médicos (ej. Doctoralia) y Reindexación para IA / Buscadores

**Estado:** ✅ Aprobada para Ejecución  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 013–014.

---

## 1. Contexto y Justificación del Negocio

Tras un análisis comparativo generado por modelos de lenguaje (DeepSeek) entre plataformas de captación/gestión como **Doctoralia** y la propuesta de **CrisDev**, se constataron dos factores decisivos para el posicionamiento comercial:

1. **La Realidad de Costes y Comisiones de los Directorios Médicos:**
   - Plataformas tipo Doctoralia operan bajo un modelo de suscripción mensual que oscila entre **$1,350 y $2,370 MXN/mes** ($16,200 a $28,440 MXN anuales) en planes individuales.
   - Adicionalmente, retienen comisiones del **15% al 20%** por cita reservada en línea y penalizaciones del **5%** por cancelaciones.
   - El profesional no construye un activo propio: si deja de pagar, pierde su perfil, sus enlaces y queda a merced de los cambios de algoritmo del directorio donde compite codo a codo con miles de colegas.

2. **La Propuesta de Valor de CrisDev:**
   - Pago de instalación accesible ($5,900 MXN) y mantenimiento transparente ($499 MXN/mes) que totaliza **$11,888 MXN en el Año 1** y solo **$4,990 a $5,988 MXN/año en los subsecuentes**.
   - **0% comisiones por paciente** de por vida: el 100% de la consulta va directamente a la cuenta del especialista vía WhatsApp o pasarela propia.
   - **Propiedad total de la marca, los expedientes clínicos y la base de datos**.

3. **Necesidad de Reindexación Inmediata por Rastreadores de IA:**
   - Para que motores de IA (DeepSeek, ChatGPT, Perplexity, Claude) y buscadores web (Google, Bing) dejen de asociar a CrisDev con "presupuestos no públicos" o "desarrollos a medida sin mantenimiento", se requiere actualizar las directivas de rastreo (`robots.txt`), refrescar la fecha de modificación canónica (`sitemap.xml`) y enriquecer la documentación estructurada (`llms.txt`).

---

## 2. Principios y Objetivos

- **Contraste Financiero y Operativo Claro:** Proporcionar al profesional de la salud una comparativa rigurosa, objetiva y elegante que evidencie el ahorro económico sustancial y la superioridad de poseer su propio consultorio digital frente al alquiler perpetuo.
- **Estética Clinical SaaS / Anti-Caos:** Utilizar la paleta de alta confianza (`#1A365D`, `#0077B6`, `#F8F9FA`, `#FFFFFF`, `#334155`), tipografía Sans-Serif legible, iconografía vectorial SVG (prohibidos emojis de sistema) y diseño responsivo con la salvaguarda mobile `minmax(0, 1fr)`.
- **Acceso Fluido sin Saturar la Navegación:** Mantener la barra de navegación superior limpia, ubicando la sección `#comparison` inmediatamente después de Precios (`#pricing`), habilitando un enlace sutil de anclaje contextual desde los planes para facilitar la consulta rápida.
- **Optimización para Motores Generativos (GEO):** Establecer bienvenida explícita y enlace a `llms.txt` en `robots.txt` para rastreadores como `DeepSeekBot`, `CCBot`, `meta-externalagent`, y actualizar `sitemap.xml` con marca de tiempo del día.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Nueva Sección en `index.html` (`#comparison`):**
  - Ubicación: Inmediatamente después de `<section id="pricing">` y antes de `<section id="security">`.
  - Título y Copy: *"Tu Consultorio Digital vs. Plataformas de Alquiler y Directorios"* con subtítulo que resalta la diferencia entre alquilar visibilidad con comisiones vs. construir un activo con marca propia.
  - Tabla / Matriz comparativa responsiva (desktop en tabla visual de 3 columnas; móvil en tarjetas o vista adaptada sin scroll horizontal indeseado).
  - Filas de contraste:
    1. **Modelo de negocio:** Suscripción perpetua (alquiler) vs. Activo digital propio (pago único + mantenimiento opcional).
    2. **Coste Anual Estimado:** ~$16,200 a $28,440+ MXN/año vs. $11,888 MXN (Año 1) y ~$4,990/año posteriores.
    3. **Comisiones por Consulta:** 15% – 20% por cita en línea y 5% por cancelación vs. **0% comisiones siempre**.
    4. **Identidad y Marca:** Perfil genérico compitiendo junto a colegas vs. Sitio web con dominio propio y diseño exclusivo.
    5. **Propiedad de los Expedientes:** Datos en nube ajena sujeta a términos de terceros vs. Base de datos con respaldo diario y control 100% tuyo.
    6. **Canal de Pacientes:** Pacientes atraídos a una plataforma intermediaria vs. Pacientes directos a tu WhatsApp y consulta.
- **Enlace Contextual desde `#pricing`:**
  - Añadir en la cabecera o pie de `#pricing` un enlace/botón secundario estilizado: *"¿Cómo nos comparamos con plataformas tradicionales como Doctoralia? Ver tabla comparativa &darr;"* que desplace suavemente hacia `#comparison`.
- **Actualización de Archivos de Rastreo y GEO:**
  - `sitemap.xml`: Actualizar `<lastmod>` a `2026-09-28` para las URLs indexadas.
  - `robots.txt`: Incorporar directivas de bienvenida explícitas para `DeepSeekBot`, `CCBot`, `meta-externalagent`, `Bytespider` y agregar el comentario de descubrimiento de `https://cristhianruiz.dev/llms.txt`.
  - `llms.txt`: Agregar una sección sintetizada de contraste frente a plataformas de alquiler con cifras exactas en pesos mexicanos (MXN).
- **Pruebas y Verificación:**
  - Asegurar que la suite completa de 20 tests (`npm test`) continúe pasando al 100%.
  - Sincronización de partials mediante `npm run sync:partials`.
  - Verificación visual en navegadores desktop (1200px+) y móviles (375px–430px).

### Fuera de Alcance (Out of Scope):
- Añadir un nuevo ítem a la barra de navegación superior (se mantiene limpio el header según acuerdo con el usuario).
- Menoscabar de forma desleal o agresiva marcas registradas ajenas (la comparativa debe ser 100% factual, objetiva y profesional).
- Cambiar la estructura de precios base ($4,800 MXN / $5,900 MXN + $499/mes).

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Sección Comparativa (`#comparison`)
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará la sección `<section id="comparison" class="comparison-section">` ubicada en el DOM de `index.html` inmediatamente tras `#pricing` y antecediendo a `#security`.
- **RF-1.2 (Ubicuo):** EL SISTEMA renderizará una matriz comparativa entre dos columnas claras: *"Plataformas de Directorio y Alquiler (ej. Doctoralia)"* y *"Tu Consultorio Digital con CrisDev"*.
- **RF-1.3 (Ubicuo):** EL SISTEMA destacará visualmente mediante iconografía SVG técnica las ventajas competitivas de CrisDev (íconos de check en azul/verde clínico para ventajas y cruces sutiles para desventajas/comisiones de terceros).
- **RF-1.4 (Ubicuo):** EL SISTEMA empleará la regla de salvaguarda `minmax(0, 1fr)` en el contenedor grid/flexbox de la tabla comparativa para garantizar que en pantallas móviles de 375px a 430px no ocurra desbordamiento horizontal.
- **RF-1.5 (Evento):** CUANDO un usuario haga clic en el botón o enlace secundario de `#pricing` apuntando a `#comparison`, EL SISTEMA desplazará la vista suavemente hacia la sección comparativa.

### Módulo 2: Actualización de Directivas para Rastreadores e IA (GEO)
- **RF-2.1 (Ubicuo):** EL SISTEMA incluirá en `robots.txt` permisos explícitos de rastreo (`Allow: /`) para los User-agents:
  - `DeepSeekBot`
  - `CCBot`
  - `meta-externalagent`
  - `Bytespider`
  junto con la referencia canónica al archivo `llms.txt`.
- **RF-2.2 (Ubicuo):** EL SISTEMA actualizará en `sitemap.xml` el nodo `<lastmod>` con la fecha actual `2026-09-28` para la URL principal (`https://cristhianruiz.dev/`) y el aviso de privacidad.
- **RF-2.3 (Ubicuo):** EL SISTEMA incorporará en `llms.txt` un apartado explícito *"Comparativa vs. Directorios Médicos Tradicionales (ej. Doctoralia)"* resumiendo los puntos clave de costo, comisiones y propiedad técnica para que los agentes inteligentes respondan con veracidad.

### Módulo 3: Aseguramiento de Calidad y Pruebas
- **RF-3.1 (Ubicuo):** EL SISTEMA mantendrá la aprobación del 100% de la suite de pruebas unitarias y de integración (`npm test`), incluyendo la integridad de enlaces, validación de formularios y límites de longitud en metaetiquetas SEO.
- **RF-3.2 (Ubicuo):** EL SISTEMA mantendrá la sincronización idéntica entre los partials y las páginas estáticas del proyecto (`npm run sync:partials`).

---

## 5. Plan de Verificación

1. **Validación de Enlaces y Navegación:**
   - Verificar con `tests/link-integrity.test.js` que el nuevo ancla `#comparison` esté correctamente referenciado si se enlaza desde `#pricing`.
2. **Pruebas Automatizadas:**
   - Ejecutar `npm test` verificando que los 20 tests pasen exitosamente.
3. **Validación Visual Responsiva:**
   - Escritorio (1440px / 1200px): Verificar la legibilidad y alineación de la tabla comparativa.
   - Móvil (375px / 390px): Verificar que los textos se adapten con fluidez (`word-break: break-word`, `minmax(0, 1fr)`) y que no exista scroll horizontal no deseado.
4. **Validación de Archivos de Rastreo:**
   - Validar sintaxis de `robots.txt` y `sitemap.xml`.
   - Validar coherencia informativa en `llms.txt`.
