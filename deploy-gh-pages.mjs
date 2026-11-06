// Деплой dist/ у гілку gh-pages репозиторію stuxia.
// На відміну від пакета gh-pages, НЕ робить `git fetch` (він тягнув сотні МБ і «зависав»):
// локальний bare-репозиторій пам'ятає останній відправлений коміт, тож push шле лише змінені файли.
// Кожен деплой — коміт без батьків (як `gh-pages -f`), історія на GitHub не росте.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = 'https://github.com/TheTurkeyProgramist/stuxia.git';
const BRANCH = 'gh-pages';
const CNAME = 'stuxia.com';
const LAST_REF = 'refs/deploy/last';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const gitDir = path.join(root, 'node_modules', '.cache', 'deploy-gh-pages.git');

const git = (args, { capture = false, allowFail = false } = {}) => {
  try {
    const out = execFileSync('git', ['--git-dir', gitDir, '--work-tree', dist, ...args], {
      stdio: capture ? ['inherit', 'pipe', 'pipe'] : 'inherit',
      encoding: 'utf8',
    });
    return capture ? out.trim() : '';
  } catch (err) {
    if (allowFail) return '';
    throw err;
  }
};

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('❌ dist/index.html не знайдено — спершу запусти збірку (bun run build).');
  process.exit(1);
}

if (!fs.existsSync(gitDir)) {
  console.log('🆕 Створюю локальний репозиторій для деплою…');
  execFileSync('git', ['init', '--bare', '--quiet', gitDir], { stdio: 'inherit' });
  git(['remote', 'add', 'origin', REPO]);
}
// Файли сайту — байт-у-байт, без конвертації LF→CRLF з глобального конфігу Windows
git(['config', 'core.autocrlf', 'false']);
git(['config', 'core.safecrlf', 'false']);

fs.writeFileSync(path.join(dist, 'CNAME'), `${CNAME}\n`);
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

console.log('📝 Індексую dist…');
git(['add', '--all', '--force', '.']);
const tree = git(['write-tree'], { capture: true });
const last = git(['rev-parse', '--verify', '--quiet', `${LAST_REF}^{commit}`], { capture: true, allowFail: true });
const lastTree = last ? git(['rev-parse', `${last}^{tree}`], { capture: true }) : '';

let commit = last;
if (tree !== lastTree) {
  const message = `Deploy ${new Date().toISOString()}`;
  commit = git(['commit-tree', tree, '-m', message], { capture: true });
  console.log(`✅ Коміт ${commit.slice(0, 7)}: ${message}`);
} else {
  console.log('ℹ️  Файли не змінились з минулого деплою — повторно відправляю той самий коміт.');
}
git(['update-ref', `refs/heads/${BRANCH}`, commit]);

const dryRun = process.argv.includes('--dry-run');
console.log(`🚀 ${dryRun ? '[dry-run] ' : ''}Відправляю у ${REPO} (${BRANCH})…`);
git(['push', '--force', '--progress', ...(dryRun ? ['--dry-run'] : []), 'origin', `refs/heads/${BRANCH}:refs/heads/${BRANCH}`]);
if (dryRun) process.exit(0);
git(['update-ref', LAST_REF, commit]);

console.log(`\n🎉 Готово: https://${CNAME}/ (GitHub Pages оновиться за 1–2 хв)`);
