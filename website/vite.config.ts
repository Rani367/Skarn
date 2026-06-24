import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project page lives at https://rani367.github.io/Skarn/ — the base path matters
// (case-sensitive) so every JS/CSS/asset URL resolves under /Skarn/.
export default defineConfig({
  base: '/Skarn/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // keep the heavy WebGL stack in its own long-cached chunk
        manualChunks: {
          three: ['three'],
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },
})
