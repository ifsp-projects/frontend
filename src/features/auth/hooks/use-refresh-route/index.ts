import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import type { UseRefreshRouteProps } from './types'

/**
 * A custom hook to refresh the current Next.js App Router route.
 * It triggers a server-side data re-fetch (`router.refresh()`), optionally scrolls
 * smoothly to the top of the page, and executes an optional callback afterward.
 *
 * @param {UseRefreshRouteProps} props - Configuration options for the hook.
 * @param {() => void} [props.onRefresh] - An optional callback function executed after the refresh state is triggered.
 * @param {boolean} [props.scroll=true] - Determines whether to smoothly scroll to the top of the window when refreshing. Defaults to `true`.
 *
 * @returns {{ refreshRoute: () => Promise<void> }} An object containing the `refreshRoute` function to trigger the action.
 *
 * @example
 * ```tsx
 * const { refreshRoute } = useRefreshRoute({
 * scroll: true,
 * onRefresh: () => toast.success('Data updated!')
 * })
 * * const handleFormSubmit = async () => {
 * await submitData()
 * refreshRoute() // Refreshes server components and scrolls to top
 * }
 * ```
 */
const useRefreshRoute = ({
  onRefresh,
  scroll = true
}: UseRefreshRouteProps) => {
  const router = useRouter()
  const [refreshed, setRefreshed] = useState(false)

  const refreshRoute = useCallback(async () => {
    router.refresh()

    if (scroll) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    setRefreshed(true)
  }, [router, scroll])

  useEffect(() => {
    if (refreshed && onRefresh) {
      onRefresh()
      setRefreshed(false)
    }
  }, [refreshed, onRefresh])

  return { refreshRoute }
}

export default useRefreshRoute
