import 'dotenv/config'

import { BASE_URL } from '@/constants/environments/base-url'
import { instanceMotor } from '@/instances/motor'

import { routeBuilder } from './route-builder'

export const ongsRoutesBuilder = async lastModified => {
  const { data } = await instanceMotor.organizations.getAllOrganizations()

  const formatRoute = (baseDomain: string, slug: string) => {
    return `${baseDomain}/ongs/${slug}`
  }

  const formattedRoutes = data?.organizations?.map(organization =>
    formatRoute(BASE_URL, organization.organization_profile.slug)
  )

  const finalSitemap = formattedRoutes.map(formattedRoute =>
    routeBuilder(formattedRoute, lastModified, '0.8')
  )

  return finalSitemap.join('\n')
}
