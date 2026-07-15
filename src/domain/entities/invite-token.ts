import type { OrganizationProps } from './organization'

export type InviteTokenProps = {
  id: string
  cancelled_at?: string
  created_at: string
  email: string
  expires_at: string
  organization?: OrganizationProps
  organization_id: string
  token: string
  used_at?: string
}

export class InviteToken {
  public readonly id: string
  public readonly cancelled_at?: string
  public readonly created_at: string
  public readonly email: string
  public readonly expires_at: string
  public readonly organization?: OrganizationProps
  public readonly organization_id: string
  public readonly token: string
  public readonly used_at?: string

  constructor(props: InviteTokenProps) {
    this.id = props.id
    this.cancelled_at = props.cancelled_at
    this.created_at = props.created_at
    this.email = props.email
    this.expires_at = props.expires_at
    this.organization = props.organization
    this.organization_id = props.organization_id
    this.token = props.token
    this.used_at = props.used_at
  }

  public isExpired(): boolean {
    return new Date(this.expires_at).getTime() < Date.now()
  }

  public isCancelled(): boolean {
    return Boolean(this.cancelled_at)
  }

  public isUsed(): boolean {
    return Boolean(this.used_at)
  }

  public isValid(): boolean {
    return !this.isExpired() && !this.isCancelled() && !this.isUsed()
  }
}
