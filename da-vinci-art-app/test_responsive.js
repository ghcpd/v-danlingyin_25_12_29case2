const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, 'src', 'styles', 'index.css'), 'utf8');
const checks = ['320px', '768px', '1024px'];
const missing = checks.filter((token) => !css.includes(token));

if (missing.length) {
  console.error('test_responsive.js — FAIL');
  console.error('Missing breakpoints:', missing);
  process.exit(1);
}

console.log('test_responsive.js — PASS');
