import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
  githubLink?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "", githubLink }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#0989ff]/30">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link
            href={link}
            target="_blank"
            className="bg-[#0989ff] text-white px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0989ff] transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
              {tag}
            </Badge>
          ))}
        </div>

        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-[#0989ff]"
          >
            <Github className="mr-1 h-4 w-4" />
            View Code
          </Link>
        )}
      </div>
    </div>
  )
}
