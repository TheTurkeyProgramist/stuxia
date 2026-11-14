// Тимчасовий конфіг для аналізу вмісту main-чанка (буде видалено після аналізу)
import zlib from 'node:zlib';
import fs from 'node:fs';
import base from './vite.config.mjs';

const report = {
  name: 'main-chunk-report',
  apply: 'build',
  generateBundle(_, bundle) {
    const rows = [];
    for (const chunk of Object.values(bundle)) {
      if (chunk.type !== 'chunk' || !new RegExp(process.env.CHUNK_RE || 'main-').test(chunk.fileName)) continue;
      for (const [id, info] of Object.entries(chunk.modules)) {
        const code = info.code || '';
        rows.push({
          id: id.split('react-weather-music-project').pop().replace(/\\/g, '/'),
          raw: info.renderedLength,
          gz: code ? zlib.gzipSync(code).length : 0,
        });
      }
    }
    rows.sort((a, b) => b.gz - a.gz || b.raw - a.raw);
    fs.writeFileSync(process.env.MAIN_REPORT, JSON.stringify(rows, null, 1));
  },
};

export default (env) => {
  const config = base(env);
  config.plugins = [...config.plugins.filter(Boolean), report];
  config.build = { ...config.build, outDir: process.env.MAIN_OUT };
  return config;
};
