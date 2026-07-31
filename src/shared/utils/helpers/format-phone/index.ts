/**
 * Formats a string as a Brazilian phone number.
 *
 * This utility:
 * - Removes all non-digit characters
 * - Limits the number to a maximum of 11 digits
 * - Automatically applies formatting based on length:
 *   - `(XX) XXXX-XXXX` for 10-digit numbers
 *   - `(XX) XXXXX-XXXX` for 11-digit numbers
 * - Partially formats numbers as the user types for input masking.
 *
 * @param {string} value - The raw phone number input.
 * @returns {string} The formatted phone number string.
 */

import { formatIncompletePhoneNumber } from '@/lib/phone-number'

export function formatPhone(value: string): string {
  return formatIncompletePhoneNumber(value, 'BR')
}
