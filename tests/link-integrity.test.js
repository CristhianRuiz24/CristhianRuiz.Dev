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

  test('Local file targets referenced in hrefs must physically exist in repo', () => {
    const allHrefs = [...indexHrefs, ...privacyHrefs];
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
});
