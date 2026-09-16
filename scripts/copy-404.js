// Copies dist/index.html to dist/404.html so GitHub Pages serves the SPA
// shell (instead of a native 404) when a user directly requests or
// refreshes a client-side route (e.g. /Nature-Nurture/products).
// React Router then takes over and renders the correct route on load.
import { copyFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

if (!existsSync(indexPath)) {
  console.error(`copy-404: expected ${indexPath} to exist after build.`);
  process.exit(1);
}

copyFileSync(indexPath, notFoundPath);
console.log('copy-404: created dist/404.html from dist/index.html');
