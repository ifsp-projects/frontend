const content: string = `
# Capivara Solidária

> Plataforma brasileira gratuita que conecta apoiadores a ONGs verificadas nas áreas de Assistência Social, Educação, Saúde e Meio Ambiente.

Capivara Solidária é uma plataforma digital sem fins lucrativos que facilita a descoberta, o conhecimento e o apoio a organizações da sociedade civil verificadas no Brasil. Qualquer pessoa pode navegar pelo catálogo de ONGs, filtrar por categoria e acessar o perfil completo de cada organização.

## Produto

- [Catálogo de ONGs](https://capivara-solidaria.com.br/ongs): Lista completa de organizações verificadas, filtrável por categoria (Assistência Social, Educação, Saúde, Meio Ambiente) e pesquisável por nome.
- [Perfil de ONG](https://capivara-solidaria.com.br/ongs/:id): Página individual de cada organização com missão, projetos, localização e formas de apoio.
- [Cadastro de Apoiador](https://capivara-solidaria.com.br/contato): Criação de conta gratuita para apoiadores acompanharem ONGs favoritas.
- [Cadastro de ONG](https://capivara-solidaria.com.br/contato): Processo de verificação e onboarding para organizações sem fins lucrativos.
- [Criador de Páginas](https://capivara-solidaria.com.br/criador-de-paginas): Demonstração da feature de gerar páginas ricas para o projeto social.
- [Gerador de conteúdo com IA](https://capivara-solidaria.com.br/gerador-de-conteudo-com-ia): Demonstração da feature de gerar copies automaticamente para a sua página com ajuda de IA.

## Categorias atendidas

- **Assistência Social** — organizações voltadas a populações vulneráveis, moradores em situação de rua, famílias em risco social e apoio comunitário.
- **Educação** — projetos de reforço escolar, alfabetização, capacitação profissional e acesso ao ensino.
- **Saúde** — ONGs de saúde preventiva, saúde mental, atendimento a pacientes e campanhas de conscientização.
- **Meio Ambiente** — iniciativas de preservação ambiental, reciclagem, defesa animal e educação ecológica.

## Informações legais e institucionais

- [Termos de Uso](https://capivara-solidaria.com.br/termos-de-uso)
- [Política de Privacidade](https://capivara-solidaria.com.br/politica-de-privacidade)
- [Perguntas Frequentes](https://capivara-solidaria.com.br/faq)
- Contato: +55 (19) 99910-1607

## Sobre

Fundada em 2025, a Capivara Solidária nasceu da necessidade de centralizar e tornar mais acessível a descoberta de ONGs confiáveis no Brasil. Todas as organizações listadas passam por um processo de curadoria e verificação documental antes de aparecerem na plataforma.

A plataforma é gratuita tanto para apoiadores quanto para ONGs. Não realizamos captação de recursos diretamente — nosso papel é conectar pessoas a causas.`

export const dynamic = 'force-static'

export async function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown;charset=utf-8'
    }
  })
}
