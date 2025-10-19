'use server'

import { getMiddlewareData } from '../../middleware/get-middleware-data'

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
