import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/components/page-builder/sortable-sections/hydrated'
import {
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES
} from '@/constants/page-templates/default-templates-order'
import { instanceMotor } from '@/instances/motor'

import type { LandingPageTemplateProps } from '../types'

export const ReadableQuarternaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700">
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
      />
    </main>
  )
}
