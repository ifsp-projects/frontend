/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata, NextPage } from 'next'

import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

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

  // return user.is_user_new ? <NewUserView /> : <DefaultView />
  return <NewUserView />
}

export default Page
