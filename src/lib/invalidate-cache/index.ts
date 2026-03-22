import 'server-only'

import { revalidateTag } from 'next/cache'

export function invalidateUserSubscriptionCache({
  tag
}: {
  tag: string
}): void {
  revalidateTag(tag)
}
