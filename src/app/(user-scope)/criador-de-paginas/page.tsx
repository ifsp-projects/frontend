import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Features } from './sections/features'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Testimonials } from './sections/testimonials'
import { TryNow } from './sections/try-now'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Páginas Interativas para ONGs | Capivara Solidária',
    description:
      'Crie páginas institucionais, de campanha e de captação de doações de forma visual, sem código. Templates prontos, domínio próprio e analytics integrado.',
    image: '',
    url: '/gerenciador-de-conteudo-com-ia'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      {/* <SocialProof /> */}
      <HowItWorks />
      <Features />
      <Testimonials />
      <TryNow />
    </main>
  )
}

export default Page
