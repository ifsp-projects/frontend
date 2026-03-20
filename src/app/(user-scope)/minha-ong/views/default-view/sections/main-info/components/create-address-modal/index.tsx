'use client'

import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Modal } from '@/components/shared/modal'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressFormFields } from '../address-form-fields'
import type { AddressFormInput, AddressFormOutput } from './schema'
import { addressSchema } from './schema'
import type { CreateAddressModalProps } from './types'

export const CreateAddressModal = ({
  isOpen,
  setIsOpen,
  organizationProfileId,
  token,
  onSuccess
}: CreateAddressModalProps) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting }
  } = useForm<AddressFormInput, any, AddressFormOutput>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      postal_code: '',
      state: '',
      city: '',
      street: '',
      number: '',
      complement: ''
    }
  })

  const onSubmit = async values => {
    try {
      const response = await axios.post('/api/addresses/create-address', {
        ...values,
        organization_profile_id: organizationProfileId,
        token
      })

      if (response.status !== 201) {
        toast.error(response.data.message, { position: 'top-center' })
        return
      }

      toast.success('Endereço cadastrado com sucesso!', {
        position: 'top-center'
      })
      onSuccess?.(response.data.address)
      setIsOpen(false)
    } catch (error) {
      console.error(`Error creating address: ${error}`)
      toast.error(
        'Ocorreu um erro ao cadastrar o endereço. Por favor, tente novamente.',
        {
          position: 'top-center'
        }
      )
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-6 bg-white px-8 py-12">
        <article className="flex w-full flex-col">
          <h2 className="text-xl font-bold text-neutral-800">
            Cadastrar endereço
          </h2>
          <p className="mt-1 text-sm text-neutral-500">
            Preencha os dados abaixo para cadastrar o endereço da sua ONG.
          </p>
        </article>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <AddressFormFields
            control={control}
            register={register}
            setValue={setValue}
          />

          <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button
              className="w-full cursor-pointer rounded-sm border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="w-full cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar endereço'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
