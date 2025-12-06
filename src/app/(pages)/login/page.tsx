import type { Metadata, NextPage } from 'next'
import { redirect } from 'next/navigation'

import Beams from '@/components/ui/beams'
import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Login | Capivara Solidária',
      description:
        'Acesse sua conta Capivara Solidária para criar e editar suas landing pages de forma rápida e segura.',
      image: '',
      url: '/login'
    }),
    robots: {
      index: false,
      follow: false
    }
  }
}

const Page: NextPage = async () => {
  const user = await getUserSession()

  if (user) {
    await redirect('/minha-ong')
  }

  return (
    <main className="flex h-screen w-screen lg:justify-between">
      <Header />
      <figure className="relative w-full max-w-1/2">
        <Beams
          beamHeight={15}
          beamNumber={12}
          beamWidth={2}
          lightColor="#ffffff"
          noiseIntensity={1.75}
          rotation={30}
          scale={0.2}
          speed={2}
        />
      </figure>
    </main>
  )
}

export default Page
