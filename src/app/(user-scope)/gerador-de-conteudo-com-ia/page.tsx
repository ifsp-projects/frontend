import type { Metadata, NextPage } from 'next'

import { GeradorDeConteudoComIA } from '@/_pages/gerador-de-conteudo-com-ia'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Gerador de Copy com IA para ONGs | Capivara Solidária',
    description:
      'Gere textos institucionais, campanhas de arrecadação, posts para redes sociais e e-mails em segundos com IA treinada no contexto do seu projeto social.',
    image: '',
    url: '/gerenciador-de-conteudo-com-ia'
  })
}

const Page: NextPage = async () => {
  return <GeradorDeConteudoComIA />
}

export default Page
