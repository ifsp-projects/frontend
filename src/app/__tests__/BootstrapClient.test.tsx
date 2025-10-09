import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import BootstrapClient from '../BootstrapClient'

describe('BootstrapClient', () => {
  // Mock the dynamic import
  let mockImport: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockImport = vi.fn().mockResolvedValue({})
    vi.stubGlobal('import', mockImport)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('Rendering', () => {
    it('should render without crashing', () => {
      const { container } = render(<BootstrapClient />)
      expect(container).toBeInTheDocument()
    })

    it('should return null (no visible output)', () => {
      const { container } = render(<BootstrapClient />)
      expect(container.firstChild).toBeNull()
    })

    it('should not render any DOM elements', () => {
      const { container } = render(<BootstrapClient />)
      expect(container.innerHTML).toBe('')
    })

    it('should render consistently across multiple instances', () => {
      const { container: container1 } = render(<BootstrapClient />)
      const { container: container2 } = render(<BootstrapClient />)
      expect(container1.innerHTML).toBe(container2.innerHTML)
    })
  })

  describe('Bootstrap Import Behavior', () => {
    it('should dynamically import bootstrap bundle on mount', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledWith(
          'bootstrap/dist/js/bootstrap.bundle.min.js'
        )
      })
    })

    it('should import bootstrap exactly once per component instance', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(1)
      })
    })

    it('should import bootstrap with the correct path', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledWith(
          expect.stringContaining('bootstrap.bundle.min.js')
        )
      })
    })

    it('should trigger import in useEffect', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      const { rerender } = render(<BootstrapClient />)

      // Import should be called after initial render
      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })

      // Rerender should not trigger another import (empty deps array)
      const callCountBefore = importSpy.mock.calls.length
      rerender(<BootstrapClient />)
      expect(importSpy).toHaveBeenCalledTimes(callCountBefore)
    })
  })

  describe('Effect Dependencies', () => {
    it('should only run effect once due to empty dependency array', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      const { rerender } = render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(1)
      })

      // Multiple rerenders should not trigger additional imports
      rerender(<BootstrapClient />)
      rerender(<BootstrapClient />)
      rerender(<BootstrapClient />)

      expect(importSpy).toHaveBeenCalledTimes(1)
    })

    it('should not re-import on prop changes (no props)', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      const { rerender } = render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(1)
      })

      // Rerender with no prop changes
      rerender(<BootstrapClient />)
      expect(importSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('Error Handling', () => {
    it('should handle import errors gracefully', async () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation()
      const importSpy = vi
        .spyOn(global, 'import' as any)
        .mockRejectedValueOnce(new Error('Failed to load bootstrap'))

      expect(() => render(<BootstrapClient />)).not.toThrow()

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })

      consoleErrorSpy.mockRestore()
    })

    it('should not crash when bootstrap is unavailable', async () => {
      vi.spyOn(global, 'import' as any).mockRejectedValueOnce(
        new Error('Module not found')
      )

      const { container } = render(<BootstrapClient />)
      expect(container).toBeInTheDocument()
    })

    it('should handle network errors during import', async () => {
      vi.spyOn(global, 'import' as any).mockRejectedValueOnce(
        new Error('Network error')
      )

      expect(() => render(<BootstrapClient />)).not.toThrow()
    })
  })

  describe('Component Lifecycle', () => {
    it('should cleanup properly on unmount', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      const { unmount } = render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })

      expect(() => unmount()).not.toThrow()
    })

    it('should handle rapid mount and unmount', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)

      const { unmount: unmount1 } = render(<BootstrapClient />)
      unmount1()

      const { unmount: unmount2 } = render(<BootstrapClient />)
      unmount2()

      const { unmount: unmount3 } = render(<BootstrapClient />)
      unmount3()

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })

      expect(importSpy.mock.calls.length).toBeGreaterThan(0)
    })

    it('should handle multiple simultaneous instances', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)

      render(<BootstrapClient />)
      render(<BootstrapClient />)
      render(<BootstrapClient />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })

      // Each instance should trigger its own import
      expect(importSpy).toHaveBeenCalledTimes(3)
    })
  })

  describe('Client-Side Directive', () => {
    it('should be a client component (not throw during render)', () => {
      // If 'use client' is missing, this test would fail in actual Next.js
      expect(() => render(<BootstrapClient />)).not.toThrow()
    })

    it('should work in client-side rendering context', () => {
      const { container } = render(<BootstrapClient />)
      expect(container).toBeTruthy()
    })
  })

  describe('Integration Scenarios', () => {
    it('should work when rendered in a layout', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)

      const Layout = ({ children }: { children: React.ReactNode }) => (
        <div>
          <BootstrapClient />
          {children}
        </div>
      )

      render(<Layout>Content</Layout>)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })
    })

    it('should not interfere with other components', async () => {
      const OtherComponent = () => <div>Other Component</div>

      const { getByText } = render(
        <>
          <BootstrapClient />
          <OtherComponent />
        </>
      )

      expect(getByText('Other Component')).toBeInTheDocument()
    })

    it('should handle being wrapped in React.StrictMode', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)

      render(
        <React.StrictMode>
          <BootstrapClient />
        </React.StrictMode>
      )

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalled()
      })

      // In StrictMode, effects may run twice in development
      expect(importSpy.mock.calls.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Performance Considerations', () => {
    it('should use dynamic import for code splitting', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      render(<BootstrapClient />)

      await waitFor(() => {
        // Verify it's using dynamic import() not require()
        expect(importSpy).toHaveBeenCalledWith(
          expect.stringMatching(/bootstrap.*\.js$/)
        )
      })
    })

    it('should not block initial render', () => {
      const startTime = performance.now()
      render(<BootstrapClient />)
      const endTime = performance.now()

      // Render should be very fast (< 100ms)
      expect(endTime - startTime).toBeLessThan(100)
    })

    it('should load bootstrap asynchronously', async () => {
      let importResolved = false
      vi.spyOn(global, 'import' as any).mockImplementation(async () => {
        await new Promise(resolve => setTimeout(resolve, 10))
        importResolved = true
        return {}
      })

      render(<BootstrapClient />)

      // Import should not be resolved immediately
      expect(importResolved).toBe(false)

      await waitFor(() => {
        expect(importResolved).toBe(true)
      })
    })
  })

  describe('TypeScript Type Safety', () => {
    it('should accept no props', () => {
      // This test verifies the component signature
      expect(() => render(<BootstrapClient />)).not.toThrow()
    })

    it('should be exported as default', () => {
      expect(BootstrapClient).toBeDefined()
      expect(typeof BootstrapClient).toBe('function')
    })
  })

  describe('Edge Cases', () => {
    it('should handle being rendered in a conditional', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      const { rerender } = render(<div>{true && <BootstrapClient />}</div>)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(1)
      })

      rerender(<div>{false && <BootstrapClient />}</div>)
      rerender(<div>{true && <BootstrapClient />}</div>)

      // Should import again when remounted
      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(2)
      })
    })

    it('should handle being rendered in a list', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)

      render(
        <div>
          {[1, 2, 3].map(key => (
            <BootstrapClient key={key} />
          ))}
        </div>
      )

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(3)
      })
    })

    it('should work when parent component updates', async () => {
      const importSpy = vi.spyOn(global, 'import' as any)
      const Parent = ({ count }: { count: number }) => (
        <div>
          <BootstrapClient />
          <span>{count}</span>
        </div>
      )

      const { rerender } = render(<Parent count={0} />)

      await waitFor(() => {
        expect(importSpy).toHaveBeenCalledTimes(1)
      })

      rerender(<Parent count={1} />)
      rerender(<Parent count={2} />)

      // Import should still only be called once
      expect(importSpy).toHaveBeenCalledTimes(1)
    })
  })
})