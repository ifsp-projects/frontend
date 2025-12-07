import type { FC } from 'react'

import { instanceMotor } from '@/instances/motor'

import { FAQ } from '../common/sections/faq'
import { MoreInfoAbout } from '../common/sections/more-info-about'
import type { LandingPageTemplateProps } from '../types'
import { Depoiments } from './sections/depoiments'
import { Details } from './sections/details'
import { Header } from './sections/header'
import { Mission } from './sections/mission'

export const ReadablePrimaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-emerald-50!">
      <Header copy={data.page.sections.header} />
      <Details copy={data.page.sections.details} />
      {/* <ImagesGrid copy={data.page.sections.imagesGrid} /> */}
      <MoreInfoAbout copy={data.page.sections.moreInfoAbout} />
      <Mission copy={data?.page?.sections?.ourMission} />
      <Depoiments copy={data.page.sections.depoiments} />
      <FAQ color="emerald" copy={data.page.sections.faq} />
    </main>
  )
}
