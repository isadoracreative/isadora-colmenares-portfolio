# Design System Foundation — Implementation Plan

## Goal

Establish a clean app foundation that correctly maps Figma design variables into Tailwind CSS, set up fonts following modern best practices, and build a permanent `/design-system` spec sheet page that visually documents all typography and color tokens.

## Current State

- **Next.js 16 / React 19 / Tailwind v4** — clean scaffold, placeholder home page
- **[variables.json](file:///Users/isadora/Projects/isadora-colmenares-portfolio/config/variables.json)** — 3 collections: Primitive colors, Colors (semantic), Typography (Mobile/Desktop modes)
- **[globals.css](file:///Users/isadora/Projects/isadora-colmenares-portfolio/src/app/globals.css)** — `@theme` block with colors in px sizes (needs rem conversion), missing some semantic tokens
- **Fonts** — Montserrat + Karla loaded as local `.ttf` files via `next/font/local` — **needs migration to `next/font/google`**
- **Font Awesome 7 Pro** — Kit loaded via script; icon style is `fa-sharp fa-thin`

---

## Proposed Changes

### 1. Font Migration — Local `.ttf` → `next/font/google`

#### [MODIFY] [layout.tsx](file:///Users/isadora/Projects/isadora-colmenares-portfolio/src/app/layout.tsx)

Replace `next/font/local` with `next/font/google` for both Montserrat and Karla:

```tsx
import { Montserrat, Karla } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
});
```

**Why this is better than local `.ttf` files:**
- `next/font/google` **self-hosts** at build time — zero runtime requests to Google servers (same privacy benefit as local files)
- Automatic **subsetting** — only ships Latin glyphs you need, smaller payload than full `.ttf` files
- Handles **`font-display: swap`** — text visible immediately, font swaps in without layout shift
- No manual `.ttf` management — the 6 font files in `/public/fonts/` can be removed

> [!NOTE]
> Added weight `500` to Karla — the Figma export uses `fontWeight: 500` for some body text (company names, taglines). Your current local font setup only loads 400/600/700.

Other `layout.tsx` changes:
- Update metadata title/description
- Keep Font Awesome Kit script as-is

#### [DELETE] Font files from `/public/fonts/`
- `karla-400.ttf`, `karla-600.ttf`, `karla-700.ttf`
- `montserrat-400.ttf`, `montserrat-600.ttf`, `montserrat-700.ttf`

---

### 2. Design Token Overhaul

#### [MODIFY] [globals.css](file:///Users/isadora/Projects/isadora-colmenares-portfolio/src/app/globals.css)

Rewrite the `@theme` block to match `variables.json` exactly, with all font sizes converted from px to rem:

**Typography tokens (mobile-first defaults):**

| Token | Mobile | Desktop (≥lg) |
|-------|--------|---------------|
| `--text-h1` | 2rem | 3.75rem |
| `--text-h2` | 1.5rem | 2.75rem |
| `--text-h3` | 1.375rem | 2rem |
| `--text-h4` | 1.25rem | 1.625rem |
| `--text-h5` | 1.1875rem | 1.375rem |
| `--text-h6` | 1.125rem | 1.25rem |
| `--text-para-xl` | 1.25rem | *(same)* |
| `--text-para-lg` | 1.125rem | *(same)* |
| `--text-para` | 1rem | *(same)* |
| `--text-para-sm` | 0.875rem | *(same)* |
| `--text-para-xs` | 0.75rem | *(same)* |

**Color tokens** — keep all existing primitives and semantic tokens. Add the missing interactive state tokens from the Colors collection:
- `--color-interactive-hover: var(--color-gray-70)` — Gray 70 / `#525b5b`
- `--color-interactive-active: var(--color-gray-100)` — Gray 100 / `#0a0b0b`

**No `--color-accent` token** — the Core Colors already include "Green" (`--color-green-50`) as the semantic name for the brand accent.

**Base typography styles** — add a `@layer base` block mapping HTML heading elements to the correct font families, weights, and size tokens.

---

### 3. Design System Spec Sheet

#### [NEW] [page.tsx](file:///Users/isadora/Projects/isadora-colmenares-portfolio/src/app/design-system/page.tsx)

A permanent `/design-system` route with two sections:

**A. Typography Specimen**
- Each heading level (H1–H6) rendered at its actual size, showing:
  - Token name and CSS variable (e.g., `--text-h1`)
  - Mobile value / Desktop value (e.g., `2rem / 3.75rem`)
  - Font: Montserrat, weight 600 (Semibold)
- Each paragraph size (XL through XS) in Karla at weight 400
- Visual indicator of which sizes are responsive (headings) vs. static (paragraphs)

**B. Color Palette**
- **Primitive colors**: Each hue family (Gray, Blue, Green, Yellow, Orange, Red, Purple) as a horizontal swatch row, showing all 11 stops (00–100) with hex values
- **Semantic colors**: Core Colors, Text, and Interactive groups showing their alias chain (e.g., "Text primary → Gray 90 → `#222526`")

#### [NEW] [layout.tsx](file:///Users/isadora/Projects/isadora-colmenares-portfolio/src/app/design-system/layout.tsx) *(optional)*

A lightweight layout wrapper for the design-system route with appropriate metadata (`<title>Design System | Isadora Colmenares</title>`).

---

### 4. Home Page

#### [MODIFY] [page.tsx](file:///Users/isadora/Projects/isadora-colmenares-portfolio/src/app/page.tsx)

Replace the placeholder with a clean, minimal landing page — just the name and a link to `/design-system`. This keeps the root route functional while the portfolio is being built.

---

## File Summary

| Action | File | Purpose |
|--------|------|---------|
| MODIFY | `src/app/globals.css` | Token overhaul: px→rem, add missing semantic tokens, base typography styles |
| MODIFY | `src/app/layout.tsx` | Migrate fonts to `next/font/google`, update metadata |
| MODIFY | `src/app/page.tsx` | Clean minimal home page |
| NEW | `src/app/design-system/page.tsx` | Spec sheet: typography + color palette |
| NEW | `src/app/design-system/layout.tsx` | Route-specific metadata |
| DELETE | `public/fonts/*.ttf` | Remove local font files (replaced by `next/font/google`) |

---

## Verification Plan

### Automated Tests
- `npm run build` — clean compilation, zero errors
- `npm run lint` — ESLint passes

### Manual Verification
- Compare every rendered token on the spec sheet against `variables.json`
- Resize browser to confirm heading sizes switch at `lg` (1024px) breakpoint
- Confirm Montserrat renders for headings, Karla for body text
- Verify no network requests to `fonts.googleapis.com` at runtime (self-hosted)
- Confirm all color swatches match hex values
- Verify `/design-system` route is accessible and `/` shows clean landing
