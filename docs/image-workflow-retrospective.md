# Image workflow retrospective

Working notes from the July 2026 image optimization pass on the portfolio site. Use this to resume the work later without re-deriving context.

**Related files (current state):**
- `.cursor/rules/image-formats.mdc` — live rules for agents
- `scripts/image-format-utils.mjs` — extension-based format helpers (`isJpgFile`, `displayExtension`)
- `scripts/optimize-images.mjs` — full-size case-study assets + `image-assets.ts`
- `scripts/optimize-preview-images.mjs` — listing previews + `preview-image-assets.ts`
- `scripts/figma-export-manifest.json` — partial node ID map (Aon, CII; Burton not fully listed)
- `src/components/ProgressiveImage.tsx` — blur-up + resolved optimized paths
- `src/components/ProjectPreviewImageSwap.tsx` — listing hover swap
- `src/data/projects.ts` — `previewImages` primary/secondary URLs

**Figma file:** `wH37Em1J3VfOt6ojRw4d5G` (Portfolio site)

---

## Current workflow (manual export — July 2026)

The exporter handles Figma exports; agents wire up pages from files already in `public/images/`.

### Exporter checklist

1. Export each case-study frame at **3200×1800** from Figma.
2. Frames have **no stroke** — the site adds borders via CSS (`border: true` on `ProjectCaptionedImage`).
3. Choose **JPG or PNG** per asset; save with the correct extension to `public/images/` (e.g. `amnh-website.jpg`, `amnh-affinity-map.png`).
4. One file per basename — never leave both `.png` and `.jpg` for the same name.
5. Run `node scripts/optimize-images.mjs` (and `optimize-preview-images.mjs` if listing previews changed).

### Agent checklist

1. Read text, captions, image order, and layout from the Figma project page node.
2. Reference exact filenames (including extension) in `page.tsx` / `projects.ts`.
3. Run `node scripts/optimize-images.mjs` after any new or replaced images.
4. Do not re-export via Figma MCP unless an image is missing.

### Optimize script behavior

- **Format source of truth:** file extension on disk (`.jpg` / `.png`).
- **No format conversion** — JPG stays JPG, PNG stays PNG; re-encodes in place only.
- Pass `--remove-stale-siblings` only after deliberately swapping an asset's format.
- JPG quality 90, PNG compression level 9. Max width **3200px** for both formats.
- Never WebP.

`PHOTO_BASENAMES` is retired. Format guidance lives in `image-formats.mdc` for export decisions only.

---

## What we set out to do

1. Replace the projects listing image rotator with a static primary + hover secondary image.
2. Reduce total image payload without making case-study pages look soft or blurry.
3. Establish consistent format rules (JPG vs PNG) across project pages.
4. Fix export issues: double borders, wrong crops, black backgrounds on transparent 3D renders.

---

## What we built

### Projects listing

- **Removed** `ProjectPreviewImageRotator.tsx` (JS timer cycling images).
- **Added** `ProjectPreviewImageSwap.tsx` — CSS `group-hover` opacity swap; secondary uses `loading="lazy"`.
- **Data model:** each project in `projects.ts` has `previewImages: { primary, secondary }` (AMNH has no secondary yet).
- **Preview pipeline:** `optimize-preview-images.mjs` reads sources from `projects.ts`, downscales to **2400px** wide, writes `public/images/previews/`, updates `preview-image-assets.ts` and preview paths only. Listing folder total dropped from ~63 MB (full-size sources) to ~11 MB.

### Full-size optimization

- **`optimize-images.mjs`** reads format from the file extension via `image-format-utils.mjs`.
- **Format rule:** chosen by the exporter in Figma; the script optimizes in place without converting.
- **Limits:** max width 3200px for JPG and PNG; JPG quality 90. **Never WebP** (site rule: WebP looked blurry).
- **Incremental cache:** `.image-optimize-cache.json` skips unchanged files; bootstraps from existing `image-assets.ts` to avoid one-time re-encode of everything.
- **Force re-encode:** PNGs ≥ 5 MB re-encoded even when cached (fixes oversized PNGs that were skipped on first run).
- **Site serves unoptimized images:** `next.config.ts` has `images.unoptimized: true` — files in `public/images/` are what the browser gets (no Next.js resize pass).

