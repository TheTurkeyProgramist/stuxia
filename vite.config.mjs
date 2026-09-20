import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression'; // <--- 1. Імпортуємо плагін

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: { quality: 80 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  base: '/',
  define: {
    'process.env': {},
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "unsafe-none",
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    }
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 10000,
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});