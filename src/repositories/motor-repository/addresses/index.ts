import type { AddressProps } from '@/domain/entities/address'
import { apiPostgres } from '@/services/postgres'
import type { ServiceRequestResponse } from '@/shared/types/service-request-response'

import type {
  CreateAddressData,
  DeleteAddressData,
  DeleteAddressResponse,
  GetAddressByIdData,
  GetAddressByIdResponse,
  UpdateAddressData,
  UpdateAddressResponse
} from './types'

/**
 * Service class responsible for handling address-related API requests.
 * Provides methods for standard CRUD operations: Create, Read (All & By ID), Update, and Delete.
 */
export class Addresses {
  /**
   * Creates a new address.
   * * @async
   * @param {CreateAddressData} params - The data required to create the address.
   * @param {Object} params.payload - The address details to be created.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<CreateAddressResponse | { status: number }>} A promise that resolves to the API response, or an object with a 500 status code if an error occurs.
   */
  createAddress = async ({
    payload
  }: CreateAddressData): Promise<
    ServiceRequestResponse<{
      address: AddressProps
    }>
  > => {
    try {
      return await apiPostgres.post('/addresses', payload)
    } catch (error) {
      console.error({
        createAddressErrorMessage: error.message
      })

      return {
        error: error.message
      }
    }
  }

  /**
   * Retrieves a specific address by its ID.
   * * @async
   * @param {GetAddressByIdData} params - The data required to fetch a specific address.
   * @param {string|number} params.id - The unique identifier of the address.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<GetAddressByIdResponse | { status: number }>} A promise that resolves to the address data, or an object with a 500 status code on error.
   */
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

      return {
        status: 500
      }
    }
  }

  /**
   * Updates an existing address.
   * * @async
   * @param {UpdateAddressData} params - The data required to update the address.
   * @param {Object} params.payload - The address details to be updated (must include the address `id`).
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<UpdateAddressResponse | { status: number }>} A promise that resolves to the updated address response, or an object with a 500 status code on error.
   */
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

      return {
        status: 500
      }
    }
  }

  /**
   * Deletes a specific address by its ID.
   * * @async
   * @param {DeleteAddressData} params - The data required to delete the address.
   * @param {string|number} params.id - The unique identifier of the address to delete.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<DeleteAddressResponse | { status: number }>} A promise that resolves to the deletion confirmation, or an object with a 500 status code on error.
   */
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

      return {
        status: 500
      }
    }
  }
}
