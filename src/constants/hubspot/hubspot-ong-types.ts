export const HUBSPOT_ONG_VALUES: string[] = [
  'Animais',
  'Meio Ambiente',
  'Educação',
  'Saúde',
  'Direitos Humanos',
  'Combate à Fome',
  'Crianças e Adolescentes',
  'Idosos',
  'Pessoas com Deficiência',
  'Moradores de Rua',
  'Igualdade de Gênero',
  'Refugiados e Imigrantes',
  'Proteção Animal',
  'Desenvolvimento Comunitário',
  'Cultura e Arte',
  'Esporte e Inclusão',
  'Voluntariado e Doações',
  'Tecnologia Social',
  'Direitos das Mulheres',
  'Outros'
] as const

export type HubspotOngValue = (typeof HUBSPOT_ONG_VALUES)[number]

export const isHubspotOngValue = (value: unknown): value is HubspotOngValue => {
  return (
    typeof value === 'string' &&
    HUBSPOT_ONG_VALUES.includes(value as HubspotOngValue)
  )
}

export const HUBSPOT_ONG_VALUES_SET = new Set(HUBSPOT_ONG_VALUES)

export const HubspotOngValueEnum = HUBSPOT_ONG_VALUES.reduce(
  (acc, value) => {
    acc[value] = value
    return acc
  },
  {} as Record<HubspotOngValue, HubspotOngValue>
)
