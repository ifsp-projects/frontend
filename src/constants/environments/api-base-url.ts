const apiBaseUrlValue = process.env.API_BASE_URL

if (!apiBaseUrlValue) {
  throw new Error(
    'API_BASE_URL environment variable is required but not defined'
  )
}

export const apiBaseUrl = apiBaseUrlValue
