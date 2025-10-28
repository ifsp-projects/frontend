// Wrap PostHogPageView in Suspense to avoid the useSearchParams usage above
// from de-opting the whole app into client-side rendering

import { Suspense } from 'react'

import { PostHogPageView } from '../PosthogPageView'

// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
export function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}
