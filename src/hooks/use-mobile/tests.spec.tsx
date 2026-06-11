import { afterEach, describe, expect, it, vi } from 'vitest'

import { act, renderHook } from '@testing-library/react'

import { useIsMobile } from '.'

function setupMatchMedia(innerWidth: number) {
  let changeListener: (() => void) | null = null

  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: innerWidth
  })

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: vi.fn((query: string) => ({
      matches: innerWidth < 768,
      media: query,
      addEventListener: vi.fn((event: string, handler: () => void) => {
        if (event === 'change') changeListener = handler
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  })

  // Simulates a real resize: updates innerWidth and fires the 'change' event
  const resize = (newWidth: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: newWidth
    })
    changeListener?.()
  }

  return { resize }
}

describe('useIsMobile', () => {
  afterEach(() => vi.clearAllMocks())

  it('returns false on desktop (≥ 768px)', () => {
    setupMatchMedia(1280)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('returns true on mobile (< 768px)', () => {
    setupMatchMedia(375)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('returns false exactly at the breakpoint boundary (768px)', () => {
    setupMatchMedia(768)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('updates from desktop → mobile on resize', () => {
    const { resize } = setupMatchMedia(1280)
    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)

    act(() => resize(375))

    expect(result.current).toBe(true)
  })

  it('updates from mobile → desktop on resize', () => {
    const { resize } = setupMatchMedia(375)
    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(true)

    act(() => resize(1280))

    expect(result.current).toBe(false)
  })

  it('removes the event listener on unmount', () => {
    const removeEventListener = vi.fn()

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener,
        dispatchEvent: vi.fn()
      }))
    })

    const { unmount } = renderHook(() => useIsMobile())
    unmount()

    expect(removeEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    )
  })
})
