import type { CloudinaryUploadWidgetResults } from 'next-cloudinary'
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { cloudinaryApiKey } from '@/constants/environments/cloudinary-api-key'
import { usePageBuilderStore } from '@/stores/page-builder-store'
import { PencilBox } from '@vectoricons/atlas-icons-react'

import type { EditableImageFieldProps } from './types'

export const EditableImageField: FC<EditableImageFieldProps> = ({
  path,
  defaultValue = '',
  className = '',
  alt = 'Editable image',
  height,
  width,
  ...props
}) => {
  const updateField = usePageBuilderStore(state => state.updateField)

  const [currentImage, setCurrentImage] = useState<string>(defaultValue)

  useEffect(() => {
    setCurrentImage(defaultValue)
  }, [defaultValue])

  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    if (
      typeof result.info === 'object' &&
      result.info !== null &&
      'secure_url' in result.info
    ) {
      const newUrl = result.info.secure_url

      setCurrentImage(newUrl)
      updateField(path, newUrl)
    }
  }

  return (
    <div className={`group relative ${className}`}>
      <CldUploadButton
        options={{
          maxFiles: 1,
          uploadPreset: 'aytdnupk',
          apiKey: cloudinaryApiKey
        }}
        className="block h-full w-full"
        onSuccess={handleSuccess}
        uploadPreset="aytdnupk"
      >
        {currentImage ? (
          <div className="relative h-full w-full">
            <Image
              alt={alt}
              className="max-h-full max-w-full object-cover"
              height={height}
              src={currentImage}
              width={width}
              {...props}
            />

            <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-sm bg-black/50 font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              <PencilBox className="mr-2 h-5 w-5 text-white" />
              <span>Trocar Imagem</span>
            </div>
          </div>
        ) : (
          <div className="flex h-64 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200">
            <div className="select-photo-cloudinary flex flex-col items-center gap-2">
              <span>Selecionar Foto</span>
            </div>
          </div>
        )}
      </CldUploadButton>
    </div>
  )
}
