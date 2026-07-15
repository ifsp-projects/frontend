import { toast } from 'sonner'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { renderHook } from 'vitest-browser-react'

import { useCepLookup } from '.'

const VIACEP_RESPONSE_MOCK = {
  estado: 'SP',
  localidade: 'São Paulo',
  bairro: 'Sé',
  logradouro: 'Praça da Sé'
}

vi.mock('sonner', () => ({
  toast: {
    error: vi.fn()
  }
}))

describe('useCeppLookup', () => {
  let fetchSpy
  let consoleSpy

  beforeEach(() => {
    vi.clearAllMocks()

    fetchSpy = vi.spyOn(global, 'fetch')
    consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should return the formatted data when the CEP is valid and the request is successfull', async () => {
    fetchSpy.mockResolvedValueOnce({
      json: async () => VIACEP_RESPONSE_MOCK
    } as Response)

    const { result } = await renderHook(() => useCepLookup())

    const cepResult = await result.current.lookupCep('01001000')

    expect(fetchSpy).toHaveBeenCalledWith(
      'https://viacep.com.br/ws/01001000/json/'
    )

    expect(cepResult).toEqual({
      state: 'SP',
      city: 'São Paulo',
      street: 'Sé, Praça da Sé'
    })

    expect(toast.error).not.toHaveBeenCalled()
  })

  it('should log the error, display a toast notification, and return null when the request fails', async () => {
    const mockError = new Error('Network Error')

    fetchSpy.mockRejectedValueOnce(mockError)

    const { result } = await renderHook(() => useCepLookup())

    const cepResult = await result.current.lookupCep('00000000')

    expect(consoleSpy).toHaveBeenCalledWith(mockError)

    expect(toast.error).toHaveBeenCalledWith(
      'An error occurred while retrieving the address information.',
      { position: 'top-center' }
    )

    expect(cepResult).toBeNull()
  })
})
