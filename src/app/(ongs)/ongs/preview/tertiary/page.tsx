import {
  DEFAULT_TEMPLATES_ORDER,
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES,
  TERTIARY_TEMPLATE_DEFAULT_COPIES
} from 'capivara-solidaria-ts-sdk'
import type { Metadata, NextPage } from 'next'

import { SortableSectionsHydrated } from '@/features/page-builder/components/sortable-sections/hydrated'
import { getMetaData } from '@/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Template Hélios | Capivara Solidária',
      description: 'Preview Template Terciário',
      image: '',
      url: '/ongs/preview/tertiary'
    }),
    robots: {
      index: false,
      follow: false
    }
  }
}

const Page: NextPage = async () => {
  return (
    <main className="text-neutral-700">
      <SortableSectionsHydrated
        colorPalette={DEFAULT_TEMPLATE_COLOR_PALLETES.tertiary}
        mainColor={DEFAULT_TEMPLATE_COLORS.tertiary}
        order={[...DEFAULT_TEMPLATES_ORDER.tertiary]}
        sections={TERTIARY_TEMPLATE_DEFAULT_COPIES}
        template="tertiary"
      />
    </main>
  )
}

export default Page
