import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Contact } from './sections/contact'
import { Header } from './sections/header'
import { Projects } from './sections/projects'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title:
      'Projetos Sociais | Capivara Solidário – Descubra e Apoie Causas Reais',
    description:
      'Conheça os projetos sociais cadastrados no Capivara Solidário. Descubra ONGs incríveis, acompanhe seus resultados e apoie iniciativas que transformam vidas em todo o Brasil.',
    image: '',
    url: '/projetos'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <Projects />
      <Contact />
    </main>
  )
}

export default Page
