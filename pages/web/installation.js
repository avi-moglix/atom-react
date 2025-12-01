import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumb from '@/components/reusable/Breadcrumb';

export default function WebInstallation() {
  const [copyNotification, setCopyNotification] = useState({
    itemId: null,
    show: false,
  });

  const handleCopyClick = (itemId) => {
    const textToCopy = document.getElementById(itemId)?.innerText || '';
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyNotification({ itemId, show: true });
      setTimeout(() => {
        setCopyNotification({ itemId: null, show: false });
      }, 2000);
    });
  };

  const tailwindConfigContent = `/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3.25rem',
        sm: '1.25rem',
        md: '3rem',
        lg: '3rem',
        xl: '5rem',
      }
    },
    screens: {
      'sm': { 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1600px' },
    },
    extend: {
      colors: {
        atom_rojored: '#D9232D',
        atom_indianred: '#E14F57',
        atom_salmonpink: '#EC9196',
        atom_mistyrose: '#FAE0E1',
        atom_snowred: '#FFF7F7',
        atom_harvestgold: '#E3A003',
        atom_sunglow: '#FECC2F',
        atom_onxyblack: '#3c3c3c',
        atom_dimgray: '#6F6F6F',
        atom_battleshipgray: '#979797',
        atom_silver: '#C4C4C4',
        atom_ghostwhite: '#EFEFF4',
        atom_officegreen: '#0A7205',
        atom_celticblue: '#086AC9',
        atom_graybg: '#F5F5F5',
      },
      fontSize: {
        xxs: ['11px', '16px'],
        xs: ['12px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '26px'],
        xl: ['20px', '28px'],
        xxl: ['24px', '32px'],
        xxxl: ['30px', '40px'],
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'normal': '0 3px 15px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}`;

  const handleDownload = () => {
    const blob = new Blob([tailwindConfigContent], { type: 'text/javascript' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailwind.config.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'React Web', isLast: false, path: '/web' },
    { name: 'Installation', isLast: true },
  ];

  const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
    </svg>
  );

  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"></path>
    </svg>
  );

  return (
    <>
      <Head>
        <title>Installation - React Web | Atom Design</title>
        <meta name="description" content="Installation guide for Atom Design React Web components with Tailwind CSS" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned="Installation" />
        
        <div className="px-5 pt-5 pb-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-xxl font-bold text-atom_onxyblack dark:text-white mb-4">
              Add Moglix Design System to Your Project
            </h1>
            <p className="text-base text-atom_dimgray dark:text-gray-400">
              Follow these steps to set up React with Tailwind CSS for Atom Design components.
            </p>
          </div>

          {/* Step 1: Setup Requirement */}
          <div className="border border-atom_silver dark:border-gray-700 rounded-lg p-6 mb-6 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-4">
              <span className="text-atom_rojored">Step 1.</span> Setup Requirements
            </h2>
            
            <p className="text-base font-semibold text-atom_onxyblack dark:text-gray-200 mb-4">
              Watch these reference videos to get a better understanding of setting up a React project with Tailwind CSS:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-atom_onxyblack dark:text-gray-200 mb-3">
                  A. Setting up Tailwind CSS in a Next.js Project
                </h3>
                <iframe 
                  className="w-full rounded-lg" 
                  height="250" 
                  src="https://www.youtube.com/embed/kap8xrWMNDM?si=z2-oBo8sZEADyPzE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-atom_onxyblack dark:text-gray-200 mb-3">
                  B. How to Use Tailwind CSS in Next.js
                </h3>
                <iframe 
                  className="w-full rounded-lg" 
                  height="250" 
                  src="https://www.youtube.com/embed/lw0dA3zZUDk?si=EEh0hQWEF_4858Xe" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Step 2: Installation Commands */}
          <div className="border border-atom_silver dark:border-gray-700 rounded-lg p-6 mb-6 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-4">
              <span className="text-atom_rojored">Step 2.</span> Install Tailwind CSS
            </h2>
            
            <p className="text-base text-atom_onxyblack dark:text-gray-300 mb-4">
              You can install Tailwind using these commands:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              {/* Create React App */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-atom_onxyblack dark:text-gray-200 mb-2">
                  A. Create a new React/Next.js Project
                </h3>
                <div className="rounded-md overflow-hidden">
                  <div className="bg-atom_ghostwhite dark:bg-gray-700 p-3 flex justify-between items-center">
                    <span className="text-sm font-medium text-atom_onxyblack dark:text-gray-200">Terminal</span>
                    <button 
                      onClick={() => handleCopyClick('cmd-create')} 
                      className="text-atom_dimgray dark:text-gray-400 hover:text-atom_onxyblack dark:hover:text-white transition-colors"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                  <div id="cmd-create" className="p-4 bg-gray-900 text-green-400 font-mono text-sm min-h-[100px]">
                    npx create-next-app@latest my-atom-app
                  </div>
                </div>
                {copyNotification.itemId === 'cmd-create' && copyNotification.show && (
                  <div className="absolute top-12 right-4 bg-atom_rojored text-white py-1 px-3 rounded text-sm">
                    Copied!
                  </div>
                )}
              </div>

              {/* Install Dependencies */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-atom_onxyblack dark:text-gray-200 mb-2">
                  B. Install Tailwind CSS Dependencies
                </h3>
                <div className="rounded-md overflow-hidden">
                  <div className="bg-atom_ghostwhite dark:bg-gray-700 p-3 flex justify-between items-center">
                    <span className="text-sm font-medium text-atom_onxyblack dark:text-gray-200">Terminal</span>
                    <button 
                      onClick={() => handleCopyClick('cmd-install')} 
                      className="text-atom_dimgray dark:text-gray-400 hover:text-atom_onxyblack dark:hover:text-white transition-colors"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                  <div id="cmd-install" className="p-4 bg-gray-900 text-green-400 font-mono text-sm min-h-[100px]">
                    npm install -D tailwindcss postcss autoprefixer
                  </div>
                </div>
                {copyNotification.itemId === 'cmd-install' && copyNotification.show && (
                  <div className="absolute top-12 right-4 bg-atom_rojored text-white py-1 px-3 rounded text-sm">
                    Copied!
                  </div>
                )}
              </div>

              {/* Init Tailwind */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-atom_onxyblack dark:text-gray-200 mb-2">
                  C. Create Configuration Files
                </h3>
                <div className="rounded-md overflow-hidden">
                  <div className="bg-atom_ghostwhite dark:bg-gray-700 p-3 flex justify-between items-center">
                    <span className="text-sm font-medium text-atom_onxyblack dark:text-gray-200">Terminal</span>
                    <button 
                      onClick={() => handleCopyClick('cmd-init')} 
                      className="text-atom_dimgray dark:text-gray-400 hover:text-atom_onxyblack dark:hover:text-white transition-colors"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                  <div id="cmd-init" className="p-4 bg-gray-900 text-green-400 font-mono text-sm min-h-[100px]">
                    npx tailwindcss init -p
                  </div>
                </div>
                {copyNotification.itemId === 'cmd-init' && copyNotification.show && (
                  <div className="absolute top-12 right-4 bg-atom_rojored text-white py-1 px-3 rounded text-sm">
                    Copied!
                  </div>
                )}
              </div>

              {/* CSS File */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-atom_onxyblack dark:text-gray-200 mb-2">
                  D. Configure CSS File (globals.css)
                </h3>
                <div className="rounded-md overflow-hidden">
                  <div className="bg-atom_ghostwhite dark:bg-gray-700 p-3 flex justify-between items-center">
                    <span className="text-sm font-medium text-atom_onxyblack dark:text-gray-200">styles/globals.css</span>
                    <button 
                      onClick={() => handleCopyClick('cmd-css')} 
                      className="text-atom_dimgray dark:text-gray-400 hover:text-atom_onxyblack dark:hover:text-white transition-colors"
                    >
                      <CopyIcon />
                    </button>
                  </div>
                  <div id="cmd-css" className="p-4 bg-gray-900 text-green-400 font-mono text-sm min-h-[100px]">
                    @tailwind base;{'\n'}@tailwind components;{'\n'}@tailwind utilities;
                  </div>
                </div>
                {copyNotification.itemId === 'cmd-css' && copyNotification.show && (
                  <div className="absolute top-12 right-4 bg-atom_rojored text-white py-1 px-3 rounded text-sm">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Theme File Download */}
          <div className="border border-atom_silver dark:border-gray-700 rounded-lg p-6 mb-6 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-2">
              <span className="text-atom_rojored">Step 3.</span> Theme File Download
            </h2>
            <p className="text-sm text-atom_dimgray dark:text-gray-400 mb-4">
              Download the Tailwind CSS configuration file with Atom Design System colors and tokens.
            </p>

            <div className="rounded-md overflow-hidden">
              <div className="bg-atom_ghostwhite dark:bg-gray-700 p-3 flex justify-between items-center">
                <span className="text-sm font-medium text-atom_onxyblack dark:text-gray-200">tailwind.config.js</span>
                <button 
                  onClick={handleDownload} 
                  className="flex items-center gap-2 text-atom_celticblue hover:text-atom_bleudefrance transition-colors"
                >
                  <DownloadIcon />
                  <span className="text-sm font-medium">Download</span>
                </button>
              </div>
              <div className="p-4 bg-gray-900 text-atom_sunglow font-mono text-xs max-h-[400px] overflow-y-auto">
                <pre className="whitespace-pre-wrap">{tailwindConfigContent}</pre>
              </div>
            </div>
          </div>

          {/* Step 4: Install Additional Dependencies */}
          <div className="border border-atom_silver dark:border-gray-700 rounded-lg p-6 mb-6 dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-2">
              <span className="text-atom_rojored">Step 4.</span> Install Additional Dependencies
            </h2>
            <p className="text-sm text-atom_dimgray dark:text-gray-400 mb-4">
              Some components require additional packages. Install them as needed:
            </p>

            <div className="relative">
              <div className="rounded-md overflow-hidden">
                <div className="bg-atom_ghostwhite dark:bg-gray-700 p-3 flex justify-between items-center">
                  <span className="text-sm font-medium text-atom_onxyblack dark:text-gray-200">Terminal</span>
                  <button 
                    onClick={() => handleCopyClick('cmd-deps')} 
                    className="text-atom_dimgray dark:text-gray-400 hover:text-atom_onxyblack dark:hover:text-white transition-colors"
                  >
                    <CopyIcon />
                  </button>
                </div>
                <div id="cmd-deps" className="p-4 bg-gray-900 text-green-400 font-mono text-sm">
                  # UI Components{'\n'}
                  npm install @headlessui/react{'\n\n'}
                  # Forms{'\n'}
                  npm install react-hook-form @hookform/resolvers yup{'\n\n'}
                  # Icons{'\n'}
                  npm install remixicon{'\n\n'}
                  # Date Picker{'\n'}
                  npm install react-datepicker
                </div>
              </div>
              {copyNotification.itemId === 'cmd-deps' && copyNotification.show && (
                <div className="absolute top-12 right-4 bg-atom_rojored text-white py-1 px-3 rounded text-sm">
                  Copied!
                </div>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/web" 
              className="inline-flex items-center gap-2 bg-atom_rojored text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-atom_indianred transition-colors"
            >
              <i className="ri-arrow-right-line"></i>
              Explore Components
            </Link>
            {/* <Link 
              href="/app/installation" 
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <i className="ri-smartphone-line"></i>
              View React Native Installation
            </Link> */}
          </div>
        </div>
      </main>
    </>
  );
}
