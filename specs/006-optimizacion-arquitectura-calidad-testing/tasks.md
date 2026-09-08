# Tareas — Feature 006: Optimización de Arquitectura, DRY, Testing Automatizado y Git Governance

Referencia: `specs/006-optimizacion-arquitectura-calidad-testing/plan.md`

| ID | Tarea | Archivos afectados | Estado | Criterio de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Extracción de Partials y Script DRY (`sync-partials.js`) | `partials/header.html`, `partials/footer.html`, `scripts/sync-partials.js`, `package.json` | ✅ hecho | Al ejecutar `node scripts/sync-partials.js`, `index.html` y `aviso-de-privacidad.html` actualizan su header y footer automáticamente desde la fuente única en `partials/` sin discrepancias. |
| **T2** | Suite de Pruebas: Validación de Formulario y Sanitización | `tests/form-validation.test.js`, `js/form-handler.js`, `js/validation-utils.js` | ✅ hecho | Las pruebas unitarias con `node:test` validan correos válidos/inválidos, rechazo de scripts XSS y campos vacíos bajo Fail-Fast, pasando en verde (11 tests). |
| **T3** | Suite de Pruebas: Integridad de Navegación y Anclas | `tests/link-integrity.test.js` | ✅ hecho | El test escanea todos los `href="#..."` del HTML y confirma que cada ID de ancla existe efectivamente en el documento sin enlaces rotos (3 tests). |
| **T4** | Suite de Pruebas: Consistencia de Variables CSS | `tests/css-tokens.test.js`, `css/main.css` | ✅ hecho | El test analiza los archivos CSS y verifica que ninguna llamada `var(--...)` invoque variables no definidas en el sistema de diseño (detectó y corrigió `--radius-xs`, 2 tests). |
| **T5** | Git Governance: Formalización de Reglas de Aprobación | `AGENTS.md`, `GEMINI.md`, `package.json` | ✅ hecho | Se estipula en las reglas del repositorio que `git commit` y `git push` requieren autorización explícita previa; se agregó script `"test": "node --test tests/*.test.js"` a `package.json`. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
