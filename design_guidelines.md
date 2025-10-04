# Design Guidelines: Ebook Landing Page "Conviértete en Asesora de Imagen"

## Design Approach
**Reference-Based Approach**: E-commerce/Course Landing Pages
- Primary inspiration: Shopify, Teachable, and modern course sales pages (Marie Forleo, Amy Porterfield style)
- Mobile-first conversion-optimized design
- High-impact hero with clear value proposition
- Strategic use of social proof and urgency

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Soft Rose: 340 65% 92% (backgrounds, accents)
- Lilac Blush: 300 45% 88% (section backgrounds)
- Warm Nude: 25 35% 90% (alternating sections)

**Accent Colors:**
- Hot Pink CTA: 330 85% 55% (primary buttons)
- Deep Rose: 340 70% 45% (hover states)

**Neutrals:**
- Charcoal Text: 0 0% 20% (main copy)
- Soft Gray: 0 0% 95% (borders, subtle backgrounds)
- Pure White: 0 0% 100% (card backgrounds)

### B. Typography

**Font Families:**
- Headings: Playfair Display (elegant serif) via Google Fonts
- Body: Inter (clean sans-serif) via Google Fonts

**Scale:**
- Hero Headline: text-4xl md:text-6xl, font-bold
- Section Titles: text-3xl md:text-4xl, font-semibold
- Subsection Headers: text-xl md:text-2xl, font-medium
- Body Copy: text-base md:text-lg, font-normal
- Small Print: text-sm, font-light

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24
- Component spacing: space-y-8 md:space-y-12
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8

**Container Widths:**
- Main container: max-w-6xl mx-auto px-4
- Text content: max-w-3xl mx-auto
- Full-width sections: w-full with inner constraints

### D. Component Library

**Hero Section:**
- Full-width gradient background (soft rose to lilac)
- Center-aligned headline with emoji integration
- Prominent 3D ebook mockup image (right side on desktop, centered on mobile)
- Large Hot Pink CTA button (px-8 py-4, rounded-full)
- Trust indicators below CTA

**Validation Cards:**
- White rounded cards (rounded-2xl, shadow-lg)
- Large ✕ symbols in muted red
- Clean list layout with generous spacing

**Feature Lists:**
- Checkmark bullets in Hot Pink
- Grid layout: grid-cols-1 md:grid-cols-2 gap-6
- Icon + text combination

**Step Cards:**
- Numbered circles with gradient backgrounds
- Icon representation for each step
- Vertical layout on mobile, horizontal on desktop

**Testimonial Cards:**
- Rounded profile images (rounded-full, w-16 h-16)
- Quote marks in accent color
- Name and context in smaller, lighter text
- Soft background cards with subtle shadows

**CTA Buttons:**
- Primary: Hot Pink background, white text, rounded-full, shadow-lg
- Hover: Deepened pink with slight scale (scale-105)
- Size variants: Large (hero), Medium (sections), Small (inline)

**FAQ Accordion:**
- Clean borders between items
- Expand/collapse icons
- Generous padding for readability

**Pricing Display:**
- Strikethrough original price (text-2xl, line-through, opacity-60)
- Large current price (text-5xl, font-bold, Hot Pink)
- Urgency indicator with fire emoji and countdown visual

### E. Imagery Strategy

**Hero Image:** 
- 3D mockup of ebook cover with floating elements (phone, fashion items, social media icons)
- Position: Right side on desktop (50% width), full-width on mobile
- Style: Professional, aspirational, slightly elevated perspective

**Section Supporting Images:**
- Lifestyle photos of women using phones/working
- Fashion flat-lays for visual variety
- Minimal, on-brand color treatment (slight pink overlay)

**Author Photo:**
- Professional headshot, circular crop
- Warm, approachable expression
- Positioned left of bio text on desktop

## Layout Structure

**Section Order & Multi-Column Strategy:**
1. Hero: Single column, centered content + image
2. Validation: 1 column mobile, 2 columns desktop (grid of pain points)
3. Opportunity: Full-width highlight bar with centered text
4. Transformation: 2-column grid of benefits
5. Methodology: 3-step horizontal cards (stack on mobile)
6. Included Content: Single column checklist with icons
7. Testimonials: 2-column grid (stack on mobile)
8. About Author: 2-column (photo + bio)
9. Pricing: Centered single column with emphasis
10. Guarantee: Full-width colored band with icon
11. FAQ: Single column accordion
12. Final CTA: Full-width dramatic close

## Interaction Patterns

- Smooth scroll to purchase sections
- Hover states on all clickable elements (subtle scale, color shift)
- FAQ accordion animations (smooth expand/collapse)
- Sticky CTA button on mobile scroll (bottom bar)
- Minimal scroll-triggered animations (fade-in only)

## Accessibility & Performance

- High contrast between text and backgrounds (WCAG AA minimum)
- Touch targets minimum 44px for mobile
- Focus states clearly visible on all interactive elements
- Semantic HTML structure
- Lazy loading for images below fold
- Emoji as text characters (not images) for performance