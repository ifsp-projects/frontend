import { Addresses } from './addresses'
import { Visitors } from './analytics'
import { OrganizationProfiles } from './organization-profiles'
import { Organizations } from './organizations'
import { Pages } from './pages'

export class MotorRepository {
  public organizationProfiles: OrganizationProfiles
  public organizations: Organizations
  public addresses: Addresses
  public pages: Pages
  public visitors: Visitors

  constructor() {
    this.organizationProfiles = new OrganizationProfiles()
    this.organizations = new Organizations()
    this.addresses = new Addresses()
    this.pages = new Pages()
    this.visitors = new Visitors()
  }
}
