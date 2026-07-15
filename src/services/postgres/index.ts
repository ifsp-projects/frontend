import axios from 'axios'

import { apiBaseUrl } from '@/shared/config/env/api-base-url'
import { apiKey } from '@/shared/config/env/api-key'

export const apiPostgres = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  }
})
