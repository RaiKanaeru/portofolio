# Progress - Upgrade RPD Portfolio

## 2026-06-19
- Started upgrade continuation from `D:\CODING\porto`.
- Read available skills: `3d-web-experience`, `ui-ux-designer`; `planning-with-files` file exists and pattern is being followed via local planning files.
- Audited root files, state, session log, package scripts, and homepage structure.
- Implemented homepage hierarchy cleanup: proof rail, calmer command strip, visual depth layer, orbit framing, quick-link intro.
- Updated global CSS with `portfolio-hero` system classes and responsive polish.
- Validation: `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript; `npm run lint` is blocked by existing ESLint circular config error.
- Continued visual consistency pass across theme tokens and site-wide effects.
- Converted legacy cyan/neon and red accents to the current warm blue/amber palette.
- Updated navbar, language switcher, footer status dot, arcade colors, robot/canvas glow, command palette, skill bars, OpenGraph, not-found, and card/focus styling.
- Validation: `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript.
- Added lightweight CSS 3D hero scene through `Hero3DScene` without adding Three.js/R3F dependencies.
- Replaced the old hero orbit canvas with an interactive 3D system map using pointer parallax, layered grids, rings, nodes, and beams.
- Added reduced-motion and desktop-only fallback behavior for performance/accessibility.
- Validation: `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript.
- Continued 3D development with 3D case-file card polish and browser-based visual checks.
- Vision/browser check found the loading overlay stuck at 0%; added a fail-safe timeout in `LoadingScreen` so it always dismisses and records `ra_intro_seen`.
- Added `allowedDevOrigins` and network HMR CSP allowance for the browser sandbox address used during visual inspection.
- Desktop check: 3D scene visible in hero, terminal starts below it, no horizontal overflow.
- Mobile check: 3D scene is hidden, no horizontal overflow, overlay removed.
- Validation: `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript.
- Corrected design docs after user clarified the concept should follow the Xyrionex portfolio reference with Raihan-specific differences.
- Rewrote `docs/DESIGN.md` and `docs/DESIGN_HANDOFF.md` as the active source of truth.
- Marked older plan/concept docs as archived/superseded for visual direction.
- Updated README and task plan language away from dark cyber/terminal toward light technical editorial + soft 3D.
- Refactored technical debt after `code-refactoring-tech-debt` / `fp-refactor` request.
- `Hero3DScene` now uses named rotation constants and pure `getPointerRotation` instead of inline pointer math.
- `LoadingScreen` now uses one `dismissIntro` path, named timing constants, and `markIntroSeen` to remove duplicated session/dismiss logic.
- `next.config.ts` no longer hardcodes the browser-check network IP; dev origins now come from `NEXT_ALLOWED_DEV_ORIGINS`.
- `.env.example` documents `NEXT_ALLOWED_DEV_ORIGINS` for future visual checks.
- Validation: `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript.
- Improved color accessibility after color/mode skill request.
- Darkened `--muted`, `--dim`, and amber accent so small labels and amber status text pass WCAG AA on cream/white backgrounds.
- Replaced hardcoded old amber usages with `var(--accent-gold)` or accessible `#a8550a` for canvas drawing.
- Added `color-scheme: light`, `prefers-contrast: more`, and `forced-colors: active` CSS support.
- Validation: contrast spot checks pass AA for core text/accent pairs; `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript.
- User clarified the portfolio should be dark, not bright/light cream.
- Pivoted design source-of-truth to Dark Xyrionex-inspired Technical Editorial.
- Updated global color tokens to dark navy surfaces, bright text, blue accent, and amber secondary accent.
- Corrected theme direction after user clarified the site should be dark, not bright/light cream.
- Updated `src/app/globals.css` root tokens to dark navy surfaces, bright text, accessible blue CTA, and dark card materials.
- Updated `docs/DESIGN.md`, `docs/DESIGN_HANDOFF.md`, README, task plan, and archived-doc notices to Dark Xyrionex-inspired Technical Editorial.
- Contrast spot checks: ink/canvas 17.05, muted/canvas 10.04, dim/canvas 6.15, blue/canvas 7.82, amber/canvas 9.25, blue button text 7.50.
- Validation: `npx tsc --noEmit` passed; `npm run build` reached compile + TypeScript.

[2026-06-19 19:18:01 +07:00] Dark theme correction: dimmed global glow intensity, fixed accent cascade so proof/route cards keep blue/amber/green variants, verified desktop/mobile no overflow, overlay false, build passed.

[2026-06-19 19:24:45 +07:00] Consistency pass: changed active language/filter states from bright ink pills to dark blue-accent pills, added project archive card accent rotation, fixed active nav color with final override, verified projects/contact/home desktop+mobile, build passed.
