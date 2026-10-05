/**
 * ==========================================================================
 * SAVINGS CALCULATOR MODULE — CrisDev
 * Pure calculation logic and interactive DOM handler for 3-year ROI
 * ==========================================================================
 */

/**
 * Calculates 3-year subscription costs, CrisDev investment, and net savings.
 * 
 * @param {number} monthlyExpense - Monthly fee paid to traditional SaaS or directories (in MXN)
 * @param {'pkg1' | 'pkg2' | 'pkg3'} packageType - 'pkg1' ($4,800), 'pkg2' ($5,900 + renewals), 'pkg3' ($1,900 + $499/mo)
 * @returns {object} Calculation breakdown
 */
export function calculateSavings(monthlyExpense, packageType = 'pkg1') {
  const expense = Math.max(0, Number(monthlyExpense) || 0);
  const saasTotal = expense * 36;
  
  // Package 01: $4,800 single payment. Hosting $0/mo.
  // Package 02: $5,900 Year 1 + $4,990/year for Years 2 and 3 = $15,880 total at 3 years.
  // Package 03: $1,900 setup + ($499/mo * 36) = $19,864 total at 3 years.
  let crisdevTotal = 4800;
  if (packageType === 'pkg2') {
    crisdevTotal = 15880;
  } else if (packageType === 'pkg3') {
    crisdevTotal = 19864;
  }

  const netSavings = saasTotal - crisdevTotal;
  const isConsultative = netSavings <= 0;
  
  // Real ROI in months
  let roiMonths = 0;
  if (!isConsultative && expense > 0) {
    if (packageType === 'pkg1') {
      // Single upfront payment with $0/mo maintenance in Cloudflare
      roiMonths = Math.ceil(4800 / expense);
    } else if (packageType === 'pkg2') {
      // Package 02: Year 1 upfront investment is $5,900 (hosting/panel included in Year 1).
      // If expense >= 492 MXN/mo ($5,900 / 12), it pays off within the first year.
      if (expense >= 492) {
        roiMonths = Math.ceil(5900 / expense);
      } else {
        // If expense < 492 but netSavings > 0 (between 442 and 491 MXN/mo),
        // Year 2 renewal is $4,990 ($10,890 total).
        roiMonths = Math.ceil(10890 / expense);
      }
    } else if (packageType === 'pkg3') {
      // Package 03: Initial setup is $1,900. Monthly maintenance is $499.
      // Net monthly savings = expense - 499.
      const monthlySavings = expense - 499;
      if (monthlySavings > 0) {
        roiMonths = Math.ceil(1900 / monthlySavings);
      }
    }
  }

  return {
    monthlyExpense: expense,
    packageType,
    saasTotal,
    crisdevTotal,
    netSavings,
    roiMonths,
    isConsultative
  };
}

/**
 * Formats a number into clean Mexican Pesos string ($XX,XXX MXN).
 * Correctly positions the negative sign before currency symbol (-$X,XXX MXN).
 * 
 * @param {number} amount 
 * @param {boolean} includeSign 
 * @returns {string} Formatted currency string
 */
export function formatCurrencyMXN(amount, includeSign = false) {
  const num = Math.round(Number(amount) || 0);
  if (num < 0) {
    const formattedAbs = Math.abs(num).toLocaleString('es-MX');
    return `-$${formattedAbs} MXN`;
  }
  const formatted = num.toLocaleString('es-MX');
  if (includeSign && num > 0) {
    return `+$${formatted} MXN`;
  }
  return `$${formatted} MXN`;
}

/**
 * Builds encoded WhatsApp CTA URL with dynamic savings payload or consultative message.
 * 
 * @param {number} netSavings 
 * @param {number} monthlyExpense 
 * @param {'pkg1' | 'pkg2'} packageType 
 * @returns {string} Full WhatsApp URL
 */
export function buildWhatsappUrl(netSavings, monthlyExpense, packageType = 'pkg1') {
  if (netSavings <= 0) {
    const consultText = 'Hola Cristhian, estuve usando la calculadora de tu sitio y me gustaría que me asesores sobre qué paquete me conviene más para mi consultorio.';
    return `https://wa.me/528130938884?text=${encodeURIComponent(consultText)}`;
  }

  const savingsStr = formatCurrencyMXN(netSavings, true);
  const expenseStr = formatCurrencyMXN(monthlyExpense);
  let pkgStr = 'Paquete 01 (Presencia Web)';
  if (packageType === 'pkg2') {
    pkgStr = 'Paquete 02 (Web + Consultorio Inteligente)';
  } else if (packageType === 'pkg3') {
    pkgStr = 'Paquete 03 (Plataforma Clínica)';
  }
  
  const text = `Hola Cristhian, calculé en tu sitio un ahorro de ${savingsStr} a 3 años frente a pagar ${expenseStr}/mes en plataformas de renta. Me interesa cotizar mi ${pkgStr}.`;
  return `https://wa.me/528130938884?text=${encodeURIComponent(text)}`;
}

