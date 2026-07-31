import municipiosByUf from './data/brazilian-cities.json'
import type { BrazilianStateUF } from './states'

export type Municipio = { id: number; nome: string }

export function getMunicipiosByUf(
  uf: BrazilianStateUF | undefined
): Municipio[] {
  if (!uf) return []
  return (municipiosByUf as Record<string, Municipio[]>)[uf] ?? []
}

export function isValidCityForState(uf: string, city: string): boolean {
  return getMunicipiosByUf(uf as BrazilianStateUF).some(m => m.nome === city)
}
