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
        effort: 4, // Трохи зменшили effort з 5 до 4, щоб білд збирався швидше
      },
    }),

    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Стискати тільки файли більші за 10KB
    }),

    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
  ],

  base: '/',

  // Прискорює розробку (dev server)
  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/firestore'],
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // Зменшили ліміт, щоб вчасно помічати роздуті файли
    minify: 'esbuild',
    target: 'esnext', // Дозволяє esbuild генерувати сучасніший і компактніший код
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
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
            return 'vendor-libs';
          }
        },
      },
    },
  },
});