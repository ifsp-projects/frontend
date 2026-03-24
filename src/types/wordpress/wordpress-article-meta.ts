import type { JetpackSocialOptions } from './wordpress-social-options'

export interface WordpressArticleMeta {
  _coblocks_accordion_ie_support: string
  _coblocks_attr: string
  _coblocks_dimensions: string
  _coblocks_responsive_height: string
  _jetpack_dont_email_post_to_subs: boolean
  _jetpack_memberships_contains_paid_content: boolean
  _jetpack_memberships_contains_paywalled_content: boolean
  _jetpack_newsletter_access: string
  _jetpack_newsletter_tier_id: number
  advanced_seo_description: string
  footnotes: string
  jetpack_post_was_ever_published: boolean
  jetpack_publicize_feature_enabled: boolean
  jetpack_publicize_message: string
  jetpack_seo_html_title: string
  jetpack_seo_noindex: boolean
  jetpack_social_options: JetpackSocialOptions
  jetpack_social_post_already_shared: boolean
  reader_suggested_tags: string
}
