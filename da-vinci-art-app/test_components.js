const fs = require('fs');
const path = require('path');

const components = [
  'Header.tsx',
  'Footer.tsx',
  'Layout.tsx',
  'ArtworkCard.tsx',
  'ArtworkGallery.tsx',
  'ArtworkDetail.tsx',
  'SearchBar.tsx',
  'FilterPanel.tsx',
  'ArtistBio.tsx',
  'Timeline.tsx',
  'NotFound.tsx',
];

const hasAny = [];
const missingExports = [];
const base = path.join(__dirname, 'src', 'components');

components.forEach((file) => {
  const full = path.join(base, file);
  if (!fs.existsSync(full)) {
    missingExports.push(file);
    return;
  }
  const content = fs.readFileSync(full, 'utf8');
  if (!content.includes('export default')) {
    missingExports.push(file);
  }
  if (/\bany\b/.test(content)) {
    hasAny.push(file);
  }
});

if (missingExports.length || hasAny.length) {
  console.error('test_components.js — FAIL');
  if (missingExports.length) console.error('Missing or unexported components:', missingExports);
  if (hasAny.length) console.error('Components containing any:', hasAny);
  process.exit(1);
}

console.log('test_components.js — PASS');
