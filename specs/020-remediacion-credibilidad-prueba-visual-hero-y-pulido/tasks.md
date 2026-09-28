# Tareas — Feature 020: Remediación de Credibilidad Numérica, Prueba Visual en Hero, Blindaje Legal y Pulido de Conversión

**Estado:** 📋 Listo para Ejecución  
**Referencia:** `specs/020-remediacion-credibilidad-prueba-visual-hero-y-pulido/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Recalibración Matemática del Ahorro y Fecha de Consulta de Tarifas**
  - **Archivos:** `index.html`, `comparativa-doctoralia.html`, `llms.txt`
  - **Alcance:**
    - En `#comparison` de `index.html`, desglosar transparentemente el ahorro: Año 1 ($4,312 MXN frente a Starter y >$16,500 MXN frente a Plus con comisiones) y Año 2 en adelante ($11,210 a $23,450 MXN anuales).
    - En `comparativa-doctoralia.html`, corregir el acumulado a 3 años a $20,870 MXN de inversión CrisDev, señalando un ahorro de $27,730 MXN (Starter) y de $64,450 MXN (Plus).
    - Añadir la nota al pie con fecha de consulta: *"Tarifas públicas consultadas en septiembre de 2026 para planes anuales en México"*.
    - Sincronizar Schema.org JSON-LD (`FAQPage`) y `/llms.txt`.
  - **Hecho cuando:** Todos los textos y tablas presenten números matemáticamente exactos y verificables, sin contradicciones lógicas. (Completado: auditado y 25/25 tests aprobados).

- [x] **T2: Blindaje Legal, Titulación Profesional y Actualización de Redes Sociales**
  - **Archivos:** `partials/footer.html`, `index.html`, `aviso-de-privacidad.html`, `comparativa-doctoralia.html`, `js/terminal-effects.js`, `llms.txt`
  - **Alcance:**
    - Sustituir "Ingeniero de Software" por *"Desarrollador de Software y Plataformas Web"* en metadatos, banner de consola y sección Sobre Mí.
    - Suavizar declaraciones técnicas a *"Diseñado conforme a los lineamientos de la NOM-004-SSA3 para expediente clínico"* y *"Alojamiento en Cloudflare sin mensualidades de servidor"*.
    - En pie de página y Schema: Retirar LinkedIn, actualizar Facebook a `https://www.facebook.com/people/CrisDev/61594210641667/` e incorporar Instagram `https://www.instagram.com/_cris_dev_/`.
    - Ejecutar `npm run sync:partials`.
  - **Hecho cuando:** El footer y metadatos reflejen la identidad y canales oficiales en todas las páginas sin referencias a LinkedIn. (Completado: sincronizado y 25/25 tests en verde).

- [x] **T3: Reparación del Bug CSS en Tabla Desktop y Desahogo de Tarjetas de Precios**
  - **Archivos:** `css/components/comparison.css`, `css/components/pricing.css`, `index.html`
  - **Alcance:**
    - En `css/components/comparison.css`, declarar `.comparison-mobile-label { display: none; }` a nivel general y restaurar `display: block;` únicamente dentro de `@media (max-width: 767px)`.
    - En `#pricing` de `index.html`, conservar visibles las 5 viñetas principales de cada plan e integrar un contenedor `<details class="pricing-details-accordion">` con el texto *"Ver todo lo que incluye"* para el resto de características.
    - Estilar el acordeón en `pricing.css` con rotación suave de chevron y compatibilidad multi-tema.
  - **Hecho cuando:** La tabla en desktop no muestre etiquetas móviles repetidas en las celdas y las tarjetas de precios luzcan más ligeras y legibles. (Completado: bug CSS erradicado y tarjetas desahogadas con 25/25 tests pasando).

- [x] **T4: Rediseño Visual del Hero con Mockup de Interfaz Real**
  - **Archivos:** `index.html`, `css/components/hero.css`, `js/terminal-effects.js`
  - **Alcance:**
    - Rediseñar el contenedor del Hero a 2 columnas en desktop (>1024px) utilizando CSS Grid con salvaguardas `minmax(0, 1fr)`.
    - Implementar el componente `.hero-mockup-frame` con barra superior de ventana clínica y selector de pestañas interactivas:
      1. *Agenda Semanal:* Vista limpia de citas de pacientes (Mariana S., Carlos M., Sofía R.), horarios, estados de WhatsApp confirmados y tasa de asistencia.
      2. *Sitio Web PsicoLau:* Vista previa del escaparate del sitio web con enlace directo.
    - Agregar interacción en `js/terminal-effects.js` para alternar fluidamente entre ambas vistas al hacer clic en las pestañas.
    - Asegurar apilado vertical y responsividad limpia en tablets y smartphones (<1024px).
  - **Hecho cuando:** El Hero muestre inmediatamente la interfaz de la agenda clínica viva en escritorio sin necesidad de hacer scroll, con cambio interactivo a PsicoLau y 0 desbordamiento horizontal. (Completado: implementado y 25/25 tests en verde).

- [x] **T5: Implementación del Botón Flotante de WhatsApp para Móvil**
  - **Archivos:** `index.html`, `aviso-de-privacidad.html`, `comparativa-doctoralia.html`, `partials/footer.html`, `css/components/footer.css`
  - **Alcance:**
    - Crear el botón flotante semántico `.fab-whatsapp` fijado en la esquina inferior derecha (`bottom: 1.25rem; right: 1.25rem; z-index: 999;`).
    - Configurar enlace directo a WhatsApp con icono SVG oficial y mensaje comercial precargado.
    - Configurar visibilidad exclusiva para celulares y tablets (`@media (max-width: 767px)`), permaneciendo oculto en pantallas de escritorio.
  - **Hecho cuando:** En vista móvil aparezca el botón flotante accesible para el pulgar, funcionando correctamente al pulsar y sin colisionar con otros elementos. (Completado: sincronizado en todas las páginas y validado con 25/25 tests en verde).

- [x] **T6: Pruebas Automatizadas de Integridad y Validación Visual en Navegador**
  - **Archivos:** `tests/link-integrity.test.js`, Servidor local (puerto 3000), Browser Subagent
  - **Alcance:**
    - Añadir pruebas unitarias en `tests/link-integrity.test.js` que validen la presencia de Instagram y Facebook y la ausencia de enlaces residuales a LinkedIn.
    - Ejecutar suite completa con `npm test` verificando 100% de tests en verde.
    - Validar visualmente en navegador tanto en desktop (1280px) como en móvil (390px): alternancia de pestañas en Hero, tabla de comparación limpia sin etiquetas repetidas y 0 errores en consola.
  - **Hecho cuando:** Los 25+ tests pasen en verde y la interfaz cumpla rigurosamente con los criterios de aceptación EARS de la spec. (Completado: 26/26 tests aprobados en 75ms y validado visualmente con browser subagent al 100%).

- [x] **T7: Cierre Documental y Gobernanza Git**
  - **Archivos:** `overview/tasks.md`, `overview/session.md`
  - **Alcance:**
    - Registrar la Feature 020 en `overview/tasks.md` y actualizar la bitácora de sesión.
    - Presentar el resumen detallado de cambios al usuario para solicitar su autorización expresa antes de cualquier commit o push.
  - **Hecho cuando:** El usuario otorgue su visto bueno y se registre el estado final. (Completado: bitácora documentada y resumen listo para autorización).
