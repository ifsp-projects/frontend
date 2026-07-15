import type { SessionContextValue } from 'next-auth/react'

import type { OrganizationProps } from '@/domain/entities/organization'

export interface UseUserSessionReturn {
  organization?: OrganizationProps
  status: SessionContextValue['status']
  token?: string
  update: SessionContextValue['update']
}
