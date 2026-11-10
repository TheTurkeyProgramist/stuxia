import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { UKRAINE_CITIES_40, getCitySlug } from './src/utils/citiesDatabase.js';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';
import { visualizer } from 'rollup-plugin-visualizer';
import fs from 'node:fs';
import path from 'node:path';

const SIZE_GROUPS = [
  ['JS', /\.m?js$/i],
  ['Sourcemap (.map)', /\.map$/i],
  ['CSS', /\.css$/i],
  ['Зображення', /\.(webp|png|jpe?g|gif|svg|ico|avif)$/i],
  ['Відео', /\.(webm|mp4)$/i],
  ['Аудіо', /\.(mp3|ogg|opus|wav)$/i],
  ['Стиснені (.gz/.br)', /\.(gz|br)$/i],
];

function buildSizeSummaryPlugin() {
  let outDir = 'dist';
  const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : [p];
    });
  const fmt = (b) => `${(b / 1024 / 1024).toFixed(2)} МБ`;

  return {
    name: 'build-size-summary',
    apply: 'build',
    enforce: 'post',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle: {
      order: 'post',
      handler() {
        if (!fs.existsSync(outDir)) return;
        const totals = new Map(SIZE_GROUPS.map(([name]) => [name, 0]));
        let other = 0;
        let all = 0;
        for (const file of walk(outDir)) {
          const size = fs.statSync(file).size;
          all += size;
          const group = SIZE_GROUPS.find(([, re]) => re.test(file));
          if (group) totals.set(group[0], totals.get(group[0]) + size);
          else other += size;
        }
        console.log('\n📦 Розмір збірки:', outDir);
        for (const [name, size] of totals) {
          if (size) console.log(`   ${name.padEnd(20)} ${fmt(size)}`);
        }
        if (other) console.log(`   ${'Інше'.padEnd(20)} ${fmt(other)}`);
        console.log(`   ${'РАЗОМ'.padEnd(20)} ${fmt(all)}\n`);
      },
    },
  };
}

function newsFeedPlugin() {
  const handlerMiddleware = async (req, res, next) => {
    if (!req.url || !req.url.startsWith('/api/news-feed')) {
      return next();
    }
    const url = new URL(req.url, 'http://localhost');
    const query = Object.fromEntries(url.searchParams.entries());

    const adaptedReq = {
      method: req.method,
      query,
    };

    const adaptedRes = {
      setHeader: (k, v) => res.setHeader(k, v),
      status: (code) => {
        res.statusCode = code;
        return {
          json: (data) => {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(data));
          },
          end: () => res.end(),
        };
      },
      end: () => res.end(),
    };

    try {
      const { default: handler } = await import('./api/news-feed.js');
      await handler(adaptedReq, adaptedRes);
    } catch (err) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ error: err.message }));
    }
  };

  return {
    name: 'vite-plugin-news-feed',
    configureServer(server) {
      server.middlewares.use(handlerMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handlerMiddleware);
    },
  };
}

const SITE_URL = 'https://stuxia.com';

