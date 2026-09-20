import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),

    // Оптимізація та стиснення підсумкових медіафайлів
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { 
        quality: 75, 
        effort: 5, 
      },
    }),

    // Стиснення gzip
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),

    // Стиснення brotli
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
    },
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