/**
 * Retrieves the value of a specific cookie from `document.cookie`.
 *
 * This utility parses the browser's cookie string and searches for
 * a cookie with the given name. If the cookie exists, its value
 * is returned. If it does not exist, an empty string is returned.
 *
 * Example usage:
 * ```ts
 * const sessionId = serializeCookie('session_id');
 * if (sessionId) {
 *   console.log('Session ID:', sessionId);
 * } else {
 *   console.log('No session cookie found.');
 * }
 * ```
 *
 * @param {string} cname - The name of the cookie to retrieve.
 * @returns {string} The value of the cookie if found, otherwise an empty string.
 */
export const serializeCookie = (cname: string) => {
  const name = cname + '='
  const ca = document.cookie.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]

    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }

  return ''
}
