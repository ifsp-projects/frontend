import { Addresses } from './addresses'
import { OrganizationProfiles } from './organization-profiles'
import { Organizations } from './organizations'

export class Postgres {
  public organizationProfiles: OrganizationProfiles
  public organizations: Organizations
  public addresses: Addresses

  constructor() {
    this.organizationProfiles = new OrganizationProfiles()
    this.organizations = new Organizations()
    this.addresses = new Addresses()
  }
}
