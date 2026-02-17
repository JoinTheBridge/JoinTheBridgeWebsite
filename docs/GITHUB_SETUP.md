# GitHub Setup Guide for BRIDGE Website

This guide will walk you through setting up this project on GitHub and connecting it to your local development environment.

## 📋 Prerequisites

Before you begin, make sure you have:
- [ ] A GitHub account ([Sign up here](https://github.com/signup))
- [ ] Git installed on your computer ([Download here](https://git-scm.com/downloads))
- [ ] VS Code installed ([Download here](https://code.visualstudio.com/))

## 🚀 Step-by-Step Setup

### Step 1: Create a GitHub Repository

1. **Go to GitHub** and log in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - Repository name: `bridge-website`
   - Description: `Official website for BRIDGE nonprofit - providing free financial literacy education`
   - Visibility: Choose **Public** (for open source) or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

### Step 2: Connect Your Local Repository

You should already have the project files in VS Code. Now let's connect it to GitHub:

1. **Open Terminal in VS Code** (View → Terminal or `Ctrl/Cmd + ~`)

2. **Configure Git** (if you haven't already):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Add all files to staging**:
   ```bash
   git add .
   ```

4. **Create your first commit**:
   ```bash
   git commit -m "feat: initial website launch with complete homepage"
   ```

5. **Add GitHub as remote** (replace YOUR_USERNAME with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bridge-website.git
   ```

6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

### Step 3: Verify on GitHub

1. Go to `https://github.com/YOUR_USERNAME/bridge-website`
2. You should see all your files!
3. The README.md will be displayed automatically

## 🎨 Recommended VS Code Extensions

Install these extensions for the best development experience:

1. **Live Server** by Ritwick Dey
   - Right-click `index.html` → "Open with Live Server"
   - Auto-refresh on save

2. **Prettier** by Prettier
   - Automatic code formatting
   - Keeps code style consistent

3. **Auto Rename Tag** by Jun Han
   - Automatically rename paired HTML tags

4. **HTML CSS Support** by ecmel
   - Better CSS class autocomplete

5. **GitLens** by GitKraken
   - Enhanced Git capabilities
   - See who changed what and when

### Installing Extensions

1. Open VS Code
2. Click Extensions icon (or press `Ctrl/Cmd + Shift + X`)
3. Search for each extension
4. Click "Install"

## 🔄 Daily Workflow

### Making Changes

1. **Pull latest changes** (if working with a team):
   ```bash
   git pull origin main
   ```

2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/add-contact-form
   ```

3. **Make your changes** in VS Code

4. **Test with Live Server**:
   - Right-click `index.html`
   - Select "Open with Live Server"
   - View at `http://localhost:5500`

5. **Stage your changes**:
   ```bash
   git add .
   ```

6. **Commit with a descriptive message**:
   ```bash
   git commit -m "feat: add contact form with validation"
   ```

7. **Push to GitHub**:
   ```bash
   git push origin feature/add-contact-form
   ```

8. **Create a Pull Request** on GitHub
   - Go to your repository
   - Click "Compare & pull request"
   - Fill in the details
   - Click "Create pull request"

### Merging to Main

After review (or if you're working solo):

1. **Merge the PR** on GitHub
2. **Switch back to main** locally:
   ```bash
   git checkout main
   ```
3. **Pull the changes**:
   ```bash
   git pull origin main
   ```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free)

**Pros**: Automatic deployments, custom domains, fast CDN, preview deployments

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import `bridge-website` repository
5. Click "Deploy"
6. Done! Your site is live at `bridge-website.vercel.app`

**Custom Domain** (Optional):
1. Go to Project Settings → Domains
2. Add your domain (e.g., `bridgenonprofit.org`)
3. Follow DNS configuration instructions

### Option 2: Netlify (Free)

**Pros**: Simple drag-and-drop, form handling, functions

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"
6. Live at `bridge-website.netlify.app`

### Option 3: GitHub Pages (Free)

**Pros**: Built into GitHub, simple setup

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: Deploy from branch
4. Branch: `main`, folder: `/ (root)`
5. Click "Save"
6. Site will be live at `YOUR_USERNAME.github.io/bridge-website`

**Note**: GitHub Pages may take a few minutes to deploy.

## 🔐 Best Practices

### Security

1. **Never commit sensitive data**:
   - API keys
   - Passwords
   - Email addresses
   - Personal information

2. **Use environment variables** for sensitive config (future)

3. **Review PRs** before merging (even your own!)

### Code Quality

1. **Write clear commit messages**:
   - ✅ `feat: add volunteer registration form`
   - ❌ `updated stuff`

2. **Keep commits focused**:
   - One feature/fix per commit
   - Makes it easier to track changes

3. **Test before pushing**:
   - Check on multiple browsers
   - Test on mobile devices
   - Verify all links work

## 🆘 Troubleshooting

### Problem: "Permission denied" when pushing

**Solution**: Check your GitHub authentication
```bash
git remote set-url origin https://YOUR_USERNAME@github.com/YOUR_USERNAME/bridge-website.git
```

### Problem: Merge conflicts

**Solution**: 
1. Pull latest changes: `git pull origin main`
2. Resolve conflicts in VS Code
3. Stage resolved files: `git add .`
4. Complete merge: `git commit -m "fix: resolve merge conflicts"`

### Problem: Want to undo last commit

**Solution**:
```bash
git reset --soft HEAD~1  # Keeps your changes
# or
git reset --hard HEAD~1  # Discards changes (careful!)
```

### Problem: Accidentally committed to main

**Solution**:
```bash
git checkout -b feature/my-feature  # Create new branch with changes
git push origin feature/my-feature   # Push the branch
git checkout main                    # Go back to main
git reset --hard origin/main         # Reset main to match GitHub
```

## 📞 Getting Help

- **GitHub Issues**: Use for bugs and features
- **GitHub Discussions**: Use for questions
- **Pull Requests**: Include detailed descriptions
- **Code Reviews**: Ask specific questions

## 🎯 Next Steps

1. ✅ Set up GitHub repository
2. ✅ Install VS Code extensions
3. ✅ Deploy to Vercel/Netlify
4. [ ] Add actual program images
5. [ ] Set up contact form backend
6. [ ] Add Google Analytics
7. [ ] Create contributing guidelines for team

## 📚 Resources

- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Guides](https://guides.github.com/)
- [VS Code Tips](https://code.visualstudio.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

**You're all set! Happy coding! 🚀**
