/**
 * Unit tests for useCopyLink hook
 */
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCopyLink, useCopyText } from '../useCopyLink';

describe('useCopyLink', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    
    // Mock window.location
    Object.defineProperty(window, 'location', {
      value: {
        origin: 'http://localhost:3000',
        pathname: '/components/buttons',
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize with null copied state', () => {
    const { result } = renderHook(() => useCopyLink());
    
    expect(result.current.copied).toBeNull();
  });

  it('should copy link to clipboard', async () => {
    const { result } = renderHook(() => useCopyLink());
    
    await act(async () => {
      await result.current.copyLink('props');
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'http://localhost:3000/components/buttons#props'
    );
    expect(result.current.copied).toBe('props');
  });

  it('should reset copied state after timeout', async () => {
    const { result } = renderHook(() => useCopyLink());
    
    await act(async () => {
      await result.current.copyLink('demo');
    });
    
    expect(result.current.copied).toBe('demo');
    
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    
    expect(result.current.copied).toBeNull();
  });

  it('should handle multiple copies - only latest is marked', async () => {
    const { result } = renderHook(() => useCopyLink());
    
    await act(async () => {
      await result.current.copyLink('section1');
    });
    
    expect(result.current.copied).toBe('section1');
    
    await act(async () => {
      await result.current.copyLink('section2');
    });
    
    expect(result.current.copied).toBe('section2');
  });

  it('should handle clipboard API error', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    navigator.clipboard.writeText.mockRejectedValueOnce(new Error('Clipboard error'));
    
    const { result } = renderHook(() => useCopyLink());
    
    await act(async () => {
      await result.current.copyLink('section');
    });
    
    expect(consoleError).toHaveBeenCalledWith('Failed to copy link:', expect.any(Error));
    
    consoleError.mockRestore();
  });
});

describe('useCopyText', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize with false copied state', () => {
    const { result } = renderHook(() => useCopyText());
    
    expect(result.current.copied).toBe(false);
  });

  it('should copy text to clipboard', async () => {
    const { result } = renderHook(() => useCopyText());
    
    let success;
    await act(async () => {
      success = await result.current.copyText('Hello World');
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Hello World');
    expect(result.current.copied).toBe(true);
    expect(success).toBe(true);
  });

  it('should reset copied state after timeout', async () => {
    const { result } = renderHook(() => useCopyText());
    
    await act(async () => {
      await result.current.copyText('test');
    });
    
    expect(result.current.copied).toBe(true);
    
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    
    expect(result.current.copied).toBe(false);
  });

  it('should handle copy failure', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    navigator.clipboard.writeText.mockRejectedValueOnce(new Error('Failed'));
    
    const { result } = renderHook(() => useCopyText());
    
    let success;
    await act(async () => {
      success = await result.current.copyText('test');
    });
    
    expect(success).toBe(false);
    expect(result.current.copied).toBe(false);
    
    consoleError.mockRestore();
  });

  it('should copy multiline text', async () => {
    const { result } = renderHook(() => useCopyText());
    const multilineText = `npm install package
yarn add package`;
    
    await act(async () => {
      await result.current.copyText(multilineText);
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(multilineText);
    expect(result.current.copied).toBe(true);
  });

  it('should copy code snippets', async () => {
    const { result } = renderHook(() => useCopyText());
    const code = `const Button = ({ label }) => <button>{label}</button>;`;
    
    await act(async () => {
      await result.current.copyText(code);
    });
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(code);
  });
});
