# BRIDGE Nonprofit Website

> Build Resilience in Development, Growth, and Education

A modern, responsive nonprofit website for BRIDGE - providing free educational programs in economics and financial literacy to low-income communities.

## 🎯 Project Overview

BRIDGE is a student-led nonprofit organization focused on breaking barriers through education. This website serves as our primary digital presence, showcasing our programs, impact, and opportunities for community involvement.

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your machine
- A code editor (VS Code recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bridge-website.git
   cd bridge-website
   ```

2. **Open the project**
   ```bash
   code .  # Opens in VS Code
   ```

3. **Run locally**
   - Simply open `index.html` in your browser
   - Or use VS Code's Live Server extension for hot reload

### Using Live Server (Recommended)

1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open automatically with live reload enabled

## 📁 Project Structure

```
bridge-website/
├── index.html              # Main website file
├── src/
│   ├── css/
│   │   └── styles.css     # Separated styles (future)
│   ├── js/
│   │   └── main.js        # Separated scripts (future)
│   └── assets/
│       └── images/        # Image assets
├── public/                 # Public assets
├── docs/                   # Documentation
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── package.json           # Project metadata (future)
```

## 🎨 Design System

### Colors
- **Primary**: `#1a5f7a` - Ocean Blue
- **Primary Dark**: `#0f3d4d` - Deep Ocean
- **Accent**: `#ff6b35` - Coral Orange
- **Accent Light**: `#ffb088` - Light Coral
- **Background**: `#fefdfb` - Off White
- **Text**: `#1a2332` - Dark Blue-Gray

### Typography
- **Headers**: Syne (Google Fonts)
- **Body**: DM Sans (Google Fonts)

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes

### Commit Messages
Follow conventional commits:
```bash
feat: add volunteer application form
fix: resolve navigation mobile menu issue
docs: update README with deployment instructions
style: improve button hover animations
```

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit files in your code editor
   - Test in multiple browsers

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

4. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Describe your changes
   - Request review

## 🚢 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click
5. Get automatic deployments on every push

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Configure build settings (none needed for static site)
5. Deploy

### Option 3: GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select `main` branch
4. Your site will be available at `username.github.io/bridge-website`

## 📊 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks needed
- **Google Fonts** - Typography
- **Git** - Version control

### Future Enhancements
- React.js migration (Phase 2)
- Tailwind CSS integration
- Form backend with Supabase
- Analytics with Google Analytics 4
- CMS integration for content management

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report Bugs**: Open an issue describing the bug
2. **Suggest Features**: Open an issue with your idea
3. **Submit PRs**: Follow the development workflow above

### Code Style Guidelines

- Use 2 spaces for indentation
- Write semantic HTML
- Keep CSS organized by section
- Comment complex JavaScript logic
- Test on multiple browsers before submitting

## 📝 To-Do List

### Immediate Priority
- [ ] Add actual program images
- [ ] Create volunteer application form
- [ ] Set up contact form backend
- [ ] Add Google Analytics
- [ ] Create custom 404 page

### Phase 2
- [ ] Blog section for updates
- [ ] Program registration system
- [ ] Student dashboard
- [ ] Email newsletter integration
- [ ] Multi-language support

### Phase 3
- [ ] React migration
- [ ] Progressive Web App (PWA)
- [ ] Admin dashboard
- [ ] Learning Management System (LMS)
- [ ] Mobile app

## 🐛 Known Issues

- Mobile menu not yet implemented (hamburger icon needed)
- Form submissions need backend integration
- Images are placeholders (need actual photos)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Website**: [Coming Soon]
- **Email**: contact@bridge-nonprofit.org
- **GitHub**: https://github.com/YOUR_ORG/bridge-website

## 🙏 Acknowledgments

- Design inspired by [CAPSA-MC](https://capsa-mc.org/)
- Built with ❤️ by the BRIDGE technical team
- Special thanks to all our volunteers and contributors

---

**Made with passion by students, for students** 🎓
