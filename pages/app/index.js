import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/reusable/Breadcrumb';

// Component data for cards
const components = [
  {
    name: 'Input',
    path: '/app/components/input',
    package: '@atom-design-mog/input',
    description: 'Multi-type input component supporting text, select, multiselect, chips, and more.',
    features: ['Text Input', 'Select', 'Multiselect', 'Chips', 'With Button'],
    badge: 'popular'
  },
  {
    name: 'Buttons',
    path: '/app/components/buttons',
    package: '@atom-design-mog/buttons',
    description: 'Customizable button with variants, sizes, icons, and loading states.',
    features: ['6 Variants', 'Icons', 'Loading State', 'Shapes'],
    badge: 'popular'
  },
  {
    name: 'Search',
    path: '/app/components/search',
    package: '@atom-design-mog/search',
    description: 'Search bar with filter chips and live results list.',
    features: ['Live Search', 'Filter Chips', 'Results List'],
    badge: 'new'
  },
  {
    name: 'Calendar',
    path: '/app/components/calendar',
    package: '@atom-design-mog/calendar',
    description: 'Calendar component for date selection and display.',
    features: ['Date Selection', 'Customizable'],
    badge: null
  },
  {
    name: 'Datepicker',
    path: '/app/components/datepicker',
    package: '@atom-design-mog/datepicker',
    description: 'Date picker with customizable formats and ranges.',
    features: ['Date Formats', 'Range Selection'],
    badge: null
  },
  {
    name: 'Dropdown',
    path: '/app/components/dropdown',
    package: '@atom-design-mog/dropdown',
    description: 'Dropdown select component with search support.',
    features: ['Searchable', 'Custom Styles'],
    badge: null
  },
  {
    name: 'Menu',
    path: '/app/components/menu',
    package: '@atom-design-mog/menu',
    description: 'Menu navigation component for app navigation.',
    features: ['Navigation', 'Icons'],
    badge: null
  },
  {
    name: 'Controls',
    path: '/app/components/controls',
    package: '@atom-design-mog/controls',
    description: 'Checkbox, radio, switch, and other form controls.',
    features: ['Checkbox', 'Radio', 'Switch'],
    badge: null
  },
  {
    name: 'Tabs',
    path: '/app/components/tabs',
    package: '@atom-design-mog/tabs',
    description: 'Tab navigation for content organization.',
    features: ['Tab Navigation', 'Scrollable'],
    badge: null
  },
  {
    name: 'Accordions',
    path: '/app/components/accordions',
    package: '@atom-design-mog/accordions',
    description: 'Collapsible accordion for expandable content.',
    features: ['Collapsible', 'Animated'],
    badge: null
  },
  {
    name: 'Tooltip',
    path: '/app/components/tooltip',
    package: '@atom-design-mog/tooltip',
    description: 'Tooltip overlay for contextual information.',
    features: ['Overlay', 'Positioning'],
    badge: null
  },
  {
    name: 'Cards List',
    path: '/app/components/cardslist',
    package: '@atom-design-mog/cardslist',
    description: 'Card list layout for displaying item collections.',
    features: ['List Layout', 'Customizable'],
    badge: null
  },
  {
    name: 'Carousel',
    path: '/app/components/carousel',
    package: '@atom-design-mog/carousel',
    description: 'Carousel/slider for image and content galleries.',
    features: ['Swipeable', 'Auto-play', 'Pagination'],
    badge: 'popular'
  },
  {
    name: 'Upload Field',
    path: '/app/components/upload-field',
    package: '@atom-design-mog/upload-field',
    description: 'File upload component with preview support.',
    features: ['File Upload', 'Preview'],
    badge: null
  },
  {
    name: 'Login',
    path: '/app/components/login',
    package: '@atom-design-mog/login',
    description: 'Login form component with validation.',
    features: ['Form Validation', 'Customizable'],
    badge: null
  },
];

