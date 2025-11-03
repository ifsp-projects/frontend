import axios from 'axios'

import { apiBaseUrl } from '../../constants/environments/api-base-url'
import { apiKey } from '../../constants/environments/api-key'

export const apiPostgres = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'x-api-key': apiKey,
    'Content-Type': 'application/json'
  }
})
