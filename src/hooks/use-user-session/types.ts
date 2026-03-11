import type { SessionContextValue } from 'next-auth/react'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export interface UseUserSessionReturn {
  organization?: PostgresOrganization
  status: SessionContextValue['status']
  token?: string
  update: SessionContextValue['update']
}
