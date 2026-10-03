const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const CUID_REGEX = /^c[a-z0-9]{24}$/

export const isUuid = (value: unknown): value is string =>
  typeof value === 'string' && UUID_REGEX.test(value)

export const isCuid = (value: unknown): value is string =>
  typeof value === 'string' && CUID_REGEX.test(value)
