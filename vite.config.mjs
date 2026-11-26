import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { UKRAINE_CITIES_40, getCitySlug, getCitySeo, CITY_PAGE_LANGS } from './src/utils/citiesDatabase.js';
import {
  buildLocalizedCityPage,
  buildHreflangLinks,
  buildLanguageLinks,
  loadSeoStrings,
  RTL_LANGS,
  OG_LOCALE,
} from './scripts/cityPageI18n.mjs';
import {
  REGIONS,
  buildCitySection,
  buildCityJsonLd,
  buildRegionPage,
} from './scripts/cityPageContent.mjs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';
import reactIconsSplit from './vite-plugins/reactIconsSplit.mjs';
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

// Повітряні тривоги для «Карти Стихії» : ubilling.net.ua не віддає CORS,
// тож dev-сервер ходить по дані сам і кешує їх на 30 секунд. У проді це functions/api/air-alerts.js
function airAlertsPlugin() {
  let cached = null;
  return {
    name: 'vite-plugin-air-alerts',
    configureServer(server) {
      server.middlewares.use('/api/air-alerts', async (req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        try {
          if (!cached || Date.now() - cached.time > 30_000) {
            const upstream = await fetch('https://ubilling.net.ua/aerialalerts/', { signal: AbortSignal.timeout(10_000) });
            if (!upstream.ok) throw new Error(`ubilling ${upstream.status}`);
            cached = { time: Date.now(), body: await upstream.text() };
          }
          res.end(cached.body);
        } catch (err) {
          // Старі дані краще за порожнечу, але лише якщо вони не застарілі зовсім
          if (cached && Date.now() - cached.time < 5 * 60_000) {
            res.end(cached.body);
            return;
          }
          res.statusCode = 502;
          res.end(JSON.stringify({ error: String(err.message || err) }));
        }
      });
    },
  };
}

const SITE_URL = 'https://stuxia.com';

