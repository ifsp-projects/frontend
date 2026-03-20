'use client'

import { driver } from 'driver.js'
import { type FC, useEffect, useState } from 'react'

export const Driver: FC = () => {
  const [shouldRender, setShouldRender] = useState<boolean>(false)

  const driverObj = driver({
    showProgress: true,
    doneBtnText: 'Finalizar',
    nextBtnText: 'Continuar',
    prevBtnText: 'Voltar',
    progressText: '{{current}} de {{total}}',
    popoverClass: 'driverjs-theme',
    steps: [
      {
        popover: {
          title: 'Bem-vindo ao editor de Landing Page',
          description:
            'Neste guia inicial, vamos mostrar como você pode personalizar totalmente sua Landing Page. Aqui você poderá editar textos, alterar imagens e ajustar o visual da página para deixá-la exatamente com a identidade da sua marca.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#header',
        popover: {
          title: 'Edite qualquer texto',
          description:
            'Clique diretamente sobre qualquer texto da página para começar a edição. Depois disso, basta digitar o novo conteúdo que deseja exibir. Assim, você consegue adaptar sua mensagem de forma simples e rápida.',
          side: 'right',
          align: 'start'
        }
      },
      {
        element: '#eye',
        popover: {
          title: 'Visualize sua página',
          description:
            'Aqui você tem acesso a uma pré-visualização atualizada da sua Landing Page. Utilize este recurso para validar como suas alterações aparecerão para os visitantes antes de publicar qualquer mudança.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#dashboard',
        popover: {
          title: 'Dashboards',
          description:
            'Acompanhe dados importantes sobre o desempenho da sua página. No dashboard, você encontrará métricas como número de acessos, público que está visitando, tempo médio de permanência e outras informações essenciais para tomada de decisão.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#review',
        popover: {
          title: 'Revisão de conteúdo',
          description:
            'Use este recurso para realizar uma revisão automática do conteúdo da sua página. Ele identifica potenciais erros, como problemas de digitação ou inconsistências, ajudando você a garantir um texto mais profissional e claro.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#theme',
        popover: {
          title: 'Alterar tema',
          description:
            'Quer testar um visual diferente? Aqui você pode alterar o template da sua página de forma rápida. Explore diferentes estilos e escolha o tema que melhor representa a identidade visual da sua marca.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#save',
        popover: {
          title: 'Salvar alterações',
          description:
            'Atenção: ao salvar, todas as mudanças feitas serão aplicadas imediatamente e não poderão ser desfeitas. Após confirmar, sua Landing Page será atualizada para todos os visitantes em cerca de 10 segundos. Certifique-se de revisar tudo antes de finalizar.',
          side: 'top',
          align: 'start'
        }
      },
      {
        element: '#copy-generator',
        popover: {
          title: 'Gerador de copy',
          description:
            'Utilize esta ferramenta para gerar sugestões de textos criados por IA, ideais para melhorar a comunicação da sua página. Ela ajuda você a criar títulos, descrições ou chamadas mais atrativas e alinhadas ao seu objetivo.',
          side: 'left',
          align: 'start'
        }
      },
      {
        popover: {
          title: 'Tudo pronto!',
          description:
            'Parabéns! Você concluiu o treinamento inicial do nosso editor de Landing Pages. Agora você já sabe como personalizar textos, visualizar alterações, revisar conteúdo, trocar o tema e acompanhar métricas importantes. Continue explorando e deixe sua página cada vez melhor.'
        }
      }
    ]
  })

  useEffect(() => {
    const cookieName = '@capisolidaria/has-user-seen-tutorial'
    const hasSeenTutorial = document.cookie.includes(`${cookieName}=true`)

    if (!hasSeenTutorial) {
      setShouldRender(true)

      document.cookie = `${cookieName}=true; path=/; max-age=${60 * 60 * 24 * 365 * 5}`
    }
  }, [])

  useEffect(() => {
    if (!shouldRender) return

    driverObj.drive()
  }, [shouldRender])

  if (!shouldRender) return null

  return <div></div>
}
