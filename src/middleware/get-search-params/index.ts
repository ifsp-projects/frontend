import type { NextRequest } from 'next/server'

/**
 * Extracts all URL search parameters from a Next.js request
 * and converts them into a key-value object.
 *
 * @param request - Incoming Next.js request.
 * @returns An object containing the request's query parameters.
 */
export const getSearchParamsMiddleware = (request: NextRequest) => {
  let obj = {}
  request.nextUrl.searchParams.forEach((value, key) => {
    obj = { ...obj, [key]: value }
  })
  return obj as { [key: string]: string }
}
