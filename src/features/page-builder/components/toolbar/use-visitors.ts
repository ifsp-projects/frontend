'use client'

import type { VisitorsRange, VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { useCallback, useEffect, useRef, useState } from 'react'

import { fetchVisitors } from './visitors-api'

const TTL_MS = 10 * 60 * 1000

type CacheEntry = {
  data: VisitorsResponse
  cachedAt: number
  brasiliaDay: string
}

const brasiliaDay = () =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date())

const queryKey = (range: VisitorsRange, date: string | null) =>
  `${range}:${date ?? 'period'}`

export function useVisitors(slug: string, token: string | null | undefined) {
  const [open, setOpen] = useState(false)
  const [range, setRangeState] = useState<VisitorsRange>('30d')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [data, setData] = useState<VisitorsResponse | null>(null)
  const [periodData, setPeriodData] = useState<VisitorsResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const cache = useRef(new Map<string, CacheEntry>())
  const inflight = useRef(new Map<string, Promise<VisitorsResponse>>())
  const selection = useRef(0)
  const context = `${slug}\u0000${token ?? ''}`
  const contextRef = useRef(context)

  useEffect(() => {
    if (contextRef.current === context) return
    contextRef.current = context
    selection.current++
    cache.current.clear()
    inflight.current.clear()
    setOpen(false)
    setRangeState('30d')
    setSelectedDate(null)
    setData(null)
    setPeriodData(null)
    setLoading(false)
    setError(null)
  }, [context])

  const load = useCallback(
    async (nextRange: VisitorsRange, date: string | null, force = false) => {
      const requestId = ++selection.current
      const requestContext = context
      const key = queryKey(nextRange, date)
      const cached = cache.current.get(key)
      if (
        !force &&
        cached &&
        Date.now() - cached.cachedAt < TTL_MS &&
        cached.brasiliaDay === brasiliaDay()
      ) {
        setData(cached.data)
        if (!date) setPeriodData(cached.data)
        setLoading(false)
        setError(null)
        return
      }

      if (!token) {
        setError(new Error('Sessão inválida'))
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)
      let pending = inflight.current.get(key)
      if (!pending) {
        pending = fetchVisitors(
          { slug, range: nextRange, ...(date && { date }) },
          token
        )
        inflight.current.set(key, pending)
        void pending
          .finally(() => {
            if (inflight.current.get(key) === pending)
              inflight.current.delete(key)
          })
          .catch(() => undefined)
      }

      try {
        const result = await pending
        if (contextRef.current !== requestContext) return
        cache.current.set(key, {
          data: result,
          cachedAt: Date.now(),
          brasiliaDay: brasiliaDay()
        })
        if (selection.current !== requestId) return
        setData(result)
        if (!date) setPeriodData(result)
        setLoading(false)
      } catch (cause) {
        if (
          contextRef.current !== requestContext ||
          selection.current !== requestId
        )
          return
        setLoading(false)
        setError(
          cause instanceof Error ? cause : new Error('Falha na consulta')
        )
      }
    },
    [context, slug, token]
  )

  const openReport = useCallback(() => {
    setOpen(true)
    void load(range, selectedDate)
  }, [load, range, selectedDate])

  const closeReport = useCallback(() => {
    selection.current++
    setOpen(false)
    setLoading(false)
    setError(null)
  }, [])

  const changeRange = useCallback(
    (nextRange: VisitorsRange) => {
      if (nextRange === range) return
      setRangeState(nextRange)
      setSelectedDate(null)
      setData(null)
      setPeriodData(null)
      if (open) void load(nextRange, null, true)
    },
    [load, open, range]
  )

  const selectDate = useCallback(
    (date: string) => {
      const bounds = periodData ?? data
      if (!bounds || date < bounds.period_start || date > bounds.period_end)
        return
      setSelectedDate(date)
      void load(range, date)
    },
    [data, load, periodData, range]
  )

  const backToPeriod = useCallback(() => {
    setSelectedDate(null)
    void load(range, null)
  }, [load, range])

  return {
    open,
    range,
    selectedDate,
    data: contextRef.current === context ? data : null,
    periodData: contextRef.current === context ? periodData : null,
    loading,
    error,
    openReport,
    closeReport,
    changeRange,
    selectDate,
    backToPeriod
  }
}
