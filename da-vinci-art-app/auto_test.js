const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
const logFile = path.join(logDir, 'auto_test_run.log');

const run = (cmd, args) => {
  const res = spawnSync(cmd, args, { stdio: 'pipe' });
  fs.appendFileSync(logFile, `\n$ ${cmd} ${args.join(' ')}\n`);
  fs.appendFileSync(logFile, res.stdout.toString());
  fs.appendFileSync(logFile, res.stderr.toString());
  return res.status === 0;
};

let ok = true;

if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  ok = ok && run(npmCmd, ['install']);
}

ok = ok && run('npx', ['tsc', '--noEmit']);
ok = ok && run('node', ['test_runner.js']);

fs.appendFileSync(logFile, `\nFinal status: ${ok ? 'PASS' : 'FAIL'}\n`);
console.log(`auto_test.js — ${ok ? 'PASS' : 'FAIL'}`);
process.exit(ok ? 0 : 1);
