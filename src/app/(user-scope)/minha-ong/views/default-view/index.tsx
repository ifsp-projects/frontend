import { account } from '@/instances/account'
import { getUserSession } from '@/utils/auth/get-user-session'

import { MainInfo } from './sections/main-info'

/**
 * DefaultView component for the admin organization menu.
 * TODO: Implement the default view content.
 */
export const DefaultView = async () => {
  const organization = await getUserSession()

  const { data } = await account.me({ email: organization.email })

  return (
    <main className="overflow-hidden bg-neutral-50">
      <MainInfo organization={data.organization} />
    </main>
  )
}
