/**
 * CrisDev // Cloudflare Pages Serverless Function: Lead Dispatcher
 * Endpoint: POST /api/contact
 * Integration: Resend API (Transactional Email with Cyber-Terminal HTML Template)
 */

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Configuration & Secrets (Read securely from Cloudflare Pages Environment Variables)
  const RESEND_API_KEY = env?.RESEND_API_KEY || "";
  const RECIPIENT_EMAIL = env?.RECIPIENT_EMAIL || "cristhian.ruiz.c@hotmail.com";
  const SENDER_EMAIL = env?.SENDER_EMAIL || "CrisDev Notifications <onboarding@resend.dev>";

  // Security Headers
  const responseHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const payload = await request.json();
    const { name, contact, clinic, need } = payload;

    // Strict validation
    if (!name || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: "[ERROR_01]: EL PARÁMETRO 'NOMBRE' ES REQUERIDO" }),
        { status: 400, headers: responseHeaders }
      );
    }

    if (!contact || contact.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: "[ERROR_02]: EL PARÁMETRO 'CONTACTO (EMAIL/WHATSAPP)' ES REQUERIDO" }),
        { status: 400, headers: responseHeaders }
      );
    }

    if (!clinic || clinic.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: "[ERROR_03]: EL PARÁMETRO 'CLÍNICA O CONSULTORIO' ES REQUERIDO" }),
        { status: 400, headers: responseHeaders }
      );
    }

    if (!need || need.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: "[ERROR_04]: ESPECIFICA EL REQUERIMIENTO O MEJORA DESEADA" }),
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
      color: #00F0FF;
      background-color: rgba(0, 240, 255, 0.1);
      border: 1px solid rgba(0, 240, 255, 0.3);
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

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [RECIPIENT_EMAIL],
        subject: `[CrisDev Lead] ${cleanName} (${cleanContact}) — ${cleanClinic}`,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("[RESEND_ERROR]:", resendError);
      return new Response(
        JSON.stringify({
          error: "[ERROR_RESEND]: Error al procesar el correo",
          details: resendError,
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
        error: "[ERROR_INTERNAL]: Error en la función serverless",
        details: err.message,
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
