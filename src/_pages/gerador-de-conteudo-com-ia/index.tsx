import { Features } from './sections/features'
import { Header } from './sections/header'
import { OutputTypes } from './sections/output-types'
import { Testimonials } from './sections/testimonials'
import { TryNow } from './sections/try-now'
import { UseCases } from './sections/use-cases'

export const GeradorDeConteudoComIA = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <OutputTypes />
      <UseCases />
      <Features />
      <Testimonials />
      <TryNow />
    </main>
  )
}
