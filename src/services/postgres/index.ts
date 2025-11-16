import { OrganizationProfiles } from './organization-profiles'
import { Organizations } from './organizations'

export class Postgres {
  public organizationProfiles: OrganizationProfiles
  public organizations: Organizations

  constructor() {
    this.organizationProfiles = new OrganizationProfiles()
    this.organizations = new Organizations()
  }
}
