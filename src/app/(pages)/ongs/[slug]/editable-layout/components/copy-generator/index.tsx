'use client'

import { type FC, useEffect, useRef, useState } from 'react'

import { EmptyBox } from '@/assets/icons/empty-box'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ArrowLeft, StarLightbulb } from '@vectoricons/atlas-icons-react'

import { AssistantMessage } from './components/assistant-message'
import { UserMessage } from './components/user-message'
import { SendChatMessage } from './icons/send-chat-message'
import { Sparkles } from './icons/sparkles'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export const CopyGenerator: FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    console.log('Messages state changed:', messages)
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submit triggered')

    if (!input.trim() || isLoading) {
      console.log('Submit blocked')
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    }

    console.log('Adding user message:', userMessage)

    setMessages(prev => {
      const newMessages = [...prev, userMessage]
      console.log('New messages after user:', newMessages)
      return newMessages
    })

    setInput('')
    setIsLoading(true)
    setError(false)

    try {
      const messageHistory = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }))

      console.log('Sending to API:', messageHistory)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: messageHistory
        })
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to get response')
      }

      const assistantMessageId = Date.now().toString() + '-assistant'

      console.log('Adding empty assistant message:', assistantMessageId)

      setMessages(prev => {
        const newMessages = [
          ...prev,
          {
            id: assistantMessageId,
            role: 'assistant' as const,
            content: ''
          }
        ]
        console.log('Messages with assistant placeholder:', newMessages)
        return newMessages
      })

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error('No reader available')
      }

      let accumulatedContent = ''
      let chunkCount = 0

      while (true) {
        const { done, value } = await reader.read()

        if (done) {
          console.log(
            'Stream finished. Total chunks:',
            chunkCount,
            'Final content:',
            accumulatedContent
          )
          break
        }

        chunkCount++
        const chunk = decoder.decode(value, { stream: true })
        accumulatedContent += chunk

        console.log(
          `Chunk ${chunkCount}:`,
          chunk,
          'Accumulated:',
          accumulatedContent
        )

        setMessages(prev => {
          const updated = prev.map(m =>
            m.id === assistantMessageId
              ? { ...m, content: accumulatedContent }
              : m
          )
          console.log('Updated messages:', updated)
          return updated
        })
      }

      console.log('Stream processing complete')
    } catch (err) {
      console.error('Chat error:', err)
      setError(true)

      setMessages(prev =>
        prev.filter(m => !(m.role === 'assistant' && m.content === ''))
      )
    } finally {
      setIsLoading(false)
      console.log('Loading finished')
    }
  }

  console.log('RENDER - Messages:', messages.length, messages)

  return (
    <div className="fixed right-8 bottom-8 z-30">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <button className="flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-rose-700 to-rose-500 px-4 py-2 shadow transition-all duration-200 hover:brightness-110">
            <p className="text-sm font-medium text-white xl:text-base">
              Gerar texto automaticamente
            </p>
            <Sparkles className="h-5 w-5 text-white" />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex h-full w-full flex-col gap-4 px-4 pt-4 pb-8">
            <DrawerHeader>
              <DrawerClose asChild>
                <button>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                  <ArrowLeft className="h-5 w-5 cursor-pointer text-neutral-500" />
                </button>
              </DrawerClose>
            </DrawerHeader>

            <div className="flex flex-1 flex-col gap-6 overflow-hidden">
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="flex flex-col gap-4 py-4">
                  {messages.length === 0 && !isLoading && (
                    <div className="flex flex-col items-center gap-2">
                      <EmptyBox />
                      <p className="text-center text-sm text-neutral-400">
                        Nenhuma mensagem ainda. Envie uma mensagem para começar!
                      </p>
                    </div>
                  )}

                  {messages.map((m, index) => {
                    return (
                      <div className="w-full" key={m.id}>
                        {m.role === 'user' ? (
                          <UserMessage message={m.content || '(vazio)'} />
                        ) : (
                          <AssistantMessage
                            message={m.content || '(aguardando...)'}
                          />
                        )}
                      </div>
                    )
                  })}

                  {isLoading && (
                    <div className="flex gap-2 rounded bg-purple-50 p-4 text-sm text-neutral-600">
                      <Sparkles className="h-4 w-4 animate-spin" /> Pensando em
                      uma copy para você...
                    </div>
                  )}

                  {error && (
                    <div className="rounded bg-red-50 p-3 text-sm text-red-500">
                      Ocorreu um erro. Tente novamente.
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {messages.length === 0 && (
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <button
                      onClick={() =>
                        handleSuggestionClick(
                          'Crie uma legenda para foto de produto'
                        )
                      }
                      className="flex cursor-pointer flex-col gap-2 rounded-sm border border-neutral-300 p-2 hover:bg-neutral-50"
                    >
                      <StarLightbulb className="h-3 w-3 text-emerald-600" />
                      <p className="text-left text-xs text-neutral-500">
                        Crie uma legenda para foto de uma campanha de ajuda à
                        animais
                      </p>
                    </button>
                    <button
                      onClick={() =>
                        handleSuggestionClick('Escreva um post para Instagram')
                      }
                      className="flex cursor-pointer flex-col gap-2 rounded-sm border border-neutral-300 p-2 hover:bg-neutral-50"
                    >
                      <StarLightbulb className="h-3 w-3 text-purple-800" />
                      <p className="text-left text-xs text-neutral-500">
                        Escreva conteúdo topo de funil para novos usuários e
                        querem conhecer minha ONG
                      </p>
                    </button>
                    <button
                      onClick={() =>
                        handleSuggestionClick('Crie um slogan criativo')
                      }
                      className="flex cursor-pointer flex-col gap-2 rounded-sm border border-neutral-300 p-2 hover:bg-neutral-50"
                    >
                      <StarLightbulb className="h-3 w-3 text-blue-600" />
                      <p className="text-left text-xs text-neutral-500">
                        Crie um slogan bem criativo para eu utilizar no meu
                        header
                      </p>
                    </button>
                    <button
                      onClick={() =>
                        handleSuggestionClick('Gere ideias de conteúdo')
                      }
                      className="flex cursor-pointer flex-col gap-2 rounded-sm border border-neutral-300 p-2 hover:bg-neutral-50"
                    >
                      <StarLightbulb className="h-3 w-3 text-rose-600" />
                      <p className="text-left text-xs text-neutral-500">
                        Gere ideias de conteúdo para a Landing Page da minha ONG
                      </p>
                    </button>
                  </div>
                )}

                <form
                  className="flex h-auto w-full items-stretch gap-2"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="h-auto w-full flex-1 rounded-sm border border-neutral-300 px-3 py-2 text-sm text-neutral-600 transition-all duration-300 ease-in-out outline-none focus:border-neutral-400"
                    disabled={isLoading}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem aqui..."
                    value={input}
                    autoFocus
                  />
                  <button
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-neutral-500 transition-all duration-300 hover:bg-neutral-600 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={isLoading || !input.trim()}
                    type="submit"
                  >
                    <SendChatMessage className="h-4 w-4 text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
