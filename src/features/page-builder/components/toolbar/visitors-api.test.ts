import { afterEach, describe, expect, it, vi } from 'vitest'

import type { VisitorsApiError } from './visitors-api'
import { fetchVisitors } from './visitors-api'

describe('fetchVisitors', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('encodes a daily request once through the local proxy', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ selected_date: '2026-09-23' }))
      )
    vi.stubGlobal('fetch', fetchMock)

    const data = await fetchVisitors(
      { slug: 'ong teste', range: '7d', date: '2026-09-23' },
      'session-token'
    )

    expect(data.selected_date).toBe('2026-09-23')
    expect(fetchMock).toHaveBeenCalledOnce()
    expect(fetchMock.mock.calls[0][0]).toBe(
      '/api/analytics/visitors?slug=ong+teste&range=7d&date=2026-09-23'
    )
    expect(fetchMock.mock.calls[0][1].headers).toEqual({
      Authorization: 'Bearer session-token'
    })
  })

  it('retains the HTTP status when the backend rejects a request', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ error: 'Acesso negado' }), {
          status: 403
        })
      )
    )

    await expect(
      fetchVisitors({ slug: 'ong', range: '30d' }, 'session-token')
    ).rejects.toMatchObject<Partial<VisitorsApiError>>({
      message: 'Acesso negado',
      status: 403
    })
  })
})
