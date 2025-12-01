import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

/**
 * InstallBanner Component
 * Shows npm/yarn install commands with copy functionality
 * Implements proper ARIA tabs pattern for accessibility
 */
export default function InstallBanner({ packageName }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('npm');

  const commands = {
    npm: `npm install ${packageName}`,
    yarn: `yarn add ${packageName}`,
    pnpm: `pnpm add ${packageName}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commands[activeTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleKeyDown = (e, tab) => {
    const tabs = Object.keys(commands);
    const currentIndex = tabs.indexOf(tab);
    
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
      document.getElementById(`tab-${tabs[nextIndex]}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
      document.getElementById(`tab-${tabs[prevIndex]}`)?.focus();
    }
  };

  return (
    <div className="install-banner mb-6" role="region" aria-label="Installation command">
      <div className="flex items-center gap-4">
        <div 
          className="flex bg-white/10 rounded-md overflow-hidden"
          role="tablist"
          aria-label="Package manager"
        >
          {Object.keys(commands).map((tab) => (
            <button
              key={tab}
              id={`tab-${tab}`}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
              tabIndex={activeTab === tab ? 0 : -1}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-atom_rojored text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(e) => handleKeyDown(e, tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <code 
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="flex-1"
        >
          {commands[activeTab]}
        </code>
      </div>
      <Tooltip message={copied ? "Copied!" : "Copy to clipboard"}>
        <button 
          className="copy-btn flex items-center gap-2" 
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy installation command"}
        >
          <i className={copied ? "ri-check-line" : "ri-file-copy-line"} aria-hidden="true"></i>
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </Tooltip>
    </div>
  );
}

InstallBanner.propTypes = {
  packageName: PropTypes.string.isRequired,
};
