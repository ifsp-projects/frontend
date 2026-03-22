import type {
  MeasurementDeviceType,
  MeasurementOngTypes,
  MeasurementTrafficSource
} from '../types'

/** Authenticated user context — passed from the app session */
export interface MeasurementUserContext {
  city?: string
  /** Triggers posthog.identify() when present */
  email?: string
  ongType?: MeasurementOngTypes
}

/** Org/page context shared across editor and LP events */
export interface MeasurementOrgContext {
  orgId: string
  pageId: string
}

/** Public LP context — available without authentication */
export interface MeasurementLpContext {
  deviceType?: MeasurementDeviceType
  lpId: string
  orgId: string
  pageId: string
  trafficSource?: MeasurementTrafficSource
}

/** Group analytics properties for posthog.group() */
export interface MeasurementOrgGroupProperties {
  city?: string
  hubListingActive?: boolean
  ongType?: MeasurementOngTypes
  orgName?: string
  pagesCount?: number
  totalLpViews?: number
}
