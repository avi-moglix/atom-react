import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { getSidebarItems } from "@/data/componentsData";
import { getWebSidebarItems } from "@/data/webComponentsData";

export default function Sidebar({ isOpen, onClose }) {
  const router = useRouter();
  
  // Determine which section we're in (app or web)
  const isAppSection = router.pathname.startsWith('/app');
  const isWebSection = router.pathname.startsWith('/web');
  
  // Get component items based on current platform
  const componentItems = isWebSection ? getWebSidebarItems() : getSidebarItems('app');
  const basePath = isWebSection ? '/web' : '/app';

  return (
    <aside
      id="default-sidebar"
      className={`fixed bg-white dark:bg-gray-900 top-[var(--header-height)] left-0 z-[999] w-[280px] sm:w-[var(--sidebar-width)] h-[calc(100vh-var(--header-height))] transform transition-transform duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
      aria-label="Sidebar navigation"
    >
      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-3 right-3 p-2 z-10 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 shadow-sm"
        aria-label="Close sidebar"
      >
        <i className="ri-close-line text-xl" aria-hidden="true"></i>
      </button>

      <nav className="h-full overflow-y-auto bg-white dark:bg-gray-900 pb-20">
        {/* Platform Selector */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <Link
              href="/app"
              className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                isAppSection 
                  ? 'bg-gradient-to-r from-[#d9232d] to-[#ff6b6b] text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <i className="ri-smartphone-line mr-1"></i>
              Native
            </Link>
            <Link
              href="/web"
              className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                isWebSection 
                  ? 'bg-gradient-to-r from-[#61dafb] to-[#0ea5e9] text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <i className="ri-window-line mr-1"></i>
              Web
            </Link>
          </div>
        </div>

        {/* Getting Started Section */}
        <ul className="list-none p-0 m-0" role="list">
          <li className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">
            Getting Started
          </li>
          <li>
            <Link
              className={`no-underline text-sm leading-[21px] px-5 py-2.5 h-10 flex items-center box-border transition-all ease-in-out duration-200 cursor-pointer relative ${
                router.pathname === basePath 
                  ? "!pl-10 !text-white !font-bold !italic !bg-[#0a0b20] !border-0 camra-lens-logo"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              href={basePath}
              aria-current={router.pathname === basePath ? "page" : undefined}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              className={`no-underline text-sm leading-[21px] px-5 py-2.5 h-10 flex items-center box-border transition-all ease-in-out duration-200 cursor-pointer relative ${
                router.pathname === `${basePath}/installation`
                  ? "!pl-10 !text-white !font-bold !italic !bg-[#0a0b20] !border-0 camra-lens-logo"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
              href={`${basePath}/installation`}
              aria-current={router.pathname === `${basePath}/installation` ? "page" : undefined}
            >
              Installation
            </Link>
          </li>
        </ul>

        {/* Components Section */}
        <ul className="list-none p-0 m-0" role="list">
          <li className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 mt-2 flex items-center justify-between">
            <span>Components</span>
            <span className={`text-[10px] ${isWebSection ? 'bg-[#0ea5e9]' : 'bg-gradient-to-r from-[#d9232d] to-[#ff6b6b]'} text-white px-2 py-0.5 rounded-full font-medium min-w-[20px] text-center`}>
              {componentItems.length}
            </span>
          </li>
          {componentItems.map((item, index) => (
            <li key={index}>
              {item.status === 'coming-soon' ? (
                <span
                  className="border-l-[6px] px-5 py-2.5 text-sm leading-5 h-10 flex items-center box-border cursor-not-allowed opacity-50 border-white dark:border-gray-900 text-gray-400 dark:text-gray-500"
                >
                  <span className="flex items-center justify-between gap-2 w-full">
                    {item.name}
                    <span className="text-[9px] bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded">Soon</span>
                  </span>
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={`border-l-[6px] px-5 py-2.5 transition-all ease-linear duration-[2ms] text-sm leading-5 h-10 flex items-center box-border cursor-pointer ${
                    router.pathname === item.path
                      ? "border-atom_rojored text-atom_rojored dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20"
                      : "font-regular text-gray-700 dark:text-gray-300 border-white dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  aria-current={router.pathname === item.path ? "page" : undefined}
                >
                  <span className="flex items-center justify-between gap-2 w-full">
                    {item.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Resources Section - Only show for React Native */}
        {/* {isAppSection && (
          <ul className="list-none p-0 m-0 mt-2 mb-8" role="list">
            <li className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">
              Resources
            </li>
            <li>
              <a
                href="https://www.npmjs.com/~avi-moglix"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-gray-700 dark:text-gray-300 text-sm leading-[21px] px-5 py-2.5 h-10 flex items-center gap-2 box-border hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <i className="ri-npmjs-fill text-[#CB3837]" aria-hidden="true"></i>
                npm Packages
                <i className="ri-external-link-line text-xs ml-auto text-gray-400" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        )} */}
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
