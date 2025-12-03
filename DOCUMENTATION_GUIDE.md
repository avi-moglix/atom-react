# 📚 Atom Design Documentation Website - User Guide

Welcome to the **Atom Design Documentation Website**! This guide will help you understand the structure, features, and how to navigate through the documentation effectively.

---

## 🎯 What is Atom Design?

Atom Design is a comprehensive **UI Component Library** developed by Moglix for building beautiful, consistent user interfaces across:

- **React Native** - Mobile applications (iOS & Android)
- **React Web** - Web applications

Each component is published as an individual npm package, allowing you to install only what you need.

---

## 🏠 Website Structure

### Landing Page (`/`)

The homepage presents a **platform selector** where users can choose between:

| Platform | Path | Status |
|----------|------|--------|
| React Web | `/web` | ✅ Available |
| React Native | `/app` | ✅ Available |

### React Native Section (`/app/*`)

```
/app
├── /app                    → Introduction & Overview
├── /app/installation       → Installation Guide
└── /app/components/
    ├── buttons            → Button Component
    ├── input              → Input Component
    ├── search             → Search Component
    ├── calendar           → Calendar Component
    ├── datepicker         → Datepicker Component
    ├── dropdown           → Dropdown Component
    ├── menu               → Menu Component
    ├── controls           → Controls (Checkbox, Radio, Toggle)
    ├── tabs               → Tabs Component
    ├── accordions         → Accordion Component
    ├── tooltip            → Tooltip Component
    ├── cardslist          → Cards List Component
    ├── carousel           → Carousel Component
    ├── upload-field       → Upload Field Component
    └── login              → Login Component
```

### React Web Section (`/web/*`)

```
/web
├── /web                    → Introduction & Overview
├── /web/installation       → Installation Guide
└── /web/components/
    ├── button             → Button Variants
    ├── cards              → Card Components
    ├── table              → Data Tables
    ├── tabs               → Tabs & Accordions
    ├── tooltip            → Tooltip Component
    ├── datepicker         → Date Picker
    ├── carousel           → Carousel/Sliders
    ├── header             → Header Components
    ├── layout             → Grid Layouts
    ├── form               → Form Components
    ├── form-templates     → Form Templates
    ├── skeleton           → Skeleton Loaders
    └── ...more
```

---

## 🧭 Navigation Guide

### Header

- **Logo** - Click to return to the landing page
- **Search Bar** - Search for components (Keyboard shortcut: `Ctrl+K` or `⌘K` on Mac)
- **Theme Toggle** - Switch between Light and Dark modes
- **npm Link** - Visit the npm packages page

### Sidebar

- **Platform Switcher** - Toggle between "Native" and "Web" sections
- **Getting Started** - Introduction and Installation guides
- **Components** - List of all available components with count badge

### Breadcrumbs

Each page shows a breadcrumb trail for easy navigation back to parent sections.

---

## 📖 Component Documentation Structure

Each component page includes the following sections:

### 1. Overview
- Component name and description
- Status badge (stable, new, popular, beta)
- npm package link
- Available variants/types

### 2. Installation
```bash
npm install @atom-design-mog/[component-name]
```
- One-click copy for installation command
- Peer dependencies (if required)

### 3. Live Demo (React Native)
- Interactive Expo Snack embed
- Try the component directly in the browser
- Switch between iOS, Android, and Web preview

### 4. Usage Examples
- Code snippets with syntax highlighting
- Copy button for each code block

### 5. Props Reference
- Complete props table with:
  - Prop name
  - Type
  - Default value
  - Required indicator
  - Description

### 6. Features
- List of component capabilities

### 7. Best Practices
- ✅ **Do's** - Recommended usage patterns
- ❌ **Don'ts** - Common mistakes to avoid

### 8. Accessibility Notes
- Accessibility considerations and guidelines

### 9. Package Info
- npm package name
- Version number
- License
- Direct link to npm

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `⌘K` | Focus search bar |
| `↑` `↓` | Navigate search results |
| `Enter` | Select search result |
| `Escape` | Close search dropdown / sidebar |

---

## 🎨 Theme Support

The website supports **Light** and **Dark** modes:

- Automatically detects system preference
- Toggle manually via the moon/sun icon in the header
- Preference is saved in local storage

---

## 🔍 Search Features

The search functionality includes:

- **Fuzzy search** - Find components even with typos
- **Platform filtering** - Results show platform badges (Web/Native)
- **Keyboard navigation** - Use arrow keys to navigate results
- **Quick access** - Jump directly to component pages

---

## 📱 Responsive Design

The website is fully responsive:

- **Desktop** - Full sidebar with all navigation
- **Tablet** - Collapsible sidebar
- **Mobile** - Hamburger menu with slide-out sidebar

---

## 🚀 Quick Start for Developers

### Installing a React Native Component

