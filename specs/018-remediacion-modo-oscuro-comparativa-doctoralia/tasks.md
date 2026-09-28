# Tareas — Feature 018: Remediación del Modo Oscuro y Scripts ES Module en Comparativa Doctoralia

**Estado:** ✅ Completado  
**Referencia:** `specs/018-remediacion-modo-oscuro-comparativa-doctoralia/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Corregir inclusión modular de scripts en `comparativa-doctoralia.html`**
  - **Archivos:** `comparativa-doctoralia.html`
  - **Alcance:** Reemplazar `<script src="js/config.js"></script>`, `<script src="js/theme-manager.js"></script>` y `<script src="js/terminal-effects.js"></script>` por la llamada canónica ES module `<script type="module" src="js/theme-manager.js?v=6.0"></script>`.
  - **Hecho cuando:** `comparativa-doctoralia.html` cargue exclusivamente el módulo `theme-manager.js` con el atributo `type="module"`. (Completado: verificado y funcionando).

- [x] **T2: Agregar prueba de regresión automatizada para scripts modulares en `tests/`**
  - **Archivos:** `tests/link-integrity.test.js`
  - **Alcance:** Añadir una aserción que inspeccione todos los archivos HTML (`index.html`, `aviso-de-privacidad.html`, `comparativa-doctoralia.html`) y verifique que si incluyen `theme-manager.js`, deben tener explícitamente `type="module"`.
  - **Hecho cuando:** `npm test` ejecute la nueva prueba y pase al 100% (25/25 pruebas en verde). (Completado: 25/25 tests aprobados en 83ms).

- [x] **T3: Validación funcional y visual en servidor local**
  - **Archivos:** Servidor local (puerto 3000)
  - **Alcance:** Probar en navegador o subagente la interacción con `.theme-toggle` en `http://localhost:3000/comparativa-doctoralia`, comprobando que conmuta `data-theme="dark"`, no hay excepciones en consola y persiste en `localStorage`.
  - **Hecho cuando:** La interacción cambie el tema a oscuro/claro y 0 errores se presenten en consola. (Completado: validado con subagente de navegador y captura de pantalla generada).

- [x] **T4: Actualización de bitácora y gobernanza Git**
  - **Archivos:** `overview/tasks.md`, `overview/session.md`
  - **Alcance:** Documentar la finalización de Feature 018 y presentar el resumen de cambios para solicitar aprobación de commit y push.
  - **Hecho cuando:** El usuario autorice y se ejecute el commit y push correspondientes. (Completado: autorizado por el usuario y ejecutado).
