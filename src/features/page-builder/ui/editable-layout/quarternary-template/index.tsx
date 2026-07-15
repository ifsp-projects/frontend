import {
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES
} from 'capivara-solidaria-ts-sdk'
import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/features/page-builder/components/sortable-sections/hydrated'
import { instanceMotor } from '@/services/motor'

import { CopyGenerator } from '../../../components/copy-generator'
import { Driver } from '../../../components/driver'
import { Toolbar } from '../../../components/toolbar'
import type { LandingPageTemplateProps } from '../types'

export const EditableQuarternaryLandingPageLayout: FC<
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
            : DEFAULT_TEMPLATE_COLOR_PALLETES.quarternary
        }
        mainColor={
          data?.page?.main_color || DEFAULT_TEMPLATE_COLORS.quarternary
        }
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
