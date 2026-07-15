import type { OrganizationProfileProps } from './organization-profile'

export type account_status = 'active' | 'inactive'

export type Role = 'admin' | 'member'

export interface OrganizationProps {
  account_status: account_status
  created_at: string
  email: string
  id: string
  is_user_new: boolean
  organization_profile?: OrganizationProfileProps
  role: Role
  updated_at?: string
}

export class Organization {
  public readonly id: string
  public readonly email: string
  public readonly account_status: account_status
  public readonly role: Role
  public readonly is_user_new: boolean
  public readonly created_at: string
  public readonly updated_at?: string
  public readonly organization_profile?: OrganizationProfileProps

  constructor(props: OrganizationProps) {
    this.id = props.id
    this.email = props.email
    this.account_status = props.account_status
    this.role = props.role
    this.is_user_new = props.is_user_new
    this.created_at = props.created_at
    this.updated_at = props.updated_at
    this.organization_profile = props.organization_profile
  }

  public isActive(): boolean {
    return this.account_status === 'active'
  }

  public isAdmin(): boolean {
    return this.role === 'admin'
  }

  public isNew(): boolean {
    return this.is_user_new
  }

  static fromPostgres(data: OrganizationProps): Organization {
    return new Organization({
      id: data.id,
      email: data.email,
      account_status: data.account_status,
      role: data.role,
      is_user_new: data.is_user_new,
      created_at: data.created_at,
      updated_at: data.updated_at,
      organization_profile: data.organization_profile
    })
  }
}
