import type { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'
import type { ExtractArrayType } from '@/types/utils/extract-array-type'

/**
 * A mapping of internal Prisma ONG category keys to their corresponding
 * HubSpot ONG category values.
 *
 * This record is used to translate database category identifiers (used in
 * Prisma models) into the exact string values expected by HubSpot forms.
 *
 * Example usage:
 * ```ts
 * console.log(PRISMA_TO_HUBSPOT_ONG_CATEGORY['animais']);
 * // 'Animais'
 * ```
 */
export const PRISMA_TO_HUBSPOT_ONG_CATEGORY: Record<
  string,
  ExtractArrayType<typeof HUBSPOT_ONG_VALUES>
> = {
  animais: 'Animais',
  meioAmbiente: 'Meio Ambiente',
  educacao: 'Educação',
  saude: 'Saúde',
  direitosHumanos: 'Direitos Humanos',
  combateAFome: 'Combate à Fome',
  criancasEAdolescentes: 'Crianças e Adolescentes',
  idosos: 'Idosos',
  pessoasComDeficiencia: 'Pessoas com Deficiência',
  moradoresDeRua: 'Moradores de Rua',
  igualdadeDeGenero: 'Igualdade de Gênero',
  refugiadosEImigrantes: 'Refugiados e Imigrantes',
  protecaoAnimal: 'Proteção Animal',
  desenvolvimentoComunitario: 'Desenvolvimento Comunitário',
  culturaEArte: 'Cultura e Arte',
  esporteEInclusao: 'Esporte e Inclusão',
  voluntariadoEDoacoes: 'Voluntariado e Doações',
  tecnologiaSocial: 'Tecnologia Social',
  direitosDasMulheres: 'Direitos das Mulheres',
  outros: 'Outros'
} as const

export const formatOngType = ({
  ong_type
}: {
  ong_type: string
}): ExtractArrayType<typeof HUBSPOT_ONG_VALUES> => {
  return PRISMA_TO_HUBSPOT_ONG_CATEGORY[ong_type]
}
