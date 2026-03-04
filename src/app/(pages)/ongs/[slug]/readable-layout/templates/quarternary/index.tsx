import type { FC } from 'react'

import { instanceMotor } from '@/instances/motor'

import { FAQ } from '../common/sections/faq'
import type { LandingPageTemplateProps } from '../types'
import { Causes } from './sections/causes'
import { GetInvolved } from './sections/get-involved'
import { Header } from './sections/header'
import { Timeline } from './sections/timeline'

export const QuarternaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-rose-50! selection:text-rose-600">
      <Header copy={data?.page?.sections?.header} />
      <Causes copy={data?.page?.sections?.causes} />
      <Timeline copy={data?.page?.sections?.timeline} />
      <GetInvolved copy={data?.page?.sections?.getInvolved} />
      <FAQ color="rose" copy={data?.page?.sections?.faq} />
    </main>
  )
}
