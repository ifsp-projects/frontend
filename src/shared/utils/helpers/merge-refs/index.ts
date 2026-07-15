import type { RefAttributes, RefCallback, RefObject } from 'react'

export function mergeRefs<T = unknown>(
  refs: Array<RefObject<T> | RefAttributes<T>['ref'] | undefined | null>
): RefCallback<T> {
  return value => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref !== null) {
        ;(ref as RefObject<T | null>).current = value
      }
    }
  }
}
