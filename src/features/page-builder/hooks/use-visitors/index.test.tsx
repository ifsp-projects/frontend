import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { act, renderHook, waitFor } from '@testing-library/react'

import { useVisitors } from '.'

vi.stubGlobal('fetch', vi.fn())

const response = (range: '7d' | '30d', date: string | null = null) =>
  ({
    range,
    selected_date: date,
    period_start: '2026-09-01',
    period_end: '2026-09-23',
    unique_visitors: date ? 2 : 3
  }) as VisitorsResponse

const mockOk = (data: VisitorsResponse): Response =>
  ({ ok: true, json: async () => data }) as unknown as Response

const rangeOf = (input: RequestInfo | URL) =>
  new URL(String(input), 'http://x').searchParams.get('range') as '7d' | '30d'

const deferred = <T,>() => {
  let resolve!: (value: T) => void
  const promise = new Promise<T>(done => {
    resolve = done
  })
  return { promise, resolve }
}

describe('useVisitors', () => {
  afterEach(() => {
    vi.mocked(fetch).mockReset()
    vi.useRealTimers()
  })

  it('reuses a completed request on reopen and refetches on a period change', async () => {
    vi.mocked(fetch).mockImplementation(async input =>
      mockOk(response(rangeOf(input)))
    )
    const { result } = renderHook(() => useVisitors('ong', 'token'))

    act(() => result.current.openReport())
    await waitFor(() => expect(result.current.data?.range).toBe('30d'))
    act(() => result.current.closeReport())
    act(() => result.current.openReport())
    expect(fetch).toHaveBeenCalledTimes(1)

    act(() => result.current.changeRange('7d'))
    await waitFor(() => expect(result.current.data?.range).toBe('7d'))
    expect(fetch).toHaveBeenCalledTimes(2)
    expect(result.current.selectedDate).toBeNull()
  })

  it('deduplicates requests and ignores an older selection response', async () => {
    const period = deferred<Response>()
    const day = deferred<Response>()
    vi.mocked(fetch)
      .mockReturnValueOnce(period.promise)
      .mockReturnValueOnce(day.promise)
    const { result } = renderHook(() => useVisitors('ong', 'token'))

    act(() => {
      result.current.openReport()
      result.current.openReport()
    })
    expect(fetch).toHaveBeenCalledTimes(1)
    act(() => period.resolve(mockOk(response('30d'))))
    await waitFor(() => expect(result.current.data?.range).toBe('30d'))

    act(() => result.current.selectDate('2026-09-22'))
    act(() => result.current.backToPeriod())
    act(() => day.resolve(mockOk(response('30d', '2026-09-22'))))
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.selectedDate).toBeNull()
    expect(result.current.data?.selected_date).toBeNull()
  })

  it('discards data from the prior session and allows a failed query to retry', async () => {
    vi.mocked(fetch)
      .mockRejectedValueOnce(new Error('Falha'))
      .mockResolvedValueOnce(mockOk(response('30d')))
    const { result, rerender } = renderHook(
      ({ token }) => useVisitors('ong', token),
      { initialProps: { token: 'first' } }
    )

    act(() => result.current.openReport())
    await waitFor(() => expect(result.current.error?.message).toBe('Falha'))
    act(() => result.current.openReport())
    await waitFor(() => expect(result.current.data?.unique_visitors).toBe(3))
    rerender({ token: 'second' })
    await waitFor(() => expect(result.current.data).toBeNull())
    expect(result.current.open).toBe(false)
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('expires cached data at Brasília midnight even before the TTL', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date('2026-09-25T02:59:00Z'))
    vi.mocked(fetch).mockResolvedValue(mockOk(response('30d')))
    const { result } = renderHook(() => useVisitors('ong', 'token'))

    await act(async () => result.current.openReport())
    expect(fetch).toHaveBeenCalledTimes(1)
    act(() => result.current.closeReport())
    vi.setSystemTime(new Date('2026-09-25T03:01:00Z'))
    await act(async () => result.current.openReport())
    expect(fetch).toHaveBeenCalledTimes(2)
  })
})
