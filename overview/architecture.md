# Arquitectura viva — CrisDev (`cristhianruiz.dev`)

Diagrama estructural del ecosistema en producción (Cloudflare Pages + Serverless Edge Functions + Resend API + WhatsApp Direct).

```mermaid
graph TD
    Client[Prospecto / Especialista de Salud] -->|HTTPS / TLS 1.3| Edge[Cloudflare Global Edge Network]
    
    subgraph Cloudflare Pages
        Edge -->|WAF & Security Headers| StaticHost[Frontend Estático: index.html & aviso-de-privacidad.html]
        Edge -->|POST /api/contact| EdgeFunction[Pages Function: functions/api/contact.js]
    end

    subgraph Módulos Principales de UI
        StaticHost --> Hero[Hero: Dualidad Calidez Web vs Blindaje Técnico]
        StaticHost --> CaseStudy[Terminal 01: Caso PsicoLau & Testimonio Real]
        StaticHost --> ClinicalSuite[Terminal 02: Mockup Interactivo Suite SaaS]
        StaticHost --> PricingSec[Sección 07: Planes y Precios Transparentes]
        StaticHost --> PrivacyPage[Aviso de Privacidad Dedicado: aviso-de-privacidad.html]
    end

    subgraph Canales de Conversión
        StaticHost -->|Click Directo con Payload| WhatsApp[WhatsApp API: wa.me/528130938884]
        EdgeFunction -->|REST API Payload| ResendAPI[Resend Transactional Email API]
    end

    subgraph Entrega & Notificación
        ResendAPI -->|Sender: notificaciones@cristhianruiz.dev| Inbox[Bandeja Oficial: cristhian.ruiz.c@hotmail.com]
        WhatsApp -->|Chat Directo 1:1| Mobile[Cristhian Ruiz - Operador de Sistemas]
    end
```

## Decisiones técnicas relevantes

- **Frontend Estático Puro (HTML5/CSS3/JS ES6+):** Cero overhead de frameworks pesados para garantizar First Contentful Paint < 0.8s en Cloudflare Pages *(31-Ago-2026)*.
- **Serverless Edge Function (`/api/contact`):** Eliminación de servidores Node.js dedicados en vivo para la landing pública, aprovechando Cloudflare Pages Functions sin costo *(31-Ago-2026)*.
- **Resend API con Dominio Propio Verificado:** Envío transaccional desde `notificaciones@cristhianruiz.dev` con `reply_to` automático al prospecto *(31-Ago-2026)*.
- **Seguridad Perimetral (`_headers`):** HSTS a 1 año, protección anti-clickjacking `X-Frame-Options: DENY`, `nosniff` y aislamiento COOP/CORP *(31-Ago-2026)*.
- **SEO Técnico & Schema.org JSON-LD:** Implementación de datos estructurados de tipo `ProfessionalService`, `robots.txt` y `sitemap.xml` para indexación óptima en Google *(31-Ago-2026)*.
- **Página Dedicada de Aviso de Privacidad (`aviso-de-privacidad.html`):** Delimitación de responsabilidades sobre datos de pacientes de terceros bajo estética Cyber-Terminal y nota de transparencia legal *(04-Sep-2026)*.
- **Módulo de Precios Transparentes (`css/components/pricing.css`):** Desglose claro de paquetes ($4,500 y $5,500 + $499/mes), esquema 50/50, dominio al costo Cloudflare y tiempo de entrega máximo de 3 semanas *(04-Sep-2026)*.
- **Mockup Interactivo Suite SaaS Clínico:** Pestañas interactivas en JS Vanilla para demostración funcional (Agenda, Expedientes, Cobranza, Contable) con 100% iconografía vectorial SVG y cero emojis de sistema *(04-Sep-2026)*.

