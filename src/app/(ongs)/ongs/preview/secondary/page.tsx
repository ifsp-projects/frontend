import {
  DEFAULT_TEMPLATES_ORDER,
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES,
  SECONDARY_TEMPLATE_DEFAULT_COPIES
} from 'capivara-solidaria-ts-sdk'
import type { Metadata, NextPage } from 'next'

import { SortableSectionsHydrated } from '@/features/page-builder/components/sortable-sections/hydrated'
import { getMetaData } from '@/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Template Atlas | Capivara Solidária',
      description: 'Preview Template Secundário',
      image: '',
      url: '/ongs/preview/secondary'
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
        colorPalette={DEFAULT_TEMPLATE_COLOR_PALLETES.secondary}
        mainColor={DEFAULT_TEMPLATE_COLORS.secondary}
        order={[...DEFAULT_TEMPLATES_ORDER.secondary]}
        sections={SECONDARY_TEMPLATE_DEFAULT_COPIES}
        template="secondary"
      />
    </main>
  )
}

export default Page