// Після збірки: статична сторінка на кожне місто з бази (dist/pohoda/<slug>/index.html)
// з назвою міста в title/description/og — щоб Google показував «погода Конотоп».
// Застосунок сам читає /pohoda/<slug>/ і відкриває погоду цього міста. Плюс свіжий sitemap.xml.
function cityPagesPlugin() {
  let outDir = 'dist';
  const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const setMeta = (html, attr, key, value) =>
    html.replace(
      new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`),
      `$1${escapeHtml(value)}$2`,
    );

  return {
    name: 'city-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle: {
      order: 'pre',
      handler() {
        const indexPath = path.join(outDir, 'index.html');
        if (!fs.existsSync(indexPath)) return;
        const base = fs.readFileSync(indexPath, 'utf8');
        const today = new Date().toISOString().slice(0, 10);
        const urls = [{ loc: `${SITE_URL}/`, priority: '1.0' }];

        for (const city of UKRAINE_CITIES_40) {
          const slug = getCitySlug(city);
          if (!slug) continue;
          const url = `${SITE_URL}/pohoda/${slug}/`;
          const title = `Погода ${city.name} — точний прогноз на сьогодні, завтра і 16 днів | Стихія`;
          const description = `Погода в місті ${city.fullName}: температура зараз, погодинний прогноз, вітер, опади, УФ-індекс і графіки на 16 днів.`;

          let html = base.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
          html = setMeta(html, 'name', 'description', description);
          html = setMeta(html, 'property', 'og:url', url);
          html = setMeta(html, 'property', 'og:title', `Погода ${city.name} | Стихія`);
          html = setMeta(html, 'property', 'og:description', description);
          html = setMeta(html, 'name', 'twitter:title', `Погода ${city.name} | Стихія`);
          html = setMeta(html, 'name', 'twitter:description', description);
          html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
          html = html.replace(
            '</head>',
            `<script type="application/ld+json">${JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Place',
              name: city.name,
              description: `Прогноз погоди в місті ${city.name}`,
              geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lon },
              address: { '@type': 'PostalAddress', addressCountry: 'UA', addressLocality: city.name },
            })}</script>\n  </head>`,
          );

          const dir = path.join(outDir, 'pohoda', slug);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, 'index.html'), html);
          urls.push({ loc: url, priority: '0.8' });
        }

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
        console.log(`\n🏙️  Сторінки міст: ${urls.length - 1}, sitemap.xml оновлено`);
      },
    },
  };
}

// Статистика відвідувань GoatCounter (turkeyweather.goatcounter.com); лише у збірці — локальна розробка не рахується.
// Інший код можна задати через VITE_GOATCOUNTER_CODE у .env
function analyticsPlugin(code) {
  return {
    name: 'goatcounter',
    apply: 'build',
    transformIndexHtml() {
      if (!code) return [];
      return [
        {
          tag: 'script',
          attrs: {
            'data-goatcounter': `https://${code}.goatcounter.com/count`,
            async: true,
            src: 'https://gc.zgo.at/count.js',
          },
          injectTo: 'head',
        },
      ];
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
  plugins: [
    newsFeedPlugin(),
    react(),
    imagetools(),

    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),

    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),

    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),

    // Інтерактивна карта розміру файлів після білду; браузер відкривається лише з ANALYZE=1
    visualizer({
      filename: './dist/stats.html',
      open: !!process.env.ANALYZE,
      gzipSize: true,
      brotliSize: true,
    }),

    // Офлайн: застосунок (js/css/html/іконки) зберігається при першому візиті,
    // відповіді Open-Meteo — NetworkFirst, щоб без зв'язку показати останній прогноз
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: null, // /sw.js реєструє скрипт в index.html
      manifest: false, // лишаємо public/manifest.json
      workbox: {
        // Обробник натискання на сповіщення про термінові новини
        importScripts: ['sw-notifications.js'],
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // Firebase і ШІ без мережі все одно не працюють — не витрачаємо на них трафік наперед
        globIgnores: [
          '**/stats.html', '**/pohoda/**', 'og-image.png', 'icons/new/**',
          '**/vendor-firebase-*.js', '**/vendor-ai-*.js',
        ],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//, /\.[a-z0-9]+$/i],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.hostname === 'api.open-meteo.com',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'weather-api',
              networkTimeoutSeconds: 6,
              expiration: { maxEntries: 40, maxAgeSeconds: 3 * 24 * 60 * 60 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ request, sameOrigin }) => sameOrigin && request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 },
            },
          },
        ],
      },
    }),

    cityPagesPlugin(),
    analyticsPlugin(env.VITE_GOATCOUNTER_CODE || 'turkeyweather'),
    buildSizeSummaryPlugin(),
  ],

  base: '/',

  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/firestore'],
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        // console.error/warn лишаються — щоб бачити помилки на телефонах користувачів
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        drop_debugger: true,
      },
    },
    // Реальний мінімум задає CSS color-mix() (32 файли) та dvh/AbortSignal.timeout:
    // нижчі браузери все одно ламаються, тож не транспілюємо під них зайвого.
    // Заодно CSS-мініфікатор додасть -webkit-backdrop-filter для Safari < 18.
    target: ['chrome111', 'edge111', 'firefox114', 'safari16.4'],
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
  output: {manualChunks(id) {
  if (id.includes('node_modules')) {
    if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
      return 'vendor-react';
    }
    if (/\/node_modules\/(react-icons|@floating-ui|@radix-ui)\//.test(id)) {
      return 'vendor-ui';
    }
    // Markdown окремо не виділяємо: Rolldown затягує в групу й залежності (React),
    // і чанк ставав обов'язковим на старті. Без правила markdown іде разом з ліниво завантаженим ШІ.
    // Інтернаціоналізація (i18n)
    if (id.includes('i18next') || id.includes('react-i18next')) {
      return 'vendor-i18n';
    }
    // Мережа та утиліти
    if (id.includes('axios') || id.includes('localforage')) {
      return 'vendor-utils';
    }
    if (/\/node_modules\/(firebase|@firebase)\//.test(id)) {
      return 'vendor-firebase';
    }
    if (id.includes('html2canvas')) {
      return 'vendor-html2canvas';
    }
    if (id.includes('framer-motion')) {
      return 'vendor-motion';
    }
    if (id.includes('three')) {
      return 'vendor-three';
    }
    if (id.includes('chart.js') || id.includes('fabric')) {
      return 'vendor-graphics';
    }
    if (id.includes('@google/generative-ai')) {
      return 'vendor-ai';
    }
  }
}
  },
     },
  },
  };
});