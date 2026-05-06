import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/components/page-builder/sortable-sections/hydrated'
import { instanceMotor } from '@/instances/motor'

import type { LandingPageTemplateProps } from '../types'

export const ReadableTertiaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  console.log(data?.page?.sections)

  return (
    <main className="text-neutral-700 selection:bg-yellow-50! selection:text-yellow-600">
      <SortableSectionsHydrated
        order={data?.page?.order}
        sections={data?.page?.sections}
        template="tertiary"
      />
    </main>
  )
}
