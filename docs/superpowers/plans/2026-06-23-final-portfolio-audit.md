# Final Portfolio Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Audit the completed Monochrome Cosmic Hacker portfolio and apply only low-risk quality fixes.

**Architecture:** This is an audit-first plan. Each task verifies one quality category, applies only small local fixes if evidence supports them, and records skipped findings with reasons. No new app architecture is introduced.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4, CSS custom properties, browser preview tools.

## Global Constraints

- No redesign, theme pivot, or new visual language.
- No new dependencies.
- No file deletion unless the file is proven generated, unused, and safe to remove.
- No large refactor of card systems or animation architecture.
- No speculative features.
- Preserve current Monochrome Cosmic Hacker visual direction.
- Prefer `npx eslint src` over full `npm run lint` unless `.stitch-docs-assets` is explicitly in scope.

---

## File Structure

- `audit/final-portfolio-audit.md` — create a short audit report with findings, fixes, skipped items, and verification evidence.
- `src/app/**/*.tsx` — modify only if an accessibility, SEO, or simple quality issue is verified.
- `src/components/**/*.tsx` — modify only for verified accessibility/performance/client-work issues.
- `src/app/globals.css` — modify only for verified duplicate selectors, token drift, reduced-motion, or overflow-safe CSS fixes.
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx`, `src/app/opengraph-image.tsx` — inspect SEO/metadata; modify only for verified issues.

---

### Task 1: Establish Baseline and Audit Report

**Files:**
- Create: `audit/final-portfolio-audit.md`
- Inspect: `package.json`
- Inspect: `src/app/layout.tsx`
- Inspect: `src/app/page.tsx`
- Inspect: `src/app/projects/page.tsx`
- Inspect: `src/app/projects/[slug]/page.tsx`
- Inspect: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: repository at commit `8ede03a` or later.
- Produces: `audit/final-portfolio-audit.md` with section anchors used by later tasks.

- [ ] **Step 1: Create audit report skeleton**

Create `audit/final-portfolio-audit.md` with exactly:

```markdown
# Final Portfolio Audit

## Baseline

- Commit: `<fill from git rev-parse --short HEAD>`
- Date: `2026-06-23`
- Scope: final quality audit after Monochrome Cosmic Hacker redesign

## Findings

### Accessibility

- Pending

### Performance

- Pending

### SEO and Metadata

- Pending

### Code Quality

- Pending

## Fixes Applied

- Pending

## Skipped Findings

- Pending

## Verification

- Pending
```

- [ ] **Step 2: Capture baseline commit**

Run:

```bash
git rev-parse --short HEAD
```

Expected: prints a short commit hash.

- [ ] **Step 3: Update baseline commit line**

Replace `<fill from git rev-parse --short HEAD>` in `audit/final-portfolio-audit.md` with the hash from Step 2.

- [ ] **Step 4: Run baseline lint**

Run:

```bash
npx eslint src
```

Expected: exit code 0. If it fails, record the exact failure under `## Findings` and fix only if the issue is in `src/` and low-risk.

- [ ] **Step 5: Run baseline build**

Run:

```bash
npm run build
```

Expected: build completes successfully. If it fails, stop audit work and fix the build failure first.

- [ ] **Step 6: Commit baseline report**

```bash
git add audit/final-portfolio-audit.md
git commit -m "docs(audit): start final portfolio audit"
```

Expected: one docs commit.

---

### Task 2: Accessibility Audit and Fixes

**Files:**
- Modify: `audit/final-portfolio-audit.md`
- Inspect/Maybe Modify: `src/app/page.tsx`
- Inspect/Maybe Modify: `src/app/projects/page.tsx`
- Inspect/Maybe Modify: `src/app/projects/[slug]/page.tsx`
- Inspect/Maybe Modify: `src/app/contact/page.tsx`
- Inspect/Maybe Modify: `src/components/*.tsx`
- Inspect/Maybe Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `audit/final-portfolio-audit.md` sections from Task 1.
- Produces: verified accessibility findings and only low-risk fixes.

