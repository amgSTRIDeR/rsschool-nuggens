import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'node:path';
import { pageData } from './src/data/page-data.js';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const root = import.meta.dirname;

export default defineConfig({
  appType: 'mpa',

  plugins: [
    handlebars({
      partialDirectory: resolve(root, 'src/templates/partials'),

      context(pagePath) {
        return pageData[pagePath] ?? {};
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images',
          dest: '',
        },
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      '@assets': resolve(root, 'src/assets'),
      '@js': resolve(root, 'src/js'),
      '@scss': resolve(root, 'src/scss'),
    },
  },

  server: {
    port: 5173,
    open: true,
  },

  preview: {
    port: 4173,
  },

  build: {
    outDir: 'dist',

    assetsDir: 'assets',

    sourcemap: true,

    minify: false,

    cssMinify: false,

    emptyOutDir: true,

    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        catalog: resolve(root, 'catalog.html'),
      },
    },
  },
});
