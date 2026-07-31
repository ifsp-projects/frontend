import type { CountryCode, MetadataJson } from 'libphonenumber-js/core'
import { formatIncompletePhoneNumber as _formatIncompletePhoneNumber } from 'libphonenumber-js/core'

import metadataJson from '@/shared/assets/phone-number/libphonenumber.metadata.json'

const metadata = metadataJson as MetadataJson

/**
 * Formats an incomplete phone number as the user types, for a given country.
 * @see https://www.npmjs.com/package/libphonenumber-js#customizing-metadata
 */
export function formatIncompletePhoneNumber(
  phone: string,
  country: CountryCode
) {
  return _formatIncompletePhoneNumber(phone, country, metadata)
}
