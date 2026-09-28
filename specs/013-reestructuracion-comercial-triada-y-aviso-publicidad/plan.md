# Plan Técnico — Feature 013: Reestructuración Comercial de Landing Page: Tríada de Oferta y Diferenciador de Aviso de Publicidad

**Estado:** 📋 Aprobado para Ejecución  
**Fecha:** 2026-09-28  
**Referencia:** `specs/013-reestructuracion-comercial-triada-y-aviso-publicidad/spec.md`

---

## 1. Arquitectura y Módulos Afectados

El objetivo de esta intervención es purgar la ambigüedad comercial ("plataformas a medida" vs. software estándar), estructurar con total nitidez la oferta para terapeutas independientes y clínicas, elevar la visibilidad de la suite de prueba operativa y posicionar el servicio de orientación en el aviso de publicidad como diferenciador normativo ético.

### Archivos Afectados:
1. `index.html`:
   - Hero Section (`#hero`): actualización de título, subtítulo, mantra, botones y badges de confianza.
   - Nueva sub-sección de valor (`#value-prop`): dualidad de Tu Página Web (personalizada) vs Tu Plataforma de Gestión (estándar CrisDev).
   - Sección Demo Operativa (`#infrastructure`): reencuadre del título y expansión del grid modular a 5 tarjetas de pilares.
   - Sección Presencia Digital (`#web-ui`): reencuadre como "Una web que representa tu práctica" y caso PsicoLau etiquetado como "Desarrollo Personalizado".
   - Sección Precios (`#pricing`): integración de viñeta de aviso de publicidad en ambos paquetes, clarificación del alcance del software estándar y bloque satélite de desarrollo a medida.
   - Bloque de Aviso de Publicidad: tarjeta informativa destacada con deslinde legal.
   - Sección Sobre Mí (`#operator`): narrativa de trato directo 1 a 1 de ingeniero a profesionista de la salud.
   - Sección FAQ (`#faq`): expansión a 10 preguntas estratégicas en acordeón `<details>`.
   - Sección Contacto (`#contact`): mensaje de cierre de marca.
   - Metadatos Schema.org JSON-LD (`@graph`): actualización de las entidades `ProfessionalService` y `FAQPage`.
2. `llms.txt`:
   - Actualización de descripciones de producto para que las IAs (ChatGPT, Perplexity, Claude) reconozcan la distinción entre la web personalizada, la plataforma estándar y los desarrollos a medida.
3. `css/components/hero.css`:
   - Adaptación de la barra de garantías del Hero (`.hero-metrics`) para tipografía editorial fluida.
4. `css/components/terminal.css`:
   - Estilos para la tarjeta/grid de la dualidad de oferta y soporte para 5 tarjetas de pilares en el grid de la demo (`.demo-pillars-grid`).
5. `css/components/pricing.css`:
   - Ajustes de estilo para el bloque informativo de aviso de publicidad y tarjeta de desarrollo a medida.
6. `partials/header.html` y `partials/footer.html`:
   - Verificación de consistencia de anclas y lemas de marca.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

### Decisión 1: Integración de la Dualidad (Web vs Plataforma) en Componente Existente vs Crear Nuevo Archivo CSS
- **Decisión adoptada:** Reutilizar las clases del sistema de diseño y componentes en `css/components/terminal.css` y `css/main.css`.
- **Alternativa descartada:** Crear un archivo `css/components/value-prop.css`.
- **Motivo:** Evita fragmentar las hojas de estilo con archivos de menos de 30 líneas. Las clases de tarjetas (`.terminal-card`, `.case-study-card`) y grids (`minmax(0, 1fr)`) ya resuelven el diseño de 2 columnas de forma robusta y probada en móviles.

### Decisión 2: Presentación del Aviso de Publicidad como Beneficio + Tarjeta de Orientación
- **Decisión adoptada:** Añadirlo como viñeta en ambos paquetes de `#pricing` y crear una tarjeta explicativa destacada dentro de la narrativa con deslinde regulatorio formal (*"CrisDev no es gestor ni despacho legal, proporciona la guía práctica"*).
- **Alternativa descartada:** Prometer la realización del trámite o cobrarlo como un servicio independiente.
- **Motivo:** Evita asumir responsabilidades de gestoría sanitaria que corresponden exclusivamente al profesionista titulado, convirtiéndolo al mismo tiempo en un valor agregado de altísima confianza percibida.

### Decisión 3: Expansión de Acordeones FAQ a 10 preguntas
- **Decisión adoptada:** Mantener `<details>` y `<summary>` nativos con la estructura modular ya estilizada en `css/components/faq.css`.
- **Alternativa descartada:** Reemplazar el acordeón por un modal o lista estática.
- **Motivo:** La estructura actual tiene 100% de accesibilidad nativa por teclado, no requiere JavaScript para abrirse y no satura la longitud vertical de la página.

---

## 3. Plan de Tareas e Implementación

1. **T1:** Hero y Sub-Hero (Claridad de Posicionamiento).
2. **T2:** Bloque de Claridad de Oferta (Dualidad: Web Personalizada vs Plataforma Estándar).
3. **T3:** Elevación y Refinamiento del Demo Operativo (`#infrastructure`) a 5 Módulos.
4. **T4:** Reencuadre de Presencia Digital y Caso PsicoLau (`#web-ui`).
5. **T5:** Precios, Guía de Aviso de Publicidad y Bloque de Desarrollo a Medida (`#pricing`).
6. **T6:** Perfil Sobre Mí (`#operator`), Contacto (`#contact`) y Preguntas Frecuentes (`#faq`).
7. **T7:** Sintonización de SEO, Schema.org JSON-LD, `llms.txt` y Metadatos.
8. **T8:** Sincronización de Partials, Validación Automatizada (`npm test`) y Verificación Visual en Navegador.
