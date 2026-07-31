import type { Metadata, NextPage } from 'next'
import { redirect } from 'next/navigation'

import { Login } from '@/_pages/login'
import { getUserSession } from '@/features/auth/utils/get-user-session'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

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
    redirect('/minha-ong')
  }

  return <Login />
}

export default Page
