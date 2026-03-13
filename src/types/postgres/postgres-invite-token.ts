import type { PostgresOrganization } from './postgres-organization'

export interface PostgresInviteToken {
  cancelled_at?: string
  created_at: string
  email: string
  expires_at: string
  id: string
  organization?: PostgresOrganization
  organization_id: string
  token: string
  used_at?: string
}
