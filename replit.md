# Payal Restaurant Website

A modern, SEO-optimized static website for Payal Restaurant in Lakhisarai, Bihar. Built with React, TypeScript, and Tailwind CSS, featuring WebGlow branding and complete Netlify deployment configuration.

## Project Overview

**Restaurant**: Payal Restaurant  
**Location**: Nawada-Sikandara-Lakhisarai Rd, Near Sahid Dwar / Purani Bazar, Lakhisarai, Bihar 811311  
**Phone**: +91 63462 33115  
**Cuisine**: Vegetarian / North Indian, Chinese, South Indian (casual dining)  
**Hours**: Monday-Saturday 7:00 AM - 10:00 PM (Sunday: call to confirm)  

## Website Features

### Pages
- **Home**: Hero section with restaurant tagline, CTAs, popular dishes, about snippet, location map
- **Menu**: Categorized menu items with filtering, prominent price disclaimer
- **About**: Restaurant story, values, location & hours, WebGlow credit panel
- **Gallery**: Filterable image gallery with lightbox view
- **Contact**: Contact form, Google Map embed, business information
- **Privacy**: Privacy policy and data handling information
- **Credits**: WebGlow showcase and services

### Key Features
- ✅ Session-based welcome popup promoting WebGlow services (for any niche website/business)
- ✅ SEO-optimized with meta tags, Open Graph, Twitter Cards
- ✅ JSON-LD LocalBusiness structured data for search engines
- ✅ Mobile-first responsive design
- ✅ Modern CSS animations with Intersection Observer
- ✅ Accessibility features (WCAG contrast, keyboard nav, prefers-reduced-motion)
- ✅ WebGlow branding in footer and credits page (logo removed from header)
- ✅ AI-generated restaurant images in gallery (interior, exterior, dishes, thali)
- ✅ Contact form with Netlify Forms support (works on static sites)
- ✅ Deep indigo/navy primary color with warm saffron accent
- ✅ Updated sitemap.xml (2025-11-11) for Google Search Console
- ✅ Netlify deployment ready with complete documentation

## Technical Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Fonts**: Inter (body), Poppins (display/headings)
- **Animations**: CSS transitions + Intersection Observer API
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation

### Backend
- **Server**: Express.js
- **Database**: In-memory storage (MemStorage) for contact submissions
- **API**: RESTful endpoints for contact form

### Build & Deployment
- **Build Tool**: Vite
- **Package Manager**: npm
- **Deployment**: Netlify-ready with configuration files
- **SEO**: Sitemap.xml, robots.txt, structured data

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   ├── Header.tsx       # Sticky navigation header
│   │   │   ├── Footer.tsx       # Site footer with WebGlow credit
│   │   │   └── WelcomePopup.tsx # Session-based promotional popup
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Homepage with hero & features
│   │   │   ├── Menu.tsx         # Menu page with category filter
│   │   │   ├── About.tsx        # About page with restaurant story
│   │   │   ├── Gallery.tsx      # Image gallery with lightbox
│   │   │   ├── Contact.tsx      # Contact form & map
│   │   │   ├── Privacy.tsx      # Privacy policy
│   │   │   └── Credits.tsx      # WebGlow credits page
│   │   ├── App.tsx              # Main app with routing
│   │   ├── index.css            # Tailwind base + custom utilities
│   │   └── main.tsx             # React entry point
│   └── index.html               # HTML with SEO meta tags & JSON-LD
├── server/
│   ├── routes.ts                # API endpoints
│   └── storage.ts               # In-memory data storage
├── shared/
│   └── schema.ts                # TypeScript types & Zod schemas
└── public/
    ├── sitemap.xml              # SEO sitemap
    └── robots.txt               # Search engine directives
