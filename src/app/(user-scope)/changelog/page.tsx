import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { Content } from './sections/content'
import { Header } from './sections/header'
import { Divider } from './sections/try-now'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Fale Conosco | Capivara Solidária',
    description:
      'Entre em contato com a equipe Capivara Solidária. Tire dúvidas, envie sugestões ou saiba como potencializar sua ONG com nossas soluções.',
    image: '',
    url: '/changelog'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Divider />
      <Content />
    </main>
  )
}

export default Page
