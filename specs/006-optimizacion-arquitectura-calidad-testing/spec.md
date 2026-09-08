# Especificación — Feature 006: Optimización de Arquitectura, DRY, Testing Automatizado y Git Governance

## 1. Propósito y Contexto
Esta especificación aborda las tres áreas de mejora detectadas en la auditoría de buenas prácticas y arquitectura de software:
1. **DRY en Componentes Compartidos (Header y Footer):** Eliminar la duplicación manual de cabecera, pie de página y metadatos comunes entre `index.html` y `aviso-de-privacidad.html`, garantizando una única fuente de verdad sin añadir frameworks pesados en el cliente (respetando KISS y YAGNI).
2. **Testing Automatizado Nativo:** Implementar una suite de pruebas automatizadas con el test runner nativo de Node.js (`node:test` / `node:assert`, cero dependencias externas) para validar la lógica de validación/sanitización del formulario, integridad de variables CSS y consistencia de enlaces de navegación (anclas y rutas).
3. **Git Governance y Protocolo de Aprobación:** Establecer reglas estrictas para el flujo de ramas (`branching`) y la prohibición absoluta de ejecutar `git commit` o `git push` sin la confirmación explícita del usuario.

---

## 2. Requisitos EARS (Criterios de Aceptación)

### Módulo A: DRY en Componentes Comunes (Header y Footer)
- **RF-1.1 (Ubicuo):** EL SISTEMA mantendrá una única fuente de verdad para el componente de cabecera (`header`) y el pie de página (`footer`) en archivos modulares (`components/header.html` y `components/footer.html`).
- **RF-1.2 (Evento):** CUANDO se ejecute el comando de ensamble estático (`npm run build` o script nativo Node `scripts/build.js`), EL SISTEMA generará las páginas HTML finales integrando los componentes compartidos y actualizando automáticamente los hashes/versiones de cache-busting en las hojas de estilo.
- **RF-1.3 (Ubicuo):** EL SISTEMA mantendrá la salida final como HTML5 estático puro para garantizar 100% de compatibilidad SEO, cero tiempo de carga adicional y compatibilidad con cualquier hosting estático (Cloudflare Pages / serve).

### Módulo B: Pruebas y Validación Automatizada (Testing)
- **RF-2.1 (Ubicuo):** EL SISTEMA dispondrá de una suite de pruebas ejecutables mediante `npm test` utilizando exclusivamente el motor nativo de Node.js (`node:test`), sin requerir librerías pesadas externas (Jest, Vitest).
- **RF-2.2 (Evento):** CUANDO se ejecute `npm test`, EL SISTEMA validará:
  1. **Sanitización y Validación de Formulario:** Entradas válidas, correos inválidos, inyecciones de código malicioso (XSS) y detección de campos obligatorios vacíos bajo el principio Fail-Fast.
  2. **Integridad de Navegación y Anclas:** Que todos los enlaces internos (`#hero`, `#web-ui`, `#infrastructure`, `#pricing`, `#security`, `#operator`, `#contact`) correspondan a IDs reales y existentes en el HTML.
  3. **Integridad de Variables CSS:** Que no existan llamadas `var(--variable-inexistente)` huérfanas en las hojas de estilo.
- **RF-2.3 (Excepción):** SI algún test unitario o chequeo de integridad falla, ENTONCES EL SISTEMA reportará el archivo, la línea y el motivo exacto de la discrepancia, terminando con código de salida 1.

### Módulo C: Git Governance y Flujo de Aprobación
- **RF-3.1 (Ubicuo):** EL SISTEMA operará bajo la regla innegociable de **Aprobación Previa de Commits**: ningún comando `git commit` o `git push` será ejecutado por el asistente sin la autorización expresa del usuario en el chat.
- **RF-3.2 (Evento):** CUANDO se inicie el desarrollo de una nueva funcionalidad o refactorización, EL SISTEMA propondrá o creará una rama aislada (`feature/<nombre>` o `fix/<nombre>`) antes de aplicar cambios estructurales, preservando la estabilidad de `main`.

---

## 3. Requisitos No Funcionales (RNF)
- **RNF-1 (Cero Dependencias en Runtime):** La solución en producción seguirá siendo HTML5, CSS3 y JavaScript Vanilla puro, sin añadir peso ni dependencias al cliente que visita la web.
- **RNF-2 (KISS y Mantenibilidad):** El script de compilación y los tests deben ser scripts de Node.js nativos cortos (menos de 100 líneas cada uno), fáciles de leer y mantener.
- **RNF-3 (Compatibilidad):** Los scripts deben ser 100% compatibles con Windows (PowerShell) y entornos CI/CD estándar.

---

## 4. Fuera de Alcance (Out of Scope)
- Migrar el proyecto a frameworks SPA como Next.js, Nuxt o React.
- Instalar herramientas de empaquetado complejas como Webpack o Vite que requieran configuración extensa.
