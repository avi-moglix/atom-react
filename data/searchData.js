// Search data for component documentation
// Each item includes a 'platform' field: 'web', 'native', or 'both'

export const searchData = [
  // ==================== GETTING STARTED ====================
  { 
    title: 'Introduction - React Native',
    link: '/app',
    description: 'Overview of Atom Design React Native components',
    category: 'Getting Started',
    platform: 'native',
    keywords: ['home', 'overview', 'introduction', 'atom design', 'react native', 'mobile', 'app']
  },
  { 
    title: 'Introduction - React Web',
    link: '/web',
    description: 'Overview of Atom Design React Web components',
    category: 'Getting Started',
    platform: 'web',
    keywords: ['home', 'overview', 'introduction', 'atom design', 'react', 'web', 'website']
  },
  { 
    title: 'Installation - Native',
    link: '/app/installation',
    description: 'How to install and set up Atom Design Native components',
    category: 'Getting Started',
    platform: 'native',
    keywords: ['install', 'setup', 'npm', 'yarn', 'getting started', 'quick start', 'react native']
  },
  { 
    title: 'Installation - Web',
    link: '/web/installation',
    description: 'How to install and set up Atom Design Web components',
    category: 'Getting Started',
    platform: 'web',
    keywords: ['install', 'setup', 'npm', 'yarn', 'getting started', 'quick start', 'react', 'nextjs', 'tailwind']
  },
  
  // ==================== REACT NATIVE COMPONENTS ====================
  { 
    title: 'Input',
    link: '/app/components/input',
    description: 'Text input, select, multiselect, chips, and more input types',
    category: 'Form Elements',
    platform: 'native',
    keywords: ['input', 'text', 'field', 'form', 'select', 'multiselect', 'chips', 'textarea', 'native']
  },
  { 
    title: 'Buttons',
    link: '/app/components/buttons',
    description: 'Button variants: solid, outlined, dashed, text, link, ghost',
    category: 'Actions',
    platform: 'native',
    keywords: ['button', 'click', 'action', 'solid', 'outlined', 'dashed', 'ghost', 'primary', 'secondary', 'native']
  },
  { 
    title: 'Search',
    link: '/app/components/search',
    description: 'Search bar with filter chips and live results',
    category: 'Navigation',
    platform: 'native',
    keywords: ['search', 'filter', 'find', 'autocomplete', 'chips', 'results', 'native']
  },
  { 
    title: 'Calendar',
    link: '/app/components/calendar',
    description: 'Calendar component for date selection',
    category: 'Data Input',
    platform: 'native',
    keywords: ['calendar', 'date', 'month', 'year', 'day', 'schedule', 'native']
  },
  { 
    title: 'Datepicker',
    link: '/app/components/datepicker',
    description: 'Date picker with customizable formats for React Native',
    category: 'Data Input',
    platform: 'native',
    keywords: ['date', 'picker', 'datepicker', 'select', 'format', 'calendar', 'native']
  },
  { 
    title: 'Dropdown',
    link: '/app/components/dropdown',
    description: 'Dropdown select component for mobile',
    category: 'Form Elements',
    platform: 'native',
    keywords: ['dropdown', 'select', 'menu', 'options', 'list', 'native']
  },
  { 
    title: 'Menu',
    link: '/app/components/menu',
    description: 'Menu navigation component',
    category: 'Navigation',
    platform: 'native',
    keywords: ['menu', 'navigation', 'nav', 'items', 'list', 'sidebar', 'native']
  },
  { 
    title: 'Controls',
    link: '/app/components/controls',
    description: 'Checkbox, radio, switch, and other control components',
    category: 'Form Elements',
    platform: 'native',
    keywords: ['checkbox', 'radio', 'switch', 'toggle', 'control', 'check', 'boolean', 'native']
  },
  { 
    title: 'Tabs',
    link: '/app/components/tabs',
    description: 'Tab navigation component for React Native',
    category: 'Navigation',
    platform: 'native',
    keywords: ['tabs', 'tab', 'navigation', 'panel', 'switch', 'views', 'native']
  },
  { 
    title: 'Accordions',
    link: '/app/components/accordions',
    description: 'Collapsible accordion component',
    category: 'Data Display',
    platform: 'native',
    keywords: ['accordion', 'collapse', 'expand', 'faq', 'collapsible', 'panel', 'native']
  },
  { 
    title: 'Tooltip',
    link: '/app/components/tooltip',
    description: 'Tooltip overlay component for mobile',
    category: 'Feedback',
    platform: 'native',
    keywords: ['tooltip', 'hover', 'hint', 'popover', 'info', 'help', 'native']
  },
  { 
    title: 'Cards List',
    link: '/app/components/cardslist',
    description: 'Card list layout component',
    category: 'Data Display',
    platform: 'native',
    keywords: ['cards', 'card', 'list', 'grid', 'layout', 'items', 'native']
  },
  { 
    title: 'Carousel',
    link: '/app/components/carousel',
    description: 'Carousel/slider component for React Native',
    category: 'Data Display',
    platform: 'native',
    keywords: ['carousel', 'slider', 'swipe', 'gallery', 'images', 'banner', 'native']
  },
  { 
    title: 'Upload Field',
    link: '/app/components/upload-field',
    description: 'File upload component for mobile',
    category: 'Form Elements',
    platform: 'native',
    keywords: ['upload', 'file', 'image', 'document', 'attachment', 'pick', 'native']
  },
  { 
    title: 'Login',
    link: '/app/components/login',
    description: 'Login form component for React Native',
    category: 'Authentication',
    platform: 'native',
    keywords: ['login', 'auth', 'authentication', 'signin', 'user', 'form', 'password', 'native']
  },

  // ==================== REACT WEB COMPONENTS ====================
  { 
    title: 'Buttons',
    link: '/web/components/button',
    description: 'Web button variants: primary, secondary, outlined, ghost, with icons',
    category: 'Actions',
    platform: 'web',
    keywords: ['button', 'click', 'action', 'primary', 'secondary', 'outlined', 'ghost', 'icon', 'web', 'react']
  },
  { 
    title: 'Cards',
    link: '/web/components/cards',
    description: 'Card components with headings, product listings, and backgrounds',
    category: 'Data Display',
    platform: 'web',
    keywords: ['card', 'cards', 'product', 'listing', 'heading', 'background', 'container', 'web']
  },
  { 
    title: 'Tables',
    link: '/web/components/table',
    description: 'Data tables with sortable headers, fixed columns, and actions',
    category: 'Data Display',
    platform: 'web',
    keywords: ['table', 'data', 'grid', 'sortable', 'fixed', 'column', 'header', 'rows', 'web']
  },
  { 
    title: 'Tabs & Accordions',
    link: '/web/components/tabs',
    description: 'Tab navigation and accordion components with multiple styles',
    category: 'Navigation',
    platform: 'web',
    keywords: ['tabs', 'tab', 'accordion', 'collapse', 'expand', 'panel', 'navigation', 'web']
  },
  { 
    title: 'Tooltip',
    link: '/web/components/tooltip',
    description: 'Tooltip with positions: top, bottom, left, right and with details',
    category: 'Feedback',
    platform: 'web',
    keywords: ['tooltip', 'hover', 'hint', 'popover', 'info', 'help', 'position', 'web']
  },
  { 
    title: 'Datepicker',
    link: '/web/components/datepicker',
    description: 'Date picker with various formats and styles for web',
    category: 'Data Input',
    platform: 'web',
    keywords: ['date', 'picker', 'datepicker', 'calendar', 'select', 'format', 'web', 'react-datepicker']
  },
  { 
    title: 'Carousel',
    link: '/web/components/carousel',
    description: 'Image carousel/slider with multiple variants: banner, thumbnail, fullwidth',
    category: 'Data Display',
    platform: 'web',
    keywords: ['carousel', 'slider', 'banner', 'thumbnail', 'fullwidth', 'gallery', 'images', 'swiper', 'web']
  },
  { 
    title: 'Banner Slider',
    link: '/web/components/BannerSlider',
    description: 'Responsive banner slider with navigation dots',
    category: 'Data Display',
    platform: 'web',
    keywords: ['banner', 'slider', 'carousel', 'hero', 'responsive', 'navigation', 'web']
  },
  { 
    title: 'Thumbnail Slider',
    link: '/web/components/ThumbnailSlider',
    description: 'Product image slider with thumbnail navigation',
    category: 'Data Display',
    platform: 'web',
    keywords: ['thumbnail', 'slider', 'product', 'image', 'gallery', 'zoom', 'web']
  },
  { 
    title: 'Fullwidth Slider',
    link: '/web/components/fullwidth-slider',
    description: 'Full width banner slider for hero sections',
    category: 'Data Display',
    platform: 'web',
    keywords: ['fullwidth', 'slider', 'banner', 'hero', 'section', 'wide', 'web']
  },
  { 
    title: 'Header',
    link: '/web/components/header',
    description: 'Header components with navigation, search, and dropdowns',
    category: 'Navigation',
    platform: 'web',
    keywords: ['header', 'navbar', 'navigation', 'menu', 'search', 'dropdown', 'web']
  },
  { 
    title: 'Layout',
    link: '/web/components/layout',
    description: 'Grid layouts: 2, 3, 4, 6 columns with responsive breakpoints',
    category: 'Layout',
    platform: 'web',
    keywords: ['layout', 'grid', 'columns', 'responsive', 'flex', 'container', 'web', 'tailwind']
  },
  { 
    title: 'Forms',
    link: '/web/components/form',
    description: 'Form components with react-hook-form and react-select integration',
    category: 'Form Elements',
    platform: 'web',
    keywords: ['form', 'input', 'select', 'multiselect', 'validation', 'react-hook-form', 'web']
  },
  { 
    title: 'Form Templates',
    link: '/web/components/form-templates',
    description: 'Complete form templates for common use cases',
    category: 'Form Elements',
    platform: 'web',
    keywords: ['form', 'template', 'contact', 'registration', 'login', 'checkout', 'web']
  },
  { 
    title: 'Finance Form',
    link: '/web/components/FinanceForm',
    description: 'Finance and payment form components',
    category: 'Form Elements',
    platform: 'web',
    keywords: ['finance', 'payment', 'form', 'credit', 'billing', 'web']
  },
  { 
    title: 'Product Listing',
    link: '/web/components/product-listing-page',
    description: 'E-commerce product listing grid with filters',
    category: 'E-commerce',
    platform: 'web',
    keywords: ['product', 'listing', 'ecommerce', 'grid', 'filter', 'shop', 'web']
  },
  { 
    title: 'Skeleton Loader',
    link: '/web/components/skeleton',
    description: 'Skeleton loading placeholders for content',
    category: 'Feedback',
    platform: 'web',
    keywords: ['skeleton', 'loading', 'placeholder', 'shimmer', 'wave', 'loader', 'web']
  },
];

