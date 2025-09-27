import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg', '**/*.png'], // Ensures SVGs and PNGs are treated as assets
  server: {
    // Optional: Disable HMR overlay if needed
    hmr: { overlay: false },
  },
});