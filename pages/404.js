import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * 404 Page Component
 */
export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Atom Design</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="text-[150px] font-bold text-gray-100 dark:text-gray-800 leading-none select-none">
              4&nbsp;&nbsp;&nbsp;4
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-atom_mistyrose dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <i className="ri-file-unknow-line text-5xl text-atom_rojored" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          
          <h1 className="text-xxl font-bold text-atom_onxyblack dark:text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-atom_dimgray dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Check the URL or navigate back to the documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-atom_celticblue text-white px-6 py-3 rounded-md font-medium hover:bg-atom_bleudefrance transition-colors"
            >
              <i className="ri-home-line" aria-hidden="true"></i>
              Back to Home
            </Link>
            
            {/* <Link 
              href="/app/installation"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-atom_onxyblack dark:text-white px-6 py-3 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className="ri-book-read-line" aria-hidden="true"></i>
              Getting Started
            </Link> */}
          </div>
          
          {/* Quick Links */}
          {/* <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Popular Components
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {['buttons', 'input', 'search', 'carousel'].map((component) => (
                <Link
                  key={component}
                  href={`/app/components/${component}`}
                  className="px-3 py-1.5 bg-atom_aliceblue dark:bg-gray-800 text-atom_celticblue dark:text-blue-400 rounded-md text-sm hover:bg-atom_lightblue dark:hover:bg-gray-700 transition-colors capitalize"
                >
                  {component}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}
