# Contributing to BRIDGE Website

Thank you for your interest in contributing to the BRIDGE nonprofit website! We're excited to have you join our community.

## 🌟 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on what's best for the community

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/bridge-website.git
   cd bridge-website
   ```
3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/bridge-website.git
   ```

## 💻 Development Process

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - Code style/formatting
- `refactor/description` - Code refactoring

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Test your changes in multiple browsers
- Keep commits focused and atomic

### 3. Commit Your Changes

Follow conventional commit messages:

```bash
git commit -m "type: brief description"
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no code change)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```bash
git commit -m "feat: add volunteer registration form"
git commit -m "fix: resolve mobile navigation menu bug"
git commit -m "docs: update README with deployment steps"
```

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 5. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Wait for review

## 📋 Pull Request Guidelines

### PR Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] My code follows the project's code style
- [ ] I have tested my changes
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
```

## 🎨 Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Indent with 2 spaces
- Use meaningful class names
- Add comments for complex sections

```html
<!-- Good -->
<section class="hero">
  <div class="hero-container">
    <h1>Welcome</h1>
  </div>
</section>

<!-- Avoid -->
<div class="sec1">
  <div class="cont">
    <h1>Welcome</h1>
  </div>
</div>
```

### CSS
- Group related styles together
- Use CSS custom properties (variables)
- Mobile-first responsive design
- Add comments for sections

```css
/* Good */
:root {
  --primary-color: #1a5f7a;
}

.button {
  background: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
}

/* Avoid */
.btn {
  background: #1a5f7a;
  padding: 16px 32px;
  border-radius: 50px;
}
```

### JavaScript
- Use modern ES6+ syntax
- Write descriptive variable names
- Add comments for complex logic
- Keep functions small and focused

```javascript
// Good
const smoothScrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
};

// Avoid
function scroll(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}
```

## 🧪 Testing

Before submitting a PR, test your changes:

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Functionality Testing
- [ ] All links work
- [ ] Forms validate correctly
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Images load properly

## 📁 File Organization

```
src/
├── css/           # Future: Separated stylesheets
├── js/            # Future: Separated scripts
└── assets/
    └── images/    # Image files
```

## 🚨 Common Issues

### Issue: Git conflicts
**Solution**: Sync your fork before creating a new branch
```bash
git fetch upstream
git merge upstream/main
```

### Issue: Live Server not working
**Solution**: Install VS Code Live Server extension

### Issue: Styles not applying
**Solution**: Clear browser cache (Cmd/Ctrl + Shift + R)

## 💡 Need Help?

- **Questions**: Open a discussion on GitHub
- **Bugs**: Create an issue with details
- **Ideas**: Share in discussions first
- **Security**: Email contact@bridge-nonprofit.org

## 🎯 Priority Areas

We especially welcome contributions in:

1. **Accessibility** - ARIA labels, keyboard navigation
2. **Performance** - Image optimization, code splitting
3. **Mobile Experience** - Responsive improvements
4. **Forms** - Backend integration, validation
5. **Content** - Program descriptions, testimonials
6. **Testing** - Automated tests, E2E tests

## 🏆 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Invited to team discussions
- Given appropriate repository access

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making BRIDGE better!** 🙏
