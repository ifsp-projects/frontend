import type { getSearchParamsMiddleware } from '../get-search-params'
import type { getUserAgentMiddleware } from '../get-user-agent'

export type CookiesUserAgent = ReturnType<typeof getUserAgentMiddleware>
export type CookiesSearchParams = ReturnType<typeof getSearchParamsMiddleware>

export interface GetMiddlewareDataReturn {
  cookiesSearchParams: CookiesSearchParams
  cookiesUserAgent: CookiesUserAgent
  cookiesUtmStoredData: {
    utm_campaign: string
    utm_content: string
    utm_medium: string
    utm_source: string
    utm_term: string
  }
}
