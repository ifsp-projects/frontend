export const PASSWORD_RULES = [
  { label: 'Mínimo de 8 caracteres', test: (v: string) => v.length >= 8 },
  {
    label: 'Pelo menos uma letra maiúscula (A-Z)',
    test: (v: string) => /[A-Z]/.test(v)
  },
  { label: 'Pelo menos um número (0-9)', test: (v: string) => /[0-9]/.test(v) },
  {
    label: 'Pelo menos um caractere especial (!@#...)',
    test: (v: string) => /[!@#$%^&*(),.?":{}|<>]/.test(v)
  }
] as const