### Format conversions completed (high level)

- Photorealistic Burton/INPA/CII assets converted to JPG where appropriate (`burton-render-spatial`, planting density, INPA signage, etc.).
- Tier 1+2 batch: large environmental/signage PNGs → JPG for load savings.
- Several UI-heavy images were **mistakenly** converted to JPG, then **reverted** when blur/legibility was unacceptable.

---

## What worked

| Approach | Why it worked |
|---|---|
| **Separate preview pipeline** | Listing cards render ~580–680px wide; 2400px previews cover 3× retina without shipping 4800px full-size files on the index page. |
| **Extension-based format** | Exporter picks JPG/PNG; optimize script preserves it — no `PHOTO_BASENAMES` registry to maintain. |
| **Frame export + 4px border strip** | Captures Figma layout (white backgrounds, positioned content) and removes baked `gray-20` stroke so CSS `border: true` on `ProjectCaptionedImage` is the only border. |
| **White background fill in Figma before export** | Fixes transparent SketchUp/3D PNGs that became **black** when auto-converted to JPG (JPEG has no transparency; sharp fills with black by default). |
| **Native-resolution export for UI screenshots** | Saving the image fill at its actual pixel dimensions (e.g. 3200×1800) instead of 4× frame export (4800×2697) eliminated upscaling blur on Aon slides. |
| **Re-exporting Burton planting density from updated Figma frame** (`588:85761`) | White background baked in; saved as JPG; black background issue resolved. |
| **Re-exporting Burton isometric from updated frame** (`588:85753`) | White background for `burton-model-3d-isometric.png`; kept as PNG per isometric/technical rule. |
| **CSS hover swap** | No JS, no layout shift; secondary lazy-loaded. |

---

## What didn't work (or caused problems)

| Approach | What went wrong | Lesson |
|---|---|---|
| **Blind 4× frame export for every image** | Figma upscales low-res fills to fill the exported frame. A 1600px-wide fill exported in a 4× 1208px frame → ~4800px of upscaled softness. **PNG vs JPG looked equally blurry** — format wasn't the problem. | Check native fill width *before* choosing export scale. |
| **Using `rawImages` as default** | Drops frame positioning and background fills. `burton-plan-2d` was cropped wrong until the frame had an explicit white background and was exported as a full frame. | Raw fills only for simple full-bleed `object-cover` with no offset layout. |
| **JPG conversion of UI-heavy screenshots** | `aon-section-01-strategy-presentation`, `aon-section-03-simulation-microsite`, `cii-overview-master-templates` — small type and fine UI lines looked muddy as JPG. Reverting to PNG didn't fully fix CII because **source is only 1600×900**. | UI/text-first → PNG. But **source resolution** matters more than format. |
| **JPG conversion of isometric/technical 3D** | `burton-model-3d-isometric` as JPG showed black background (transparent source). | Isometric/technical 3D with possible transparency → PNG, or bake white background in Figma first. |
| **Assuming border strip causes blur** | 4px crop on a 4800px image is ~0.17% dimension change — not visible. | Blur investigations should start at Figma source resolution, not post-processing. |
| **Git-restored PNGs without re-export** | Restoring old committed PNGs brought back 4800px upscaled versions from an earlier export pass. | Restoring from git ≠ fixing export quality; may need fresh Figma export. |
| **`figma-export-manifest.json` incomplete** | Burton node IDs changed when Figma file was updated (e.g. `536:2775` deleted, replaced by `588:85753` / `588:85761`). | Always resolve node IDs from current page metadata, not stale manifest alone. |
| **Viewport instance node IDs (e.g. `0:254`)** | Sometimes resolve incorrectly via MCP; tiny/wrong exports. | Prefer stable symbol nodes from `content - {Project}` component (e.g. `532:6638`, `588:85761`). |

---

## Reasoning behind key decisions

### JPG vs PNG split

- **JPG** for assets that behave like photographs: organic texture, gradients, environmental renders, venue signage in situ. Often smaller at similar perceived quality.
- **PNG** for assets where **legibility of type and edges** is the point: wireframes, widget specs, floor plans, UI composites, isometric/technical 3D.
- **Gray area:** photorealistic renders with incidental labels (e.g. planting density simulation) → JPG is fine **if** background is baked in Figma (white), not transparent.
- **Decision test:** *Does it behave like a photograph?* → JPG. *Is small text the subject?* → PNG.

