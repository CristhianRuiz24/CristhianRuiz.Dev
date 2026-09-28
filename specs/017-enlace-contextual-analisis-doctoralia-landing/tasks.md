# Tareas — Feature 017: Enlace Contextual de Análisis Profundo a Comparativa Doctoralia en la Landing Principal

**Estado:** ✅ Completado  
**Referencia:** `specs/017-enlace-contextual-analisis-doctoralia-landing/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Diseñar los estilos modulares para el enlace profundo en `css/components/comparison.css`**
  - **Archivos:** `css/components/comparison.css`
  - **Alcance:** Definir `.comparison-deepdive-box`, `.comparison-callout-main` y `.comparison-deepdive-link` con tipografía contenida, acentos de color clínico, estados hover fluidos y compatibilidad multi-tema (claro y oscuro).
  - **Hecho cuando:** Los estilos existan en `comparison.css` y pasen la prueba de tokens sin errores. (Completado: verificado).

- [x] **T2: Integrar el bloque de enlace contextual en el callout de `#comparison` en `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:** Insertar en `.comparison-footer-callout` el mensaje y enlace a `comparativa-doctoralia.html`.
  - **Hecho cuando:** El enlace esté integrado en el DOM de `index.html` y apunte a `comparativa-doctoralia.html`. (Completado: integrado con texto y flecha de transición).

- [x] **T3: Sincronización de partials, validación de suite de pruebas (`npm test`) y reporte documental**
  - **Archivos:** `scripts/sync-partials.js`, `tests/link-integrity.test.js`, `overview/session.md`, `overview/tasks.md`
  - **Alcance:** Ejecutar `npm run sync:partials`, verificar que `npm test` pase al 100% (23/23 tests) y documentar la sesión.
  - **Hecho cuando:** La suite de tests pase sin fallos y la documentación refleje el cierre de la Feature 017. (Completado: 23/23 tests en verde en 59ms).
