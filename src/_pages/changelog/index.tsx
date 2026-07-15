import { Content } from './sections/content'
import { Header } from './sections/header'
import { Divider } from './sections/try-now'

export const Changelog = async () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Divider />
      <Content />
    </main>
  )
}
