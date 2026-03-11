import type { FC } from 'react'

import { instanceMotor } from '@/instances/motor'

import { CopyGenerator } from '../../components/copy-generator'
import { Driver } from '../../components/driver'
import { Toolbar } from '../../components/toolbar'
import { FAQ } from '../common/sections/faq'
import { ImagesGrid } from '../common/sections/images-grid'
import type { LandingPageTemplateProps } from '../types'
import { AboutUs } from './sections/about-us'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { MoreInfoAbout } from './sections/more-info-about'

export const EditableSecondaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-blue-50! selection:text-blue-600">
      <Driver />
      <Header copy={data?.page?.sections?.header} />
      <ImagesGrid copy={{ description: '', title: '' }} />
      <HowItWorks copy={data?.page?.sections?.howItWorks} />
      <MoreInfoAbout copy={data?.page?.sections?.moreInfoAbout} />
      <AboutUs copy={data?.page?.sections?.aboutUs} />
      <FAQ color="blue" copy={data?.page?.sections?.faq} />
      <Toolbar id={data?.page?.id} slug={slug} />
      <CopyGenerator />
    </main>
  )
}
