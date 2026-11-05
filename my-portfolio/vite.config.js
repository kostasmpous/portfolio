import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://kostasmpous.github.io/portfolio/ on GitHub Pages
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
