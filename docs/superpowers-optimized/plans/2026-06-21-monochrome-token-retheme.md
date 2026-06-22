# Monochrome Token Retheme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-optimized:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current dark technical portfolio from cyan/amber/green accents to a strict monochrome hacker/editorial palette.
**Architecture:** The app already centralizes colors in `src/app/globals.css` CSS variables. Retheme by changing the variable contract and grayscale hard-coded RGBA values in the same file. JSX stays unchanged so existing components continue reading the same token names.
**Tech Stack:** Next.js App Router, React, TypeScript, CSS custom properties, Tailwind arbitrary values.
**Assumptions:**
- Assumes components use CSS variables for accents — will NOT catch future raw color utilities added outside `globals.css`.
- Assumes token-only scope — will NOT remove layout, 3D structures, or animation components.
- Assumes dark canvas remains — will NOT implement light mode or theme toggle.

---

## File Structure

- `src/app/globals.css` — update root tokens, hard-coded accent RGBA values, meta-chip tone variants, accent class variants, and accessibility contrast token overrides.
- `state.md` — update current status after implementation and verification.

## Tasks

### Task 1: Replace root accent tokens

**Files:**
- Modify: `src/app/globals.css`

**Does NOT cover:** Hard-coded RGBA values outside the `:root` token block.

- [x] Replace `--accent`, `--accent-cyan`, `--accent-gold`, `--accent-green`, soft/glow variants with grayscale values.
- [x] Keep `--canvas`, `--surface`, `--card`, `--ink`, `--muted`, `--dim`, `--line`, and `--line-subtle` close to the existing dark ramp.
- [x] Verify by searching that root token values no longer contain cyan/amber/green hex values.

### Task 2: Rewrite hard-coded accent RGBA values in CSS

**Files:**
- Modify: `src/app/globals.css`

**Does NOT cover:** Raw color values inside TSX files; existing TSX uses variables and stays in scope only through token resolution.

- [x] Replace blue hard-codes: `rgba(96, 165, 250, X)` / `rgba(96,165,250,X)` with white grayscale at similar or lower opacity.
- [x] Replace amber hard-codes: `rgba(245, 158, 11, X)` with white/gray grayscale at lower opacity.
- [x] Replace green hard-codes: `rgba(52, 211, 153, X)` with white/gray grayscale at lower opacity.
- [x] Keep glows subtle; do not brighten the canvas.

### Task 3: Collapse tone variants to monochrome

**Files:**
- Modify: `src/app/globals.css`

**Does NOT cover:** Renaming `data-tone="blue|amber|green"`; markup remains backward-compatible.

- [x] Update `.meta-chip[data-tone="blue"]`, `[data-tone="amber"]`, `[data-tone="green"]` to grayscale.
- [x] Update `.accent-blue`, `.accent-amber`, `.accent-green` to set `--card-accent` to white/gray variants.
- [x] Update hover rules that explicitly reference `--accent-gold` or `#34d399` to grayscale.

### Task 4: Update accessibility color branches

**Files:**
- Modify: `src/app/globals.css`

**Does NOT cover:** Browser forced-colors native mapping; that remains browser-controlled.

- [x] Update `@media (prefers-contrast: more)` tokens so accent values are monochrome.
- [x] Keep `forced-colors: active` rules unchanged unless they reference colored accent tokens directly.

### Task 5: Validate

**Files:**
- Modify: `src/app/globals.css`
- Modify: `state.md`

**Does NOT cover:** Full screenshot proof if preview screenshot times out; use computed style/snapshot evidence instead.

- [x] Run `npx eslint src`.
- [x] Start/reuse preview server and inspect `/` at mobile and desktop.
- [x] Verify no console/server errors.
- [x] Verify hero badge, meta chips, and button colors compute to grayscale.
- [x] Verify search results no longer show the old accent hard-coded RGB values in `src/app/globals.css`.
- [x] Update `state.md` with implementation status and evidence.

## Validation Commands

```bash
npx eslint src
```

Expected: exits with code 0 and no output.

Use preview tools:
- `preview_logs` expected: no server errors.
- `preview_console_logs` expected: no console errors.
- `preview_eval` expected: sampled colors are grayscale (`rgb(r,g,b)` where `r`, `g`, and `b` are equal or near-equal).

## Risks

| Risk | Likelihood | Mitigation |
|---|---:|---|
| Residual cyan/amber hard-code remains | Medium | Grep `96, 165, 250`, `245, 158, 11`, `52, 211, 153`, `#60a5fa`, `#f59e0b`, `#34d399`. |
| Monochrome looks flat | Medium | Preserve border/surface contrast and subtle white glows. |
| Contrast regression | Low | Use off-white accents and keep muted text above dark canvas. |

## Acceptance

- [ ] No cyan/amber/green accent remains in `src/app/globals.css`.
- [ ] Layout unchanged.
- [ ] `npx eslint src` passes.
- [ ] Preview has no server/client errors.
- [ ] Sampled hero status, chips, and buttons are monochrome.
