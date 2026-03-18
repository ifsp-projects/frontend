/**
 * Generates an array of unique random integers within a specified range.
 *
 * This utility produces `count` random numbers between `min` (inclusive)
 * and `max` (exclusive). All numbers in the resulting array are unique.
 * If `count` is larger than the number of possible unique values in the range,
 * the function will enter an infinite loop, so ensure `count <= max - min`.
 *
 * Example usage:
 * ```ts
 * const numbers = genRandomNumbers(1, 10, 5);
 * console.log(numbers); // [3, 7, 1, 9, 5] (order and numbers will vary)
 * ```
 *
 * @param {number} min - The minimum integer value (inclusive).
 * @param {number} max - The maximum integer value (exclusive).
 * @param {number} count - The number of unique random integers to generate.
 * @returns {number[]} An array containing `count` unique random integers in the given range.
 */
export const genRandomNumbers = (
  min: number,
  max: number,
  count: number
): number[] => {
  const arr = []
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (arr.indexOf(r) === -1) arr.push(r)
  }

  return arr
}
