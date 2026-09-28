# Especificación — Feature 018: Remediación del Modo Oscuro y Scripts ES Module en Comparativa Doctoralia

**Estado:** ✅ Aprobada para Ejecución
**Fecha:** 2026-09-28  
**Referencia:** Constitución del Proyecto (`docs/constitution.md`) y Features 002 y 016.

---

## 1. Contexto y Causa Raíz del Problema

Al navegar en producción a [`https://cristhianruiz.dev/comparativa-doctoralia`](https://cristhianruiz.dev/comparativa-doctoralia), el botón de cambio de tema (Sol/Luna en la cabecera) no produce ningún efecto visual al ser pulsado.

### Diagnóstico Técnico:
1. **Error de Sintaxis por Falta de `type="module"`:**
   - El archivo `js/theme-manager.js` está codificado como un módulo ECMAScript nativo (`export function ...`).
   - En `comparativa-doctoralia.html`, se declaró como un script clásico: `<script src="js/theme-manager.js"></script>`.
   - Cuando el motor V8/JavaScript del navegador interpreta un script clásico con sentencias `export`, arroja una excepción fatal bloqueante:
     `Uncaught SyntaxError: Unexpected token 'export'`.
   - Como resultado, la función `initThemeManager()` nunca llega a ejecutarse y el escuchador de eventos `click` sobre `.theme-toggle` jamás se registra en el DOM.
2. **Carga Innecesaria de Scripts no Aplicables:**
   - La página incluye `<script src="js/terminal-effects.js"></script>`, el cual intenta inicializar efectos de consola, terminal y formulario interactivo que únicamente existen en `index.html`.
   - En páginas secundarias (como `aviso-de-privacidad.html`), la arquitectura correcta solo requiere cargar el módulo de temas: `<script type="module" src="js/theme-manager.js?v=6.0"></script>`.

---

## 2. Principios y Objetivos

- **Coherencia Multi-Tema Total:** Garantizar que el cambio entre Modo Claro (*Clinical Bone White*) y Modo Oscuro (*Clinical Deep Navy*) funcione de forma instantánea y persistente en todas las páginas del ecosistema CrisDev.
- **Cero Errores de Consola:** Eliminar cualquier excepción de sintaxis o referencias a elementos inexistentes en la consola del navegador.
- **Prevención de Regresiones Automatizada:** Añadir una comprobación en la suite de pruebas automatizadas (`npm test`) que audite todas las páginas HTML y valide que ningún script modular se incluya sin el atributo `type="module"`.

---

## 3. Alcance (Scope)

### En Alcance (In Scope):
- **Corrección de Scripts en `comparativa-doctoralia.html`:**
  - Reemplazar las etiquetas de script al pie de `comparativa-doctoralia.html` por la declaración canónica:
    `<script type="module" src="js/theme-manager.js?v=6.0"></script>`.
  - Remover `<script src="js/terminal-effects.js"></script>` y `<script src="js/config.js"></script>`.
- **Prueba de Regresión Automatizada:**
  - Incorporar en la suite de pruebas unitarias (`tests/`) una validación estricta que asegure que `theme-manager.js` se cargue con `type="module"` en todos los archivos `.html` del proyecto.
- **Verificación Funcional:**
  - Comprobar que al pulsar el botón `.theme-toggle` en `comparativa-doctoralia.html`, el atributo `data-theme="dark"` se aplique a `<html>`, los colores cambien fluidamente y el estado se guarde en `localStorage`.

### Fuera de Alcance (Out of Scope):
- Modificar la lógica interna de `js/theme-manager.js` (el módulo funciona correctamente cuando se carga como `type="module"`).
- Alterar el contenido o diseño de las demás secciones de la página.

---

## 4. Requisitos Funcionales (Notación EARS)

### Módulo 1: Carga Modular y Manejador de Temas
- **RF-1.1 (Ubicuo):** EL SISTEMA declarará en `comparativa-doctoralia.html` la carga de `js/theme-manager.js` con el atributo `type="module"` y el sufijo de cache-busting `?v=6.0`.
- **RF-1.2 (Evento):** CUANDO el usuario haga clic en el botón `.theme-toggle` en `comparativa-doctoralia.html`, EL SISTEMA alternará el atributo `data-theme` entre `light` y `dark` en `documentElement`.
- **RF-1.3 (Ubicuo):** EL SISTEMA persistirá el tema seleccionado en `localStorage` bajo la clave `crisdev_theme` para que se mantenga al recargar o navegar entre páginas.
- **RF-1.4 (Ubicuo):** EL SISTEMA asegurará que al alternar el tema en `comparativa-doctoralia.html`, el logotipo de cabecera (`.brand-logo-img`) conmute entre `logo-crisdev.svg` (modo claro) y `logo-crisdev-white.svg` (modo oscuro).

### Módulo 2: Aseguramiento de Calidad y Prevención de Regresiones
- **RF-2.1 (Ubicuo):** EL SISTEMA verificará mediante `npm test` que todos los archivos HTML que referencien `theme-manager.js` incluyan estrictamente el atributo `type="module"`.
- **RF-2.2 (Ubicuo):** EL SISTEMA mantendrá la aprobación del 100% de la suite de pruebas automatizadas.

---

## 5. Plan de Verificación

1. **Pruebas Automatizadas (`npm test`):**
   - Ejecutar la suite completa y confirmar que la nueva prueba de scripts modulares pase exitosamente.
2. **Validación en Consola y Navegador:**
   - Abrir `http://localhost:3000/comparativa-doctoralia` y verificar:
     - 0 errores o advertencias en la consola de JavaScript.
     - Al hacer clic en el botón de tema, la página cambia inmediatamente a fondo azul marino oscuro (`#0A0F1D`) con texto claro (`#F8FAFC`).
     - Al refrescar la página, el modo seleccionado permanece activo sin parpadeo (Anti-FOUC).
