import type { ONG } from '@/types/commons/ong'

export const ongs: ONG[] = [
  {
    id: 'lar-dos-velhinhos',
    name: 'Lar dos Velhinhos',
    description:
      'Instituição dedicada ao cuidado integral de idosos, oferecendo moradia, alimentação, assistência médica e atividades recreativas para promover qualidade de vida na terceira idade.',
    category: 'Assistência Social',
    logo: 'https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2013/06/logo_lar_velhinhos.jpg'
  },
  {
    id: 'casa-da-crianca-capivari',
    name: 'Casa da Criança',
    description:
      'Organização focada na proteção e desenvolvimento de crianças e adolescentes, oferecendo educação, alimentação, atividades pedagógicas e suporte psicossocial.',
    category: 'Educação',
    logo: 'https://capivarisocial.com.br/wp-content/uploads/2022/03/casa-da-crianca_logo-300x179.jpg'
  },
  {
    id: 'em-producao',
    name: 'Teto e Afeto',
    description:
      'ONG que trabalha com acolhimento e reinserção social de pessoas em situação de vulnerabilidade, oferecendo moradia temporária, apoio psicológico e capacitação profissional.',
    category: 'Assistência Social',
    logo: 'https://capivarisocial.com.br/wp-content/uploads/2022/03/tetoeafeto_logo-300x240.png'
  },
  {
    id: 'em-producao-1',
    name: 'Esperança Solidária',
    description:
      'Distribuição de alimentos e roupas para comunidades carentes, promovendo dignidade e apoio às famílias em situação de vulnerabilidade social.',
    category: 'Assistência Social',
    initials: 'ES',
    bgColor: 'bg-orange-500'
  },
  {
    id: 'em-producao-2',
    name: 'Meio Ambiente Limpo',
    description:
      'Organização dedicada à preservação ambiental, promovendo ações de limpeza urbana, reciclagem e educação ambiental para comunidades locais.',
    category: 'Meio Ambiente',
    initials: 'MA',
    bgColor: 'bg-green-600'
  }
]

export const categories = [
  'Assistência Social',
  'Educação',
  'Saúde',
  'Meio Ambiente'
]
