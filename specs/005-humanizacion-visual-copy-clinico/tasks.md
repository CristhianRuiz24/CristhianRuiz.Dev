# Tareas — Feature 005: Humanización Visual y Purga Integral de Jerga Tech (Clinical Human Presence)

Referencia: `specs/005-humanizacion-visual-copy-clinico/plan.md`

| ID | Tarea | Archivos afectados | Estado | Criterio de Aceptación (Hecho cuando) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Banner de Métricas del Hero Humano y Limpio | `index.html`, `css/components/hero.css` | ✅ hecho | Los números `24/7`, `0%` y `100%` usan `Plus Jakarta Sans` extra-bold, sin micro-iconos (rayo, %, candado apelmazado) y con copys centrados en el beneficio al paciente. |
| **T2** | Erradicación de burbujas en `.section-tag` (Sobretítulos Editoriales Planos) | `css/main.css`, `index.html`, `aviso-de-privacidad.html` | ✅ hecho | Todas las etiquetas de sección pierden el fondo celeste y el borde de pastilla, mostrándose como sobretítulos editoriales finos en texto plano de acento. |
| **T3** | Ficha de Resultados PsicoLau (Purga de Telemetría, Conversión y `/panel`) | `index.html`, `css/components/terminal.css` | ✅ hecho | Se elimina la caja `.preview-telemetry-box` y el indicador `Sistema Activo`; se reemplaza por una ficha clínica en sans-serif con foco en citas y confidencialidad; se elimina `/panel` y se actualiza el chip de recomendación. |
| **T4** | Transformación de la Demo del Consultorio y Renombramiento de Menú | `index.html`, `css/components/terminal.css` | ✅ hecho | El menú se renombra a *"Gestión de Consultas"*; la demo elimina `Cifrado AES-256` y `Auditoría de Pagos`; los 3 pilares usan números sans-serif y conceptos cálidos (*"Recordatorios Oportunos"*, etc.). |
| **T5** | Purga de Jerga en Seguridad, Precios y Tarjetas de Confianza | `index.html`, `css/components/trust-operator.css`, `css/components/pricing.css`, `aviso-de-privacidad.html` | ✅ hecho | Se eliminan las pastillas al pie de tarjetas de confianza cambiándolas por checkmarks limpios; se purga `Cloudflare`, `Landing Page`, `SEO Local`, `Blindaje` y `Diseño arquitecturas`. |
| **T6** | Validación visual en Desktop y Móvil (Ambos Temas) y despliegue | Navegador, documentación SDD, Git | ✅ hecho | Se validó con `browser_subagent` en desktop y móvil que la web respire 100% como un servicio de salud de alta gama, cálido y sin jerga; 0 errores de consola JS. |

Estados: ⬜ pendiente · 🔄 en curso · ✅ hecho · ⛔ bloqueado
