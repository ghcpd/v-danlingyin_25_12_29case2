const fs = require('fs');
const path = require('path');

const requiredPaths = [
  'package.json',
  'tsconfig.json',
  'webpack.config.js',
  'public/index.html',
  'src/App.tsx',
  'src/index.tsx',
  'src/components',
  'src/pages',
  'src/types',
  'src/data/data.json',
  'src/styles',
];

const missing = requiredPaths.filter((p) => !fs.existsSync(path.join(__dirname, p)));

if (missing.length) {
  console.error('Missing required paths:', missing);
  process.exit(1);
}

console.log('test_structure.js — PASS');
