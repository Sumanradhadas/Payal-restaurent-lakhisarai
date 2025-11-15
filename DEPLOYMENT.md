# Payal Restaurant Website - Deployment Guide

This guide provides step-by-step instructions for deploying the Payal Restaurant website to Render.com and setting up Google Search Console for SEO.

**Note:** This project is now configured for Render deployment. For detailed Render-specific instructions, see `RENDER_DEPLOYMENT.md`.

## Prerequisites

- A Render account (free tier is sufficient)
- A Google account for Search Console
- Git repository (required for Render deployment)

## Render Deployment (Recommended)

### Quick Deploy Steps

1. **Connect Repository**
   - Log in to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the Payal Restaurant repository

2. **Configure Build Settings**
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
   - Environment: Node
   - Instance Type: Free (or paid for better performance)

3. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your site
   - You'll get a URL like `payal-restaurent-lakhisarai.onrender.com`

### Key Features

- **Full-stack application**: Express backend + React frontend
- **Auto-deployment**: Pushes to GitHub trigger automatic redeployment
- **Contact form**: Uses `/api/contact` endpoint (built-in)
- **HTTPS**: Automatically enabled
- **Custom domains**: Available (free SSL included)

### Configure Custom Domain (Optional)

1. Go to **Settings** → **Custom Domains**
2. Click **Add Custom Domain**
3. Follow instructions to:
   - Add your domain (e.g., `payalrestaurant.com`)
   - Update DNS records at your domain registrar (A record or CNAME)
   - Wait for DNS propagation (usually 5-30 minutes)

### Enable HTTPS

- HTTPS is automatically enabled by Render using Let's Encrypt
- No configuration needed
- Certificate auto-renews
- Works for both Render URLs and custom domains

### Verify Deployment

1. Visit your Render URL
2. Check all pages load correctly:
   - Home (`/`)
   - Menu (`/menu`)
   - About (`/about`)
   - Gallery (`/gallery`)
   - Contact (`/contact`)
   - Privacy (`/privacy`)
   - Credits (`/credits`)
3. Test mobile responsiveness
4. Verify contact form submission (check Render logs for submissions)
5. Check sitemap: `https://payal-restaurent-lakhisarai.onrender.com/sitemap.xml`
6. Check robots.txt: `https://payal-restaurent-lakhisarai.onrender.com/robots.txt`

## Google Search Console Setup

### 1. Add Property

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **Add property**
3. Choose **URL prefix**
4. Enter your full site URL: `https://payal-restaurent-lakhisarai.onrender.com`
5. Click **Continue**

### 2. Verify Ownership

**Method 1: HTML Meta Tag (Already Configured)**
- The verification meta tag is already in `client/index.html`
- Just click **Verify** in Search Console
- No additional steps needed

**Method 2: HTML File**
1. Download the verification HTML file from Google
2. Add it to `client/public/` folder
3. Commit and push to GitHub (Render will auto-deploy)
4. Click **Verify** in Search Console

**Method 3: DNS Verification (For Custom Domains)**
1. Copy the TXT record from Google
2. Add it to your domain's DNS settings
3. Wait for DNS propagation (usually 5-30 minutes)
4. Click **Verify** in Search Console

### 3. Submit Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter `sitemap.xml` in the "Add a new sitemap" field
3. Click **Submit**
4. Wait 24-48 hours for Google to crawl your sitemap
5. Check the **Coverage** report for indexing status

### 4. Request Indexing for Key Pages

1. Go to **URL Inspection** (left sidebar)
2. Enter each important URL:
   - `https://payal-restaurent-lakhisarai.onrender.com/`
   - `https://payal-restaurent-lakhisarai.onrender.com/menu`
   - `https://payal-restaurent-lakhisarai.onrender.com/contact`
3. Click **Request Indexing** for each page
4. Google will prioritize crawling these pages

### 5. Monitor Performance

After 7-14 days of being live:

