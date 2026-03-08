# OriJs Website — Design Guidelines

## What is OriJs
A lightweight, high-performance **TypeScript backend framework for Bun**. NestJS-inspired architecture with provider-based DI instead of decorators. Not a frontend framework.

## Tech Stack
- **Astro 5** + **Svelte 5** (runes: `$props()`, `$state()`, `@render`, `Snippet`)
- Custom CSS design system — no Tailwind
- TypeScript strict mode
- Client directives: `client:load` (nav, footer, canvas), `client:visible` (cards, code)

## Design System: Glass Dark Earth

### Theme
- **Glassmorphism** on a dark earthy palette
- Translucent panels with `backdrop-filter: blur()` and subtle white borders
- Diagonal shine gradients on glass surfaces
- SVG grain texture overlay at 2% opacity for tactile feel
- Green + brown color scheme, dark background

### Color Tokens
All colors are CSS custom properties defined in `src/styles/global.css`.

| Token | Value | Usage |
|---|---|---|
| `--bg-deep` | `#0d0b08` | Deepest background (footer, alternating sections) |
| `--bg` | `#1a1612` | Main page background |
| `--bg-surface` | `#211d17` | Slightly elevated surface |
| `--bg-elevated` | `#292420` | Most elevated surface |
| `--green-500` | `#4a7c59` | Primary accent |
| `--green-400` | `#5e9e6e` | Links, interactive elements |
| `--green-300` | `#7bb88a` | Hover states, highlights |
| `--green-glow` | `rgba(90, 200, 120, 0.6)` | Glow effects |
| `--brown-400` | `#a08050` | Secondary accent |
| `--brown-300` | `#c4a882` | Code syntax, secondary headings |
| `--text-primary` | `#d4cfc4` | Body text, headings |
| `--text-secondary` | `#9a9488` | Descriptions, supporting text |
| `--text-dim` | `#5a5650` | Muted/decorative text |

### Glass Tokens
| Token | Value | Usage |
|---|---|---|
| `--glass-bg` | `rgba(26, 22, 18, 0.55)` | Standard glass panel background |
| `--glass-bg-alt` | `rgba(33, 29, 23, 0.45)` | Lighter glass variant |
| `--glass-border` | `rgba(255, 255, 255, 0.07)` | Default border |
| `--glass-border-hover` | `rgba(255, 255, 255, 0.12)` | Hover border |
| `--glass-blur` | `16px` | Standard blur amount |
| `--glass-shine` | diagonal gradient | 135deg white shine overlay |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.3)` | Standard shadow |
| `--glass-shadow-lg` | `0 16px 48px rgba(0,0,0,0.4)` | Hover/elevated shadow |

### Typography
| Font | Variable | Usage |
|---|---|---|
| Space Grotesk 600/700 | `--font-display` | Headings, nav logo, section tags |
| Inter 400/500/600 | `--font-body` | Body text, buttons, descriptions |
| JetBrains Mono 400/500 | `--font-mono` | Code blocks, install commands, tags |

**Scale** (responsive via `clamp()`):
- `h1`: `clamp(3rem, 8vw, 5.5rem)` weight 700
- `h2`: `clamp(2rem, 5vw, 3.2rem)` weight 700
- `h3`: `clamp(1.25rem, 3vw, 1.6rem)` weight 700
- Body: `1rem` / line-height `1.7`
- Headings: letter-spacing `-0.02em`, line-height `1.1`

### Spacing & Layout
- Max width: `1200px`
- Gutter: `24px`
- Section padding: `clamp(4rem, 10vw, 8rem) 0`
- Border radii: `--radius-lg: 20px`, `--radius-md: 14px`, `--radius-sm: 8px`, `--radius-pill: 9999px`

### Glass Panel Rules
1. **`.glass`** — Full glass: translucent bg + blur + border + shadow + shine pseudo-element. Use for prominent panels (CTA, large containers).
2. **`.glass-subtle`** — Lighter glass: translucent bg + lighter blur + border. Use for smaller cards (principles, secondary panels).
3. **Cards/panels**: Always use `backdrop-filter: blur()` + `border: 1px solid var(--glass-border)`. Never use opaque backgrounds on interactive panels.
4. **Hover**: Brighten border to `--glass-border-hover`, deepen shadow to `--glass-shadow-lg`, subtle `translateY(-2px)` lift.
5. **Shine overlay**: Use `var(--glass-shine)` as a `::before` pseudo or `.shine` div on prominent glass panels.
6. **Border glow on hover**: Top-edge gradient line (`green → brown → transparent`) that fades in on hover for feature cards.

### Button Rules
- **`.btn-glass`** — Pill-shaped, glass background, blurred, subtle shadow. Hover lifts 1px and brightens border.
- **`.btn-glass.primary`** — Green-tinted glass (`rgba(45, 90, 61, 0.4)`), green text. Hover adds green glow shadow.
- Always use `border-radius: var(--radius-pill)` for buttons.

### Code Block Rules
- Dark frosted glass: `rgba(13, 11, 8, 0.7)` with `blur(20px)`
- Title bar with muted traffic light dots (desaturated, not bright)
- Syntax colors: keywords → `--green-400`, functions → `--brown-300`, strings → `--green-300`, numbers → `--brown-400`, comments → `--text-dim` italic

### Icon Rules
- Icon containers: `rgba(74, 124, 89, 0.1)` bg with `rgba(74, 124, 89, 0.15)` border
- Icon color: `--green-400`
- Size: 44x44 container, 22x22 icon SVG
- Use inline SVG with `stroke="currentColor"` and `stroke-width="2"`, no fill

### Animation Rules
- Scroll reveal: `ScrollReveal` component with IntersectionObserver, 24px translateY, 0.7s ease
- Stagger delays: 80-100ms between siblings in grids
- Hover transitions: 0.25-0.3s ease
- Always respect `prefers-reduced-motion: reduce`
- Canvas animations (OrganicCanvas): render static frame when reduced motion is preferred

### Grid Rules
- Feature grids: `repeat(3, 1fr)` on desktop, `repeat(2, 1fr)` at 900px, `1fr` at 640px
- Cards spanning: `.wide` = `grid-column: span 2`, `.tall` = `grid-row: span 2`
- **All cards in a grid must match height**: use `height: 100%` on both `ScrollReveal` wrapper and card component
- Code split sections: `1fr 1.2fr` two-column layout

### Section Alternation
- Default sections: `background: var(--bg)`
- Alternating sections: `background: var(--bg-deep)` with `border-top/bottom: 1px solid rgba(255,255,255,0.03)`

### Section Tags
- Mono font, uppercase, 0.75rem, `letter-spacing: 0.12em`
- Green-tinted glass pill: `rgba(74, 124, 89, 0.1)` bg + `rgba(74, 124, 89, 0.15)` border
- Color: `--green-400`

## File Structure
```
src/
├── components/
│   ├── Nav.svelte            # Fixed glass nav, scroll detection
│   ├── Footer.svelte         # Footer with links
│   ├── OrganicCanvas.svelte  # Mycelium particle network animation
│   ├── FeatureCard.svelte    # Glass bento card with icon
│   ├── CodeBlock.svelte      # Frosted code window with syntax highlighting
│   └── ScrollReveal.svelte   # IntersectionObserver reveal animation
├── layouts/
│   └── Base.astro            # Root layout with SEO meta
├── pages/
│   └── index.astro           # Homepage
├── styles/
│   └── global.css            # Design tokens and utilities
└── lib/
    └── base.ts               # BASE_URL helper
```
