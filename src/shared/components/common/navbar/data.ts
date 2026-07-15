export const DESKTOP_NAV_LINKS: Record<string, string>[] = [
  { href: '/', label: 'Home' },
  { href: '/ongs', label: 'Ongs' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' }
] as const

export const MOBILE_NAV_LINKS: Record<string, string>[] = [
  { href: '/', label: 'Home' },
  { href: '/ongs', label: 'Projetos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' }
] as const

export const QUICK_LINKS: Record<string, string>[] = [
  { href: '/ongs', label: 'Ver todas as organizações' },
  { href: '/ongs?ong_type=animais', label: 'Proteção Animal' },
  {
    href: '/ongs?ong_type=criancasEAdolescentes',
    label: 'Crianças e Adolescentes'
  },
  { href: '/ongs?ong_type=combateAFome', label: 'Combate à Fome' }
] as const
