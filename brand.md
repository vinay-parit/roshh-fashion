# Brand & Design System Guidelines
### Premium Minimal Fashion eCommerce — Design Language Reference

> Inspired by Zara, COS, Uniqlo, Apple, and H&M. Editorial, monochrome, spacious. This document defines the visual system to be used consistently across the entire site (React.js / Next.js / Tailwind CSS / Framer Motion).

---

## 1. Brand Personality

| Trait | Description |
|---|---|
| Minimal | Nothing decorative without purpose. Whitespace is a design element, not empty space. |
| Editorial | Layouts feel like a fashion magazine spread — large imagery, confident typography. |
| Premium | Quiet luxury. No loud colors, no clutter, no gimmicks. |
| Modern | Clean geometry, contemporary type, subtle motion. |
| Confident | Bold oversized headlines paired with restrained supporting text. |

**Voice & Tone:** short, declarative, lowercase-leaning in labels (e.g. "SHOP NOW", "EXPLORE COLLECTION"), sentence-case in editorial copy ("Fashion that moves with you.").

---

## 2. Color Palette

Strictly monochrome. Color is never used for decoration — only for state (error, success) in small, functional doses.

### Primary Palette

| Name | Hex | Usage |
|---|---|---|
| Pure Black | `#0A0A0A` | Primary text, buttons, navbar-on-scroll text, icons |
| True White | `#FFFFFF` | Page background, button text on dark, cards |
| Off White | `#FAFAF8` | Section backgrounds, hero background |
| Light Gray | `#F2F1EF` | Category card backgrounds, subtle section separation |
| Mid Gray | `#B8B6B2` | Disabled states, dividers, placeholder text |
| Stone Gray | `#6E6C68` | Secondary/supporting body text |
| Charcoal | `#1C1C1C` | Hover state of black elements, footer background |

### Functional (Minimal Use Only)

| Name | Hex | Usage |
|---|---|---|
| Success Green | `#2E5339` | Stock available / order confirmed micro-copy |
| Error Red | `#8B2E2E` | Out of stock / form validation |
| WhatsApp Green | `#25D366` | Reserved **only** for the "Book on WhatsApp" button + icon |

### Usage Ratio
- 60% White / Off-White (space)
- 30% Black / Charcoal (type, UI, imagery contrast)
- 8% Gray (structure, secondary text)
- 2% Functional color (WhatsApp CTA, status states)

---

## 3. Typography

### Font Families

| Role | Font | Fallback |
|---|---|---|
| Display / Headlines | `Helvetica Neue` / `Neue Haas Grotesk` | `Inter`, `Arial`, sans-serif |
| Body / UI | `Inter` | `Helvetica`, `Arial`, sans-serif |
| Editorial Accent (optional) | `Times New Roman` (italic, sparing use) | `Georgia`, serif |

### Type Scale (Desktop → Mobile)

| Token | Size (Desktop) | Size (Mobile) | Weight | Letter Spacing | Line Height | Usage |
|---|---|---|---|---|---|---|
| `display-hero` | 160–220px | 64–96px | 700 | -0.02em | 0.9 | Oversized hero word (e.g. "GAZU") |
| `h1` | 56px | 34px | 600 | -0.01em | 1.1 | Section headlines ("NEW VIBES") |
| `h2` | 36px | 26px | 600 | 0 | 1.2 | Sub-section titles |
| `h3` | 22px | 18px | 500 | 0 | 1.3 | Card titles, product names |
| `body-lg` | 18px | 16px | 400 | 0 | 1.6 | Intro/description text |
| `body` | 15px | 14px | 400 | 0 | 1.6 | Standard paragraph, product descriptions |
| `body-sm` | 13px | 12px | 400 | 0.02em | 1.5 | Meta info, captions |
| `label` | 12px | 11px | 600 | 0.15em (uppercase) | 1.4 | Nav links, buttons, tags — always UPPERCASE |
| `price` | 16px | 15px | 600 | 0 | 1.4 | Product price |

**Rule:** Navigation, buttons, and category labels are always **uppercase with wide tracking (0.12–0.18em)**. Editorial/body copy is always **sentence case**.

---

## 4. Spacing System

8px base unit, scaled for editorial breathing room.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Icon-to-label gaps |
| `space-2` | 8px | Tight element grouping |
| `space-3` | 16px | Inner card padding (mobile) |
| `space-4` | 24px | Standard component gap |
| `space-5` | 32px | Card padding (desktop), grid gutters |
| `space-6` | 48px | Sub-section spacing |
| `space-7` | 64px | Section internal top/bottom (mobile) |
| `space-8` | 96px | Section internal top/bottom (desktop) |
| `space-9` | 120px | Hero vertical padding |
| `space-10` | 160px | Major section-to-section separation (desktop) |

### Layout Grid
- **Desktop:** 12-column grid, max-width `1440px`, outer margin `80px`, gutter `32px`
- **Tablet:** 8-column grid, outer margin `40px`, gutter `24px`
- **Mobile:** 4-column grid, outer margin `20px`, gutter `16px`

---

## 5. Margin & Padding Conventions

| Component | Padding | Margin |
|---|---|---|
| Navbar | `24px 80px` (desktop) / `16px 20px` (mobile) | — |
| Buttons | `18px 40px` | — |
| Product Card | `0` image / `20px 0 0` text block | `32px` gutter between cards |
| Section Container | `96px 80px` (desktop) / `48px 20px` (mobile) | — |
| Product Detail Gallery | `0` | `0 48px 0 0` (gap to info panel) |
| Cart Drawer | `32px 24px` | — |
| Footer | `80px 80px 32px` | — |
| Form Inputs | `16px 20px` | `0 0 20px` between fields |

