import axios from 'axios'

import { apiBaseUrl } from '@/constants/environments/api-base-url'
import { apiKey } from '@/constants/environments/api-key'

if (!apiBaseUrl || !apiKey) {
  throw new Error(
    'Missing required environment variables: API_BASE_URL and API_KEY must be set'
  )
}

export const apiPostgres = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  }
})
