import { writeFile } from 'node:fs/promises'

const ESTADOS_URL =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'

async function main() {
  const estados = await fetch(ESTADOS_URL).then(r => r.json())
  const result = {}

  for (const estado of estados) {
    const municipios = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.sigla}/municipios?orderBy=nome`
    ).then(r => r.json())

    result[estado.sigla] = municipios.map(m => ({ id: m.id, nome: m.nome }))
    await new Promise(resolve => setTimeout(resolve, 150)) // não martelar a API pública
  }

  await writeFile(
    '../src/domain/location/data/brazilian-cities.json',
    JSON.stringify(result),
    'utf-8'
  )
  console.log('municipios-by-uf.json gerado com sucesso.')
}

main()
