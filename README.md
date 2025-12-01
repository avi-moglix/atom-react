# Atom Design - Component Documentation

A Next.js documentation site for Atom Design UI components, featuring both **React Native** and **React Web** component libraries.

## ✨ Features

- 📱 **15 React Native Components** - Mobile UI components with Expo Snack demos
- 🌐 **12+ React Web Components** - Web UI components with Tailwind CSS
- 🌙 **Dark Mode** - Full dark mode support with system preference detection
- ⌨️ **Keyboard Shortcuts** - `Cmd/Ctrl + K` for search focus
- ♿ **Accessible** - ARIA labels, skip links, semantic HTML
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔍 **Search** - Fuzzy search with platform filtering (Web/Native)
- 📋 **Copy to Clipboard** - One-click code copying with syntax highlighting
- 🎮 **Live Demos** - Expo Snack embeds for Native, inline previews for Web
- 🎨 **Code Showcase** - Toggle between JSX and HTML code views

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
│   │   └── Sidebar.js          # Left sidebar with platform toggle
│   ├── reusable/
│   │   ├── Breadcrumb.js       # Page breadcrumb banner
│   │   ├── CodeBlock.js        # Syntax-highlighted code + ComponentShowcase
│   │   ├── ErrorBoundary.js    # Error boundary component
│   │   ├── InstallBanner.js    # npm/yarn install commands
│   │   ├── PropsTable.js       # Component props table
│   │   ├── Skeleton.js         # Loading skeleton components
│   │   ├── SnackEmbed.js       # Lazy-loaded Expo Snack embed
│   │   └── Tooltip.js          # Hover tooltip
│   └── templates/
│       ├── ComponentDoc.js     # React Native component doc template
│       └── WebComponentDoc.js  # React Web component doc template
├── context/
│   └── ThemeContext.js         # Dark mode context provider
├── data/
│   ├── componentsData.js       # React Native component metadata
│   ├── webComponentsData.js    # React Web component metadata
│   └── searchData.js           # Search index with platform filtering
├── hooks/
│   ├── useCopyLink.js          # Clipboard copy hooks
│   ├── useCodeShowcase.js      # Code display toggle hook
│   ├── useUtils.js             # Utility hooks (localStorage, etc.)
│   └── __tests__/              # Hook unit tests
├── pages/
│   ├── _app.js                 # App wrapper with providers
│   ├── _document.js            # Custom HTML document
│   ├── 404.js                  # Not found page
│   ├── 500.js                  # Server error page
│   ├── index.js                # Landing page
│   ├── search.js               # Search results with platform filter
│   ├── changelog.js            # Version history
│   ├── app/                    # React Native docs
│   │   ├── index.js            # Native introduction
│   │   ├── installation.js     # Native installation guide
│   │   └── components/         # Native component pages
│   └── web/                    # React Web docs
│       ├── index.js            # Web introduction
│       ├── installation.js     # Web installation guide
│       └── components/         # Web component pages
├── styles/
│   └── globals.scss            # Global styles + dark mode
├── public/
│   ├── favicon.ico             # Site favicon
│   └── assets/img/             # Images and logos
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

### React Native Components (15)

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

### React Web Components (12+)

| Component | Description | Dependencies |
|-----------|-------------|--------------|
| Buttons | Primary, Secondary, Tertiary with icons & states | Tailwind CSS |
| Cards | Product cards, info cards, stats cards | Tailwind CSS |
| Table | Sortable tables with fixed actions | @headlessui/react |
| Form | Inputs, selects, validation | react-hook-form, react-select |
| Tooltip | Hover tooltips with 4 positions | Tailwind CSS |
| Tabs & Accordions | Tab navigation, collapsible panels | Tailwind CSS |
| Datepicker | Date/time picker, range selection | react-datepicker |
| Carousel | Banner, thumbnail, fullwidth sliders | Swiper |
| Skeleton | Loading placeholders | Tailwind CSS |
| Header | Navigation with dropdowns | @headlessui/react |
| Layout | Responsive grid systems | Tailwind CSS |
| Form Templates | Multi-step forms, finance forms | react-hook-form, yup |

## 📝 Updating Component Documentation

### React Native Components (`pages/app/components/`)

Each React Native component page uses the `ComponentDoc` template. To update documentation:

1. **Update `componentMeta`** - Set the correct name, package, version, description, npm URL, and Snack ID
2. **Update `propsData`** - Add all component props with name, type, default, required, and description
3. **Update `usageCode`** - Add usage examples

#### Expo Snack Integration

The `SnackEmbed` component uses Expo Snack's embed format. Update the `snackId` in each component page:

```javascript
const componentMeta = {
  snackId: '@avi-moglix/component-name', // Your Expo Snack ID
};
```

You can also specify the platform for the Snack embed:
```javascript
<ComponentDoc 
  componentMeta={componentMeta} 
  propsData={propsData} 
  usageCode={usageCode}
  snackPlatform="android" // Options: "web", "ios", "android", "mydevice"
/>
```

### React Web Components (`pages/web/components/`)

Each React Web component page uses the `ComponentShowcase` component. To update documentation:

1. **Import and configure** - Import components from the respective component library folders
2. **Create variants array** - Define different states and variations of the component
3. **Use ComponentShowcase** - Wrap each variant with the `ComponentShowcase` component

```javascript
<ComponentShowcase
  title="Button Variant Name"
  code={`<Button variant="primary">Click me</Button>`}
>
  <Button variant="primary">Click me</Button>
</ComponentShowcase>
```

The `ComponentShowcase` provides:
- "View Code" toggle button
- Syntax-highlighted code display
- Copy to clipboard functionality

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
