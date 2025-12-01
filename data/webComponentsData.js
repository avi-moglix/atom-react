// Web Components Data for Atom Design System
// These are React web components using Tailwind CSS

export const webComponentsData = {
  buttons: {
    name: 'Buttons',
    description: 'A comprehensive button system for React web applications with Primary, Secondary, and Tertiary variants. Supports multiple sizes (Small, Medium, Large), icons, loading states, and disabled states. Built with Tailwind CSS for easy customization.',
    status: 'stable',
    variants: ['Primary', 'Secondary', 'Tertiary', 'Outlined', 'Text', 'Icon-only'],
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Red', 'Blue', 'Green', 'Orange', 'Gray', 'Slate'],
    propsData: [
      { name: 'bg-atom_rojored', description: 'Primary red background color (#d9232d)', default: '—' },
      { name: 'bg-atom_celticblue', description: 'Primary blue background color (#086AC9)', default: '—' },
      { name: 'bg-atom_officegreen', description: 'Primary green background color (#059A6D)', default: '—' },
      { name: 'hover:bg-atom_indianred', description: 'Hover state for red buttons', default: '—' },
      { name: 'h-[33px]', description: 'Small button height', default: '—' },
      { name: 'h-[43px]', description: 'Medium button height', default: '—' },
      { name: 'h-[50px]', description: 'Large button height', default: '—' },
      { name: 'rounded', description: 'Rounded corners (4px)', default: '—' },
      { name: 'rounded-full', description: 'Fully rounded (pill shape)', default: '—' },
      { name: 'disabled:bg-[#d7d7dc]', description: 'Disabled state background', default: '—' },
      { name: 'focus-visible:outline', description: 'Focus state outline for accessibility', default: '—' },
    ],
    features: [
      '3 main variants: Primary, Secondary, Tertiary',
      '3 size options: Small (33px), Medium (43px), Large (50px)',
      '6 color themes with hover states',
      'Left and right icon support via Remix Icons',
      'Loading state with spinner animation',
      'Disabled state with visual feedback',
      'Focus-visible outline for keyboard navigation',
      'Fully customizable with Tailwind classes',
    ],
    dosAndDonts: {
      dos: [
        'Use Primary variant for main call-to-action buttons',
        'Use Secondary variant for less prominent actions',
        'Use Tertiary/Text variant for subtle actions',
        'Include focus-visible styles for accessibility',
        'Use consistent button sizes within the same context',
      ],
      donts: [
        'Don\'t use multiple Primary buttons in the same section',
        'Avoid using Text variant for critical actions',
        'Don\'t forget hover and focus states',
        'Avoid mixing too many button colors in one view',
      ],
    },
    accessibilityNotes: [
      'Always include focus-visible:outline for keyboard users',
      'Use aria-label for icon-only buttons',
      'Disabled buttons should have reduced opacity for visual indication',
      'Ensure sufficient color contrast (4.5:1 minimum)',
    ],
  },

  cards: {
    name: 'Cards',
    description: 'Flexible card components for displaying product listings, content previews, and information cards. Features responsive grid layout, hover effects, shadow styling, and action buttons.',
    status: 'stable',
    variants: ['Product Card', 'Info Card', 'Stats Card', 'Image Card'],
    propsData: [
      { name: 'shadow-md', description: 'Medium box shadow for card elevation', default: '—' },
      { name: 'hover:shadow-lg', description: 'Larger shadow on hover', default: '—' },
      { name: 'rounded-lg', description: 'Rounded corners (8px)', default: '—' },
      { name: 'border', description: 'Border for card outline', default: '—' },
      { name: 'overflow-hidden', description: 'Clips content to rounded corners', default: '—' },
      { name: 'transition-all', description: 'Smooth transitions for hover effects', default: '—' },
    ],
    features: [
      'Responsive grid layout (2-5 columns)',
      'Product cards with image, title, brand, and CTA',
      'Hover shadow effects for interactivity',
      'Consistent spacing and padding',
      'Action button integration',
      'Image aspect ratio handling',
    ],
    dosAndDonts: {
      dos: [
        'Use consistent card sizes in grid layouts',
        'Include hover effects for interactive cards',
        'Truncate long text with ellipsis',
        'Use proper image aspect ratios',
      ],
      donts: [
        'Don\'t mix card sizes in the same row',
        'Avoid too much text content in cards',
        'Don\'t forget alt text for card images',
      ],
    },
  },

  table: {
    name: 'Table',
    description: 'Data table component with sortable headers, fixed action columns, striped rows, and responsive scrolling. Supports row selection, inline editing, and action menus using @headlessui/react.',
    status: 'stable',
    variants: ['Basic Table', 'Sortable Table', 'Fixed Actions Table', 'Selectable Table'],
    propsData: [
      { name: 'min-w-full', description: 'Full width table', default: '—' },
      { name: 'divide-y', description: 'Row dividers', default: '—' },
      { name: 'divide-gray-200', description: 'Light gray divider color', default: '—' },
      { name: 'sticky right-0', description: 'Fixed action column', default: '—' },
      { name: 'hover:bg-gray-50', description: 'Row hover effect', default: '—' },
      { name: 'cursor-pointer', description: 'Pointer cursor for sortable headers', default: '—' },
    ],
    features: [
      'Sortable column headers with icons',
      'Fixed right-side action column',
      'Row hover effects',
      'Striped rows option',
      'Responsive horizontal scroll',
      'Dropdown menus via @headlessui/react',
      'Checkbox selection for bulk actions',
    ],
    dependencies: [
      { name: '@headlessui/react', note: 'For dropdown menus in action column' },
    ],
    dosAndDonts: {
      dos: [
        'Use fixed action column for wide tables',
        'Include sort indicators on sortable columns',
        'Add hover effects for row interactivity',
        'Use horizontal scroll for responsive tables',
      ],
      donts: [
        'Don\'t hide critical data in overflow',
        'Avoid too many columns without scroll',
        'Don\'t forget mobile responsiveness',
      ],
    },
  },

  form: {
    name: 'Form',
    description: 'Form components including text inputs, select dropdowns, multi-select with react-select, checkboxes, radio buttons, and form validation styling. Integrates with react-hook-form for form state management.',
    status: 'stable',
    variants: ['Text Input', 'Select', 'Multi-Select', 'Checkbox', 'Radio', 'Textarea'],
    propsData: [
      { name: 'border-gray-300', description: 'Default input border color', default: '—' },
      { name: 'focus:ring-2', description: 'Focus ring width', default: '—' },
      { name: 'focus:ring-atom_celticblue', description: 'Focus ring color', default: '—' },
      { name: 'border-red-500', description: 'Error state border', default: '—' },
      { name: 'placeholder-gray-400', description: 'Placeholder text color', default: '—' },
    ],
    features: [
      'Consistent input styling with Tailwind',
      'Focus states with ring effect',
      'Error state styling with red border',
      'Label and helper text support',
      'Multi-select via react-select',
      'Integration with react-hook-form',
    ],
    dependencies: [
      { name: 'react-select', note: 'For multi-select dropdowns' },
      { name: 'react-hook-form', note: 'For form state management' },
    ],
    dosAndDonts: {
      dos: [
        'Always provide labels for accessibility',
        'Show clear error messages for validation',
        'Use consistent spacing between form fields',
        'Include placeholder text as hints',
      ],
      donts: [
        'Don\'t rely on placeholder as the only label',
        'Avoid red borders without error messages',
        'Don\'t forget required field indicators',
      ],
    },
  },

  tooltip: {
    name: 'Tooltip',
    description: 'Hover-triggered tooltip component for displaying additional information. Supports multiple positions (top, bottom, left, right) with arrow indicators and smooth fade animations.',
    status: 'stable',
    variants: ['Top', 'Bottom', 'Left', 'Right'],
    propsData: [
      { name: 'group', description: 'Tailwind group for hover trigger', default: '—' },
      { name: 'group-hover:visible', description: 'Show tooltip on parent hover', default: '—' },
      { name: 'opacity-0', description: 'Hidden state opacity', default: '—' },
      { name: 'group-hover:opacity-100', description: 'Visible state opacity', default: '—' },
      { name: 'transition-opacity', description: 'Smooth fade animation', default: '—' },
      { name: 'z-50', description: 'High z-index for overlay', default: '—' },
    ],
    features: [
      '4 position options: top, bottom, left, right',
      'Arrow indicator pointing to trigger',
      'Smooth fade-in/fade-out animation',
      'Dark background for readability',
      'Automatic positioning with absolute',
      'Group hover trigger system',
    ],
    dosAndDonts: {
      dos: [
        'Use for supplementary information only',
        'Keep tooltip text concise',
        'Ensure sufficient contrast',
        'Position tooltips where they won\'t be clipped',
      ],
      donts: [
        'Don\'t put critical info in tooltips only',
        'Avoid very long tooltip text',
        'Don\'t use on touch-only devices without alternatives',
      ],
    },
    accessibilityNotes: [
      'Consider aria-describedby for tooltip content',
      'Ensure tooltip content is accessible to screen readers',
      'Provide alternative access on touch devices',
    ],
  },

  tabs: {
    name: 'Tabs & Accordions',
    description: 'Tab navigation and accordion components for organizing content. Features multiple tab styles (pills, underline, boxed) and smooth accordion expand/collapse animations.',
    status: 'stable',
    variants: ['Pill Tabs', 'Underline Tabs', 'Boxed Tabs', 'Accordion'],
    propsData: [
      { name: 'border-b-2', description: 'Underline tab active indicator', default: '—' },
      { name: 'border-atom_rojored', description: 'Active tab underline color', default: '—' },
      { name: 'bg-atom_rojored', description: 'Pill tab active background', default: '—' },
      { name: 'transition-all', description: 'Smooth transition for accordion', default: '—' },
      { name: 'max-h-0', description: 'Collapsed accordion height', default: '—' },
      { name: 'max-h-96', description: 'Expanded accordion max height', default: '—' },
    ],
    features: [
      'Multiple tab style variants',
      'Smooth underline transitions',
      'Accordion with expand/collapse',
      'Active state highlighting',
      'Keyboard navigation support',
      'Responsive tab layouts',
    ],
    dosAndDonts: {
      dos: [
        'Use tabs for related content sections',
        'Highlight active tab clearly',
        'Keep tab labels short and descriptive',
        'Consider vertical tabs for many options',
      ],
      donts: [
        'Don\'t use tabs for sequential processes (use steps)',
        'Avoid more than 7 tabs in a row',
        'Don\'t nest tabs within tabs',
      ],
    },
  },

  datepicker: {
    name: 'Datepicker',
    description: 'Date and time picker component with calendar view, date range selection, and time selection. Styled with Tailwind CSS for consistent look and feel.',
    status: 'stable',
    variants: ['Single Date', 'Date Range', 'DateTime', 'Time Only'],
    propsData: [
      { name: 'rounded-lg', description: 'Calendar container border radius', default: '—' },
      { name: 'shadow-lg', description: 'Calendar dropdown shadow', default: '—' },
      { name: 'bg-atom_rojored', description: 'Selected date background', default: '—' },
      { name: 'hover:bg-gray-100', description: 'Date cell hover effect', default: '—' },
    ],
    features: [
      'Calendar view with month navigation',
      'Single date selection',
      'Date range selection',
      'Time picker integration',
      'Min/max date constraints',
      'Keyboard navigation',
    ],
    dependencies: [
      { name: 'date-fns', note: 'For date formatting and manipulation' },
    ],
  },

  carousel: {
    name: 'Carousel',
    description: 'Image carousel/slider component with autoplay, navigation arrows, dot indicators, and touch swipe support. Supports both banner sliders and thumbnail galleries.',
    status: 'stable',
    variants: ['Banner Slider', 'Thumbnail Slider', 'Full-width Slider'],
    propsData: [
      { name: 'overflow-hidden', description: 'Container overflow handling', default: '—' },
      { name: 'transition-transform', description: 'Smooth slide transitions', default: '—' },
      { name: 'duration-500', description: 'Transition duration (500ms)', default: '—' },
      { name: 'ease-in-out', description: 'Transition easing function', default: '—' },
    ],
    features: [
      'Autoplay with configurable interval',
      'Navigation arrows',
      'Dot/pagination indicators',
      'Touch swipe support',
      'Infinite loop option',
      'Thumbnail navigation',
      'Pause on hover',
    ],
  },

//   dropdown: {
//     name: 'Dropdown',
//     description: 'Dropdown menu component using @headlessui/react for accessible, animated dropdown menus. Supports single select, multi-select, and action menus.',
//     status: 'stable',
//     variants: ['Basic Dropdown', 'Action Menu', 'Multi-Select', 'Searchable'],
//     propsData: [
//       { name: 'Menu', description: '@headlessui/react Menu component', default: '—' },
//       { name: 'Menu.Button', description: 'Dropdown trigger button', default: '—' },
//       { name: 'Menu.Items', description: 'Dropdown items container', default: '—' },
//       { name: 'Menu.Item', description: 'Individual dropdown item', default: '—' },
//       { name: 'Transition', description: 'Animation wrapper from @headlessui/react', default: '—' },
//     ],
//     features: [
//       'Accessible keyboard navigation',
//       'Smooth enter/leave animations',
//       'Auto-positioning',
//       'Focus management',
//       'Click-outside-to-close',
//       'Integrates with @headlessui/react',
//     ],
//     dependencies: [
//       { name: '@headlessui/react', note: 'For accessible dropdown components' },
//     ],
//   },

  skeleton: {
    name: 'Skeleton',
    description: 'Loading skeleton/placeholder components for content loading states. Includes pulse animation and various shapes for different content types.',
    status: 'stable',
    variants: ['Text Line', 'Avatar', 'Image', 'Card', 'Table Row'],
    propsData: [
      { name: 'animate-pulse', description: 'Pulsing animation for loading effect', default: '—' },
      { name: 'bg-gray-200', description: 'Skeleton background color', default: '—' },
      { name: 'rounded', description: 'Rounded corners for text skeletons', default: '—' },
      { name: 'rounded-full', description: 'Fully rounded for avatar skeletons', default: '—' },
    ],
    features: [
      'Pulse animation for loading state',
      'Various shapes: line, circle, rectangle',
      'Card skeleton layouts',
      'Table row skeletons',
      'Customizable sizes',
      'Dark mode support',
    ],
  },

  header: {
    name: 'Header',
    description: 'Navigation header components with dropdown menus, mega menus, and responsive mobile navigation. Supports multiple layout variants.',
    status: 'stable',
    variants: ['Dropdown Menu', 'Multi-level Dropdown', 'Mega Menu', 'Sticky Header'],
    propsData: [
      { name: 'sticky top-0', description: 'Fixed header position', default: '—' },
      { name: 'z-50', description: 'Z-index for overlay behavior', default: '—' },
      { name: 'shadow-md', description: 'Header shadow', default: '—' },
    ],
    features: [
      'Multiple dropdown menu types',
      'Mega menu with sections',
      'Mobile responsive hamburger menu',
      'Logo and branding area',
      'Search bar integration',
      'User avatar/profile menu',
    ],
  },

  layout: {
    name: 'Layout',
    description: 'Responsive grid and flexbox layout components. Includes 2-6 column grids with responsive breakpoints for different screen sizes.',
    status: 'stable',
    variants: ['2-Column', '3-Column', '4-Column', '6-Column', 'Flex Layout'],
    propsData: [
      { name: 'grid', description: 'CSS Grid container', default: '—' },
      { name: 'grid-cols-{n}', description: 'Number of columns', default: '—' },
      { name: 'gap-{n}', description: 'Gap between grid items', default: '—' },
      { name: 'flex', description: 'Flexbox container', default: '—' },
    ],
    features: [
      'Responsive grid layouts',
      '2 to 6 column options',
      'Mobile-first breakpoints',
      'Flexbox utilities',
      'Gap and spacing controls',
    ],
  },

  formTemplates: {
    name: 'Form Templates',
    description: 'Pre-built form templates including multi-step forms, contact forms, and finance application forms with validation.',
    status: 'stable',
    variants: ['Finance Form', 'Contact Form', 'Multi-step Form', 'Login Form'],
    propsData: [
      { name: 'react-hook-form', description: 'Form state management', default: '—' },
      { name: 'yup', description: 'Schema validation', default: '—' },
    ],
    features: [
      'Multi-step form wizard',
      'Form validation with yup',
      'Google reCAPTCHA integration',
      'File upload support',
      'Progress indicators',
    ],
    dependencies: [
      { name: 'react-hook-form', note: 'For form state management' },
      { name: '@hookform/resolvers', note: 'For yup integration' },
      { name: 'yup', note: 'For schema validation' },
    ],
  },
};

// Helper to get sidebar items for web platform
export const getWebSidebarItems = () => {
  // Define the correct paths for each component
  const pathMap = {
    buttons: 'button',
    cards: 'cards',
    table: 'table',
    form: 'form',
    tooltip: 'tooltip',
    tabs: 'tabs',
    datepicker: 'datepicker',
    skeleton: 'skeleton',
    header: 'header',
    layout: 'layout',
    formTemplates: 'form-templates',
    carousel: 'carousel',
    dropdown: 'dropdown',
  };
  
  return Object.entries(webComponentsData)
    .filter(([key]) => pathMap[key]) // Only include components that have a page
    .map(([key, data]) => ({
      name: data.name,
      path: `/web/components/${pathMap[key]}`,
      status: data.status,
    }));
};

// Helper to get component by slug
export const getWebComponentBySlug = (slug) => {
  return webComponentsData[slug] || null;
};

export default webComponentsData;
