import axios from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'

import type { AddressFormInput } from './schemas'

interface UseCreateAddressParams {
  onSettled?: () => void
  onSuccess?: (address: any) => void
  organizationProfileId: string
  token: string
}

export const useCreateAddress = ({
  organizationProfileId,
  token,
  onSuccess,
  onSettled
}: UseCreateAddressParams) => {
  const [isCreating, setIsCreating] = useState(false)

  const createAddress = async (values: AddressFormInput) => {
    setIsCreating(true)
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
    } catch (error) {
      console.error(error)
      toast.error(
        'Ocorreu um erro ao cadastrar o endereço. Por favor, tente novamente.',
        {
          position: 'top-center'
        }
      )
    } finally {
      setIsCreating(false)
      onSettled?.()
    }
  }

  return { createAddress, isCreating }
}
