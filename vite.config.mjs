import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';
import { visualizer } from 'rollup-plugin-visualizer';

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

export default defineConfig({
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

    // Інтерактивна карта розміру файлів після білду
    visualizer({
      filename: './dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  base: '/',

  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/firestore'],
  },

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    target: 'es2020',
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
    // Markdown та парсери
    if (/\/node_modules\/(react-markdown|unified|micromark|vfile|mdast-util-|unread|property-information|stylis)\//.test(id)) {
      return 'vendor-markdown';
    }
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
    if (id.includes('@ffmpeg')) {
      return 'vendor-ffmpeg';
    }
    if (id.includes('chart.js') || id.includes('wavesurfer') || id.includes('fabric')) {
      return 'vendor-graphics';
    }
    if (id.includes('@huggingface') || id.includes('@google/generative-ai')) {
      return 'vendor-ai';
    }
  }
}
  },
     },
  },
});