import { apiPostgres } from '@/instances/postgres'

import type {
  CreateAddressData,
  CreateAddressResponse,
  DeleteAddressData,
  DeleteAddressResponse,
  GetAddressByIdData,
  GetAddressByIdResponse,
  GetAllAddressesData,
  GetAllAddressesResponse,
  UpdateAddressData,
  UpdateAddressResponse
} from './types'

export class Addresses {
  createAddress = async ({ payload, token }: CreateAddressData) => {
    try {
      return await apiPostgres.post<CreateAddressResponse>(
        '/addresses',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        createAddressErrorMessage: error.message
      })
    }
  }

  getAllAddresses = async ({ token }: GetAllAddressesData) => {
    try {
      return await apiPostgres.get<GetAllAddressesResponse>('/addresses', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        getAllAddressesErrorMessage: error.message
      })
    }
  }

  getAddressById = async ({ id, token }: GetAddressByIdData) => {
    try {
      return await apiPostgres.get<GetAddressByIdResponse>(
        `/addresses/${id.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        getAddressByIdErrorMessage: error.message
      })
    }
  }

  updateAddress = async ({ payload, token }: UpdateAddressData) => {
    try {
      return await apiPostgres.patch<UpdateAddressResponse>(
        `/addresses/${payload?.id?.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        updateAddressErrorMessage: error.message
      })
    }
  }

  deleteAddress = async ({ id, token }: DeleteAddressData) => {
    try {
      return await apiPostgres.delete<DeleteAddressResponse>(
        `/addresses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        deleteAddressErrorMessage: error.message
      })
    }
  }
}
