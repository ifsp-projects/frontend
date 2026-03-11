import { toast } from 'sonner'

import { tryCatch } from '@/utils/helpers/try-catch'

import type { CepResult } from './types'

/**
 * A custom hook for fetching Brazilian address details based on a postal code (CEP).
 * It interacts with the external ViaCEP API and gracefully handles network errors
 * by displaying a toast notification to the user.
 */
export const useCepLookup = () => {
  const lookupCep = async (cep: string): Promise<CepResult | null> => {
    const request = await tryCatch(
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
    )

    if (request.error) {
      console.error(request.error)
      toast.error(
        'Houve um erro ao encontrar as informações referentes ao endereço',
        { position: 'top-center' }
      )
      return null
    }

    const data = await request.data.json()

    return {
      state: data.estado,
      city: data.localidade,
      street: `${data.bairro}, ${data.logradouro}`
    }
  }

  return { lookupCep }
}
