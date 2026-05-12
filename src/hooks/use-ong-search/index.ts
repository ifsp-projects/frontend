import { useMemo, useState } from 'react'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export function useOngSearch(orgs: PostgresOrganization[]) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return orgs
      .filter(
        o =>
          o.account_status === 'active' &&
          (o.organization_profile?.name?.toLowerCase().includes(q) ||
            o.organization_profile?.ong_type?.toLowerCase().includes(q) ||
            o.organization_profile?.ong_description?.toLowerCase().includes(q))
      )
      .slice(0, 5)
  }, [query, orgs])

  return { query, setQuery, results }
}
