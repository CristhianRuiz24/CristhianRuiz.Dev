import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function extractIds(html) {
  const ids = new Set();
  const idRegex = /id=["']([^"']+)["']/g;
  let match;
  while ((match = idRegex.exec(html)) !== null) {
    ids.add(match[1]);
  }
  return ids;
}

function extractHrefs(html) {
  const hrefs = [];
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    hrefs.push(match[1]);
  }
  return hrefs;
}

describe('Navigation & Link Integrity Suite', () => {
  const indexPath = path.join(rootDir, 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const indexIds = extractIds(indexHtml);
  const indexHrefs = extractHrefs(indexHtml);

  const privacyPath = path.join(rootDir, 'aviso-de-privacidad.html');
  const privacyHtml = fs.readFileSync(privacyPath, 'utf8');
  const privacyIds = extractIds(privacyHtml);
  const privacyHrefs = extractHrefs(privacyPath ? privacyHtml : '');

  const compPath = path.join(rootDir, 'comparativa-doctoralia.html');
  const compHtml = fs.existsSync(compPath) ? fs.readFileSync(compPath, 'utf8') : '';
  const compIds = extractIds(compHtml);
  const compHrefs = extractHrefs(compHtml);

  test('All internal anchor links in index.html must point to existing IDs', () => {
    const internalAnchors = indexHrefs.filter(h => h.startsWith('#') && h.length > 1);

    for (const anchor of internalAnchors) {
      const targetId = anchor.substring(1);
      assert.ok(
        indexIds.has(targetId),
        `Broken link detected in index.html: href="${anchor}" but id="${targetId}" does not exist in the DOM.`
      );
    }
  });

  test('All links to index.html anchors from aviso-de-privacidad.html must point to existing IDs in index.html', () => {
    const crossAnchors = privacyHrefs.filter(h => h.startsWith('index.html#'));

    for (const anchor of crossAnchors) {
      const targetId = anchor.replace('index.html#', '');
      assert.ok(
        indexIds.has(targetId),
        `Broken cross-link in aviso-de-privacidad.html: href="${anchor}" points to missing id="${targetId}" in index.html.`
      );
    }
  });

  test('All links to index.html anchors from comparativa-doctoralia.html must point to existing IDs in index.html', () => {
    const crossAnchors = compHrefs.filter(h => h.startsWith('index.html#'));

    for (const anchor of crossAnchors) {
      const targetId = anchor.replace('index.html#', '');
      assert.ok(
        indexIds.has(targetId),
        `Broken cross-link in comparativa-doctoralia.html: href="${anchor}" points to missing id="${targetId}" in index.html.`
      );
    }
  });

  test('Local file targets referenced in hrefs must physically exist in repo', () => {
    const allHrefs = [...indexHrefs, ...privacyHrefs, ...compHrefs];
    const localFiles = allHrefs.filter(h => !h.startsWith('http') && !h.startsWith('#') && !h.startsWith('mailto:') && !h.startsWith('tel:'));

    for (const fileHref of localFiles) {
      const cleanPath = fileHref.split('#')[0].split('?')[0];
      if (cleanPath) {
        const filePath = path.join(rootDir, cleanPath);
        assert.ok(
          fs.existsSync(filePath),
          `Missing target file referenced in HTML: "${cleanPath}" does not exist at ${filePath}`
        );
      }
    }
  });

  test('All script tags importing theme-manager.js must declare type="module"', () => {
    const htmlFiles = [
      { name: 'index.html', html: indexHtml },
      { name: 'aviso-de-privacidad.html', html: privacyHtml },
      { name: 'comparativa-doctoralia.html', html: compHtml }
    ];

    const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;

    for (const { name, html } of htmlFiles) {
      let match;
      while ((match = scriptRegex.exec(html)) !== null) {
        const attributes = match[1];
        if (attributes.includes('theme-manager.js')) {
          assert.match(
            attributes,
            /\btype=["']module["']/,
            `In ${name}, theme-manager.js must be loaded with type="module" to prevent syntax errors with export statements.`
          );
        }
      }
    }
  });

  test('Local script files referenced in script tags must physically exist in repo', () => {
    const htmlFiles = [
      { name: 'index.html', html: indexHtml },
      { name: 'aviso-de-privacidad.html', html: privacyHtml },
      { name: 'comparativa-doctoralia.html', html: compHtml }
    ];

    const srcRegex = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi;

    for (const { name, html } of htmlFiles) {
      let match;
      while ((match = srcRegex.exec(html)) !== null) {
        const src = match[1];
        if (!src.startsWith('http') && !src.startsWith('//')) {
          const cleanPath = src.split('?')[0];
          const filePath = path.join(rootDir, cleanPath);
          assert.ok(
            fs.existsSync(filePath),
            `Missing script file referenced in ${name}: "${cleanPath}" does not exist at ${filePath}`
          );
        }
      }
    }
  });

  test('Social links in footer must point to official Facebook and Instagram channels and exclude LinkedIn', () => {
    const htmlFiles = [
      { name: 'index.html', html: indexHtml },
      { name: 'aviso-de-privacidad.html', html: privacyHtml },
      { name: 'comparativa-doctoralia.html', html: compHtml }
    ];

    for (const { name, html } of htmlFiles) {
      assert.ok(
        !html.includes('linkedin.com'),
        `Residual LinkedIn link found in ${name}. LinkedIn must be excluded per brand guidelines.`
      );
      assert.ok(
        html.includes('https://www.facebook.com/people/CrisDev/61594210641667/'),
        `Missing or outdated Facebook official link in ${name}.`
      );
      assert.ok(
        html.includes('https://www.instagram.com/_cris_dev_/'),
        `Missing official Instagram link in ${name}.`
      );
    }
  });

  test('Asset ownership and managed clinical software copy integrity', () => {
    const publicFiles = [
      { name: 'index.html', content: indexHtml },
      { name: 'comparativa-doctoralia.html', content: compHtml },
      { name: 'llms.txt', content: fs.readFileSync(path.join(rootDir, 'llms.txt'), 'utf8') }
    ];

    for (const { name, content } of publicFiles) {
      assert.ok(
        !content.includes('tu panel te pertenecen'),
        `Ambiguous ownership claim found in ${name}: "tu panel te pertenecen". Panel is managed cloud software.`
      );
      assert.ok(
        !content.includes('software clínico son tuyos'),
        `Ambiguous ownership claim found in ${name}: "software clínico son tuyos". Panel is managed cloud software.`
      );
    }

    // Verify key ownership and data sovereignty messaging is present
    assert.ok(
      indexHtml.includes('Soberanía de datos y web propia:'),
      'Missing "Soberanía de datos y web propia:" in index.html comparison section.'
    );
    assert.ok(
      compHtml.includes('Soberanía de datos y web propia:'),
      'Missing "Soberanía de datos y web propia:" in comparativa-doctoralia.html comparison section.'
    );
    assert.ok(
      indexHtml.includes('¿De quién es la propiedad de mi página web y de los expedientes de mis pacientes?'),
      'Missing ownership FAQ item in index.html.'
    );
    assert.ok(
      compHtml.includes('¿De quién es la propiedad de mi página web y de los expedientes de mis pacientes?'),
      'Missing ownership FAQ item in comparativa-doctoralia.html.'
    );
  });

  test('Operational trust, backups, export and cloud continuity copy integrity', () => {
    const publicFiles = [
      { name: 'index.html', content: indexHtml },
      { name: 'comparativa-doctoralia.html', content: compHtml }
    ];

    for (const { name, content } of publicFiles) {
      assert.ok(
        !content.includes('factura fiscal (CFDI)'),
        `Premature public CFDI invoicing claim found in ${name}. CFDI must not be publicly advertised until automated.`
      );
      assert.ok(
        content.includes('¿Cómo protegen mi información y cómo puedo exportar los expedientes de mis pacientes?'),
        `Missing backups and data export FAQ item in ${name}.`
      );
      assert.ok(
        !content.includes('99.9% de uptime'),
        `Unsubstantiated corporate SLA claim "99.9% de uptime" found in ${name}.`
      );
      assert.ok(
        !content.includes('secreto profesional garantizado'),
        `Legally risky absolute guarantee "secreto profesional garantizado" found in ${name}.`
      );
    }

    assert.ok(
      indexHtml.includes('¿Qué sucede si un día no estás disponible de inmediato o hay un imprevisto?'),
      'Missing continuity & support FAQ item in index.html.'
    );

    const llmsContent = fs.readFileSync(path.join(rootDir, 'llms.txt'), 'utf8');
    assert.ok(
      !llmsContent.includes('facturación fiscal formal con CFDI'),
      'Premature public CFDI invoicing claim found in llms.txt.'
    );
    assert.ok(
      llmsContent.includes('exportables en formato estándar (CSV u hoja de cálculo)'),
      'Missing standard export info in llms.txt.'
    );
  });

  test('Feature 024: Triad Commercial Suite Integrity (Paquete 01, 02 y 03)', () => {
    // 1. Check index.html pricing cards in sequential order
    assert.ok(
      indexHtml.includes('Paquete 01 · Solo Página Web'),
      'Missing Paquete 01 badge in index.html'
    );
    assert.ok(
      indexHtml.includes('Paquete 02 · Solo Software Clínico'),
      'Missing Paquete 02 badge in index.html'
    );
    assert.ok(
      indexHtml.includes('Paquete 03 · Web + Plataforma'),
      'Missing Paquete 03 badge in index.html'
    );
    assert.ok(
      indexHtml.includes('1,900'),
      'Missing $1,900 MXN pricing for Paquete 02 in index.html'
    );
    assert.ok(
      indexHtml.includes('$950 MXN anticipo'),
      'Missing $950 MXN 50/50 breakdown in index.html'
    );
    assert.ok(
      indexHtml.includes('¿Puedo contratar únicamente la plataforma clínica si ya tengo mi propia página web o uso redes sociales?'),
      'Missing standalone platform FAQ in index.html'
    );

    // 2. Check calculator toggle buttons for pkg1, pkg2, pkg3
    assert.ok(
      indexHtml.includes('data-package="pkg1"'),
      'Missing pkg1 button in savings calculator in index.html'
    );
    assert.ok(
      indexHtml.includes('data-package="pkg2"'),
      'Missing pkg2 button in savings calculator in index.html'
    );
    assert.ok(
      indexHtml.includes('Paquete 02 (Solo Plataforma)'),
      'Missing Paquete 02 label in savings calculator'
    );
    assert.ok(
      indexHtml.includes('data-package="pkg3"'),
      'Missing pkg3 button in savings calculator in index.html'
    );
    assert.ok(
      indexHtml.includes('Paquete 03 (Web + Plataforma)'),
      'Missing Paquete 03 label in savings calculator'
    );

    // 3. Check comparativa-doctoralia.html
    assert.ok(
      compHtml.includes('Plataforma Clínica (Paquete 02) ($1,900 MXN de puesta en marcha + $499 MXN/mes)'),
      'Missing Paquete 02 reference in comparativa-doctoralia.html'
    );
    assert.ok(
      compHtml.includes('¿Puedo contratar solo el software de agenda y expedientes sin crear una página web nueva?'),
      'Missing standalone software FAQ in comparativa-doctoralia.html'
    );

    // 4. Check llms.txt
    const llmsContent = fs.readFileSync(path.join(rootDir, 'llms.txt'), 'utf8');
    assert.ok(
      llmsContent.includes('### Paquete 02: Plataforma Clínica (Solo Software de Gestión)'),
      'Missing Paquete 02 heading in llms.txt'
    );
    assert.ok(
      llmsContent.includes('### Paquete 03: Consultorio Inteligente (Web + Plataforma Clínica)'),
      'Missing Paquete 03 heading in llms.txt'
    );
    assert.ok(
      llmsContent.includes('$1,900 MXN'),
      'Missing $1,900 MXN setup in llms.txt'
    );
  });
});