1. **Coverage Report**
   - Check for indexing errors
   - Ensure all pages are indexed
   - Fix any 4xx or 5xx errors

2. **Performance Report**
   - Monitor search queries
   - Track impressions and clicks
   - Identify top-performing pages
   - Optimize meta titles/descriptions based on data

3. **Mobile Usability**
   - Ensure no mobile usability issues
   - Fix any reported problems

4. **Core Web Vitals**
   - Monitor LCP, FID/INP, and CLS
   - Aim for all metrics in "Good" range

## Bing Webmaster Tools (Optional)

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with Microsoft account
3. Click **Add a site**
4. Enter your site URL
5. Verify ownership (similar to Google Search Console)
6. Submit sitemap: `sitemap.xml`

## SEO Checklist

After deployment, verify:

- [ ] All meta tags are present in page source
- [ ] JSON-LD structured data validates ([Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Open Graph tags display correctly ([Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Twitter Card preview looks good ([Twitter Card Validator](https://cards-dev.twitter.com/validator))
- [ ] Sitemap.xml is accessible and valid
- [ ] Robots.txt is accessible
- [ ] All pages return 200 status codes
- [ ] HTTPS is working (green padlock)
- [ ] Mobile-friendly test passes ([Mobile-Friendly Test](https://search.google.com/test/mobile-friendly))
- [ ] PageSpeed Insights shows good scores ([PageSpeed Insights](https://pagespeed.web.dev/))

## Update Site URLs (Already Configured)

All URLs are now configured for Render deployment:

1. **client/index.html**
   - Canonical URL: `https://payal-restaurent-lakhisarai.onrender.com`
   - Open Graph URLs: Updated
   - JSON-LD URLs: Updated

2. **client/public/sitemap.xml**
   - All URLs point to Render domain

3. **client/public/robots.txt**
   - Sitemap URL: Updated

If you need a custom domain, update these files after configuring your domain in Render.

## Troubleshooting

### Site Not Loading
- Check Render deploy logs for build errors
- Ensure both frontend (`dist/`) and backend (`dist/index.js`) are built
- Verify build and start commands are correct
- Check if the free tier instance is sleeping (takes ~30 seconds to wake)

### 404 Errors on Page Refresh
- Verify Express is serving the SPA correctly
- Check `_redirects` file in `client/public/`
- Should redirect all routes to `/index.html` (already configured)

### Contact Form Not Working
- Check browser console for errors
- Verify `/api/contact` endpoint is accessible
- Check Render logs for backend errors
- Test form validation with browser DevTools

### Search Console Issues
- **Not indexed**: Wait 48-72 hours, then request indexing
- **Sitemap errors**: Validate sitemap format
- **Coverage issues**: Check robots.txt isn't blocking pages

## Continuous Deployment

Render uses Git-based deployment:
- Push changes to your GitHub repository
- Render automatically rebuilds and redeploys
- Check deploy status in Render dashboard
- Typical deploy time: 2-4 minutes
- Logs available in realtime during deployment

## Performance Optimization Tips

1. **Images**
   - Use WebP format with JPEG fallbacks
   - Lazy load below-fold images
   - Provide responsive srcsets

2. **Fonts**
   - Subset Google Fonts (only needed characters)
   - Use `font-display: swap`
   - Preload critical fonts

3. **JavaScript**
   - Code splitting (already handled by Vite)
   - Minimize third-party scripts
   - Defer non-critical scripts

4. **Caching**
   - Express serves static files with appropriate cache headers
   - Static assets (images, JS, CSS) cached
   - HTML served fresh for updates
   - Can configure custom cache headers in `server/index.ts`

## Support

For deployment issues:
- **Render**: [Render Documentation](https://render.com/docs)
- **Search Console**: [Google Search Central](https://developers.google.com/search)
- **Website**: Contact WebGlow at webglow@zohomail.in

---

**Last Updated**: January 2025  
**Maintained by**: WebGlow  
**Contact**: webglow@zohomail.in
