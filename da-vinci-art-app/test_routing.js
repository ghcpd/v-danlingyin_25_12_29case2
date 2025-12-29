const fs = require('fs');
const path = require('path');

const appFile = fs.readFileSync(path.join(__dirname, 'src', 'App.tsx'), 'utf8');
const requiredRoutes = ['/', '/gallery', '/artwork/:id', '/bio', '/contact'];
const missing = requiredRoutes.filter((route) => !appFile.includes(route));

if (missing.length) {
  console.error('test_routing.js — FAIL');
  console.error('Missing routes:', missing);
  process.exit(1);
}

console.log('test_routing.js — PASS');
