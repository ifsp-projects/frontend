import { useEffect } from 'react'

/**
 * Locks or unlocks body scroll by setting overflow style on document.body.
 * Useful for preventing background scrolling when modals or drawers are open.
 *
 * @param {boolean} isOpen - When true, locks body scroll; when false, unlocks it.
 *
 * @example
 * ```tsx
 * const [isModalOpen, setIsModalOpen] = useState(false);
 * useLockBodyScroll(isModalOpen);
 * ```
 */
export const useLockBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])
}
