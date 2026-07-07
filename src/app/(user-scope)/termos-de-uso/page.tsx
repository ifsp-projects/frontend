import type { Metadata, NextPage } from 'next'
import Script from 'next/script'

import { ScrollProgressProvider } from '@/features/pages/termos-de-uso/context/scroll-progress-context'
import { Content } from '@/features/pages/termos-de-uso/sections/content'
import { Header } from '@/features/pages/termos-de-uso/sections/header'
import { ScrollProgress } from '@/features/pages/termos-de-uso/sections/scroll-progress'
import { getMetaData } from '@/utils/seo/get-metadata'

import { jsonLd } from './json-ld'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Termos de Uso | Capivara Solidária',
    description:
      'Leia os Termos de Uso da Capivara Solidária. Entenda as condições de utilização da plataforma, direitos e responsabilidades dos usuários e organizações cadastradas.',
    image: '',
    url: '/termos-de-uso'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <main className="min-h-screen overflow-hidden">
        <ScrollProgressProvider>
          <ScrollProgress />
          <Header />
          <Content />
        </ScrollProgressProvider>
      </main>
    </>
  )
}

export default Page
