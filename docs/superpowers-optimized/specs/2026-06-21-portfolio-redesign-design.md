# Portfolio Redesign Design Spec

Date: 2026-06-21
Status: approved direction, pending written-spec review
Project: Raihan Ariansyah Portfolio

## Summary

Upgrade the full portfolio into a premium **Dark Technical Editorial** website: a professional engineering archive with a distinctive case-study identity, restrained interactive polish, and accessible dark UI. The site must feel hand-crafted, senior, and portfolio-grade — not like a generic AI-generated landing page or beginner template.

The existing design system in `docs/DESIGN.md`, `docs/DESIGN_HANDOFF.md`, and `src/app/globals.css` remains the source of truth. This redesign refines and applies it consistently across the full site instead of replacing it.

## Design System

**Design System**: Portfolio — Dark Technical Editorial / Premium Engineering Archive  
**Colors**: dark navy canvas, high-contrast ink text, restrained blue primary accent, amber and green secondary signals, accessible contrast modes  
**Typography**: JetBrains Mono for identity and technical labels; Inter for readable body copy; strong uppercase headline treatment without sacrificing readability  
**Effects**: soft desktop-only 3D, metadata/dossier motif, subtle hover depth, controlled ambient surfaces, reduced-motion support  
**Avoid**: generic AI SaaS gradients, purple/pink blob templates, chaotic neon cyberpunk, card spam, low-contrast gray text, beginner-looking decorative clutter

## Product Context

- **Product type**: personal developer portfolio.
- **Audience**: recruiters, mentors, collaborators, technical reviewers, and peers.
- **Platform**: responsive web, built with Next.js, React, Tailwind CSS v4, and CSS custom properties.
- **Trust sensitivity**: medium-high; the site represents professional readiness and technical taste.
- **Primary user goal**: quickly understand who Raihan is, what he can build, and how he thinks through real projects.

## Scope

Upgrade the full site experience:

1. Global visual system and shell
   - Refine tokens, background, section rhythm, focus states, reduced-motion behavior, and high-contrast fallbacks.
   - Keep dark mode as the default identity.

2. Navigation and footer
   - Keep `RA_`, bracket navigation, language switcher, and system-status motif.
   - Improve polish and spacing so the chrome feels premium, not noisy.

3. Homepage
   - Strengthen first viewport as a premium technical dossier.
   - Preserve hero structure, proof rail, terminal/profile card, CTAs, stats, tech marquee, case-study sections, organization signal, and final contact panel.
   - Make layout less template-like through asymmetric hierarchy and stronger editorial rhythm.

4. Projects and project details
   - Present projects as case files, not generic cards.
   - Use problem / decision / result structure as the primary proof of skill.
   - Improve filters, card hierarchy, metadata density, and responsive behavior.

5. About, notes, contact, not-found, arcade
   - Bring all routes into the same premium dark editorial language.
   - Keep arcade playful but contained, so it does not redefine the whole brand as a game UI.
   - Make contact feel like a clear next action.

6. Accessibility and responsiveness
   - Maintain WCAG AA contrast for body and metadata text.
   - Ensure keyboard focus is visible.
   - Avoid horizontal scroll at 375px.
   - Preserve `prefers-reduced-motion`, `prefers-contrast`, and `forced-colors` support.

7. Verification
   - Run lint/build where available.
   - If the app can be launched, visually inspect key routes at mobile and desktop widths.

## Non-goals

- No new UI library or animation dependency.
- No full light-mode pivot.
- No theme toggle in this pass.
- No heavy WebGL or Three.js scene.
- No generated stock imagery.
- No redesign into a maximal cyberpunk dashboard.
- No broad content rewrite beyond small UI copy improvements needed for hierarchy and clarity.

## Visual Direction

The site should feel like a professional engineering dossier:

- dark navy surfaces with controlled depth;
- sharp but readable technical typography;
- metadata labels that support scanning;
- case-study cards with varied hierarchy instead of equal-weight grid spam;
- blue as the primary signal, amber/green only for secondary classification;
- soft 3D and motion as identity accents, never as the main content.

The memorable detail is the **case-file operating system** motif: the website reads like a polished archive of practical systems, where every section has a clear role, label, and evidence trail.

## Architecture and Data Flow

Existing architecture remains:

