/**
 * CrisDev // Input Validation & Sanitization Utilities
 * Pure functions for testability and Clean Code.
 */

export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export function validateName(name) {
  if (typeof name !== 'string') {
    return { isValid: false, error: 'Por favor, ingresa tu nombre.' };
  }
  const clean = name.trim();
  if (!clean || clean.length < 2) {
    return { isValid: false, error: 'Por favor, ingresa tu nombre (mínimo 2 caracteres).' };
  }
  return { isValid: true, value: clean };
}

export function validateContact(contact) {
  if (typeof contact !== 'string') {
    return { isValid: false, error: 'Ingresa un correo o WhatsApp de contacto.' };
  }
  const clean = contact.trim();
  if (!clean || clean.length < 5) {
    return { isValid: false, error: 'Ingresa un correo o WhatsApp válido (mínimo 5 caracteres).' };
  }

  // Check if it's an email format or a phone/whatsapp format
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);
  const isPhone = /^[+]?[\d\s-]{7,16}$/.test(clean);

  if (!isEmail && !isPhone) {
    return { isValid: false, error: 'Ingresa un formato de correo o teléfono/WhatsApp válido.' };
  }

  return { isValid: true, value: clean, type: isEmail ? 'email' : 'phone' };
}

export function validateClinic(clinic) {
  if (typeof clinic !== 'string') {
    return { isValid: false, error: 'Ingresa el nombre de tu consultorio o clínica.' };
  }
  const clean = clinic.trim();
  if (!clean || clean.length < 2) {
    return { isValid: false, error: 'Ingresa el nombre de tu consultorio o clínica.' };
  }
  return { isValid: true, value: clean };
}

export function validateNeed(need) {
  if (typeof need !== 'string') {
    return { isValid: false, error: 'Cuéntanos qué deseas mejorar o implementar.' };
  }
  const clean = need.trim();
  if (!clean || clean.length < 5) {
    return { isValid: false, error: 'Cuéntanos brevemente tu necesidad (mínimo 5 caracteres).' };
  }
  return { isValid: true, value: clean };
}

export function validateLeadPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return { isValid: false, errors: { form: 'Payload inválido' } };
  }

  const errors = {};

  const nameResult = validateName(payload.name);
  if (!nameResult.isValid) errors.name = nameResult.error;

  const contactResult = validateContact(payload.contact);
  if (!contactResult.isValid) errors.contact = contactResult.error;

  const clinicResult = validateClinic(payload.clinic);
  if (!clinicResult.isValid) errors.clinic = clinicResult.error;

  const needResult = validateNeed(payload.need);
  if (!needResult.isValid) errors.need = needResult.error;

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitized: isValid
      ? {
          name: sanitizeInput(nameResult.value),
          contact: sanitizeInput(contactResult.value),
          clinic: sanitizeInput(clinicResult.value),
          need: sanitizeInput(needResult.value)
        }
      : null
  };
}
