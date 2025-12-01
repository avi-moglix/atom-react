import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/reusable/Breadcrumb';
import { webComponentsData, getWebSidebarItems } from '@/data/webComponentsData';

export default function WebHome() {
  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'React Web', isLast: true },
  ];

  // Get available components from webComponentsData
  const availableComponents = [
    { name: 'Buttons', path: '/web/components/button', description: 'Primary, secondary, tertiary buttons with multiple sizes and states', icon: 'ri-cursor-line' },
    { name: 'Cards', path: '/web/components/cards', description: 'Product cards, info cards, stats cards, and horizontal cards', icon: 'ri-layout-cards-line' },
    { name: 'Table', path: '/web/components/table', description: 'Data tables with sorting, selection, and action menus', icon: 'ri-table-line' },
    { name: 'Form', path: '/web/components/form', description: 'Inputs, selects, checkboxes, radios, and validation', icon: 'ri-input-method-line' },
    { name: 'Tooltip', path: '/web/components/tooltip', description: 'Hover tooltips with 4 position options', icon: 'ri-message-2-line' },
    { name: 'Tabs & Accordions', path: '/web/components/tabs', description: 'Tab navigation and collapsible accordion panels', icon: 'ri-layout-top-line' },
    { name: 'Skeleton', path: '/web/components/skeleton', description: 'Loading placeholders for content', icon: 'ri-loader-line' },
    { name: 'Datepicker', path: '/web/components/datepicker', description: 'Date and time selection with range support', icon: 'ri-calendar-line' },
    { name: 'Header', path: '/web/components/header', description: 'Navigation headers with dropdown and mega menus', icon: 'ri-layout-top-2-line' },
    { name: 'Layout', path: '/web/components/layout', description: 'Responsive grid and flexbox layout utilities', icon: 'ri-layout-grid-line' },
    { name: 'Form Templates', path: '/web/components/form-templates', description: 'Multi-step forms with validation and reCAPTCHA', icon: 'ri-file-list-3-line' },
    { name: 'Carousel', path: '/web/components/carousel', description: 'Image sliders, banners, and thumbnail galleries', icon: 'ri-slideshow-line' },
  ];

  // Upcoming components
  const upcomingComponents = [
    { name: 'Modal', description: 'Dialog and modal components', icon: 'ri-window-line' },
    { name: 'Dropdown', description: 'Searchable dropdown menus', icon: 'ri-arrow-down-s-line' },
    { name: 'Toast', description: 'Notification messages', icon: 'ri-notification-line' },
  ];

  return (
    <>
      <Head>
        <title>React Web Components | Atom Design</title>
        <meta name="description" content="React Web UI components with Tailwind CSS for Moglix applications. Buttons, cards, tables, forms, tooltips, and more." />
        <meta property="og:title" content="Atom Design - React Web UI Components" />
        <meta property="og:description" content="React Web UI components with Tailwind CSS" />
      </Head>
      <main>
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned="React Web Components" />
        
        <div className="bg-white dark:bg-gray-900 m-5 mb-10">
          {/* Hero Section */}
          <div className="border border-atom_silver dark:border-gray-700 rounded p-8 mb-6 dark:bg-gray-800">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#61dafb] to-[#0ea5e9] rounded-xl flex items-center justify-center">
                  <i className="ri-window-line text-2xl text-white"></i>
                </div>
                <div>
                  <h1 className="text-xxxl font-bold text-atom_onxyblack dark:text-white">
                    React Web Components
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web UI Library with Tailwind CSS</p>
                </div>
              </div>
              
              <p className="text-lg text-atom_dimgray dark:text-gray-400 mb-6">
                A comprehensive collection of React web components built with Tailwind CSS. 
                These components feature responsive design, accessibility best practices, 
                and seamless integration with your React projects.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#61dafb]/10 text-[#0ea5e9] text-sm rounded-full border border-[#61dafb]/30">
                  <i className="ri-reactjs-line"></i> React
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#38bdf8]/10 text-[#0ea5e9] text-sm rounded-full border border-[#38bdf8]/30">
                  <i className="ri-css3-line"></i> Tailwind CSS
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm rounded-full border border-purple-500/30">
                  <i className="ri-code-s-slash-line"></i> @headlessui/react
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm rounded-full border border-green-500/30">
                  <i className="ri-remixicon-line"></i> Remix Icons
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/web/components/button" 
                  className="inline-flex items-center gap-2 bg-atom_rojored text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-atom_indianred transition-colors"
                >
                  <i className="ri-play-line"></i>
                  Get Started
                </Link>
                {/* <Link 
                  href="/app" 
                  className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <i className="ri-smartphone-line"></i>
                  View React Native Components
                </Link> */}
              </div>
            </div>
          </div>

          {/* Available Components Grid */}
          <div className="border border-atom_silver dark:border-gray-700 rounded p-6 dark:bg-gray-800 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-atom_onxyblack dark:text-white mb-1">
                  Available Components
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {availableComponents.length} components ready to use
                </p>
              </div>
              {/* <span className="px-3 py-1 bg-atom_officegreen/10 text-atom_officegreen text-sm rounded-full border border-atom_officegreen/30">
                <i className="ri-checkbox-circle-line mr-1"></i>
                Production Ready
              </span> */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {availableComponents.map((component, index) => (
                <Link 
                  key={index}
                  href={component.path}
                  className="group p-4 bg-white dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-atom_celticblue dark:hover:border-atom_celticblue hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-atom_aliceblue dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-atom_celticblue/20 transition-colors">
                      <i className={`${component.icon} text-lg text-atom_celticblue`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-atom_celticblue transition-colors">
                          {component.name}
                        </h3>
                        {component.status === 'stable' && (
                          <span className="px-1.5 py-0.5 bg-atom_officegreen/10 text-atom_officegreen text-xs rounded">
                            stable
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {component.description}
                      </p>
                    </div>
                    <i className="ri-arrow-right-s-line text-gray-400 group-hover:text-atom_celticblue group-hover:translate-x-1 transition-all"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Components */}
          {/* <div className="border border-atom_silver dark:border-gray-700 rounded p-6 dark:bg-gray-800">
            <div className="flex items-center gap-2 mb-6">
              <i className="ri-timer-line text-atom_harvestgold"></i>
              <h2 className="text-xl font-semibold text-atom_onxyblack dark:text-white">
                Coming Soon
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {upcomingComponents.map((component, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-600 opacity-70"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i className={`${component.icon} text-gray-400`}></i>
                    <h3 className="font-medium text-gray-600 dark:text-gray-400 text-sm">{component.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{component.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-atom_silver dark:border-gray-700 rounded p-6 dark:bg-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-atom_mistyrose dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <i className="ri-book-2-line text-lg text-atom_rojored"></i>
                </div>
                <h3 className="font-semibold text-atom_onxyblack dark:text-white">Documentation</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Each component includes live previews, code examples, and Tailwind CSS classes.
              </p>
              <Link 
                href="/web/components/buttons"
                className="inline-flex items-center gap-1 text-sm text-atom_celticblue hover:underline"
              >
                Start with Buttons <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* <div className="border border-atom_silver dark:border-gray-700 rounded p-6 dark:bg-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-atom_honeydew dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <i className="ri-smartphone-line text-lg text-atom_officegreen"></i>
                </div>
                <h3 className="font-semibold text-atom_onxyblack dark:text-white">React Native</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Looking for mobile components? Check out our React Native component library.
              </p>
              <Link 
                href="/app"
                className="inline-flex items-center gap-1 text-sm text-atom_celticblue hover:underline"
              >
                View Native Components <i className="ri-arrow-right-line"></i>
              </Link>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
