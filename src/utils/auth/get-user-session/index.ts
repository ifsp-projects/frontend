import type { User as NextAuthUser } from 'next-auth'
import { getServerSession } from 'next-auth'

import { authOptions } from '../../../lib/auth'
import type { PostgresOrganization } from '../../../types/postgres/postgres-organization'

export const getUserSession = async (): Promise<
  NextAuthUser & PostgresOrganization
> => {
  const session = await getServerSession(authOptions)

  return session?.user
}
