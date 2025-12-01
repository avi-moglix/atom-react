import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * 500 Page Component
 * Server-side error page
 */
export default function ServerError() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Atom Design</title>
        <meta name="description" content="An internal server error occurred." />
      </Head>
      
      <main className="min-h-[calc(100vh-200px)] flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          {/* 500 Illustration */}
          <div className="relative mb-8">
            <div className="text-[150px] font-bold text-gray-100 dark:text-gray-800 leading-none select-none">
              500
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-atom_mistyrose dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <i className="ri-server-line text-5xl text-atom_rojored" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          
          <h1 className="text-xxl font-bold text-atom_onxyblack dark:text-white mb-4">
            Server Error
          </h1>
          
          <p className="text-atom_dimgray dark:text-gray-400 mb-8">
            Something went wrong on our end. Please try again later or contact support if the problem persists.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-atom_celticblue text-white px-6 py-3 rounded-md font-medium hover:bg-atom_bleudefrance transition-colors"
            >
              <i className="ri-refresh-line" aria-hidden="true"></i>
              Try Again
            </button>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-atom_onxyblack dark:text-white px-6 py-3 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className="ri-home-line" aria-hidden="true"></i>
              Back to Home
            </Link>
          </div>
          
          {/* Status Info */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              If this problem continues, please{' '}
              <a 
                href="https://github.com/avi-moglix/atom-design/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-atom_celticblue hover:underline"
              >
                report an issue
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

// Get initial props for proper 500 status code
ServerError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};
