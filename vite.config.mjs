import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools'; 
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

function inlineSmallEntryCss(maxBytes = 10 * 1024) {
  return {
    name: 'inline-small-entry-css',
    apply: 'build',
    async writeBundle(outputOptions, bundle) {
      const htmlAsset = Object.values(bundle).find(
        (asset) => asset.type === 'asset' && asset.fileName === 'index.html',
      );
      if (!htmlAsset || typeof htmlAsset.source !== 'string') return;

      const stylesheetLinks = [...htmlAsset.source.matchAll(
        /<link\b(?=[^>]*\brel=["']stylesheet["'])[^>]*\bhref=["']([^"']+)["'][^>]*>/gi,
      )];
      let html = htmlAsset.source;

      for (const [, linkTag, href] of stylesheetLinks) {
        const fileName = decodeURIComponent(href).replace(/^\//, '');
        const cssAsset = bundle[fileName];
        if (!cssAsset || cssAsset.type !== 'asset') continue;

        const css = typeof cssAsset.source === 'string'
          ? cssAsset.source
          : await readFile(resolve(outputOptions.dir ?? 'dist', fileName), 'utf8');
        if (Buffer.byteLength(css) > maxBytes) continue;

        html = html.replace(linkTag, `<style>${css}</style>`);
      }

      htmlAsset.source = html;
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    inlineSmallEntryCss(),

    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { 
        quality: 75, 
        effort: 4,
      },
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
  ],

  base: '/',

  optimizeDeps: {
    include: ['react', 'react-dom', 'firebase/app', 'firebase/firestore'],
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'esnext',
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