```

## Design System

### Colors
- **Primary**: Deep indigo/navy (`hsl(221, 83%, 25%)`)
- **Secondary**: Warm saffron/orange (`hsl(39, 100%, 50%)`)
- **Accent**: Light saffron (`hsl(39, 100%, 96%)`)
- **Muted**: Neutral gray for secondary text
- **Background**: White (light mode), Dark gray (dark mode)

### Typography
- **Display**: Poppins (headings, hero text)
- **Body**: Inter (paragraphs, UI text)
- **Sizing**: Responsive with clamp() for fluid typography

### Spacing
- Consistent 8-point grid system
- Card padding: 6-8 (1.5rem-2rem)
- Section spacing: 12-20 (3rem-5rem)

## SEO Implementation

### Meta Tags (index.html)
- Page title: "Payal Restaurant, Lakhisarai — Vegetarian Thalis & Local Favourites"
- Meta description with local keywords
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URL
- Robots directives

### JSON-LD Structured Data
- Schema.org Restaurant type
- Business name, address, phone
- Geo coordinates
- Opening hours
- Cuisine types
- Price range
- Links to Zomato/Swiggy

### Files for Search Engines
- **sitemap.xml**: All page URLs with lastmod, changefreq, priority
- **robots.txt**: Allow all, sitemap location

## WebGlow Branding

WebGlow branding is featured throughout:

1. **Welcome Popup**: Session-based popup promoting WebGlow services for any niche website
2. **Footer**: "Website by WebGlow" credit with logo
3. **About Page**: WebGlow credit panel
4. **Credits Page**: Full WebGlow showcase with services and contact
5. **Contact**: Email CTA to `webglow@zohomail.in`

## Recent Changes (November 2025)

- **Replit Setup & SEO Optimization (November 15, 2025)**:
  - Fixed duplicate meta description and canonical tags issue by removing static tags from index.html (React Helmet handles dynamic tags)
  - Optimized images: Converted all gallery images from PNG to WebP format (reduced from ~7MB to ~571KB, 90%+ reduction)
  - Updated sitemap.xml lastmod dates to 2025-11-15
  - Added high-quality OG image (og-image.jpg) for better social media sharing
  - Configured Replit autoscale deployment with proper build and run commands
  - Added Cache-Control headers to prevent caching issues in development
  - Installed ImageMagick system dependency for image processing
  - Verified workflow running successfully on port 5000
  
- **SEO Fix (November 13, 2025)**: Fixed Google Search Console crawling issues
  - Corrected domain typo in sitemap.xml and robots.txt from `payal-restaurent-lakhisarai.onrender.com` to `payal-restaurant-lakhisarai.onrender.com`
  - Fixed double slash URLs in sitemap (e.g., `//menu` to `/menu`)
  - Updated sitemap lastmod date to 2025-11-13
- **Header**: Removed WebGlow logo from header, now shows only "Payal Restaurant" branding
- **Gallery**: Added AI-generated restaurant images (interior, exterior, dishes, thali)
- **Welcome Popup**: Updated text to mention "any niche website" and "any niche business" capability
- **Sitemap**: Moved to `client/public/sitemap.xml` and updated with current date (2025-11-11)
- **Domain Migration (November 13, 2025)**: Updated all references to Render.com deployment
  - Changed domain from Netlify to `payal-restaurent-lakhisarai.onrender.com`
  - Updated sitemap.xml, robots.txt, index.html meta tags, and PageHead.tsx
  - Fixed _redirects file to properly serve SEO files
  - Contact form uses Express API endpoint `/api/contact`
  - Added `RENDER_DEPLOYMENT.md` guide with complete deployment instructions
- **Replit Setup**: 
  - Configured development workflow running on port 5000
  - Set up autoscale deployment configuration
  - Express server serves both API and frontend via Vite middleware in development

## Development

### Replit Environment
The project is configured to run automatically in Replit:
- Development server runs on port 5000
- Uses Express with Vite middleware for hot reload
- In-memory storage for contact form submissions
- No database setup required

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Server runs on port 5000 with hot reload

3. **Build for production**:
   ```bash
   npm run build
   ```

## Render Deployment

### Configuration
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Environment: Node
- Instance: Free or Paid tier

### Setup Steps
1. Connect GitHub repository to Render
2. Configure build and start commands
3. Deploy automatically on Git push
4. Custom domain available (optional)
5. HTTPS enabled automatically
6. See `RENDER_DEPLOYMENT.md` for detailed instructions

### Features
- Full-stack Express + React application
- Contact form uses `/api/contact` endpoint
- In-memory storage for submissions
- Can connect to PostgreSQL database if needed
- Auto-deploys on Git push

## Google Search Console Setup

1. Add property: `https://payal-restaurent-lakhisarai.onrender.com`
2. Verify ownership (HTML meta tag already included)
3. Submit sitemap: `/sitemap.xml`
4. Request indexing for key pages
5. Monitor Coverage and Performance reports

## Content Notes

### Menu Disclaimer
Prominent disclaimer on menu page:
> "Menu items and prices shown here are compiled from public listings and are for reference only. For the official menu and current prices please contact the restaurant directly at +91 63462 33115."

### Contact Information
- **Phone**: +91 63462 33115 (click-to-call enabled)
- **Address**: Nawada-Sikandara-Lakhisarai Rd, Near Sahid Dwar / Purani Bazar, Lakhisarai, Bihar 811311
- **Hours**: Mon-Sat 7:00 AM - 10:00 PM, Sun: Call to confirm
- **Online Ordering**: Zomato, Swiggy

## Accessibility

- WCAG AA compliant color contrast
- Keyboard navigation support
- ARIA labels and roles
- Semantic HTML structure
- Focus management in modals
- Respects prefers-reduced-motion
- Descriptive alt text for all images
- Proper heading hierarchy

## Performance Optimizations

- Lazy loading for images
- Intersection Observer for scroll animations
- Minimal bundle size
- Optimized fonts (subset loading)
- CSS transitions over JavaScript animations
- Efficient re-renders with React Query

## Future Enhancements

- Google Analytics 4 with consent banner
- Multi-language support (English/Hindi)
- Online reservation system
- Customer reviews section
- Blog/news section for SEO
- Image optimization (WebP conversion)

## Credits

**Website designed and built by WebGlow**  
Website design & build: [WebGlow](https://webglowx.onrender.com/)  
Contact: webglow@zohomail.in

---

*Last updated: 2025*
