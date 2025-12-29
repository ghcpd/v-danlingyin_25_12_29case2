const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tests = [
  'test_structure.js',
  'test_typescript.js',
  'test_components.js',
  'test_rendering.js',
  'test_data_loading.js',
  'test_routing.js',
  'test_responsive.js',
];

const logLines = [];
let failed = false;

tests.forEach((test) => {
  const res = spawnSync('node', [test], { stdio: 'pipe' });
  const output = res.stdout.toString() + res.stderr.toString();
  logLines.push(output.trim());
  if (res.status !== 0) {
    failed = true;
  }
  process.stdout.write(output);
});

const summary = failed ? 'FAIL' : 'PASS';
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
fs.writeFileSync(path.join(logDir, 'test_results.log'), logLines.join('\n'));

console.log(`Overall: ${tests.length - (failed ? 1 : 0)}/${tests.length} ${summary}`);
process.exit(failed ? 1 : 0);
