import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Simple in-memory cache: slug → { data, cachedAt }
const cache = new Map<string, { data: unknown; cachedAt: number }>()
const CACHE_TTL_MS = 1000 * 60 * 60 * 12 // 12h per slug

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug')
  if (!slug)
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })

  const cached = cache.get(slug)
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
    return NextResponse.json(cached.data)
  }

  const pageUrl = encodeURIComponent(
    `https://capivara-solidaria.com.br/ongs/${slug}`
  )
  const apiKey = process.env.PAGESPEED_API_KEY // optional but raises quota
  const keyParam = apiKey ? `&key=${apiKey}` : ''

  const res = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${pageUrl}&strategy=desktop&category=performance&category=accessibility&category=seo${keyParam}`,
    { next: { revalidate: 0 } }
  )

  if (!res.ok) {
    const err = await res.json()
    const status = err?.error?.code ?? 500
    return NextResponse.json(
      { error: err?.error?.message ?? 'PageSpeed error' },
      { status }
    )
  }

  const raw = await res.json()
  const cats = raw.lighthouseResult.categories
  const data = {
    performance: Math.round((cats.performance?.score ?? 0) * 100),
    accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
    seo: Math.round((cats.seo?.score ?? 0) * 100)
  }

  cache.set(slug, { data, cachedAt: Date.now() })
  return NextResponse.json(data)
}
