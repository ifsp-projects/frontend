'use client'

import { type FC, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { toast } from 'sonner'

import { Check } from '../../icons/check'
import { Copy } from '../../icons/copy'
import type { AssistantMessageProps } from './types'

export const AssistantMessage: FC<AssistantMessageProps> = ({ message }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const processedMessage = message
    .replace(/\\n/g, '\n')
    .replace(/<p>(\|.*?\|<\/p>)/g, '$1')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(processedMessage)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      toast.info('A mensagem foi copiada!', {
        position: 'top-center'
      })
    } catch (err) {
      console.error('Falha ao copiar:', err)
    }
  }

  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-sm">
      {/* <figure className="h-10 w-10 rounded-sm">
        <Image
          alt="User Profile Image"
          className="h-10 w-10 rounded-sm object-cover"
          height={80}
          src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?semt=ais_hybrid&w=740&q=80"
          width={80}
        />
      </figure> */}
      <div className="flex flex-col gap-3 !text-sm !text-neutral-600">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {message.replace(/\\n/g, '\n').replace(/<p>(\|.*?\|<\/p>)/g, '$1')}
        </ReactMarkdown>
      </div>
      <div className="flex items-center justify-end">
        <button
          className="flex cursor-pointer items-center gap-2 text-xs font-medium text-neutral-500 transition-colors hover:text-rose-600"
          onClick={handleCopy}
          title="Copiar texto"
        >
          {isCopied ? (
            <>
              <span className="text-emerald-600 transition-all duration-300 ease-in-out">
                Copiado!
              </span>
              <Check className="h-4 w-4 text-emerald-600 transition-all duration-300 ease-in-out" />
            </>
          ) : (
            <>
              <span className="transition-all duration-300 ease-in-out">
                Copiar
              </span>
              <Copy className="h-4 w-4 transition-all duration-300 ease-in-out" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
