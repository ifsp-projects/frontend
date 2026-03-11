'use client'

import axios from 'axios'
import type { Resolver } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUserSession } from '@/hooks/use-user-session'
import { zodResolver } from '@hookform/resolvers/zod'

import { AboutSection } from './components/about-section'
import { AddressSection } from './components/address-section'
import { ProfileHeader } from './components/profile-header'
import { type ProfileFormSchemaType, profileFormSchema } from './types'

export const MainInfo = () => {
  const { organization, update, token } = useUserSession()

  if (!organization) return null

  const profile = organization.organization_profile

  const { handleSubmit, register, control, setValue } =
    useForm<ProfileFormSchemaType>({
      resolver: zodResolver(
        profileFormSchema
      ) as Resolver<ProfileFormSchemaType>,
      defaultValues: {
        phone: profile?.phone || '',
        postal_code: profile?.addresses?.postal_code || '',
        ong_type: profile?.ong_type || '',
        description: profile?.ong_description || '',
        state: profile?.addresses?.state || '',
        city: profile?.addresses?.city || '',
        street: profile?.addresses?.street || '',
        number: Number(profile?.addresses?.number) || 0,
        complement: profile?.addresses?.complement || ''
      }
    })

  const onSubmit = async (values: ProfileFormSchemaType) => {
    if (!organization?.id) return null

    try {
      const response = await axios.post(
        '/api/organization-profiles/update-organization-profile',
        {
          ...values,
          ong_id: organization.id,
          address_id: profile?.addresses?.id,
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
  }

  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <form
        className="mx-auto flex w-full max-w-3xl flex-col gap-6 lg:max-w-6xl lg:gap-8 xl:max-w-7xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProfileHeader organization={organization} />

        <AboutSection
          control={control}
          defaultDescription={profile?.ong_description}
          register={register}
        />

        <AddressSection
          onAddressCreated={address =>
            update({
              organization_profile: {
                ...profile,
                addresses: address
              }
            })
          }
          address={profile?.addresses}
          control={control}
          organizationProfileId={profile?.id}
          register={register}
          setValue={setValue}
          token={token}
        />
      </form>
    </section>
  )
}