### Why not WebP

Observed blurriness on this site with WebP. Rule is absolute: PNG or JPG only.

### Why two optimize scripts

- **Case-study pages** need full resolution (3200px wide exports).
- **Listing page** only needs ~2400px previews in a separate folder — avoids downloading 3–13 MB images for 580px cards.

### Why `images.unoptimized: true`

The optimization pipeline pre-bakes display files in `public/images/`. Next.js image optimization was bypassed intentionally so what you optimize is exactly what ships.

### Transparent 3D → black JPG

When `burton-model-3d-isometric` or `burton-section-03-planting-density` were in `PHOTO_BASENAMES`, `optimize-images.mjs` converted transparent PNG → JPG. Transparent pixels became black. Fix: white background in Figma + re-export, or keep as PNG.

---

## Current known issues (as of last session)

| Asset | Status | Next step |
|---|---|---|
| `cii-overview-master-templates.png` | Native Figma fill is **1600×900** — below 2400px retina target | Replace image in Figma with **≥3200px** wide source, then re-export |
| `aon-section-01-strategy-presentation.png` | Re-saved at native **3200×1800** — should be sharp | Verify on case-study page after hard refresh |
| `aon-section-03-simulation-microsite.png` | Same as above | Verify on case-study page |
| Other project images | Mixed compliance with frame+strip workflow | Site-wide audit noted Aon/CII batches still had baked borders at one point; Burton/Verizon/INPA largely fixed |
| `burton-model-3d-isometric.png` | Re-exported with white bg; **13 MB** PNG at 4824×2710 | Acceptable for quality; could explore JPG only if white bg is reliably baked and no fine labels suffer |
| `figma-export-manifest.json` | Out of date for Burton | Update manifest when doing bulk re-exports, or stop relying on it |

---

## Recommended best workflow

This is the target end-to-end process if starting fresh or re-auditing a project page.

### Phase 1 — Set up images in Figma

1. **Use the full-width image frame** in the project page layout (xl breakpoint, ~1208px wide), not overview thumbnails in a 3-up row, unless that thumbnail is the only use.
2. **Place source assets at sufficient resolution:**
   - Target **≥3200px wide** for full-width case-study frames (covers 1208px layout at ~2.5×).
   - Minimum practical: **2400px wide** for acceptable retina; below that, replace the source file.
3. **Background fills for 3D / SketchUp exports:**
   - Add an explicit **white** (or site `gray-10`) background layer behind transparent renders **in Figma** before export.
   - Do not rely on transparency surviving JPG conversion.
4. **Bordered vs borderless frames:**
   - Design-system image component uses `border border-gray-20` for captioned images → site uses `border: true` on `ProjectCaptionedImage`.
   - Spatial renders without a caption border in design → `border: false` in code.
5. **Positioned layouts (e.g. blueprint centered in frame):**
   - Do not assume `rawImages` will preserve positioning — keep background + layout in the Figma frame.

### Phase 2 — Choose format before export

| Content | Format |
|---|---|
| Photos, event shots, environmental signage | JPG |
| Photorealistic 3D renders (white bg baked in) | JPG |
| UI screenshots, wireframes, specs, slides with small type | PNG |
| Isometric/technical 3D, floor plans, diagrams | PNG |
| Logos | PNG |

When unsure: try JPG + optimize, compare on page, re-export as PNG if type is unacceptable.

### Phase 3 — Export from Figma (manual — current default)

**Exporter:** export each frame at **3200×1800**, no stroke, save to `public/images/` with the correct extension.

**Agent fallback (legacy MCP export):** only when an image is missing from `public/images/`. See historical notes below for border strip, native fill checks, and scale selection.

**Burton Figma page:** `node-id=532-6924` (viewport xl-2xl). Stable symbol nodes live under `content - Burton` (`532:6617`). Recent node IDs:
- Isometric overview: `532:6638`
- Volumetric Section 02: `588:85753` (replaced deleted `536:2775`)
- Planting density Section 03: `588:85761` (replaced deleted `532:6716`)
- Plan 2D: `536:2763`

### Phase 4 — Run optimization scripts

