import { Suspense } from 'react'

import { PostHogPageView } from '../posthog-page-view'

// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
export function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}
