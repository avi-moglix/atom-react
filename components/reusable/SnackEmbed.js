import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@/context/ThemeContext';

/**
 * SnackEmbed Component
 * Embeds an Expo Snack playground for live React Native component demos
 * Features: Loading skeleton, lazy loading with Intersection Observer, dark mode sync
 */
export default function SnackEmbed({ 
  snackId, 
  platform = 'web', 
  preview = true, 
  height = 605 
}) {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const embedRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [embedKey, setEmbedKey] = useState(0);

  // Lazy load with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load script only when visible
  useEffect(() => {
    if (!isVisible) return;

    const loadSnackScript = () => {
      const existingScript = document.querySelector('script[src="https://snack.expo.dev/embed.js"]');
      
      if (existingScript) {
        // Script exists, trigger re-initialization
        setScriptLoaded(true);
        if (window.ExpoSnack) {
          window.ExpoSnack.initialize();
        }
        setTimeout(() => setIsLoading(false), 1000);
      } else {
        const script = document.createElement('script');
        script.src = 'https://snack.expo.dev/embed.js';
        script.async = true;
        script.onload = () => {
          setScriptLoaded(true);
          setTimeout(() => setIsLoading(false), 1000);
        };
        document.body.appendChild(script);
      }
    };

    loadSnackScript();
  }, [isVisible]);

  // Re-initialize when theme changes
  useEffect(() => {
    if (scriptLoaded && window.ExpoSnack) {
      setIsLoading(true);
      setEmbedKey(prev => prev + 1);
      setTimeout(() => {
        window.ExpoSnack.initialize();
        setIsLoading(false);
      }, 500);
    }
  }, [theme, scriptLoaded]);

  // Handle iframe load
  useEffect(() => {
    if (!scriptLoaded) return;
    
    const checkLoaded = setInterval(() => {
      const iframe = containerRef.current?.querySelector('iframe');
      if (iframe) {
        setIsLoading(false);
        clearInterval(checkLoaded);
      }
    }, 500);

    return () => clearInterval(checkLoaded);
  }, [scriptLoaded]);

  return (
    <div 
      ref={containerRef}
      className="snack-embed-container relative"
      style={{ minHeight: `${height}px` }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
          aria-label="Loading demo..."
        >
          <div className="flex h-full">
            {/* Code Editor Skeleton */}
            <div className="flex-1 p-4 border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Code lines skeleton */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-4 mb-2 rounded skeleton-wave"
                  style={{ width: `${Math.random() * 40 + 40}%` }}
                />
              ))}
            </div>
            {/* Preview Skeleton */}
            <div className="w-[280px] bg-gray-50 dark:bg-gray-900 p-4 flex flex-col items-center">
              <div className="w-48 h-8 skeleton-wave rounded mb-4"></div>
              <div className="w-full h-64 skeleton-wave rounded"></div>
              <div className="mt-4 flex gap-2">
                <div className="w-16 h-8 skeleton-wave rounded"></div>
                <div className="w-16 h-8 skeleton-wave rounded"></div>
              </div>
            </div>
          </div>
          {/* Loading indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <i className="ri-loader-4-line animate-spin" aria-hidden="true"></i>
            Loading Expo Snack...
          </div>
        </div>
      )}
      
      {/* Actual Snack Embed */}
      {isVisible && (
        <div
          key={embedKey}
          ref={embedRef}
          data-snack-id={snackId}
          data-snack-platform={platform}
          data-snack-preview={preview.toString()}
          data-snack-theme={theme}
          style={{
            overflow: 'hidden',
            background: theme === 'light' ? '#fbfcfd' : '#1e1e1e',
            border: `1px solid ${theme === 'light' ? '#e0e0e0' : '#374151'}`,
            borderRadius: '8px',
            height: `${height}px`,
            width: '100%',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </div>
  );
}

SnackEmbed.propTypes = {
  snackId: PropTypes.string.isRequired,
  platform: PropTypes.oneOf(['web', 'ios', 'android', 'mydevice']),
  preview: PropTypes.bool,
  height: PropTypes.number,
};
