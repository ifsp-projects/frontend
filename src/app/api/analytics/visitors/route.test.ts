import { NextRequest } from 'next/server'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { GET } from './route'

vi.mock('@/shared/config/env/api-base-url', () => ({
  apiBaseUrl: 'https://api.example.test'
}))

describe('visitors proxy', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('forwards the query and session token to the backend', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ range: '7d' }), { status: 200 })
      )
    vi.stubGlobal('fetch', fetchMock)
    const request = new NextRequest(
      'http://localhost/api/analytics/visitors?slug=ong&range=7d',
      { headers: { Authorization: 'Bearer session-token' } }
    )

    const response = await GET(request)

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({ range: '7d' })
    const [url, options] = fetchMock.mock.calls[0]
    expect(url.toString()).toBe(
      'https://api.example.test/api/analytics/visitors?slug=ong&range=7d'
    )
    expect(options.headers).toEqual({ Authorization: 'Bearer session-token' })
    expect(options.cache).toBe('no-store')
  })

  it('preserves a backend error status and message', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ error: 'Acesso negado' }), {
          status: 403
        })
      )
    )
    const response = await GET(
      new NextRequest('http://localhost/api/analytics/visitors', {
        headers: { Authorization: 'Bearer token' }
      })
    )
    expect(response.status).toBe(403)
    expect(await response.json()).toEqual({ error: 'Acesso negado' })
  })

  it('rejects a missing session without contacting the backend', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    const response = await GET(
      new NextRequest('http://localhost/api/analytics/visitors')
    )
    expect(response.status).toBe(401)
    expect(await response.json()).toEqual({ error: 'Sessão inválida' })
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
