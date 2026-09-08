# Plan Técnico — Feature 003: Armonización Tipográfica de Botones y Elementos de Lectura

Referencia: `specs/003-harmonizacion-tipografica-botones/spec.md`

## 1. Arquitectura y Módulos Afectados

El cambio se concentra en la capa de estilos CSS del Design System y componentes relacionados:

```
css/
├── main.css                  # Clase base .btn, .btn-primary, .btn-secondary, .btn-submit
└── components/
    ├── terminal.css          # Métrica .stat-number y palabra "Privada" en PsicoLau
    ├── navbar.css            # Ajuste de botón .cta-whatsapp en cabecera desktop y móvil
    ├── hero.css              # Botones del hero .hero-actions
    ├── pricing.css           # Botones de planes de precios
    └── form.css              # Botón de envío de formulario .btn-submit
```

---

## 2. Decisiones Técnicas y Justificación

### Decisión 1: `font-family: var(--font-sans)` en la clase base `.btn`
- **Alternativa descartada:** Sobrescribir `font-family` únicamente en `.hero-actions .btn`.
- **Motivo del descarte:** Generaría inconsistencia entre el Hero y los botones del Navbar, Planes de Precios y Formulario de Contacto. El usuario notó expresamente: *"noto que pasa en casi todos los botones de la página"*. La solución correcta y mantenible es cambiar la regla en `.btn` dentro de `css/main.css`.

### Decisión 2: Eliminar `text-transform: uppercase` forzado en `.btn`
- **Alternativa descartada:** Mantener `uppercase` con `Plus Jakarta Sans`.
- **Motivo del descarte:** En español comercial, las mayúsculas sostenidas (`CONSULTAR POR WHATSAPP`) transmiten urgencia/grito y reducen la velocidad de reconocimiento léxico. Al usar `text-transform: none` (o heredar la capitalización del HTML), el texto se muestra en Title Case natural (*"Consultar por WhatsApp"*, *"Ver Planes y Precios"*), mucho más elegante, empático y humano para consultorios de salud.

### Decisión 3: Calibración de `font-weight` (600 - 700) y `letter-spacing` (-0.01em)
- En `Plus Jakarta Sans`, un peso `600` (SemiBold) o `700` (Bold) con `letter-spacing: -0.01em` otorga presencia y solidez visual idéntica a los estándares modernos de Stripe, Linear o Calm Health, sin verse endeble.

### Decisión 4: Diferenciación de `.stat-number` numérico vs textual en `terminal.css`
- Para el número `0%`: conserva `font-family: var(--font-mono);` (métrica numérica cuantitativa).
- Para la palabra *"Privada"*: se creará una clase o selector específico `.stat-word` / `.stat-number.is-text` con `font-family: var(--font-sans); font-weight: 800;` para que sus letras sean armoniosas y sin trazos angulares de consola.

---

## 3. Matriz de Componentes y Botones Auditados

| Elemento | Ubicación | Texto actual | Fuente propuesta | Estilo |
| :--- | :--- | :--- | :--- | :--- |
| **CTA Navbar Desktop** | `header .cta-whatsapp` | Consultar por WhatsApp | `Plus Jakarta Sans` | SemiBold 600, sin uppercase |
| **CTA Navbar Móvil** | `#mobileNavDrawer .cta-whatsapp` | Consultar por WhatsApp | `Plus Jakarta Sans` | SemiBold 600, sin uppercase |
| **Hero Botón Primario** | `.hero-actions .btn-primary` | Consultar por WhatsApp | `Plus Jakarta Sans` | Bold 700, sin uppercase |
| **Hero Botón Secundario** | `.hero-actions .btn-secondary` | Ver Planes y Precios | `Plus Jakarta Sans` | SemiBold 600, sin uppercase |
| **Botones de Precios** | `#pricing .btn-primary` | Elegir Plan / Consultorio Inteligente | `Plus Jakarta Sans` | Bold 700, sin uppercase |
| **Botón Cotizar a Medida** | `#pricing .pricing-custom-note .btn` | Cotizar a Medida | `Plus Jakarta Sans` | SemiBold 600, sin uppercase |
| **Botón Formulario** | `#contact .btn-submit` | Enviar Solicitud de Proyecto | `Plus Jakarta Sans` | Bold 700, sin uppercase |
| **Métrica PsicoLau** | `.case-stat-pill .stat-number` | Privada | `Plus Jakarta Sans` | ExtraBold 800 |
