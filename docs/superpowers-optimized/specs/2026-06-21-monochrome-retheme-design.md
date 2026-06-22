# 2026-06-21 Monochrome Token Retheme — Design

## Scope

Swap accent colors in [src/app/globals.css](src/app/globals.css) so the portfolio reads as a pure dark engineering/editorial theme (no cyan/amber/green) and remove the AI-tinted glow. All other subsystems stay.

## Non-Goals

- No layout changes; no new components.
- No light mode, no toggle, no white canvas.
- No 3D, glow, or typography swap. Effects already in place (`reveal-complete`, `[data-reveal]`) remain.
- No new dependencies.

## Decisions

- Background family: keep current dark canvas (`#060914` → `#0b1220`). User confirmed "background already ok, just adjustments".
- Accent family: collapse to a single white-tinted token. `--accent` becomes near-white (`#f5f7fa`). All previous accent variants (`--accent-cyan`, `--accent-gold`, `--accent-green`, `--accent-soft`, `--accent-glow`, `--accent-gold-soft`, `--accent-green-soft`, `--glow`) re-point to grayscale or fade-to-transparent.
- Surface ramp unchanged (`--canvas`, `--surface`, `--card`) — preserves dossier depth.
- Chip `data-tone` rules (`.meta-chip[data-tone="blue|amber|green"]`) get retargeted to grayscale, with `data-tone` now only controlling border opacity, not hue. Backward compatible: existing markup works as-is.
- Selection/focus ring uses `--accent` (now near-white). `--card-accent` re-points to `--accent`.
- `prefers-contrast: more` and `forced-colors: active` blocks updated so the new white accent satisfies those branches too.
- `--accent-green-soft` and similar get demoted to grayscale `rgba(255,255,255,X)`.

## Interfaces

- Public color contract via CSS variables. Components already consume `var(--accent-cyan)` / `var(--accent-gold)` etc.; re-pointing the variables means component sources do not change.
- Inline Tailwind arbitrary colors like `bg-[var(--accent-cyan)]` (BackToTop, StatusBadge, notes page) re-resolve automatically.
- Hard-coded `rgba(96,165,250,...)`, `rgba(245,158,11,...)`, `rgba(52,211,153,...)` in `globals.css` (gradients, glows, hero 3D, panel backgrounds) get rewritten to grayscale.

## Failure Modes (adversarial check)

- **F1 (Critical)**: Some hard-coded RGBA inside `:root`-less rules (e.g., spotlight glow, page-fade-in, hero-3d-grid, project-card gradient, contact-panel) do not read from variables. If only tokens change, these leak cyan/amber. Mitigation: rewrite to grayscale values directly in `globals.css`. **Addressed in this design.**
- **F2 (Minor)**: Image-rendering artifacts from radar-sweep, crt-noise, hero 3D still have blue/amber layers. They are subtle (low opacity) but still cyan-tinted. Accepted limitation: keep these; user said "keep layout, strip effects" but scope is token-only, so visuals with hard-coded rgba degrade to grayscale via best-effort. Document as known residual.
- **F3 (Minor)**: Tailwind utility colors like `text-blue-500` outside the variables are not used in this codebase (spot check). No action needed; document.

## Rollout

1. Edit [src/app/globals.css](src/app/globals.css) only. No JSX/TSX changes.
2. Verify visually at 375px and 1280px in the existing preview server.
3. Confirm no contrast regression on the dossier copy and meta-chips.

## Testing Strategy

- Visual smoke: re-render `/`, `/projects`, `/projects/[slug]`, `/contact`, `/notes` at 375/768/1280 in the preview.
- Lint and computed-style spot checks: no element should have an effective color outside grayscale ramp (use preview_inspect to verify primary buttons, hover, and meta-chips).
- Reduced-motion + forced-colors blocks must still pass.

## Risks

- Some decorative elements (hero 3D, gradient beams) lose visual signature. Acceptable per user direction.
- If grayscale mapping is wrong, contrast may dip below AA. Mitigated by using `#f5f7fa` (off-white) for accent, which keeps contrast >12:1 on the dark canvas.
