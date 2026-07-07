import type { Metadata, NextPage } from 'next'

import { Features } from '@/features/pages/gerador-de-conteudo-com-ia/sections/features'
import { Header } from '@/features/pages/gerador-de-conteudo-com-ia/sections/header'
import { OutputTypes } from '@/features/pages/gerador-de-conteudo-com-ia/sections/output-types'
import { Testimonials } from '@/features/pages/gerador-de-conteudo-com-ia/sections/testimonials'
import { TryNow } from '@/features/pages/gerador-de-conteudo-com-ia/sections/try-now'
import { UseCases } from '@/features/pages/gerador-de-conteudo-com-ia/sections/use-cases'
import { getMetaData } from '@/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Gerador de Copy com IA para ONGs | Capivara Solidária',
    description:
      'Gere textos institucionais, campanhas de arrecadação, posts para redes sociais e e-mails em segundos com IA treinada no contexto do seu projeto social.',
    image: '',
    url: '/gerenciador-de-conteudo-com-ia'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <OutputTypes />
      <UseCases />
      <Features />
      <Testimonials />
      <TryNow />
    </main>
  )
}

export default Page
