import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      // Explicitly mark problematic assets as external if they're meant to be loaded at runtime
      external: [
        // You can add external resources here if needed
      ]
    },
    // Make sure assets are placed in the correct directory
    assetsDir: 'assets',
    // Use relative paths for assets (important for fixing the build error)
    base: './'
  },
  // Make sure the dev server also uses relative paths
  base: './'
});