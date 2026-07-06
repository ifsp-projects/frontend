import type { RefObject } from 'react'
import { useEffect, useMemo, useState } from 'react'

import type { UseIntersectionObserverResult } from './types'

export const useIntersectionObserver = (
  options: IntersectionObserverInit,
  ref: RefObject<HTMLElement>
): UseIntersectionObserverResult => {
  const [isVisible, setVisibility] = useState<boolean>(false)

  let entry: IntersectionObserverEntry | undefined

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [currentEntry] = entries
    entry = currentEntry
    setVisibility(currentEntry.isIntersecting)
  }

  const optionsMemo = useMemo(() => options, [options])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo)
    const currentTarget = ref.current

    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [ref, optionsMemo])

  return { isVisible, entry }
}
