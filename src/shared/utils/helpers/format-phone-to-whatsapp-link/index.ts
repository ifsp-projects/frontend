/**
 * Converts a Brazilian phone number to a WhatsApp API link.
 *
 * @param phone - Phone number in formats like "(19) 99791-6782" or "19997916782"
 * @param message - Optional pre-filled message
 * @returns Full WhatsApp API URL ready to use in an <a> tag href
 *
 * @example
 * phoneToWhatsAppLink("(19) 99791-6782")
 * // => "https://wa.me/5519997916782"
 *
 * phoneToWhatsAppLink("(19) 99791-6782", "Olá, tudo bem?")
 * // => "https://wa.me/5519997916782?text=Ol%C3%A1%2C%20tudo%20bem%3F"
 */
export const formatPhoneToWhatsappLink = ({
  phone,
  message
}: {
  phone: string
  message?: string
}): string => {
  // Strip everything that is not a digit
  const digits = phone.replace(/\D/g, '')

  const withCountryCode = digits.startsWith('55') ? digits : `55${digits}`

  const base = `https://wa.me/${withCountryCode}`

  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }

  return base
}