---

## 6. Borders & Border Radius

Borders are hairline and low-contrast — structure without heaviness.

| Token | Value | Usage |
|---|---|---|
| `border-hairline` | `1px solid #E4E2DE` | Card outlines, dividers, table rows |
| `border-strong` | `1px solid #0A0A0A` | Outline buttons, focus states |
| `border-none` | `0` | Default for images/cards (rely on spacing, not borders) |

| Radius Token | Value | Usage |
|---|---|---|
| `radius-none` | `0px` | Hero images, editorial imagery (sharp, magazine-like) |
| `radius-sm` | `4px` | Input fields, tags/chips |
| `radius-md` | `8px` | Product cards, modals |
| `radius-lg` | `16px` | Feature icon containers, image cards in category grid |
| `radius-full` | `999px` | Buttons (primary CTA), avatar/icon buttons, size selectors |

**Rule:** Primary CTAs (e.g. "SHOP NOW", "BOOK ON WHATSAPP") always use `radius-full` (pill) or a crisp `radius-none` rectangle for a more editorial feel — pick one and apply consistently sitewide (recommend: pill buttons for primary actions, sharp rectangles for imagery).

---

## 7. Elevation & Shadows

Soft, low-opacity — never harsh drop shadows.

| Token | Value | Usage |
|---|---|---|
| `shadow-none` | none | Default resting state |
| `shadow-sm` | `0 2px 8px rgba(0,0,0,0.04)` | Navbar after scroll |
| `shadow-md` | `0 8px 24px rgba(0,0,0,0.08)` | Product card hover, dropdowns |
| `shadow-lg` | `0 16px 48px rgba(0,0,0,0.12)` | Modals, cart drawer, search overlay |

---

## 8. Iconography

- **Style:** Outline/stroke icons only, no filled icons, no duotone.
- **Stroke width:** 1.5px, consistent across the icon set.
- **Size:** `20px` (inline/nav), `24px` (buttons), `32px` (feature section).
- **Library recommendation:** `lucide-react` (matches minimal aesthetic, tree-shakable for Next.js).
- **Color:** Always `#0A0A0A` (black) at rest, `#6E6C68` for muted/secondary; `#25D366` reserved exclusively for WhatsApp icon.
- **Icons required:** Search, Cart (bag outline), Menu (hamburger), Close (X), Chevron (arrow-right for category/CTA hover), Plus/Minus (quantity selector), Zoom (product gallery), Truck (fast delivery), Package (easy returns), Badge/Check (quality), Lock (secure), WhatsApp glyph.

---

## 9. Imagery & Shape Language

- **Photography:** Full-bleed, high-contrast black & white or desaturated editorial photography. Consistent color grading across the entire catalog.
- **Aspect ratios:** Hero `16:9` or `4:5` (mobile), Product card `3:4`, Category card `4:5`, Gallery detail `1:1` or `4:5`.
- **Shape system:** Predominantly rectangular/sharp for imagery (`radius-none`) with soft rounding (`radius-lg`–`radius-full`) reserved for interactive UI (buttons, chips, icon containers) — this contrast is a signature of the aesthetic: sharp editorial content, soft usable interface.
- **Whitespace:** Minimum 1 full `space-8` (96px) between major sections on desktop; never let two sections visually touch without a breathing gap or a hairline divider.
- **Hover treatment:** Subtle scale (`1.0 → 1.03`), 400–600ms ease, paired with image swap or arrow-slide reveal — never abrupt.

---

## 10. Motion (Framer Motion) Principles

| Interaction | Motion | Duration | Easing |
|---|---|---|---|
| Section reveal | Fade + translateY(24px → 0) | 600ms | `easeOut` |
| Hero parallax | translateY based on scroll offset | continuous | linear scroll-linked |
| Navbar transition | background/blur + shadow fade | 300ms | `easeInOut` |
| Card hover | scale 1.03 + image crossfade | 450ms | `easeOut` |
| Button hover | background invert + slight scale (1.0 → 1.02) | 250ms | `easeOut` |
| Page transition | fade + slight translateY | 400ms | `easeInOut` |
| Search overlay | fade + scale-in from 0.98 | 350ms | `easeOut` |

**Principle:** Motion should feel like turning a magazine page — smooth, weighted, never bouncy or playful (no spring overshoot on editorial elements; spring is acceptable only for small UI feedback like the cart badge count).

---

## 11. Component Tokens Summary (Quick Reference)

```
Colors:      black #0A0A0A · white #FFFFFF · off-white #FAFAF8
             light-gray #F2F1EF · mid-gray #B8B6B2 · stone #6E6C68
             whatsapp #25D366

Font:        Display — Neue Haas / Helvetica Neue / Inter
             Body    — Inter

Radius:      none 0 · sm 4 · md 8 · lg 16 · full 999

Spacing:     4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 120 · 160

Shadow:      sm  0 2px 8px rgba(0,0,0,.04)
             md  0 8px 24px rgba(0,0,0,.08)
             lg  0 16px 48px rgba(0,0,0,.12)

Border:      hairline #E4E2DE 1px
```

---

*This guideline applies across all pages: Home, Shop, Product Detail, Cart Drawer, and WhatsApp Checkout flow. Keep color usage strictly monochrome outside of the WhatsApp CTA and functional status colors to preserve the premium, editorial identity.*