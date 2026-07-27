import React, { useRef } from 'react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { render, renderHook } from 'vitest-browser-react'

import { page } from '@vitest/browser/context'

import { useAutoFocus } from '.'

const TEST_IDS = {
  input: 'test-input',
  div: 'test-div'
} as const

type FocusableTestComponentProps = {
  enabled?: boolean
  element?: 'input' | 'div'
  disabled?: boolean
}

function FocusableTestComponent({
  enabled = true,
  element = 'input',
  disabled = false
}: FocusableTestComponentProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)

  useAutoFocus({
    ref: element === 'div' ? divRef : inputRef,
    enabled
  })

  if (element === 'div') {
    return <div data-testid={TEST_IDS.div} ref={divRef} tabIndex={0} />
  }

  return (
    <input data-testid={TEST_IDS.input} disabled={disabled} ref={inputRef} />
  )
}

const TestHelpers = {
  getInputEl: () =>
    page.getByTestId(TEST_IDS.input).element() as HTMLInputElement,
  getDivEl: () => page.getByTestId(TEST_IDS.div).element() as HTMLDivElement,

  blurActiveElement: () => {
    if (document.activeElement && document.activeElement !== document.body) {
      ;(document.activeElement as HTMLElement).blur()
    }
  },

  createMockRef: <T extends HTMLElement>(element: T | null = null) => ({
    current: element
  })
}

describe('useAutoFocus', () => {
  afterEach(() => {
    TestHelpers.blurActiveElement()
  })

  describe('Basic Focus Behavior', () => {
    describe('when enabled is true (default)', () => {
      it('should focus input element on mount', async () => {
        await render(<FocusableTestComponent />)

        expect(document.activeElement).toBe(TestHelpers.getInputEl())
      })

      it('should focus non-input focusable elements', async () => {
        await render(<FocusableTestComponent element="div" />)

        expect(document.activeElement).toBe(TestHelpers.getDivEl())
      })

      it('should not re-focus the element after mount', async () => {
        const ctx = await render(<FocusableTestComponent />)

        TestHelpers.getInputEl().blur()
        await ctx.rerender(<FocusableTestComponent />)

        expect(document.activeElement).not.toBe(TestHelpers.getInputEl())
      })
    })

    describe('when enabled is false', () => {
      it('should not focus input element on mount', async () => {
        await render(<FocusableTestComponent enabled={false} />)

        expect(document.activeElement).not.toBe(TestHelpers.getInputEl())
      })

      it('should not focus non-input elements', async () => {
        await render(<FocusableTestComponent element="div" enabled={false} />)

        expect(document.activeElement).not.toBe(TestHelpers.getDivEl())
      })
    })
  })

  describe('Ref Handling', () => {
    it('should handle null ref gracefully without throwing', () => {
      const nullRef = TestHelpers.createMockRef(null)

      expect(() => {
        renderHook(() => useAutoFocus({ ref: nullRef, enabled: true }))
      }).not.toThrow()
    })

    it('should maintain focus state across re-renders', async () => {
      const ctx = await render(<FocusableTestComponent enabled={true} />)
      const element = TestHelpers.getInputEl() as HTMLInputElement

      await ctx.rerender(<FocusableTestComponent enabled={true} />)

      expect(document.activeElement).toBe(element)
    })
  })

  describe('Edge Cases and Error Handling', () => {
    let container: HTMLDivElement

    beforeEach(() => {
      container = document.createElement('div')
      document.body.append(container)
    })

    afterEach(() => {
      container?.remove()
    })

    it('should handle disabled form elements gracefully', async () => {
      await render(<FocusableTestComponent disabled={true} />)

      const element = TestHelpers.getInputEl()
      expect(document.activeElement).not.toBe(element)
    })

    it('should handle elements removed from DOM', async () => {
      const element = document.createElement('input')
      container.append(element)
      const ref = TestHelpers.createMockRef(element)

      await renderHook(() =>
        useAutoFocus({
          ref,
          enabled: true
        })
      )

      element.remove()

      expect(() => {
        renderHook(() =>
          useAutoFocus({
            ref,
            enabled: true
          })
        )
      }).not.toThrow()
    })
  })
})
