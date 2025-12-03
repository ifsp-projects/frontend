'use client'

import { Trash } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import { useState } from 'react'

import SpotlightCard from '@/components/shared/spotlight-card'

import { categories, ongs } from './data'

const categoryColors = {
  'Assistência Social': 'bg-blue-100 text-blue-800',
  Educação: 'bg-green-100 text-green-800',
  Saúde: 'bg-red-100 text-red-800',
  'Meio Ambiente': 'bg-green-100 text-green-800'
}

const getCategoryColor = (category: string) => {
  return (
    categoryColors[category as keyof typeof categoryColors] ||
    'bg-gray-100 text-gray-800'
  )
}

export const List: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredOngs = ongs.filter(ong => {
    const matchesCategory =
      !selectedCategory || ong.category === selectedCategory
    const matchesSearch =
      !searchTerm ||
      ong.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ong.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const handleSelectCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
      return
    }

    setSelectedCategory(category)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <article className="mb-8 flex w-full flex-col gap-2 lg:mb-12">
          <h2 className="text-2xl font-bold lg:text-4xl">Catálogo de ONGs</h2>
          <p className="text-sm text-neutral-500 lg:text-base">
            Descubra organizações que fazem a diferença e apoie causas
            importantes.
          </p>
        </article>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {categories.map(category => (
              <button
                className={`focus:ring-opacity-50 cursor-pointer rounded-full border px-4 py-3 text-[13px] font-medium backdrop-blur-[10px] transition duration-200 hover:scale-105 focus:ring-2 focus:outline-none ${
                  selectedCategory === category
                    ? 'border-[#5227ff] bg-[#5227ff] text-white shadow-lg focus:ring-[#5227ff]'
                    : 'border-gray-300 bg-white/80 text-gray-700 hover:border-[#5227ff] hover:bg-white hover:text-[#5227ff] focus:ring-gray-300'
                }`}
                key={category}
                onClick={handleSelectCategory.bind(null, category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-0.5 w-[350px] max-w-full">
            <input
              className="focus:ring-opacity-20 w-full max-w-md rounded-full border border-gray-300 px-4 py-4 text-sm transition duration-200 hover:border-[#5227ff] focus:border-[#5227ff] focus:ring-2 focus:ring-[#5227ff] focus:outline-none"
              onChange={handleSearchChange}
              placeholder="Pesquisar ONGs por nome ou descrição..."
              type="text"
              value={searchTerm}
            />
          </div>
        </div>

        {filteredOngs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredOngs.map(ong => (
              <Link href={`/projetos/${ong.id}`} key={ong.id}>
                <SpotlightCard
                  className="custom-spotlight-card cursor-pointer bg-white"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="rounded-lg bg-white p-6">
                    <div className="mb-4 flex items-center gap-3">
                      {ong.logo ? (
                        <img
                          alt={ong.name}
                          className="h-12 w-12 rounded-lg object-contain"
                          src={ong.logo}
                        />
                      ) : (
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${ong.bgColor}`}
                        >
                          <span className="text-lg font-bold">
                            {ong.initials}
                          </span>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900">
                        {ong.name}
                      </h3>
                    </div>
                    <p className="mb-4 text-sm text-gray-600">
                      {ong.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(ong.category)}`}
                      >
                        {ong.category}
                      </span>
                      <button className="cursor-pointer text-sm font-medium text-[#5227ff] hover:underline">
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-6">
              <Trash className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Não há ONGs disponíveis
            </h3>
            <p className="text-sm text-gray-600">
              Nenhuma organização foi encontrada para os filtros selecionados.
              <br />
              Tente alterar a categoria ou termo de busca.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
