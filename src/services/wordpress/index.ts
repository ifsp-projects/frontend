export async function apiWordpress<T>(
  endpoint: string,
  options?: RequestInit & { revalidate?: number }
): Promise<T> {
  const response = await fetch(`${process.env.WORDPRESS_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options?.headers ?? {}),
      'Content-Type': 'application/json'
    },
    next: { revalidate: options?.revalidate ?? 60 * 5 }
  })

  if (!response.ok) {
    throw new Error(`Wordpress fetch failed: ${response.statusText}`)
  }

  return response.json() as Promise<T>
}
