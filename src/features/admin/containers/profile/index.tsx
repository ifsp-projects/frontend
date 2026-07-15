'use client'

import React from 'react'

import { AboutTab } from '../../components/tabs/about-tab'
import { AddressTab } from '../../components/tabs/address-tab'
import { SocialTab } from '../../components/tabs/social-tab'
import { ProfileHeader } from '../../components/ui/header'
import { useOrganizationProfileForm } from '../../hooks/use-organization-profile-form'
import type { ProfileProps } from './types'

export const Profile: React.FC<ProfileProps> = ({ organization }) => {
  const {
    register,
    control,
    setValue,
    profile,
    token,
    update,
    onSubmit,
    formState: { isSubmitting }
  } = useOrganizationProfileForm(organization)

  if (!organization) return null

  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <form
        className="mx-auto flex w-full max-w-3xl flex-col gap-6 lg:max-w-6xl lg:gap-8 xl:max-w-7xl"
        onSubmit={onSubmit}
      >
        <ProfileHeader organization={organization} setValue={setValue} />

        <AboutTab
          control={control}
          defaultDescription={profile?.ong_description}
          isSubmitting={isSubmitting}
          organization={organization}
          register={register}
        />

        <SocialTab
          control={control}
          isSubmitting={isSubmitting}
          organization={organization}
          register={register}
        />

        <AddressTab
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
