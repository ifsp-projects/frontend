import type { Metadata, NextPage } from 'next'

import { ContactForm } from '@/features/pages/contato/sections/contact-form'
import { Header } from '@/features/pages/contato/sections/header'
import { getMetaData } from '@/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Fale Conosco | Capivara Solidária',
    description:
      'Entre em contato com a equipe Capivara Solidária. Tire dúvidas, envie sugestões ou saiba como potencializar sua ONG com nossas soluções.',
    image: '',
    url: '/contato'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="overflow-hidden bg-neutral-50">
      <Header />
      <ContactForm />
    </main>
  )
}

export default Page
