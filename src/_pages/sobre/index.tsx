import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Members } from './sections/members'
import { Stack } from './sections/stack'

export const Sobre = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <HowItWorks />
      <Members />
      <Stack />
    </main>
  )
}
