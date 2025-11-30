import type { FC } from 'react'

import { instanceMotor } from '@/instances/motor'

import { CopyGenerator } from '../../components/copy-generator'
import { Driver } from '../../components/driver'
import { Toolbar } from '../../components/toolbar'
import { FAQ } from '../common/sections/faq'
import { ImagesGrid } from '../common/sections/images-grid'
import { MoreInfoAbout } from '../common/sections/more-info-about'
import type { LandingPageTemplateProps } from '../types'
import { Depoiments } from './sections/depoiments'
import { Details } from './sections/details'
import { Header } from './sections/header'
import { Mission } from './sections/mission'

export const EditablePrimaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-slate-700 selection:!bg-emerald-50">
      <Driver />
      <Header copy={data?.page?.sections?.header} />
      <Details copy={data?.page?.sections?.details} />
      <ImagesGrid copy={data?.page?.sections?.imagesGrid} />
      <MoreInfoAbout copy={data?.page?.sections?.moreInfoAbout} />
      <Mission copy={data?.page?.sections?.ourMission} />
      <Depoiments copy={data?.page?.sections?.depoiments} />
      <FAQ color="emerald" copy={data?.page?.sections?.faq} />
      <Toolbar id={data?.page?.id} slug={slug} />
      <CopyGenerator />
    </main>
  )
}
