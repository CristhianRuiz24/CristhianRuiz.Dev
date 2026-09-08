# Plan Técnico — Feature 002: Modo Oscuro Clínico (Clinical Deep Navy)

## 1. Arquitectura del Frontend y Módulos Afectados

La arquitectura de tematización se basa en el principio de **Zero Dependencies**, aprovechando las Custom Properties nativas de CSS3 ya existentes en el proyecto y un despachador de eventos modular en JavaScript ES6+.

```
├── index.html                  # Script anti-FOUC en <head>, botón toggle en navbar y drawer
├── aviso-de-privacidad.html    # Script anti-FOUC en <head>, botón toggle en header
├── css/
│   ├── main.css                # Tokens de color :root [data-theme="dark"] y transiciones globales
│   └── components/
│       ├── navbar.css          # Estilos del toggle button (.theme-toggle), SVG sol/luna y alineación
│       ├── hero.css            # Adaptación de gradientes oscuros y contraste de subtítulos
│       ├── terminal.css        # Contraste de tarjetas PsicoLau y pestañas de la Suite Clínica
│       ├── trust-operator.css  # Ajuste de superficies para protocolos de seguridad y credencial
│       ├── pricing.css         # Tarjetas de paquetes, pills de ahorro y tablas comparativas
│       ├── form.css            # Inputs oscuros con borde clínico, focus state y botones
│       └── footer.css          # Consolidación del footer en modo oscuro
├── js/
│   └── theme-manager.js        # Módulo central: getTheme, setTheme, toggleTheme, initThemeListeners
└── assets/
    └── images/
        ├── logo-crisdev.svg         # Logo estándar (fondo claro)
        └── logo-crisdev-white.svg   # Logo de alto contraste (fondo oscuro)
```

---

## 2. Decisiones Técnicas y Alternativas Descartadas

### Decisión 1: Atributo `data-theme="dark"` en `<html>` vs Clase CSS `.dark`
- **Alternativa descartada:** Uso de una clase CSS tradicional (`class="dark-mode"`).
- **Motivo de elección:** El atributo `data-theme` es el estándar moderno en la industria (usado por GitHub, DaisyUI, Next.js). Permite selectores jerárquicos limpios (`[data-theme="dark"] { ... }`), evita colisiones con utilidades de diseño y facilita la consulta directa vía `document.documentElement.dataset.theme`.

### Decisión 2: Script Anti-FOUC Bloqueante Mínimo en `<head>`
- **Alternativa descartada:** Ejecutar la lógica de tema en `DOMContentLoaded` o tras cargar un archivo `.js` diferido (`defer`).
- **Motivo de elección:** Esperar a la carga diferida produce el molesto *Flash of Light Theme* (FOUC), donde una persona en un cuarto oscuro con su móvil en modo noche recibe un destello blanco de 100-300ms antes de que se active el fondo oscuro. Se inyecta un snippet inline de solo 4 líneas en el `<head>` antes de los estilos:
  ```javascript
  (function(){
    var saved = localStorage.getItem('crisdev_theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
  ```

### Decisión 3: Paleta "Clinical Deep Navy" vs "OLED Black (#000000)"
- **Alternativa descartada:** Negro absoluto (`#000000`) estilo cyberpunk o hacker terminal.
- **Motivo de elección:** En la constitución [docs/constitution.md](file:///c:/Users/crist/Documents/Proyectos/Pagina%20web%20CrisDev%20-%20clientes/docs/constitution.md) y en la entrevista se definió una estética de confianza médica para psicólogos y profesionales de la salud. El negro puro provoca fatiga visual por alto contraste extremo (*haloing effect*). El azul medianoche profundo (`#0A0F1D` / `#0F172A`) con superficies elevadas (`#111C35` / `#17223B`) y acentos cerúleos (`#38BDF8`) genera una atmósfera de serenidad, discreción y alta tecnología clínica.

### Decisión 4: Iconografía Vectorial SVG Integrada vs Librería Externa
- **Alternativa descartada:** Cargar FontAwesome, Boxicons o librerías de fuentes de iconos de terceros.
- **Motivo de elección:** En estricto cumplimiento de la regla de cero dependencias pesadas de `AGENTS.md`, los iconos de Sol y Luna se renderizan como SVGs puros con `stroke="currentColor"`, integrados directamente en el botón y animados con transiciones CSS aceleradas por GPU (`opacity` y `transform: rotate()`).

---

## 3. Matriz de Mapeo de Tokens Cromáticos (Claro vs Oscuro)

| Variable CSS | Modo Claro (Default) | Modo Oscuro (`[data-theme="dark"]`) | Propósito |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#F8F9FA` (Blanco Hueso) | `#0A0F1D` (Deep Midnight Navy) | Fondo general del body y lienzo |
| `--bg-surface` | `#FFFFFF` (Blanco Puro) | `#111C35` (Clinical Slate Blue) | Tarjetas, paneles y contenedores |
| `--bg-surface-elevated` | `#FFFFFF` | `#17223B` (Elevated Navy Surface) | Modales, drawer móvil y dropdowns |
| `--bg-surface-translucent`| `rgba(255, 255, 255, 0.85)` | `rgba(10, 15, 29, 0.88)` | Navbar con efecto glassmorphism |
| `--text-primary` | `#1A365D` (Azul Marino Oscuro) | `#F8FAFC` (Blanco Clínico Suave) | Títulos H1..H4 y textos principales |
| `--text-secondary` | `#475569` (Gris Pizarra) | `#94A3B8` (Gris Perla Luminoso) | Párrafos comerciales y beneficios |
| `--text-muted` | `#64748B` (Gris Neutro) | `#64748B` (Azul Grisáceo) | Metadatos, etiquetas y notas legales |
| `--border-subtle` | `#E2E8F0` | `rgba(148, 163, 184, 0.14)` | Líneas de división y bordes neutros |
| `--border-muted` | `#CBD5E1` | `rgba(148, 163, 184, 0.22)` | Bordes de inputs y cards inactivas |
| `--color-accent` | `#0077B6` (Azul Cerúleo) | `#38BDF8` (Cyan Médico Luminoso) | Enlaces, acentos y hover interactivo |
| `--color-accent-subtle` | `rgba(0, 119, 182, 0.08)` | `rgba(56, 189, 248, 0.12)` | Badges y fondos suaves de énfasis |
| `--shadow-card` | `0 4px 20px rgba(0, 0, 0, 0.05)` | `0 4px 24px rgba(0, 0, 0, 0.35)` | Sombra de tarjetas y cajas |
| `--shadow-hover` | `0 8px 30px rgba(0, 119, 182, 0.12)` | `0 8px 32px rgba(56, 189, 248, 0.15)` | Elevación en estado :hover |

---

## 4. Integración del Toggle en la Barra de Navegación

Para preservar la simetría del header y el amplio desahogo (>110px) conseguido en la tarea T35:
1. **Desktop:** El botón `.theme-toggle` se coloca en la tercera columna del grid del header, inmediatamente a la izquierda del botón de WhatsApp, formando un conjunto compacto de acciones (`.header-actions` o flex contenedor).
2. **Mobile:** Se integra en la cabecera junto al botón hamburguesa para acceso instantáneo, y como opción dentro del drawer `#mobileNavDrawer`.
3. **Accesibilidad:** El botón cuenta con `role="button"`, `aria-label="Alternar entre modo claro y modo oscuro"`, y responde tanto al clic de ratón como a la tecla `Enter`/`Espacio`.
