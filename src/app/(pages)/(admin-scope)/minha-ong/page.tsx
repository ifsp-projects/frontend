import type { Metadata, NextPage } from 'next'
import { redirect } from 'next/navigation'

import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { DefaultView } from './views/default-view'
import { NewUserView } from './views/new-user'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Meu Perfil | Capivara Solidária',
    description:
      'Gerencie as informações, imagens e campanhas da sua ONG em um só lugar. Edite seu perfil e mostre o impacto do seu trabalho.',
    image: '',
    url: '/minha-ong'
  })
}

const Page: NextPage = async () => {
  const user = await getUserSession()

  if (!user) {
    redirect('/login')
  }

  return user?.is_user_new ? <NewUserView /> : <DefaultView />
}

export default Page
