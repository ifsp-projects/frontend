import type { Metadata, NextPage } from 'next'

import { Header } from '@/features/pages/ongs/header'
import { List } from '@/features/pages/ongs/list'
import { instanceMotor } from '@/instances/motor'
import { getMetaData } from '@/utils/seo/get-metadata'

type OngsPageProps = {
  searchParams: Promise<{ name?: string; ong_type?: string }>
}

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
    <main className="overflow-hidden">
      <Header />
      <List data={data} />
    </main>
  )
}

export default Page
