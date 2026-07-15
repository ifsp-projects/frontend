import dynamic from 'next/dynamic'

import { Benefits } from './sections/benefits'
import { Contact } from './sections/contact'
import { Details } from './sections/details'
import { Header } from './sections/header'
import { MoreInfoAbout } from './sections/more-info-about'

const HowItWorks = dynamic(() => import('./sections/how-it-works'))

export const Homepage = async () => {
  return (
    <main className="overflow-x-hidden" id="website">
      <Header />
      <Details />
      <Benefits />
      <MoreInfoAbout />
      <HowItWorks />
      <Contact />
    </main>
  )
}
