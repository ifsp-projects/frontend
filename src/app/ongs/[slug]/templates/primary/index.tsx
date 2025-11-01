import type { FC } from 'react'

import { Details } from './sections/details'
import { Header } from './sections/header'
import { Mission } from './sections/mission'

export const PrimaryLandingPageLayout: FC = async () => {
  return (
    <main className="text-slate-700">
      <Header />
      <Details />
      <Mission />
    </main>
  )
}
