import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/components/page-builder/sortable-sections/hydrated'
import {
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES
} from '@/constants/page-templates/default-templates-order'
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
    <main className="text-neutral-700">
      <Driver />
      <SortableSectionsHydrated
        colorPalette={
          data?.page?.color_pallete?.original
            ? data.page.color_pallete
            : DEFAULT_TEMPLATE_COLOR_PALLETES.primary
        }
        mainColor={data?.page?.main_color || DEFAULT_TEMPLATE_COLORS.primary}
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