/**
 * Search function with platform filtering
 * @param {string} query - Search query
 * @param {string} platform - 'all', 'web', or 'native'
 * @returns {Array} Filtered and scored results
 */
export function searchComponents(query, platform = 'all') {
  if (!query || query.length < 2) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const words = normalizedQuery.split(/\s+/);
  
  return searchData
    .filter(item => {
      // Platform filter
      if (platform === 'all') return true;
      return item.platform === platform || item.platform === 'both';
    })
    .map(item => {
      let score = 0;
      
      // Title exact match (highest priority)
      if (item.title.toLowerCase() === normalizedQuery) {
        score += 100;
      }
      // Title starts with query
      else if (item.title.toLowerCase().startsWith(normalizedQuery)) {
        score += 80;
      }
      // Title contains query
      else if (item.title.toLowerCase().includes(normalizedQuery)) {
        score += 60;
      }
      
      // Description match
      if (item.description.toLowerCase().includes(normalizedQuery)) {
        score += 30;
      }
      
      // Keyword matches
      if (item.keywords) {
        words.forEach(word => {
          item.keywords.forEach(keyword => {
            if (keyword.includes(word)) {
              score += 20;
            }
            if (keyword === word) {
              score += 10; // Bonus for exact keyword match
            }
          });
        });
      }
      
      // Category match
      if (item.category && item.category.toLowerCase().includes(normalizedQuery)) {
        score += 15;
      }
      
      // Platform query match (if user types 'web' or 'native')
      if (normalizedQuery.includes('web') && item.platform === 'web') {
        score += 25;
      }
      if ((normalizedQuery.includes('native') || normalizedQuery.includes('mobile') || normalizedQuery.includes('app')) && item.platform === 'native') {
        score += 25;
      }
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

/**
 * Get platform badge color classes
 * @param {string} platform 
 * @returns {object} Badge styling info
 */
export function getPlatformBadge(platform) {
  switch(platform) {
    case 'web':
      return {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-700 dark:text-blue-400',
        label: 'Web'
      };
    case 'native':
      return {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-700 dark:text-green-400',
        label: 'Native'
      };
    case 'both':
      return {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-700 dark:text-purple-400',
        label: 'Both'
      };
    default:
      return {
        bg: 'bg-gray-100 dark:bg-gray-800',
        text: 'text-gray-700 dark:text-gray-400',
        label: platform
      };
  }
}
