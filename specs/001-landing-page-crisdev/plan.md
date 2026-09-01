# Plan Técnico — Feature 001: Landing Page & Portafolio Cyber-Terminal CrisDev

## 1. Arquitectura y Módulos del Frontend

### 1.1 Terminal 01: Caso de Estudio Full-Stack PsicoLau.com
- **Visual:** Mockup fiel al diseño real de `https://psicolau.com` con el isotipo de mariposa/psi, barra de navegación, tipografía limpia, paleta turquesa `#1490A6` y botón "Agenda tu consulta".
- **Enlace:** Botón interactivo a `https://psicolau.com` con target `_blank`.
- **Arquitectura Backend & Cloud:** Despliegue perimetral en Cloudflare Pages, backend REST en Node.js/Express sobre Render (`api.psicolau.com`), base de datos PostgreSQL en Supabase gestionada con Prisma ORM, autenticación JWT, hasheo Bcrypt y cifrado AES-256-GCM para expedientes.
- **Suite Clínica / Panel de Administración (`panel/`):** Demostración de las herramientas construidas a medida:
  1. Matriz de Agenda Semanal continua (7:00 a 24:00) con feedback sonoro Web Audio API.
  2. Directorio de pacientes con expedientes clínicos cifrados en 7 dimensiones.
  3. Control financiero, auditoría de pagos y reporte contable con exportación a CSV/WhatsApp.
  4. Automatización de recordatorios de citas y transferencias con WhatsApp (`wa.me`).

```
├── index.html                  # Marcado semántico HTML5 (8 secciones)
├── css/
│   ├── main.css                # Design tokens, variables CSS, reset y layout base
│   ├── components/
│   │   ├── navbar.css          # Header, logo, indicador [SYSTEM: ONLINE], CTA
│   │   ├── hero.css            # Titular de alto impacto, propuesta comercial
│   │   ├── terminal.css        # Contenedores DedSec, scanlines sutiles, badges
│   │   ├── trust-operator.css  # Protocolos de seguridad e ID de operador
│   │   ├── form.css            # Formulario, validación in-line, shake y estados
│   │   └── footer.css          # Enlaces profesionales y [END_OF_TRANSMISSION]
├── js/
│   ├── config.js               # Parámetros globales (WhatsApp, endpoints, delays)
│   ├── terminal-effects.js     # Smooth scroll, parpadeo de estado, microinteracciones
│   └── form-handler.js         # Validación EARS, inyección de logs y simulación API
└── assets/
    └── icons/                  # Iconografía SVG optimizada (escudos, candados, WhatsApp)
```

---

## 2. Contratos de Entrada / Salida y Configuración

### 2.1 Módulo de Configuración (`js/config.js`)
```javascript
export const CONFIG = {
  whatsappNumber: "5215500000000", // Modificable con el número real
  whatsappBaseMessage: "Hola Cristhian, soy [Nombre] de [Clínica/Consultorio] y me gustaría recibir asesoría técnica para mi consultorio.",
  formEndpointUrl: null, // null activa el modo simulación local (800ms)
  simulationDelayMs: 800
};
```

### 2.2 Contrato de Datos del Formulario
- **Payload de salida:**
  ```json
  {
    "name": "Dra. Laura Morales",
    "clinic": "Consultorio Psicológico Mente Serena",
    "need": "Digitalización de expedientes y agendamiento automático",
    "timestamp": "2026-08-31T15:45:00.000Z"
  }
  ```
- **Respuesta esperada (HTTP 200):**
  - Desencadena ocultamiento del formulario e inyección del bloque de confirmación en Verde Ácido (`#00FF66`).

---

## 3. Modelo de Datos para Demostración Clínica (Terminal 02)

Para la demostración en la **Terminal 02 (Arquitectura Operativa)**, se estructurará un esquema JSON representativo de un historial clínico normalizado:

```json
{
  "record_id": "EXP-2026-089",
  "security_status": "ENCRYPTED_AES256",
  "patient": {
    "uuid": "p-9a8b7c6d-5e4f",
    "anonymized_alias": "Paciente-H42",
    "clinical_history": {
      "specialty": "Psicología Clínica / Odontología",
      "consultations_count": 8,
      "last_session": "2026-08-28",
      "treatment_active": true
    }
  },
  "operational_metrics": {
    "sync_latency_ms": 12,
    "redundancy": "PostgreSQL_3NF_Replica",
    "backup_integrity": "VERIFIED"
  }
}
```

---

## 4. Decisiones Técnicas

| Decisión | Alternativa Descartada | Motivo de la Elección |
| :--- | :--- | :--- |
| **CSS3 Modular con Variables Nativas** | TailwindCSS / Bootstrap | Cero dependencias externas pesadas, carga instantánea y control absoluto de los micro-acentos neón y dark mode. |
| **JS ES6+ Modular Vanilla** | React / Vue / Astro | Sitio 100% estático orientado a conversión. Elimina overhead de hidratación y garantiza First Contentful Paint < 0.8s en Cloudflare Pages. |
| **Validación In-line DedSec con CSS Shake** | Validación HTML5 estándar (`required` popups) | Los popups nativos del navegador rompen la inmersión visual. La validación en consola con logs `> [ERROR_01]` y shake ofrece UX inmersiva y profesional. |
| **SVG / CSS para Mockups y Diagramas** | Imágenes PNG/JPG pesadas | Permite renderizado nítido e instantáneo en cualquier resolución sin ralentizar la carga inicial. |
| **Simulación de API con Fallback** | Dependencia estricta de credenciales de Formspree | Permite desarrollo, pruebas unitarias locales y validación completa offline/local. |

---

## 5. Estrategia de Verificación y Testing

1. **Pruebas de Validación de Formulario:**
   - Envío con campos vacíos -> Comprobar borde `#FF0055`, animación shake, mensajes de log `> [ERROR_01]` y bloqueo del botón a `[FALLO DE SINTAXIS...]`.
   - Envío con datos válidos -> Comprobar retardo de 800ms, mensaje de éxito en `#00FF66` y reemplazo del contenedor.
2. **Pruebas de Conversión Directa (WhatsApp):**
   - Clic en Navbar y CTA final -> Comprobar que abre `wa.me` en pestaña nueva con el URI encoding correcto.
3. **Pruebas de Responsive & Visual:**
   - Inspección en viewport móvil (375px a 430px) y escritorio (1200px a 1440px).
   - Verificación de legibilidad (Sans-Serif para copy comercial, Monospace solo para metadatos/logs).
4. **Consola del Navegador:**
   - 0 errores y 0 advertencias de JavaScript.
