import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/components/page-builder/sortable-sections/hydrated'
import { instanceMotor } from '@/instances/motor'

import { CopyGenerator } from '../../components/copy-generator'
import { Driver } from '../../components/driver'
import { Toolbar } from '../../components/toolbar'
import type { LandingPageTemplateProps } from '../types'

export const EditablePrimaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-emerald-50!">
      <Driver />
      <SortableSectionsHydrated
        order={data?.page?.order}
        sections={data?.page?.sections}
        template="primary"
        isEditable
      />
      <Toolbar id={data?.page?.id} slug={slug} />
      <CopyGenerator />
    </main>
  )
}
