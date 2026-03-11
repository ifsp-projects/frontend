'use client'

import { useState } from 'react'

import { EmptyBox } from '@/assets/icons/empty-box'
import { Button } from '@/components/ui/button'

import { AddressFormFields } from '../address-form-fields'
import { CreateAddressModal } from '../create-address-modal'
import { SectionCard } from '../section-card'
import type { AddressSectionProps } from './types'

export const AddressSection = ({
  address,
  control,
  register,
  setValue,
  organizationProfileId,
  token,
  onAddressCreated
}: AddressSectionProps) => {
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

      <button
        className="mt-2 cursor-pointer self-start rounded-sm bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 lg:px-6 lg:text-base"
        type="submit"
      >
        Salvar alterações
      </button>
    </SectionCard>
  )
}
