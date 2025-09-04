// scripts/generate-sitemap.mjs
import { SitemapStream } from 'sitemap';
import { createWriteStream, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ensure /public exists
mkdirSync(`${__dirname}/../public`, { recursive: true });

const hostname = 'https://siyasroadvertising.com';

// List every static route you want indexed
const links = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8 },
  { url: '/services', priority: 0.8 },
  { url: '/contact', priority: 0.7 },
];

const outPath = `${__dirname}/../public/sitemap.xml`;
const stream = new SitemapStream({ hostname });

stream.pipe(createWriteStream(outPath));
links.forEach((l) => stream.write(l));
stream.end();

console.log('✅ sitemap.xml generated at', outPath);
