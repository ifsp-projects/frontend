const generateIdFromText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

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