- [ ] **Step 1: Search for likely accessibility gaps**

Run these searches:

```bash
rg "<button|aria-label|aria-hidden|role=|tabIndex|alt=|prefers-reduced-motion" src/app src/components
```

Expected: output shows interactive and decorative elements to inspect.

- [ ] **Step 2: Inspect focus and reduced-motion CSS**

Open `src/app/globals.css` and verify:

```css
:focus-visible
@media (prefers-reduced-motion: reduce)
```

Expected: at least one visible focus style and reduced-motion guard exist.

- [ ] **Step 3: Apply only mechanical accessibility fixes if found**

Allowed examples:

```tsx
<button aria-label="Open command palette" type="button">
```

```tsx
<canvas aria-hidden="true" />
```

```tsx
<span className="sr-only">Open navigation</span>
```

Do not change layout or visual direction.

- [ ] **Step 4: Update report**

In `audit/final-portfolio-audit.md`, replace `### Accessibility\n\n- Pending` with either:

```markdown
### Accessibility

- No blocking issues found. Existing focus-visible and reduced-motion guards remain in place.
```

or bullet findings like:

```markdown
### Accessibility

- Fixed missing accessible name on `<component/path>`.
- Skipped `<issue>` because it requires visual redesign.
```

- [ ] **Step 5: Verify**

Run:

```bash
npx eslint src
```

Expected: exit code 0.

- [ ] **Step 6: Commit accessibility audit**

If code changed:

```bash
git add src audit/final-portfolio-audit.md
git commit -m "fix(a11y): address final audit findings"
```

If only report changed:

```bash
git add audit/final-portfolio-audit.md
git commit -m "docs(audit): record accessibility pass"
```

Expected: one commit.

---

### Task 3: Performance and Motion Audit

**Files:**
- Modify: `audit/final-portfolio-audit.md`
- Inspect/Maybe Modify: `src/components/DigitalRain.tsx`
- Inspect/Maybe Modify: `src/components/ParticleField.tsx`
- Inspect/Maybe Modify: `src/components/Hero3DScene.tsx`
- Inspect/Maybe Modify: `src/components/TiltCard.tsx`
- Inspect/Maybe Modify: `src/components/MagneticButton.tsx`
- Inspect/Maybe Modify: `src/components/ScrollRevealOnView.tsx`
- Inspect/Maybe Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: audit report from Task 1.
- Produces: verified performance findings and only low-risk fixes.

- [ ] **Step 1: Search for client-side animation loops**

Run:

```bash
rg "requestAnimationFrame|setInterval|setTimeout|addEventListener|mousemove|pointermove|resize" src/components src/app
```

Expected: output identifies animation and event-listener code.

- [ ] **Step 2: Inspect cleanup behavior**

For every `addEventListener`, `setInterval`, and `requestAnimationFrame`, verify matching cleanup exists:

```tsx
return () => {
  window.removeEventListener("resize", handler)
  cancelAnimationFrame(frame)
  clearInterval(timer)
}
```

- [ ] **Step 3: Apply only small cleanup fixes if missing**

Allowed fix shape:

```tsx
useEffect(() => {
  let frame = 0
  const tick = () => {
    frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(frame)
}, [])
```

Do not replace animation systems or introduce throttling abstractions unless a leak is proven.

- [ ] **Step 4: Update report**

Replace `### Performance\n\n- Pending` with either:

```markdown
### Performance

- No blocking issues found. Animation loops and event listeners have cleanup paths.
```

or concrete findings/fixes.

- [ ] **Step 5: Verify**

Run:

```bash
npx eslint src
npm run build
```

Expected: both pass.

- [ ] **Step 6: Commit performance audit**

If code changed:

```bash
git add src audit/final-portfolio-audit.md
git commit -m "fix(perf): address final audit findings"
```

If only report changed:

```bash
git add audit/final-portfolio-audit.md
git commit -m "docs(audit): record performance pass"
```

