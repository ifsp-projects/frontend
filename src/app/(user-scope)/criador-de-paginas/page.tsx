import type { Metadata, NextPage } from 'next'

import { Features } from '@/features/pages/criador-de-paginas/sections/features'
import { Header } from '@/features/pages/criador-de-paginas/sections/header'
import { HowItWorks } from '@/features/pages/criador-de-paginas/sections/how-it-works'
import { Testimonials } from '@/features/pages/criador-de-paginas/sections/testimonials'
import { TryNow } from '@/features/pages/criador-de-paginas/sections/try-now'
import { getMetaData } from '@/utils/seo/get-metadata'

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
    <main className="overflow-hidden">
      <Header />
      <HowItWorks />
      <Features />
      <Testimonials />
      <TryNow />
    </main>
  )
}

export default Page
