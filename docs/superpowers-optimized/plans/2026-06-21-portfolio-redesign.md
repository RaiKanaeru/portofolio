# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers-optimized:subagent-driven-development (recommended) or superpowers-optimized:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the full portfolio into a premium Dark Technical Editorial website that feels professional, distinctive, interactive, and non-template.
**Architecture:** Keep the current Next.js App Router structure and existing design system. Use `src/app/globals.css` for shared visual primitives, route files for composition, and current data/components without introducing dependencies. Apply a focused polish pass across global shell, homepage, project routes, secondary pages, and verification.
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, CSS custom properties.
**Assumptions:**
- Assumes the existing dark direction remains final — will NOT implement a light theme or theme toggle.
- Assumes no new dependency is desired — will NOT add animation/UI packages.
- Assumes the current bilingual portfolio data remains canonical — will NOT rewrite content broadly.

---

## File Structure

- Modify: `src/app/globals.css` — global tokens, premium visual primitives, route-level shared classes, responsive/a11y modes.
- Modify: `src/components/Navbar.tsx` — premium shell spacing, mobile panel polish, interaction affordances.
- Modify: `src/components/Footer.tsx` — editorial footer polish and reduced template feel.
- Modify: `src/app/page.tsx` — homepage hierarchy, premium case-file composition, stronger first viewport.
- Modify: `src/app/projects/page.tsx` — archive filter and case-file grid polish.
- Modify: `src/app/projects/[slug]/page.tsx` — project dossier detail layout.
- Modify: `src/app/about/page.tsx` — about route alignment with dossier language.
- Modify: `src/app/notes/page.tsx` — notes as decision log, not generic cards.
- Modify: `src/app/contact/page.tsx` — clear premium next-action route.
- Modify: `src/app/arcade/page.tsx` — contained playful route aligned with brand.
- Modify: `src/app/not-found.tsx` — premium error/empty-state treatment.

## Tasks

### Task 1: Refine global design primitives

**Files:**
- Modify: `src/app/globals.css`

**Does NOT cover:** Route composition changes; this only prepares shared primitives.

- [ ] Step 1: Add/adjust shared classes for premium panels, case-file grids, route hero blocks, compact metadata chips, and responsive polish.
- [ ] Step 2: Keep `prefers-reduced-motion`, `prefers-contrast`, and `forced-colors` support intact.
- [ ] Step 3: Run `npm run lint` after later TSX edits, not required for CSS-only step.

### Task 2: Polish global shell

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`

**Does NOT cover:** New nav routes or new footer links.

- [ ] Step 1: Improve navbar density, active states, mobile menu affordance, and system-bar polish without changing route contract.
- [ ] Step 2: Improve footer hierarchy so it feels like a premium system footer, not generic template copy.
- [ ] Step 3: Verify touch targets remain at least 44px.

### Task 3: Upgrade homepage composition

**Files:**
- Modify: `src/app/page.tsx`

**Does NOT cover:** Changing portfolio data or adding assets.

- [ ] Step 1: Make first viewport more premium with stronger dossier framing and less generic section rhythm.
- [ ] Step 2: Add asymmetry and stronger metadata hierarchy to capability, case study, build archive, organization, and contact sections.
- [ ] Step 3: Keep 3D desktop-only and content-first on mobile.

### Task 4: Upgrade project archive and detail routes

**Files:**
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/projects/[slug]/page.tsx`

**Does NOT cover:** Adding new projects.

- [ ] Step 1: Make project archive read as a case-file wall with stronger filter controls and non-generic card hierarchy.
- [ ] Step 2: Make project detail read as a technical dossier: problem, decision, result, metadata, and next navigation.
- [ ] Step 3: Add empty-state guard if filtered projects become empty.

### Task 5: Upgrade secondary routes

**Files:**
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/notes/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/arcade/page.tsx`
- Modify: `src/app/not-found.tsx`

**Does NOT cover:** Building new arcade games or contact backend.

- [ ] Step 1: Align about, notes, contact, arcade, and not-found with the premium dark editorial motif.
- [ ] Step 2: Keep arcade playful but visually contained.
- [ ] Step 3: Make contact route a clear next action with accessible links.

### Task 6: Verify and fix build issues

**Files:**
- Modify only files changed above if verification reveals issues.

**Does NOT cover:** Pre-existing unrelated failures outside touched files unless they block build.

- [ ] Step 1: Run `npm run lint`.
- [ ] Step 2: Run `npm run build`.
- [ ] Step 3: Start preview/dev server if possible and inspect `/`, `/projects`, one project detail, `/about`, `/notes`, `/contact`, `/arcade` at desktop and mobile widths.
- [ ] Step 4: Fix issues caused by this pass.

## Self-Review

- Spec coverage: global shell, homepage, projects, secondary routes, a11y/responsive, and verification are covered.
- Placeholder scan: no TBD/TODO/later placeholders.
- Type consistency: no new types or public APIs introduced.