export default function AppHome() {
  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'React Native', isLast: true },
  ];

  return (
    <>
      <Head>
        <title>React Native Components | Atom Design</title>
        <meta name="description" content="A collection of customizable, production-ready React Native UI components built for Moglix applications. Buttons, Inputs, Search, Calendar, and more." />
        <meta property="og:title" content="Atom Design - React Native UI Components" />
        <meta property="og:description" content="Production-ready React Native UI components for Moglix applications" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="React Native, UI Components, Design System, Moglix, Mobile Development" />
      </Head>
      <main>
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned="React Native Components" />
        
        <div className="bg-white dark:bg-gray-900 m-5 mb-10">
          {/* Hero Section */}
          <div className="border border-atom_silver dark:border-gray-700 rounded p-8 mb-6 dark:bg-gray-800">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d9232d] to-[#ff6b6b] rounded-xl flex items-center justify-center">
                  <i className="ri-smartphone-line text-2xl text-white"></i>
                </div>
                <div>
                  <h1 className="text-xxxl font-bold text-atom_onxyblack dark:text-white">
                    React Native Components
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mobile UI Library</p>
                </div>
              </div>
              <p className="text-lg text-atom_dimgray dark:text-gray-400 mb-6">
                A collection of customizable, production-ready React Native UI components 
                built for Moglix applications. Each component is published on npm and can 
                be easily integrated into your React Native projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/app/installation" 
                  className="inline-flex items-center gap-2 bg-atom_celticblue text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-atom_bleudefrance transition-colors"
                >
                  <i className="ri-book-read-line"></i>
                  Get Started
                </Link>
                <a 
                  href="https://www.npmjs.com/~avi-moglix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="npm-link"
                >
                  <i className="ri-npmjs-fill text-lg"></i>
                  View on npm
                </a>
              </div>
            </div>
          </div>

          {/* Quick Install */}
          <div className="border border-atom_silver dark:border-gray-700 rounded p-6 mb-6 bg-gradient-to-r from-gray-900 to-gray-800">
            <h3 className="text-white font-semibold mb-3">Quick Install</h3>
            <code className="text-green-400 text-sm">
              npm install @atom-design-mog/[component-name]
            </code>
          </div>

          {/* Components Grid */}
          <div className="border border-atom_silver dark:border-gray-700 rounded p-6 dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-atom_onxyblack dark:text-white mb-6">
              Available Components ({components.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {components.map((component, index) => (
                <Link key={index} href={component.path} className="block">
                  <div className="component-card h-full">
                    <div className="flex items-start justify-between mb-2">
                      <h3>{component.name}</h3>
                      {component.badge && (
                        <span className={`feature-badge ${component.badge}`}>
                          {component.badge === 'new' && <i className="ri-sparkles-line"></i>}
                          {component.badge === 'popular' && <i className="ri-fire-line"></i>}
                          {component.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-3">{component.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {component.features.slice(0, 3).map((feature, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-atom_celticblue dark:text-blue-400 font-mono truncate">
                      {component.package}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="border border-atom_silver dark:border-gray-700 rounded p-6 mt-6 dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-atom_onxyblack dark:text-white mb-6">
              Why Atom Design Components?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-atom_aliceblue dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-plug-line text-xl text-atom_celticblue dark:text-blue-400"></i>
                </div>
                <h4 className="font-semibold mb-2 dark:text-white">Easy Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Simple npm install and import to get started</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-atom_honeydew dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-palette-line text-xl text-atom_officegreen dark:text-green-400"></i>
                </div>
                <h4 className="font-semibold mb-2 dark:text-white">Customizable</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Flexible props and styles for your brand</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-atom_papayawhip dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-file-list-3-line text-xl text-atom_harvestgold dark:text-yellow-400"></i>
                </div>
                <h4 className="font-semibold mb-2 dark:text-white">Well Documented</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clear examples and prop documentation</p>
              </div>
              {/* <div className="text-center p-4">
                <div className="w-12 h-12 bg-atom_mistyrose dark:bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-smartphone-line text-xl text-atom_rojored dark:text-red-400"></i>
                </div>
                <h4 className="font-semibold mb-2 dark:text-white">React Native First</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Built specifically for mobile apps</p>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
