import type { FC } from 'react'

import { FAQ } from '../common/sections/faq'
import { ImagesGrid } from '../common/sections/images-grid'
import { MoreInfoAbout } from '../common/sections/more-info-about'
import { Depoiments } from './sections/depoiments'
import { Details } from './sections/details'
import { Header } from './sections/header'
import { Mission } from './sections/mission'

export const PrimaryLandingPageLayout: FC = async () => {
  return (
    <main className="text-slate-700 selection:!bg-emerald-50">
      <Header />
      <Details />
      <ImagesGrid />
      <MoreInfoAbout />
      <Mission />
      <Depoiments />
      <FAQ color="emerald" />
    </main>
  )
}
