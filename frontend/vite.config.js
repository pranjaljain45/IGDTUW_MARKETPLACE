import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // important for relative paths when served from backend
  build: {
    outDir: 'dist',  // default output dir
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // for local dev proxy
    },
  },
});
