import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'

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
    <main className="flex min-h-screen w-full flex-col lg:h-screen lg:flex-row lg:justify-between">
      <Header />
      <figure className="relative hidden h-full w-full lg:block lg:max-w-1/2">
        <Image
          alt="Login Background Image"
          className="h-full w-full object-cover"
          height={1414}
          src="https://cdn.prod.website-files.com/6618114bae6895cc12d3dc1d/665f1765f1432b0533fb7524_iStock-1498170916.webp"
          width={2120}
        />
      </figure>
    </main>
  )
}

export default Page
