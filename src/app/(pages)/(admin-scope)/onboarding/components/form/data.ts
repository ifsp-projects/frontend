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
] as const
