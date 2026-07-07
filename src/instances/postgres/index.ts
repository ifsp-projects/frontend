import axios from 'axios'

import { apiBaseUrl } from '@/constants/env/api-base-url'
import { apiKey } from '@/constants/env/api-key'

export const apiPostgres = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  }
})
