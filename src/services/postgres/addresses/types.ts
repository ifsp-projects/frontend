import type { PostgresAddress } from '@/types/postgres/postgres-address'

export interface CreateAddressData {
  payload: Omit<PostgresAddress, 'id' | 'created_at' | 'updated_at'>
  token: string
}

export interface GetAddressByIdData {
  id: string
  token: string
}

export interface GetAllAddressesData {
  token: string
}

export interface UpdateAddressData {
  payload: PostgresAddress
  token: string
}

export interface DeleteAddressData {
  id: string
  token: string
}

export interface CreateAddressResponse {
  address: PostgresAddress
}

export interface GetAddressByIdResponse {
  address: PostgresAddress
}

export interface GetAllAddressesResponse {
  address: PostgresAddress[]
}

export interface UpdateAddressResponse {
  address: PostgresAddress
}

export interface DeleteAddressResponse {
  address: PostgresAddress
}
