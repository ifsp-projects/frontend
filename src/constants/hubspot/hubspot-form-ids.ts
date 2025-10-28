import type { HubspotFormTemplateData } from '../../utils/helpers/hubspot-form-submit/types'

type HubspotFormIds = {
  [formVariantName in keyof HubspotFormTemplateData]: string
}

export const HUBSPOT_FORMS_IDS: HubspotFormIds = {
  conversion_form: '49ac64da-2402-4a8a-b165-a22bf6ae7ebb'
}
