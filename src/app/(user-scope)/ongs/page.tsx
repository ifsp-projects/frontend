import type { Metadata, NextPage } from 'next'

import { instanceMotor } from '@/instances/motor'
import { getMetaData } from '@/utils/seo/get-metadata'

import { Header } from './sections/header'
import { List } from './sections/list'
import type { OngsPageProps } from './types'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'ONGs que fazem parte | Inovação Digital para ONGs Brasileiras',
    description:
      'Catálogo de ONGs que utilizam a Capivara Solidária para fortalecer sua presença digital e captar mais apoio.',
    image: '',
    url: '/ongs'
  })
}

const Page: NextPage<OngsPageProps> = async ({ searchParams }) => {
  const { name, ong_type } = await searchParams

  const { data } = await instanceMotor.organizations.getAllOrganizations({
    name,
    ong_type
  })

  return (
    <main className="overflow-x-hidden">
      <Header />
      <List data={data} />
    </main>
  )
}

export default Page
