'use client'

import { Controller } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Spin } from '@/components/ui/spin'
import { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'

import { SectionCard } from '../section-card'
import type { AboutSectionProps } from './types'

export const AboutSection = ({
  control,
  register,
  defaultDescription,
  isSubmitting
}: AboutSectionProps) => (
  <SectionCard title="Sobre a organização">
    <div className="w-full">
      <label className="mb-2 block font-medium text-neutral-700">
        Sobre a minha ONG
      </label>
      <textarea
        className="w-full resize-none rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none placeholder:text-sm focus:ring-1 focus:ring-neutral-500 focus:outline-none"
        defaultValue={defaultDescription}
        placeholder="Ex: Somos uma ONG dedicada a apoiar crianças em situação de vulnerabilidade por meio de educação, alimentação e atividades culturais."
        rows={4}
        required
        {...register('description')}
      />
    </div>

    <div className="w-full">
      <label className="mb-2 block font-medium text-neutral-700">
        Template de Design da minha page
        <span className="ml-2 text-rose-500">*</span>
      </label>
      <Controller
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value ?? ''}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha o template do layout da sua página." />
            </SelectTrigger>
            <SelectContent>
              {[
                {
                  label: 'Primary',
                  value: 'primary'
                },
                {
                  label: 'Secondary',
                  value: 'secondary'
                },
                {
                  label: 'Tertiary',
                  value: 'tertiary'
                },
                {
                  label: 'Quarternary',
                  value: 'quarternary'
                }
              ].map((option, index: number) => (
                <SelectItem key={`option-${index}`} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        control={control}
        name="design_template"
      />
    </div>

    <div className="w-full">
      <label className="mb-2 block font-medium text-neutral-700">
        Área de atuação da ONG
        <span className="ml-2 text-rose-500">*</span>
      </label>
      <Controller
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value ?? ''}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Qual a área de atuação da sua ONG?" />
            </SelectTrigger>
            <SelectContent>
              {HUBSPOT_ONG_VALUES.map((value: string, index: number) => (
                <SelectItem key={`option-${index}`} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        control={control}
        name="ong_type"
      />
    </div>
    <div className="flex w-full items-center md:justify-end">
      <Button
        className="mt-4 flex cursor-pointer items-center gap-3 text-sm"
        type="submit"
      >
        Salvar alterações
        {isSubmitting ? <Spin /> : null}
      </Button>
    </div>
  </SectionCard>
)
