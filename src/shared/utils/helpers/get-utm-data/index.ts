import { getUtmStoredParams } from '../get-utm-stored-params'
import type { UTMData } from './types'

/**
 * Retrieves and normalizes UTM parameters for use in forms, analytics, or tracking.
 *
 * This utility calls `getUtmStoredParams` to fetch any UTM data stored
 * in cookies or middleware, and ensures that each UTM field is defined
 * (defaulting to an empty string if missing). The returned object uses
 * camelCase keys suitable for internal usage.
 *
 * Example usage:
 * ```ts
 * const utmData = await getUTMData();
 * console.log(utmData);
 * // {
 * //   utmCampaign: 'spring-sale',
 * //   utmContent: 'banner',
 * //   utmMedium: 'email',
 * //   utmSource: 'newsletter',
 * //   utmTerm: 'discount'
 * // }
 * ```
 *
 * @returns {Promise<UTMData>} A promise that resolves with an object containing normalized UTM parameters:
 * - `utmCampaign`: string
 * - `utmContent`: string
 * - `utmMedium`: string
 * - `utmSource`: string
 * - `utmTerm`: string
 */
export const getUTMData = async (): Promise<UTMData> => {
  const storedUtmData = await getUtmStoredParams()

  const utmCampaign = storedUtmData?.utm_campaign ?? ''
  const utmContent = storedUtmData?.utm_content ?? ''
  const utmMedium = storedUtmData?.utm_medium ?? ''
  const utmSource = storedUtmData?.utm_source ?? ''
  const utmTerm = storedUtmData?.utm_term ?? ''

  return {
    utmCampaign,
    utmContent,
    utmMedium,
    utmSource,
    utmTerm
  }
}
