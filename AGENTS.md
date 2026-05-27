# AGENTS.md

## Project

Single-page React app (JSX, no TS) for an astro-glamping & healing retreat in Vietnam. Built with Vite + Tailwind CSS v4 + Three.js (@react-three/fiber).

## Commands

```sh
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview production build
npm run lint     # ESLint (flat config, eslint.config.js)
```

No test framework installed -- do not attempt to run tests.

## Key conventions

- **Tailwind v4** -- all theme tokens (colors, fonts, spacing, radii) are defined via `@theme` in `src/index.css`. Do NOT create/update `tailwind.config.js`. Use `@theme { ... }` blocks instead.
- **Custom Tailwind classes** defined in `src/index.css`: `.glass-card`, `.luminous-button`, `.starfield-bg`, `.animate-float`.
- **Files are `.jsx`** -- despite `@types/react` in devDeps, this is a JS-only project.
- **UI language is Vietnamese** -- all visible text is in Vietnamese.
- **Fonts & icons** loaded via Google Fonts CDN in `index.html`: Sora (display), Inter (body), JetBrains Mono (labels), Material Symbols Outlined.
- **`opencode.json`** has a Stitch MCP endpoint requiring `STITCH_API_KEY` env var.
- **Design system**: `luxury-gold-design` skill (`.opencode/skills/luxury-gold-design/SKILL.md`) — gold-on-navy luxury aesthetic. The old glassmorphic / teal-blue design is deprecated. Load skill before any visual work.
- **Stitch DESIGN.md** at `stitch-export/DESIGN.md` — historical reference, no longer active.

## Skills in `.opencode/skills/`

- **`luxury-gold-design`** — primary design system for all visual work. Load this before designing or restyling any component.
- 11 Three.js skill files covering fundamentals, geometry, materials, shaders, post-processing, animation, interaction, loaders, textures, lighting, and astro-travel. Use `skill` tool to load them when relevant.

## Current state

- No Three.js / R3F components are actively wired in (Starfield is pure CSS). The Three.js deps and skills are prepped but unused.
- Components: Navbar, Hero, ExperienceCards, BortleSlider (only interactive state), BentoGallery, Footer, Starfield, Logo.
- No CI/CD pipelines.
- Single entrypoint: `src/main.jsx` → `src/App.jsx`.
