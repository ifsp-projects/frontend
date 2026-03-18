import { randomBytes } from 'crypto'

/**
 * Generates a cryptographically secure random integer within a specified range.
 *
 * Unlike `Math.random()`, this function uses Node.js's `crypto.randomBytes`
 * to produce a more secure random number. The generated number is between
 * `min` and `max` (both inclusive).
 *
 * Example usage:
 * ```ts
 * const num = generateRandomNumber(1, 100);
 * console.log(num); // e.g., 42
 * ```
 *
 * @param {number} min - The minimum integer value (inclusive).
 * @param {number} max - The maximum integer value (inclusive).
 * @returns {number} A cryptographically secure random integer between `min` and `max`.
 */
export const generateRandomNumber = (min: number, max: number): number => {
  const range = max - min + 1
  const bytes = randomBytes(4)
  const value = bytes.readUInt32BE(0)
  return min + (value % range)
}
