# Atom Design - React Native Components Documentation

A Next.js documentation site for Atom Design React Native UI components.

## ✨ Features

- 📱 **15 React Native Components** - Fully documented with live demos
- 🌙 **Dark Mode** - Full dark mode support with system preference detection
- ⌨️ **Keyboard Shortcuts** - `Cmd/Ctrl + K` for search focus
- ♿ **Accessible** - ARIA labels, skip links, semantic HTML
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔍 **Search** - Fuzzy search with keyword matching
- 📋 **Copy to Clipboard** - One-click code copying
- 🎮 **Live Demos** - Expo Snack embeds with lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
cd atom-native-docs
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### Testing

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
atom-native-docs/
├── components/
│   ├── layout/
│   │   ├── Header.js           # Top navigation bar with search
│   │   └── Sidebar.js          # Left sidebar navigation
│   ├── reusable/
│   │   ├── Breadcrumb.js       # Page breadcrumb banner
│   │   ├── CodeBlock.js        # Syntax-highlighted code display
│   │   ├── ErrorBoundary.js    # Error boundary component
│   │   ├── InstallBanner.js    # npm/yarn install commands
│   │   ├── PropsTable.js       # Component props table
│   │   ├── Skeleton.js         # Loading skeleton components
│   │   ├── SnackEmbed.js       # Lazy-loaded Expo Snack embed
│   │   └── Tooltip.js          # Hover tooltip
│   └── templates/
│       └── ComponentDoc.js     # Reusable component doc template
├── context/
│   └── ThemeContext.js         # Dark mode context provider
├── data/
│   ├── componentsData.js       # All component metadata & props
│   └── searchData.js           # Search index with keywords
├── hooks/
│   ├── useCopyLink.js          # Clipboard copy hooks
│   ├── useUtils.js             # Utility hooks (localStorage, etc.)
│   └── __tests__/              # Hook unit tests
├── pages/
│   ├── _app.js                 # App wrapper with providers
│   ├── _document.js            # Custom HTML document
│   ├── 404.js                  # Not found page
│   ├── 500.js                  # Server error page
│   ├── index.js                # Home/Introduction page
│   ├── installation.js         # Installation guide
│   ├── changelog.js            # Version history
│   ├── search.js               # Search results page
│   └── components/             # Component documentation pages
├── styles/
│   └── globals.scss            # Global styles + dark mode
├── CONTRIBUTING.md             # Contribution guidelines
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest test setup
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── jsconfig.json
```

## 📦 Documented Components

| Component | Package | npm Link |
|-----------|---------|----------|
| Input | @atom-design-mog/input | [npm](https://www.npmjs.com/package/@atom-design-mog/input) |
| Buttons | @atom-design-mog/buttons | [npm](https://www.npmjs.com/package/@atom-design-mog/buttons) |
| Search | @atom-design-mog/search | [npm](https://www.npmjs.com/package/@atom-design-mog/search) |
| Calendar | @atom-design-mog/calendar | [npm](https://www.npmjs.com/package/@atom-design-mog/calendar) |
| Datepicker | @atom-design-mog/datepicker | [npm](https://www.npmjs.com/package/@atom-design-mog/datepicker) |
| Dropdown | @atom-design-mog/dropdown | [npm](https://www.npmjs.com/package/@atom-design-mog/dropdown) |
| Menu | @atom-design-mog/menu | [npm](https://www.npmjs.com/package/@atom-design-mog/menu) |
| Controls | @atom-design-mog/controls | [npm](https://www.npmjs.com/package/@atom-design-mog/controls) |
| Tabs | @atom-design-mog/tabs | [npm](https://www.npmjs.com/package/@atom-design-mog/tabs) |
| Accordions | @atom-design-mog/accordions | [npm](https://www.npmjs.com/package/@atom-design-mog/accordions) |
| Tooltip | @atom-design-mog/tooltip | [npm](https://www.npmjs.com/package/@atom-design-mog/tooltip) |
| Cards List | @atom-design-mog/cardslist | [npm](https://www.npmjs.com/package/@atom-design-mog/cardslist) |
| Carousel | @atom-design-mog/moglix-carousel | [npm](https://www.npmjs.com/package/@atom-design-mog/moglix-carousel) |
| Upload Field | @atom-design-mog/upload-field | [npm](https://www.npmjs.com/package/@atom-design-mog/upload-field) |
| Login | @atom-design-mog/login | [npm](https://www.npmjs.com/package/@atom-design-mog/login) |

## 📝 Updating Component Documentation

Each component page in `pages/components/` follows a consistent structure. To update a component's documentation:

1. **Update `componentMeta`** - Set the correct name, package, version, description, npm URL, and Snack ID
2. **Update `propsData`** - Add all component props with name, type, default, required, and description
3. **Update `usageCode`** - Add usage examples

### Expo Snack Integration

The `SnackEmbed` component uses Expo Snack's embed format. Update the `snackId` in each component page:

```javascript
const componentMeta = {
  snackId: '@avi-moglix/component-name', // Your Expo Snack ID
};
```

Snack embed format:
```html
<div data-snack-id="@avi-moglix/component-name" 
     data-snack-platform="web" 
     data-snack-preview="true" 
     data-snack-theme="light">
</div>
```

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js` under `theme.extend.colors`. Key colors:
- `atom_rojored`: #D9232D (primary red)
- `atom_celticblue`: #086AC9 (link blue)
- `atom_onxyblack`: #3c3c3c (text)
- `atom_dimgray`: #6F6F6F (secondary text)

### Fonts
- **Roboto** - Primary font
- **Saira Stencil One** - Breadcrumb titles
- **Fira Code** - Code blocks

## 👤 Author

Avi Gupta - [@avi-moglix](https://www.npmjs.com/~avi-moglix)
