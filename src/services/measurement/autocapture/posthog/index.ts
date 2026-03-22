import { normalizeEventProperty } from '../../util'
import type { EventTracking } from '../types'

type PosthogAutocaptureAttributes = Record<
  `data-ph-capture-attribute-${string}`,
  string
>

/**
 * @see https://posthog.com/docs/product-analytics/autocapture
 */
export class PosthogAutocapture {
  public mapEventTrackingToAttributes(
    eventTracking: EventTracking
  ): PosthogAutocaptureAttributes {
    return Object.entries(eventTracking).reduce((acc, [key, value]) => {
      const normalizedKey = normalizeEventProperty(key)
      acc[`data-ph-capture-attribute-${normalizedKey}`] = value
      return acc
    }, {})
  }
}
