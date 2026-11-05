# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a personal portfolio website. The active project lives in `my-portfolio/` — a React + Vite single-page app, deployed to GitHub Pages (https://kostasmpous.github.io/portfolio/) by `.github/workflows/deploy.yml` on every push to `main`. The look comes from the "Konstantinos Bous Design System" (Portfolio v5 layout).

## Commands

All commands should be run from the `my-portfolio/` directory:

```bash
cd my-portfolio

npm run dev       # Start dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

- **Entry point**: `src/main.jsx` → renders `<App />` into `#root`
- **App shell**: `src/App.jsx` → renders `<Portfolio />`
- **Page**: `src/Portfolio.jsx` — all sections (nav, hero, work, experience, about, contact, footer)
- **Content**: `src/data.js` — every piece of text, project, job and link; edit this to update the site
- **Styles**: `src/index.css` (plain CSS, no Tailwind) + `src/styles/tokens-colors.css` (design-system colour tokens)
- `vite.config.js` uses `base: '/portfolio/'` when built in GitHub Actions (Pages) and `/` elsewhere (Vercel, local)

**Key dependencies:** `lucide-react` (icons)

## ESLint Notes

- `no-unused-vars` ignores variables matching `^[A-Z_]` (uppercase constants/components are allowed to be declared without use)
- Config targets `.js` and `.jsx` files only (no TypeScript)
