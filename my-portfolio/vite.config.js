import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from /portfolio/ (https://kostasmpous.github.io/portfolio/).
// Everywhere else (Vercel, Netlify, local preview) it is served from the root.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [react()],
})
