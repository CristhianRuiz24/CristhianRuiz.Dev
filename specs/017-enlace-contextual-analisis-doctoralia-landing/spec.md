# Especificación — Feature 017: Enlace Contextual de Análisis Profundo a Comparativa Doctoralia en la Landing Principal

**Estado:** ✅ Aprobada para Ejecución  
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 015 y 016.

---

## 1. Contexto y Justificación del Negocio

En la Feature 016 se publicó la página dedicada [`comparativa-doctoralia.html`](file:///home/cris/Documentos/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/comparativa-doctoralia.html) con el desglose numérico completo de tarifas ($1,350 a $2,370 MXN/mes), impacto de comisiones (15%–20%) y la proyección de ahorro a 3 años (> $40,000 MXN).

Actualmente, dicha página solo está enlazada en el pie de página (`partials/footer.html`). Para los visitantes humanos que navegan por la página principal (`index.html`) y leen la tabla comparativa (`#comparison`), existe una gran oportunidad de conversión: proporcionar un enlace contextual directo hacia el análisis profundo para aquellos terapeutas que desean ver las matemáticas y desgloses detallados antes de tomar una decisión, guiándolos sin saturar la barra de navegación superior.

---

## 2. Principios y Objetivos

- **Navegación Orgánica sin Fricción:** Brindar un punto de entrada natural dentro del bloque de cierre de la tabla comparativa (`.comparison-footer-callout`) en `index.html`.
- **Preservación de la Limpieza del Header:** Mantener la barra de navegación superior enfocada exclusivamente en el embudo central de ventas.
- **Estética Clinical SaaS y Usabilidad:** Integrar el enlace con tipografía clara, iconografía SVG sutil (`stroke="currentColor"`, cero emojis) y salvaguarda móvil `minmax(0, 1fr)`.
- **Integridad Técnica y Pruebas:** Asegurar que la suite completa de 23 tests automatizados (`npm test`) continúe pasando al 100%.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Enlace Contextual en `index.html` (`#comparison`):**
  - Añadir dentro de `.comparison-footer-callout` un bloque de enlace de lectura profunda:
    *"¿Deseas ver el desglose numérico de comisiones y la proyección de ahorro a 3 años? [Leer análisis completo de Doctoralia vs. CrisDev &rarr;](comparativa-doctoralia.html)"*.
- **Estilos Modulares en `css/components/comparison.css`:**
  - Definir la clase `.comparison-deepdive-box` y `.comparison-deepdive-link` con tipografía contenida, acentos de color clínico, estados hover fluidos y compatibilidad multi-tema (claro y oscuro).
- **Pruebas Automatizadas (`npm test`):**
  - Verificar que el enlace local `comparativa-doctoralia.html` sea validado con éxito por `tests/link-integrity.test.js`.
  - Mantener 23/23 pruebas en verde.

### Fuera de Alcance (Out of Scope):
- Modificar los enlaces de la barra de navegación superior (`partials/header.html`).
- Alterar la estructura de precios o los textos de la página dedicada `comparativa-doctoralia.html`.

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Enlace Contextual en la Landing Principal
- **RF-1.1 (Ubicuo):** EL SISTEMA presentará en `index.html`, al pie de la tarjeta comparativa (`.comparison-card`), un elemento informativo con enlace directo hacia `comparativa-doctoralia.html`.
- **RF-1.2 (Evento):** CUANDO un usuario haga clic en dicho enlace, EL SISTEMA navegará hacia la página dedicada `comparativa-doctoralia.html`.
- **RF-1.3 (Ubicuo):** EL SISTEMA adaptará el contenedor del enlace de lectura profunda para que en dispositivos móviles (375px–430px) no genere desbordamiento horizontal (`minmax(0, 1fr)` y `word-break: break-word`).

### Módulo 2: Aseguramiento de Calidad y Pruebas
- **RF-2.1 (Ubicuo):** EL SISTEMA verificará a través de `tests/link-integrity.test.js` que el enlace hacia `comparativa-doctoralia.html` exista físicamente en el repositorio.
- **RF-2.2 (Ubicuo):** EL SISTEMA mantendrá la aprobación del 100% de la suite de pruebas unitarias (`npm test`).

---

## 5. Plan de Verificación

1. **Pruebas Automatizadas:** Ejecutar `npm test` confirmando 23/23 tests pasando en verde.
2. **Sincronización:** Ejecutar `npm run sync:partials` comprobando coherencia en todos los archivos HTML.
3. **Verificación Visual:** Inspección en navegador en `http://localhost:3000/` verificando el renderizado estético del enlace en desktop y mobile.
