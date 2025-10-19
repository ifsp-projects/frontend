import type { ConversionFormFields } from '../../../app/waitlist/sections/form/types'

export interface HubspotFormTemplateData {
  conversion_form: ConversionFormFields
}

type HubspotFormType<K extends keyof HubspotFormTemplateData> =
  HubspotFormTemplateData[K]

export interface HubspotFormSubmitProps<
  THubspotFormVariant extends keyof HubspotFormTemplateData
> {
  data: HubspotFormType<THubspotFormVariant>
  /** Form ID takes precedence over formVariant */
  formId?: string
  formVariant?: THubspotFormVariant
  locale: string
  url?: string
}
