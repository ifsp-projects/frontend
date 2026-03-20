import {
  Download,
  FileText,
  Languages,
  RefreshCw,
  Sliders,
  Sparkles
} from 'lucide-react'

export const FEATURES = [
  {
    icon: Sparkles,
    title: 'IA contextualizada para o seu projeto',
    description:
      'Quanto mais você usa, mais a IA aprende sobre sua ONG — missão, público, tom de voz e causas. Os textos ficam cada vez mais precisos.'
  },
  {
    icon: Sliders,
    title: 'Controle total sobre o tom',
    description:
      'Escolha entre formal, emocional, urgente ou informativo. Ajuste o tamanho, adapte para diferentes plataformas e públicos.'
  },
  {
    icon: RefreshCw,
    title: 'Múltiplas variações em segundos',
    description:
      'Gere 3, 5 ou 10 versões diferentes do mesmo texto e escolha a melhor. Ideal para testes A/B em campanhas de arrecadação.'
  },
  {
    icon: Languages,
    title: 'Português humanizado, nunca robótico',
    description:
      'O modelo foi ajustado para escrever em português brasileiro natural, com a sensibilidade que o trabalho social exige.'
  },
  {
    icon: Download,
    title: 'Exportação direta para suas páginas',
    description:
      'Copie com um clique ou publique diretamente nas suas páginas interativas da Capivara. Fluxo integrado, zero fricção.'
  },
  {
    icon: FileText,
    title: 'Histórico e favoritos',
    description:
      'Todo texto gerado fica salvo. Marque favoritos, compare versões e reutilize o que funcionou em campanhas anteriores.'
  }
] as const
