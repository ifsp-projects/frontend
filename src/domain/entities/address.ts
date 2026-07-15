export type AddressProps = {
  id: string
  city?: string
  complement?: string
  created_at: string
  is_primary: boolean
  number?: string
  organization_profile_id?: string
  postal_code?: string
  state?: string
  street?: string
  updated_at?: string
}

export class Address {
  public readonly id: string
  public readonly city?: string
  public readonly complement?: string
  public readonly created_at: string
  public readonly is_primary: boolean
  public readonly number?: string
  public readonly organization_profile_id?: string
  public readonly postal_code?: string
  public readonly state?: string
  public readonly street?: string
  public readonly updated_at?: string

  constructor(props: AddressProps) {
    this.id = props.id
    this.city = props.city
    this.complement = props.complement
    this.created_at = props.created_at
    this.is_primary = props.is_primary
    this.number = props.number
    this.organization_profile_id = props.organization_profile_id
    this.postal_code = props.postal_code
    this.state = props.state
    this.street = props.street
    this.updated_at = props.updated_at
  }

  public isComplete(): boolean {
    return Boolean(
      this.street && this.number && this.city && this.state && this.postal_code
    )
  }

  public getFullAddress(): string {
    return [this.street, this.number, this.complement, this.city, this.state]
      .filter(Boolean)
      .join(', ')
  }
}
