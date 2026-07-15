import { useEffect } from 'react'

import type { UseClickOutsideProps } from './types'

export const useClickOutside = <T extends HTMLElement>({
  ref,
  handler,
  enabled = true
}: UseClickOutsideProps<T>) => {
  useEffect(() => {
    if (!enabled) return

    const listener = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', listener)
    return () => document.removeEventListener('mousedown', listener)
  }, [ref, handler, enabled])
}
