export const MESSAGES: Record<string, { title: string; body: string }> = {
  not_found: {
    title: 'Link não encontrado',
    body: 'Este link de convite não existe. Entre em contato conosco para obter um novo.'
  },
  used: {
    title: 'Já ativado',
    body: 'Este link já foi utilizado. Tente entrar na sua conta.'
  },
  cancelled: {
    title: 'Convite cancelado',
    body: 'Este convite foi cancelado pela sua organização. Solicite um novo.'
  },
  expired: {
    title: 'Link expirado',
    body: 'Este link de convite expirou após 72 horas. Solicite um novo.'
  }
} as const
