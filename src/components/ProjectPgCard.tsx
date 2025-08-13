import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

function ProjectPgCard({
  title,
  description,
  image,
  technologies,
  category,
  live,
  github,
}: {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  live: string
  github: string
}) {
  return (
    <div className="group relative flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t p-4 from-black/30 via-transparent to-transparent">
          <span className="py-1 px-2 text-sm md:text-base bg-green-950 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        {/* Top section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons — pushed to bottom & right */}
        <div className="mt-auto flex gap-4 self-end">
          <Link
            href={github}
            target="_blank"
            className="flex items-center px-4 py-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors group/btn"
          >
            <FaGithub className="w-4 h-4 mr-2" />
            <span>Code</span>
            <FaChevronRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          {live && (
            <Link
              href={live}
              target="_blank"
              className="flex items-center px-4 py-2 bg-green-600 cursor-pointer rounded-lg hover:bg-green-500 transition-colors group/btn"
            >
              <FiExternalLink className="w-4 h-4 mr-2" />
              <span>Live</span>
              <FaChevronRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectPgCard
