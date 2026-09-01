# Aprendizajes / propuestas de regla

Cuando el agente nota un patrón que debería volverse regla fija
(en GEMINI.md, AGENTS.md o la constitución) pero no está autorizado a
aplicarlo solo, lo anota aquí para que tú decidas si lo promueves.

## Propuestas pendientes

- [ ] **CSS Grid & Flexbox Mobile Safeguard (`minmax(0, 1fr)`):** En layouts responsivos, declarar siempre `minmax(0, 1fr)` en lugar de `1fr` plano y asignar `min-width: 0` / `word-break: break-word` a elementos hijos para evitar que strings largos de monospace o bloques de código fuercen el ancho `min-content` y desborden la pantalla en smartphones — *Surgió al corregir desbordamiento en Terminal 01 en pantallas móviles, 2026-08-31*.
