# Design Guidelines for Payal Restaurant Website

## Design Approach
**Reference-Based Approach**: Modern restaurant website inspired by clean, conversion-focused designs with card-based layouts and generous whitespace. The site prioritizes clarity, accessibility, and SEO while maintaining visual appeal suitable for a local vegetarian restaurant.

## Core Design Principles
- **Clean & Approachable**: Welcoming atmosphere reflecting homestyle cooking
- **Information Clarity**: Easy access to menu, contact, and ordering options
- **Trust & Credibility**: Professional presentation with WebGlow branding
- **Performance-First**: Lightweight, fast-loading static site optimized for mobile

## Typography
- **Display Font**: Modern web font for headings (single family, weights 600-700)
- **UI/Body Font**: System stack or paired web font for readability (weights 400-500)
- **Hierarchy**: H1 (hero/page titles), H2 (section headings), H3 (card titles), body (16px base)
- **Variable fonts** preferred for performance

## Layout System
**Spacing Scale**: Use Tailwind units **2, 4, 8, 12, 16, 20, 32** for consistent rhythm
- Cards/Components: `p-8` to `p-12`
- Section spacing: `py-16` to `py-32` desktop, `py-12` mobile
- Grid gaps: `gap-8` standard, `gap-4` tight
- Container: `max-w-7xl` main content, `max-w-prose` text blocks
- 8-point grid system throughout

## Color Palette
- **Primary**: Deep indigo/navy (#1e3a8a or similar)
- **Accent**: Warm saffron/orange (#f59e0b or similar) 
- **Neutrals**: Grays for text and backgrounds (#f9fafb, #374151, #111827)
- **Success/CTA**: Green for order buttons (#10b981)
- Use CSS variables for theming

## Component Library

### Navigation
- Sticky header with logo (WebGlow logo from provided URL)
- Desktop: horizontal nav links (Home, Menu, About, Gallery, Contact)
- Mobile: hamburger menu with smooth slide-in drawer
- CTA buttons: "Order Now" and "Call" prominently placed

### Hero Section (Homepage)
- **Large hero image**: Restaurant exterior or signature dish
- **Overlay**: Semi-transparent gradient for text readability
- **Tagline**: "Payal Restaurant — Classic vegetarian flavours of Lakhisarai, served fresh daily"
- **CTA Group**: Four buttons with blurred backgrounds:
  - Call: +91 63462 33115 (click-to-call)
  - Order on Zomato
  - Order on Swiggy  
  - View Menu
- Height: 80vh desktop, auto mobile

### Cards
- **Rounded corners**: 12-16px (`rounded-xl`)
- **Shadows**: Soft elevation (`shadow-lg`)
- **Hover state**: `scale(1.02)` + increased shadow
- **Padding**: `p-6` to `p-8`
- **Background**: White or subtle off-white

### Opening Popup (Session-based)
- **Glassy panel overlay** with backdrop blur
- **Content**: Exact copy as provided
  - Headline: "Like this website? Need one for your restaurant?"
  - Body text + WebGlow logo
  - Two buttons: "Contact WebGlow" (mailto) + "Close & Explore Site"
- **Dismissible**: X button top-right
- **Behavior**: Show once per session, respect `prefers-reduced-motion`

### Menu Page Components
- **Prominent Disclaimer Box** at top (exact copy provided, light background, border)
- **Category Accordion** on mobile, side navigation on desktop
- **Menu Items**: Grid cards with photo, name, description, sample price
- **Sticky Order CTA** appears on scroll

### Gallery
- **Masonry or grid layout**: 3-4 columns desktop, 2 tablet, 1 mobile
- **Lightbox view** on click
- **Categories**: Exterior, Interior, Signature Dishes, Sweets Counter
- **Alt text**: Descriptive for each image

### Contact Section
- **Two-column layout** desktop: Form (left) + Map/Info (right)
- **Google Map embed** with address marker
- **Info block**: Address, phone (click-to-call), hours
- **Form fields**: Name, Email, Phone, Message with validation
- Netlify Forms integration (`data-netlify="true"`)

### Footer
- **Multi-column layout**: About, Quick Links, Contact, WebGlow Credit
- **WebGlow branding**: Logo + "Website design & build: WebGlow" with link
- **Social/ordering links**: Zomato, Swiggy icons
- **Background**: Dark with light text

## Animations & Interactions
- **Scroll-triggered fade-ins**: `translateY(20px)` + opacity using Intersection Observer
- **Card hover**: `transition: transform 280ms cubic-bezier(.2,.9,.2,1), box-shadow 280ms`
- **Button microinteraction**: Subtle scale-down on press
- **Smooth scroll** for anchor links
- **Respect `prefers-reduced-motion`** – reduce/remove animations
- **Minimal animations** – prioritize performance

## Images Strategy
### Required Images:
1. **Hero**: Restaurant exterior or signature dish (full-width, high-quality)
2. **About section**: Interior seating or kitchen
3. **Gallery**: 12-20 images across categories
4. **Menu items**: Dish photos for popular items
5. **WebGlow logo**: From `https://webglowx.onrender.com/logo.png`

### Image Treatment:
- **WebP format** with JPEG fallback
- **Responsive srcset** for different viewports
- **Lazy loading** for below-fold images
- **Low-Quality Image Placeholders (LQIP)** for smooth loading
- **Descriptive alt text** for all images (accessibility + SEO)

## Responsive Behavior
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Single column** on mobile, multi-column on desktop where appropriate
- **Touch-friendly**: Minimum 44px tap targets
- **Readable text**: No horizontal scrolling, comfortable line lengths

## Accessibility Requirements
- **Color contrast**: WCAG AA minimum (4.5:1 for body text)
- **Keyboard navigation**: Focus states on all interactive elements
- **Semantic HTML**: Proper heading hierarchy (H1 → H6)
- **Form labels**: Associated with inputs, clear error messages
- **ARIA attributes** where semantic HTML insufficient
- **`lang="en-IN"`** attribute on `<html>`

## Page-Specific Layouts

**Homepage**: Hero → About snippet → Popular dishes carousel → Hours/Location → Footer  
**Menu**: Disclaimer → Category nav → Menu grid with filters  
**About**: Hero image → Story text → Team/values → WebGlow credit panel  
**Gallery**: Filter tabs → Grid layout → Lightbox  
**Contact**: Map + form two-column → Hours + directions  
**Credits**: WebGlow showcase with logo, description, CTA  
**Privacy**: Simple text layout with sections

## Performance Targets
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **Mobile-friendly**: Pass Google test
- **Core Web Vitals**: All green

This design creates a professional, conversion-optimized restaurant website that balances modern aesthetics with practical functionality while prominently featuring WebGlow branding as specified.