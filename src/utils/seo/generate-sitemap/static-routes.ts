import 'dotenv/config'

import { BASE_URL } from '@/constants/environments/base-url'
import { STATIC_PATHS } from '@/constants/paths'

import { routeBuilder } from './route-builder'

export const staticRoutesBuilder = lastModified => {
  const routesArray = []

  const processRoutes = (pages: string[]) => {
    for (const indexRoute of Object.keys(pages)) {
      const route = STATIC_PATHS[indexRoute]
      if (route) {
        const formattedRoute = `${BASE_URL}${route}`
        routesArray.push(routeBuilder(formattedRoute, lastModified, '1.0'))
      }
    }
  }

  processRoutes(STATIC_PATHS)

  return routesArray.join('\n')
}
