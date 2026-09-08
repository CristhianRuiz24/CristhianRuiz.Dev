import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const cssDir = path.join(rootDir, 'css');

function getAllCssFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllCssFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractDefinedVariables(cssContent) {
  const defined = new Set();
  const defRegex = /(--[a-zA-Z0-9_-]+)\s*:/g;
  let match;
  while ((match = defRegex.exec(cssContent)) !== null) {
    defined.add(match[1]);
  }
  return defined;
}

function extractConsumedVariables(cssContent, fileName) {
  const consumed = [];
  const useRegex = /var\(\s*(--[a-zA-Z0-9_-]+)(?:\s*,\s*([^)]+))?\s*\)/g;
  let match;
  while ((match = useRegex.exec(cssContent)) !== null) {
    consumed.push({
      variable: match[1],
      hasFallback: !!match[2],
      file: path.basename(fileName)
    });
  }
  return consumed;
}

describe('CSS Design System & Token Integrity Suite', () => {
  const cssFiles = getAllCssFiles(cssDir);

  const definedVariables = new Set();
  const allConsumed = [];

  for (const filePath of cssFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const definedInFile = extractDefinedVariables(content);
    for (const v of definedInFile) {
      definedVariables.add(v);
    }

    const consumedInFile = extractConsumedVariables(content, filePath);
    allConsumed.push(...consumedInFile);
  }

  test('CSS files must be found and scanned', () => {
    assert.ok(cssFiles.length >= 5, `Expected at least 5 CSS files, found ${cssFiles.length}`);
    assert.ok(definedVariables.size >= 20, `Expected at least 20 defined tokens, found ${definedVariables.size}`);
  });

  test('All consumed CSS variables must be declared in the design system', () => {
    const orphanTokens = [];

    for (const { variable, hasFallback, file } of allConsumed) {
      if (!definedVariables.has(variable) && !hasFallback) {
        orphanTokens.push(`${file} uses undefined token: ${variable}`);
      }
    }

    assert.equal(
      orphanTokens.length,
      0,
      `Detected orphan/undefined CSS tokens:\n${orphanTokens.join('\n')}`
    );
  });
});
