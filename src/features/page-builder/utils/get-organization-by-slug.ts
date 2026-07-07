import { cache } from 'react'

import { instanceMotor } from '@/instances/motor'

export const getOrganizationBySlug = cache(async (slug: string) => {
  const { data } = await instanceMotor.organizations.getOrganizationBySlug({
    slug
  })

  return data.organization ?? null
})

export const getPageBySlug = cache(async (slug: string) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return data.page ?? null
})
