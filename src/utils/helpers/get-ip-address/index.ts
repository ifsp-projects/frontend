export const getIpAdress = request => {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0]
  }

  if (request.socket && request.socket.remoteAddress) {
    return request.socket.remoteAddress
  }

  return 'unknown'
}
