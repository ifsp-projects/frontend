import posthog from 'posthog-js'

import { normalizeEventProperties } from '../../util'
import type { PostHogEvents, PostHogEventsNames } from './types'

export interface PosthogGroupOptions {
  orgId: string
  orgProperties?: {
    orgName?: string
    ongType?: string
    pagesCount?: number
    totalLpViews?: number
    totalLeads?: number
    hubListingActive?: boolean
    city?: string
  }
}

export class Posthog {
  /**
   * Tracks a typed PostHog event.
   *
   * Side effects (in order):
   *  1. If `eventProperties` contains an `email` that differs from the
   *     current distinct_id, calls `posthog.identify()` so the user is
   *     linked to their account.
   *  2. If `group` is provided, calls `posthog.group('organization', orgId)`
   *     so the event is attributed to the correct org in Group Analytics.
   *  3. Captures the prefixed event with normalized properties.
   */
  public track<T extends PostHogEventsNames>(
    eventName: T,
    eventProperties?: PostHogEvents[T],
    options?: {
      /**
       * Prefix prepended to every event name.
       * @default 'app_'
       */
      prefix?: string
      group?: PosthogGroupOptions
    }
  ): void {
    const shouldIdentify =
      eventProperties &&
      'email' in eventProperties &&
      typeof eventProperties.email === 'string' &&
      eventProperties.email !== posthog.get_distinct_id()

    if (shouldIdentify) {
      const { email, ...additionalProperties } =
        eventProperties as typeof eventProperties & {
          email: string
        }

      const domain = email.split('@')[1]

      posthog.identify(email, {
        ...additionalProperties,
        domain
      })
    }

    const group = options?.group
    if (group) {
      posthog.group('organization', group.orgId, group.orgProperties ?? {})
    }

    const normalizedProperties = eventProperties
      ? normalizeEventProperties(eventProperties)
      : {}

    const prefix = options?.prefix ?? 'app_'
    const prefixedEventName = `${prefix}${eventName}`

    posthog.capture(prefixedEventName, normalizedProperties)
  }

  /**
   * Explicitly sets (or updates) the current user's identity and traits.
   * Call this after login or whenever user data changes.
   */
  public identify(
    email: string,
    traits?: {
      ongType?: string
      city?: string
      pagesPublishedCount?: number
      signedUpAt?: string
      lastPublishedAt?: string
      aiMessagesTotal?: number
      // isVerifiedOng?: boolean
      referralSource?: string
    }
  ): void {
    const domain = email.split('@')[1]
    posthog.identify(email, { domain, ...traits })
  }

  /**
   * Updates the organization group properties without capturing an event.
   * Useful on dashboard load to keep group data fresh.
   */
  public setOrgGroup(
    orgId: string,
    properties: PosthogGroupOptions['orgProperties']
  ): void {
    posthog.group('organization', orgId, properties ?? {})
  }

  /**
   * Resets identity on logout. Clears the distinct_id so the next
   * anonymous session starts fresh.
   */
  public reset(): void {
    posthog.reset()
  }
}
