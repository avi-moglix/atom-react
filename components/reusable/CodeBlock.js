import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

// Simple syntax highlighting for JSX/JavaScript
function highlightCode(code, language) {
  if (!code || typeof code !== 'string') return '';
  
  // Escape HTML entities first
  let highlighted = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  if (language === 'bash' || language === 'shell') {
    // Highlight bash commands
    highlighted = highlighted
      .replace(/\b(npm|yarn|npx)\b/g, '<span class="text-green-400">$1</span>')
      .replace(/\b(install|add|run|build|start|i)\b/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(@[\w-]+\/[\w-]+)/g, '<span class="text-cyan-300">$1</span>')
      .replace(/([\w-]+@[\d.^~>=<]+)/g, '<span class="text-cyan-300">$1</span>');
  } else {
    // JSX/JavaScript highlighting - order matters!
    
    // First, handle comments (before other replacements can break them)
    highlighted = highlighted
      .replace(/(\/\/[^\n]*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500">$1</span>');
    
    // Strings (handle escaped quotes properly)
    highlighted = highlighted
      .replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;)/g, '<span class="text-green-300">$1</span>')
      .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="text-green-300">$1</span>')
      .replace(/(`(?:[^`\\]|\\.)*`)/g, '<span class="text-green-300">$1</span>');
    
    // Template literal interpolations
    highlighted = highlighted
      .replace(/(\$\{[^}]+\})/g, '<span class="text-yellow-200">$1</span>');
    
    // Keywords
    highlighted = highlighted
      .replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|new|this|async|await|try|catch|throw|default|switch|case|break|continue)\b/g, '<span class="text-purple-400">$1</span>');
    
    // React/JSX specific hooks and methods
    highlighted = highlighted
      .replace(/\b(React|useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer|useLayoutEffect)\b/g, '<span class="text-cyan-300">$1</span>');
    
    // Boolean, null, undefined
    highlighted = highlighted
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-300">$1</span>');
    
    // Numbers (but not inside already highlighted spans)
    highlighted = highlighted
      .replace(/(?<!["\w])(\d+\.?\d*)(?!["\w])/g, '<span class="text-orange-300">$1</span>');
    
    // JSX components (capitalized tags)
    highlighted = highlighted
      .replace(/(&lt;\/?)([A-Z][a-zA-Z0-9]*)/g, '$1<span class="text-cyan-400">$2</span>');
    
    // HTML/JSX tags (lowercase)
    highlighted = highlighted
      .replace(/(&lt;\/?)(\b(?:div|span|button|input|form|img|a|p|h[1-6]|ul|ol|li|table|tr|td|th|thead|tbody|section|article|header|footer|nav|main|aside|View|Text|TouchableOpacity|Pressable|Image|ScrollView|FlatList|TextInput)\b)/gi, '$1<span class="text-blue-400">$2</span>');
    
    // JSX attributes (word followed by =)
    highlighted = highlighted
      .replace(/\s(\w+)(=)/g, ' <span class="text-yellow-200">$1</span>$2');
    
    // Arrow functions
    highlighted = highlighted
      .replace(/=&gt;/g, '<span class="text-purple-400">=&gt;</span>');
    
    // Function calls
    highlighted = highlighted
      .replace(/\b([a-z][a-zA-Z0-9]*)\s*\(/g, '<span class="text-blue-300">$1</span>(');
  }
  
  return highlighted;
}

/**
 * ComponentShowcase - Improved wrapper for displaying components with code
 * Features: tabs for HTML/JSX, copy functionality, link sharing, syntax highlighting
 */
export function ComponentShowcase({ 
  title, 
  id,
  htmlCode, 
  jsxCode,
  description,
  children 
}) {
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [copyMessage, setCopyMessage] = useState('Copy code');
  const [linkMessage, setLinkMessage] = useState('Copy link');

  const tabs = [
    ...(htmlCode ? [{ name: 'HTML', code: htmlCode }] : []),
    ...(jsxCode ? [{ name: 'JSX', code: jsxCode }] : []),
  ];

  // If only one type of code provided
  if (tabs.length === 0 && (htmlCode || jsxCode)) {
    tabs.push({ name: 'Code', code: htmlCode || jsxCode });
  }

  const currentCode = tabs[activeTab]?.code || '';
  const highlightedCode = useMemo(() => highlightCode(currentCode, 'jsx'), [currentCode]);
  const lineCount = currentCode ? currentCode.split('\n').length : 0;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopyMessage('Copied!');
      setTimeout(() => setCopyMessage('Copy code'), 2000);
    } catch (err) {
      setCopyMessage('Failed');
      setTimeout(() => setCopyMessage('Copy code'), 2000);
    }
  };

  const handleCopyLink = async () => {
    try {
      const url = id 
        ? `${window.location.origin}${window.location.pathname}?scrollTo=${id}` 
        : window.location.href;
      await navigator.clipboard.writeText(url);
      setLinkMessage('Copied!');
      setTimeout(() => setLinkMessage('Copy link'), 2000);
    } catch (err) {
      setLinkMessage('Failed');
      setTimeout(() => setLinkMessage('Copy link'), 2000);
    }
  };

  return (
    <div 
      id={id}
      className="border border-atom_silver dark:border-gray-700 rounded-lg overflow-hidden mb-5 bg-white dark:bg-gray-800"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-atom_onxyblack dark:text-white">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-atom_dimgray dark:text-gray-400 mt-1">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-1">
          {/* Copy Link */}
          <Tooltip message={linkMessage}>
            <button
              onClick={handleCopyLink}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
              aria-label="Copy link to this section"
            >
              <i className={`text-lg ${linkMessage === 'Copied!' ? 'ri-check-line text-green-500' : 'ri-link'}`}></i>
            </button>
          </Tooltip>
          
          {/* View Code Toggle */}
          {tabs.length > 0 && (
            <Tooltip message={showCode ? 'Hide code' : 'View code'}>
              <button
                onClick={() => setShowCode(!showCode)}
                className={`p-2.5 rounded-full transition-colors ${
                  showCode 
                    ? 'bg-atom_rojored text-white hover:bg-atom_indianred' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
                aria-label={showCode ? 'Hide code' : 'View code'}
              >
                <i className={`text-lg ${showCode ? 'ri-code-s-slash-line' : 'ri-code-line'}`}></i>
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Code Panel */}
      {showCode && (
        <div className="border-b border-gray-200 dark:border-gray-700">
          {/* Tabs */}
          {tabs.length > 1 && (
            <div className="bg-gray-100 dark:bg-gray-900 flex border-b border-gray-200 dark:border-gray-700">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
                    index === activeTab
                      ? 'text-atom_rojored dark:text-red-400 bg-white dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.name}
                  {index === activeTab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-atom_rojored"></span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Code Content */}
          <div className="relative group bg-[#1e1e1e]">
            {/* Line Numbers */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#252526] flex flex-col items-end pr-3 pt-4 text-[#858585] text-xs font-mono select-none border-r border-[#3c3c3c]">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="leading-6 h-6">{i + 1}</div>
              ))}
            </div>
            
            <pre className="bg-[#1e1e1e] p-4 pl-16 pr-16 overflow-x-auto max-h-[500px] overflow-y-auto text-sm m-0">
              <code 
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
                className="leading-6 font-mono text-[#d4d4d4] block whitespace-pre"
              />
            </pre>

            {/* Copy Button - Always visible */}
            <div className="absolute top-3 right-3">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 bg-[#3c3c3c] hover:bg-[#505050] text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors border border-[#5a5a5a]"
              >
                <i className={`${copyMessage === 'Copied!' ? 'ri-check-line text-green-400' : 'ri-file-copy-line'}`}></i>
                {copyMessage}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Component Preview */}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}

ComponentShowcase.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  htmlCode: PropTypes.string,
  jsxCode: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * CodeBlock Component
 * Displays code with syntax highlighting and copy functionality
 */
export default function CodeBlock({ code, language = 'jsx', title = '' }) {
  const [copied, setCopied] = useState(false);

  // Early return if no code
  if (!code || typeof code !== 'string') {
    return null;
  }

  const highlightedCode = useMemo(() => highlightCode(code, language), [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lines = code.split('\n');
  const lineNumbers = lines.length;

  return (
    <div className="code-block relative group">
      {title && (
        <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 text-gray-400 text-xs font-medium border-b border-gray-700 flex items-center justify-between rounded-t-lg">
          <span className="flex items-center gap-2">
            <i className="ri-file-code-line" aria-hidden="true"></i>
            {title}
          </span>
          <span className="text-gray-500 uppercase text-[10px] font-mono">{language}</span>
        </div>
      )}
      <div className="relative">
        {/* Line numbers */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-10 bg-gray-900/50 flex flex-col items-end pr-2 pt-4 text-gray-600 text-xs font-mono select-none border-r border-gray-700/50" 
          aria-hidden="true"
        >
          {Array.from({ length: lineNumbers }, (_, i) => (
            <div key={i} className="leading-6 h-6">{i + 1}</div>
          ))}
        </div>
        
        <pre className="!pl-14 !pr-12 !m-0">
          <code 
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            className="leading-6"
          />
        </pre>
        
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Tooltip message={copied ? "Copied!" : "Copy code"}>
            <button
              onClick={handleCopy}
              className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors text-white"
              aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
            >
              <i className={copied ? "ri-check-line text-green-400" : "ri-file-copy-line"} aria-hidden="true"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  title: PropTypes.string,
};
