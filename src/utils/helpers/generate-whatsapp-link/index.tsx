/**
 * Creates a WhatsApp link with an optional pre-filled message.
 *
 * Renders an anchor element that opens a WhatsApp conversation
 * in a new browser tab.
 *
 * @param phone - Target phone number in international format.
 * @param message - Optional message to pre-fill in the chat.
 * @param label - Text displayed inside the link.
 * @param className - Optional CSS classes applied to the anchor element.
 * @returns A React anchor element pointing to WhatsApp.
 */
export const generateWhatsappLink = ({
  phone,
  message,
  label,
  className
}: {
  phone: string
  message?: string
  label: string
  className?: string
}) => {
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`

  return (
    <a
      className={className}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  )
}
