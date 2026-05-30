/**
 * Generates a URL-friendly ID (slug) from a text string.
 *
 * @param text - Source text used to generate the ID.
 * @returns Normalized ID containing lowercase letters, numbers, and hyphens.
 */
const generateIdFromText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Formats blog article HTML by:
 * - Removing <strong> tags nested inside <h3> elements.
 * - Generating and assigning IDs to <h3> elements that do not already have one.
 *
 * Useful for creating anchor links and table-of-contents navigation.
 *
 * @param html - Raw article HTML content.
 * @returns Formatted HTML with normalized headings.
 */
export const formatBlogArticle = (html: string) => {
  const htmlWithoutStrong = html.replace(
    /<h3[^>]*>(.*?)<strong>(.*?)<\/strong>(.*?)<\/h3>/g,
    (match, before, strongContent, after) => {
      return `<h3>${before}${strongContent}${after}</h3>`
    }
  )

  const htmlWithIds = htmlWithoutStrong.replace(
    /<h3(.*?)>(.*?)<\/h3>/g,
    (match, attributes, content) => {
      const trimmedContent = content.replace(/<[^>]+>/g, '').trim()
      if (!attributes.includes('id=')) {
        const generatedId = generateIdFromText(trimmedContent)
        return `<h3 id="${generatedId}"${attributes}>${content}</h3>`
      }
      return match
    }
  )

  return htmlWithIds
}
