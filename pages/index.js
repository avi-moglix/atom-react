import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Atom Design - UI Component Library</title>
        <meta name="description" content="Atom Design is a comprehensive UI component library for React Web and React Native applications. Build beautiful, consistent interfaces across web and mobile." />
        <meta property="og:title" content="Atom Design - UI Component Library" />
        <meta property="og:description" content="React Web and React Native UI components for Moglix applications" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="React, React Native, UI Components, Design System, Moglix, Web Development, Mobile Development" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] flex flex-col">
        {/* Header */}
        <header className="p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo" 
                alt="Atom Design" 
                width="122" 
                height="28"
                className="h-7 w-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.npmjs.com/~avi-moglix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="npm packages"
              >
                <i className="ri-npmjs-fill text-2xl"></i>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            {/* Hero Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Beautiful UIs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9232d] to-[#ff6b6b]">
                Across All Platforms
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Atom Design provides production-ready, customizable UI components for 
              both React Web and React Native applications.
            </p>

            {/* Platform Selection Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 max-w-6xl mx-auto">
              {/* React Web Card */}
              <Link href="/web" className="group block">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl">
                  {/* Coming Soon Badge */}
                  {/* <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/30">
                      Coming Soon
                    </span>
                  </div> */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
                      <i className="ri-checkbox-circle-fill"></i>
                      Available
                    </span>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-[#61dafb] to-[#0ea5e9] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-window-line text-3xl text-white"></i>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3">React Web</h2>
                  <p className="text-gray-400 mb-6">
                    Components optimized for web applications with responsive design and accessibility built-in.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Buttons</span>
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Forms</span>
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Tables</span>
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Modals</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-[#61dafb] font-medium group-hover:gap-3 transition-all">
                    Browse Components
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>

              {/* React Native Card */}
              <Link href="/app" className="group block">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl">
                  {/* Available Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
                      <i className="ri-checkbox-circle-fill"></i>
                      Available
                    </span>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d9232d] to-[#ff6b6b] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-smartphone-line text-3xl text-white"></i>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3">React Native</h2>
                  <p className="text-gray-400 mb-6">
                    Mobile-first components for iOS and Android apps with native performance.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">15 Components</span>
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">npm Ready</span>
                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Expo Snack</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-[#d9232d] font-medium group-hover:gap-3 transition-all">
                    Browse Components
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                <div className="text-gray-500 text-sm">Components</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">npm</div>
                <div className="text-gray-500 text-sm">Published</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">MIT</div>
                <div className="text-gray-500 text-sm">License</div>
              </div>
            </div> */}
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Moglix. Atom Design System.</p>
            {/* <div className="flex items-center gap-6">
              <a href="https://www.npmjs.com/~avi-moglix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                npm Packages
              </a>
              <a href="/app/installation" className="hover:text-white transition-colors">
                Documentation
              </a>
            </div> */}
          </div>
        </footer>
      </div>
    </>
  );
}

// This page uses a custom layout (no sidebar/header)
LandingPage.getLayout = function getLayout(page) {
  return page;
};
