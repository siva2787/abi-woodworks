# ABI WOOD WORKS — Showcase Website

Static React + Vite + Tailwind site. No backend. Enquiries go to WhatsApp (`wa.me`).

## Run
```
npm install
npm run dev
```

## Build / Deploy (Vercel)
```
npm run build
```
Import the repo in Vercel (framework: Vite, output: `dist`). No environment variables.

## Edit content
- `src/data/businessData.ts` — phone, address, pricing note
- `src/data/products.ts` — products, prices, images
- `src/data/portfolio.ts` — gallery (set `verifiedProject: true` for real work)
- Put real photos in `public/images/` and reference them as `/images/name.jpg`. Broken images fall back to `public/images/placeholder.svg`.
