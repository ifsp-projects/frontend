# Guia de Contribuição

Obrigado pelo seu interesse em contribuir com este projeto.

Este documento descreve os padrões, fluxos de trabalho e expectativas para todos os contribuidores.

---

# Primeiros Passos

## Pré-requisitos

Antes de contribuir, certifique-se de possuir os seguintes itens instalados:

* Node.js (24.12.0)
* pnpm
* Git

Verifique sua instalação:

```bash
node -v
pnpm -v
git --version
```

---

# Configuração do Projeto

Clone o repositório:

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

---

# Estratégia de Branches

Nunca realize commits diretamente na branch principal (`main`).

Crie uma branch para sua funcionalidade ou correção:

```bash
git checkout -b feature/minha-feature
```

Exemplos:

```bash
feature/adicionar-busca-no-blog
feature/criar-secao-page-builder
fix/menu-mobile
refactor/servico-de-autenticacao
```

---

# Padrões de Código

## TypeScript

* Prefira tipos explícitos sempre que melhorarem a legibilidade.
* Evite utilizar `any` sempre que possível.
* Priorize soluções com segurança de tipos em vez de validações apenas em tempo de execução.

Exemplo:

```ts
interface User {
  id: string
  name: string
}
```

---

## React

### Prefira Componentes Funcionais

```tsx
export function Header() {
  return <header>...</header>
}
```

### Mantenha Componentes Simples

Cada componente deve possuir uma única responsabilidade.

Caso um arquivo fique muito complexo, considere separá-lo em:

* Componentes
* Hooks
* Serviços
* Utilitários

---

## Gerenciamento de Estado

O projeto utiliza Zustand para gerenciamento de estado no cliente.

Diretrizes:

* Mantenha regras de negócio dentro das stores quando apropriado.
* Evite duplicar estados da store em estados locais do componente.
* Considere a store como a única fonte de verdade da aplicação.

---

## Estilização

Utilize classes utilitárias do Tailwind CSS sempre que possível.

Prefira:

```tsx
<div className="flex items-center gap-4">
```

Em vez de:

```tsx
<div style={{ display: 'flex' }}>
```

---

## Organização de Imports

Agrupe os imports na seguinte ordem:

1. Bibliotecas externas
2. Imports internos utilizando alias (`@/`)
3. Imports relativos
4. Tipos

Exemplo:

```ts
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

import type { User } from '@/types/user'
```

---

# Convenção de Nomes

## Componentes

Utilize kebab-case para nomes de arquivos:

```text
user-profile.tsx
page-builder.tsx
```

## Hooks

Utilize o prefixo `use`.

```text
use-auth.ts
use-page-builder.ts
```

## Utilitários

Utilize nomes descritivos.

```text
format-currency.ts
generate-slug.ts
```

---

# Princípios de Arquitetura

## Separação de Responsabilidades

Cada camada deve possuir uma responsabilidade bem definida.

### Componentes

Responsáveis pela renderização.

### Hooks

Responsáveis por comportamentos reutilizáveis.

### Serviços

Responsáveis pela comunicação com APIs.

### Stores

Responsáveis pelo gerenciamento de estado.

### Utilitários

Responsáveis por funções puras e reutilizáveis.

---

## Registry Pattern

Ao adicionar novos templates ou seções ao sistema, registre-os nos registries apropriados.

Exemplo:

```ts
EDITABLE_TEMPLATE_SECTION_REGISTRY
READABLE_TEMPLATE_SECTION_REGISTRY
```

Evite criar grandes estruturas condicionais ou múltiplos `switch` para resolução de componentes.

---

# Testes

Execute os testes antes de enviar alterações.

```bash
pnpm test
```

Execute o lint:

```bash
pnpm lint
```

Execute a verificação de tipos:

```bash
pnpm type-check
```

Todos os comandos devem ser executados com sucesso antes da abertura de um Pull Request.

---

# Convenção de Commits

Utilize mensagens claras e descritivas.

Exemplos:

```text
feat: adicionar page builder para organizações
fix: corrigir validação de upload de imagens
refactor: simplificar registry de seções
docs: atualizar guia de contribuição
```

Prefixos recomendados:

| Prefixo  | Descrição           |
| -------- | ------------------- |
| feat     | Nova funcionalidade |
| fix      | Correção de bug     |
| refactor | Melhoria de código  |
| docs     | Documentação        |
| test     | Testes              |
| chore    | Manutenção          |
| style    | Formatação          |

---

# Pull Requests

Antes de abrir um Pull Request:

* Certifique-se de que o projeto compila corretamente.
* Certifique-se de que o lint está passando.
* Certifique-se de que a verificação de tipos está passando.
* Remova códigos temporários de depuração.
* Atualize a documentação quando necessário.

Todo Pull Request deve conter:

* O que foi alterado
* Por que foi alterado
* Capturas de tela (caso existam alterações visuais)
* Informações sobre os testes realizados

---

# Processo de Code Review

As revisões de código consideram principalmente:

* Manutenibilidade
* Legibilidade
* Segurança de tipos
* Performance
* Consistência arquitetural

O objetivo do code review é melhorar a qualidade do projeto por meio de colaboração.

---

# Reportando Problemas

Ao abrir uma issue, inclua:

* Comportamento esperado
* Comportamento atual
* Passos para reproduzir o problema
* Capturas de tela (quando aplicável)
* Informações do ambiente

Exemplo:

```text
Sistema Operacional: Windows 11
Node.js: 24.12.x
Navegador: Chrome
```

---

# Dúvidas

Caso algo não esteja claro, abra uma issue ou inicie uma discussão antes de implementar alterações significativas.

A consistência e a manutenção de longo prazo do projeto são mais importantes do que preferências individuais de implementação.

---

Obrigado por contribuir com o projeto.
