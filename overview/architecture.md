# Arquitectura viva — CrisDev (`cristhianruiz.dev`)

Diagrama estructural del ecosistema en producción (Cloudflare Pages + Serverless Edge Functions + Resend API + WhatsApp Direct + Pipeline DRY & Testing).

```mermaid
graph TD
    Client[Prospecto / Especialista de Salud] -->|HTTPS / TLS 1.3| Edge[Cloudflare Global Edge Network]
    
    subgraph Pipeline de Desarrollo & Calidad Local
        Partials[partials/: header, header-privacy, footer] -->|scripts/sync-partials.js| StaticHost[Frontend Estático: index.html & aviso-de-privacidad.html]
        ValidationUtils[js/validation-utils.js] -->|Funciones puras de validación| FormHandler[js/form-handler.js]
        ValidationUtils -->|Unit Tests| NodeTest[node:test & node:assert Suite: 20 tests]
        StaticHost -->|Link Integrity Tests| NodeTest
        CSSFiles[css/: Design Tokens] -->|Token Consistency Tests| NodeTest
    end

    subgraph Cloudflare Pages en Producción
        Edge -->|WAF & Security Headers| StaticHost
        Edge -->|POST /api/contact| EdgeFunction[Pages Function: functions/api/contact.js]
    end

    subgraph Módulos Principales de UI
        StaticHost --> Hero[Hero: Alta Conversión & Calidez Humana]
        StaticHost --> CaseStudy[Sección 02: Caso PsicoLau & Ficha Clínica]
        StaticHost --> ClinicalSuite[Sección 03: Mockup Interactivo Suite Clínica]
        StaticHost --> PricingSec[Sección 05: Planes y Precios Transparentes]
        StaticHost --> PrivacyPage[Aviso de Privacidad Dedicado: aviso-de-privacidad.html]
    end

    subgraph Canales de Conversión
        StaticHost -->|Click Directo con Payload| WhatsApp[WhatsApp API: wa.me/528130938884]
        EdgeFunction -->|REST API Payload| ResendAPI[Resend Transactional Email API]
    end

    subgraph Entrega & Notificación
        ResendAPI -->|Sender: notificaciones@cristhianruiz.dev| Inbox[Bandeja Oficial: cristhian.ruiz.c@hotmail.com]
        WhatsApp -->|Chat Directo 1:1| Mobile[Cristhian Ruiz - Software & Web Engineering]
    end
```

## Decisiones técnicas relevantes

- **Frontend Estático Puro (HTML5/CSS3/JS ES6+):** Cero overhead de frameworks pesados para garantizar First Contentful Paint < 0.8s en Cloudflare Pages *(31-Ago-2026)*.
- **Serverless Edge Function (`/api/contact`):** Eliminación de servidores Node.js dedicados en vivo para la landing pública, aprovechando Cloudflare Pages Functions sin costo *(31-Ago-2026)*.
- **Resend API con Dominio Propio Verificado:** Envío transaccional desde `notificaciones@cristhianruiz.dev` con `reply_to` automático al prospecto *(31-Ago-2026)*.
- **Seguridad Perimetral (`_headers`):** HSTS a 1 año, protección anti-clickjacking `X-Frame-Options: DENY`, `nosniff` y aislamiento COOP/CORP *(31-Ago-2026)*.
- **SEO Técnico & Schema.org JSON-LD:** Implementación de datos estructurados de tipo `ProfessionalService`, `robots.txt` y `sitemap.xml` para indexación óptima en Google *(31-Ago-2026)*.
- **Página Dedicada de Aviso de Privacidad (`aviso-de-privacidad.html`):** Delimitación de responsabilidades sobre datos de pacientes de terceros bajo estética clara y nota de transparencia legal *(04-Sep-2026)*.
- **Módulo de Precios Transparentes (`css/components/pricing.css`):** Desglose claro de paquetes ($4,500 y $5,500 + $499/mes), esquema 50/50, dominio al costo Cloudflare y tiempo de entrega máximo de 3 semanas *(04-Sep-2026)*.
- **Mockup Interactivo Suite SaaS Clínico:** Pestañas interactivas en JS Vanilla para demostración funcional (Agenda, Expedientes, Cobranza, Contable) con 100% iconografía vectorial SVG y cero emojis de sistema *(04-Sep-2026)*.
- **Modularización DRY de Componentes Compartidos (`partials/` & `scripts/sync-partials.js`):** Header y Footer abstraídos como componentes individuales inyectados automáticamente mediante marcadores HTML delimitados, eliminando duplicación de código sin añadir dependencias ni bundlers *(08-Sep-2026)*.
- **Zero-Dependency Testing con Node.js Nativo (`tests/`):** Suite de 16 pruebas automatizadas con `node:test` y `node:assert` para validación de formularios/XSS, integridad de hipervínculos/anclas y consistencia de variables CSS en <10ms, sin frameworks externos de 100MB *(08-Sep-2026)*.
- **Git Governance Estricto:** Políticas formales de control de versiones que impiden commits automáticos de IA sin aprobación explícita previa del usuario *(08-Sep-2026)*.
- **Blindaje Serverless & Anti-Spam Zero-Dependency (`functions/api/contact.js`):** Restricción estricta de CORS a orígenes propios, trampa Honeypot invisible para descarte silencioso de bots sin requerir CAPTCHAs pesados, validación backend redundante y enmascaramiento de trazas de excepción interna *(23-Sep-2026)*.
- **Modularización CSS de Privacidad y Purgado de Assets:** Extracción de estilos a `css/components/privacy.css`, eliminación de `@import` bloqueante de Google Fonts y purgado de 7 imágenes huérfanas (~580 KB) *(23-Sep-2026)*.
- **Generative Engine Optimization (GEO) & Estándar `/llms.txt`:** Implementación del estándar emergente `/llms.txt` en la raíz para proporcionar contexto estructurado, precios y capacidades a modelos de lenguaje (ChatGPT, Claude, Perplexity y Gemini) *(24-Sep-2026)*.
- **Schema.org `@graph` Unificado (`FAQPage` + `ProfessionalService` + `Person`):** Estructura JSON-LD interconectada para habilitar Rich Snippets (acordeones de FAQ) en Google Search y facilitar citas directas en motores de búsqueda de IA *(24-Sep-2026)*.
- **Políticas de Indexación para Agentes de IA (`robots.txt`):** Bienvenida explícita a rastreadores de IA (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`) sin restricciones y vinculación de sitemap canónico *(24-Sep-2026)*.


