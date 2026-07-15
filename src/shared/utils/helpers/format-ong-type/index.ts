import type { OngCategory } from 'capivara-solidaria-ts-sdk'
import { toHubspotOngValue } from 'capivara-solidaria-ts-sdk'

export const formatOngType = ({ ong_type }: { ong_type: OngCategory }) =>
  toHubspotOngValue(ong_type)
