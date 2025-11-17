'use client'

import type { SessionContextValue } from 'next-auth/react'
import { useSession } from 'next-auth/react'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

interface UseUserSessionReturn {
  organization?: PostgresOrganization
  status: SessionContextValue['status']
  token?: string
  update: SessionContextValue['update']
}

export const useUserSession = (): UseUserSessionReturn => {
  const { data, update, status } = useSession() ?? {}

  return {
    organization: data?.organization,
    token: data?.accessToken,
    status,
    update
  }
}
