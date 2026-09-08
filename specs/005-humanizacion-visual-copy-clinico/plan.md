# Plan de Implementación — Feature 005: Humanización Visual y Purga Integral de Jerga Tech (Clinical Human Presence)

Referencia: `specs/005-humanizacion-visual-copy-clinico/spec.md`

## 1. Enfoque Técnico
La implementación se ejecuta directamente sobre la arquitectura CSS modular nativa y el marcado HTML5 semántico:
1. **Design System (`css/main.css`):**
   - Rediseño de `.section-tag`: remover `background-color`, `border`, `border-radius`, `padding`. Convertir a sobretítulo editorial fino (`color: var(--color-accent); font-family: var(--font-sans); font-size: 0.84rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.75rem; display: block;`).
2. **Hero Component (`css/components/hero.css` y `index.html`):**
   - Actualizar `.metric-value` a `font-family: var(--font-sans); font-weight: 800; font-size: 1.65rem; letter-spacing: -0.03em;`.
   - Eliminar los micro-iconos (rayo, %, candado pegado al número) en `index.html` y actualizar los textos descriptivos.
3. **Showcase PsicoLau (`css/components/terminal.css` y `index.html`):**
   - Reemplazar `.preview-telemetry-box` por `.project-clinical-card` en `Plus Jakarta Sans` con fondo blanco elevado, eliminando monospace y términos de telemetría.
   - Actualizar indicador de estado a `Sitio Web y Plataforma Oficial`.
   - Remover `/panel` en métrica de suite privada y actualizar chip a `Acompañamiento Cercano`.
4. **Demostración de Consultorio (`css/components/terminal.css` e `index.html`):**
   - Cambiar nombre en Navbar y footer a `Gestión de Consultas`.
   - Reemplazar `Auditoría de Pagos` por `Control de Pagos`.
   - Reemplazar `Cifrado AES-256` por `Notas 100% Confidenciales`.
   - Actualizar pilares: números sans-serif limpios, `Recordatorios Oportunos`, `Protección y Secreto Profesional`, `Balance Mensual de tu Consulta`.
5. **Seguridad, Precios y Copys Comerciales (`trust-operator.css`, `pricing.css` e `index.html`):**
   - Reemplazar pastillas encapsuladas en tarjetas de confianza por líneas limpias con checkmark (`✓`).
   - Purgar menciones de `Cloudflare`, `Landing Page`, `SEO Local`, `Blindaje`, `SaaS secuestran datos`, y `Diseño arquitecturas`.
6. **Aviso de Privacidad (`aviso-de-privacidad.html`):**
   - Sobretítulo editorial limpio y textos armónicos.

## 2. Archivos Afectados
- `css/main.css`: Reglas de `.section-tag` y badges editoriales.
- `css/components/hero.css`: Reglas de `.metric-value` sans-serif.
- `css/components/terminal.css`: Reemplazo de telemetría por ficha de caso, limpieza de cabecera de ventana y pilares.
- `css/components/trust-operator.css`: Viñetas limpias con checkmarks en lugar de pastillas al pie.
- `css/components/pricing.css`: Detalles de planes y texto amigable.
- `index.html`: Marcado de sobretítulos, métricas del hero, caso PsicoLau, demo de consultorio, seguridad, precios y navegación.
- `aviso-de-privacidad.html`: Sobretítulo y cabecera.
- `overview/tasks.md` y `overview/session.md`: Registro SDD.

## 3. Estrategia de Validación
- Comprobación visual en navegador (desktop 1536px y móvil 375px) con `browser_subagent`.
- Verificación en modo claro y modo oscuro.
- Comprobación de que no queden errores ni advertencias de consola.
