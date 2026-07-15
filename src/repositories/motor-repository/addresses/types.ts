import type { AddressProps } from '@/domain/entities/address'

export interface CreateAddressData {
  payload: Omit<AddressProps, 'id' | 'created_at' | 'updated_at'>
}

export interface GetAddressByIdData {
  id: string
  token: string
}

export interface UpdateAddressData {
  payload: Omit<AddressProps, 'created_at'>
  token: string
}

export interface DeleteAddressData {
  id: string
  token: string
}

export interface CreateAddressResponse {
  address: AddressProps
}

export interface GetAddressByIdResponse {
  address: AddressProps
}

export interface UpdateAddressResponse {
  address: AddressProps
}

export interface DeleteAddressResponse {
  address: AddressProps
}