```bash
# 1. Install the component
npm install @atom-design-mog/buttons

# 2. Install peer dependencies (if required)
npm install react-native-vector-icons

# 3. Import and use
import AButton from '@atom-design-mog/buttons';

<AButton 
  title="Click Me"
  variant="solid"
  onPress={() => console.log('Pressed!')}
/>
```

### Using React Web Components

Web components are built with **Tailwind CSS**. Each component page provides:

- Copy-paste HTML/JSX code
- Tailwind class references
- Live preview of variants

---

## 📦 npm Packages

All packages are published under the npm scope: **@atom-design-mog**

Visit: [https://www.npmjs.com/~avi-moglix](https://www.npmjs.com/~moglix)

### Available Packages:

| Package | Description |
|---------|-------------|
| `@atom-design-mog/buttons` | Button component with variants |
| `@atom-design-mog/input` | Multi-type input component |
| `@atom-design-mog/search` | Search with filters |
| `@atom-design-mog/calendar` | Calendar date picker |
| `@atom-design-mog/datepicker` | Date/time picker |
| `@atom-design-mog/dropdown` | Dropdown select |
| `@atom-design-mog/menu` | Menu navigation |
| `@atom-design-mog/controls` | Checkbox, radio, toggle |
| `@atom-design-mog/tabs` | Tab navigation |
| `@atom-design-mog/accordions` | Collapsible sections |
| `@atom-design-mog/tooltip` | Tooltip overlays |
| `@atom-design-mog/cardslist` | Product card grid |
| `@atom-design-mog/moglix-carousel` | Image carousel |
| `@atom-design-mog/upload-field` | File upload |
| `@atom-design-mog/login` | Login screen |

---

## 🛠️ Tech Stack

This documentation website is built with:

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - For custom styling
- **Remix Icons** - Icon library
- **Expo Snack** - Live React Native demos

---

## 📝 Contributing

Want to contribute to the documentation? Here's how:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See `CONTRIBUTING.md` for detailed guidelines.

---

## 🆘 Support

If you need help:

- Check the component documentation first
- Review the usage examples
- Open an issue on GitHub

---

## 📄 License

MIT License - Feel free to use these components in your projects!

---

<br>
<br>

---

# 🤖 Special Mention: Made with AI

<div align="center">

## ✨ This Documentation Was Enhanced by AI ✨

</div>

### 🧠 AI Assistant Details

| | |
|---|---|
| **Model** | **Claude Opus 4.5 (Preview)** |
| **Developed by** | Anthropic |
| **Assistant Name** | GitHub Copilot |
| **Integration** | VS Code |

---

### 💡 What AI Helped With

This documentation website was significantly enhanced with the help of AI assistance:

- 🏗️ **Architecture Design** - Structured the platform routing (`/app/*` and `/web/*`)
- 📝 **Component Documentation** - Created comprehensive props tables, usage examples, and best practices
- 🔧 **Bug Fixes** - Identified and fixed issues in CodeBlock, hash scrolling, sidebar navigation
- 🎨 **UI/UX Improvements** - Landing page design, dark mode support, responsive layouts
- 🔍 **Code Analysis** - Thorough review of the entire codebase to identify issues and suggest improvements
- 📚 **Documentation** - This very guide you're reading!

---

### 🚀 AI + Human = Better Products

> *"AI doesn't replace developers - it empowers them to build faster and better."*

This project demonstrates the **powerful collaboration** between human creativity and AI assistance:

| Human Contribution | AI Contribution |
|-------------------|-----------------|
| Vision & Requirements | Implementation & Code |
| Design Decisions | Best Practices |
| Domain Expertise | Pattern Recognition |
| Final Review | Bug Detection |
| Creative Direction | Documentation |

---

### 📈 Productivity Gains

Working with AI assistance provided:

- ⚡ **Faster Development** - Complex features implemented in minutes
- 🎯 **Fewer Bugs** - AI catches issues humans might miss
- 📖 **Better Documentation** - Comprehensive docs written quickly
- 🔄 **Consistent Code** - Following best practices throughout
- 💡 **Learning Opportunity** - AI explains patterns and approaches

---

### 🙏 Acknowledgment

A big shoutout to **Claude (Anthropic)** for being an incredible coding partner! 

From structuring the component library to writing this documentation, AI assistance made the development process smoother, faster, and more enjoyable.

---

### 🌟 The Future is Collaborative

This project is a testament to what's possible when developers embrace AI as a tool for productivity. Whether you're:

- Building documentation
- Writing component libraries
- Debugging complex issues
- Learning new technologies

**AI assistants like Claude can help you achieve more in less time.**

---

<div align="center">

### 🤝 Built by Humans, Enhanced by AI

**Moglix Engineering Team** × **Claude Opus 4.5**

*December 2025*

---

*"The best code is written when human intuition meets AI capability."*

</div>

---

<br>

**Happy Coding! 🎉**

