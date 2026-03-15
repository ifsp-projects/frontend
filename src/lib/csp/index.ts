const isProd = process.env.NODE_ENV === 'production'

const directives: Record<string, string[]> = {
  'default-src': ["'self'"],
  'base-uri': ["'self'"],
  'object-src': ["'none'"],
  'form-action': ["'self'"],
  'img-src': ["'self'", 'data:', 'https:'],
  'font-src': ["'self'", 'data:', 'https:'],
  'style-src': ["'self'", "'unsafe-inline'", 'https:'],
  'script-src': ["'self'", 'https:', "'unsafe-inline'", "'unsafe-eval'"],
  'connect-src': ["'self'", 'https:', 'wss:'],
  'frame-src': ["'self'", 'https:'],
  'media-src': ["'self'", 'https:'],
  'manifest-src': ["'self'"],
  'worker-src': ["'self'", 'blob:']
}

export const csp = Object.entries(directives)
  .map(([key, values]) => `${key} ${values.join(' ')}`)
  .join('; ')

export const cspHeaders = isProd
  ? [{ key: 'Content-Security-Policy', value: csp }]
  : []
