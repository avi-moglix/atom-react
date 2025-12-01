# Contributing to Atom Design Docs

Thank you for your interest in contributing to the Atom Design documentation site! This guide will help you get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Adding a New Component](#adding-a-new-component)
- [Code Style Guide](#code-style-guide)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/atom-native-docs.git
cd atom-native-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Development Workflow

1. Create a new branch for your feature/fix:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes
3. Run tests:
```bash
npm test
```

4. Run linting:
```bash
npm run lint
```

5. Commit your changes with a descriptive message
6. Push and create a pull request

## Project Structure

```
atom-native-docs/
├── components/
│   ├── layout/          # Header, Sidebar
│   ├── reusable/        # Shared components
│   └── templates/       # Page templates
├── context/             # React context providers
├── data/                # Component data & configs
├── hooks/               # Custom React hooks
├── pages/               # Next.js pages
│   └── components/      # Component documentation pages
├── public/              # Static assets
└── styles/              # Global styles
```

## Adding a New Component

### Step 1: Add Component Data

Edit `data/componentsData.js`:

```javascript
{
  id: 'your-component',
  name: 'YourComponent',
  description: 'Description of what the component does.',
  package: '@atom-design-mog/your-component',
  version: '1.0.0',
  status: 'stable', // stable | beta | new
  category: 'Form Elements', // or appropriate category
  tags: ['tag1', 'tag2'],
  icon: 'ri-icon-name',
  snackId: 'expo-snack-id',
  props: [
    {
      name: 'propName',
      type: 'string',
      default: '"default"',
      required: false,
      description: 'What this prop does'
    }
  ]
}
```

### Step 2: Create the Page

Create a new file in `pages/components/your-component.js`:

```javascript
import ComponentDoc from '@/components/templates/ComponentDoc';
import { getComponentById } from '@/data/componentsData';

export default function YourComponent() {
  const componentData = getComponentById('your-component');
  
  return (
    <ComponentDoc
      component={componentData}
      usageCode={`import { YourComponent } from '${componentData.package}';

// Your example code here`}
    />
  );
}
```

### Step 3: Add Search Data

Update `data/searchData.js` with relevant keywords.

### Step 4: Test

- Verify the component appears in the sidebar
- Test the Expo Snack embed works
- Check props table renders correctly
- Test dark mode appearance
- Verify mobile responsiveness

## Code Style Guide

### General

- Use functional components with hooks
- Use PropTypes for component props
- Add JSDoc comments to functions and components
- Use meaningful variable and function names

### React

```javascript
// ✅ Good
const ComponentName = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// ❌ Avoid
function ComponentName(props) {
  return <div>{props.prop1}</div>;
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Group related classes logically
- Use CSS variables for theme values
- Add dark mode variants for colors

```javascript
// ✅ Good
<div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">

// ❌ Avoid inline styles
<div style={{ display: 'flex', alignItems: 'center' }}>
```

### Accessibility

- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Writing Tests

Place tests in `__tests__` folders next to the code:

```javascript
// hooks/__tests__/useHook.test.js
import { renderHook, act } from '@testing-library/react';
import { useHook } from '../useHook';

describe('useHook', () => {
  it('should do something', () => {
    const { result } = renderHook(() => useHook());
    expect(result.current.value).toBe(expected);
  });
});
```

## Pull Request Process

1. **Title**: Use a clear, descriptive title
   - `feat: Add new DatePicker component documentation`
   - `fix: Correct props table mobile layout`
   - `docs: Update installation instructions`

2. **Description**: Include:
   - What changes were made
   - Why they were needed
   - Screenshots for UI changes
   - Related issues

3. **Review**: 
   - All tests must pass
   - Linting must pass
   - At least one approval required

4. **Merge**:
   - Squash and merge for cleaner history
   - Delete the branch after merge

## Questions?

If you have questions, open an issue or reach out to the maintainers.

Thank you for contributing! 🎉
