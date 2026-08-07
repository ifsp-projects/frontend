/**
 * Indicates whether the application is running in a production
 * environment.
 *
 * Security headers are only enabled in production to avoid
 * interfering with local development tooling such as HMR,
 * React Fast Refresh, browser extensions and debugging tools.
 */
const isProd = process.env.NODE_ENV === 'production'

/**
 * Content Security Policy (CSP) directives.
 *
 * Defines which sources are allowed to load resources such as:
 *
 * - Scripts
 * - Stylesheets
 * - Images
 * - Fonts
 * - API requests
 * - Frames
 * - Media
 *
 * The goal is to reduce the attack surface for vulnerabilities
 * such as XSS, code injection and malicious third-party resources.
 */
const directives: Record<string, string[]> = {
  /**
   * Fallback policy used when a more specific directive
   * is not explicitly defined.
   */
  'default-src': ["'self'"],

  /**
   * Restricts the document base URL.
   */
  'base-uri': ["'self'"],

  /**
   * Disables plugins such as Flash and other embedded objects.
   */
  'object-src': ["'none'"],

  /**
   * Restricts where forms can submit data.
   */
  'form-action': ["'self'"],

  /**
   * Allows images from:
   * - Same origin
   * - Base64 encoded assets
   * - HTTPS sources
   */
  'img-src': ["'self'", 'data:', 'https:'],

  /**
   * Allows fonts from:
   * - Same origin
   * - Base64 encoded assets
   * - HTTPS sources
   */
  'font-src': ["'self'", 'data:', 'https:'],

  /**
   * Allows styles from:
   * - Same origin
   * - Trusted HTTPS sources
   * - Inline styles (required by some libraries)
   */
  'style-src': ["'self'", "'unsafe-inline'", 'https:'],

  /**
   * Allows JavaScript execution.
   *
   * Note:
   * unsafe-inline and unsafe-eval should be reviewed
   * periodically since they reduce CSP strictness.
   */
  'script-src': ["'self'", 'https:', "'unsafe-inline'", "'unsafe-eval'"],

  /**
   * Controls outgoing network requests such as:
   * - fetch
   * - XMLHttpRequest
   * - WebSockets
   */
  'connect-src': ["'self'", 'https:', 'wss:'],

  /**
   * Controls embedded content such as iframes.
   */
  'frame-src': ["'self'", 'https:'],

  /**
   * Controls audio and video resources.
   */
  'media-src': ["'self'", 'https:'],

  /**
   * Restricts web manifest loading.
   */
  'manifest-src': ["'self'"],

  /**
   * Allows web workers and blob-based workers.
   */
  'worker-src': ["'self'", 'blob:']
}

/**
 * Serializes the CSP directives into the format expected
 * by the Content-Security-Policy HTTP header.
 *
 * Example:
 *
 * default-src 'self'; script-src 'self' https:
 */
export const csp = Object.entries(directives)
  .map(([key, values]) => `${key} ${values.join(' ')}`)
  .join('; ')

/**
 * Security headers applied to application responses.
 *
 * CSP is only enabled in production environments to avoid
 * development tooling conflicts while still providing
 * runtime protection in deployed environments.
 */
export const cspHeaders = isProd
  ? [{ key: 'Content-Security-Policy', value: csp }]
  : []
