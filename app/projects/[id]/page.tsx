import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Github, Globe, Star, GitBranch, Eye } from "lucide-react"

// This would come from an API in a real application
const getProjectData = (id: string) => {
  const projects = {
    "1": {
      id: "1",
      title: "Base Chain DEX",
      description:
        "A decentralized exchange built on Base Chain with optimized gas fees and a seamless user experience.",
      longDescription: `
        <p>Base Chain DEX is a decentralized exchange built specifically for the Base Chain ecosystem. Our platform offers lightning-fast trades, minimal gas fees, and a user experience that rivals centralized exchanges.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Automated Market Maker (AMM) with optimized routing</li>
          <li>Multi-token liquidity pools with dynamic fee structures</li>
          <li>Limit orders and stop-loss functionality</li>
          <li>Yield farming opportunities for liquidity providers</li>
          <li>Governance token for community-driven development</li>
          <li>Mobile-responsive interface with dark mode support</li>
        </ul>
        
        <h3>Technical Stack:</h3>
        <ul>
          <li>Smart Contracts: Solidity with OpenZeppelin libraries</li>
          <li>Frontend: React with Ethers.js</li>
          <li>Indexing: The Graph Protocol</li>
          <li>Testing: Hardhat and Waffle</li>
        </ul>
        
        <h3>Roadmap:</h3>
        <p>Q2 2025: Launch of core exchange functionality<br>
        Q3 2025: Introduction of limit orders and advanced trading features<br>
        Q4 2025: Governance token launch and DAO formation<br>
        Q1 2026: Cross-chain bridge integration</p>
      `,
      imageUrl: "/placeholder.svg?height=400&width=800",
      creator: "DeFi Labs",
      creatorAvatar: "/placeholder.svg?height=80&width=80",
      stars: 245,
      forks: 87,
      views: 1243,
      tags: ["DeFi", "Exchange", "Base Chain"],
      website: "https://example.com/dex",
      github: "https://github.com/example/base-dex",
      demoUrl: "https://demo.example.com",
      launchDate: "June 15, 2025",
      team: [
        { name: "Alex Johnson", role: "Lead Developer", avatar: "/placeholder.svg?height=60&width=60" },
        { name: "Sarah Chen", role: "Smart Contract Engineer", avatar: "/placeholder.svg?height=60&width=60" },
        { name: "Miguel Rodriguez", role: "UI/UX Designer", avatar: "/placeholder.svg?height=60&width=60" },
        { name: "Priya Sharma", role: "Product Manager", avatar: "/placeholder.svg?height=60&width=60" },
      ],
    },
    "2": {
      id: "2",
      title: "NFT Marketplace Kit",
      description:
        "A customizable template for creating NFT marketplaces on Base Chain with support for various token standards.",
      longDescription: `
        <p>NFT Marketplace Kit is a comprehensive solution for developers looking to launch their own NFT marketplace on Base Chain. Our kit provides all the necessary components to create a fully-featured marketplace with minimal development effort.</p>
        
        <h3>Features:</h3>
        <ul>
          <li>Support for ERC-721, ERC-1155, and custom token standards</li>
          <li>Auction system with English, Dutch, and fixed-price options</li>
          <li>Creator royalties with on-chain enforcement</li>
          <li>Collection verification and curation tools</li>
          <li>Advanced search and filtering capabilities</li>
          <li>Customizable UI components and theming</li>
        </ul>
        
        <h3>Implementation:</h3>
        <p>The kit includes smart contracts, frontend components, and backend services that can be easily customized and deployed. Developers can choose which features to include and modify the design to match their brand.</p>
        
        <h3>Use Cases:</h3>
        <ul>
          <li>Art galleries launching digital exhibitions</li>
          <li>Gaming companies selling in-game items</li>
          <li>Music labels releasing limited edition collectibles</li>
          <li>Sports teams creating fan engagement platforms</li>
          <li>Brands entering the Web3 space</li>
        </ul>
      `,
      imageUrl: "/placeholder.svg?height=400&width=800",
      creator: "NFT Builders",
      creatorAvatar: "/placeholder.svg?height=80&width=80",
      stars: 189,
      forks: 56,
      views: 987,
      tags: ["NFT", "Marketplace", "Template"],
      website: "https://example.com/nft-kit",
      github: "https://github.com/example/nft-marketplace-kit",
      demoUrl: "https://demo.example.com/nft",
      launchDate: "May 10, 2025",
      team: [
        { name: "Emma Wilson", role: "Lead Developer", avatar: "/placeholder.svg?height=60&width=60" },
        { name: "David Park", role: "Smart Contract Engineer", avatar: "/placeholder.svg?height=60&width=60" },
        { name: "Olivia Martinez", role: "Frontend Developer", avatar: "/placeholder.svg?height=60&width=60" },
      ],
    },
    // Add more projects as needed
  }

  return projects[id as keyof typeof projects]
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  if (!project) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-primary hover:underline mt-4 inline-block">
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <Link href="/projects" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to projects
        </Link>

        <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] rounded-xl overflow-hidden mb-8">
          <div className="h-64 w-full relative">
            <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-3xl font-bold text-[#101828] mb-4 md:mb-0">{project.title}</h1>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center">
                  <GitBranch className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{project.forks}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{project.views}</span>
                </div>
              </div>
            </div>

            <p className="text-[#344054] mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-[#93B7FF3D] text-[#344054] px-3 py-1 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Website
                </a>
              </div>

              <div className="flex items-center">
                <Github className="h-5 w-5 text-primary mr-2" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Repository
                </a>
              </div>

              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span>Launch Date: {project.launchDate}</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <Image
                  src={project.creatorAvatar || "/placeholder.svg"}
                  alt={project.creator}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-semibold">{project.creator}</p>
                <p className="text-sm text-gray-500">Project Creator</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#101828]">About this Project</h2>

              <div
                className="prose max-w-none text-[#344054]"
                dangerouslySetInnerHTML={{ __html: project.longDescription }}
              />

              <div className="mt-8">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#101828]">Team</h3>

              <div className="space-y-4">
                {project.team.map((member) => (
                  <div key={member.name} className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#101828]">Related Projects</h3>

              <div className="space-y-4">
                <Link href="/projects/2" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <h4 className="font-semibold">NFT Marketplace Kit</h4>
                  <p className="text-sm text-gray-500">A customizable template for creating NFT marketplaces</p>
                </Link>

                <Link href="/projects/3" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <h4 className="font-semibold">Base Chain Analytics</h4>
                  <p className="text-sm text-gray-500">A comprehensive analytics dashboard for Base Chain</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
