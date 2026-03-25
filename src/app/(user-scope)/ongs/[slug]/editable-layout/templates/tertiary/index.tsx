import type { FC } from 'react'

import { instanceMotor } from '@/instances/motor'

import { CopyGenerator } from '../../components/copy-generator'
import { Driver } from '../../components/driver'
import { Toolbar } from '../../components/toolbar'
import { FAQ } from '../common/sections/faq'
import type { LandingPageTemplateProps } from '../types'
import { AboutUs } from './sections/about-us'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Initiatives } from './sections/initiatives'
import { MoreInfoAbout } from './sections/more-info-about'
import { Testimonials } from './sections/testimonials'

export const EditableTertiaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-yellow-50! selection:text-yellow-600">
      <Driver />
      <Header copy={data?.page?.sections?.header} />
      <HowItWorks copy={data?.page?.sections?.howItWorks} />
      <Testimonials copy={data?.page?.sections?.testimonials} />
      <MoreInfoAbout copy={data?.page?.sections?.moreInfoAbout} />
      <Initiatives copy={data?.page?.sections?.initiatives} />
      <AboutUs copy={data?.page?.sections?.aboutUs} />
      <FAQ color="yellow" copy={data?.page?.sections?.faq} />
      <Toolbar id={data?.page?.id} slug={slug} />
      <CopyGenerator />
    </main>
  )
}
