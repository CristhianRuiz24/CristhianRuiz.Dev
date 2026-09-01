/**
 * CrisDev // Cyber-Terminal Contact Form Handler
 * Author: Cristhian Ruiz - Software & Web Engineering
 */

import { CONFIG } from './config.js';

class ContactFormHandler {
  constructor() {
    this.form = document.getElementById('contact-form');
    if (!this.form) return;

    this.inputName = document.getElementById('input-name');
    this.inputContact = document.getElementById('input-contact');
    this.inputClinic = document.getElementById('input-clinic');
    this.inputNeed = document.getElementById('input-need');

    this.groupName = document.getElementById('group-name');
    this.groupContact = document.getElementById('group-contact');
    this.groupClinic = document.getElementById('group-clinic');
    this.groupNeed = document.getElementById('group-need');

    this.errorName = document.getElementById('error-name');
    this.errorContact = document.getElementById('error-contact');
    this.errorClinic = document.getElementById('error-clinic');
    this.errorNeed = document.getElementById('error-need');

    this.btnSubmit = document.getElementById('btn-submit');
    this.btnSubmitText = document.getElementById('btn-submit-text');
    this.successContainer = document.getElementById('form-success');

    this.isSubmitting = false;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Clear individual errors dynamically on input
    this.inputName?.addEventListener('input', () => this.clearFieldError(this.groupName, this.errorName));
    this.inputContact?.addEventListener('input', () => this.clearFieldError(this.groupContact, this.errorContact));
    this.inputClinic?.addEventListener('input', () => this.clearFieldError(this.groupClinic, this.errorClinic));
    this.inputNeed?.addEventListener('input', () => this.clearFieldError(this.groupNeed, this.errorNeed));
  }

  clearFieldError(groupElement, errorElement) {
    if (groupElement && groupElement.classList.contains('has-error')) {
      groupElement.classList.remove('has-error');
      if (errorElement) errorElement.textContent = '';
    }
  }

  setFieldError(groupElement, errorElement, message) {
    if (!groupElement || !errorElement) return;
    groupElement.classList.remove('has-error');
    // Force reflow to re-trigger CSS shake animation if already in error state
    void groupElement.offsetWidth;
    groupElement.classList.add('has-error');
    errorElement.textContent = message;
  }

  validate() {
    let isValid = true;

    // Validate Name
    const nameVal = this.inputName ? this.inputName.value.trim() : '';
    if (!nameVal || nameVal.length < 2) {
      this.setFieldError(this.groupName, this.errorName, "> [ERROR_01]: POR FAVOR INGRESA TU NOMBRE.");
      isValid = false;
    } else {
      this.clearFieldError(this.groupName, this.errorName);
    }

    // Validate Contact (Email or WhatsApp)
    const contactVal = this.inputContact ? this.inputContact.value.trim() : '';
    if (!contactVal || contactVal.length < 5) {
      this.setFieldError(this.groupContact, this.errorContact, "> [ERROR_02]: INGRESA UN CORREO O WHATSAPP DE CONTACTO.");
      isValid = false;
    } else {
      this.clearFieldError(this.groupContact, this.errorContact);
    }

    // Validate Clinic
    const clinicVal = this.inputClinic ? this.inputClinic.value.trim() : '';
    if (!clinicVal || clinicVal.length < 2) {
      this.setFieldError(this.groupClinic, this.errorClinic, "> [ERROR_03]: INGRESA EL NOMBRE DE TU CONSULTORIO O CLÍNICA.");
      isValid = false;
    } else {
      this.clearFieldError(this.groupClinic, this.errorClinic);
    }

    // Validate Need
    const needVal = this.inputNeed ? this.inputNeed.value.trim() : '';
    if (!needVal || needVal.length < 5) {
      this.setFieldError(this.groupNeed, this.errorNeed, "> [ERROR_04]: CUÉNTANOS QUÉ DESEAS MEJORAR O IMPLEMENTAR.");
      isValid = false;
    } else {
      this.clearFieldError(this.groupNeed, this.errorNeed);
    }

    return isValid;
  }

  triggerButtonError() {
    const originalText = "[ Enviar Mensaje y Cotizar Proyecto ]";
    this.btnSubmit.classList.add('btn-error-state');
    this.btnSubmitText.textContent = "[POR FAVOR REVISA LOS DATOS INGRESADOS]";

    setTimeout(() => {
      this.btnSubmit.classList.remove('btn-error-state');
      this.btnSubmitText.textContent = originalText;
    }, 2000);
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.isSubmitting) return;

    const isValid = this.validate();
    if (!isValid) {
      this.triggerButtonError();
      return;
    }

    this.isSubmitting = true;
    this.btnSubmit.disabled = true;
    this.btnSubmitText.textContent = "[Enviando mensaje y cotización...]";

    const payload = {
      name: this.inputName.value.trim(),
      contact: this.inputContact.value.trim(),
      clinic: this.inputClinic.value.trim(),
      need: this.inputNeed.value.trim(),
      _subject: `[CrisDev Lead] ${this.inputName.value.trim()} (${this.inputContact.value.trim()}) — ${this.inputClinic.value.trim()}`,
      timestamp: new Date().toISOString()
    };

    try {
      if (CONFIG.formEndpointUrl) {
        try {
          const response = await fetch(CONFIG.formEndpointUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            // Si corre en localhost con servidor estático (serve/live-server sin wrangler), simular 800ms
            if (response.status === 404 && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
              console.info('[CRISDEV_DEV_MODE]: Endpoint /api/contact no activo en servidor estático local. Simulando éxito...');
              await new Promise((resolve) => setTimeout(resolve, CONFIG.simulationDelayMs));
            } else {
              throw new Error(`HTTP_${response.status}`);
            }
          }
        } catch (fetchErr) {
          // Si hay error de conexión local a /api/contact en local serve
          if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.info('[CRISDEV_DEV_MODE]: Simulación de entorno local ejecutada.');
            await new Promise((resolve) => setTimeout(resolve, CONFIG.simulationDelayMs));
          } else {
            throw fetchErr;
          }
        }
      } else {
        // Modo de simulación local controlado
        await new Promise((resolve) => setTimeout(resolve, CONFIG.simulationDelayMs));
      }

      this.showSuccess();
    } catch (err) {
      console.error('[CRISDEV_TRANSMISSION_ERROR]:', err);
      this.setFieldError(
        this.groupNeed,
        this.errorNeed,
        "> [ERROR_NET]: NO SE PUDO ENVIAR EL MENSAJE. POR FAVOR ESCRÍBEME DIRECTO A WHATSAPP."
      );
      this.triggerButtonError();
      this.btnSubmit.disabled = false;
      this.isSubmitting = false;
    }
  }

  showSuccess() {
    this.form.style.display = 'none';
    this.successContainer.style.display = 'flex';
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ContactFormHandler();
});
