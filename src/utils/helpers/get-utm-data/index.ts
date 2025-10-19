import { getUtmStoredParams } from '../get-utm-stored-params'
import type { GetUTMDataProps, UTMData } from './types'

export const getUTMData = async ({
  locale
}: GetUTMDataProps): Promise<UTMData> => {
  const storedUtmData = await getUtmStoredParams()

  const utmCampaign = storedUtmData?.utm_campaign ?? ''
  const utmContent = storedUtmData?.utm_content ?? ''
  const utmMedium = storedUtmData?.utm_medium ?? ''
  const utmSource = storedUtmData?.utm_source ?? ''
  const utmTerm = storedUtmData?.utm_term ?? ''

  return {
    hsLanguage: locale,
    utmCampaign,
    utmContent,
    utmMedium,
    utmSource,
    utmTerm
  }
}
