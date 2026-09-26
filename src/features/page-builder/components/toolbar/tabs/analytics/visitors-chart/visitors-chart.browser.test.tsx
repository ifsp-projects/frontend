import { afterEach, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'

import { VisitorsChart } from './visitors-chart'

const daily = Array.from({ length: 7 }, (_, index) => ({
  date: `2026-09-${String(index + 17).padStart(2, '0')}`,
  visitors: index + 1,
  pageviews: (index + 1) * 2
}))

describe('VisitorsChart', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('switches metric locally and offers keyboard date selection', async () => {
    const onSelectDate = vi.fn()
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    await render(
      <VisitorsChart
        daily={daily}
        onSelectDate={onSelectDate}
        selectedDate={null}
      />
    )

    await page.getByRole('button', { name: 'Visualizações' }).click()
    await expect
      .element(page.getByRole('button', { name: 'Visualizações' }))
      .toHaveAttribute('aria-pressed', 'true')
    await expect
      .element(page.getByRole('img', { name: 'Visualizações por dia' }))
      .toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()

    await page.getByRole('combobox', { name: 'Escolher dia' }).click()
    await page.getByRole('option', { name: '20/09/2026' }).click()
    expect(onSelectDate).toHaveBeenCalledWith('2026-09-20')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('selects the same calendar date when a bar is clicked', async () => {
    const onSelectDate = vi.fn()
    await render(
      <VisitorsChart
        daily={daily}
        onSelectDate={onSelectDate}
        selectedDate={null}
      />
    )
    const bars = document.querySelectorAll('.recharts-bar-rectangle')
    expect(bars.length).toBe(7)
    bars[2].dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onSelectDate).toHaveBeenCalledWith('2026-09-19')
  })

  it('renders all thirty daily points in the longer period', async () => {
    const thirtyDays = Array.from({ length: 30 }, (_, index) => ({
      date: `2026-09-${String(index + 1).padStart(2, '0')}`,
      visitors: index + 1,
      pageviews: (index + 1) * 2
    }))
    await render(
      <VisitorsChart
        daily={thirtyDays}
        onSelectDate={vi.fn()}
        selectedDate={null}
      />
    )
    expect(document.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(
      30
    )
  })
})
