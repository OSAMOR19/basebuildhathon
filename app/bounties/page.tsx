"use client"

import { useState } from "react"
import { Clock, DollarSign } from "lucide-react"
import Azzapic from "@/components/images/azza.jpg"
import Zorapic from "@/components/images/zora.jpg"
import metacade from "@/components/images/metacade.jpg"
import farcaster from "@/components/images/farcaster.jpg"
import coinbase from "@/components/images/coinbasewallet.jpg"
import Qrbase from "@/components/images/qrbase.jpg"
import send from "@/components/images/send.jpg"
import cliza from "@/components/images/cliza.jpg"
import bankr from "@/components/images/bankrbot.jpg"
import Image from "next/image"
import Link from "next/link"
import FilterTabs from "@/components/filter-tabs"

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
  category: "Video" | "Thread" | "Development" | "Writeathon" | "Design"
  projectName: string
  projectLogo: any
}

// Updated bounties data with categories and project logos
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
    category: "Development",
    projectName: "Base",
    projectLogo: Qrbase
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
    category: "Design",
    projectName: "Base",
    projectLogo: Qrbase
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
    category: "Development",
    projectName: "Coinbase",
    projectLogo: coinbase
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
    category: "Writeathon",
    projectName: "Coinbase",
    projectLogo: coinbase
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
    category: "Development",
    projectName: "Zora",
    projectLogo: Zorapic
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
    category: "Development",
    projectName: "Zora",
    projectLogo: Zorapic
  },
  {
    id: "7",
    title: "Create a Video Tutorial Series on Base Chain Development",
    description:
      "Produce a comprehensive video series teaching developers how to build dApps on Base Chain, from setup to deployment.",
    reward: {
      amount: 4000,
      currency: "USDC",
    },
    deadline: "June 20, 2025",
    tags: ["Video", "Education", "Tutorial"],
    difficulty: "Medium",
    category: "Video",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "8",
    title: "Design Base Chain Onboarding Illustrations",
    description:
      "Create a set of illustrations for the Base Chain onboarding process that explains key concepts in a visually appealing way.",
    reward: {
      amount: 3500,
      currency: "USDC",
    },
    deadline: "May 25, 2025",
    tags: ["Design", "Illustration", "Onboarding"],
    difficulty: "Medium",
    category: "Design",
    projectName: "Metacade",
    projectLogo: metacade
  },
  {
    id: "9",
    title: "Write a Thread Explaining Base Chain Benefits",
    description:
      "Create an engaging, informative thread explaining the benefits of Base Chain for developers and users in simple terms.",
    reward: {
      amount: 1000,
      currency: "USDC",
    },
    deadline: "May 15, 2025",
    tags: ["Content", "Social Media", "Education"],
    difficulty: "Easy",
    category: "Thread",
    projectName: "Farcaster",
    projectLogo: farcaster
  },
  {
    id: "10",
    title: "Produce a Video Demo of Base Chain dApp",
    description:
      "Create a high-quality video demonstration of a popular dApp on Base Chain, showcasing its features and user experience.",
    reward: {
      amount: 2000,
      currency: "USDC",
    },
    deadline: "June 10, 2025",
    tags: ["Video", "Demo", "dApp"],
    difficulty: "Medium",
    category: "Video",
    projectName: "Send",
    projectLogo: send
  },
  {
    id: "11",
    title: "Write a Technical Article on Base Chain Architecture",
    description:
      "Create an in-depth technical article explaining the architecture of Base Chain and how it differs from other L2 solutions.",
    reward: {
      amount: 2500,
      currency: "USDC",
    },
    deadline: "July 5, 2025",
    tags: ["Content", "Technical", "Architecture"],
    difficulty: "Hard",
    category: "Writeathon",
    projectName: "Cliza",
    projectLogo: cliza
  },
  {
    id: "12",
    title: "Create Farcaster Thread on Base Chain Use Cases",
    description:
      "Develop an engaging thread on Farcaster highlighting innovative use cases for Base Chain across different industries.",
    reward: {
      amount: 1500,
      currency: "USDC",
    },
    deadline: "May 20, 2025",
    tags: ["Content", "Social Media", "Use Cases"],
    difficulty: "Easy",
    category: "Thread",
    projectName: "Farcaster",
    projectLogo: farcaster
  },
  {
    id: "13",
    title: "Create a Video Guide for Base Wallet Setup",
    description:
      "Produce a step-by-step video guide showing users how to set up and secure their Base wallet, including best security practices.",
    reward: {
      amount: 1800,
      currency: "USDC",
    },
    deadline: "June 5, 2025",
    tags: ["Video", "Tutorial", "Wallet"],
    difficulty: "Easy",
    category: "Video",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "14",
    title: "Video Explainer: How Base Improves Ethereum Scaling",
    description:
      "Create an animated explainer video that clearly illustrates how Base helps scale Ethereum and the technical aspects behind it.",
    reward: {
      amount: 3000,
      currency: "USDC",
    },
    deadline: "July 1, 2025",
    tags: ["Video", "Animation", "Technical"],
    difficulty: "Medium",
    category: "Video",
    projectName: "Coinbase",
    projectLogo: coinbase
  },
  {
    id: "15",
    title: "Base DeFi Protocols Comparison Video",
    description:
      "Create a comprehensive video comparing the top DeFi protocols on Base, highlighting features, APYs, and security considerations.",
    reward: {
      amount: 2500,
      currency: "USDC",
    },
    deadline: "June 25, 2025",
    tags: ["Video", "DeFi", "Comparison"],
    difficulty: "Medium",
    category: "Video",
    projectName: "Bankr",
    projectLogo: bankr
  },
  {
    id: "16",
    title: "Base NFT Marketplace Video Walkthrough",
    description:
      "Create a detailed video walkthrough of minting, buying, and selling NFTs on Base's top marketplaces.",
    reward: {
      amount: 2200,
      currency: "USDC",
    },
    deadline: "July 15, 2025",
    tags: ["Video", "NFT", "Tutorial"],
    difficulty: "Medium",
    category: "Video",
    projectName: "Zora",
    projectLogo: Zorapic
  },
  {
    id: "17",
    title: "Base vs Other L2s: Video Comparison",
    description:
      "Create a fair, technical comparison video between Base and other Layer 2 solutions like Optimism, Arbitrum, and zkSync.",
    reward: {
      amount: 3500,
      currency: "USDC",
    },
    deadline: "August 5, 2025",
    tags: ["Video", "Comparison", "Technical"],
    difficulty: "Hard",
    category: "Video",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "18",
    title: "Thread: Base Chain for Traditional Developers",
    description:
      "Create a thread explaining Base Chain concepts for developers coming from traditional web development backgrounds.",
    reward: {
      amount: 1200,
      currency: "USDC",
    },
    deadline: "May 30, 2025",
    tags: ["Thread", "Education", "Developers"],
    difficulty: "Medium",
    category: "Thread",
    projectName: "Farcaster",
    projectLogo: farcaster
  },
  {
    id: "19",
    title: "Thread: Base Chain DeFi Opportunities",
    description:
      "Write an engaging thread highlighting the current DeFi opportunities on Base Chain, including yields, risks, and protocols.",
    reward: {
      amount: 1300,
      currency: "USDC",
    },
    deadline: "June 10, 2025",
    tags: ["Thread", "DeFi", "Finance"],
    difficulty: "Medium",
    category: "Thread",
    projectName: "Bankr",
    projectLogo: bankr
  },
  {
    id: "20",
    title: "Thread: Base Chain NFT Ecosystem Overview",
    description:
      "Create a comprehensive thread showcasing the NFT ecosystem on Base Chain, including marketplaces, collections, and artists.",
    reward: {
      amount: 1400,
      currency: "USDC",
    },
    deadline: "June 15, 2025",
    tags: ["Thread", "NFT", "Ecosystem"],
    difficulty: "Medium",
    category: "Thread",
    projectName: "Zora",
    projectLogo: Zorapic
  },
  {
    id: "21",
    title: "Thread: Base Chain Security Best Practices",
    description:
      "Write a thread explaining security best practices for users and developers on Base Chain.",
    reward: {
      amount: 1600,
      currency: "USDC",
    },
    deadline: "June 20, 2025",
    tags: ["Thread", "Security", "Best Practices"],
    difficulty: "Hard",
    category: "Thread",
    projectName: "Coinbase",
    projectLogo: coinbase
  },
  {
    id: "22",
    title: "Thread: Base Chain Gaming Ecosystem",
    description:
      "Create a thread highlighting the emerging gaming ecosystem on Base Chain, including games, platforms, and opportunities.",
    reward: {
      amount: 1100,
      currency: "USDC",
    },
    deadline: "June 25, 2025",
    tags: ["Thread", "Gaming", "Ecosystem"],
    difficulty: "Easy",
    category: "Thread",
    projectName: "Metacade",
    projectLogo: metacade
  },
  {
    id: "23",
    title: "Develop a Base Chain Block Explorer API",
    description:
      "Build a robust API for accessing Base Chain block data, transaction history, and account information.",
    reward: {
      amount: 8000,
      currency: "USDC",
    },
    deadline: "August 15, 2025",
    tags: ["Development", "API", "Block Explorer"],
    difficulty: "Hard",
    category: "Development",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "24",
    title: "Create a Base Chain Wallet SDK",
    description:
      "Develop a comprehensive SDK for integrating Base Chain wallet functionality into web and mobile applications.",
    reward: {
      amount: 7000,
      currency: "USDC",
    },
    deadline: "August 1, 2025",
    tags: ["Development", "SDK", "Wallet"],
    difficulty: "Hard",
    category: "Development",
    projectName: "Coinbase",
    projectLogo: coinbase
  },
  {
    id: "25",
    title: "Build a Base Chain NFT Minting Tool",
    description:
      "Create a user-friendly tool for creators to mint and manage NFTs on Base Chain without coding knowledge.",
    reward: {
      amount: 5000,
      currency: "USDC",
    },
    deadline: "July 20, 2025",
    tags: ["Development", "NFT", "Tool"],
    difficulty: "Medium",
    category: "Development",
    projectName: "Zora",
    projectLogo: Zorapic
  },
  {
    id: "26",
    title: "Develop a Base Chain DeFi Dashboard",
    description:
      "Build a comprehensive dashboard for tracking DeFi positions, yields, and opportunities across Base Chain protocols.",
    reward: {
      amount: 6000,
      currency: "USDC",
    },
    deadline: "July 30, 2025",
    tags: ["Development", "DeFi", "Dashboard"],
    difficulty: "Medium",
    category: "Development",
    projectName: "Bankr",
    projectLogo: bankr
  },
  {
    id: "27",
    title: "Create a Base Chain Gaming SDK",
    description:
      "Develop an SDK for game developers to easily integrate Base Chain functionality into their games.",
    reward: {
      amount: 7500,
      currency: "USDC",
    },
    deadline: "August 20, 2025",
    tags: ["Development", "Gaming", "SDK"],
    difficulty: "Hard",
    category: "Development",
    projectName: "Metacade",
    projectLogo: metacade
  },
  {
    id: "28",
    title: "Build a Cross-Chain Asset Bridge for Base",
    description:
      "Develop a secure bridge for transferring assets between Base Chain and other popular blockchains.",
    reward: {
      amount: 9000,
      currency: "USDC",
    },
    deadline: "September 1, 2025",
    tags: ["Development", "Bridge", "Cross-Chain"],
    difficulty: "Hard",
    category: "Development",
    projectName: "Send",
    projectLogo: send
  },
  {
    id: "29",
    title: "Develop a Base Chain Social Media Integration",
    description:
      "Build tools and APIs for integrating Base Chain functionality into social media platforms and applications.",
    reward: {
      amount: 5500,
      currency: "USDC",
    },
    deadline: "July 25, 2025",
    tags: ["Development", "Social", "Integration"],
    difficulty: "Medium",
    category: "Development",
    projectName: "Farcaster",
    projectLogo: farcaster
  },
  {
    id: "30",
    title: "Write a Comprehensive Base Chain Development Guide",
    description:
      "Create a detailed guide covering all aspects of developing on Base Chain, from setup to deployment and maintenance.",
    reward: {
      amount: 4000,
      currency: "USDC",
    },
    deadline: "July 10, 2025",
    tags: ["Writeathon", "Development", "Guide"],
    difficulty: "Hard",
    category: "Writeathon",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "31",
    title: "Create a Base Chain DeFi Protocols Comparison",
    description:
      "Write a detailed comparison of DeFi protocols on Base Chain, including features, security, and performance.",
    reward: {
      amount: 3500,
      currency: "USDC",
    },
    deadline: "June 30, 2025",
    tags: ["Writeathon", "DeFi", "Comparison"],
    difficulty: "Medium",
    category: "Writeathon",
    projectName: "Bankr",
    projectLogo: bankr
  },
  {
    id: "32",
    title: "Write a Base Chain Security Best Practices Guide",
    description:
      "Create a comprehensive guide on security best practices for developers building on Base Chain.",
    reward: {
      amount: 3800,
      currency: "USDC",
    },
    deadline: "July 5, 2025",
    tags: ["Writeathon", "Security", "Best Practices"],
    difficulty: "Hard",
    category: "Writeathon",
    projectName: "Coinbase",
    projectLogo: coinbase
  },
  {
    id: "33",
    title: "Create a Base Chain NFT Creation Guide",
    description:
      "Write a detailed guide on creating, minting, and managing NFTs on Base Chain for artists and creators.",
    reward: {
      amount: 3200,
      currency: "USDC",
    },
    deadline: "June 25, 2025",
    tags: ["Writeathon", "NFT", "Guide"],
    difficulty: "Medium",
    category: "Writeathon",
    projectName: "Zora",
    projectLogo: Zorapic
  },
  {
    id: "34",
    title: "Write a Base Chain Gaming Development Guide",
    description:
      "Create a comprehensive guide for game developers looking to build blockchain games on Base Chain.",
    reward: {
      amount: 3600,
      currency: "USDC",
    },
    deadline: "July 15, 2025",
    tags: ["Writeathon", "Gaming", "Development"],
    difficulty: "Medium",
    category: "Writeathon",
    projectName: "Metacade",
    projectLogo: metacade
  },
  {
    id: "35",
    title: "Create a Base Chain for Enterprises Whitepaper",
    description:
      "Write a professional whitepaper explaining the benefits and implementation strategies of Base Chain for enterprise use cases.",
    reward: {
      amount: 4500,
      currency: "USDC",
    },
    deadline: "July 30, 2025",
    tags: ["Writeathon", "Enterprise", "Whitepaper"],
    difficulty: "Hard",
    category: "Writeathon",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "36",
    title: "Design a Base Chain Mobile Wallet UI Kit",
    description:
      "Create a comprehensive UI kit for mobile wallet applications built on Base Chain, including all necessary screens and components.",
    reward: {
      amount: 4000,
      currency: "USDC",
    },
    deadline: "July 5, 2025",
    tags: ["Design", "UI Kit", "Mobile"],
    difficulty: "Medium",
    category: "Design",
    projectName: "Coinbase",
    projectLogo: coinbase
  },
  {
    id: "37",
    title: "Create Base Chain DeFi Dashboard UI Design",
    description:
      "Design a beautiful and intuitive dashboard for tracking DeFi investments and opportunities on Base Chain.",
    reward: {
      amount: 3800,
      currency: "USDC",
    },
    deadline: "June 30, 2025",
    tags: ["Design", "Dashboard", "DeFi"],
    difficulty: "Medium",
    category: "Design",
    projectName: "Bankr",
    projectLogo: bankr
  },
  {
    id: "38",
    title: "Design Base Chain NFT Marketplace UI",
    description:
      "Create a modern, user-friendly UI design for an NFT marketplace built on Base Chain.",
    reward: {
      amount: 4200,
      currency: "USDC",
    },
    deadline: "July 10, 2025",
    tags: ["Design", "NFT", "Marketplace"],
    difficulty: "Medium",
    category: "Design",
    projectName: "Zora",
    projectLogo: Zorapic
  },
  {
    id: "39",
    title: "Create Base Chain Gaming Platform UI Design",
    description:
      "Design a visually appealing UI for a gaming platform built on Base Chain, including game discovery, profiles, and marketplace.",
    reward: {
      amount: 4500,
      currency: "USDC",
    },
    deadline: "July 20, 2025",
    tags: ["Design", "Gaming", "Platform"],
    difficulty: "Hard",
    category: "Design",
    projectName: "Metacade",
    projectLogo: metacade
  },
  {
    id: "40",
    title: "Design Base Chain Block Explorer UI",
    description:
      "Create a clean, intuitive UI design for a Base Chain block explorer that makes blockchain data accessible to all users.",
    reward: {
      amount: 3500,
      currency: "USDC",
    },
    deadline: "June 25, 2025",
    tags: ["Design", "Block Explorer", "UI"],
    difficulty: "Medium",
    category: "Design",
    projectName: "Base",
    projectLogo: Qrbase
  },
  {
    id: "41",
    title: "Create Base Chain Brand Identity System",
    description:
      "Design a comprehensive brand identity system for a Base Chain project, including logo, color palette, typography, and usage guidelines.",
    reward: {
      amount: 5000,
      currency: "USDC",
    },
    deadline: "July 15, 2025",
    tags: ["Design", "Branding", "Identity"],
    difficulty: "Hard",
    category: "Design",
    projectName: "Cliza",
    projectLogo: cliza
  }
]

