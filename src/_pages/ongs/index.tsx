import { instanceMotor } from '@/services/motor'

import { Header } from './header'
import { List } from './list'

export const OngsHub = async ({ name, ong_type }) => {
  const { data } = await instanceMotor.organizations.getAllOrganizations({
    name,
    ong_type
  })

  return (
    <main className="overflow-hidden">
      <Header />
      <List data={data} />
    </main>
  )
}
