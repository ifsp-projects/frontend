const apiKeyValue = process.env.API_KEY

if (!apiKeyValue) {
  throw new Error('API_KEY environment variable is required but not defined')
}

export const apiKey = apiKeyValue
