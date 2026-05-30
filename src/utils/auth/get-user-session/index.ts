import type { User as NextAuthUser } from 'next-auth'
import { getServerSession } from 'next-auth'

import { authOptions } from '../../../lib/auth'
import type { PostgresOrganization } from '../../../types/postgres/postgres-organization'

/**
 * Retrieves the authenticated organization from the current session.
 *
 * @returns The session organization data combined with the NextAuth user type.
 */
export const getUserSession = async (): Promise<
  NextAuthUser & PostgresOrganization
> => {
  const session = await getServerSession(authOptions)

  return session?.organization
}
