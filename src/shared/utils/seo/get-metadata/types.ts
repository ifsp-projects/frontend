import type { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

export interface GetMetaDataProps {
  description: string
  image: string
  title: string
  type?: OpenGraphType
  url: string
}

export interface MetaDataObjectProps {
  alternates: {
    canonical: string
  }
  description: string
  metadataBase: URL
  openGraph: {
    type: string
    images: string[]
    title: string
    description: string
    url: string
  }
  title: string
  twitter: {
    title: string
    description: string
    images: string[]
  }
}
