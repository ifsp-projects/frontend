import { usePathname, useSearchParams } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'
import type { FC } from 'react'
import { useEffect } from 'react'

/**
 * A headless React component that automatically tracks page views using PostHog.
 * It listens to route changes via Next.js navigation hooks and captures a `$pageview` event
 * with the full, reconstructed URL (including search parameters).
 *
 * @component
 * @returns {null} This component does not render any visible UI.
 */
export const PostHogPageView: FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString()
      }

      posthog.capture('$pageview', { $current_url: url })
    }
  }, [pathname, searchParams, posthog])

  return null
}
