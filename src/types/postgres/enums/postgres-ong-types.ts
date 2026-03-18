export const ONG_TYPES = [
  'animais',
  'meioAmbiente',
  'educacao',
  'saude',
  'direitosHumanos',
  'combateAFome',
  'criancasEAdolescentes',
  'idosos',
  'pessoasComDeficiencia',
  'moradoresDeRua',
  'igualdadeDeGenero',
  'refugiadosEImigrantes',
  'protecaoAnimal',
  'desenvolvimentoComunitario',
  'culturaEArte',
  'esporteEInclusao',
  'voluntariadoEDoacoes',
  'tecnologiaSocial',
  'direitosDasMulheres',
  'outros'
] as const

export type PostgresOngType = (typeof ONG_TYPES)[number]
