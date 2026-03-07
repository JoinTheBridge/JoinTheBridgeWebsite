# 🌉 BRIDGE Website v2.0

> Build Resilience in Development, Growth, and Education

A modern, animated nonprofit website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features stunning antigravity effects, smooth animations, and a beautiful design.

## ✨ Features

- 🎨 **Antigravity UI**: Floating cards, glowing orbs, smooth animations
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- ⚡ **Lightning Fast**: Static site generation for optimal performance
- 🎭 **Beautiful Animations**: Powered by Framer Motion
- 🆓 **Free Hosting Ready**: Deploy to Vercel, Netlify, or Cloudflare Pages
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🎯 **SEO Optimized**: Meta tags, sitemap, semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Extract the project** (if you received a tar.gz)
   ```bash
   tar -xzf bridge-v2-complete.tar.gz
   cd bridge-v2-complete
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
bridge-v2-complete/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── programs/
│   │   └── page.tsx         # Programs page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── impact/              # Impact page (create similar to about)
│   ├── get-involved/        # Get involved page
│   └── donate/              # Donate page
├── components/
│   ├── antigravity/
│   │   ├── FloatingCard.tsx
│   │   └── GlowingOrb.tsx
│   └── layout/
│       ├── Navigation.tsx
│       └── Footer.tsx
├── lib/
│   ├── utils.ts             # Utility functions
│   └── hooks.ts             # Custom React hooks
├── public/
│   └── images/              # Place your images here
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#1a5f7a', // Your primary color
  },
  accent: {
    500: '#ff6b35', // Your accent color
  },
}
```

### Content

1. **Homepage**: Edit `app/page.tsx`
2. **Programs**: Edit `app/programs/page.tsx`
3. **About**: Edit `app/about/page.tsx`
4. **Navigation**: Edit `components/layout/Navigation.tsx`
5. **Footer**: Edit `components/layout/Footer.tsx`

### Images

1. Place images in `public/images/`
2. Reference them in components:
   ```tsx
   <img src="/images/your-image.jpg" alt="Description" />
   ```

## 🚢 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Done! 🎉

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `out`
7. Deploy!

### Option 3: Build Static Site

```bash
npm run build
```

This creates an `out` folder with static files. Upload to any static hosting service.

## 💰 Cost Breakdown (Budget-Friendly!)

### Hosting: $0/month
- Vercel Free Tier: Unlimited websites, 100GB bandwidth
- Netlify Free Tier: 100GB bandwidth, 300 build minutes
- Cloudflare Pages: Unlimited bandwidth!

### Domain: ~$15/year
- Get .org from Namecheap or Google Domains

### Total: ~$1.25/month!

## 📝 To-Do List

### Phase 1: Content (Week 1-2)
- [ ] Add real program descriptions
- [ ] Upload team photos to `/public/images/team/`
- [ ] Write About Us copy
- [ ] Add impact statistics
- [ ] Create program images

### Phase 2: Forms (Week 2-3)
- [ ] Set up Formspree for contact form
- [ ] Create Google Form for volunteer applications
- [ ] Add donation buttons (PayPal/Venmo)
- [ ] Set up newsletter signup (Mailchimp free tier)

### Phase 3: Polish (Week 3-4)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Add Google Analytics
- [ ] Create 404 page
- [ ] Add Privacy Policy page

### Phase 4: Launch (Week 4)
- [ ] Deploy to Vercel/Netlify
- [ ] Connect custom domain
- [ ] Test all links
- [ ] Share on social media!

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build fails
```bash
npm run build 2>&1 | tee build.log
# Check build.log for errors
```

## 📞 Support

Need help? 
- Check the docs in `/docs` folder
- Review the Quick Start guide
- Ask on GitHub Issues

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use for your nonprofit!

## 🙏 Acknowledgments

- Design inspired by modern SaaS websites
- Built with love by students, for students
- Powered by open source

---

**Ready to launch? Let's build something amazing! 🚀**

For detailed setup guides, see:
- `INSTALLATION.md` - Step-by-step setup
- `DEPLOYMENT.md` - Hosting instructions
- `CUSTOMIZATION.md` - How to customize the site
