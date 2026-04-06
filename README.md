# Capivara Solidária

O **Capivara Solidária** é uma plataforma que atua como um *hub* para ONGs e projetos sociais. A ferramenta permite que essas organizações criem sua presença digital através de um **Page Builder** intuitivo e gerem textos persuasivos de forma automática usando nosso **Gerador de Copy com Inteligência Artificial**.

---

## Tecnologias Utilizadas

Este projeto foi construído com foco em performance, tipagem estática e escalabilidade no front-end:

* **Framework:** [Next.js 15](https://nextjs.org/) (Src Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Integração Contínua:** CodeRabbit (AI Code Reviewer)

---

## Documentação para Desenvolvedores

Bem-vindo ao time! Abaixo você encontra tudo o que precisa para rodar o projeto localmente e entender a arquitetura base.

### 1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
* Node.js (versão 22.x ou superior)
* Gerenciador de pacotes: `pnpm`

### 2. Rodando o projeto localmente

Clone o repositório e instale as dependências:

```bash
git clone [https://github.com/ifsp-projects/capivara-solidaria.git](https://github.com/ifsp-projects/capivara-solidaria.git)
cd capivara-solidaria
npm install
# ou yarn install / pnpm install
```

Configure as variáveis de ambiente. Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env.local
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
Abra [http://localhost:3001](http://localhost:3001) no seu navegador para ver o resultado.

### 3. Estrutura do Projeto

Nossa estrutura de pastas segue as convenções do Next.js 15 (App Router), dividida da seguinte forma:

* `/app`: Rotas da aplicação, layouts e páginas.
* `/assets`: Arquivos estáticos importados diretamente no código, como ícones SVG locais, ilustrações específicas e fontes.
* `/components`: Componentes reutilizáveis de UI (ex: botões, inputs, modais).
* `/constants`: Valores estáticos e imutáveis da aplicação. Aqui ficam as mensagens de erro, chaves de configuração, *magic numbers* e os *prompts* base utilizados pelo gerador de copy de IA.
* `/providers`: Wrappers de contexto do React (Context API). Essenciais no Next.js App Router para encapsular estados globais no lado do cliente (Client Components), como temas ou sessões de autenticação.
* `/services`: Camada de comunicação com o mundo externo. Aqui ficam as chamadas para APIs REST e endpoints do backend.
* `/store`: Configurações de estado global utilizando Zustand.
* `/utils`: Funções utilitárias para autenticação, helpers e etc.
* `/types`: Interfaces e tipos globais do TypeScript.

### 4. Gerenciamento de Estado (Zustand)

Utilizamos o Zustand para estados globais que precisam ser acessados em diferentes partes da árvore de componentes, como o estado atual do Page Builder.

**Exemplo de uso:**

```typescript
import lodashSet from 'lodash.set'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { PageBuilderState } from './types'

/**
 * Zustand store for managing the state of the page builder.
 * Utilizes the `immer` middleware for immutable state updates.
 */
export const usePageBuilderStore = create<PageBuilderState>()(
  immer((set, get) => ({
    /**
     * The current state of the page sections.
     */
    sections: {},

    /**
     * Initializes or replaces the entire sections state.
     * * @param {Object} sections - The complete sections object to populate the store.
     */
    setInitialSections: sections => set({ sections }),

    /**
     * Updates a specific nested field within the sections state.
     * Uses `lodash.set` to deeply update the value based on the provided path.
     * * @param {string | string[]} path - The path to the field to update (e.g., 'header.title').
     * @param {any} value - The new value to assign to the specified path.
     */
    updateField: (path, value) =>
      set((state: any) => {
        // Note: Since 'immer' is being used, deep cloning via JSON is generally not required,
        // but it is preserved here as originally implemented.
        const clonedSections = JSON.parse(JSON.stringify(state.sections))

        lodashSet(clonedSections, path, value)

        state.sections = clonedSections
      }),

    /**
     * Retrieves the current sections state from the store.
     * * @returns {Object} The current sections state.
     */
    getSections: () => get().sections
  }))
)
```

### 5. Trabalhando com o Page Builder

O motor do nosso Page Builder permite arrastar, soltar e configurar componentes dinamicamente. Para criar um novo bloco para o builder:

1.  Crie o componente visual em `/components/shared/template-fields`.
2.  Registre as propriedades editáveis no esquema do construtor.
3.  *Exemplo de implementação de um novo bloco:*

```typescript
'use client'

import { createElement } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import type { EditableCopyFieldProps } from './types'

export const EditableCopyField = <T extends React.ElementType = 'div'>({
  children,
  className = '',
  'data-cid': dataCid,
  as,
  defaultValue = '',
  onChange,
  path,
  ...props
}: EditableCopyFieldProps<T>) => {
  const Component = as || 'div'
  const updateField = usePageBuilderStore(state => state.updateField)

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    const value = e.currentTarget.textContent || ''

    updateField(path, value)

    if (onChange) onChange(value)
  }

  return createElement(Component, {
    className: `outline-0 ${className}`,
    'data-cid': dataCid,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: handleInput,
    onBlur: handleInput,
    spellCheck: false,
    ...props,
    children: defaultValue
  })
}
```

### 6. Integração de IA (Gerador de Copy)

O gerador de copy utiliza prompts pré-configurados para ajudar ONGs a escreverem sobre suas causas. Ao implementar novos recursos que consumam a IA, utilize os *helpers* centralizados.

---

## Revisão de Código com CodeRabbit

Este repositório utiliza o **CodeRabbit**, uma ferramenta de inteligência artificial integrada ao nosso fluxo de Pull Requests. 

Quando você abrir um PR, o CodeRabbit fará automaticamente uma revisão inicial, sugerindo melhorias de código, apontando possíveis bugs e avaliando a aderência às boas práticas do Next.js e TypeScript. Fique atento aos comentários do *bot* nas suas PRs e sinta-se à vontade para interagir com ele para refinar as soluções antes da revisão final do time.

---

## Como Contribuir

1.  Faça o *fork* do projeto.
2.  Crie uma *branch* para sua feature (`git checkout -b feature/MinhaFeatureIncrivel`).
3.  Faça o *commit* das suas alterações (`git commit -m 'feat: Adicionando uma feature incrivel'`).
4.  Faça o *push* para a *branch* (`git push origin feature/MinhaFeatureIncrivel`).
5.  Abra um Pull Request.

**Dica:** Antes de enviar o PR, garanta que os testes locais (se houver) estão passando e que não há erros de linting.
