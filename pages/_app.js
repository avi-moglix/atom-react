import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/globals.scss";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ErrorBoundary from "@/components/reusable/ErrorBoundary";
import { ThemeProvider } from "@/context/ThemeContext";
import { useKeyboardShortcuts } from "@/hooks/useUtils";

function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if the current page uses a custom layout (landing page)
  const useCustomLayout = Component.getLayout;
  
  // Check if current route is landing page (no header/sidebar needed)
  const isLandingPage = router.pathname === '/';

  // Close sidebar on route change (mobile)
  useEffect(() => {
    const handleRouteChange = () => setSidebarOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    'mod+k': () => {
      const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]');
      if (searchInput) searchInput.focus();
    },
    'Escape': () => setSidebarOpen(false),
  });

  // Use custom layout for landing page (no header/sidebar)
  if (useCustomLayout || isLandingPage) {
    return (
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1001] focus:bg-atom_celticblue focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="mt-[var(--header-height)] flex overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        
        <main 
          id="main-content"
          className="flex-1 lg:ml-[var(--sidebar-width)] min-h-[calc(100vh-var(--header-height))] overflow-x-hidden"
          role="main"
        >
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}

export default function App(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <ThemeProvider>
        <AppContent {...props} />
      </ThemeProvider>
    </>
  );
}
