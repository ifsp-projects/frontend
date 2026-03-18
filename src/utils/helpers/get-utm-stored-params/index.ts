'use server'

import { getMiddlewareData } from '../../middleware/get-middleware-data'

/**
 * Retrieves stored UTM parameters from middleware and formats them.
 *
 * This server-side utility calls `getMiddlewareData` to access any
 * UTM-related cookies or stored data, then returns a structured object
 * containing standard UTM fields (`utm_campaign`, `utm_source`, `utm_medium`,
 * `utm_content`, `utm_term`). If a field is missing, its value will be `undefined`.
 *
 * Example usage:
 * ```ts
 * const utmParams = await getUtmStoredParams();
 * console.log(utmParams);
 * // { utm_campaign: 'spring-sale', utm_content: 'banner', ... }
 * ```
 *
 * @returns {Promise<{
 *   utm_campaign?: string;
 *   utm_source?: string;
 *   utm_medium?: string;
 *   utm_content?: string;
 *   utm_term?: string;
 * }>} A promise that resolves with an object containing the stored UTM parameters.
 */
export const getUtmStoredParams = async () => {
  const { cookiesUtmStoredData } = await getMiddlewareData()

  const formattedUtm = {
    utm_campaign: cookiesUtmStoredData?.utm_campaign,
    utm_content: cookiesUtmStoredData?.utm_content,
    utm_medium: cookiesUtmStoredData?.utm_medium,
    utm_source: cookiesUtmStoredData?.utm_source,
    utm_term: cookiesUtmStoredData?.utm_term
  }

  return formattedUtm
}
