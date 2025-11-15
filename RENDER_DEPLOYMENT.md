# Render Deployment Guide for Payal Restaurant Website

## 🚀 Quick Deploy to Render

### Step 1: Create a Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select the repository for Payal Restaurant

### Step 2: Configure Build Settings

Use these settings:

**Name:** `payal-restaurant-lakhisarai` (or your preferred name)

**Environment:** `Node`

**Region:** Choose closest to your users (e.g., Singapore for India)

**Branch:** `main` (or your default branch)

**Build Command:**
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

**Instance Type:** `Free` (or choose paid for better performance)

### Step 3: Environment Variables (Optional)

If using database features, add:
- `DATABASE_URL` - Your PostgreSQL connection string

For production, you might also set:
- `NODE_ENV=production` (already set in start script)

### Step 4: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Install dependencies
   - Build the Vite frontend
   - Build the Express backend
   - Start the server on the assigned port
3. Your site will be live at: `https://your-app-name.onrender.com`

## 📊 How It Works

The deployment serves a **full-stack application**:

✅ **Frontend:** React + Vite (built to `dist/`)  
✅ **Backend:** Express server (serves API and static files)  
✅ **Contact Form:** Uses Express API endpoint `/api/contact`  
✅ **Database Ready:** Can connect to PostgreSQL if needed  
✅ **SEO Files:** Sitemap and robots.txt served from `dist/`

## 🔧 Build Process

When you deploy, Render runs:

```bash
# Install dependencies
npm install

# Build frontend (Vite) and backend (esbuild)
npm run build
# This creates:
# - dist/index.html (and assets)
# - dist/index.js (Express server)

# Start the production server
npm start
# This runs: NODE_ENV=production node dist/index.js
```

The Express server:
- Serves static files from `dist/`
- Handles API requests at `/api/*`
- Uses in-memory storage for contact form submissions

## 🌐 Custom Domain

After deployment, you can add a custom domain:

1. Go to your service's **Settings** → **Custom Domains**
2. Click **Add Custom Domain**
3. Enter your domain (e.g., `payalrestaurant.com`)
4. Add the provided DNS records to your domain registrar:
   - **A Record** or **CNAME** as instructed by Render
5. Wait for DNS propagation (usually 5-30 minutes)
6. HTTPS is automatically enabled with Let's Encrypt

## 📧 Contact Form Submissions

Form submissions are stored **in-memory** on the server. This means:

- ✅ Works immediately, no external service needed
- ⚠️ Data is lost when the server restarts (free tier sleeps after inactivity)

### To persist submissions, you have two options:

#### Option 1: Use PostgreSQL Database (Recommended)
1. Add a PostgreSQL database in Render
2. Connect it to your web service
3. Submissions will be stored permanently

#### Option 2: Set up email notifications
Integrate an email service to send submissions directly to your email

## 🔍 Google Search Console Setup

After deploying to Render:

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://payal-restaurent-lakhisarai.onrender.com`
3. Verify ownership using HTML meta tag (already included in index.html)
4. Submit sitemap: `https://payal-restaurent-lakhisarai.onrender.com/sitemap.xml`
5. Request indexing for key pages
6. Monitor in the Coverage report

## ⚡ Performance Tips

### Free Tier Considerations
- Free tier services **sleep after 15 minutes** of inactivity
- First request after sleep takes ~30 seconds to wake up
- Subsequent requests are fast

### Keep Service Awake (Optional)
Use a service like [UptimeRobot](https://uptimerobot.com/) to ping your site every 5 minutes:
- Free monitoring service
- Prevents your site from sleeping
- Improves user experience

### Upgrade to Paid Plan
- No cold starts
- Faster build times
- More resources
- Better for production sites

## 🐛 Troubleshooting

### Problem: "Application failed to start"
**Solution:**
- Check Render logs for build errors
- Ensure `dist/index.js` was created during build
- Verify `npm start` command is correct

### Problem: Contact form doesn't work
**Solution:**
- Check browser console for errors
- Verify `/api/contact` endpoint is accessible
- Check Render logs for backend errors

### Problem: Images not loading
**Solution:**
- Ensure images are in `client/public/` or `attached_assets/`
- Check image paths are correct
- Verify files are committed to Git

### Problem: Site is slow on first load
**Solution:**
- This is normal for free tier (cold start)
- Use UptimeRobot to keep service awake
- Or upgrade to paid plan

## 🔄 Continuous Deployment

Render automatically redeploys when you push to GitHub:

1. Make changes to your code
2. Commit and push to GitHub
3. Render detects the push
4. Automatically rebuilds and redeploys
5. Live in 2-3 minutes

You can also:
- Trigger manual deploys from Render dashboard
- Set up deploy hooks for custom workflows
- Configure branch deploys for staging

## 📱 Testing Your Deployment

After deployment, verify:

- [ ] All pages load correctly (Home, Menu, About, Gallery, Contact, Privacy, Credits)
- [ ] Contact form submission works
- [ ] Images display properly
- [ ] Mobile responsiveness
- [ ] SEO meta tags present in page source
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] HTTPS enabled (green padlock)
- [ ] Google Search Console shows no errors

## 📞 Support

For deployment issues:
- **Render**: [Render Documentation](https://render.com/docs)
- **Search Console**: [Google Search Central](https://developers.google.com/search)
- **Website**: Contact WebGlow at webglow@zohomail.in

---

**Last Updated**: November 2025  
**Maintained by**: WebGlow  
**Contact**: webglow@zohomail.in
