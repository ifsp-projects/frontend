import { useEffect } from 'react'

/**
 * Locks or unlocks body scroll by setting overflow style on document.body.
 * Useful for preventing background scrolling when modals or drawers are open.
 *
 * @example
 * ```tsx
 * const [isModalOpen, setIsModalOpen] = useState(false);
 * useLockBodyScroll(isModalOpen);
 * ```
 */
export const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [locked])
}
