# Nature's Nurture

Premium editorial brand website and product catalogue foundation for Nature's Nurture, operated by Rainmaker FMCG.

## Technology

- React 18
- TypeScript
- Vite
- React Router
- Lucide React
- GSAP (reserved for the animation layer)

## Setup

```bash
npm install
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

## Structure

- `src/components/layout`: shared site shell components
- `src/data`: typed, source-controlled product and company data
- `src/pages`: route-level views
- `src/styles`: design tokens and global foundation styles
- `public/images`: approved product, brand, lifestyle, botanical, and editorial imagery
- `public/fonts`: self-hosted typefaces when approved assets are supplied
- `source-material`: read-only client PDFs for asset ingestion at the project root
- `scripts/assets`: repeatable PDF extraction and contact-sheet workflow
- `docs`: generated asset inventory and human review checklist

## Product data and assets

Product data is intentionally empty until the supplied client profiles are available. Add only verified information to `src/data/products.ts`, with a `source` reference for traceability. Store approved product imagery under `public/images/products` and reference it with a root-relative path. Do not fabricate packaging, claims, ingredients, sizes, certifications, or photography.

## PDF asset ingestion

Place client PDFs in `/source-material/` at the project root. The original files are never modified. Install the asset tooling once with:

```bash
python -m pip install -r requirements-assets.txt
```

Run the complete workflow with:

```bash
npm run assets:all
```

The workflow scans all PDFs recursively, extracts embedded images into `public/images/_extracted/`, renders every page at review resolution into `public/images/_pages/`, and creates bounded contact sheets in `docs/contact-sheet-01.png`, `docs/contact-sheet-02.png`, and so on. It also writes `docs/assets.json`, `docs/asset-inventory.md`, and `docs/product-image-review.md`. Generated extraction and page folders are safe to regenerate; `public/images/products/` is never populated automatically.

Convenience commands are available for `assets:extract`, `assets:inventory`, and `assets:contact-sheet`. Each command currently rebuilds the generated review set so that inventory and imagery cannot drift apart.

To review assets, open the contact sheets, use each filename and source page to inspect the original PDF, then update the status and confidence in `docs/product-image-review.md`. Copy only confirmed, unaltered product imagery into `public/images/products/`. Place candidates that need further checking in `public/images/_review/`. Product associations are intentionally conservative and are marked `needs-review` unless a single supported product context is found in the page text.

## Routes

The foundation reserves routes for `/`, `/products`, `/products/:slug`, `/brands`, `/brands/:slug`, `/about`, `/retailers`, and `/contact`, plus a catch-all 404 state. Route content will be built after approved source material is available.

## Deployment

The Vite output in `dist` can be deployed to any static host configured to fall back to `index.html` for client-side routes. Configure the production canonical origin and metadata strategy when the deployment domain is confirmed.
