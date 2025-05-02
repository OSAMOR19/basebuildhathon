"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, GitBranch, Eye } from "lucide-react"

interface ProjectData {
  id: string
  title: string
  description: string
  imageUrl: string
  creator: string
  creatorAvatar: string
  stars: number
  forks: number
  views: number
  tags: string[]
}

const projectsData: ProjectData[] = [
  {
    id: "1",
    title: "Base Chain DEX",
    description: "A decentralized exchange built on Base Chain with optimized gas fees and a seamless user experience.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    creator: "DeFi Labs",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    stars: 245,
    forks: 87,
    views: 1243,
    tags: ["DeFi", "Exchange", "Base Chain"],
  },
  {
    id: "2",
    title: "NFT Marketplace Kit",
    description:
      "A customizable template for creating NFT marketplaces on Base Chain with support for various token standards.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    creator: "NFT Builders",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    stars: 189,
    forks: 56,
    views: 987,
    tags: ["NFT", "Marketplace", "Template"],
  },
  {
    id: "3",
    title: "Base Chain Analytics",
    description: "A comprehensive analytics dashboard for tracking metrics and performance on Base Chain.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    creator: "Data Insights",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    stars: 312,
    forks: 124,
    views: 1876,
    tags: ["Analytics", "Dashboard", "Data"],
  },
  {
    id: "4",
    title: "Base Wallet Connect",
    description:
      "A library for seamlessly connecting wallets to dApps built on Base Chain with support for multiple wallet providers.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    creator: "Wallet Labs",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    stars: 278,
    forks: 93,
    views: 1542,
    tags: ["Wallet", "Integration", "Library"],
  },
  {
    id: "5",
    title: "Base Chain Bridge",
    description: "A cross-chain bridge for transferring assets between Base Chain and other EVM-compatible networks.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    creator: "Bridge Builders",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    stars: 356,
    forks: 142,
    views: 2134,
    tags: ["Bridge", "Cross-Chain", "Integration"],
  },
  {
    id: "6",
    title: "Base Chain Identity",
    description: "A decentralized identity solution built on Base Chain for secure and private identity verification.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    creator: "Identity DAO",
    creatorAvatar: "/placeholder.svg?height=40&width=40",
    stars: 198,
    forks: 67,
    views: 1087,
    tags: ["Identity", "Privacy", "Security"],
  },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "DeFi", "NFT", "Analytics", "Integration"]

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.some((tag) => tag.includes(activeFilter)))

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Explore Projects on BASE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover innovative projects built on Base Chain by talented developers and teams. Get inspired and
            contribute to the growing ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill ${activeFilter === filter ? "active" : "inactive"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden transition-all duration-300">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={project.creatorAvatar || "/placeholder.svg"}
                      alt={project.creator}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{project.creator}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-4 w-4 mr-1" />
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{project.views}</span>
                  </div>
                </div>

                <Link href={`/projects/${project.id}`} className="btn-primary w-full text-center mt-4">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
