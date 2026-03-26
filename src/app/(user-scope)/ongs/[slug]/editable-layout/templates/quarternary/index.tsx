import type { FC } from 'react'

import { instanceMotor } from '@/instances/motor'

import { CopyGenerator } from '../../components/copy-generator'
import { Driver } from '../../components/driver'
import { Toolbar } from '../../components/toolbar'
import { FAQ } from '../common/sections/faq'
import type { LandingPageTemplateProps } from '../types'
import { Causes } from './sections/causes'
import { GetInvolved } from './sections/get-involved'
import { Header } from './sections/header'
import { Timeline } from './sections/timeline'

export const EditableQuarternaryLandingPageLayout: FC<
  LandingPageTemplateProps
> = async ({ slug }) => {
  const { data } = await instanceMotor.pages.getPageBySlug({ slug })

  return (
    <main className="text-neutral-700 selection:bg-rose-50! selection:text-rose-600">
      <Driver />
      <Header copy={data?.page?.sections?.header} />
      <Causes copy={data?.page?.sections?.causes} />
      <Timeline copy={data?.page?.sections?.timeline} />
      <GetInvolved copy={data?.page?.sections?.getInvolved} />
      <FAQ color="rose" copy={data?.page?.sections?.faq} />
      <Toolbar id={data?.page?.id} slug={slug} />
      <CopyGenerator />
    </main>
  )
}
