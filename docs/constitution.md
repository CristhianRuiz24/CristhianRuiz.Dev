# Constitución del Proyecto — CrisDev

Este documento establece los principios fundamentales e innegociables que rigen todo el diseño, desarrollo, arquitectura y comunicación del portafolio y ecosistema de servicios de **CrisDev (Cristhian Ruiz - Software & Web Engineering)**.

---

## 1. Propósito y Copywriting Orientado al Negocio (Salud & Servicios)
- **Objetivo central:** Captar y convertir clientes de salud y servicios profesionales (psicólogos, dentistas, nutriólogos, etc) ofreciendo soluciones de presencia digital y arquitectura operativa.
- **Regla de comunicación:** El copy de venta y la UI deben hablar el lenguaje del cliente y sus dolores reales (agendamiento automático, expedientes clínicos seguros, control de pacientes, optimización de tiempo), **prohibiendo estrictamente la jerga técnica innecesaria** en textos comerciales.

## 2. Estética "DedSec / Cyber-Terminal" con Máxima Usabilidad
- **Paleta de color:** Fondo negro azabache (`#0A0C10`), tarjetas y contenedores en gris pizarra, acentos de alta visibilidad en Cyan Eléctrico (`#00F0FF`) y Verde Ácido (`#00FF66`) para acciones de conversión.
- **Tipografía dual:** Tipografías Monospace reservadas exclusivamente para detalles técnicos, métricas, IDs y etiquetas decorativas; tipografía Sans-Serif moderna y altamente legible para todo el contenido de lectura y venta.
- **Anti-caos visual:** Las animaciones tipo escaneo/terminal y efectos glitch son sutiles y se limitan a acentos/hover. La experiencia de usuario, formularios de contacto e información comercial deben ser 100% claros, limpios y accesibles.

## 3. Frontend Puro, Cero Dependencias Pesadas y Mobile-First
- **Stack UI:** HTML5 semántico, CSS3 moderno (con Custom Properties para control temático) y JavaScript puro (ES6+ modular).
- **Prohibiciones:** Prohibido el uso de librerías masivas/obsoletas (como jQuery), frameworks frontend sobrecargados para la landing o estilos inline.
- **Rendimiento:** Optimizado para carga instantánea, responsive mobile-first y despliegue estático en Cloudflare Pages.

## 4. Arquitectura Operativa y Datos Seguros
- **Backend & APIs:** Servicios modulares en Node.js/Express para automatización, agendamientos y comunicación.
- **Bases de Datos:** Modelado formal normalizado (3FN) en PostgreSQL / MySQL para estructuras relacionales de expedientes, o MongoDB Atlas para esquemas documentales flexibles.
- **Analítica:** Python modular para procesamiento de datos clínicos, reportería y dashboards.
- **Seguridad:** Enfoque prioritario en la privacidad, integridad y protección de información sensible de pacientes.

## 5. Convenciones e Idiomas
- **Código y Git:** Código fuente (variables, funciones, clases, IDs, nombres de archivo) y mensajes de commit redactados **estrictamente en inglés** (convención kebab-case en archivos, camelCase en JS, BEM o utilidades semánticas en CSS).
- **Interfaz (UI):** Contenido, microcopia y llamadas a la acción (CTA) redactados **en español** persuasivo y profesional.
- **Documentación:** Documentación técnica interna, especificaciones SDD, actas de sesión y guías redactadas **en español**.

## 6. Disciplina Spec-Driven Development (SDD)
- **Flujo estricto:** Ningún código de producción se escribe sin una especificación activa en `specs/`, clarificación previa y desglose de tareas.
- **Trazabilidad:** Ante cualquier cambio de comportamiento, se actualiza primero la especificación (`spec.md`) y únicamente después el código.
