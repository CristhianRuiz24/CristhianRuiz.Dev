# Tareas — Feature 023: Objeciones de Confianza Operativa (Respaldos, Exportación de Datos y Continuidad en la Nube)

**Estado:** ⬜ Pendiente de Ejecución  
**Referencia:** `specs/023-facturacion-cfdi-respaldos-y-continuidad-operativa/spec.md` y `plan.md`

---

## Desglose de Tareas Atómicas

- [ ] **T1: Integración de la pregunta sobre Respaldos y Exportación en `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:** Mantener el acordeón `<details class="faq-item">` en `#faq` con la pregunta: *¿Cómo protegen mi información y cómo puedo exportar los expedientes de mis pacientes?* y la respuesta explicando respaldos periódicos en la nube y entrega del padrón de pacientes y registros en formato estándar (CSV u hoja de cálculo) a solicitud si el cliente decide migrar.
  - **Hecho cuando:** La pregunta esté presente en `#faq` y use los términos de formato estándar sin promesas de formatos no implementados.

- [ ] **T2: Integración de la pregunta sobre Continuidad en la Nube y Soporte 1 a 1 en `index.html`**
  - **Archivos:** `index.html`
  - **Alcance:** Configurar el acordeón `<details class="faq-item">` en `#faq` con la pregunta: *¿Qué sucede si un día no estás disponible de inmediato o hay un imprevisto?* delimitando que la web pública corre en Cloudflare y el panel clínico en servidores en la nube dedicados, funcionando 24/7 con soporte directo por WhatsApp.
  - **Hecho cuando:** La pregunta distinga con precisión ambos entornos y elimine cualquier confusión con la cuota del panel.

- [ ] **T3: Purga de Menciones a CFDI en el Ecosistema Público**
  - **Archivos:** `index.html`, `comparativa-doctoralia.html`, `llms.txt`
  - **Alcance:** Remover cualquier mención de facturación fiscal CFDI del HTML visible, de los bloques Schema.org JSON-LD y de `/llms.txt`, preservando el manejo fiscal en el canal privado de WhatsApp con recibo de honorarios.
  - **Hecho cuando:** No existan cadenas que prometan públicamente timbrado CFDI en la web.

- [ ] **T4: Sincronización de Pregunta de Respaldos en `comparativa-doctoralia.html`**
  - **Archivos:** `comparativa-doctoralia.html`
  - **Alcance:** Mantener en la comparativa únicamente la pregunta de respaldos y exportación de datos en formato estándar en el HTML y en su Schema.org JSON-LD `FAQPage`.
  - **Hecho cuando:** `comparativa-doctoralia.html` esté alineada 1:1 con la landing principal sin menciones a CFDI.

- [ ] **T5: Sincronización en Schema.org JSON-LD `FAQPage` y `/llms.txt`**
  - **Archivos:** `index.html`, `llms.txt`
  - **Alcance:**
    - Reflejar en Schema.org `@graph` (`FAQPage`) de `index.html` las dos preguntas (respaldos y continuidad) sin la de CFDI.
    - Actualizar `/llms.txt` con la política de respaldos periódicos, exportación estándar y continuidad en la nube.
  - **Hecho cuando:** Schema.org valide limpiamente y `/llms.txt` no mencione timbrado CFDI público.

- [ ] **T6: Pruebas Automatizadas de Integridad y Validación**
  - **Archivos:** `tests/link-integrity.test.js`
  - **Alcance:**
    - Actualizar `tests/link-integrity.test.js` para asegurar que se validen los respaldos, la exportación estándar, la ausencia total de menciones públicas a CFDI y la ausencia de "99.9% de uptime".
    - Ejecutar `npm test` verificando que el 100% de las pruebas pasen en verde.
  - **Hecho cuando:** Todas las pruebas automatizadas pasen al 100%.
