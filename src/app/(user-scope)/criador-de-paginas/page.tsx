import type { Metadata, NextPage } from 'next'

import { CriadorDePaginas } from '@/_pages/criador-de-paginas'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

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
  return <CriadorDePaginas />
}

export default Page
