export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  const len = digits.length

  if (len === 0) return ''
  if (len < 3) return `(${digits}`
  if (len < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (len < 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}
