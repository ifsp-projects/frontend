import type { Metadata, NextPage } from 'next'

import { FAQ } from '@/_pages/faq'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

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
  return <FAQ />
}

export default Page
