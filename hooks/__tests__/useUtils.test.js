/**
 * Unit tests for useUtils hooks
 */
import { renderHook, act, waitFor } from '@testing-library/react';
import {
  useKeyboardShortcuts,
  useLocalStorage,
  useClickOutside,
  useMediaQuery,
  useScrollPosition,
} from '../useUtils';

describe('useLocalStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return initial value when localStorage is empty', () => {
    localStorage.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'));
    
    expect(result.current[0]).toBe('defaultValue');
  });

  it('should return stored value from localStorage', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify('storedValue'));
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'));
    
    expect(result.current[0]).toBe('storedValue');
  });

  it('should update localStorage when setValue is called', () => {
    localStorage.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'initial'));
    
    act(() => {
      result.current[1]('newValue');
    });
    
    expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('newValue'));
    expect(result.current[0]).toBe('newValue');
  });

  it('should handle function updates', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify(5));
    
    const { result } = renderHook(() => useLocalStorage('testKey', 0));
    
    act(() => {
      result.current[1]((prev) => prev + 1);
    });
    
    expect(result.current[0]).toBe(6);
  });

  it('should handle objects', () => {
    localStorage.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() => useLocalStorage('testKey', { a: 1 }));
    
    act(() => {
      result.current[1]({ a: 2, b: 3 });
    });
    
    expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify({ a: 2, b: 3 }));
  });

  it('should handle localStorage errors gracefully', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    localStorage.getItem.mockImplementation(() => {
      throw new Error('Storage error');
    });
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    
    expect(result.current[0]).toBe('default');
    expect(consoleError).toHaveBeenCalled();
    
    consoleError.mockRestore();
  });
});

describe('useMediaQuery', () => {
  it('should return false by default', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    
    expect(result.current).toBe(false);
  });

  it('should update when media query matches', () => {
    const listeners = [];
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      addEventListener: (event, listener) => listeners.push(listener),
      removeEventListener: jest.fn(),
    }));
    
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    
    expect(result.current).toBe(true);
  });
});

describe('useScrollPosition', () => {
  it('should return false when not scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    
    const { result } = renderHook(() => useScrollPosition(100));
    
    expect(result.current).toBe(false);
  });

  it('should return true when scrolled past threshold', async () => {
    Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
    
    const { result } = renderHook(() => useScrollPosition(100));
    
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    
    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});

describe('useClickOutside', () => {
  it('should call callback when clicking outside', () => {
    const callback = jest.fn();
    const ref = { current: document.createElement('div') };
    
    renderHook(() => useClickOutside(ref, callback));
    
    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });
    
    expect(callback).toHaveBeenCalled();
  });

  it('should not call callback when clicking inside', () => {
    const callback = jest.fn();
    const element = document.createElement('div');
    const ref = { current: element };
    
    renderHook(() => useClickOutside(ref, callback));
    
    act(() => {
      element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });
    
    expect(callback).not.toHaveBeenCalled();
  });
});

describe('useKeyboardShortcuts', () => {
  it('should call callback when shortcut key is pressed', () => {
    const callback = jest.fn();
    
    renderHook(() => useKeyboardShortcuts({ k: callback }));
    
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'k' });
      window.dispatchEvent(event);
    });
    
    expect(callback).toHaveBeenCalled();
  });

  it('should call callback with mod+key shortcut', () => {
    const callback = jest.fn();
    
    renderHook(() => useKeyboardShortcuts({ 'mod+k': callback }));
    
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true });
      window.dispatchEvent(event);
    });
    
    expect(callback).toHaveBeenCalled();
  });

  it('should not call callback for wrong key', () => {
    const callback = jest.fn();
    
    renderHook(() => useKeyboardShortcuts({ k: callback }));
    
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'j' });
      window.dispatchEvent(event);
    });
    
    expect(callback).not.toHaveBeenCalled();
  });
});
