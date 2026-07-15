import type { Metadata, NextPage } from 'next'

import { Sobre } from '@/_pages/sobre'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title:
      'Sobre a Capivara Solidária | Inovação Digital para ONGs Brasileiras',
    description:
      'Conheça a Capivara Solidária, uma plataforma feita para fortalecer ONGs com páginas profissionais, acessíveis e prontas para captar mais apoio.',
    image: '',
    url: '/sobre'
  })
}

const Page: NextPage = async () => {
  return <Sobre />
}

export default Page
