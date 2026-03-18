'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

import { toBase64 } from '@/utils/helpers/to-base-64'
import { tryCatch } from '@/utils/helpers/try-catch'
import { uploadImage } from '@/utils/helpers/upload-image'

import type { ProfileHeaderProps } from './types'

export const ProfileHeader = ({
  organization,
  setValue
}: ProfileHeaderProps) => {
  const profile = organization.organization_profile
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const localUrl = URL.createObjectURL(file)
    setPreview(localUrl)

    const base64 = await toBase64(file)

    setIsUploading(true)
    const { data, error } = await tryCatch(uploadImage({ imagePath: base64 }))
    setIsUploading(false)

    if (error || !data?.secure_url) {
      toast.error('Erro ao fazer upload da imagem.', { position: 'top-center' })
      setPreview(null)
      return
    }

    setValue('logo', data.secure_url, {
      shouldDirty: true,
      shouldValidate: true
    })
    toast.success('Logo atualizada! Salve as alterações para confirmar.', {
      position: 'top-center'
    })
  }

  const logoSrc =
    preview ||
    profile?.logo ||
    'https://static.vecteezy.com/ti/vetor-gratis/p1/19869277-ong-carta-logotipo-projeto-em-branco-fundo-ong-criativo-circulo-carta-logotipo-conceito-ong-carta-projeto-vetor.jpg'

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
              <button
                className="group relative h-24 w-24 shrink-0 cursor-pointer lg:h-28 lg:w-28"
                disabled={isUploading}
                onClick={() => inputRef.current?.click()}
                type="button"
              >
                <Image
                  alt={profile?.name || ''}
                  className="h-full w-full rounded-sm border-4 border-white bg-neutral-50 object-cover shadow-sm"
                  height={120}
                  src={logoSrc}
                  width={120}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-sm bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  {isUploading ? (
                    <span className="text-xs font-medium text-white">
                      Enviando...
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-white">
                      Alterar logo
                    </span>
                  )}
                </div>
              </button>
              <input
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                ref={inputRef}
                type="file"
              />
              <article className="flex flex-col gap-1 pb-1">
                <h1 className="text-2xl font-bold text-neutral-800 lg:text-3xl">
                  {profile?.name}
                </h1>
                <p className="text-sm text-neutral-500">{organization.email}</p>
              </article>
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
