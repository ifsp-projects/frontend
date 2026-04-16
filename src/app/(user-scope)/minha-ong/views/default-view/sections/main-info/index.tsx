'use client'

import axios from 'axios'
import React from 'react'
import type { FieldErrors, Resolver } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUserSession } from '@/hooks/use-user-session'
import { zodResolver } from '@hookform/resolvers/zod'

import { AboutSection } from './components/about-section'
import { AddressSection } from './components/address-section'
import { ProfileHeader } from './components/profile-header'
import { SocialSection } from './components/social-section'
import { type ProfileFormSchemaType, profileFormSchema } from './schema'
import type { MainInfoProps } from './types'

export const MainInfo: React.FC<MainInfoProps> = ({ organization }) => {
  const { update, token } = useUserSession()

  if (!organization) return null

  const profile = organization.organization_profile

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { isSubmitting }
  } = useForm<ProfileFormSchemaType>({
    resolver: zodResolver(profileFormSchema) as Resolver<ProfileFormSchemaType>,
    defaultValues: {
      phone: profile?.phone || '',
      postal_code: profile?.addresses[0]?.postal_code || '',
      ong_type: profile?.ong_type || '',
      description: profile?.ong_description || '',
      state: profile?.addresses[0]?.state || '',
      city: profile?.addresses[0]?.city || '',
      street: profile?.addresses[0]?.street || '',
      number: Number(profile?.addresses[0]?.number) || 0,
      complement: profile?.addresses[0]?.complement || '',
      design_template: profile?.design_template,
      logo: profile?.logo || '',
      facebook_url: profile?.facebook_url || '',
      instagram_url: profile?.instagram_url || '',
      twitter_url: profile?.twitter_url || ''
    }
  })

  const onError = (errors: FieldErrors<ProfileFormSchemaType>) => {
    console.log('Form errors:', errors)
  }

  const onSubmit = async (values: ProfileFormSchemaType) => {
    if (!organization?.id) return null

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
  }

  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <form
        className="mx-auto flex w-full max-w-3xl flex-col gap-6 lg:max-w-6xl lg:gap-8 xl:max-w-7xl"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <ProfileHeader organization={organization} setValue={setValue} />

        <AboutSection
          control={control}
          defaultDescription={profile?.ong_description}
          isSubmitting={isSubmitting}
          organization={organization}
          register={register}
        />

        <SocialSection
          control={control}
          isSubmitting={isSubmitting}
          organization={organization}
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
          isSubmitting={isSubmitting}
          organization={organization}
          organizationProfileId={profile?.id}
          register={register}
          setValue={setValue}
          token={token}
        />
      </form>
    </section>
  )
}
