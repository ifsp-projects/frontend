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
