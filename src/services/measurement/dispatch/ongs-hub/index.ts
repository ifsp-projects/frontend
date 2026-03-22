import { Trigger } from '../../trigger'
import type {
  MeasurementDeviceType,
  MeasurementLeadFormType,
  MeasurementOngTypes,
  MeasurementShareChannel,
  MeasurementSourcePage,
  MeasurementTrafficSource
} from '../../types'
import type { MeasurementLpContext } from '../types'

interface OrgActionContext {
  ongType: MeasurementOngTypes
  orgId: string
  sourcePage: MeasurementSourcePage
}

export class OngsHub {
  private trigger: Trigger

  constructor() {
    this.trigger = new Trigger()
  }

  /** User applies a cause category filter */
  public filterCategory(ctx: {
    category: MeasurementOngTypes | 'all'
    previousCategory?: MeasurementOngTypes | 'all'
    resultsCount: number
  }) {
    this.trigger.posthog.track('category_filtered', ctx)
  }

  /** User types a search query */
  public performSearch(ctx: {
    query: string
    resultsCount: number
    category?: MeasurementOngTypes
    city?: string
  }) {
    this.trigger.posthog.track('search_performed', ctx)
  }

  /** User clicks an org card in the listing */
  public clickOrgCard(ctx: {
    orgId: string
    ongType: MeasurementOngTypes
    /** 1-based position in the listing */
    position: number
    city?: string
  }) {
    this.trigger.posthog.track('org_card_clicked', ctx)
  }

  /** User views the org profile page */
  public viewOrgProfile(ctx: {
    orgId: string
    ongType: MeasurementOngTypes
    trafficSource?: MeasurementTrafficSource
    deviceType?: MeasurementDeviceType
  }) {
    this.trigger.posthog.track('org_profile_viewed', ctx)
  }

  /** User is redirected to the org's published LP */
  public visitOrgLp(ctx: MeasurementLpContext & { fromHub: boolean }) {
    this.trigger.posthog.track('org_lp_visited', ctx)
  }

  /** User clicks the donate button */
  public clickDonate(ctx: OrgActionContext) {
    this.trigger.posthog.track('donate_button_clicked', ctx)
  }

  /** User clicks to contact the org */
  public clickContactOrg(ctx: OrgActionContext) {
    this.trigger.posthog.track('contact_org_clicked', ctx)
  }

  /** User shares an org on social media */
  public shareOrg(
    ctx: OrgActionContext & { shareChannel: MeasurementShareChannel }
  ) {
    this.trigger.posthog.track('org_shared', ctx)
  }

  /** User saves an org to their favorites list */
  public saveOrgToFavorites(ctx: OrgActionContext) {
    this.trigger.posthog.track('org_saved_to_favorites', ctx)
  }

  /** A lead/contact form inside a hub page is submitted */
  public submitLeadForm(
    ctx: OrgActionContext & {
      formType: MeasurementLeadFormType
      lpId: string
    }
  ) {
    this.trigger.posthog.track('lead_form_submitted', ctx)
  }
}
