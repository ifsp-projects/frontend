interface ConversionFormFields {
  email?: string
  fullname?: string
  ong_name?: string
  ong_type?: string
  phone?: string
}

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
  url?: string
}
