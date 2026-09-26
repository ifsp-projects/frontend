import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page, userEvent } from 'vitest/browser'

import { Toolbar } from './index'

const { errorToast, performanceGet } = vi.hoisted(() => ({
  errorToast: vi.fn(),
  performanceGet: vi.fn()
}))

vi.mock('sonner', () => ({
  toast: { error: errorToast, success: vi.fn() }
}))
vi.mock('axios', () => ({
  default: { get: performanceGet, patch: vi.fn() }
}))
vi.mock('@/shared/hooks/use-user-session', () => ({
  useUserSession: () => ({ token: 'session-token' })
}))
vi.mock('@/features/page-builder/stores/page-builder-store', () => ({
  usePageBuilderStore: (selector: (state: unknown) => unknown) =>
    selector({
      mainColor: '#be123c',
      getSections: () => ({}),
      getCurrentOrder: () => [],
      setInitialMainColor: vi.fn(),
      setInitialColorPalette: vi.fn()
    })
}))

const response = (slug: string) =>
  ({
    range: '30d',
    timezone: 'America/Sao_Paulo',
    period_start: '2026-08-25',
    period_end: '2026-09-23',
    selected_date: null,
    updated_at: '2026-09-24T12:00:00.000Z',
    unique_visitors: slug === 'ong-a' ? 3 : 1,
    pageviews: slug === 'ong-a' ? 14 : 1,
    change_pct: 50,
    views_per_visitor: 4.67,
    previous_unique_visitors: 2,
    daily: Array.from({ length: 30 }, (_, index) => ({
      date: `2026-09-${String(index + 1).padStart(2, '0')}`,
      visitors: 0,
      pageviews: 0
    })),
    hourly: null,
    peak_hour: null,
    period_highlights: { best_day: '2026-09-23', average_daily_pageviews: 2 },
    sources: [{ kind: 'unknown', domain: null, pageviews: 14, share_pct: 100 }],
    devices: [
      { type: 'mobile', pageviews: 14, share_pct: 100 },
      { type: 'desktop', pageviews: 0, share_pct: 0 },
      { type: 'tablet', pageviews: 0, share_pct: 0 },
      { type: 'unknown', pageviews: 0, share_pct: 0 }
    ]
  }) as VisitorsResponse

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  })

describe('Toolbar visitors integration', () => {
  beforeEach(() => {
    errorToast.mockReset()
    performanceGet.mockReset()
    vi.unstubAllGlobals()
  })

  it('fetches only on opening visitors and preserves Performance', async () => {
    const fetchMock = vi.fn(async () => jsonResponse(response('ong-a')))
    vi.stubGlobal('fetch', fetchMock)
    performanceGet.mockResolvedValue({
      data: { performance: 90, accessibility: 80, seo: 70 }
    })
    await render(<Toolbar id="page-a" slug="ong-a" />)

    expect(fetchMock).not.toHaveBeenCalled()
    const visitors = page.getByRole('button', { name: 'Visitantes' })
    await expect.element(visitors).toBeInTheDocument()
    expect(visitors.element().querySelector('svg')).not.toBeNull()
    await visitors.click()
    await expect.element(page.getByRole('dialog')).toBeInTheDocument()
    await expect
      .element(page.getByText('Visitantes únicos'))
      .toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(String(fetchMock.mock.calls[0][0])).toContain(
      '/api/analytics/visitors?slug=ong-a&range=30d'
    )
    expect(fetchMock.mock.calls[0][1]?.headers.Authorization).toBe(
      'Bearer session-token'
    )

    await userEvent.keyboard('{Escape}')
    expect(document.activeElement).toBe(visitors.element())
    await page
      .getByRole('button', { name: 'Ver performance da página' })
      .click()
    await expect
      .element(page.getByText('Performance da Página'))
      .toBeInTheDocument()
    expect(performanceGet).toHaveBeenCalledWith(
      '/api/core-web-vitals?slug=ong-a'
    )
  })

  it('closes on active failure, shows top-center toast and retries on click', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        jsonResponse({ error: 'PostHog indisponível' }, 502)
      )
      .mockResolvedValueOnce(jsonResponse(response('ong-a')))
    vi.stubGlobal('fetch', fetchMock)
    await render(<Toolbar id="page-a" slug="ong-a" />)

    await page.getByRole('button', { name: 'Visitantes' }).click()
    await vi.waitFor(() =>
      expect(errorToast).toHaveBeenCalledWith('PostHog indisponível', {
        position: 'top-center'
      })
    )
    await expect.element(page.getByRole('dialog')).not.toBeInTheDocument()
    await page.getByRole('button', { name: 'Visitantes' }).click()
    await expect
      .element(page.getByText('Visitantes únicos'))
      .toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('ignores an abandoned failure and invalidates data on ONG change', async () => {
    let rejectOld!: (reason: Error) => void
    const oldRequest = new Promise<Response>((_, reject) => {
      rejectOld = reject
    })
    const fetchMock = vi
      .fn()
      .mockReturnValueOnce(oldRequest)
      .mockResolvedValueOnce(jsonResponse(response('ong-b')))
    vi.stubGlobal('fetch', fetchMock)
    const screen = await render(<Toolbar id="page-a" slug="ong-a" />)

    await page.getByRole('button', { name: 'Visitantes' }).click()
    await expect.element(page.getByRole('status')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await screen.rerender(<Toolbar id="page-b" slug="ong-b" />)
    rejectOld(new Error('Falha antiga'))
    await page.getByRole('button', { name: 'Visitantes' }).click()
    await expect
      .element(page.getByText('Visitantes únicos'))
      .toBeInTheDocument()
    expect(String(fetchMock.mock.calls[1][0])).toContain('slug=ong-b')
    expect(errorToast).not.toHaveBeenCalled()
  })
})
