# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Alf's Auto Mechanic & Sales LLC** — a frontend-only React SPA for an auto repair business in Newark, NJ. All pages render correctly but forms are UI-only (no backend connected yet). A backend (Node.js + PostgreSQL) is planned for a future phase.

## Commands

All commands run from the `frontend/` directory:

```bash
cd frontend
npm install       # install dependencies
npm run dev       # dev server at http://localhost:3000
npm run build     # production build → frontend/dist/
npm run preview   # preview production build
npm run lint      # ESLint on src/
```

Vite proxies `/api` requests to `http://localhost:5000` (future backend).

## Architecture

**Router:** `HashRouter` with these routes (defined in `src/App.jsx`):
- `/` → Home, `/services` → Services, `/cars-for-sale` → CarsForSale
- `/cars/:id` → CarDetail (renders without Header/Footer — full-screen gallery layout)
- `/book-repair` → BookRepair, `/my-repairs` → MyRepairs, `/contact` → Contact

**Global state/UI:** `ContactModal` lives in `App.jsx` and is toggled via a prop passed down. `ScrollToTop` resets scroll on route change.

**Data:** Car inventory and hero images live in `src/data/carInventory.js` (static arrays — no API). Each car has `id, year, make, model, price, mileage, transmission, fuel, images[]`.

**Styling:** Tailwind CSS + custom CSS in `src/index.css`. Custom Tailwind colors: `primary` (#000), `secondary` (#3B82F6), `danger` (#EF4444), `success` (#10B981). Font is Poppins (Google Fonts, loaded in `index.html`). Icons via Unicons CDN.

## Deployment

Deployed on Vercel. Config in `vercel.json` at repo root — builds `frontend/`, outputs `frontend/dist/`, rewrites all paths to `index.html` for SPA routing.

## Notes

- Vite uses `usePolling: true` for Windows file-watching compatibility — don't remove this.
- `HashRouter` (not `BrowserRouter`) is intentional for static hosting compatibility.
- Business contact info (phone, email, address, hours, social handles) is hardcoded in component files — search for `alfsautomechanic` to find all instances.
