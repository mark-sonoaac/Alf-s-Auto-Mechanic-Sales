# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Alf's Auto Mechanic & Sales LLC** — a website for a Newark, NJ auto repair shop and car dealership. Frontend-only React SPA with no backend yet; forms use `alert()` as placeholders.

## Commands

All commands run from `frontend/`:

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint on src/
```

No test suite is set up.

## Architecture

### Tech Stack
- React 18 + Vite 5, `react-router-dom` v6 (HashRouter), Tailwind CSS, GSAP (animations), axios
- HashRouter is used — all routes are hash-based (`/#/cars-for-sale`, etc.)
- Vite proxies `/api` → `http://localhost:5000` for future backend integration
- Dev server uses polling (`usePolling: true`) for Windows file watching

### Styling Approach
The project uses **both** Tailwind utility classes and custom CSS classes defined in `src/index.css`. The custom CSS handles the nav, hero section, image slider, car slider, and responsive breakpoints. When adding new UI, prefer Tailwind for page-level layouts, but extend `index.css` for structural components that need CSS variables or complex selectors.

Key custom CSS classes: `.nav`, `.main-section`, `.hero-section`, `.block`, `.slider-container`, `.car-slider-container`, `.car-slide`, `.page-section`, `.section-card`.

**CSS custom property pattern** — hero backgrounds are passed via `--hero-bg`:
```jsx
style={{ '--hero-bg': `url(${imageUrl})` }}
```

### Routing (`src/App.jsx`)
```
/              → Home
/services      → Services
/cars-for-sale → CarsForSale
/book-repair   → BookRepair
/my-repairs    → MyRepairs
/contact       → Contact
```

`ScrollToTop` component in `App.jsx` resets scroll position on every route change.

### Data (`src/data/carInventory.js`)
All car inventory and auto-shop image lists are **static JS arrays** — no API calls. Image URLs are resolved via `getImageUrl(imageName)` which prepends `/images/`. Images must exist in `public/images/` with subdirectories `auto-shops/` and `cars-for-sale/`.

### ContactModal
`ContactModal` is rendered in `App.jsx` (check `src/components/ContactModal.jsx`) and opened via a custom DOM event:
```js
window.dispatchEvent(new Event('openContactModal'))
```
This pattern is used in `CarsForSale.jsx` for the financing CTA button.

### Key Design Tokens
- **Primary red:** `#ef4444` (buttons, accents) — referenced as `bg-primary` in Tailwind (check `tailwind.config.js` if it exists, otherwise this resolves from a custom config)
- **Nav gradient:** `linear-gradient(90deg, #000 0%, #0f172a 45%, #1d4ed8 100%)`
- **Body background:** `#000` with white text
- **Page sections** alternate between transparent and `rgba(15,23,42,0.55)` (`.page-section.alt`)
- Font: Poppins (system fallback stack)

### Mobile Responsiveness
Nav collapses to a hamburger at `768px` with a slide-in drawer (toggled by `openNav` state in `Navigation.jsx`). Hero image slider hides on mobile; a CSS background image on `.hero-section` is shown instead using the `--hero-bg` variable.

### Pending Backend Integration
`MyRepairs.jsx` and `BookRepair.jsx` use hardcoded mock data / `alert()` for form submission. When a backend is added, these are the primary integration points. The axios package is installed but unused.
