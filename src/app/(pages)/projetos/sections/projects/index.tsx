'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { PROJECTS_DATA } from './data'

export const Projects: FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid">
        {PROJECTS_DATA.map((project, index: number) => (
          <motion.div
            className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            key={`${project.title}-${index}`}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link href={`/projects/${project.id}`}>
              <figure className="relative h-48 w-full">
                <Image
                  alt={project.title}
                  className="h-full w-full object-cover"
                  src={project.image}
                  fill
                />
              </figure>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
                <p className="text-neutral-600">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
