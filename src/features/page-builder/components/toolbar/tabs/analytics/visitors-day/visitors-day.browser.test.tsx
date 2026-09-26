import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'

import { VisitorsChart } from '../visitors-chart/visitors-chart'
import { VisitorsDay } from './visitors-day'

const period = {
  range: '7d',
  period_start: '2026-09-17',
  period_end: '2026-09-23',
  selected_date: null,
  hourly: null,
  peak_hour: null,
  daily: Array.from({ length: 7 }, (_, index) => ({
    date: `2026-09-${index + 17}`,
    visitors: index + 1,
    pageviews: index + 2
  }))
} as VisitorsResponse

const day = {
  ...period,
  selected_date: '2026-09-19',
  hourly: Array.from({ length: 24 }, (_, hour) => ({
    hour,
    visitors: hour === 9 ? 2 : 0,
    pageviews: hour === 9 ? 4 : 0
  })),
  peak_hour: 9,
  unique_visitors: 2,
  pageviews: 4,
  change_pct: 100
} as VisitorsResponse

describe('VisitorsDay', () => {
  it('limits the date filter and shares the chart selection callback', async () => {
    const onSelectDate = vi.fn()
    await render(
      <>
        <VisitorsChart
          daily={period.daily}
          onSelectDate={onSelectDate}
          selectedDate={null}
        />
        <VisitorsDay
          data={period}
          onBackToPeriod={vi.fn()}
          onSelectDate={onSelectDate}
          selectedDate={null}
        />
      </>
    )

    const input = page.getByLabelText('Dia', { exact: true })
    await expect.element(input).toHaveAttribute('min', '2026-09-17')
    await expect.element(input).toHaveAttribute('max', '2026-09-23')
    await input.fill('2026-09-19')
    expect(onSelectDate).toHaveBeenCalledWith('2026-09-19')

    document
      .querySelectorAll('.recharts-bar-rectangle')[2]
      .dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onSelectDate).toHaveBeenLastCalledWith('2026-09-19')

    await input.fill('2026-09-24')
    expect(onSelectDate).toHaveBeenCalledTimes(2)
  })

  it('labels the day, all 24 hours, peak and comparison, then goes back', async () => {
    const onBackToPeriod = vi.fn()
    await render(
      <VisitorsDay
        data={day}
        onBackToPeriod={onBackToPeriod}
        onSelectDate={vi.fn()}
        selectedDate="2026-09-19"
      />
    )

    await expect
      .element(page.getByText('Resumo de 19/09/2026'))
      .toBeInTheDocument()
    expect(
      [...document.querySelectorAll('dd')].some(
        value => value.textContent === '09:00'
      )
    ).toBe(true)
    await expect.element(page.getByText('+100%')).toBeInTheDocument()
    const hours = [...document.querySelectorAll('ol li')]
    expect(hours).toHaveLength(24)
    expect(hours[0].textContent).toContain('00:00')
    expect(hours[23].textContent).toContain('23:00')
    expect(hours[9].textContent).toContain('4 visualizações')
    await page.getByRole('button', { name: 'Voltar ao período' }).click()
    expect(onBackToPeriod).toHaveBeenCalledOnce()
  })
})
