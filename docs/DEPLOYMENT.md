# Deployment Guide

This guide covers deploying your BRIDGE website to production.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended) ⚡

**Why Vercel?**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments for PRs
- **FREE for nonprofits**

**Steps:**

1. **Push to GitHub** (if you haven't already)
2. **Go to** [vercel.com/signup](https://vercel.com/signup)
3. **Sign up with GitHub**
4. **Click "New Project"**
5. **Import** your `bridge-website` repository
6. **Configure**:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: Leave empty
   - Output Directory: Leave empty
7. **Click "Deploy"**

**Done!** Your site is live at `https://bridge-website.vercel.app`

**Custom Domain:**
```bash
# In Vercel dashboard
Settings → Domains → Add Domain
# Enter: bridgenonprofit.org
# Follow DNS instructions
```

**Environment Variables** (for future API keys):
```bash
Settings → Environment Variables
# Add your variables here
```

### 2. Netlify 🎯

**Why Netlify?**
- Drag-and-drop deployment
- Form handling built-in
- Serverless functions
- Split testing

**Steps:**

1. **Go to** [netlify.com](https://netlify.com)
2. **Sign up with GitHub**
3. **Click "New site from Git"**
4. **Choose GitHub**
5. **Select** `bridge-website` repository
6. **Build settings**:
   - Build command: Leave empty
   - Publish directory: `/`
7. **Click "Deploy site"**

**Done!** Site is live at `https://bridge-website.netlify.app`

**Custom Domain:**
```bash
Site Settings → Domain Management → Add custom domain
# Enter: bridgenonprofit.org
```

**Form Submissions:**
```html
<!-- Netlify handles forms automatically -->
<form name="contact" method="POST" data-netlify="true">
  <!-- Your form fields -->
</form>
```

### 3. GitHub Pages 📄

**Why GitHub Pages?**
- Built into GitHub
- Free hosting
- Simple setup
- Good for documentation

**Steps:**

1. **Go to** your GitHub repository
2. **Click** Settings tab
3. **Scroll to** Pages section
4. **Configure**:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. **Click "Save"**

**Done!** Site is live at `https://YOUR_USERNAME.github.io/bridge-website`

**Custom Domain:**
```bash
# In Pages settings
Custom domain: bridgenonprofit.org
# Add CNAME record in your DNS:
CNAME → YOUR_USERNAME.github.io
```

### 4. Cloudflare Pages 🔒

**Why Cloudflare?**
- Best-in-class CDN
- Built-in DDoS protection
- Web Analytics included
- Unlimited bandwidth

**Steps:**

1. **Go to** [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Connect GitHub account**
3. **Select repository**
4. **Configure build**:
   - Build command: (leave empty)
   - Build output: `/`
5. **Save and Deploy**

## 🌐 Custom Domain Setup

### Purchasing a Domain

**Recommended Registrars:**

1. **Namecheap** - $8-12/year for .org
   - [namecheap.com](https://namecheap.com)
   - Great support
   - Free WHOIS privacy

2. **Google Domains** - ~$12/year
   - [domains.google](https://domains.google)
   - Clean interface
   - Good integration

3. **Cloudflare** - At-cost pricing
   - [cloudflare.com/products/registrar](https://cloudflare.com/products/registrar/)
   - No markup
   - Best security

### DNS Configuration

#### For Vercel:

```bash
# Add these DNS records at your registrar:

Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify:

```bash
# Add these DNS records:

Type: A
Name: @  
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR_SITE.netlify.app
```

#### For GitHub Pages:

```bash
# Add these DNS records:

Type: A
Name: @
Values:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## 🔧 Environment Setup

### Local Development

```bash
# Install dependencies (when needed)
npm install

# Start local server
npm run dev
# Or use VS Code Live Server extension
```

### Environment Variables

Create `.env` file for local development:

```bash
# .env (DO NOT COMMIT THIS FILE)

# Supabase (future)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

# Email Service (future)  
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (future)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Add to hosting platform:**

**Vercel:**
```bash
Settings → Environment Variables → Add
```

**Netlify:**
```bash
Site Settings → Build & Deploy → Environment
```

## 📊 Analytics Setup

### Google Analytics 4

1. **Go to** [analytics.google.com](https://analytics.google.com)
2. **Create account** and property
3. **Get Measurement ID** (G-XXXXXXXXXX)
4. **Add to** `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics (Built-in)

```bash
# Automatically enabled on Vercel
# View in dashboard: Analytics tab
```

## 🔒 Security Checklist

Before going live:

- [ ] Remove any test/debug code
- [ ] Check all external links
- [ ] Verify contact email addresses
- [ ] Test forms thoroughly  
- [ ] Enable HTTPS (auto on most platforms)
- [ ] Add security headers
- [ ] Set up error monitoring
- [ ] Configure backup strategy
- [ ] Review privacy policy
- [ ] Test on multiple devices

### Security Headers

Add to `vercel.json` or `netlify.toml`:

**Vercel (`vercel.json`):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Netlify (`netlify.toml`):**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

## 🚨 Monitoring & Maintenance

### Uptime Monitoring

**Free Tools:**

1. **UptimeRobot** - [uptimerobot.com](https://uptimerobot.com)
   - Free for 50 monitors
   - Email/SMS alerts
   - 5-minute checks

2. **Better Uptime** - [betteruptime.com](https://betteruptime.com)
   - Beautiful status pages
   - Incident management
   - Free tier available

### Error Tracking

1. **Sentry** - [sentry.io](https://sentry.io)
   - Free for small projects
   - Real-time error tracking
   - Performance monitoring

2. **LogRocket** - [logrocket.com](https://logrocket.com)
   - Session replay
   - Free tier for nonprofits

## 🔄 Deployment Workflow

### Automatic Deployments

**Vercel/Netlify:**
```bash
# Push to main → Auto deploy to production
git push origin main

# Push to develop → Auto deploy to preview
git push origin develop

# Open PR → Auto deploy preview URL
```

### Manual Deployment

**Build locally:**
```bash
# Not needed for static site
# Future: npm run build
```

**Deploy via CLI:**

**Vercel:**
```bash
npm i -g vercel
vercel --prod
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 📈 Performance Optimization

### Pre-deployment Checklist

- [ ] Optimize images (WebP format, compressed)
- [ ] Minify CSS/JS (future build step)
- [ ] Enable compression
- [ ] Lazy load images
- [ ] Use CDN for assets
- [ ] Test with Lighthouse
- [ ] Check mobile performance
- [ ] Verify Core Web Vitals

### Lighthouse Score Targets

```bash
Performance:  > 90
Accessibility: > 95
Best Practices: > 90
SEO: > 90
```

## 🎯 Post-Deployment

### Immediate Tasks

1. **Verify site is live** at your domain
2. **Test all forms** and links
3. **Check mobile responsiveness**
4. **Set up monitoring**
5. **Submit to search engines**
6. **Update social media links**
7. **Share with team**

### Search Engine Submission

**Google:**
```bash
# Go to: search.google.com/search-console
# Add property → Enter your domain
# Verify ownership → Submit sitemap
```

**Bing:**
```bash
# Go to: bing.com/webmasters
# Similar process to Google
```

### Sitemap (Optional)

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bridgenonprofit.org/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs as you create pages -->
</urlset>
```

## 💰 Cost Breakdown

### Free Tier (Recommended to Start)

```
Hosting: $0 (Vercel/Netlify/GitHub Pages)
Domain: $12/year (.org domain)
SSL: $0 (Included with hosting)
CDN: $0 (Included)
Total: $12/year ($1/month)
```

### Paid Tier (When Scaling)

```
Hosting: $20/month (Vercel Pro)
Domain: $12/year  
Email: $6/user/month (Google Workspace)
Forms: $19/month (Netlify Forms Pro)
Total: ~$45/month
```

## 🆘 Troubleshooting

### Site Not Loading

1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Verify deployment status in dashboard
3. Check for build errors in logs
4. Clear browser cache

### SSL Certificate Issues

1. Wait 24-48 hours for DNS propagation
2. Force SSL renewal in hosting dashboard
3. Check DNS records are correct

### Form Submissions Not Working

1. Verify form backend is configured
2. Check CORS settings
3. Review browser console for errors
4. Test with network tab open

## 📞 Support Resources

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Forums**: [answers.netlify.com](https://answers.netlify.com)
- **GitHub Issues**: Use your repo's issues
- **Community**: Discord/Slack channels

---

**Ready to go live? You've got this! 🚀**
