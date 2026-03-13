export const INITIAL_STATE = { success: false as const, errors: {} }

export const DESIGN_TEMPLATES = [
  {
    label: 'Template Aurora',
    value: 'primary'
  },
  {
    label: 'Template Atlas',
    value: 'secondary'
  },
  {
    label: 'Template Hélios',
    value: 'tertiary'
  },
  {
    label: 'Template Vulcan',
    value: 'quarternary'
  }
]

export const ONG_CATEGORIES = [
  { value: 'animais', label: 'Animais' },
  { value: 'meioAmbiente', label: 'Meio Ambiente' },
  { value: 'educacao', label: 'Educação' },
  { value: 'saude', label: 'Saúde' },
  { value: 'direitosHumanos', label: 'Direitos Humanos' },
  { value: 'combateAFome', label: 'Combate à Fome' },
  { value: 'criancasEAdolescentes', label: 'Crianças e Adolescentes' },
  { value: 'idosos', label: 'Idosos' },
  { value: 'pessoasComDeficiencia', label: 'Pessoas com Deficiência' },
  { value: 'moradoresDeRua', label: 'Moradores de Rua' },
  { value: 'igualdadeDeGenero', label: 'Igualdade de Gênero' },
  { value: 'refugiadosEImigrantes', label: 'Refugiados e Imigrantes' },
  { value: 'desenvolvimentoComunitario', label: 'Desenvolvimento Comunitário' },
  { value: 'culturaEArte', label: 'Cultura e Arte' },
  { value: 'esporteEInclusao', label: 'Esporte e Inclusão' },
  { value: 'tecnologiaSocial', label: 'Tecnologia Social' },
  { value: 'direitosDasMulheres', label: 'Direitos das Mulheres' },
  { value: 'outros', label: 'Outros' }
]
