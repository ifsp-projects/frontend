import type { FC } from 'react'

import { FAQ } from '../common/sections/faq'
import { ImagesGrid } from '../common/sections/images-grid'
import { AboutUs } from './sections/about-us'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { MoreInfoAbout } from './sections/more-info-about'

export const SecondaryLandingPageLayout: FC = async () => {
  return (
    <main className="text-slate-700 selection:!bg-blue-50 selection:text-blue-600">
      <Header />
      <ImagesGrid copy={{ description: '', title: '' }} />
      <HowItWorks />
      <MoreInfoAbout />
      <AboutUs />
      <FAQ color="blue" copy={{ anchor: '', questions: [] }} />
    </main>
  )
}
