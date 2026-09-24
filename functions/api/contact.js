/**
 * CrisDev // Cloudflare Pages Serverless Function: Lead Dispatcher
 * Endpoint: POST /api/contact
 * Integration: Resend API (Transactional Email with Cyber-Terminal HTML Template)
 */

const ALLOWED_ORIGINS = [
  "https://cristhianruiz.dev",
  "https://www.cristhianruiz.dev",
];

function isOriginAllowed(origin) {
  if (!origin) return true; // Direct/same-origin serverless requests
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  return /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
}

function getCorsHeaders(origin) {
  const allowed = isOriginAllowed(origin);
  return {
    "Access-Control-Allow-Origin": allowed && origin ? origin : "https://cristhianruiz.dev",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

export async function onRequestOptions(context) {
  const origin = context?.request?.headers?.get("Origin") || "";
  
  if (origin && !isOriginAllowed(origin)) {
    return new Response(null, { status: 403 });
  }

  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get("Origin") || "";

  // Restrict CORS origins
  if (origin && !isOriginAllowed(origin)) {
    return new Response(
      JSON.stringify({ error: "[ERROR_FORBIDDEN]: Origen no autorizado" }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://cristhianruiz.dev",
          "Vary": "Origin",
        },
      }
    );
  }

  // Configuration & Secrets (Read securely from Cloudflare Pages Environment Variables)
  const RESEND_API_KEY = env?.RESEND_API_KEY || "";
  const RECIPIENT_EMAIL = env?.RECIPIENT_EMAIL || "cristhian.ruiz.c@hotmail.com";
  const SENDER_EMAIL = env?.SENDER_EMAIL || "CrisDev Telemetry <notificaciones@cristhianruiz.dev>";

  // Security Headers
  const responseHeaders = {
    "Content-Type": "application/json",
    ...getCorsHeaders(origin),
  };

  try {
    const payload = await request.json();
    const { name, contact, clinic, need, website, honeypot, _gotcha } = payload || {};

    // Anti-spam Honeypot: Drop bot submissions silently
    if (website || honeypot || _gotcha) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "[SYSTEM]: TRANSMISIÓN EXITOSA",
        }),
        { status: 200, headers: responseHeaders }
      );
    }

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return new Response(
        JSON.stringify({ error: "[ERROR_01]: EL PARÁMETRO 'NOMBRE' ES REQUERIDO (2-100 CARACTERES)" }),
        { status: 400, headers: responseHeaders }
      );
    }

    if (!contact || typeof contact !== "string" || contact.trim().length < 5 || contact.trim().length > 100) {
      return new Response(
        JSON.stringify({ error: "[ERROR_02]: EL PARÁMETRO 'CONTACTO (EMAIL/WHATSAPP)' ES REQUERIDO (5-100 CARACTERES)" }),
        { status: 400, headers: responseHeaders }
      );
    }

    const trimmedContact = contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
    const isPhone = /^[+]?[\d\s-]{7,20}$/.test(trimmedContact);

    if (!isEmail && !isPhone) {
      return new Response(
        JSON.stringify({ error: "[ERROR_02]: FORMATO DE CONTACTO INVÁLIDO (EMAIL O WHATSAPP)" }),
        { status: 400, headers: responseHeaders }
      );
    }

    if (!clinic || typeof clinic !== "string" || clinic.trim().length < 2 || clinic.trim().length > 100) {
      return new Response(
        JSON.stringify({ error: "[ERROR_03]: EL PARÁMETRO 'CLÍNICA O CONSULTORIO' ES REQUERIDO (2-100 CARACTERES)" }),
        { status: 400, headers: responseHeaders }
      );
    }

    if (!need || typeof need !== "string" || need.trim().length < 5 || need.trim().length > 2000) {
      return new Response(
        JSON.stringify({ error: "[ERROR_04]: ESPECIFICA EL REQUERIMIENTO O MEJORA DESEADA (5-2000 CARACTERES)" }),
        { status: 400, headers: responseHeaders }
      );
    }

    const cleanName = escapeHtml(name.trim());
    const cleanContact = escapeHtml(contact.trim());
    const cleanClinic = escapeHtml(clinic.trim());
    const cleanNeed = escapeHtml(need.trim());
    const timestamp = new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" });

    // Cyber-Terminal HTML Email Template
    const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0A0C10;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #F0F6FC;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #161B22;
      border: 1px solid #30363D;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    }
    .header {
      background-color: #0E1217;
      padding: 16px 24px;
      border-bottom: 1px solid #21262D;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .badge {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 11px;
      font-weight: 700;
      color: #0077B6;
      background-color: rgba(0, 119, 182, 0.08);
      border: 1px solid rgba(0, 119, 182, 0.25);
      padding: 4px 8px;
      border-radius: 4px;
      text-transform: uppercase;
    }
    .content {
      padding: 28px 24px;
    }
    h2 {
      margin: 0 0 8px 0;
      color: #F0F6FC;
      font-size: 20px;
      font-weight: 700;
    }
    .subtitle {
      color: #8B949E;
      font-size: 13px;
      margin: 0 0 24px 0;
      font-family: ui-monospace, monospace;
    }
    .field-card {
      background-color: #06080B;
      border: 1px solid #21262D;
      border-left: 3px solid #3B82F6;
      border-radius: 4px;
      padding: 14px 16px;
      margin-bottom: 14px;
    }
    .field-label {
      font-family: ui-monospace, monospace;
      font-size: 11px;
      font-weight: 600;
      color: #00F0FF;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      color: #F0F6FC;
      line-height: 1.5;
    }
    .field-need {
      white-space: pre-wrap;
      color: #E6EDF3;
    }
    .footer {
      background-color: #0E1217;
      padding: 14px 24px;
      border-top: 1px solid #21262D;
      font-family: ui-monospace, monospace;
      font-size: 11px;
      color: #8B949E;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span style="font-family: monospace; font-weight: 700; color: #F0F6FC; font-size: 14px;">CrisDev // Transmission Receiver</span>
      <span class="badge">[NUEVO LEAD]</span>
    </div>
    <div class="content">
      <h2>Nueva solicitud de contacto web</h2>
      <p class="subtitle">&gt; Timestamp: ${timestamp} (Hora México)</p>

      <div class="field-card">
        <div class="field-label">&gt; Nombre y Especialidad:</div>
        <div class="field-value">${cleanName}</div>
      </div>

      <div class="field-card" style="border-left-color: #00F0FF; background-color: #0d1520;">
        <div class="field-label" style="color: #60A5FA;">&gt; Medio de Respuesta (Email / WhatsApp):</div>
        <div class="field-value" style="font-weight: 700; color: #00F0FF; font-family: monospace; font-size: 16px;">${cleanContact}</div>
      </div>

      <div class="field-card">
        <div class="field-label">&gt; Consultorio / Clínica / Negocio:</div>
        <div class="field-value">${cleanClinic}</div>
      </div>

      <div class="field-card">
        <div class="field-label">&gt; Requerimiento / Proyecto:</div>
        <div class="field-value field-need">${cleanNeed}</div>
      </div>
    </div>
    <div class="footer">
      [CRISDEV_SYSTEM_NOTIFICATION] &bull; Despachado vía Cloudflare Edge &bull; Resend API
    </div>
  </div>
</body>
</html>
`;

    const emailPayload = {
      from: SENDER_EMAIL,
      to: [RECIPIENT_EMAIL],
      subject: `[CrisDev Lead] ${cleanName} (${cleanContact}) — ${cleanClinic}`,
      html: htmlBody,
    };

    if (cleanContact.includes("@")) {
      emailPayload.reply_to = cleanContact;
    }

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("[RESEND_ERROR]:", resendError);
      return new Response(
        JSON.stringify({
          error: "[ERROR_RESEND]: No fue posible procesar la solicitud en este momento",
        }),
        { status: 502, headers: responseHeaders }
      );
    }

    const resendData = await resendResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "[SYSTEM]: TRANSMISIÓN EXITOSA",
        id: resendData.id,
      }),
      { status: 200, headers: responseHeaders }
    );
  } catch (err) {
    console.error("[SERVERLESS_FUNCTION_ERROR]:", err);
    return new Response(
      JSON.stringify({
        error: "[ERROR_INTERNAL]: Error interno al procesar la solicitud",
      }),
      { status: 500, headers: responseHeaders }
    );
  }
}

/**
 * Escapes HTML characters to prevent XSS in email clients
 */
function escapeHtml(string) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return string.replace(/[&<>"']/g, (m) => map[m]);
}
