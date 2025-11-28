import type { Metadata, NextPage } from 'next'
import { redirect } from 'next/navigation'

import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

import { DefaultView } from './views/default-view'
import { NewUserView } from './views/new-user'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Projetos',
    description: 'Projetos',
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
