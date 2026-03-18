import axios from 'axios'

import { HUBSPOT_FORMS_IDS } from '@/constants/hubspot/hubspot-form-ids'

import { getUTMData } from '../get-utm-data'
import { serializeCookie } from '../serialize-cookie'
import type { HubspotFormSubmitProps, HubspotFormTemplateData } from './types'

/**
 * Submits data to a HubSpot form using the HubSpot Forms API.
 *
 * This utility combines user-provided form data with UTM tracking fields,
 * formats them according to HubSpot's requirements, and submits them via
 * an HTTP POST request. It optionally includes the HubSpot tracking cookie
 * (`hubspotutk`) to link submissions to known users.
 *
 * Example usage:
 * ```ts
 * const success = await hubspotFormSubmit({
 *   formId: '12345-abcde',
 *   formVariant: 'contactUs',
 *   url: '/landing-page',
 *   data: {
 *     firstname: 'John',
 *     email: 'john@example.com'
 *   }
 * });
 *
 * if (success) {
 *   console.log('Form submitted successfully');
 * } else {
 *   console.error('Form submission failed');
 * }
 * ```
 *
 * @template K - The key of the HubSpot form template being submitted.
 * @param {HubspotFormSubmitProps<K>} props - An object containing form submission details.
 * @param {HubspotFormTemplateData[K]} props.data - The fields and values to submit.
 * @param {string} [props.formId] - Optional explicit HubSpot form ID. If not provided, the ID is derived from `formVariant`.
 * @param {keyof HubspotFormTemplateData} [props.formVariant] - A variant key to select a HubSpot form ID from predefined constants.
 * @param {string} [props.url] - Optional URL to override `pageName` in HubSpot submission context.
 * @returns {Promise<boolean>} Returns `true` if the submission succeeded, otherwise `false`.
 */
export const hubspotFormSubmit = async <
  K extends keyof HubspotFormTemplateData
>(
  props: HubspotFormSubmitProps<K>
) => {
  const { data, formId, formVariant, url } = props

  const utmFieldsData = await getUTMData()

  const hubspotFields = {
    ...utmFieldsData,
    ...data
  }

  const formattedFields = Object.entries(hubspotFields).map(
    ([name, value]) => ({
      name,
      value
    })
  )

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
        fields: formattedFields,
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
