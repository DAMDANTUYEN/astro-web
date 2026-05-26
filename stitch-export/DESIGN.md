---
name: Celestial Immersion
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#cdbdff'
  on-secondary: '#370096'
  secondary-container: '#5203d5'
  on-secondary-container: '#c0acff'
  tertiary: '#e3c18e'
  on-tertiary: '#412d06'
  tertiary-container: '#aa8c5d'
  on-tertiary-container: '#3a2602'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e8deff'
  secondary-fixed-dim: '#cdbdff'
  on-secondary-fixed: '#20005f'
  on-secondary-fixed-variant: '#4f00d0'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#e3c18e'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5a431b'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
  deep-sea-void: '#05070A'
  starlight-white: '#F8FAFC'
  nebular-glow: '#4DD0C8'
  cosmic-dust: '#1E293B'
typography:
  display-vast:
    fontFamily: Sora
    fontSize: 80px
    fontWeight: '300'
    lineHeight: 90px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

This design system evokes the infinite expanse of the cosmos, tailored for high-end Astro-Glamping and spiritual healing retreats. The aesthetic is **Glassmorphic Minimalism**, utilizing translucent layers to suggest the thin veil between Earth and the stars.

The visual narrative focuses on "The Great Silence"—a calming, expansive atmosphere that feels both technologically advanced and deeply primordial. It prioritizes high-contrast "starlight" elements against "deep-sea" voids to guide the eye through a journey of discovery. The emotional response is one of awe, tranquility, and refined mystery.

## Colors

The palette is anchored in **Deep Space Navy** and **Deep-Sea Void**, creating a rich, infinite background that allows UI elements to appear as if they are floating. 

- **Primary & Secondary:** Galactic Blue and Nebular Purple are used for interactive states and atmospheric gradients.
- **Tertiary:** A soft gold (#E2C08D) is reserved for healing and "human" elements (e.g., glamping site icons, wellness features) to provide warmth against the coldness of space.
- **Glow Effects:** Use `nebular-glow` and `primary-color` with high-diffusion blurs to simulate starlight scattering.

## Typography

The typography system is built on a contrast between **Sora**, a modern geometric sans-serif with a wide stance that evokes vastness, and **Inter**, a clean and reliable body face.

- **Headlines:** Set with generous letter-spacing to reinforce the feeling of open space. The `display-vast` style should be used sparingly for hero sections to anchor the cosmic theme.
- **Labels:** We use **JetBrains Mono** for technical data (coordinates, moon phases, booking dates) to introduce a subtle "scientific instrument" feel to the healing experience.

## Layout & Spacing

The layout utilizes a **Fixed Grid** on desktop (12 columns) with aggressive vertical spacing. To evoke the "vastness" of the brand, sections are separated by large gaps (`section-gap`), allowing the background "void" to breathe.

- **Mobile:** Transition to a 4-column fluid layout. Top margins should remain generous to ensure content doesn't feel cramped.
- **Alignment:** Central alignment is preferred for high-impact healing content, while asymmetrical layouts (using offset columns) are used for "glamping" tours to simulate the unpredictability of a night sky.

## Elevation & Depth

This system avoids traditional shadows in favor of **Luminous Depth**. 

1.  **Backdrop Blurs:** Use `12px` to `24px` Gaussian blurs on semi-transparent surfaces (`deep-sea-void` at 40-60% opacity).
2.  **Inner Glows:** Instead of drop shadows, use thin (1px) inner borders with `starlight-white` at 10% opacity to define the edges of floating cards.
3.  **Outer Glows:** Interactive elements like buttons or active chips should emit a soft `nebular-glow` (blur: 20px, spread: -5px) rather than casting a shadow.

## Shapes

The shape language is dominated by circles and soft rectangles. Circles represent celestial bodies and the "healing circle" concept. 

Containers use a `1rem` (rounded-lg) corner radius to soften the technical feel of the dark UI, making the interface feel more organic and welcoming. All interactive inputs and buttons should utilize a "Pill-shape" (3) to contrast against the structured grid.

## Components

- **Buttons:** Primary buttons should be "Starlight" buttons—solid Galactic Blue with a subtle outer glow. Secondary buttons use a "Ghost" style with a 1px border and high-blur backdrop.
- **Cards:** Glamping suite cards should feature a "frosted" glass effect. The top edge should have a slightly brighter 1px highlight to simulate light coming from a distant star.
- **Glow-Chips:** Small labels used for "Available" status or "Healing Type" should have a pulsating outer glow.
- **Input Fields:** Bottom-border only, using `cosmic-dust` as the inactive state and `nebular-glow` as the active focus state.
- **Celestial Navigation:** Use thin lines and circular markers for pagination or progress tracking, mimicking star charts.