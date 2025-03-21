import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // ensures relative paths work on GitHub Pages
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
});