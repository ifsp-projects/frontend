import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Features } from './sections/features'
import { Header } from './sections/header'
import { OutputTypes } from './sections/output-types'
import { SocialProof } from './sections/social-proof'
import { Testimonials } from './sections/testimonials'
import { TryNow } from './sections/try-now'
import { UseCases } from './sections/use-cases'

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
    <main>
      <Header />
      <SocialProof />
      <OutputTypes />
      <UseCases />
      <Features />
      <Testimonials />
      <TryNow />
    </main>
  )
}

export default Page
