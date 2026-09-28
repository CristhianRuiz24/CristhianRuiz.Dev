# Plan Técnico — Feature 018: Remediación del Modo Oscuro y Scripts ES Module en Comparativa Doctoralia

**Estado:** ✅ Aprobado  
**Referencia:** `specs/018-remediacion-modo-oscuro-comparativa-doctoralia/spec.md`

---

## 1. Arquitectura Técnica y Módulos Afectados

1. **`comparativa-doctoralia.html` (Declaración de Scripts al pie):**
   - Reemplazar la inclusión incorrecta de script clásico `<script src="js/theme-manager.js"></script>` por el estándar ES module canónico: `<script type="module" src="js/theme-manager.js?v=6.0"></script>`.
   - Eliminar las referencias a scripts innecesarios en páginas secundarias (`js/config.js` y `js/terminal-effects.js`), previniendo errores de carga y ejecución superflua de listeners.

2. **Suite de Pruebas Automatizadas (`tests/link-integrity.test.js`):**
   - Agregar una prueba automatizada que recorra todos los archivos `.html` del proyecto y asegure que cualquier referencia a `js/theme-manager.js` cuente con el atributo `type="module"`.
   - Prevenir de forma permanente regresiones de este tipo al compilar o publicar nuevas páginas.

---

## 2. Decisiones Técnicas y Alternativas Descartadas

| Decisión Técnica | Alternativa Descartada | Justificación / Motivo |
| :--- | :--- | :--- |
| **Cargar `theme-manager.js` con `type="module"` canónico** | Reescribir `theme-manager.js` a JS clásico sin `export` | `theme-manager.js` es consumido como módulo ES6 en la arquitectura principal y en `aviso-de-privacidad.html`. Mantener la arquitectura modular nativa respeta la Constitución del Proyecto y los estándares modernos de la web. |
| **Remover `config.js` y `terminal-effects.js` en `comparativa-doctoralia.html`** | Dejarlos o crear versiones vacías | `comparativa-doctoralia.html` es una página de lectura/comparativa dedicada. No contiene el simulador terminal interactivo ni la calculadora de presupuestos de `index.html`. Su inclusión solo añade peticiones de red y potenciales errores de DOM inexistente. |
| **Test automatizado en `tests/link-integrity.test.js`** | Verificación manual únicamente | La validación automatizada en `npm test` garantiza que cualquier página futura (o sincronizada mediante scripts) respete la regla de carga modular. |

---

## 3. Matriz de Trazabilidad (Spec &rarr; Plan)

| Requisito EARS | Tarea Asociada | Archivos Clave |
| :--- | :--- | :--- |
| **RF-1.1, RF-1.2, RF-1.3, RF-1.4** | **T1** | `comparativa-doctoralia.html` |
| **RF-2.1, RF-2.2** | **T2** | `tests/link-integrity.test.js` |
| **Validación Funcional y Visual** | **T3** | Navegador local (puerto 3000), `npm test` |
| **Cierre de Ciclo SDD y Documentación** | **T4** | `overview/tasks.md`, `overview/session.md` |
