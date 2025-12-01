import { useState, useCallback } from 'react';

/**
 * Custom hook for copying section links to clipboard
 * @returns {Object} { copyLink, copied }
 */
export function useCopyLink() {
  const [copied, setCopied] = useState(null);

  const copyLink = useCallback(async (sectionId) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
      await navigator.clipboard.writeText(url);
      setCopied(sectionId);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  }, []);

  return { copyLink, copied };
}

/**
 * Custom hook for copying text to clipboard
 * @returns {Object} { copyText, copied }
 */
export function useCopyText() {
  const [copied, setCopied] = useState(false);

  const copyText = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy text:', err);
      return false;
    }
  }, []);

  return { copyText, copied };
}
