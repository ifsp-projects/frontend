import type { Metadata, NextPage } from 'next'

import { getMetaData } from '../../../../utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Em manutenção',
    description: 'Em manutenção',
    image: '',
    url: '/em-producao'
  })
}

const Page: NextPage = async () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 px-6 text-center">
      <h1 className="mb-4 text-5xl font-bold text-blue-800">
        🚧 Em Produção 🚧
      </h1>
    </main>
  )
}

export default Page
