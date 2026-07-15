import type { OngCategory, TemplateType } from 'capivara-solidaria-ts-sdk'

import type { AddressProps } from './address'

export type OrganizationProfileProps = {
  id: string
  addresses?: AddressProps
  created_at: string
  design_template?: TemplateType
  facebook_url?: string
  google_id?: string
  instagram_url?: string
  logo?: string
  name?: string
  ong_description?: string
  ong_id?: string
  ong_type?: OngCategory
  phone?: string
  slug?: string
  token?: string
  twitter_url?: string
  updated_at?: string
}

export class OrganizationProfile {
  public readonly id: string
  public readonly addresses?: AddressProps
  public readonly created_at: string
  public readonly design_template?: TemplateType
  public readonly facebook_url?: string
  public readonly google_id?: string
  public readonly instagram_url?: string
  public readonly logo?: string
  public readonly name?: string
  public readonly ong_description?: string
  public readonly ong_id?: string
  public readonly ong_type?: OngCategory
  public readonly phone?: string
  public readonly slug?: string
  public readonly token?: string
  public readonly twitter_url?: string
  public readonly updated_at?: string

  constructor(props: OrganizationProfileProps) {
    this.id = props.id
    this.addresses = props.addresses
    this.created_at = props.created_at
    this.design_template = props.design_template
    this.facebook_url = props.facebook_url
    this.google_id = props.google_id
    this.instagram_url = props.instagram_url
    this.logo = props.logo
    this.name = props.name
    this.ong_description = props.ong_description
    this.ong_id = props.ong_id
    this.ong_type = props.ong_type
    this.phone = props.phone
    this.slug = props.slug
    this.token = props.token
    this.twitter_url = props.twitter_url
    this.updated_at = props.updated_at
  }

  public hasSocialLinks(): boolean {
    return Boolean(this.facebook_url || this.instagram_url || this.twitter_url)
  }

  public hasGoogleAuth(): boolean {
    return Boolean(this.google_id)
  }
}
