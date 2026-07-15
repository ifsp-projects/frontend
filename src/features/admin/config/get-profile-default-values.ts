import type { ProfileFormSchemaType } from '../containers/profile/schema'
import type { ProfileProps } from '../containers/profile/types'

export const getProfileDefaultValues = (
  profile?: ProfileProps['organization']['organization_profile']
): ProfileFormSchemaType => {
  const address = profile?.addresses[0]

  return {
    phone: profile?.phone || '',
    postal_code: address?.postal_code || '',
    ong_type: profile?.ong_type || '',
    description: profile?.ong_description || '',
    state: address?.state || '',
    city: address?.city || '',
    street: address?.street || '',
    number: Number(address?.number) || 0,
    complement: address?.complement || '',
    design_template: profile?.design_template,
    logo: profile?.logo || '',
    facebook_url: profile?.facebook_url || '',
    instagram_url: profile?.instagram_url || '',
    twitter_url: profile?.twitter_url || ''
  }
}
