import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="Project Logo"
        className="aspect-video max-h-12 max-w-28 object-cover"
        fetchPriority="high"
        height={220}
        loading="eager"
        sizes="120px"
        src="/capivara-solidaria-logo.webp"
        width={360}
      />
    </Link>
  )
}
