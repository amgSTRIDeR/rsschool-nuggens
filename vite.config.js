import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'node:path';

const root = import.meta.dirname;

const pageData = {
  '/index.html': {
    page: 'home',
    title: 'Nuggens — Home',
  },

  '/catalog.html': {
    page: 'catalog',
    title: 'Nuggens — Product catalog',
  },
};

export default defineConfig({
  appType: 'mpa',

  plugins: [
    handlebars({
      partialDirectory: resolve(root, 'src/templates/partials'),

      context(pagePath) {
        return pageData[pagePath] ?? {};
      },
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
