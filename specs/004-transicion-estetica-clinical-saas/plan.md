# Plan Técnico — Feature 004: Transición a Estética Cálida y Humana (Clinical SaaS)

Referencia: `specs/004-transicion-estetica-clinical-saas/spec.md`

## 1. Módulos y Archivos Afectados

```
├── index.html                           # Hero metrics, section-tags, sobre mí, formulario de contacto
├── aviso-de-privacidad.html             # section-tag
css/
├── main.css                             # Estilos .section-tag (Plus Jakarta Sans, radius-full, Title Case)
└── components/
    ├── hero.css                         # .metric-value y uniformidad text-accent
    ├── trust-operator.css               # Tarjeta Sobre Mí, badges de rol, remoción de scan-line
    ├── terminal.css                     # Dots neutros en showcase y .btn-mock-copy en Plus Jakarta Sans
    └── form.css                         # Encabezado limpio de tarjeta de formulario sin terminal-dots
```

---

## 2. Decisiones Técnicas y Justificación

### Decisión 1: Píldoras `.section-tag` en `Plus Jakarta Sans` con `border-radius: var(--radius-full)`
- **Motivo:** En diseño de producto SaaS (Stripe, Linear, Notion, SimplePractice), las etiquetas de categoría sobre los títulos son pastillas suaves y refinadas. Pasar de un rectángulo monospace a una píldora suave con `Plus Jakarta Sans` transforma instantáneamente la percepción del usuario de "consola de comandos" a "plataforma de salud de élite".

### Decisión 2: Uniformidad en Banner de Métricas del Hero
- **Motivo:** Actualmente el valor `0%` tiene `text-primary` (`#1A365D`), mientras que `24/7` y `100%` tienen `text-accent` (`#0077B6`). Asignar `text-accent` a las 3 métricas produce un balance cromático perfecto, simétrico y luminoso.

### Decisión 3: Rediseño del Encabezado del Formulario de Contacto
- **Motivo:** Los puntos rojo/amarillo/verde de ventana de terminal de Linux en el formulario de contacto resultan contradictorios para un prospecto médico. Al reemplazarlos por un encabezado formal y limpio con icono SVG y título de cotización profesional, el formulario gana seriedad y calidez.

### Decisión 4: Humanización de la Tarjeta "Sobre Mí"
- **Motivo:** Eliminar la jerga residual de "Operador", "Access ID" y "Clearance" militar, presentando a Cristhian Ruiz como un Ingeniero de Software & Web enfocado en soluciones de salud, con tipografía sans-serif cálida en sus roles y credenciales.
