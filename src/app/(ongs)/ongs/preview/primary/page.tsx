import {
  DEFAULT_TEMPLATES_ORDER,
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES,
  PRIMARY_TEMPLATE_DEFAULT_COPIES
} from 'capivara-solidaria-ts-sdk'
import type { Metadata, NextPage } from 'next'

import { SortableSectionsHydrated } from '@/features/page-builder/components/sortable-sections/hydrated'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Template Aurora | Capivara Solidária',
      description: 'Preview Template Primário',
      image: '',
      url: '/ongs/preview/primary'
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
        colorPalette={DEFAULT_TEMPLATE_COLOR_PALLETES.primary}
        mainColor={DEFAULT_TEMPLATE_COLORS.primary}
        order={[...DEFAULT_TEMPLATES_ORDER.primary]}
        sections={PRIMARY_TEMPLATE_DEFAULT_COPIES}
        template="primary"
      />
    </main>
  )
}

export default Page
