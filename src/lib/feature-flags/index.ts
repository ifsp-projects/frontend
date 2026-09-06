import PostHogClient from '../posthog'
import { FLAG_TTL_MS, flagCache, pendingCalls } from './constants'

export function clearFlagCache(): void {
  flagCache.clear()
}

export async function isProAccessOverride(userId: string): Promise<boolean> {
  const cacheKey = `posthog-monitoring-test:${userId}`

  const pending = pendingCalls.get(cacheKey)
  if (pending) return pending

  const cached = flagCache.get(cacheKey)
  if (cached && Date.now() < cached.expiresAt) {
    return cached.value
  }

  const promise = (async () => {
    try {
      const posthog = PostHogClient()
      const value = await posthog.isFeatureEnabled(
        'posthog-monitoring-test',
        userId
      )
      posthog.shutdown()

      const result = value === true
      flagCache.set(cacheKey, {
        value: result,
        expiresAt: Date.now() + FLAG_TTL_MS
      })

      return result
    } catch (error) {
      console.error('PostHog feature flag check failed:', error)
      return cached?.value ?? false
    } finally {
      pendingCalls.delete(cacheKey)
    }
  })()

  pendingCalls.set(cacheKey, promise)
  return promise
}