- `src/data/portfolio.ts` provides bilingual portfolio content.
- `src/app/layout.tsx` owns the global app shell.
- `src/app/globals.css` owns design tokens and shared visual primitives.
- `src/app/page.tsx` owns homepage composition.
- Route files under `src/app/*/page.tsx` own page-level composition.
- Components under `src/components/*` provide reusable interactions such as navbar, footer, command palette, 3D hero, buttons, reveal, marquee, and cards.

Data flow stays simple:

`locale cookie -> portfolio dictionary -> page composition -> shared visual primitives`

No new state management is needed.

## Interfaces and Contracts

### CSS token contract

Keep and refine semantic CSS variables rather than raw hex values in components:

- `--canvas`
- `--surface`
- `--surface-soft`
- `--card`
- `--ink`
- `--muted`
- `--dim`
- `--line`
- `--line-subtle`
- `--accent`
- `--accent-cyan`
- `--accent-gold`
- `--accent-green`
- `--accent-soft`
- `--accent-glow`

### Component style contract

Shared primitives should remain class-based and lightweight:

- `.container-page`
- `.section`
- `.section-tight`
- `.h1-display`
- `.h2-section`
- `.heading-font`
- `.lead-text`
- `.cyber-btn-primary`
- `.cyber-btn-secondary`
- card/panel classes for case-file, capability, project, contact, and dossier panels

### Route contract

Every main route should provide:

- one clear page heading;
- short lead copy;
- visible next action or navigation path;
- consistent dark technical editorial treatment;
- mobile-first layout with no overflow.

## Error Handling and UI States

The current site is mostly static, so data-loading states are minimal. The redesign should still handle:

- missing or empty project lists with a useful empty state if a list can become empty;
- invalid project slug via existing not-found route;
- client-only cookie locale fallback to Indonesian;
- motion-sensitive users through `prefers-reduced-motion`;
- high-contrast users through `prefers-contrast` and `forced-colors`.

## Testing and Verification Strategy

1. Static checks
   - Run `npm run lint`.
   - Run `npm run build`.

2. Manual visual checks if dev server starts
   - `/`
   - `/projects`
   - `/projects/[slug]`
   - `/about`
   - `/notes`
   - `/contact`
   - `/arcade`
   - `/not-found` path behavior

3. Responsive checks
   - 375px mobile
   - 768px tablet
   - 1024px laptop
   - 1440px desktop

4. Accessibility checks
   - visible focus rings;
   - keyboard-operable nav and filters;
   - touch targets at least 44px;
   - no text relying on color alone;
   - reduced-motion mode does not leave broken layout.

## Implementation Approach

Recommended implementation path:

1. Audit current page patterns and identify reusable visual classes.
2. Refine global CSS tokens and primitives first.
3. Upgrade global shell, navbar, and footer.
4. Upgrade homepage hierarchy and interaction polish.
5. Upgrade projects and project detail routes.
6. Upgrade about, notes, contact, arcade, and not-found routes.
7. Run lint/build and fix only issues caused by this pass.
8. Launch and inspect the app where possible.
9. Request code review after implementation changes.

## Failure-mode Check

### Failure mode 1: The site becomes visually busy and loses professional credibility.

Severity: Critical.  
Mitigation: keep cyber/3D effects restrained, desktop-only where heavy, and subordinate to content hierarchy. Avoid adding new animation systems.

### Failure mode 2: The redesign looks like a generic AI template despite dark styling.

Severity: Critical.  
Mitigation: use the case-file operating system motif, asymmetric editorial layout, strong typography, real portfolio copy, and route-specific composition. Avoid generic hero + cards + CTA repetition.

### Failure mode 3: Global CSS becomes harder to maintain.

Severity: Medium.  
Mitigation: edit existing token/class system instead of scattering raw styles. Prefer fewer reusable primitives and sectioned CSS comments over creating a new component library.

### Failure mode 4: Full-site edits conflict with existing uncommitted work.

Severity: Critical.  
Mitigation: read each file before editing, preserve current content ownership, and avoid broad rewrites where a targeted polish pass is enough.

## Acceptance Criteria

The redesign is complete when:

- the full website feels dark, premium, technical, and professional;
- it does not look like a generic AI-generated template;
- the first viewport communicates identity, technical focus, and next action within 3 seconds;
- each major route shares the same premium design language;
- project pages read as case studies, not simple galleries;
- navigation, filters, buttons, and links remain keyboard accessible;
- no horizontal scroll exists at mobile width;
- contrast remains readable in normal, high-contrast, and forced-colors modes;
- heavy 3D/motion does not appear on mobile or reduced-motion mode;
- `npm run lint` and `npm run build` pass or failures are reported honestly.
