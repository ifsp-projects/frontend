import type { Metadata, NextPage } from 'next'

import { OngsHub } from '@/_pages/ongs'
import { getMetaData } from '@/shared/utils/seo/get-metadata'

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

  return <OngsHub name={name} ong_type={ong_type} />
}

export default Page
