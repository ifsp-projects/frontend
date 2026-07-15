import type { useIntersectionObserver } from '.'

export type IntersectionObserverProps = typeof useIntersectionObserver

export type IntersectionObserverEntry = {
  isIntersecting: boolean
}

export type UseIntersectionObserverResult = {
  isVisible: boolean
  entry?: IntersectionObserverEntry
}
