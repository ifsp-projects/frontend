import { afterEach, beforeEach } from 'node:test'
import { useRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, renderHook } from 'vitest-browser-react'
import { page } from 'vitest/browser'

import { useClickOutside } from '.'

const TEST_IDS = {
  container: 'test-container',
  inside: 'test-inside',
  outside: 'test-outside'
} as const

type TestComponentProps = {
  enabled?: boolean
  onOutsideClick?: () => void
}

function TestComponent({
  enabled = true,
  onOutsideClick = () => {}
}: TestComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useClickOutside({
    ref: containerRef,
    handler: onOutsideClick,
    enabled
  })

  return (
    <div data-testid={TEST_IDS.container} ref={containerRef} tabIndex={0}>
      <div data-testid={TEST_IDS.inside}>Inside</div>
      <div data-testid={TEST_IDS.outside}>Outside</div>
    </div>
  )
}

const TestHelpers = {
  getOutsideEl: () =>
    page.getByTestId(TEST_IDS.outside).element() as HTMLElement,
  createMockRef: <T extends HTMLElement>(element: T | null = null) => ({
    current: element
  }),
  fireMouseDown: (target: EventTarget) => {
    target.dispatchEvent(new MouseEvent('mousedodwn', { bubbles: true }))
  }
}

describe('useClickOutside', () => {
  describe('basic click behavior', () => {
    it('should call handler when clicking outside the element', async () => {
      const handler = vi.fn()

      await render(<TestComponent onOutsideClick={handler} />)

      await page.getByTestId(TEST_IDS.outside).click()

      expect(handler).toHaveBeenCalledOnce()
    })

    it('should not call handler when clicking the ref element itself', async () => {
      const handler = vi.fn()

      await render(<TestComponent onOutsideClick={handler} />)

      await page.getByTestId(TEST_IDS.container).click()

      expect(handler).not.toHaveBeenCalledOnce()
    })

    it('should call handler once per outside click', async () => {
      const handler = vi.fn()

      await render(<TestComponent onOutsideClick={handler} />)

      await page.getByTestId(TEST_IDS.outside).click()
      await page.getByTestId(TEST_IDS.outside).click()

      expect(handler).toHaveBeenCalledTimes(2)
    })
  })

  describe('when enabled is false', () => {
    it('should not call handler when clicking outside the element', async () => {
      const handler = vi.fn()
      await render(<TestComponent enabled={false} onOutsideClick={handler} />)

      await page.getByTestId(TEST_IDS.outside).click()

      expect(handler).not.toHaveBeenCalled()
    })
  })

  describe('ref handling', () => {
    it('should handle a null ref gracelly', () => {
      const nullRef = TestHelpers.createMockRef(null)
      const handler = vi.fn()

      expect(() => {
        renderHook(() => {
          useClickOutside({ ref: nullRef, handler, enabled: true })
        })
      }).not.toThrow()
    })

    it('should not call handler on document click when ref is null', () => {
      const nullRef = TestHelpers.createMockRef(null)
      const handler = vi.fn()

      renderHook(() => {
        useClickOutside({ handler, ref: nullRef, enabled: true })
      })

      TestHelpers.fireMouseDown(document)

      expect(handler).not.toHaveBeenCalled()
    })
  })

  describe('lifefycle', () => {
    it('should stop calling handler after unmount', async () => {
      const handler = vi.fn()
      const ctx = await render(<TestComponent onOutsideClick={handler} />)
      const outsideEl = TestHelpers.getOutsideEl()

      ctx.unmount()

      TestHelpers.fireMouseDown(outsideEl)
      expect(handler).not.toHaveBeenCalled()
    })

    it('should use the latest handler after re-render', async () => {
      const firstHandler = vi.fn()
      const secondHandler = vi.fn()
      const ctx = await render(<TestComponent onOutsideClick={firstHandler} />)

      ctx.rerender(<TestComponent onOutsideClick={secondHandler} />)
      await page.getByTestId(TEST_IDS.outside).click()

      expect(firstHandler).not.toHaveBeenCalled()
      expect(secondHandler).toHaveBeenCalledOnce()
    })

    it('should stop responding when enabled toggles from true to false', async () => {
      const handler = vi.fn()

      const ctx = await render(
        <TestComponent enabled={true} onOutsideClick={handler} />
      )

      await ctx.rerender(
        <TestComponent enabled={false} onOutsideClick={handler} />
      )

      await page.getByTestId(TEST_IDS.outside).click()

      expect(handler).not.toHaveBeenCalled()
    })

    it('should start responding when enabled toggles from false to true', async () => {
      const handler = vi.fn()

      const ctx = await render(
        <TestComponent enabled={false} onOutsideClick={handler} />
      )

      await ctx.rerender(
        <TestComponent enabled={true} onOutsideClick={handler} />
      )

      await page.getByTestId(TEST_IDS.outside).click()

      expect(handler).toHaveBeenCalledOnce()
    })
  })

  describe('edge cases and error handling', () => {
    let container: HTMLDivElement

    beforeEach(() => {
      container = document.createElement('div')
      document.body.append(container)
    })

    afterEach(() => {
      container?.remove()
    })

    it('should not throw error when the ref target is removed from dom', () => {
      const element = document.createElement('div')
      container.append(element)

      const ref = TestHelpers.createMockRef(element)
      const handler = vi.fn()

      renderHook(() => useClickOutside({ handler, ref, enabled: true }))

      element.remove()

      expect(() => {
        TestHelpers.fireMouseDown(document)
      }).not.toThrow()
    })

    it('should only responde to mousedown, not other click events', () => {
      const target = document.createElement('div')
      const outside = document.createElement('div')

      container.append(target, outside)

      const ref = TestHelpers.createMockRef(target)
      const handler = vi.fn()

      renderHook(() => {
        useClickOutside({ ref, handler, enabled: true })
      })

      outside.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      expect(handler).not.toHaveBeenCalled()

      TestHelpers.fireMouseDown(outside)
      expect(handler).toHaveBeenCalledOnce()
    })
  })
})
