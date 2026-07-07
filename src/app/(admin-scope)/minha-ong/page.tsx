import type { Metadata, NextPage } from 'next'
import { redirect } from 'next/navigation'

import { Profile } from '@/features/minha-ong/containers/profile'
import { account } from '@/instances/account'
import { getUserSession } from '@/utils/auth/get-user-session'
import { getMetaData } from '@/utils/seo/get-metadata'

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

  const organization = await getUserSession()

  const { data } = await account.me({ email: organization.email })

  return (
    <main className="overflow-hidden bg-neutral-50">
      <Profile organization={data.organization} />
    </main>
  )
}

export default Page
