import { Trigger } from '../../trigger'
import type { MeasurementOngTypes, MeasurementTrafficSource } from '../../types'
import type { MeasurementUserContext } from '../types'

export class Account {
  private trigger: Trigger

  constructor() {
    this.trigger = new Trigger()
  }

  /** User starts the signup flow (first page of the form) */
  public startSignup(ctx?: {
    referralSource?: MeasurementTrafficSource | 'invite'
  }) {
    this.trigger.posthog.track('signup_started', ctx ?? {})
  }

  /**
   * Signup is fully completed (email verified / profile saved).
   * Also calls posthog.identify() if email is present.
   */
  public completeSignup(
    ctx: MeasurementUserContext & {
      ongType: MeasurementOngTypes
      referralSource?: MeasurementTrafficSource | 'invite'
    }
  ) {
    this.trigger.posthog.track('signup_completed', ctx)
  }

  /**
   * The very first LP is published.
   * Key activation event — use as the "aha moment" milestone.
   */
  public completeFirstPublish(
    ctx: MeasurementUserContext & {
      timeToPublishSeconds: number
      templateUsed: boolean
      templateId?: string
    }
  ) {
    this.trigger.posthog.track('first_page_published', ctx)
  }
}
