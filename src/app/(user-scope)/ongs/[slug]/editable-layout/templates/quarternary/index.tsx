import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/components/page-builder/sortable-sections/hydrated'
import { instanceMotor } from '@/instances/motor'

import { CopyGenerator } from '../../components/copy-generator'
import { Driver } from '../../components/driver'
import { Toolbar } from '../../components/toolbar'
import type { LandingPageTemplateProps } from '../types'

export const EditableQuarternaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-rose-50! selection:text-rose-600">
      <Driver />
      <SortableSectionsHydrated
        order={data?.page?.order}
        sections={data?.page?.sections}
        template="quarternary"
        isEditable
      />
      <Toolbar id={data?.page?.id} slug={slug} />
      <CopyGenerator />
    </main>
  )
}
