/**
 * ==========================================================================
 * SAVINGS CALCULATOR UNIT TEST SUITE
 * Zero-dependency testing with node:test and node:assert
 * Validates mathematical accuracy and edge cases for 3-year savings & ROI
 * ==========================================================================
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateSavings, formatCurrencyMXN, buildWhatsappUrl } from '../js/modules/savings-calculator.js';

describe('Savings Calculator Logic & ROI Suite', () => {
  describe('Mathematical Calculations (Package 01 - Solo Web)', () => {
    it('should correctly calculate savings against Doctoralia Starter ($1,350/mo)', () => {
      const result = calculateSavings(1350, 'pkg1');
      assert.equal(result.saasTotal, 48600, '36 months of $1,350 should equal $48,600');
      assert.equal(result.crisdevTotal, 4800, 'Package 01 3-year investment should equal $4,800');
      assert.equal(result.netSavings, 43800, 'Net savings should equal $43,800');
      assert.equal(result.roiMonths, 4, 'ROI should be 4 months ($4,800 / $1,350)');
      assert.equal(result.isConsultative, false);
    });

    it('should correctly calculate savings against DIY Wix ($400/mo)', () => {
      const result = calculateSavings(400, 'pkg1');
      assert.equal(result.saasTotal, 14400);
      assert.equal(result.crisdevTotal, 4800);
      assert.equal(result.netSavings, 9600);
      assert.equal(result.roiMonths, 12);
      assert.equal(result.isConsultative, false);
    });

    it('should correctly calculate savings against Agenda SaaS ($990/mo)', () => {
      const result = calculateSavings(990, 'pkg1');
      assert.equal(result.saasTotal, 35640);
      assert.equal(result.crisdevTotal, 4800);
      assert.equal(result.netSavings, 30840);
      assert.equal(result.roiMonths, 5);
      assert.equal(result.isConsultative, false);
    });
  });

  describe('Mathematical Calculations (Package 02 - Web + Consultorio Inteligente)', () => {
    it('should correctly calculate 3-year investment ($5,900 initial + $4,990/yr Y2 & Y3 = $15,880)', () => {
      const result = calculateSavings(1350, 'pkg2');
      assert.equal(result.crisdevTotal, 15880, 'Package 02 3-year total must be $15,880');
      assert.equal(result.saasTotal, 48600);
      assert.equal(result.netSavings, 32720, 'Net savings against Doctoralia Starter should be $32,720');
      assert.equal(result.roiMonths, 5, 'Initial $5,900 pays off in 5 months at $1,350/mo');
      assert.equal(result.isConsultative, false);
    });

    it('should correctly calculate savings against Doctoralia Plus ($2,370/mo)', () => {
      const result = calculateSavings(2370, 'pkg2');
      assert.equal(result.saasTotal, 85320, '36 months of $2,370 should equal $85,320');
      assert.equal(result.crisdevTotal, 15880);
      assert.equal(result.netSavings, 69440, 'Net savings should be $69,440');
      assert.equal(result.roiMonths, 3, 'Initial $5,900 pays off in 3 months at $2,370/mo');
      assert.equal(result.isConsultative, false);
    });

    it('should correctly calculate savings against Encuadrado ($990/mo)', () => {
      const result = calculateSavings(990, 'pkg2');
      assert.equal(result.saasTotal, 35640);
      assert.equal(result.crisdevTotal, 15880);
      assert.equal(result.netSavings, 19760);
      assert.equal(result.roiMonths, 6, 'Initial $5,900 pays off in 6 months at $990/mo');
      assert.equal(result.isConsultative, false);
    });
  });

  describe('Consultative State & Edge Cases (Commercial Guardrails)', () => {
    it('should trigger consultative state and zero ROI when Package 02 has negative net savings against $400/mo', () => {
      const result = calculateSavings(400, 'pkg2');
      assert.equal(result.saasTotal, 14400);
      assert.equal(result.crisdevTotal, 15880);
      assert.equal(result.netSavings, -1480);
      assert.equal(result.isConsultative, true, 'Must declare consultative state for negative savings');
      assert.equal(result.roiMonths, 0, 'Must NOT claim false amortization when net savings is negative');
    });

    it('should handle zero or negative expenses gracefully', () => {
      const resultZero = calculateSavings(0, 'pkg1');
      assert.equal(resultZero.saasTotal, 0);
      assert.equal(resultZero.netSavings, -4800);
      assert.equal(resultZero.isConsultative, true);
      assert.equal(resultZero.roiMonths, 0);

      const resultNeg = calculateSavings(-500, 'pkg1');
      assert.equal(resultNeg.monthlyExpense, 0);
      assert.equal(resultNeg.saasTotal, 0);
      assert.equal(resultNeg.isConsultative, true);
    });

    it('should parse string inputs cleanly', () => {
      const result = calculateSavings('1500', 'pkg1');
      assert.equal(result.monthlyExpense, 1500);
      assert.equal(result.saasTotal, 54000);
      assert.equal(result.netSavings, 49200);
      assert.equal(result.isConsultative, false);
    });
  });

  describe('Currency Formatting & WhatsApp Generator', () => {
    it('should format positive numbers with Mexican thousand separators', () => {
      assert.equal(formatCurrencyMXN(48600), '$48,600 MXN');
      assert.equal(formatCurrencyMXN(69440, true), '+$69,440 MXN');
      assert.equal(formatCurrencyMXN(0), '$0 MXN');
    });

    it('should format negative numbers with minus sign before currency symbol (-$X,XXX MXN)', () => {
      assert.equal(formatCurrencyMXN(-1480), '-$1,480 MXN', 'Negative number without includeSign');
      assert.equal(formatCurrencyMXN(-1480, true), '-$1,480 MXN', 'Negative number with includeSign must NOT display + or $-');
    });

    it('should build a valid WhatsApp link with the calculated savings payload when savings are positive', () => {
      const url = buildWhatsappUrl(43800, 1350, 'pkg1');
      assert.ok(url.startsWith('https://wa.me/528130938884?text='), 'Must point to verified WhatsApp link');
      assert.ok(url.includes(encodeURIComponent('+$43,800 MXN')), 'Must include savings in URL');
      assert.ok(url.includes(encodeURIComponent('$1,350 MXN')), 'Must include monthly expense in URL');
      assert.ok(url.includes(encodeURIComponent('Paquete 01 (Presencia Web)')), 'Must include package name');
    });

    it('should build a consultative orientation WhatsApp link when net savings are zero or negative', () => {
      const url = buildWhatsappUrl(-1480, 400, 'pkg2');
      assert.ok(url.startsWith('https://wa.me/528130938884?text='), 'Must point to verified WhatsApp link');
      assert.ok(!url.includes('-1480'), 'Must NOT send negative savings in WhatsApp message');
      assert.ok(url.includes(encodeURIComponent('asesores sobre qué paquete me conviene más')), 'Must send consultative guidance copy');
    });
  });
});

