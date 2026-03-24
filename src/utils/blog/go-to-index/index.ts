export const goToIndex = (text: string) => {
  const indexElements = document.querySelectorAll('.article-content h3')

  for (let i = 0; i < indexElements.length; i++) {
    const h3 = indexElements[i]
    const content = h3.textContent?.trim()

    if (content === text) {
      const div = document.createElement('div')
      div.className = 'absolute -mt-40'

      h3.classList.add('relative')
      h3.appendChild(div)

      div.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return null
}
