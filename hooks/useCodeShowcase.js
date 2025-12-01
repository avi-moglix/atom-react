import { useState, useCallback } from 'react';

/**
 * Custom hook for managing code showcase functionality
 * Provides copy code, copy link, and toggle code visibility features
 */
export default function useCodeShowcase() {
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [copyCodeMessage, setCopyCodeMessage] = useState('Click to copy code');
  const [copyLinkMessage, setCopyLinkMessage] = useState('Copy link to clipboard');

  /**
   * Toggle code visibility
   */
  const toggleCode = useCallback(() => {
    setShowCode(prev => !prev);
  }, []);

  /**
   * Copy code from an element by ID
   * @param {string} elementId - The ID of the element containing code
   */
  const copyCodeById = useCallback(async (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    try {
      await navigator.clipboard.writeText(element.innerText);
      setCopyCodeMessage('Copied!');
      setTimeout(() => setCopyCodeMessage('Click to copy code'), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      setCopyCodeMessage('Copy failed');
      setTimeout(() => setCopyCodeMessage('Click to copy code'), 2000);
    }
  }, []);

  /**
   * Copy code from a string
   * @param {string} code - The code string to copy
   */
  const copyCode = useCallback(async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyCodeMessage('Copied!');
      setTimeout(() => setCopyCodeMessage('Click to copy code'), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      setCopyCodeMessage('Copy failed');
      setTimeout(() => setCopyCodeMessage('Click to copy code'), 2000);
    }
  }, []);

  /**
   * Copy the current page link with optional section ID
   * @param {string} sectionId - Optional section ID for deep linking
   */
  const copyLink = useCallback(async (sectionId) => {
    try {
      const url = sectionId 
        ? `${window.location.origin}${window.location.pathname}?scrollTo=${sectionId}`
        : window.location.href;
      await navigator.clipboard.writeText(url);
      setCopyLinkMessage('Link copied!');
      setTimeout(() => setCopyLinkMessage('Copy link to clipboard'), 2000);
    } catch (err) {
      console.error('Copy link failed:', err);
      setCopyLinkMessage('Copy failed');
      setTimeout(() => setCopyLinkMessage('Copy link to clipboard'), 2000);
    }
  }, []);

  /**
   * Reset messages to defaults
   */
  const resetMessages = useCallback(() => {
    setCopyCodeMessage('Click to copy code');
    setCopyLinkMessage('Copy link to clipboard');
  }, []);

  return {
    // State
    showCode,
    activeTab,
    copyCodeMessage,
    copyLinkMessage,
    
    // Actions
    setShowCode,
    setActiveTab,
    toggleCode,
    copyCode,
    copyCodeById,
    copyLink,
    resetMessages,
    setCopyCodeMessage,
    setCopyLinkMessage,
  };
}

/**
 * Helper function to generate code tabs array
 * @param {Object} options - Options object
 * @param {string} options.htmlCode - HTML code string
 * @param {string} options.jsxCode - JSX code string
 * @returns {Array} Array of tab objects
 */
export function createCodeTabs({ htmlCode, jsxCode }) {
  const tabs = [];
  if (htmlCode) tabs.push({ name: 'HTML', content: htmlCode });
  if (jsxCode) tabs.push({ name: 'JSX', content: jsxCode });
  return tabs;
}

/**
 * Utility function to join class names
 * @param  {...string} classes - Class names to join
 * @returns {string} Joined class names
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
