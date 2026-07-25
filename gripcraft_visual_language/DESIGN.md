---
name: GripCraft Visual Language
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#909097'
  outline-variant: '#45464c'
  surface-tint: '#c0c6db'
  primary: '#c0c6db'
  on-primary: '#293040'
  primary-container: '#111827'
  on-primary-container: '#7a8194'
  inverse-primary: '#575e70'
  secondary: '#94de2d'
  on-secondary: '#1f3700'
  secondary-container: '#7ac100'
  on-secondary-container: '#2c4900'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#171919'
  on-tertiary-container: '#808282'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#acf847'
  secondary-fixed-dim: '#91db2a'
  on-secondary-fixed: '#102000'
  on-secondary-fixed-variant: '#304f00'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style

This design system is engineered for high-performance athletics, specifically tailored for the precision and speed of badminton. The aesthetic is **High-Contrast / Bold**, leaning into a technical, premium feel that mirrors professional sports equipment. The brand personality is energetic, authoritative, and obsessively focused on tactile quality. 

To evoke a sense of movement and agility, the design utilizes dynamic angled accents—slight 2-to-5 degree shears on decorative elements—contrasted against stable, structured layouts. The emotional response should be one of confidence and "readiness to play."

The style combines a dark-mode primary aesthetic with vibrant "Electric Volt" highlights to guide the user's eye toward action. It avoids unnecessary clutter, focusing instead on product texture, performance data, and high-impact photography.

## Colors

The palette is anchored by **Deep Slate Gray**, which provides a professional, "carbon-fiber" backdrop. **Electric Volt Green** is reserved strictly for interactive elements, success states, and critical performance highlights, ensuring maximum visibility.

- **Primary Base:** Deep Slate Gray (#111827) for main backgrounds and deep UI layers.
- **Action/Accent:** Electric Volt Green (#84CC16) for primary buttons, active states, and focus indicators.
- **Surface Contrast:** White (#FFFFFF) for primary typography on dark backgrounds to ensure AAA accessibility.
- **Secondary Surface:** Light Gray (#F9FAFB) is used sparingly for high-contrast sections, such as technical spec sheets or blog content, where a "light mode" break is required.

## Typography

The typography strategy emphasizes speed and technical precision. **Archivo Narrow** is used for headings; its condensed width allows for impactful, large-scale type that fits efficiently on mobile screens and mimics sports broadcast graphics.

**Hanken Grotesk** provides a clean, contemporary balance for body copy, ensuring high readability for technical specifications and product descriptions. **JetBrains Mono** is introduced for small labels and technical data points (e.g., "Tension: High", "Grip Type: Tacky") to reinforce the "engineered" nature of the product.

Apply `text-uppercase` to all Display and Headline levels to maintain a commanding, athletic presence.

## Layout & Spacing

The layout uses a **Fluid Grid** system based on a 12-column structure for desktop and a 4-column structure for mobile. A strict 4px baseline grid ensures vertical rhythm.

- **Desktop:** 12 columns, 24px gutters, 48px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.

To reflect the "Grip" aspect of the brand, spacing should feel tight and "held together." Group related items with smaller gaps (8-12px) while using larger breaks (64px+) between major sections to allow the bold typography room to breathe. Use asymmetrical padding in container blocks to allow for "angled" background decorations without clipping content.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than heavy shadows. In this dark-themed system, depth is created by moving from the Primary Base (#111827) to a slightly lighter Surface-Alt (#1F2937).

- **Cards:** Use a 1px border of #FFFFFF at 10% opacity to define edges against the dark background.
- **Shadows:** When used, shadows should be "Ambient Shadows"—deep, tight, and highly diffused (e.g., `box-shadow: 0 10px 30px rgba(0,0,0,0.5)`).
- **Interactive Depth:** On hover, cards should subtly lift using a transform `translateY(-4px)` rather than increasing shadow spread, maintaining a crisp, "hard" athletic feel.
- **Overlays:** Use a 40% backdrop blur on navigation bars and modals to maintain a technical, glass-like precision.

## Shapes

The shape language is a study in contrasts: **Pill-shaped (3)** buttons and badges represent the comfort and ergonomic feel of a grip, while containers and product images utilize sharp or very slightly rounded corners to represent precision.

- **Primary Action Elements:** Buttons and tags must be fully rounded (pill-shaped) to invite interaction.
- **Structural Elements:** Product cards and image containers should use a "Soft" radius (4-8px) to maintain a modern, clean-cut edge.
- **Accents:** Use 5-degree angled "slashes" as background decorative elements or as part of the hover state for list items to convey forward momentum.

## Components

### Buttons
- **Primary:** Pill-shaped, Electric Volt Green background, Deep Slate Gray text. High-contrast bold typography.
- **Secondary:** Pill-shaped, transparent with a 2px White or Electric Volt border.

### Product Cards
- **Construction:** Surface-Alt (#1F2937) background. 1px ghost border. 
- **Swatches:** Circular color swatches with a 2px offset ring when selected.
- **Rating Badges:** Small pill-shaped badges using JetBrains Mono for the score, placed in the top-right corner of the image area.

### Input Fields
- **Style:** Underlined or subtle boxed style with #1F2937 fill. 
- **Focus:** The bottom border transforms into a 2px Electric Volt Green line.

### Navigation
- **Technical Feel:** Use "ghost" buttons for nav links. The active state should be indicated by a small Electric Volt Green dot or an angled slash beneath the text.
- **Sticky Nav:** Apply backdrop-blur (12px) with a 70% opacity Deep Slate Gray fill to keep the UI feeling premium and lightweight.

### Rating & Badges
- **Badges:** All status indicators (e.g., "New Arrival", "Pro-Grade") must be pill-shaped with `label-caps` typography.