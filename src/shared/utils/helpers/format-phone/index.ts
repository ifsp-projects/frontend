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
 * Example usage:
 * ```ts
 * console.log(formatPhone('11987654321')); // "(11) 98765-4321"
 * console.log(formatPhone('118765432'));   // "(11) 8765-432"
 * console.log(formatPhone('12'));          // "(12"
 * console.log(formatPhone(''));            // ""
 * ```
 *
 * @param {string} value - The raw phone number input.
 * @returns {string} The formatted phone number string.
 */

import { formatIncompletePhoneNumber } from '@/lib/phone-number'

export function formatPhone(value: string): string {
  return formatIncompletePhoneNumber(value, 'BR')
}