// Після збірки: статична сторінка на кожне місто з бази (dist/pohoda/<slug>/index.html)
// з назвою міста в title/description/og — щоб Google показував «погода Конотоп».
// Міста з кліматом (src/data/cityClimate.json) отримують унікальний вміст: клімат по місяцях,
// рекорди, світловий день, найближчі міста (scripts/cityPageContent.mjs). Плюс сторінки областей
// (/pohoda/sumska-oblast/) і свіжий sitemap.xml.
// Застосунок сам читає /pohoda/<slug>/ і відкриває погоду цього міста.
function cityPagesPlugin() {
  let outDir = 'dist';
  const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const setMeta = (html, attr, key, value) =>
    html.replace(
      new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`),
      `$1${escapeHtml(value)}$2`,
    );
  // Заголовок, опис, og/twitter, canonical і JSON-LD — однаково для міст і областей
  const renderPage = (base, { url, title, shortTitle, description, section, jsonLd, lang = 'uk', hreflang = '' }) => {
    let html = base.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
    // Мова сторінки: <html lang/dir> і og:locale (застосунок потім бере ту саму мову з адреси)
    html = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"${RTL_LANGS.has(lang) ? ' dir="rtl"' : ''}`);
    html = setMeta(html, 'property', 'og:locale', OG_LOCALE[lang] || 'uk_UA');
    html = setMeta(html, 'name', 'description', description);
    html = setMeta(html, 'property', 'og:url', url);
    html = setMeta(html, 'property', 'og:title', shortTitle);
    html = setMeta(html, 'property', 'og:description', description);
    html = setMeta(html, 'name', 'twitter:title', shortTitle);
    html = setMeta(html, 'name', 'twitter:description', description);
    // Видимий текст поза #root: React його не перемальовує, тож Google бачить H1 і клімат
    // і в сирому HTML, і після виконання JS (внизу сторінки)
    html = html.replace('</main>', `</main>\n    ${section}`);
    html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`);
    const ld = jsonLd
      .map((item) => `<script type="application/ld+json">${JSON.stringify(item).replace(/</g, '\\u003c')}</script>`)
      .join('\n  ');
    return html.replace('</head>', `${hreflang ? `${hreflang}\n    ` : ''}${ld}\n  </head>`);
  };
  // slug — шлях усередині dist: «pohoda/konotop» або «en/konotop»
  const writePage = (slug, html) => {
    const dir = path.join(outDir, ...slug.split('/'));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  };

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
        const climatePath = path.resolve('src/data/cityClimate.json');
        const climate = fs.existsSync(climatePath) ? JSON.parse(fs.readFileSync(climatePath, 'utf8')) : {};
        const seoStrings = Object.fromEntries(CITY_PAGE_LANGS.map((l) => [l, loadSeoStrings(l)]));
        let localizedCount = 0;

        for (const city of UKRAINE_CITIES_40) {
          const slug = getCitySlug(city);
          if (!slug) continue;
          const url = `${SITE_URL}/pohoda/${slug}/`;
          // Ті самі тексти ставить і застосунок (App.jsx), тож після JS заголовок не зміниться
          const seo = getCitySeo(city);
          const hreflang = buildHreflangLinks(city);
          const ukSection = buildCitySection(city, UKRAINE_CITIES_40, climate).replace(
            /\s*<\/section>$/,
            `\n      ${buildLanguageLinks(city, 'uk', 'Іншими мовами')}\n    </section>`,
          );
          writePage(
            `pohoda/${slug}`,
            renderPage(base, {
              url,
              title: seo.title,
              shortTitle: seo.shortTitle,
              description: seo.description,
              section: ukSection,
              jsonLd: buildCityJsonLd(city, url),
              hreflang,
            }),
          );
          // Сторінки з кліматом повніші — трохи вищий пріоритет
          urls.push({ loc: url, priority: climate[slug] ? '0.9' : '0.8' });

          // Та сама сторінка 25 іншими мовами: /en/konotop/, /de/konotop/ …
          for (const lang of CITY_PAGE_LANGS) {
            const page = buildLocalizedCityPage(city, lang, UKRAINE_CITIES_40, climate, seoStrings[lang]);
            writePage(`${lang}/${slug}`, renderPage(base, { ...page, lang, hreflang }));
            urls.push({ loc: page.url, priority: climate[slug] ? '0.7' : '0.6' });
            localizedCount += 1;
          }
        }

        for (const region of REGIONS) {
          const page = buildRegionPage(region, UKRAINE_CITIES_40, climate);
          const url = `${SITE_URL}/pohoda/${region.slug}/`;
          writePage(
            `pohoda/${region.slug}`,
            renderPage(base, {
              url,
              title: page.title,
              shortTitle: page.shortTitle,
              description: page.description,
              section: page.section,
              jsonLd: [
                {
                  '@context': 'https://schema.org',
                  '@type': 'ItemList',
                  name: `Погода ${region.inRegion}`,
                  itemListElement: page.cities.map((c, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: c.name,
                    url: `${SITE_URL}/pohoda/${getCitySlug(c)}/`,
                  })),
                },
              ],
            }),
          );
          urls.push({ loc: url, priority: '0.9' });
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
        const withClimate = UKRAINE_CITIES_40.filter((c) => climate[getCitySlug(c)]).length;
        console.log(
          `\n🏙️  Сторінки міст: ${urls.length - 1 - REGIONS.length - localizedCount} (з кліматом: ${withClimate}), ` +
            `іншими мовами: ${localizedCount}, ` +
            `областей: ${REGIONS.length}; sitemap.xml оновлено`,
        );
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
    airAlertsPlugin(),
    // Кожна іконка react-icons — окремий модуль, щоб іконки модалок не вантажились на старті
    reactIconsSplit(),
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

    // Карта розміру файлів — лише за `bun run analyze` (ANALYZE=1). Пишеться в корінь
    // проєкту (у .gitignore), а не в dist, щоб stats.html не потрапляв на сайт.
    process.env.ANALYZE &&
      visualizer({
        filename: './stats.html',
        open: true,
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
          // Сторінки міст 25 мовами (/en/konotop/index.html …) — ~3900 файлів, ще й із редиректом 308.
          // У precache вони роблять установку нового SW нескінченною — і люди застрягали на старій
          // збірці з ключами замість перекладів. Наперед кешуємо лише кореневий index.html
          '*/**/*.html',
          '**/vendor-firebase-*.js', '**/vendor-ai-*.js',
          // Офлайн-ШІ (WebLLM ~7 МБ) качаємо лише тим, хто його ввімкне
          '**/vendor-webllm-*.js', '**/offlineLlm.worker-*.js',
          // Мови (26 × переклади + фрази ≈ 4,8 МБ) наперед не качаємо: людині потрібна одна —
          // вона закешується правилом «i18n» у runtimeCaching, щойно її відкриють
          '**/assets/i18n/**',
          // Карта вибору місця (Leaflet) — окремий великий чанк, потрібен лише тим, хто відкриє карту
          '**/MapPicker-*',
          // Карта Стихії з MapLibre: без мережі вона все одно не працює
          '**/maplibre-gl*', '**/StyxiaMap-*',
        ],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: '/index.html',
        // Сторінки міст (/pohoda/<slug>/, /en/<slug>/) — власні статичні HTML з SEO-тегами,
        // не підміняти їх загальним index.html
        navigateFallbackDenylist: [/^\/api\//, /\.[a-z0-9]+$/i, /^\/pohoda\//, /^\/[a-z]{2}\/[a-z-]+\/?$/],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            // Файли мов: імена з хешем, тож CacheFirst безпечний — нова збірка дасть нові імена
            urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith('/assets/i18n/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'i18n',
              expiration: { maxEntries: 12, maxAgeSeconds: 60 * 24 * 60 * 60 },
              // Неіснуючий файл Cloudflare віддає як index.html зі статусом 200 — такого не кешуємо
              cacheableResponse: { statuses: [200], headers: { 'content-type': 'application/javascript' } },
            },
          },
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
  output: {
  // Мови — окремою текою assets/i18n/ (див. globIgnores і runtimeCaching у VitePWA)
  chunkFileNames: (chunk) =>
    /[\\/]src[\\/]i18n[\\/](locales|phrases)[\\/]/.test(chunk.facadeModuleId || '')
      ? 'assets/i18n/[name]-[hash].js'
      : 'assets/[name]-[hash].js',
  manualChunks(id) {
  if (id.includes('node_modules')) {
    if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
      return 'vendor-react';
    }
    // Самі іконки сюди вже не потрапляють: плагін reactIconsSplit робить кожну окремим модулем
    // (з префіксом «react-icon:», не з node_modules), і вони їдуть разом з кодом, якому потрібні.
    // Тут лишається лише спільне ядро react-icons/lib (GenIcon) та UI-бібліотеки.
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
    if (id.includes('@mlc-ai/web-llm')) {
      return 'vendor-webllm';
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