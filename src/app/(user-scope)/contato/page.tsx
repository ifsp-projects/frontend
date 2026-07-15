import type { Metadata, NextPage } from 'next'

import { Contato } from '@/_pages/contato'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

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
  return <Contato />
}

export default Page
