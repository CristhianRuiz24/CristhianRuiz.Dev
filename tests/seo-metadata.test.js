import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function extractMeta(html) {
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const metaMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/);
  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    description: metaMatch ? metaMatch[1].trim() : ''
  };
}

describe('SEO & Search Engine Metadata Compliance Suite (Bing & Google)', () => {
  const indexPath = path.join(rootDir, 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  const indexMeta = extractMeta(indexHtml);

  const privacyPath = path.join(rootDir, 'aviso-de-privacidad.html');
  const privacyHtml = fs.readFileSync(privacyPath, 'utf8');
  const privacyMeta = extractMeta(privacyHtml);

  test('index.html <title> must be non-empty and under 65 characters to prevent truncation', () => {
    assert.ok(indexMeta.title.length > 0, 'Title must not be empty');
    assert.ok(
      indexMeta.title.length <= 65,
      `index.html title has ${indexMeta.title.length} characters (must be <= 65): "${indexMeta.title}"`
    );
  });

  test('index.html <meta name="description"> must be between 120 and 160 characters', () => {
    assert.ok(
      indexMeta.description.length >= 120 && indexMeta.description.length <= 160,
      `index.html meta description has ${indexMeta.description.length} characters (must be 120-160): "${indexMeta.description}"`
    );
  });

  test('aviso-de-privacidad.html <title> must be under 65 characters', () => {
    assert.ok(privacyMeta.title.length > 0, 'Title must not be empty');
    assert.ok(
      privacyMeta.title.length <= 65,
      `aviso-de-privacidad.html title has ${privacyMeta.title.length} characters: "${privacyMeta.title}"`
    );
  });

  test('aviso-de-privacidad.html <meta name="description"> must be between 120 and 160 characters', () => {
    assert.ok(
      privacyMeta.description.length >= 120 && privacyMeta.description.length <= 160,
      `aviso-de-privacidad.html meta description has ${privacyMeta.description.length} characters: "${privacyMeta.description}"`
    );
  });
});
