import axios from 'axios'
import type { FieldErrors, Resolver } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUserSession } from '@/hooks/use-user-session'
import { zodResolver } from '@hookform/resolvers/zod'

import { getProfileDefaultValues } from '../../config/get-profile-default-values'
import type { ProfileFormSchemaType } from '../../containers/profile/schema'
import { profileFormSchema } from '../../containers/profile/schema'
import type { ProfileProps } from '../../containers/profile/types'

export const useOrganizationProfileForm = (
  organization: ProfileProps['organization']
) => {
  const { update, token } = useUserSession()
  const profile = organization?.organization_profile

  const form = useForm<ProfileFormSchemaType>({
    resolver: zodResolver(profileFormSchema) as Resolver<ProfileFormSchemaType>,
    defaultValues: getProfileDefaultValues(profile)
  })

  const onError = (errors: FieldErrors<ProfileFormSchemaType>) => {
    console.log('Form errors:', errors)
  }

  const onSubmit = form.handleSubmit(async values => {
    if (!organization?.id) return

    try {
      const response = await axios.patch(
        '/api/organization-profiles/update-organization-profile',
        {
          ...values,
          slug: organization.organization_profile?.slug,
          ong_id: organization.organization_profile?.id,
          addressId: profile?.addresses[0]?.id,
          token
        }
      )

      if (response.status !== 201) {
        toast.error(response.data.message, { position: 'top-center' })
        return
      }

      toast.success(response.data.message, { position: 'top-center' })

      await update({
        organization_profile: response.data.organizationProfile,
        is_user_new: false
      })
    } catch (error) {
      console.error(`Error trying to update organization profile: ${error}`)
      toast.error(
        'Ocorreu um erro ao criar o perfil da organização. Por favor, tente novamente.',
        { position: 'top-center' }
      )
    }
  }, onError)

  return { ...form, profile, token, update, onSubmit }
}
