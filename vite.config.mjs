import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),

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
    },
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 10000,
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Розбиваємо важкі бібліотеки на окремі файли
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('three')) {
              return 'vendor-three';
            }
            if (id.includes('@ffmpeg')) {
              return 'vendor-ffmpeg';
            }
            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }
            if (id.includes('chart.js') || id.includes('wavesurfer') || id.includes('fabric')) {
              return 'vendor-graphics';
            }
            // Усі інші сторонні бібліотеки підуть сюди
            return 'vendor';
          }
        },
      },
    },
  },
});