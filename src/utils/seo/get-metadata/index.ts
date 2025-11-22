import type { Metadata } from 'next'

import { BASE_URL } from '../../../constants/environments/base-url'
import type { GetMetaDataProps } from './types'

export const getMetaData = ({
  description,
  image,
  title,
  url,
  type = 'website'
}: GetMetaDataProps): Metadata => {
  const metaDataObject: Metadata = {
    title,
    description,
    openGraph: {
      type,
      images: [image],
      title,
      description,
      url
    },
    alternates: {
      canonical: url
    },
    metadataBase: new URL(BASE_URL),
    twitter: {
      title,
      description,
      images: [image]
    }
  }

  return metaDataObject
}
