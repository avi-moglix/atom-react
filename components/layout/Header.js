import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { searchData, getPlatformBadge } from "@/data/searchData";
import { ThemeToggle } from "@/context/ThemeContext";
import { useClickOutside } from "@/hooks/useUtils";

// Simple fuzzy search implementation
function fuzzySearch(items, query) {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  
  return items
    .map(item => {
      const titleLower = item.title.toLowerCase();
      const descLower = (item.description || '').toLowerCase();
      
      let score = 0;
      searchTerms.forEach(term => {
        if (titleLower.includes(term)) score += 10;
        if (titleLower.startsWith(term)) score += 5;
        if (descLower.includes(term)) score += 3;
      });
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

export default function Header({ onMenuToggle }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useClickOutside(searchRef, () => {
    setShowDropdown(false);
    setSelectedIndex(-1);
  });

  const handleSearch = useCallback((searchQuery) => {
    setQuery(searchQuery);
    setSelectedIndex(-1);
    
    if (searchQuery.trim() === '') {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = fuzzySearch(searchData, searchQuery);
    setFilteredResults(filtered);
    setShowDropdown(true);
  }, []);

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

  const handleResultSelect = (result) => {
    router.push(result.link);
    setShowDropdown(false);
    setQuery('');
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || filteredResults.length === 0) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && filteredResults[selectedIndex]) {
          handleResultSelect(filteredResults[selectedIndex]);
        } else if (query.trim()) {
          router.push(`/search?q=${encodeURIComponent(query)}`);
          setShowDropdown(false);
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowDropdown(false);
    }
  };

  // Platform-specific shortcut hint
  const [shortcutHint, setShortcutHint] = useState('Ctrl+K');
  useEffect(() => {
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
      setShortcutHint('⌘K');
    }
  }, []);

  return (
    <header role="banner">
      <nav 
        className="fixed top-0 w-full h-[var(--header-height)] bg-gradient-to-r from-[#1a1a2e] to-[#16213e] z-[1000] flex items-center justify-between px-4 lg:px-5 transition-colors duration-300 shadow-md"
        aria-label="Main navigation"
      >
        <div className="flex flex-wrap items-center justify-between w-full gap-2">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
          >
            <i className="ri-menu-line text-xl" aria-hidden="true"></i>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center rtl:space-x-reverse lg:mr-[50px]" aria-label="Atom Design Home">
              <img 
                alt="Atom Design Logo" 
                loading="lazy" 
                width="122" 
                height="28" 
                decoding="async"
                src="/images/logo"
                style={{ color: 'transparent' }}
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center flex-1 justify-end lg:justify-center">
            <div className="w-full max-w-[300px] lg:max-w-[400px] mx-2 lg:mx-4 relative" ref={searchRef}>
              <form onSubmit={handleSubmit} role="search" className="relative w-full">
                <label htmlFor="search-input" className="sr-only">Search components</label>
                <input
                  ref={inputRef}
                  id="search-input"
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => query && setShowDropdown(true)}
                  placeholder="Search components..."
                  className="w-full pl-10 pr-16 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-atom_celticblue bg-white/10 border-white/20 text-white placeholder-gray-400 text-sm"
                  aria-autocomplete="list"
                  aria-controls="search-results"
                  aria-expanded={showDropdown}
                  autoComplete="off"
                />
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true"></i>
                <kbd className="hidden sm:inline-flex absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/20">
                  {shortcutHint}
                </kbd>
                
                {/* Search Results Dropdown */}
                {showDropdown && (
                  <div 
                    id="search-results"
                    role="listbox"
                    className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
                  >
                    {filteredResults.length > 0 ? (
                      <>
                        <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
                          {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                        </div>
                        {filteredResults.map((result, index) => (
                          <div
                            key={result.link}
                            role="option"
                            aria-selected={index === selectedIndex}
                            className={`p-3 cursor-pointer border-b last:border-b-0 dark:border-gray-700 transition-colors ${
                              index === selectedIndex 
                                ? 'bg-atom_aliceblue dark:bg-gray-700' 
                                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                            onClick={() => handleResultSelect(result)}
                            onMouseEnter={() => setSelectedIndex(index)}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-atom_celticblue dark:text-blue-400 text-sm">
                                {highlightText(result.title, query)}
                              </span>
                              {result.platform && (
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${getPlatformBadge(result.platform).bg} ${getPlatformBadge(result.platform).text}`}>
                                  {getPlatformBadge(result.platform).label}
                                </span>
                              )}
                            </div>
                            {result.description && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                                {highlightText(result.description, query)}
                              </div>
                            )}
                          </div>
                        ))}
                      </>
                    ) : query && (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                        <i className="ri-search-line text-2xl mb-2 block" aria-hidden="true"></i>
                        No results for "{query}"
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Right side links */}
            <div className="flex items-center gap-1 lg:gap-3">
              <ThemeToggle />
              
              {/* NPM Link */}
              <a 
                href="https://www.npmjs.com/~avi-moglix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-white/10"
                aria-label="View npm packages (opens in new tab)"
              >
                <i className="ri-npmjs-fill text-xl" aria-hidden="true"></i>
                <span className="hidden lg:inline">npm</span>
              </a>

              {/* GitHub Link */}
              {/* <a 
                href="https://github.com/avi-moglix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm p-2 rounded-lg hover:bg-white/10"
                aria-label="View GitHub profile (opens in new tab)"
              >
                <i className="ri-github-fill text-xl" aria-hidden="true"></i>
                <span className="hidden lg:inline">GitHub</span>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onMenuToggle: PropTypes.func,
};
