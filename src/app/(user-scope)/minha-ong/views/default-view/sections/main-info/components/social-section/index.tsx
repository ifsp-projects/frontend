import type { FieldValues, Path, PathValue } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { FacebookIcon } from '@/assets/icons/facebook'
import { TwitterIcon } from '@/assets/icons/twitter'
import { InstagramIcon } from '@/assets/socials/instagram'
import { Button } from '@/components/ui/button'
import { Spin } from '@/components/ui/spin'

import { SectionCard } from '../section-card'
import type { SocialSectionProps } from './types'

export const SocialSection = <T extends FieldValues>({
  control,
  organization,
  isSubmitting
}: SocialSectionProps) => {
  return (
    <SectionCard title="Redes Sociais do Projeto">
      <div className="mt-3 flex w-full items-center gap-3">
        <figure className="flex h-10 w-10 items-center justify-center">
          <InstagramIcon className="h-10 w-10 fill-rose-400 text-rose-400" />
        </figure>
        <Controller
          defaultValue={
            organization?.organization_profile?.instagram_url as PathValue<
              T,
              Path<T>
            >
          }
          render={({ field }) => (
            <input
              {...field}
              className="w-full rounded-sm border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
              maxLength={99}
              minLength={1}
              onChange={e => field.onChange(e.target.value)}
              placeholder="Instagram do seu projeto"
              type="text"
              value={field.value ?? ''}
            />
          )}
          control={control}
          name={'instagram_url' as Path<T>}
        />
      </div>
      <div className="flex w-full items-center gap-3">
        <figure className="flex h-10 w-10 items-center justify-center">
          <FacebookIcon className="h-7 w-7" />
        </figure>
        <Controller
          defaultValue={
            organization?.organization_profile?.facebook_url as PathValue<
              T,
              Path<T>
            >
          }
          render={({ field }) => (
            <input
              {...field}
              className="w-full rounded-sm border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
              maxLength={99}
              minLength={1}
              onChange={e => field.onChange(e.target.value)}
              placeholder="Facebook do seu projeto"
              type="text"
              value={field.value ?? ''}
            />
          )}
          control={control}
          name={'facebook_url' as Path<T>}
        />
      </div>
      <div className="flex w-full items-center gap-3">
        <figure className="flex h-10 w-10 items-center justify-center">
          <TwitterIcon className="h-7 w-7" />
        </figure>
        <Controller
          defaultValue={
            organization?.organization_profile?.twitter_url as PathValue<
              T,
              Path<T>
            >
          }
          render={({ field }) => (
            <input
              {...field}
              className="w-full rounded-sm border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
              maxLength={99}
              minLength={1}
              onChange={e => field.onChange(e.target.value)}
              placeholder="Twitter do seu projeto"
              type="text"
              value={field.value ?? ''}
            />
          )}
          control={control}
          name={'twitter_url' as Path<T>}
        />
      </div>
      <div className="flex w-full items-center md:justify-end">
        <Button
          className="mt-4 flex cursor-pointer items-center gap-3 text-sm"
          type="submit"
        >
          Salvar alterações
          {isSubmitting ? <Spin /> : null}
        </Button>
      </div>
    </SectionCard>
  )
}
