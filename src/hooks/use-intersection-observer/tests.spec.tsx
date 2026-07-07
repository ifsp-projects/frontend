import { useEffect, useRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { beforeEach } from 'vitest'
import { render, renderHook } from 'vitest-browser-react'
import { page } from 'vitest/browser'

import { useIntersectionObserver } from '.'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []

  readonly root: Element | Document | null
  readonly rootMargin: string
  readonly thresholds: ReadonlyArray<number>

  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit

  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn((): IntersectionObserverEntry[] => [])

  constructor(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit
  ) {
    this.callback = callback
    this.options = options
    this.root = options?.root ?? null
    this.rootMargin = options?.rootMargin ?? '0px'
    this.thresholds = Array.isArray(options?.threshold)
      ? options?.threshold
      : [options.threshold ?? 0]

    MockIntersectionObserver.instances.push(this)
  }

  triggerEntries(entries: Array<{ target: Element; isIntersecting: boolean }>) {
    const mockEntries = entries.map(
      ({ target, isIntersecting }) =>
        ({
          isIntersecting,
          target,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: target.getBoundingClientRect(),
          intersectionRect: target.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now()
        }) as IntersectionObserverEntry
    )

    this.callback(mockEntries, this as unknown as IntersectionObserver)
  }

  trigger(target: Element, isIntersecting: boolean) {
    this.triggerEntries([{ target, isIntersecting }])
  }
}

const TEST_IDS = {
  target: 'test-target',
  status: 'test-status'
} as const

type ObserverResult = {
  options?: IntersectionObserverInit
  onRender?: (result: ObserverResult) => void
}

type TestComponentProps = {
  options?: IntersectionObserverInit
  onRender?: (result: ObserverResult) => void
}

function TestComponent({ options = {}, onRender }: TestComponentProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const result = useIntersectionObserver(options, ref)

  useEffect(() => {
    // @ts-expect-error
    onRender?.result
  }, [])

  return (
    <div data-testid={TEST_IDS.target} ref={ref}>
      <div data-testid={TEST_IDS.status}>
        {result.isVisible ? 'visible' : 'hidden'}
      </div>
    </div>
  )
}

function NoRefTargetComponent({
  options = {}
}: {
  options?: IntersectionObserverInit
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useIntersectionObserver(options, ref)

  // Intentionally never attached via `ref={ref}` -> ref.current stays null
  return <div data-testid={TEST_IDS.target} />
}

const TestHelpers = {
  getTargetEl: () =>
    page.getByTestId(TEST_IDS.target).element() as HTMLDivElement,
  getLatestObserver: () => {
    const { instances } = MockIntersectionObserver
    return instances[instances.length - 1]
  },
  createMockRef: <T extends HTMLElement>(element: T | null) => ({
    current: element
  })
}

describe('useIntersectionObserver', () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = []
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('observer setup', () => {
    it('should create and intersection observer instance on mount', async () => {
      await render(<TestComponent />)

      expect(MockIntersectionObserver.instances).toHaveLength(1)
    })

    it('should call observe with the target element on mount', async () => {
      await render(<TestComponent />)
      const observer = TestHelpers.getLatestObserver()

      expect(observer.observe).toHaveBeenCalledWith(TestHelpers.getTargetEl)
    })

    it('should forward the provided options to the insersection observer constructor', async () => {
      const options = { threshold: 0.5, rootMargin: '10px' }
      await render(<TestComponent options={options} />)
      const observer = TestHelpers.getLatestObserver()

      expect(observer.options).toEqual(options)
    })

    it('should not call observe when ref.current is null', async () => {
      await render(<NoRefTargetComponent />)

      const observer = TestHelpers.getLatestObserver()

      expect(observer.observe).not.toHaveBeenCalled()
    })
  })

  describe('intersection state updates', () => {
    it('should initialize isVisible as false before any intersection event', async () => {
      await render(<TestComponent />)

      await expect
        .element(page.getByTestId(TEST_IDS.status))
        .toHaveTextContent('hidden')
    })

    it('should set is visible to true when the observer reports is intersecting: true', async () => {
      await render(<TestComponent />)

      const observer = TestHelpers.getLatestObserver()

      observer.trigger(TestHelpers.getTargetEl(), true)

      await expect
        .element(page.getByTestId(TEST_IDS.status))
        .toHaveTextContent('visible')
    })

    it('should set isVisible back to false on a subsequent non-intersecting entry', async () => {
      await render(<TestComponent />)
      const observer = TestHelpers.getLatestObserver()
      const target = TestHelpers.getTargetEl()

      observer.trigger(target, true)

      await expect
        .element(page.getByTestId(TEST_IDS.status))
        .toHaveTextContent('visible')

      observer.trigger(target, false)
      await expect
        .element(page.getByTestId(TEST_IDS.status))
        .toHaveTextContent('hidden')
    })

    it('should only use the first entry when multiple entries arrive at once', async () => {
      await render(<TestComponent />)

      const observer = TestHelpers.getLatestObserver()
      const target = TestHelpers.getTargetEl()
      const unrelatedEl = document.createElement('div')

      observer.triggerEntries([
        {
          target,
          isIntersecting: true
        },
        { target: unrelatedEl, isIntersecting: false }
      ])

      await expect
        .element(page.getByTestId(TEST_IDS.status))
        .toHaveTextContent('visible')
    })
  })

  describe('lifecycle', async () => {
    it('should call unobserve with the target element on unmount', async () => {
      const ctx = await render(<TestComponent />)
      const observer = TestHelpers.getLatestObserver()
      const target = TestHelpers.getTargetEl()

      ctx.unmount()

      expect(observer.unobserve).toHaveBeenCalledWith(target)
    })

    it('should not create a new observer when options keep the same reference', async () => {
      const ctx = await render(<TestComponent options={{ threshold: 0 }} />)
      const observer = TestHelpers.getLatestObserver()
      const target = TestHelpers.getTargetEl()

      await ctx.rerender(<TestComponent options={{ threshold: 0.5 }} />)

      expect(MockIntersectionObserver.instances).toHaveLength(2)
      expect(observer.unobserve).toHaveBeenCalledWith(target)
    })

    it('should not create a new observer when the options keep the same reference', async () => {
      const stableOptions = { threshold: 0.5 }
      const ctx = await render(<TestComponent options={stableOptions} />)

      await ctx.rerender(<TestComponent options={stableOptions} />)

      expect(MockIntersectionObserver.instances).toHaveLength(1)
    })
  })

  describe('ref handling', () => {
    it('should handle a null ref gracefully without throwing', () => {
      const nullRef = TestHelpers.createMockRef(null)

      expect(() => {
        renderHook(() => useIntersectionObserver({}, nullRef))
      }).not.toThrow()
    })

    it('should not call observe when given a ref that current is null', async () => {
      const nullRef = TestHelpers.createMockRef(null)

      renderHook(() => useIntersectionObserver({}, nullRef))
      const observer = TestHelpers.getLatestObserver()

      expect(observer.observe).not.toHaveBeenCalled()
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

    it('should not throw when the target element is removed from the DOM before unmounted', async () => {
      const element = document.createElement('div')
      container.append(element)
      const ref = TestHelpers.createMockRef(element)

      const { unmount } = await renderHook(() =>
        useIntersectionObserver({}, ref)
      )

      element.remove()

      expect(() => unmount()).not.toThrow()
    })

    it('should create independent observer instances for multiple components', async () => {
      await render(
        <>
          <TestComponent />
          <TestComponent />
        </>
      )

      expect(MockIntersectionObserver.instances).toHaveLength(2)
    })
  })
})
