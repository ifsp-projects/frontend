import { Features } from './sections/features'
import { Header } from './sections/header'
import { HowItWorks } from './sections/how-it-works'
import { Testimonials } from './sections/testimonials'
import { TryNow } from './sections/try-now'

export const CriadorDePaginas = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <HowItWorks />
      <Features />
      <Testimonials />
      <TryNow />
    </main>
  )
}
