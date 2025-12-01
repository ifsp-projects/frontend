import type { Metadata, NextPage } from 'next'

import { getMetaData } from '@/utils/seo/get-metadata'

import { ContactForm } from './sections/contact-form'
import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Fale Conosco | Capivara Solidária',
    description:
      'Entre em contato com a equipe Capivara Solidário. Tire dúvidas, envie sugestões ou saiba como potencializar sua ONG com nossas soluções.',
    image: '',
    url: '/contato'
  })
}

const Page: NextPage = async () => {
  return (
    <main>
      <Header />
      <ContactForm />
    </main>
  )
}

export default Page
