import { useLayoutEffect } from 'react'
import { useIsMounted } from 'usehooks-ts'

type UseAutoFocusProps = {
  ref: React.MutableRefObject<HTMLElement | null>
  enabled?: boolean
}

export function useAutoFocus({ ref, enabled = true }: UseAutoFocusProps) {
  const isMounted = useIsMounted()

  useLayoutEffect(() => {
    if (!enabled || isMounted()) return

    ref.current?.focus()
  }, [ref, enabled, isMounted])
}
