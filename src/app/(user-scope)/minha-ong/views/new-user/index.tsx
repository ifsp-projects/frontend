import { Form } from './sections/form'
import { Header } from './sections/header'

export const NewUserView = async () => {
  return (
    <main className="bg-neutral-50">
      <Header />
      <Form />
    </main>
  )
}
