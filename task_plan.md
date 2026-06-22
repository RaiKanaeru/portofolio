# Task Plan - Upgrade RPD Portfolio

## Goal
Rapikan upgrade RPD/portfolio agar mengikuti konsep Dark Xyrionex-inspired technical editorial dengan soft 3D dan case-study focus.

## Phases
- [x] Audit struktur awal dan state terakhir.
- [x] Tetapkan arah desain utama.
- [x] Implementasi cleanup UI homepage dan global polish.
- [x] Validasi build/lint sesuai project.
- [x] Catat hasil dan next steps.

## Design Direction
- Portfolio mengikuti dark technical editorial: black/navy canvas, dark rounded panels, bright text, restrained blue accent, recruiter-friendly.
- 3D/immersive feel dipakai sebagai soft RA identity accent, bukan efek berat atau cyber neon.
- Fokus utama: hero, CTA, quick links, spacing, readability, responsive polish.

## Files Changed
- `src/app/page.tsx` — hero proof rail, refined visual stack, next-action section intro.
- `src/app/globals.css` — RPD hero polish, semantic color tokens, card depth, warm blue/amber effects, navbar/audio/focus consistency.
- `task_plan.md`, `findings.md`, `progress.md` — planning files for continuity.

## Validation
- `npx tsc --noEmit` passed.
- `npm run build` reached successful compile and TypeScript phase in terminal output.
- `npm run lint` blocked by existing ESLint config circular JSON issue before project files were linted.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| ESLint `TypeError: Converting circular structure to JSON` | `npm run lint` | Logged as existing tooling/config issue; validated with `npx tsc --noEmit` and build compile/TS instead. |