/**
 * Initializes DOM listeners and interactive reactivity for the calculator.
 */
export function initSavingsCalculator() {
  const slider = document.getElementById('monthlyExpenseSlider');
  const sliderDisplay = document.getElementById('sliderValueDisplay');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const packageBtns = document.querySelectorAll('.package-pill-btn');
  const saasDisplay = document.getElementById('saasTotalDisplay');
  const crisdevDisplay = document.getElementById('crisdevTotalDisplay');
  const crisdevPeriod = document.getElementById('crisdevPeriodDisplay');
  const netSavingsCard = document.getElementById('netSavingsCard');
  const savingsCardHeader = document.getElementById('savingsCardHeader');
  const netSavingsDisplay = document.getElementById('netSavingsDisplay');
  const savingsCardPeriod = document.getElementById('savingsCardPeriod');
  const roiBadgeDisplay = document.getElementById('roiBadgeDisplay');
  const recoveryBannerText = document.getElementById('recoveryBannerText');
  const calcCtaSubtext = document.getElementById('calcCtaSubtext');
  const whatsappCta = document.getElementById('calcWhatsappCta');

  if (!slider || !saasDisplay || !netSavingsDisplay) return;

  let currentPackage = 'pkg1';

  function setPackage(pkg) {
    currentPackage = pkg;
    packageBtns.forEach(b => {
      const isActive = b.getAttribute('data-package') === currentPackage;
      b.classList.toggle('is-active', isActive);
      b.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
    updateView();
  }

  function updateView() {
    const expense = Number(slider.value) || 1350;
    const result = calculateSavings(expense, currentPackage);

    if (sliderDisplay) {
      sliderDisplay.textContent = `${formatCurrencyMXN(expense)}/mes`;
    }

    saasDisplay.textContent = formatCurrencyMXN(result.saasTotal);
    crisdevDisplay.textContent = formatCurrencyMXN(result.crisdevTotal);

    if (crisdevPeriod) {
      if (currentPackage === 'pkg2') {
        crisdevPeriod.textContent = 'Incluye $5,900 de inicio + $4,990/año desde el año 2 para la plataforma clínica, base de datos y dominio.';
      } else if (currentPackage === 'pkg3') {
        crisdevPeriod.textContent = 'Incluye $1,900 de puesta en marcha + $499/mes para servidor dedicado, base de datos privada y soporte.';
      } else {
        crisdevPeriod.textContent = 'Pago único. Hosting $0/mes en Cloudflare de por vida. Solo renuevas tu dominio anual (~$300-$500/año).';
      }
    }

    // Dynamic recovery banner copy
    if (recoveryBannerText) {
      if (currentPackage === 'pkg1') {
        recoveryBannerText.innerHTML = '<strong>El valor de tu web propia:</strong> Al captar solo 1 o 2 pacientes nuevos al año gracias a tu sitio web sin pagar comisiones por consulta, recuperas la inversión total de por vida.';
      } else if (currentPackage === 'pkg3') {
        recoveryBannerText.innerHTML = '<strong>El valor del orden y privacidad:</strong> Al centralizar expedientes NOM-004 y notas de evolución protegidas sin intermediarios, ahorras horas administrativas y proteges tus historiales sin pagar rentas abusivas.';
      } else {
        recoveryBannerText.innerHTML = '<strong>El valor oculto de no perder pacientes:</strong> Al enviar recordatorios automáticos por WhatsApp y recuperar solo 2 citas mensuales que antes se cancelaban por olvido (~$1,600 MXN), el software se amortiza solo en tus primeros 90 días.';
      }
    }

    // Render Featured Savings vs Consultative State
    if (result.isConsultative) {
      if (netSavingsCard) {
        netSavingsCard.classList.remove('card-featured');
        netSavingsCard.classList.add('card-consultative');
      }
      if (savingsCardHeader) {
        savingsCardHeader.textContent = 'Comparativa de Alcance';
      }
      netSavingsDisplay.innerHTML = '<span class="consultative-badge-label">Suite Clínica Avanzada</span>';
      
      if (savingsCardPeriod) {
        savingsCardPeriod.innerHTML = 'Para sitios web básicos (~$400/mes), tu opción óptima es el <strong>Paquete 01 (Solo Web)</strong> donde ahorras <strong>+$9,600 MXN</strong>. Las soluciones clínicas incluyen base de datos privada y expedientes NOM-004.';
      }

      if (roiBadgeDisplay) {
        roiBadgeDisplay.style.display = 'flex';
        roiBadgeDisplay.className = 'metric-badge-consultative';
        roiBadgeDisplay.innerHTML = `
          <button type="button" class="btn-switch-pkg1" id="btnSwitchPkg1">
            <span>Cambiar a Paquete 01 (Ahorro de +$9,600 MXN)</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        `;
        const switchBtn = document.getElementById('btnSwitchPkg1');
        if (switchBtn) {
          switchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setPackage('pkg1');
          });
        }
      }

      if (calcCtaSubtext) {
        calcCtaSubtext.textContent = '¿Tienes dudas sobre qué solución se adapta mejor a tu consultorio?';
      }

      if (whatsappCta) {
        whatsappCta.href = buildWhatsappUrl(result.netSavings, expense, currentPackage);
        const ctaSpan = whatsappCta.querySelector('span');
        if (ctaSpan) ctaSpan.textContent = 'Solicitar asesoría para mi consultorio';
      }
    } else {
      if (netSavingsCard) {
        netSavingsCard.classList.add('card-featured');
        netSavingsCard.classList.remove('card-consultative');
      }
      if (savingsCardHeader) {
        savingsCardHeader.textContent = 'Tu Ahorro Neto a 3 Años';
      }
      netSavingsDisplay.textContent = formatCurrencyMXN(result.netSavings, true);

      if (savingsCardPeriod) {
        savingsCardPeriod.textContent = 'Dinero que se queda en tu consultorio privado en vez de pagar comisiones y rentas.';
      }

      if (roiBadgeDisplay) {
        roiBadgeDisplay.style.display = 'inline-flex';
        roiBadgeDisplay.className = 'metric-badge-roi';
        const months = result.roiMonths;
        roiBadgeDisplay.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Se amortiza en ~${months} ${months === 1 ? 'mes' : 'meses'}</span>
        `;
      }

      if (calcCtaSubtext) {
        calcCtaSubtext.textContent = '¿Listo para dejar de pagar rentas mensuales y tener tu plataforma propia?';
      }

      if (whatsappCta) {
        whatsappCta.href = buildWhatsappUrl(result.netSavings, expense, currentPackage);
        const ctaSpan = whatsappCta.querySelector('span');
        if (ctaSpan) ctaSpan.textContent = 'Quiero este ahorro con mi plataforma propia';
      }
    }
  }

  // Slider input event
  slider.addEventListener('input', () => {
    // Unselect preset buttons if user moves slider away from preset value
    presetBtns.forEach(btn => {
      const val = Number(btn.getAttribute('data-preset-value'));
      if (val === Number(slider.value)) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
    updateView();
  });

  // Preset buttons click events
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-preset-value'));
      if (!val) return;
      slider.value = val;
      presetBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Smart Package Switching: auto-select suggested package for this preset
      const suggestedPkg = btn.getAttribute('data-suggested-package');
      if (suggestedPkg && (suggestedPkg === 'pkg1' || suggestedPkg === 'pkg2' || suggestedPkg === 'pkg3')) {
        currentPackage = suggestedPkg;
        packageBtns.forEach(b => {
          const isActive = b.getAttribute('data-package') === currentPackage;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });
      }

      updateView();
    });
  });

  // Package toggle click events
  packageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pkg = btn.getAttribute('data-package');
      if (!pkg || pkg === currentPackage) return;
      setPackage(pkg);
    });
  });

  // Initial trigger
  updateView();
}

/**
 * Initializes the 15-minute live demo vs general chat intent selector in #contact.
 */
export function initContactIntentSelector() {
  const intentBtns = document.querySelectorAll('.intent-pill-btn');
  const mainWhatsappBtn = document.querySelector('#contact .cta-whatsapp');
  if (!intentBtns.length || !mainWhatsappBtn) return;

  const btnSpan = mainWhatsappBtn.querySelector('span');

  const URL_CHAT = 'https://wa.me/528130938884?text=Hola%20Cristhian,%20vi%20tu%20sitio%20y%20me%20interesa%20modernizar%20mi%20consulta';
  const URL_DEMO = 'https://wa.me/528130938884?text=Hola%20Cristhian,%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20en%20vivo%20de%2015%20minutos%20en%20pantalla%20compartida%20de%20tu%20plataforma%20cl%C3%ADnica.';

  intentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const intent = btn.getAttribute('data-intent');
      intentBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-checked', 'true');

      if (intent === 'demo') {
        mainWhatsappBtn.href = URL_DEMO;
        if (btnSpan) btnSpan.textContent = 'Agendar Demo de 15 Min por WhatsApp';
      } else {
        mainWhatsappBtn.href = URL_CHAT;
        if (btnSpan) btnSpan.textContent = 'Hablar con Cristhian por WhatsApp';
      }
    });
  });
}

