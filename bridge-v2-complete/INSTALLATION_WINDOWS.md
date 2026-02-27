# 💻 Windows PowerShell Installation Guide

Complete step-by-step guide to get BRIDGE website running on Windows.

## Step 1: Install Prerequisites (15 minutes)

### 1.1 Install Node.js

**Option A: Using Installer (Recommended)**

1. Go to https://nodejs.org/
2. Download the LTS version (Windows Installer .msi)
3. Run the installer
4. Click through the wizard (use default settings)
5. Check "Automatically install necessary tools" if asked

**Option B: Using winget**

Open PowerShell as Administrator and run:
```powershell
winget install OpenJS.NodeJS.LTS
```

**Verify Installation:**
```powershell
node --version    # Should show v20.x.x or higher
npm --version     # Should show 10.x.x or higher
```

### 1.2 Install Git

```powershell
winget install Git.Git
```

Or download from: https://git-scm.com/download/win

**Verify:**
```powershell
git --version
```

### 1.3 Install VS Code (Recommended)

```powershell
winget install Microsoft.VisualStudioCode
```

Or download from: https://code.visualstudio.com/

## Step 2: Extract and Setup Project (5 minutes)

### 2.1 Navigate to Project

```powershell
# Go to your Documents folder
cd $HOME\Documents

# Create a projects folder if it doesn't exist
New-Item -ItemType Directory -Name "bridge-projects" -Force
cd bridge-projects
```

### 2.2 Extract Project

If you have the tar.gz file:

```powershell
# Extract using tar (built into Windows 10/11)
tar -xzf bridge-v2-complete.tar.gz

# Navigate into project
cd bridge-v2-complete
```

## Step 3: Install Dependencies (5 minutes)

```powershell
# Install all project dependencies
npm install

# This will take a few minutes - be patient!
```

You should see:
```
added 324 packages in 2m
```

## Step 4: Run Development Server (1 minute)

```powershell
# Start the development server
npm run dev
```

You should see:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 3.2s
```

## Step 5: View in Browser

1. Open your web browser
2. Go to: http://localhost:3000
3. You should see your BRIDGE website! 🎉

## Common Issues & Solutions

### Issue: "npm is not recognized"

**Solution:** Node.js not properly installed or not in PATH

```powershell
# Restart PowerShell after installing Node.js
# Or add to PATH manually
```

### Issue: "Cannot find module"

**Solution:** Dependencies not installed

```powershell
# Delete and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution:** Run on different port

```powershell
npm run dev -- -p 3001
```

Then visit: http://localhost:3001

### Issue: "Permission denied"

**Solution:** Run PowerShell as Administrator

1. Right-click PowerShell
2. Select "Run as Administrator"
3. Try command again

## Next Steps

### Open in VS Code

```powershell
# Open project in VS Code
code .
```

### Make Changes

1. Edit files in VS Code
2. Save changes (Ctrl + S)
3. Browser automatically reloads!

### Install VS Code Extensions (Recommended)

In VS Code, install these extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter

## File Locations

Your project is located at:
```
C:\Users\YourName\Documents\bridge-projects\bridge-v2-complete\
```

## Stopping the Server

Press `Ctrl + C` in PowerShell to stop the development server.

## Starting Again Later

```powershell
# Navigate to project
cd $HOME\Documents\bridge-projects\bridge-v2-complete

# Start dev server
npm run dev
```

## Building for Production

When ready to deploy:

```powershell
# Build static site
npm run build

# Output will be in 'out' folder
```

## Need Help?

- Check README.md for more info
- Review the project documentation
- All files are commented with explanations

---

**You're all set! Happy coding! 🚀**
