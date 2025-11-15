# Netlify Deployment Guide for Payal Restaurant Website

## 🚀 Quick Deploy to Netlify

### Step 1: Build Settings
When deploying to Netlify via GitHub, use these settings:

**Build command:**
```
npm run build
```

**Publish directory:**
```
dist
```

**Environment variables:** (None required for static deployment)

### Step 2: Deploy via GitHub
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Set the build command to `npm run build`
6. Set the publish directory to `dist`
7. Click "Deploy site"

### Step 3: Enable Netlify Forms
The contact form is configured to use Netlify Forms automatically. After deployment:

1. Go to your Netlify site dashboard
2. Click on "Forms" in the left sidebar
3. You'll see form submissions appear there automatically
4. You can set up email notifications for new submissions in Form settings

### What Changed for Netlify Compatibility

The project has been updated to work as a **static site** on Netlify:

✅ **Build output:** Changed from `dist/public` to `dist`  
✅ **Contact form:** Now uses Netlify Forms instead of Express API  
✅ **Static files:** Sitemap and robots.txt moved to `client/public/`  
✅ **Images:** Restaurant images stored in `attached_assets/generated_images/`  

### Important Notes

1. **Contact Form Submissions:** 
   - All form submissions will appear in Netlify's Forms dashboard
   - Set up email notifications in Netlify to get alerts for new submissions

2. **Images:**
   - The `attached_assets` folder must be included in your GitHub repository
   - Make sure it's not in `.gitignore`

3. **Custom Domain:**
   - After deployment, you can add a custom domain in Netlify settings
   - Netlify provides free HTTPS automatically

## 🔧 Alternative: Deploy to Replit

If you prefer to keep the full-stack functionality (with Express backend):

1. Click the **"Deploy"** button in Replit
2. Your app will be published with the contact form API working
3. You get a live URL instantly
4. No configuration needed - it just works!

## 📊 Differences Between Deployments

| Feature | Netlify (Static) | Replit (Full-Stack) |
|---------|------------------|---------------------|
| Contact Form | Netlify Forms | Express API |
| Backend Server | ❌ No | ✅ Yes |
| Database Support | ❌ No | ✅ Yes |
| Setup Complexity | Medium | Easy |
| Cost | Free tier available | Free tier available |
| Best For | Static sites | Full-stack apps |

## 🐛 Troubleshooting Netlify Deployment

### Problem: "Page not found" error
**Solution:** Make sure:
- Build command is `npm run build`
- Publish directory is `dist` (not `dist/public`)
- The build completed successfully

### Problem: Contact form doesn't work
**Solution:**
- Check that the form has `data-netlify="true"` attribute (already added)
- Verify form submissions in Netlify dashboard under "Forms"
- Make sure the form name matches in both the HTML and hidden field

### Problem: Images not loading
**Solution:**
- Ensure `attached_assets` folder is pushed to GitHub
- Check that it's not in `.gitignore`
- Verify image paths start with `/attached_assets/`

## 📝 Google Search Console Setup

After deploying to Netlify:

1. Add your Netlify URL to Google Search Console
2. Submit the sitemap: `https://your-site.netlify.app/sitemap.xml`
3. Request indexing for key pages
4. Monitor in the Coverage report

---

**Need help?** Contact WebGlow at webglow@zohomail.in
