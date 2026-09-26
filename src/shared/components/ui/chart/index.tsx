'use client'

import type { ComponentProps } from 'react'
import { useId } from 'react'
import { ResponsiveContainer } from 'recharts'

import { cn } from '@/lib/utils'

type ChartConfig = Record<string, { label: string; color: string }>

function ChartContainer({
  children,
  className,
  config,
  ...props
}: ComponentProps<'div'> & {
  config: ChartConfig
  children: ComponentProps<typeof ResponsiveContainer>['children']
}) {
  const id = `chart-${useId().replace(/:/g, '')}`
  const colors = Object.entries(config)
    .map(([key, value]) => `--color-${key}: ${value.color};`)
    .join(' ')

  return (
    <div
      className={cn('min-h-52 w-full text-xs', className)}
      data-chart={id}
      data-slot="chart"
      {...props}
    >
      <style>{`[data-chart="${id}"] { ${colors} }`}</style>
      <ResponsiveContainer initialDimension={{ width: 320, height: 208 }}>
        {children}
      </ResponsiveContainer>
    </div>
  )
}

export { ChartContainer }
export type { ChartConfig }
