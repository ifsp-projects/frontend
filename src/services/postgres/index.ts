import { Addresses } from './addresses'
import { OrganizationProfiles } from './organization-profiles'
import { Organizations } from './organizations'
import { Pages } from './pages'

export class Postgres {
  public organizationProfiles: OrganizationProfiles
  public organizations: Organizations
  public addresses: Addresses
  public pages: Pages

  constructor() {
    this.organizationProfiles = new OrganizationProfiles()
    this.organizations = new Organizations()
    this.addresses = new Addresses()
    this.pages = new Pages()
  }
}
