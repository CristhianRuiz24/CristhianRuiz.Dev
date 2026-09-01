# Aprendizajes / propuestas de regla

Cuando el agente nota un patrón que debería volverse regla fija
(en GEMINI.md, AGENTS.md o la constitución) pero no está autorizado a
aplicarlo solo, lo anota aquí para que tú decidas si lo promueves.

## Propuestas pendientes

*No hay propuestas pendientes por el momento.*

## Reglas promovidas a AGENTS.md

- [x] **CSS Grid & Flexbox Mobile Safeguard (`minmax(0, 1fr)`):** En layouts responsivos, declarar siempre `minmax(0, 1fr)` en lugar de `1fr` plano y asignar `min-width: 0` / `word-break: break-word` a elementos hijos para evitar que strings largos de monospace o bloques de código fuercen el ancho `min-content` y desborden la pantalla en smartphones — *Promovida a `AGENTS.md` el 2026-09-01*.
- [x] **Iconografía Técnica vs Emojis de Sistema (Cero emojis):** Prohibido el uso de emojis Unicode estándar en la interfaz; usar exclusivamente iconos vectoriales SVG con `stroke="currentColor"` y efectos neon glow (Cyan/Azul/Verde) para mantener coherencia técnica y sobriedad — *Promovida a `AGENTS.md` el 2026-09-01*.
