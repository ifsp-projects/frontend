import {
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES
} from 'capivara-solidaria-ts-sdk'
import type { FC } from 'react'

import { SortableSectionsHydrated } from '@/features/page-builder/components/sortable-sections/hydrated'
import { instanceMotor } from '@/instances/motor'

import type { LandingPageTemplateProps } from '../types'

export const ReadableSecondaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700">
      <SortableSectionsHydrated
        colorPalette={
          data?.page?.color_pallete?.original
            ? data.page.color_pallete
            : DEFAULT_TEMPLATE_COLOR_PALLETES.secondary
        }
        mainColor={data?.page?.main_color || DEFAULT_TEMPLATE_COLORS.secondary}
        order={data?.page?.order}
        sections={data?.page?.sections}
        template="secondary"
      />
    </main>
  )
}
