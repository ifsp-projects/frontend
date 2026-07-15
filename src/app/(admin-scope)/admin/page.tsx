import type { Metadata, NextPage } from 'next'
import { redirect } from 'next/navigation'

import { getUserSession } from '@/features/auth/utils/get-user-session'
import { Admin } from '@/_pages/admin'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...getMetaData({
      title: 'Admin | Capivara Solidária',
      description:
        'Acesse sua conta Capivara Solidária para criar e editar suas landing pages de forma rápida e segura.',
      image: '',
      url: '/admin'
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

  return <Admin />
}

export default Page
