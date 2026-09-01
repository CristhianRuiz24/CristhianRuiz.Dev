/**
 * CrisDev // Global Application Configuration
 * Author: Cristhian Ruiz - Software & Web Engineering
 */

export const CONFIG = {
  // WhatsApp Configuration (Número oficial de Cristhian Ruiz)
  whatsappNumber: "528130938884",
  whatsappBaseMessage: "Hola Cristhian, soy [Nombre] de [Consultorio / Clínica] y me gustaría consultar sobre una página web o sistema para mi consulta.",

  // Form API Configuration (Cloudflare Pages Function / Resend API)
  formEndpointUrl: "/api/contact",
  simulationDelayMs: 800,

  // UI System States
  systemVersion: "v1.0.0-cyber-terminal",
  operatorName: "Cristhian Ruiz"
};

/**
 * Generates an encoded WhatsApp direct link
 * @param {string} customMessage - Optional message override
 * @returns {string} Fully structured WhatsApp URL
 */
export function getWhatsAppUrl(customMessage = null) {
  const message = customMessage || CONFIG.whatsappBaseMessage;
  const cleanNumber = CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
