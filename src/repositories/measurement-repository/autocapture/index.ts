import { PosthogAutocapture } from './posthog'
import type { EventTracking } from './types'

export class Autocapture {
  private posthog: PosthogAutocapture

  constructor() {
    this.posthog = new PosthogAutocapture()
  }

  public mapEventTrackingToAttributes(
    eventTracking: EventTracking
  ): Record<string, string> {
    const attributes = this.posthog.mapEventTrackingToAttributes(eventTracking)

    /** More attributes mapping from different sources could be added here and returned all together */
    return attributes
  }
}