Expected: one commit.

---

### Task 4: SEO and Metadata Audit

**Files:**
- Modify: `audit/final-portfolio-audit.md`
- Inspect/Maybe Modify: `src/app/layout.tsx`
- Inspect/Maybe Modify: `src/app/sitemap.ts`
- Inspect/Maybe Modify: `src/app/robots.ts`
- Inspect/Maybe Modify: `src/app/opengraph-image.tsx`
- Inspect/Maybe Modify: `src/app/projects/[slug]/page.tsx`
- Inspect/Maybe Modify: `src/data/portfolio.ts`

**Interfaces:**
- Consumes: portfolio project slugs from `src/data/portfolio.ts`.
- Produces: verified metadata findings and only low-risk fixes.

- [ ] **Step 1: Inspect metadata exports**

Search:

```bash
rg "metadata|generateMetadata|alternates|openGraph|twitter|sitemap|robots" src/app src/data
```

Expected: finds route metadata and sitemap/robots files.

- [ ] **Step 2: Verify all project slugs can appear in sitemap**

Inspect `src/app/sitemap.ts` and confirm it uses project data or otherwise includes `/projects` and detail routes.

Allowed fix shape if details are missing:

```ts
const projectUrls = getAllProjects("id").map((project) => ({
  url: `${baseUrl}/projects/${project.slug}`,
  lastModified: new Date(),
}))
```

- [ ] **Step 3: Verify detail metadata uses project content**

Inspect `src/app/projects/[slug]/page.tsx` and confirm `generateMetadata` returns project-specific title/description or `notFound` behavior.

Allowed fix shape:

```ts
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project not found" }
  return { title: `${project.title} | Raihan Arifin`, description: project.summary }
}
```

Use the existing function/type names in the file, not invented names.

- [ ] **Step 4: Update report**

Replace `### SEO and Metadata\n\n- Pending` with either:

```markdown
### SEO and Metadata

- No blocking issues found. Metadata, robots, sitemap, and project detail routes are crawl-friendly.
```

or concrete findings/fixes.

- [ ] **Step 5: Verify**

Run:

```bash
npx eslint src
npm run build
```

Expected: both pass.

- [ ] **Step 6: Commit SEO audit**

If code changed:

```bash
git add src audit/final-portfolio-audit.md
git commit -m "fix(seo): address final audit findings"
```

If only report changed:

```bash
git add audit/final-portfolio-audit.md
git commit -m "docs(audit): record seo pass"
```

Expected: one commit.

---

### Task 5: Code Quality Cleanup Audit

**Files:**
- Modify: `audit/final-portfolio-audit.md`
- Inspect/Maybe Modify: `src/app/globals.css`
- Inspect/Maybe Modify: `src/app/page.tsx`
- Inspect/Maybe Modify: `src/app/**/*.tsx`
- Inspect/Maybe Modify: `src/components/**/*.tsx`
- Inspect/Maybe Modify: `src/data/portfolio.ts`

**Interfaces:**
- Consumes: current visual/token system from `src/app/globals.css`.
- Produces: verified low-risk cleanup fixes or explicit skipped findings.

- [ ] **Step 1: Search for token drift and old accents**

Run:

```bash
rg "#60a5fa|#f59e0b|#34d399|96, 165, 250|245, 158, 11|52, 211, 153|cyan|amber|blue" src/app src/components src/data
```

Expected: either no output or only intentional names/copy. Do not change user-facing copy without evidence.

- [ ] **Step 2: Search for obvious duplicate CSS blocks**

Run:

```bash
rg "focus-visible|pulse-dot|subtle-glow|project-card|meta-chip|dossier-card|case-study-card" src/app/globals.css
```

Expected: known selectors appear. Only edit duplicates with identical behavior.

- [ ] **Step 3: Search for inline slug generation**

Run:

```bash
rg "toLowerCase\(\)\.replace|replace\(/\[\^a-z0-9\]" src/app src/components src/data
```

