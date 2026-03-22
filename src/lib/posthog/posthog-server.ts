import { PostHog } from 'posthog-node'

export const posthogServer = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: 'https://us.i.posthog.com'
})
