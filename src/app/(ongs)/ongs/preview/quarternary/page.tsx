import {
  DEFAULT_TEMPLATES_ORDER,
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES,
  QUATERNARY_TEMPLATE_DEFAULT_COPIES
} from 'capivara-solidaria-ts-sdk'
import type { Metadata, NextPage } from 'next'

import { SortableSectionsHydrated } from '@/features/page-builder/components/sortable-sections/hydrated'
import { getMetaData } from '@/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Template Vulcan | Capivara Solidária',
      description: 'Preview Template Quarternário',
      image: '',
      url: '/ongs/preview/quarternary'
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
        colorPalette={DEFAULT_TEMPLATE_COLOR_PALLETES.quarternary}
        mainColor={DEFAULT_TEMPLATE_COLORS.quarternary}
        order={[...DEFAULT_TEMPLATES_ORDER.quarternary]}
        sections={QUATERNARY_TEMPLATE_DEFAULT_COPIES}
        template="quarternary"
      />
    </main>
  )
}

export default Page
