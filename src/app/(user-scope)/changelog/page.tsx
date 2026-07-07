import type { Metadata, NextPage } from 'next'

import { Content } from '@/features/pages/changelog/sections/content'
import { Header } from '@/features/pages/changelog/sections/header'
import { Divider } from '@/features/pages/changelog/sections/try-now'
import { getMetaData } from '@/utils/seo/get-metadata'

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
  return (
    <main className="overflow-hidden">
      <Header />
      <Divider />
      <Content />
    </main>
  )
}

export default Page