export default function BountiesPage() {
  const categories = ["All", "Video", "Thread", "Development", "Writeathon", "Design"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredBounties =
    activeCategory === "All" 
      ? bountiesData 
      : bountiesData.filter((bounty) => bounty.category === activeCategory)

  const handleFilterChange = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <div className="pt-[100px] max-w-[1280px] mx-auto px-6 pb-20">
      <div className="mb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bounties on BASE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete bounties to earn rewards while contributing to the Base ecosystem. Find tasks that match your
            skills and interests.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <FilterTabs categories={categories} onFilterChange={handleFilterChange} />
        </div>

        {/* Category Description */}
        <div className="mb-10">
          {activeCategory === "All" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">All Bounties</h2>
              <p className="text-gray-600">Browse all available bounties across different categories.</p>
            </div>
          )}
          {activeCategory === "Video" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">Video Bounties</h2>
              <p className="text-gray-600">Create video tutorials, demos, and explainers to help educate the community about Base Chain and its ecosystem.</p>
            </div>
          )}
          {activeCategory === "Thread" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">Thread Bounties</h2>
              <p className="text-gray-600">Write engaging social media threads that explain concepts, showcase projects, or highlight features of the Base ecosystem.</p>
            </div>
          )}
          {activeCategory === "Development" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">Development Bounties</h2>
              <p className="text-gray-600">Build applications, tools, and infrastructure to enhance the Base Chain ecosystem and improve user experiences.</p>
            </div>
          )}
          {activeCategory === "Writeathon" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">Writeathon Bounties</h2>
              <p className="text-gray-600">Create written content including articles, documentation, guides, and tutorials to educate users about Base Chain.</p>
            </div>
          )}
          {activeCategory === "Design" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">Design Bounties</h2>
              <p className="text-gray-600">Design user interfaces, illustrations, graphics, and visual assets for projects building on Base Chain.</p>
            </div>
          )}
        </div>

        {/* Bounty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <div key={bounty.id} className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] hover:shadow-[inset_0_0_12px_rgba(13,83,221,0.25)] rounded-xl p-6 transition-all duration-300">
              {/* Project Logo and Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 relative rounded-full overflow-hidden">
                    <Image 
                      src={bounty.projectLogo} 
                      alt={bounty.projectName} 
                      width={32} 
                      height={32} 
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{bounty.projectName}</span>
                </div>
                <div className="flex gap-2">
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
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      bounty.category === "Video"
                        ? "bg-purple-100 text-purple-800"
                        : bounty.category === "Thread"
                          ? "bg-blue-100 text-blue-800"
                          : bounty.category === "Development"
                            ? "bg-indigo-100 text-indigo-800"
                            : bounty.category === "Writeathon"
                              ? "bg-green-100 text-green-800"
                              : "bg-pink-100 text-pink-800"
                    }`}
                  >
                    {bounty.category}
                  </span>
                </div>
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

              <Link href={`/bounties/${bounty.id}`}>
                <button className="w-full bg-[#0D53DD] text-white py-2.5 rounded-full hover:bg-[#0D53DD]/90 transition-colors text-sm font-medium">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredBounties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No bounties found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 bg-[#0D53DD] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0D53DD]/90 transition-colors"
            >
              View All Bounties
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
