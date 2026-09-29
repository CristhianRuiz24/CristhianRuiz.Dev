# Tareas — Feature 022: Clarificación de Propiedad de Activos y Software Clínico Gestionado

**Estado:** ✅ Completado  
**Referencia:** `specs/022-clarificacion-propiedad-activos-y-software-gestionado/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [x] **T1: Actualización de Copy en Tabla Comparativa de `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:** Modificar la celda de *Modelo de Propiedad* en `#comparison` sustituyendo el texto por:
    `<strong>Soberanía de datos y web propia:</strong> Tu sitio web, dominio y base de datos de pacientes te pertenecen al 100%. El panel clínico opera como software gestionado en la nube con mantenimiento y seguridad continuos.`
  - **Hecho cuando:** La tabla comparativa en `index.html` muestre esta redacción sin frases que afirmen que el código del panel se entrega como propiedad del cliente.

- [x] **T2: Actualización de Copy en Matriz Comparativa de `comparativa-doctoralia.html`**
  - **Archivos:** `comparativa-doctoralia.html`
  - **Alcance:** Modificar la fila de *Modelo Económico* sustituyendo *"el software clínico son tuyos"* por:
    `<strong>Soberanía de datos y web propia:</strong> Tu sitio web, dominio y base de datos de pacientes son 100% tuyos (exportables en cualquier momento). El panel clínico opera como software gestionado con seguridad y respaldos continuos.`
  - **Hecho cuando:** La fila de la matriz en `comparativa-doctoralia.html` no contenga la frase errónea y refleje la distinción exacta.

- [x] **T3: Sincronización de la Matriz Comparativa en `/llms.txt`**
  - **Archivos:** `llms.txt`
  - **Alcance:** Actualizar la fila `Modelo` en la tabla comparativa de `llms.txt` para que declare con exactitud:
    `**Soberanía de datos y web propia:** Tu sitio web, dominio y base de datos te pertenecen al 100%. El panel clínico opera como software gestionado en la nube.`
  - **Hecho cuando:** `/llms.txt` esté 100% sincronizado con la landing.

- [x] **T4: Incorporación de Pregunta sobre Propiedad en FAQ y Schema.org de `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:**
    - Agregar una nueva tarjeta de pregunta frecuente en `#faq`:
      * *¿De quién es la propiedad de mi página web y de los expedientes de mis pacientes?*
      * Respuesta detallando dominio propio, web estática propia, base de datos privada NOM-004 exportable y panel clínico como software gestionado en la nube.
    - Sincronizar el bloque `<script type="application/ld+json">` (`FAQPage`) añadiendo la entidad de la pregunta.
  - **Hecho cuando:** La pregunta sea interactiva y legible en el FAQ y el JSON-LD valide limpiamente.

- [x] **T5: Sincronización de FAQ y Schema.org en `comparativa-doctoralia.html`**
  - **Archivos:** `comparativa-doctoralia.html`
  - **Alcance:**
    - Incorporar la misma aclaración en la sección de preguntas frecuentes de la comparativa y en su bloque Schema.org JSON-LD.
  - **Hecho cuando:** Ambas páginas compartan la misma respuesta institucional.

- [x] **T6: Pruebas Automatizadas de Integridad y Validación Visual**
  - **Archivos:** `tests/link-integrity.test.js`, Servidor local
  - **Alcance:**
    - Añadir aserciones en `tests/link-integrity.test.js` para asegurar que no existan las frases ambiguas detectadas (`"tu panel te pertenecen"`, `"el software clínico son tuyos"`).
    - Ejecutar `npm test` verificando que el 100% de las pruebas pasen.
    - Validar visualmente en el navegador el renderizado del nuevo elemento en el FAQ y la tabla comparativa.
  - **Hecho cuando:** Todas las pruebas estén en verde y la navegación no presente errores.
