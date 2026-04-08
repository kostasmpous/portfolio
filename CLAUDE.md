# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a personal portfolio website. The active project lives in `my-portfolio/` — a React + Vite single-page app. There is also a root-level `package.json` that adds Tailwind CSS v4 (via `@tailwindcss/vite`) as a dev dependency, intended to be used alongside the Vite config in `my-portfolio/`.

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
- **App shell**: `src/App.jsx` → thin wrapper that renders `<ArchitectPortfolioPage />`
- **Main component**: `src/architect_portfolio_page.jsx` — the entire portfolio UI lives here as a single component

**Key dependencies:**
- `framer-motion` — animations
- `lucide-react` — icons
- Tailwind CSS v4 — utility styles (configured via `@tailwindcss/vite` plugin)

## ESLint Notes

- `no-unused-vars` ignores variables matching `^[A-Z_]` (uppercase constants/components are allowed to be declared without use)
- Config targets `.js` and `.jsx` files only (no TypeScript)
