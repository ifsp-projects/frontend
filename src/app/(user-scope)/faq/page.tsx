import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Questions } from './sections/content'
import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Dúvidas Frequentes | Capivara Solidária',
    description:
      'Encontre respostas sobre como criar, editar e publicar páginas da sua ONG com o Capivara Solidária. Veja como é simples impulsionar sua causa online.',
    image: '',
    url: '/faq'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Questions />
    </main>
  )
}

export default Page
