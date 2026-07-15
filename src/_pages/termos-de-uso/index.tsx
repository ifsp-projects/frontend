import { ScrollProgressProvider } from './context/scroll-progress-context'
import { Content } from './sections/content'
import { Header } from './sections/header'
import { ScrollProgress } from './sections/scroll-progress'

export const TermosDeUso = async () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollProgressProvider>
        <ScrollProgress />
        <Header />
        <Content />
      </ScrollProgressProvider>
    </main>
  )
}
