'use client'

import { useForm } from 'react-hook-form'

import { Modal } from '@/components/shared/modal'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressFormFields } from '../../components/address-form-fields'
import { DEFAULT_VALUES_CREATE_FORM_MODAL } from '../../constants/default-values-create-address-modal'
import { useCreateAddress } from '../../hooks/use-create-address'
import type { AddressFormInput } from './schema'
import { addressSchema } from './schema'
import type { CreateAddressModalProps } from './types'

export const CreateAddressModal = ({
  isOpen,
  setIsOpen,
  organizationProfileId,
  token,
  onSuccess
}: CreateAddressModalProps) => {
  const { createAddress, isCreating } = useCreateAddress({
    organizationProfileId,
    token,
    onSuccess: address => {
      onSuccess?.(address)
      setIsOpen(false)
      reset()
    }
  })

  const { control, register, handleSubmit, setValue, reset } =
    useForm<AddressFormInput>({
      resolver: zodResolver(addressSchema),
      defaultValues: DEFAULT_VALUES_CREATE_FORM_MODAL
    })

  const onSubmit = async (values: AddressFormInput) => {
    await createAddress(values)
  }

  const handleClose = () => {
    reset()
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={handleClose}>
      <div className="flex flex-col gap-6 bg-white px-8 py-12">
        <header className="flex w-full flex-col">
          <h2 className="text-xl font-bold text-neutral-800">
            Cadastrar endereço
          </h2>
          <p className="mt-1 text-sm text-neutral-500">
            Preencha os dados abaixo para cadastrar o endereço da sua ONG.
          </p>
        </header>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <AddressFormFields
            control={control}
            register={register}
            setValue={setValue}
          />

          <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button
              className="w-full cursor-pointer rounded-sm border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
              disabled={isCreating}
              onClick={handleClose}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="w-full cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isCreating}
              type="submit"
            >
              {isCreating ? 'Cadastrando...' : 'Cadastrar endereço'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
