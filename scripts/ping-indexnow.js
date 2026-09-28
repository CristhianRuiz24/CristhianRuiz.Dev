/**
 * IndexNow Automated URL Submission Script
 * Author: Cristhian Ruiz - Software & Web Engineering (CrisDev)
 * Specification: https://www.indexnow.org/documentation
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const HOST = 'cristhianruiz.dev';
const KEY = 'e4d7a8809c954e7d8b584d41fa217c9b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/aviso-de-privacidad`,
  `https://${HOST}/comparativa-doctoralia`
];

async function submitIndexNow() {
  const isDryRun = process.argv.includes('--dry-run');

  // Verify key file exists locally
  const keyFilePath = path.join(rootDir, `${KEY}.txt`);
  if (!fs.existsSync(keyFilePath)) {
    console.error(`[ERROR] Verification key file not found at: ${keyFilePath}`);
    process.exit(1);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST
  };

  console.log(`[IndexNow] Submitting ${URL_LIST.length} URLs for host ${HOST}...`);
  console.log(`[IndexNow] Key Location: ${KEY_LOCATION}`);

  if (isDryRun) {
    console.log('[IndexNow] Dry-run mode active. Payload preview:');
    console.log(JSON.stringify(payload, null, 2));
    console.log('[IndexNow] Dry run completed successfully.');
    return;
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Success! Received HTTP ${response.status} from IndexNow API.`);
      console.log('[IndexNow] URLs propagated to Microsoft Bing, Copilot, Perplexity and affiliates.');
    } else {
      const errorText = await response.text();
      console.warn(`[IndexNow] Received HTTP ${response.status} from API:`, errorText || '(No response body)');
    }
  } catch (error) {
    console.error('[IndexNow] Network error sending request:', error.message);
  }
}

submitIndexNow();
