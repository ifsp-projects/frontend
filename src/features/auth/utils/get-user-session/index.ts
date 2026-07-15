import type { User as NextAuthUser } from 'next-auth'
import { getServerSession } from 'next-auth'

import type { OrganizationProps } from '@/domain/entities/organization'
import { authOptions } from '@/lib/auth'

/**
 * Retrieves the authenticated organization from the current session.
 *
 * @returns The session organization data combined with the NextAuth user type.
 */
export const getUserSession = async (): Promise<
  NextAuthUser & OrganizationProps
> => {
  const session = await getServerSession(authOptions)

  return session?.organization
}
