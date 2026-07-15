import { ContactForm } from './sections/contact-form'
import { Header } from './sections/header'

export const Contato = async () => {
  return (
    <main className="overflow-hidden bg-neutral-50">
      <Header />
      <ContactForm />
    </main>
  )
}
