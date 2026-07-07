export type CHANGELOG_TYPE = 'page-builder' | 'copy-generator' | 'ongs-hub'

export const CHANGELOG = [
  {
    month: 'Abr',
    year: '2026',
    version: 'Versão 0.1.5',
    features: [
      {
        type: 'copy-generator',
        description:
          'Melhorias no criador de copies, aprimorando o contexto que é passado para a IA para a geração do conteúdo.'
      },
      {
        type: 'ongs-hub',
        description:
          'Agora é possível adicionar as redes sociais do projeto social através do painel de edição de perfil.'
      }
    ]
  },
  {
    month: 'Mar',
    year: '2026',
    version: 'Versão 0.1.4',
    features: [
      {
        type: 'copy-generator',
        description:
          'Gere campanhas de doação de alta conversão instantaneamente. Nossa IA agora adapta o tom, a urgência e a narrativa com base na missão e no público da sua ONG.'
      },
      {
        type: 'page-builder',
        description:
          'Novo bloco de Link. Direcione usuários para páginas externas, parceiros ou campanhas específicas com CTAs claros e estrategicamente posicionados para maximizar cliques e engajamento.'
      },
      {
        type: 'page-builder',
        description:
          'Novos templates Helios (amarelo) e Vulcan (vermelho). Duas novas abordagens visuais focadas em conversão: Helios traz leveza, destaque e energia, enquanto Vulcan aposta em intensidade e urgência para campanhas mais impactantes.'
      },
      {
        type: 'ongs-hub',
        description:
          'Repaginação completa do Hub de ONGs. Uma experiência mais moderna, intuitiva e orientada à descoberta, facilitando a conexão entre doadores e causas relevantes.'
      }
    ]
  },
  {
    month: 'Feb',
    year: '2026',
    version: 'Versão 0.1.3',
    features: [
      {
        type: 'page-builder',
        description:
          'Novo campo de ícones. Enriqueça visualmente suas páginas com ícones personalizados que reforçam a mensagem e tornam a navegação mais intuitiva.'
      },
      {
        type: 'copy-generator',
        description:
          'Geração de copy aprimorada. Crie conteúdos mais naturais, persuasivos e adaptados para diferentes regiões e idiomas, ampliando seu alcance com consistência.'
      },
      {
        type: 'ongs-hub',
        description:
          'Ajustes visuais no painel de edição de ONG. Interface mais limpa e organizada para facilitar a gestão de informações e campanhas.'
      }
    ]
  },
  {
    month: 'Jan',
    year: '2026',
    version: 'Versão 0.1.2',
    features: [
      {
        type: 'page-builder',
        description:
          'Novo template Atlas (azul) disponível. Um layout pensado para transmitir confiança e credibilidade, ideal para ONGs que querem fortalecer sua autoridade e transparência.'
      },
      {
        type: 'copy-generator',
        description:
          'Sugestões de copy orientadas por emoção. Receba variações de títulos e CTAs focados em urgência, empatia ou impacto de longo prazo.'
      }
    ]
  },
  {
    month: 'Dec',
    year: '2025',
    version: 'Versão 0.1.1',
    features: [
      {
        type: 'page-builder',
        description:
          'Melhorias visuais no mobile da plataforma. Interfaces mais responsivas e otimizadas para garantir uma experiência fluida e sem fricção em qualquer dispositivo.'
      },
      {
        type: 'copy-generator',
        description:
          'Motor de storytelling aprimorado. Gere narrativas completas de campanhas, do problema à solução, em segundos.'
      },
      {
        type: 'ongs-hub',
        description:
          'Adição do menu do Hub de ONGs. Acesso mais rápido e organizado para explorar, gerenciar e descobrir novas iniciativas.'
      }
    ]
  },
  {
    month: 'Nov',
    year: '2025',
    version: 'Versão 0.0.2',
    features: [
      {
        type: 'page-builder',
        description:
          'Novo bloco de Depoimentos no Template Aurora. Destaque histórias reais de beneficiários e doadores para fortalecer a conexão emocional.'
      },
      {
        type: 'copy-generator',
        description:
          'Sugestões de otimização de CTA. Receba recomendações baseadas em dados para aumentar cliques e taxas de doação.'
      }
    ]
  },
  {
    month: 'Oct',
    year: '2025',
    version: 'Versão 0.0.1',
    features: [
      {
        type: 'page-builder',
        description:
          'Lançamento do Page Builder. Crie páginas de doação bonitas e de alta conversão sem código, usando blocos modulares e flexíveis.'
      },
      {
        type: 'copy-generator',
        description:
          'Lançamento do Copy Generator. Gere instantaneamente títulos, descrições e mensagens de campanha sob medida para ONGs.'
      },
      {
        type: 'ongs-hub',
        description:
          'Lançamento do ONGs Hub. Um espaço centralizado para ONGs apresentarem sua missão, campanhas e impacto para potenciais doadores.'
      }
    ]
  }
] as const
