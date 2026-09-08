import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const headerPartialPath = path.join(rootDir, 'partials', 'header.html');
const headerPrivacyPartialPath = path.join(rootDir, 'partials', 'header-privacy.html');
const footerPartialPath = path.join(rootDir, 'partials', 'footer.html');

const headerPartial = fs.readFileSync(headerPartialPath, 'utf8').trim();
const headerPrivacyPartial = fs.readFileSync(headerPrivacyPartialPath, 'utf8').trim();
const footerPartial = fs.readFileSync(footerPartialPath, 'utf8').trim();

function replaceBlock(content, blockName, newContent) {
  const startMarker = `<!-- BEGIN:${blockName} -->`;
  const endMarker = `<!-- END:${blockName} -->`;
  
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.warn(`[sync-partials] Marker ${blockName} not found, skipping block.`);
    return content;
  }

  const before = content.slice(0, startIndex + startMarker.length);
  const after = content.slice(endIndex);

  return `${before}\n${newContent}\n  ${after}`;
}

export function syncPartials() {
  // 1. Sync index.html
  const indexPath = path.join(rootDir, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  const indexHeader = headerPartial
    .replace(/\{\{PREFIX\}\}/g, '');
  const indexFooter = footerPartial
    .replace(/\{\{PREFIX\}\}/g, '')
    .replace(/\{\{PRIVACY_ACTIVE\}\}/g, '');

  indexContent = replaceBlock(indexContent, 'HEADER', indexHeader);
  indexContent = replaceBlock(indexContent, 'FOOTER', indexFooter);
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('✔ index.html synchronized successfully.');

  // 2. Sync aviso-de-privacidad.html
  const privacyPath = path.join(rootDir, 'aviso-de-privacidad.html');
  let privacyContent = fs.readFileSync(privacyPath, 'utf8');

  const privacyFooter = footerPartial
    .replace(/\{\{PREFIX\}\}/g, 'index.html')
    .replace(/\{\{PRIVACY_ACTIVE\}\}/g, ' active');

  privacyContent = replaceBlock(privacyContent, 'HEADER', headerPrivacyPartial);
  privacyContent = replaceBlock(privacyContent, 'FOOTER', privacyFooter);
  fs.writeFileSync(privacyPath, privacyContent, 'utf8');
  console.log('✔ aviso-de-privacidad.html synchronized successfully.');
}

// Direct execution check
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  syncPartials();
}
