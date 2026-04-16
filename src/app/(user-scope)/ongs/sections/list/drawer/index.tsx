// components/ong-drawer.tsx
'use client'

import {
  ExternalLink,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
  X
} from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle
} from '@/components/ui/drawer'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import { formatOngType } from '@/utils/helpers/format-ong-type'

interface OngDrawerProps {
  onClose: () => void
  ong: PostgresOrganization | null
  open: boolean
}

const categoryColors: Record<string, string> = {
  Animais: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Direitos Humanos': 'bg-purple-50 text-purple-700 border-purple-200',
  'Combate à Fome': 'bg-orange-50 text-orange-700 border-orange-200',
  'Crianças e Adolescentes': 'bg-sky-50 text-sky-700 border-sky-200',
  Idosos: 'bg-blue-50 text-blue-700 border-blue-200',
  'Pessoas com Deficiência': 'bg-indigo-50 text-indigo-700 border-indigo-200'
}

export const OngDrawer: React.FC<OngDrawerProps> = ({ ong, open, onClose }) => {
  const profile = ong?.organization_profile
  if (!profile) return null

  const initial = profile.name?.charAt(0) ?? '?'
  const categoryColor =
    categoryColors[profile.ong_type ?? ''] ??
    'bg-neutral-100 text-neutral-600 border-neutral-200'

  const socialLinks = [
    profile.facebook_url && {
      href: profile.facebook_url,
      label: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      color: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'
    },
    profile.instagram_url && {
      href: profile.instagram_url,
      label: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      color: 'hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200'
    },
    profile.twitter_url && {
      href: profile.twitter_url,
      label: 'Twitter / X',
      icon: <Twitter className="h-5 w-5" />,
      color: 'hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200'
    },
    profile.phone && {
      href: `tel:${profile.phone}`,
      label: profile.phone,
      icon: <Phone className="h-5 w-5" />,
      color: 'hover:bg-green-50 hover:text-green-600 hover:border-green-200'
    }
  ].filter(Boolean) as {
    href: string
    label: string
    icon: React.ReactNode
    color: string
  }[]

  const address = profile.addresses
  const addressLine = [address?.city, address?.state].filter(Boolean).join(', ')

  return (
    <Drawer direction="bottom" onClose={onClose} open={open}>
      <DrawerContent className="mx-auto max-w-lg rounded-t-2xl border-0 p-0 shadow-2xl outline-none focus:outline-none">
        <DrawerTitle className="hidden">{profile.name}</DrawerTitle>
        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-linear-to-br from-rose-100 to-rose-300">
          {profile.logo ? (
            <img
              alt=""
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-sm"
              src={profile.logo}
              aria-hidden
            />
          ) : null}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <div className="h-1 w-10 rounded-full bg-white/50" />
          </div>

          <DrawerClose
            className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/40"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </DrawerClose>

          <span
            className={`absolute top-4 left-4 rounded-full border px-3 py-0.5 text-[11px] font-semibold backdrop-blur-sm ${categoryColor}`}
          >
            {formatOngType({ ong_type: profile.ong_type })}
          </span>

          <div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2">
            <div className="h-32 w-32 overflow-hidden rounded-2xl border-2 border-white bg-white shadow-lg">
              {profile.logo ? (
                <img
                  alt={profile.name ?? ''}
                  className="h-full w-full object-contain p-1"
                  src={profile.logo}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-100 to-rose-200">
                  <span className="text-2xl font-bold text-rose-400">
                    {initial}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold text-neutral-900">
              {profile.name}
            </h2>
            {addressLine && (
              <p className="mt-1 flex items-center justify-center gap-1 text-xs text-neutral-400">
                <MapPin className="h-3 w-3" />
                {addressLine}
              </p>
            )}
          </div>

          {profile.ong_description && (
            <p className="mb-5 text-center text-sm leading-relaxed text-neutral-500">
              {profile.ong_description}
            </p>
          )}

          {socialLinks.length > 0 && (
            <div className="mb-5">
              <p className="mb-2.5 text-center text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
                Redes Sociais
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {socialLinks.map(({ href, label, icon, color }) => (
                  <a
                    className={`flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-all duration-150 ${color}`}
                    href={href}
                    key={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={label}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <Link
            className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-500 active:scale-[0.98]"
            href={`/ongs/${profile.slug}`}
            onClick={onClose}
          >
            Conhecer o projeto
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
