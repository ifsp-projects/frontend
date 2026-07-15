import type { Metadata, NextPage } from 'next'

import { Changelog } from '@/_pages/changelog'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Changelog | Capivara Solidária',
    description:
      'Acompanhe a evolução da Capivara Solidária. Novas funcionalidades, melhorias e atualizações pensadas para ajudar sua ONG a crescer, engajar e gerar mais impacto.',
    image: '',
    url: '/changelog'
  })
}

const Page: NextPage = async () => {
  return <Changelog />
}

export default Page
