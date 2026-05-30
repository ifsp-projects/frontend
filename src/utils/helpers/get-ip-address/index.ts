/**
 * Extracts the client's IP address from the incoming request.
 *
 * Prioritizes the `x-forwarded-for` header for proxied requests,
 * falling back to the socket's remote address when available.
 *
 * @param request - Incoming HTTP request.
 * @returns The detected IP address or `'unknown'` if unavailable.
 */
export const getIpAdress = request => {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  if (request.socket && request.socket.remoteAddress) {
    return request.socket.remoteAddress
  }

  return 'unknown'
}
