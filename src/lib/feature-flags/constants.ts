import type { CachedFlag } from './types'

export const FLAG_TTL_MS = 5 * 60 * 1000 // 5 minutes

export const flagCache = new Map<string, CachedFlag>()
export const pendingCalls = new Map<string, Promise<boolean>>()
