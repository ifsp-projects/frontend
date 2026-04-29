import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/components/page-builder/sortable-sections/hydrated'
import { instanceMotor } from '@/instances/motor'

import type { LandingPageTemplateProps } from '../types'

export const ReadableSecondaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-blue-50! selection:text-blue-600">
      <SortableSectionsHydrated
        order={data?.page?.order}
        sections={data?.page?.sections}
        template="secondary"
      />
    </main>
  )
}
