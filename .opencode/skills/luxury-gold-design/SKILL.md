---
name: luxury-gold-design
description: Gold-on-navy luxury design system for visual work. Use when designing, styling, or theming any component or screen. Trigger on any UI/visual task: layout, colors, fonts, buttons, cards, dividers, photo overlays, or branding. This is the primary design system — the old glassmorphic / teal-blue design is deprecated.
---

# Luxury Gold Design System — ASTROLUXE

Use this skill whenever working on visual design, layout, styling, or theming. This is the **primary** design system — the previous glassmorphic/modern style is deprecated.

## Brand essence

Luxury astro-glamping & healing retreat. Warm gold on deep navy. Serif elegance meets celestial wonder. "Old money" space travel.

---

## Color palette (strict — no other colors)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-deep-navy` | `#090d1a` | Page background |
| `bg-black-void` | `#05070A` | Deeper sections, footer |
| `gold-primary` | `#c9973a` | All accents, borders, icons, labels |
| `gold-light` | `#e8c79a` | Hover states, secondary accents |
| `cream-white` | `#f5f0e8` | All body text, headings |
| `dark-overlay` | `rgba(0,0,0,0.6)` | Photo overlays, card panels |

Implementation: define via `@theme` in `src/index.css`:
```css
--color-bg-deep-navy: #090d1a;
--color-bg-black-void: #05070A;
--color-gold-primary: #c9973a;
--color-gold-light: #e8c79a;
--color-cream-white: #f5f0e8;
```

## Typography

| Role | Font | Weight | Size | Color |
|------|------|--------|------|-------|
| Display / hero title | `Cormorant Garamond` | 300 | `clamp(2rem,6vw,4.5rem)` | `cream-white` |
| Section heading | `Cormorant Garamond` | 300 | `clamp(1.5rem,4vw,2.5rem)` | `cream-white` |
| Script accent | `Cormorant Garamond` italic | 300 | `clamp(1.2rem,3vw,2rem)` | `gold-primary` |
| Label / tag (ALL CAPS) | `Quicksand` | 300-400 | `10-12px` | `gold-primary` |
| Body copy | `Quicksand` | 300 | `14-16px` | `cream-white` |
| Caption / muted | `Quicksand` | 300 | `11-12px` | `cream-white` at 50-60% |

Letter-spacing for labels: `0.15em` to `0.25em`.

## Font loading

Add to `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Great+Vibes&family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet">

Remove old fonts (Sora, Inter, JetBrains Mono, Playfair Display, Montserrat) from the CDN link.

## Layout rules

- **Vertical spacing**: use `section-gap` (`160px` on desktop, `80px` on mobile) between sections
- **Horizontal padding**: `margin-desktop` (`80px`) on desktop, `margin-mobile` (`20px`) on mobile
- **Content max-width**: `1200px` centered
- **Dividers between sections**: gold rule (`1px`, `gold-primary` at 40% opacity) with `◆` diamond ornament centered
- **Gold inner border frame** on the outermost container: `1px solid gold-primary at 20%`, inset `16px` (use on full-page wrappers / poster-like sections)

## Photo treatment

1. Every `<img>` with a scene photo must have:
   - Dark overlay: `rgba(0,0,0,0.35)` pseudo-element
   - Border: `1px solid gold-primary at 30%`
   - Border-radius: `8px`
2. Color grade concept (CSS cannot truly color-grade, but use warm-tinted overlays / gradients to simulate):
   - `::after` overlay with `linear-gradient(rgba(201,151,58,0.08), rgba(0,0,0,0.4))`

## Component styles

### Cards / panels
- Background: `rgba(0,0,0,0.6)` — solid dark, NO blur/glass
- Border: `1px solid gold-primary at 20%`
- Border-radius: `8px`

### Buttons
- **Primary**: gold border (`1px`, gold-primary), transparent bg, gold text, Montserrat 500, ALL CAPS, `letter-spacing: 0.2em`, px-6 py-2.5, rounded-full
- **Primary hover**: bg `gold-primary at 10%`, border at 60%
- **Secondary (ghost)**: cream-white border at 20%, cream-white text at 60%

### Dividers
- `1px` horizontal rule, cream-white at 15% opacity
- Center ornament: `◆` (gold-primary at 60%)
- Spacing above/below: `3rem` / `3rem`

### Icons
Use `material-symbols-outlined` but styled as thin, elegant:
- CSS: `font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' -25, 'opsz' 48`
- Color: `gold-primary`
- Size: `36-40px` equivalent (`text-[32px]`)

OR use custom inline SVG with `stroke="#c9973a" stroke-width="1.5" fill="none"`.

### Star scatter overlay
Subtle starfield on background sections:
```css
background-image: radial-gradient(1px 1px at X% Y%, rgba(201,151,58,0.3), transparent), ...;
```
Keep opacity very low (`0.03` to `0.06`).

## Gold divider component (reference)

```html
<div class="flex items-center gap-3 my-12 md:my-16">
  <div class="h-px flex-1 bg-cream-white/15" />
  <span class="text-gold-primary/60 text-sm leading-none">◆</span>
  <div class="h-px flex-1 bg-cream-white/15" />
</div>
```

## Bortle Slider style

- Track height: `4px`, bg `rgba(255,255,255,0.1)`
- Thumb: `20px` circle, bg `gold-primary`, box-shadow `0 0 18px rgba(201,151,58,0.4)`
- No teal/blue colors

## Poster frame (marketing hero)

For "poster-like" sections (Hero, full-width banners):
- Gold inner border frame: `1px solid rgba(201,151,58,0.2)`, inset `16px` from edge
- Soft radial glow behind title: `radial-gradient(ellipse at center, rgba(201,151,58,0.06), transparent 60%)`
- Star scatter dots overlay
- Logo centered at top: gold, small

---

## What this replaces

| Old | New |
|-----|-----|
| `--color-nebular-glow: #4DD0C8` | `--color-gold-primary: #c9973a` |
| `--color-primary: #adc6ff` | Remove — use gold |
| `--color-starlight-white: #F8FAFC` | `--color-cream-white: #f5f0e8` |
| `--color-deep-sea-void: #05070A` | Keep as `bg-black-void` |
| `Sora` font | `Cormorant Garamond` |
| `Inter` font | `Quicksand` |
| `JetBrains Mono` | Remove |
| `Playfair Display` | `Cormorant Garamond` (softer serif) |
| `Montserrat` | `Quicksand` (rounded, ethereal) |
| Glassmorphism (blur cards) | Solid dark overlay panels |
| Teal glow buttons | Gold border pill buttons |
| `luminous-button` class | Inline Tailwind gold-border button |
| `.glass-card` class | `bg-black/60 border-gold-primary/20` |
| `.starfield-bg` (white dots) | Gold-tinted star scatter at lower opacity |
