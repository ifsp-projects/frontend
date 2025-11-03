import type { User as NextAuthUser } from 'next-auth'
import { getServerSession } from 'next-auth'

import { authOptions } from '../../../lib/auth'
import type { User } from '../../../types/models/user'

export const getUserSession = async (): Promise<NextAuthUser & User> => {
  const session = await getServerSession(authOptions)

  return session?.user
}
