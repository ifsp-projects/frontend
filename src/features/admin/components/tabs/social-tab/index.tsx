import type { PathValue } from 'react-hook-form'
import { Controller, type FieldValues, type Path } from 'react-hook-form'

import { SOCIAL_NETWORKS } from '@/features/admin/constants/social-networks'
import { Button } from '@/shared/components/ui/button'
import { Spin } from '@/shared/components/ui/spin'

import { SectionCard } from '../../ui/section-card'
import type { SocialTabProps } from './types'

export const SocialTab = <T extends FieldValues>({
  control,
  organization,
  isSubmitting
}: SocialTabProps) => {
  return (
    <SectionCard title="Redes Sociais do Projeto">
      {SOCIAL_NETWORKS.map(({ id, Icon, placeholder, iconClass }) => (
        <div className="mt-3 flex w-full items-center gap-3" key={id}>
          <figure className="flex h-10 w-10 items-center justify-center">
            <Icon className={iconClass} />
          </figure>
          <Controller
            defaultValue={
              (organization?.organization_profile?.[id] ?? '') as PathValue<
                T,
                Path<T>
              >
            }
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
                maxLength={99}
                placeholder={placeholder}
                type="text"
                value={field.value ?? ''}
              />
            )}
            control={control}
            name={id as Path<T>}
          />
        </div>
      ))}

      <div className="flex w-full items-center md:justify-end">
        <Button
          className="mt-4 flex cursor-pointer items-center gap-3 text-sm"
          disabled={isSubmitting}
          type="submit"
        >
          Salvar alterações
          {isSubmitting && <Spin />}
        </Button>
      </div>
    </SectionCard>
  )
}
