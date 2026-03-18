import type { Metadata, NextPage } from 'next'

import { instanceMotor } from '@/instances/motor'
import { getMetaData } from '@/utils/seo/get-metadata'

import { Header } from './sections/header'
import { List } from './sections/list'
// import { TopDonatedOngs } from './sections/top-donated-ongs'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'ONGs que fazem parte | Inovação Digital para ONGs Brasileiras',
    description:
      'Catálogo de ONGs que utilizam a Capivara Solidária para fortalecer sua presença digital e captar mais apoio.',
    image: '',
    url: '/ongs'
  })
}

interface PageProps {
  searchParams: Promise<{ name?: string; ong_type?: string }>
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const { name, ong_type } = await searchParams
  const { data } = await instanceMotor.organizations.getAllOrganizations({ name, ong_type })

  return (
    <main>
      <Header />
      {/* <TopDonatedOngs /> */}
      <List data={data} />
    </main>
  )
}

export default Page
