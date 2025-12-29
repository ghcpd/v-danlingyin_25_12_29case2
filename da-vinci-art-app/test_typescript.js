const { execSync } = require('child_process');

try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('test_typescript.js — PASS');
} catch (err) {
  console.error('test_typescript.js — FAIL');
  process.exit(1);
}
