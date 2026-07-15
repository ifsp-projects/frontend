import { Questions } from './sections/content'
import { Header } from './sections/header'

export const FAQ = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Questions />
    </main>
  )
}