```bash
node scripts/optimize-images.mjs
node scripts/optimize-preview-images.mjs   # only if listing previewImages changed
```

**Order matters:** full-size first, then previews (previews read from `projects.ts` paths).

No codebase format registry — the file extension is sufficient.

### Phase 5 — Verify on site

- [ ] Hard refresh case-study page (full-size from `public/images/`)
- [ ] Check captioned images with `border: true` — single 1px border, not double thick
- [ ] Check 3D renders — white (or intended) background, not black
- [ ] Zoom to 100% / retina display — small text legible?
- [ ] Projects listing — primary + hover secondary swap, no rotator
- [ ] Network tab — listing loads `previews/` paths, not full-size case-study files

---

## How the optimization scripts are structured

### `image-format-utils.mjs`

- `isJpgFile(filePath)`, `displayExtension(filePath)` — extension-based only.

### `optimize-images.mjs` (case-study assets)

**Input:** all raster files in `public/images/` (not `previews/`), one file per basename.

**Per file:**
1. Read format from file extension
2. Skip if cache hit (mtime + size match), except when width exceeds 3200px or PNG ≥ 5 MB
3. Resize down only if over max width (`withoutEnlargement: true` — **never upscale**)
4. Re-encode in the same format: JPG q90 mozjpeg / PNG compressionLevel 9
5. Remove stale sibling only with `--remove-stale-siblings` after a deliberate format swap
6. Generate 16px-wide blur placeholder
7. Write entry to `image-assets.ts`

**Should NOT:** convert between JPG and PNG; upscale; emit WebP.

### `optimize-preview-images.mjs` (listing only)

**Input:** parse `previewImages` / `imageSrc` from `projects.ts`.

**Per preview:**
1. Resolve source path in `public/images/`
2. Inherit format from source file extension
3. Downscale to **2400px** max width (never upscale)
4. Write to `public/images/previews/`
5. Update `preview-image-assets.ts` and preview paths in `projects.ts`

**Should NOT:** modify full-size case-study files.

### Historical: MCP export workflow

The sections above on 4× frame export, border strip, native fill width tables, and `figma-export-manifest.json` remain useful as fallback when the agent must export from Figma directly. They are no longer the default path.

---

## Quick diagnostic: "why is this image blurry?"

1. **Download / inspect pixel dimensions** of the file in `public/images/`.
2. **Compare to display size:** case-study captioned images ≈ 1208px wide; need ~2400px for 2× retina.
3. **If file is much larger than source** (e.g. 4800px file but soft): likely upscaled in Figma export → re-export at native or 2×.
4. **If file is smaller than 2400px wide:** source too small → replace in Figma.
5. **If PNG and JPG look the same:** not a format issue — source resolution.
6. **If only JPG looked bad on UI:** revert to PNG, but still fix source resolution.
7. **Border strip is almost never the cause** unless strip amount is wrong (verify edge-gray).

---

## Commands cheat sheet

```bash
# Full-size case-study assets
node scripts/optimize-images.mjs

# Listing previews (after editing projects.ts previewImages)
node scripts/optimize-preview-images.mjs

# Check dimensions
sips -g pixelWidth -g pixelHeight public/images/FILENAME.png

# Dev server
npm run dev
```

---

## Session changelog (abbreviated)

- Projects listing: rotator → hover swap; preview pipeline added.
- Large photorealistic PNGs → JPG for load savings (Burton spatial render, INPA, CII signage, etc.).
- Double-border fix: frame export + 4px strip (Verizon, INPA, Burton partial).
- `burton-plan-2d`: required white background in Figma frame before export (positioned layout).
- Mistaken JPG conversions reverted for 3 UI-heavy Aon/CII images; blur root cause identified as upscaling, not format.
- Aon images re-saved at native 3200×1800; CII still limited by 1600×900 source.
- Burton `burton-model-3d-isometric` re-exported with white background (PNG).
- Burton `burton-section-03-planting-density` re-exported with white background (JPG).
- `image-formats.mdc` updated with export-scale vs native-resolution guidance.
- Workflow simplified: manual 3200×1800 export, extension-based optimize, `PHOTO_BASENAMES` retired.
- PNG max width aligned to 3200px (was 4800px); legacy 4800px PNGs downscaled (~43 MB saved).

---

*Last updated: July 11, 2026*
