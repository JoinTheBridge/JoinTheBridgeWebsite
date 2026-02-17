# 🚀 Quick Start Guide

Welcome to the BRIDGE website project! This guide will get you up and running in 5 minutes.

## ✅ What You Have

You now have a complete, production-ready website project with:
- Beautiful, responsive website
- Full documentation
- Git repository initialized
- VS Code workspace configured
- Deployment guides

## 📦 What's Included

```
bridge-website/
├── index.html                    # Your beautiful website!
├── README.md                     # Main documentation
├── CONTRIBUTING.md               # How to contribute
├── LICENSE                       # MIT License
├── package.json                  # Project metadata
├── .gitignore                    # Git ignore rules
├── bridge-website.code-workspace # VS Code workspace
└── docs/
    ├── GITHUB_SETUP.md          # GitHub setup guide
    └── DEPLOYMENT.md            # Deployment guide
```

## 🎯 Next Steps (Choose Your Path)

### Path A: Just Want to See It? (Fastest)

1. **Open the folder in VS Code**:
   ```bash
   # Navigate to where you downloaded the files
   cd bridge-website
   code .
   ```

2. **Install Live Server extension**:
   - Click Extensions icon (or `Ctrl/Cmd + Shift + X`)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

3. **Launch the website**:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser opens automatically! 🎉

### Path B: Want to Put It on GitHub?

Follow the **detailed guide**: `docs/GITHUB_SETUP.md`

**Quick version:**

1. Create a new repository on GitHub
2. Copy these commands (replace YOUR_USERNAME):
   ```bash
   cd bridge-website
   git remote add origin https://github.com/YOUR_USERNAME/bridge-website.git
   git push -u origin main
   ```

### Path C: Want to Deploy It Live?

Follow the **detailed guide**: `docs/DEPLOYMENT.md`

**Fastest option - Vercel:**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Click Deploy
5. Done! Live in 30 seconds 🚀

## 💻 Development Workflow

### Daily Workflow

1. **Open VS Code** → Open the `bridge-website` folder
2. **Make changes** → Edit `index.html` or other files
3. **Preview** → Use Live Server to see changes instantly
4. **Save** → Changes appear immediately in browser

### When You Want to Save Progress

```bash
# See what you changed
git status

# Stage your changes
git add .

# Commit with a message
git commit -m "feat: add new section to homepage"

# Push to GitHub (if set up)
git push origin main
```

## 🎨 Customizing Your Site

### Change Colors

Find this section in `index.html` (around line 20):

```css
:root {
    --primary: #1a5f7a;        /* Main blue color */
    --accent: #ff6b35;         /* Orange accent */
    --bg: #fefdfb;             /* Background */
}
```

Change the hex codes to your preferred colors!

### Update Content

1. **Hero Section** (line ~220):
   - Change the headline
   - Update the description
   - Modify button text

2. **Programs** (line ~380):
   - Edit program titles
   - Update descriptions
   - Change features

3. **Contact Info** (line ~750):
   - Update email addresses
   - Add social media links
   - Change footer text

### Add Images

Replace placeholders with real images:

1. Save images to `src/assets/images/`
2. Update the `<div class="hero-image-main">` sections
3. Replace placeholder content with:
   ```html
   <img src="src/assets/images/your-image.jpg" alt="Description">
   ```

## 🔧 Recommended VS Code Extensions

Install these for the best experience:

1. **Live Server** ⭐ Must have!
   - Auto-refresh when you save
   
2. **Prettier** - Code formatting
   - Keeps your code clean
   
3. **Auto Rename Tag** - Saves time
   - Rename both HTML tags at once
   
4. **GitLens** - Git superpowers
   - See who changed what and when

Install all at once:
- Press `Ctrl/Cmd + Shift + X`
- Search and install each one

## 🆘 Common Issues

### Issue: Can't see the website
**Solution**: Make sure you're using Live Server, not just opening the file

### Issue: Changes not showing
**Solution**: Hard refresh your browser (`Ctrl/Cmd + Shift + R`)

### Issue: Git commands not working
**Solution**: Make sure you're in the right directory:
```bash
cd bridge-website
pwd  # Should show path ending in /bridge-website
```

## 📚 Full Documentation

- **README.md** - Project overview and features
- **docs/GITHUB_SETUP.md** - Complete GitHub setup
- **docs/DEPLOYMENT.md** - Deploy to production
- **CONTRIBUTING.md** - Contributing guidelines

## 🎯 Quick Commands Reference

```bash
# Development
code .                          # Open in VS Code
# Then: Right-click index.html → Open with Live Server

# Git basics
git status                      # See what changed
git add .                       # Stage all changes
git commit -m "message"         # Save changes
git push origin main            # Push to GitHub

# Check your work
git log --oneline              # See commit history
git diff                       # See changes since last commit
```

## 💡 Pro Tips

1. **Save Often**: Use `Ctrl/Cmd + S` frequently
2. **Commit Often**: Small commits are easier to manage
3. **Test Browsers**: Check Chrome, Firefox, Safari
4. **Mobile Testing**: Use browser dev tools (F12 → Device toolbar)
5. **Backup**: Push to GitHub regularly

## 🎓 Learning Resources

- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org)
- **Git**: [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- **VS Code**: [VS Code Tips](https://code.visualstudio.com/docs)
- **Deployment**: Check `docs/DEPLOYMENT.md`

## ✨ You're Ready!

You have everything you need to:
- ✅ Edit your website locally
- ✅ Track changes with Git
- ✅ Push to GitHub
- ✅ Deploy to production

**Start with**: Open `index.html` in Live Server and start customizing!

Questions? Check the full documentation in the `docs/` folder.

---

**Happy building! 🎉**
