export const getHtmlContentIndexes = (content: string) => {
  if (typeof window === 'undefined') {
    return [[], []]
  }

  const div = document.createElement('div')
  div.innerHTML = content

  const htmlTags = div.querySelectorAll('h3')

  const indexes: string[] = []
  const ids: string[] = []

  htmlTags.forEach(h3Element => {
    const trimmedText = h3Element.textContent?.trim() || ''
    if (!trimmedText) return

    indexes.push(trimmedText)

    let id = h3Element.id
    if (!id) {
      id = trimmedText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      h3Element.id = id
    }

    ids.push(id)
  })

  return [indexes, ids]
}