Expected: no inline project slug generation outside `slugifyProjectTitle`.

- [ ] **Step 4: Apply only one-line or selector-level fixes**

Allowed examples:

```tsx
href={`/projects/${project.slug}`}
```

```css
.meta-chip[data-tone] {
  color: var(--card-accent);
}
```

Do not consolidate the whole card system in this audit.

- [ ] **Step 5: Update report**

Replace `### Code Quality\n\n- Pending` with either:

```markdown
### Code Quality

- No blocking issues found. Remaining large CSS/card consolidation is intentionally out of scope.
```

or concrete findings/fixes.

Also replace `## Skipped Findings\n\n- Pending` with skipped findings, for example:

```markdown
## Skipped Findings

- Card shell consolidation skipped: too broad for final audit and risks visual regressions.
```

- [ ] **Step 6: Verify**

Run:

```bash
npx eslint src
npm run build
```

Expected: both pass.

- [ ] **Step 7: Commit code quality audit**

If code changed:

```bash
git add src audit/final-portfolio-audit.md
git commit -m "refactor: address final audit cleanup findings"
```

If only report changed:

```bash
git add audit/final-portfolio-audit.md
git commit -m "docs(audit): record code quality pass"
```

Expected: one commit.

---

### Task 6: Browser Preview Verification and Final Report

**Files:**
- Modify: `audit/final-portfolio-audit.md`

**Interfaces:**
- Consumes: audit report and all fixes from Tasks 1–5.
- Produces: final verification evidence and clean handoff.

- [ ] **Step 1: Start preview server**

Use preview tooling, not Bash server commands.

Expected: dev server is running and a serverId is available.

- [ ] **Step 2: Verify home page mobile width**

Open `/`, resize to mobile 375px, and evaluate:

```js
({ width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth })
```

Expected: `scrollWidth <= width`.

- [ ] **Step 3: Verify projects archive mobile width**

Open `/projects`, resize to mobile 375px, and evaluate:

```js
({ cards: document.querySelectorAll('a[href^="/projects/"]').length, width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth })
```

Expected: at least 1 card and `scrollWidth <= width`.

- [ ] **Step 4: Verify one project detail page mobile width**

Open `/projects/absenta13`, resize to mobile 375px, and evaluate:

```js
({ width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth, h1: document.querySelector('h1')?.textContent })
```

Expected: `h1` exists and `scrollWidth <= width`.

- [ ] **Step 5: Verify contact page mobile width**

Open `/contact`, resize to mobile 375px, and evaluate:

```js
({ width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth, main: document.querySelector('main') !== null })
```

Expected: `main === true` and `scrollWidth <= width`.

- [ ] **Step 6: Check logs**

Use preview console/server/network tools.

Expected: no new client console errors, server errors, or failed route requests.

- [ ] **Step 7: Update final report sections**

Replace:

```markdown
## Fixes Applied

- Pending

## Verification

- Pending
```

with concrete bullets, for example:

```markdown
## Fixes Applied

- No code fixes required; audit found no blocking issues.

## Verification

- `npx eslint src` passed.
- `npm run build` passed.
- Preview `/`, `/projects`, `/projects/absenta13`, and `/contact` at 375px had no horizontal overflow.
- Preview console/server/network logs showed no new errors.
```

- [ ] **Step 8: Commit final report**

```bash
git add audit/final-portfolio-audit.md
git commit -m "docs(audit): finalize portfolio audit"
```

Expected: final docs commit.

---

## Self-Review

- Spec coverage: accessibility, performance, SEO/metadata, code quality, verification, and skipped findings are covered by Tasks 2–6.
- Placeholder scan: plan contains no TBD/TODO/implement-later placeholders. `Pending` appears only as literal initial report text that tasks explicitly replace.
- Type consistency: no new shared runtime types are introduced. Any code edits must reuse existing file-local names.
- Scope check: no task permits new dependencies, redesign, speculative features, broad card-system refactors, or unsafe deletion.
