'use client'

import Image from 'next/image'
import Link from 'next/link'

import type { ProfileHeaderProps } from './types'

export const ProfileHeader = ({ organization }: ProfileHeaderProps) => {
  const profile = organization.organization_profile

  return (
    <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
      <div className="relative z-0 h-24 w-full overflow-hidden lg:h-28">
        <Image
          alt="Pattern do banner"
          className="object-cover"
          src="/images/profile-banner-pattern.svg"
          fill
        />
      </div>

      <div className="relative z-10 px-4 pb-6 lg:px-6 lg:pb-8">
        <div className="-mt-10 flex flex-col gap-4 lg:-mt-12 lg:gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-end gap-4">
              <Image
                alt={profile?.name}
                className="h-24 w-24 rounded-sm border-4 border-white bg-neutral-50 object-cover shadow-sm lg:h-28 lg:w-28"
                height={120}
                src={profile?.logo}
                width={120}
              />
              <div className="flex flex-col gap-1 pb-1">
                <h1 className="text-2xl font-bold text-neutral-800 lg:text-3xl">
                  {profile?.name}
                </h1>
                <p className="text-sm text-neutral-500">{organization.email}</p>
              </div>
            </div>

            <Link
              className="w-full cursor-pointer rounded-sm border border-neutral-700 bg-white px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-100 lg:w-auto lg:px-6"
              href={`/ongs/${profile?.slug}`}
            >
              Acessar minha página
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
