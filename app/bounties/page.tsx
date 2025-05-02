"use client"

import { useState } from "react"
import { Clock, DollarSign } from "lucide-react"

interface BountyData {
  id: string
  title: string
  description: string
  reward: {
    amount: number
    currency: string
  }
  deadline: string
  tags: string[]
  difficulty: "Easy" | "Medium" | "Hard"
}

const bountiesData: BountyData[] = [
  {
    id: "1",
    title: "Build a Base Chain Block Explorer",
    description:
      "Create a user-friendly block explorer for Base Chain that allows users to search transactions, view block details, and track wallet activities with a clean, intuitive interface.",
    reward: {
      amount: 5000,
      currency: "USDC",
    },
    deadline: "June 15, 2025",
    tags: ["Development", "UI/UX", "Blockchain"],
    difficulty: "Medium",
  },
  {
    id: "2",
    title: "Design Base Wallet Mobile UI Kit",
    description:
      "Create a comprehensive UI kit for Base wallet mobile applications, including components for transaction history, asset management, and wallet connection flows.",
    reward: {
      amount: 2500,
      currency: "USDC",
    },
    deadline: "May 30, 2025",
    tags: ["Design", "Mobile", "UI Kit"],
    difficulty: "Medium",
  },
  {
    id: "3",
    title: "Develop Base Chain Analytics Dashboard",
    description:
      "Build an analytics dashboard that visualizes key metrics on Base Chain, including transaction volume, active addresses, gas usage, and popular dApps.",
    reward: {
      amount: 7500,
      currency: "USDC",
    },
    deadline: "July 10, 2025",
    tags: ["Development", "Analytics", "Dashboard"],
    difficulty: "Hard",
  },
  {
    id: "4",
    title: "Create Educational Content for Base Developers",
    description:
      "Develop a series of tutorials, guides, and documentation to help new developers get started with building on Base Chain.",
    reward: {
      amount: 3000,
      currency: "USDC",
    },
    deadline: "June 5, 2025",
    tags: ["Content", "Education", "Documentation"],
    difficulty: "Easy",
  },
  {
    id: "5",
    title: "Build a Cross-Chain Bridge UI",
    description:
      "Design and implement a user interface for a cross-chain bridge that allows users to transfer assets between Base and other EVM-compatible chains.",
    reward: {
      amount: 6000,
      currency: "USDC",
    },
    deadline: "July 25, 2025",
    tags: ["Development", "UI/UX", "Cross-Chain"],
    difficulty: "Hard",
  },
  {
    id: "6",
    title: "Develop Base Chain NFT Marketplace Template",
    description:
      "Create a customizable template for NFT marketplaces built on Base Chain, including features for minting, listing, bidding, and trading NFTs.",
    reward: {
      amount: 5500,
      currency: "USDC",
    },
    deadline: "August 10, 2025",
    tags: ["Development", "NFT", "Marketplace"],
    difficulty: "Medium",
  },
]

export default function BountiesPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Development", "Design", "Content"]

  const filteredBounties =
    activeFilter === "All" ? bountiesData : bountiesData.filter((bounty) => bounty.tags.includes(activeFilter))

  return (
    <div className="pt-[100px] max-w-[1280px] mx-auto px-6">
      <div className="mb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bounties on BASE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete bounties to earn rewards while contributing to the Base ecosystem. Find tasks that match your
            skills and interests.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-150 ease-in-out ${
                activeFilter === filter 
                  ? "bg-[#EDF2FF] text-[#0D53DD] border border-[#0D53DD]" 
                  : "bg-[#F2F4F7] text-[#344054] border border-transparent hover:bg-[#E4E7EC]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <div key={bounty.id} className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] hover:shadow-[inset_0_0_12px_rgba(13,83,221,0.25)] rounded-xl p-6 transition-all duration-300">
              <div className="mb-2">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    bounty.difficulty === "Easy"
                      ? "bg-green-100 text-green-800"
                      : bounty.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {bounty.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{bounty.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{bounty.description}</p>

              <div className="flex items-center mb-3">
                <DollarSign className="h-4 w-4 text-[#0D53DD] mr-2" />
                <span className="text-lg font-semibold text-[#0D53DD]">
                  {bounty.reward.amount} {bounty.reward.currency}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-500">Deadline: {bounty.deadline}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {bounty.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full bg-[#0D53DD] text-white py-2.5 rounded-full hover:bg-[#0D53DD]/90 transition-colors text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
