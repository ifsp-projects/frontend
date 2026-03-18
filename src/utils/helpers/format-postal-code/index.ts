/**
 * Formats a string as a postal code (CEP) in the standard `XXXXX-XXX` format.
 *
 * This utility removes all non-digit characters from the input, inserts a
 * hyphen after the fifth digit, and truncates the string to a maximum of
 * 9 characters. Useful for normalizing user input for Brazilian postal codes.
 *
 * Example usage:
 * ```ts
 * const formatted = formatPostalCode('12345678');
 * console.log(formatted); // '12345-678'
 *
 * const formatted2 = formatPostalCode('12a345b6789');
 * console.log(formatted2); // '12345-678'
 * ```
 *
 * @param {string} value - The raw postal code input.
 * @returns {string} The formatted postal code in `XXXXX-XXX` format.
 */
export const formatPostalCode = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2')
    .substring(0, 9)
}
