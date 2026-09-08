import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateName,
  validateContact,
  validateClinic,
  validateNeed,
  sanitizeInput,
  validateLeadPayload
} from '../js/validation-utils.js';

describe('Form Validation & Sanitization Suite (Node.js Native)', () => {
  describe('Name Validation', () => {
    test('should accept valid full names', () => {
      const res = validateName('Dra. Sofía Mendoza');
      assert.equal(res.isValid, true);
      assert.equal(res.value, 'Dra. Sofía Mendoza');
    });

    test('should reject empty or short names (Fail-Fast)', () => {
      assert.equal(validateName('').isValid, false);
      assert.equal(validateName('   ').isValid, false);
      assert.equal(validateName('A').isValid, false);
      assert.equal(validateName(null).isValid, false);
    });
  });

  describe('Contact (Email & WhatsApp) Validation', () => {
    test('should accept valid email addresses', () => {
      const res = validateContact('doctora.sofia@clinica.com');
      assert.equal(res.isValid, true);
      assert.equal(res.type, 'email');
    });

    test('should accept valid WhatsApp / Phone numbers', () => {
      const res = validateContact('+52 81 3093 8884');
      assert.equal(res.isValid, true);
      assert.equal(res.type, 'phone');
    });

    test('should reject invalid contacts', () => {
      assert.equal(validateContact('abc').isValid, false);
      assert.equal(validateContact('correo_sin_arroba.com').isValid, false);
      assert.equal(validateContact('').isValid, false);
    });
  });

  describe('Clinic and Need Validation', () => {
    test('should validate clinic name', () => {
      assert.equal(validateClinic('Centro de Psicología Integral').isValid, true);
      assert.equal(validateClinic('C').isValid, false);
    });

    test('should validate need description', () => {
      assert.equal(validateNeed('Necesito organizar mis citas y cobrar por WhatsApp').isValid, true);
      assert.equal(validateNeed('Hola').isValid, false);
    });
  });

  describe('Sanitization & Anti-XSS', () => {
    test('should escape dangerous HTML characters to prevent XSS', () => {
      const dirty = '<script>alert("hack")</script>';
      const clean = sanitizeInput(dirty);
      assert.equal(clean, '&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt;');
    });

    test('should escape quotes and angle brackets', () => {
      const dirty = `<b onmouseover='alert(1)'>Test</b>`;
      const clean = sanitizeInput(dirty);
      assert.equal(clean, '&lt;b onmouseover=&#x27;alert(1)&#x27;&gt;Test&lt;/b&gt;');
    });
  });

  describe('Full Payload Validation', () => {
    test('should validate and sanitize clean payload successfully', () => {
      const raw = {
        name: ' Lic. Roberto Carrillo ',
        contact: 'roberto@psicologia.mx',
        clinic: 'Consultorio Privado Neuro',
        need: 'Quiero una plataforma para gestionar mis expedientes'
      };

      const result = validateLeadPayload(raw);
      assert.equal(result.isValid, true);
      assert.equal(result.sanitized.name, 'Lic. Roberto Carrillo');
      assert.equal(result.sanitized.contact, 'roberto@psicologia.mx');
    });

    test('should collect all validation errors when multiple fields are invalid', () => {
      const raw = {
        name: '',
        contact: 'bad',
        clinic: '',
        need: 'no'
      };

      const result = validateLeadPayload(raw);
      assert.equal(result.isValid, false);
      assert.ok(result.errors.name);
      assert.ok(result.errors.contact);
      assert.ok(result.errors.clinic);
      assert.ok(result.errors.need);
    });
  });
});
