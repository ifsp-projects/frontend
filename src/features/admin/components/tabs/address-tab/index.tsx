'use client'

import { useState } from 'react'

import { EmptyBox } from '@/shared/assets/icons/empty-box'
import { Button } from '@/shared/components/ui/button'
import { Spin } from '@/shared/components/ui/spin'

import { AddressFormFields } from '../../address-form-fields'
import { CreateAddressModal } from '../../create-address-modal'
import { SectionCard } from '../../ui/section-card'
import type { AddressTabProps } from './types'

export const AddressTab = ({
  address,
  control,
  register,
  setValue,
  organizationProfileId,
  token,
  onAddressCreated,
  organization,
  isSubmitting
}: AddressTabProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!address) {
    return (
      <>
        <div className="flex flex-col items-center gap-4 rounded-sm border border-neutral-200 bg-white px-4 py-8 lg:py-12">
          <figure>
            <EmptyBox />
          </figure>
          <article className="flex w-full flex-col items-center justify-center">
            <p className="text-center text-lg font-semibold">
              Nenhum endereço encontrado!
            </p>
            <p className="text-center text-sm text-neutral-500">
              Clique no botão abaixo para cadastrar o endereço da sua ONG
            </p>
            <Button
              className="mt-4 cursor-pointer text-sm"
              onClick={() => setIsModalOpen(true)}
              type="button"
            >
              Cadastrar endereço
            </Button>
          </article>
        </div>

        <CreateAddressModal
          isOpen={isModalOpen}
          onSuccess={onAddressCreated}
          organizationProfileId={organizationProfileId}
          setIsOpen={setIsModalOpen}
          token={token}
        />
      </>
    )
  }

  return (
    <SectionCard title="Informações de Contato">
      <AddressFormFields
        control={control}
        register={register}
        setValue={setValue}
        showPhone
      />
      <div className="flex w-full items-center md:justify-end">
        <Button
          aria-label="Save changes"
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
