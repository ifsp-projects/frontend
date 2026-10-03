const SAFE_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:']

export const sanitizeUrl = (value: unknown): string => {
  if (typeof value !== 'string') return '#'

  const url = value.trim()
  if (!url) return '#'

  if (url.startsWith('#')) return url

  if (url.startsWith('/') && url[1] !== '/' && url[1] !== '\\') return url

  try {
    const parsed = new URL(url)
    return SAFE_PROTOCOLS.includes(parsed.protocol) ? parsed.href : '#'
  } catch {
    return '#'
  }
}
