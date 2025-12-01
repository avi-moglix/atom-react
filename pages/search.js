import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/reusable/Breadcrumb';
import { searchData, getPlatformBadge } from '@/data/searchData';

/**
 * Search Results Page
 * Displays search results based on query parameter with platform filtering
 */
export default function SearchPage() {
  const router = useRouter();
  const { q: query, platform: platformFilter } = router.query;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePlatform, setActivePlatform] = useState('all');

  const breadcrumbs = [
    { name: 'Home', isLast: false, path: '/' },
    { name: 'Search', isLast: true },
  ];

  // Update active platform when URL changes
  useEffect(() => {
    if (platformFilter) {
      setActivePlatform(platformFilter);
    }
  }, [platformFilter]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay for UX
    const timer = setTimeout(() => {
      const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
      
      const filtered = searchData
        .filter(item => {
          // Apply platform filter
          if (activePlatform === 'all') return true;
          return item.platform === activePlatform || item.platform === 'both';
        })
        .map(item => {
          const titleLower = item.title.toLowerCase();
          const descLower = (item.description || '').toLowerCase();
          
          let score = 0;
          searchTerms.forEach(term => {
            if (titleLower.includes(term)) score += 10;
            if (titleLower.startsWith(term)) score += 5;
            if (descLower.includes(term)) score += 3;
            // Keyword matching
            if (item.keywords) {
              item.keywords.forEach(keyword => {
                if (keyword.includes(term)) score += 2;
              });
            }
          });
          
          return { ...item, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, activePlatform]);

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
    // Update URL
    const newQuery = { ...router.query, platform };
    if (platform === 'all') delete newQuery.platform;
    router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
  };

  const highlightText = (text, searchQuery) => {
    if (!searchQuery || !text) return text;
    const keywords = searchQuery.toLowerCase().split(/\s+/).filter(k => k.length > 0);
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">$1</mark>');
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <>
      <Head>
        <title>{query ? `Search: ${query}` : 'Search'} | Atom Design</title>
        <meta name="description" content={`Search results for "${query}" in Atom Design documentation`} />
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <Breadcrumb breadcrumbs={breadcrumbs} lastChildMentioned="Search Results" />
        
        <div className="bg-white dark:bg-gray-900 m-5 mb-10">
          <div className="doc-section">
            <div className="mb-6">
              <h1 className="text-xxl font-bold text-atom_onxyblack dark:text-white mb-2">
                Search Results
              </h1>
              {query && (
                <p className="text-atom_dimgray dark:text-gray-400">
                  {isLoading ? (
                    'Searching...'
                  ) : (
                    <>
                      Found <span className="font-semibold text-atom_celticblue">{results.length}</span> result{results.length !== 1 ? 's' : ''} for "<span className="font-semibold">{query}</span>"
                      {activePlatform !== 'all' && (
                        <> in <span className="font-semibold capitalize">{activePlatform}</span> components</>
                      )}
                    </>
                  )}
                </p>
              )}
            </div>

            {/* Platform Filter Tabs */}
            {query && (
              <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                <button
                  onClick={() => handlePlatformChange('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activePlatform === 'all'
                      ? 'bg-atom_celticblue text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All Platforms
                </button>
                <button
                  onClick={() => handlePlatformChange('web')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activePlatform === 'web'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50'
                  }`}
                >
                  <i className="ri-global-line" aria-hidden="true"></i>
                  Web
                </button>
                <button
                  onClick={() => handlePlatformChange('native')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activePlatform === 'native'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                  }`}
                >
                  <i className="ri-smartphone-line" aria-hidden="true"></i>
                  Native
                </button>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="h-5 w-48 skeleton-wave rounded mb-2"></div>
                    <div className="h-4 w-full skeleton-wave rounded mb-1"></div>
                    <div className="h-4 w-3/4 skeleton-wave rounded"></div>
                  </div>
                ))}
              </div>
            )}

            {/* No Query State */}
            {!isLoading && !query && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-atom_aliceblue dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-search-line text-3xl text-atom_celticblue" aria-hidden="true"></i>
                </div>
                <h2 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-2">
                  Start Searching
                </h2>
                <p className="text-atom_dimgray dark:text-gray-400 mb-4">
                  Use the search bar in the header to find components and documentation.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Tip: Press <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">⌘K</kbd> or <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">Ctrl+K</kbd> to focus the search bar
                </p>
              </div>
            )}

            {/* No Results State */}
            {!isLoading && query && results.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-atom_mistyrose dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-search-line text-3xl text-atom_rojored" aria-hidden="true"></i>
                </div>
                <h2 className="text-lg font-semibold text-atom_onxyblack dark:text-white mb-2">
                  No Results Found
                </h2>
                <p className="text-atom_dimgray dark:text-gray-400 mb-6">
                  We couldn't find anything matching "<span className="font-semibold">{query}</span>"
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>Try:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Using different keywords</li>
                    <li>Checking for typos</li>
                    <li>Using more general terms</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Popular Components
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      { name: 'Buttons', path: '/app/components/buttons', platform: 'native' },
                      { name: 'Input', path: '/app/components/input', platform: 'native' },
                      { name: 'Cards', path: '/web/components/cards', platform: 'web' },
                      { name: 'Table', path: '/web/components/table', platform: 'web' },
                      { name: 'Carousel', path: '/app/components/carousel', platform: 'native' },
                    ].map((component) => (
                      <Link
                        key={component.path}
                        href={component.path}
                        className="px-3 py-1.5 bg-atom_aliceblue dark:bg-gray-800 text-atom_celticblue dark:text-blue-400 rounded-md text-sm hover:bg-atom_lightblue dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5"
                      >
                        <i className={component.platform === 'web' ? 'ri-global-line text-xs' : 'ri-smartphone-line text-xs'}></i>
                        {component.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results List */}
            {!isLoading && results.length > 0 && (
              <div className="space-y-4" role="list" aria-label="Search results">
                {results.map((result, index) => {
                  const badge = getPlatformBadge(result.platform);
                  return (
                    <Link
                      key={result.link}
                      href={result.link}
                      className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-atom_celticblue dark:hover:border-blue-500 hover:shadow-md transition-all group"
                      role="listitem"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-lg font-semibold text-atom_celticblue dark:text-blue-400 group-hover:underline">
                              {highlightText(result.title, query)}
                            </h2>
                            {result.platform && (
                              <span className={`text-xs px-2 py-0.5 rounded font-medium ${badge.bg} ${badge.text}`}>
                                {badge.label}
                              </span>
                            )}
                          </div>
                          {result.description && (
                            <p className="text-atom_dimgray dark:text-gray-400 text-sm line-clamp-2">
                              {highlightText(result.description, query)}
                            </p>
                          )}
                          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                              {result.category || 'Component'}
                            </span>
                            <span>{result.link}</span>
                          </div>
                        </div>
                        <i className="ri-arrow-right-line text-gray-400 group-hover:text-atom_celticblue group-hover:translate-x-1 transition-all" aria-hidden="true"></i>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
