import axios from 'axios'

import { HUBSPOT_FORMS_IDS } from '../../../constants/hubspot/hubspot-form-ids'
import { getUTMData } from '../get-utm-data'
import { serializeCookie } from '../serialize-cookie'
import type { HubspotFormSubmitProps, HubspotFormTemplateData } from './types'

export const hubspotFormSubmit = async <
  K extends keyof HubspotFormTemplateData
>(
  props: HubspotFormSubmitProps<K>
) => {
  const { data, formId, formVariant, url, locale } = props

  const utmFieldsData = await getUTMData({
    locale
  })

  const hubspotFields = {
    ...utmFieldsData,
    ...data
  }

  const hutk = serializeCookie('hubspotutk')
  const finalFormID = formId || HUBSPOT_FORMS_IDS[formVariant]

  if (!finalFormID) {
    console.error('HubSpot form ID is required but was not provided')
    return false
  }

  try {
    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/50610150/${finalFormID}`,
      {
        submittedAt: '',
        fields: hubspotFields,
        context: hutk
          ? {
              hutk,
              pageUri: window.location.href,
              pageName: url ?? window.location.pathname
            }
          : {
              pageUri: window.location.href,
              pageName: url ?? window.location.pathname
            }
      }
    )

    if (response.status !== 200) return false

    if (response.status === 200) {
      return true
    }
  } catch (err) {
    console.error({
      hubSpotFormSubmitErrorMessage: err.message
    })

    return false
  }
}
