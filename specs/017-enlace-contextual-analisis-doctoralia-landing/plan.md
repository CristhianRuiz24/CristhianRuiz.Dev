# Plan Técnico — Feature 017: Enlace Contextual de Análisis Profundo a Comparativa Doctoralia en la Landing Principal

**Estado:** ✅ Aprobado  
**Referencia:** `specs/017-enlace-contextual-analisis-doctoralia-landing/spec.md`

---

## 1. Arquitectura Técnica y Módulos Afectados

1. **`index.html` (Sección `#comparison`):**
   - En el pie de la tarjeta `.comparison-card`, dentro de `.comparison-footer-callout`:
     - Incorporación de un contenedor de lectura profunda `.comparison-deepdive-box`.
     - Texto de contexto y enlace semántico: `href="comparativa-doctoralia.html"`.
2. **`css/components/comparison.css`:**
   - Declaración de las clases `.comparison-deepdive-box` y `.comparison-deepdive-link`.
   - Efecto hover con micro-transición en la flecha SVG (`transform: translateX(4px)`).
   - Uso estricto de variables del sistema (`--color-accent`, `--text-secondary`, `--bg-surface-elevated`).
3. **Suite de Pruebas (`tests/`):**
   - Validación automática de la existencia física del archivo local referenciado mediante `tests/link-integrity.test.js`.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

| Decisión Técnica | Alternativa Descartada | Justificación / Motivo |
| :--- | :--- | :--- |
| **Enlace integrado en el callout inferior de `#comparison`** | Añadir un botón gigante que compita con el CTA principal | El objetivo principal de la landing sigue siendo que el usuario inicie su consultorio o contacte por WhatsApp. El enlace a la comparativa profunda debe ser una opción secundaria elegante para el perfil analítico, sin canibalizar el botón principal. |
| **Uso de enlace relativo limpio `comparativa-doctoralia.html`** | Enlace absoluto `https://cristhianruiz.dev/...` | Los enlaces relativos funcionan tanto en entorno de desarrollo local (`localhost:3000`) como en producción en Cloudflare Pages, y son auditados por la suite de pruebas automatizadas. |

---

## 3. Matriz de Trazabilidad (Spec &rarr; Plan)

| Requisito EARS | Tarea Asociada | Archivos Clave |
| :--- | :--- | :--- |
| **RF-1.1, RF-1.2, RF-1.3** | **T1** | `index.html`, `css/components/comparison.css` |
| **RF-2.1, RF-2.2** | **T2** | `tests/link-integrity.test.js`, `npm test` |
| **Verificación Global** | **T3** | Verificación en navegador y documentación SDD |
