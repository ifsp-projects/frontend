type Success<T> = { data: T; error: null }
type Failure<E> = { data: null; error: E }
type Result<T, E = Error> = Success<T> | Failure<E>

/**
 * Wraps a promise in a standardized `Result` object to simplify
 * error handling in asynchronous operations.
 *
 * Instead of using `try { ... } catch { ... }` blocks repeatedly,
 * you can call `tryCatch` to get a consistent return type:
 * either a success with `data` or a failure with `error`.
 *
 * Example usage:
 * ```ts
 * const result = await tryCatch(fetch('/api/data').then(res => res.json()));
 *
 * if (result.error) {
 *   console.error('Failed to fetch data:', result.error);
 * } else {
 *   console.log('Fetched data successfully:', result.data);
 * }
 * ```
 *
 * @template T - The type of the expected successful result.
 * @template E - The type of the error (defaults to `Error`).
 * @param {Promise<T>} promise - The promise to execute safely.
 * @returns {Promise<Result<T, E>>} A promise that resolves to a `Result` object:
 * - On success: `{ data: T, error: null }`
 * - On failure: `{ data: null, error: E }`
 */
export async function tryCatch<T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise
    return { data, error: null }
  } catch (error) {
    return { data: null, error: error as E }
  }
}
