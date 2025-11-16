import type { Metadata, NextPage } from 'next'

import { PartnersCarousel } from '@/components/ui/partners-carousel'
import { getMetaData } from '@/utils/seo/get-metadata'

import { HowItWorks } from '../sobre/sections/how-it-works'
import { AboutTheProject } from './sections/about-the-project'
import { Benefits } from './sections/benefits'
import { Contact } from './sections/contact'
import { Header } from './sections/header'
import { Highlights } from './sections/highlights'
import { MoreInfoAbout } from './sections/more-info-about'
import { getUserSession } from '@/utils/auth/get-user-session'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'Divulgue Sua ONG com a gente | Plataforma de Impacto Social',
    description:
      'Aumente a visibilidade da sua ONG com a gente. Crie páginas profissionais, compartilhe suas campanhas e conecte-se com apoiadores que acreditam na sua causa. Fortaleça seu impacto social e transforme mais vidas por meio da divulgação digital.',
    image: '',
    url: '/'
  })
}

const Page: NextPage = async () => {
  const user = await getUserSession()

  return (
    <main>
      <p className="mt-40 pb-40">userdata: {JSON.stringify(user)}</p>
      <Header />
      <PartnersCarousel />
      <Highlights />
      <MoreInfoAbout />
      <Benefits />
      <HowItWorks />
      <AboutTheProject />
      <Contact />
    </main>
  )
}

export default Page
