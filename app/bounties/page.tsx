"use client"

import { useState } from "react"
import { Clock, DollarSign, Trophy, Users } from "lucide-react"
import Azzapic from "@/components/images/azza.jpg"
import Zorapic from "@/components/images/zora.jpg"
import metacade from "@/components/images/metacade.jpg"
import farcaster from "@/components/images/farcaster.jpg"
import coinbase from "@/components/images/coinbasewallet.jpg"
import Qrbase from "@/components/images/qrbase.jpg"
import baselogo from "@/components/images/baselogoblue.jpg"
import send from "@/components/images/send.jpg"
import cliza from "@/components/images/cliza.jpg"
import bankr from "@/components/images/bankrbot.jpg"
import ohara from "@/components/images/ohara.jpg" // Assuming this exists, add if needed
import metopia from "@/components/images/metopia.jpg" // Assuming this exists, add if needed
import predictbase from "@/components/images/predictbaselogo.jpg" // Assuming this exists, add if needed
import ownthedoge from "@/components/images/ownthedodge.jpg" // Assuming this exists, add if needed
import Image from "next/image"
import Link from "next/link"
import FilterTabs from "@/components/filter-tabs"

interface BountyData {
  id: string
  title: string
  description: string
  reward: {
    amount: number | string
    currency: string
    winners?: number
    distribution?: {
      place: string
      amount: number | string
    }[]
  }
  deadline: string
  tags: string[]
  difficulty?: "Easy" | "Medium" | "Hard"
  category: "Video" | "Thread" | "Development" | "Writeathon" | "Design" | "Meme"
  projectName: string
  projectLogo: any
  rules?: string[]
}

// Updated bounties data with categories and project logos
const bountiesData: BountyData[] = [
  {
    id: "1",
    title: "Video Contest: ClizaAI",
    description:
      "Create a powerful, short-form video that introduces ClizaAI, its features, and why it matters to developers building on Base",
    reward: {
      amount: 5000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st Place", amount: 2000 },
        { place: "2nd Place", amount: 1000 },
        { place: "3rd Place", amount: 800 },
        { place: "4th", amount: 700 },
        { place: "5th", amount: 500 }
      ]
    },
    deadline: "June 15, 2025",
    tags: ["Video", "AI", "Developer Tools"],
    category: "Video",
    projectName: "ClizaAI",
    projectLogo: cliza,
    rules: [
      "Original content only",
      "Post on X with #ClizaAIx #Base",
      "Tag @ClizaAI + @cre8corelabs and @Base",
      "Follow the accounts"
    ]
  },
  {
    id: "2",
    title: "Thread Competition: BankrBot",
    description:
      "Write a clear, engaging thread explaining what BankrBot is and how it's empowering builders on Base. Cover how BankrBot simplifies token launches, its role in launching content coins, and how it supports creators.",
    reward: {
      amount: 3000,
      currency: "USDC",
      winners: 3,
      distribution: [
        { place: "1st", amount: 1500 },
        { place: "2nd", amount: 1000 },
        { place: "3rd", amount: 500 }
      ]
    },
    deadline: "May 30, 2025",
    tags: ["Thread", "Token Launches", "Creator Economy"],
    category: "Thread",
    projectName: "BankrBot",
    projectLogo: bankr,
    rules: [
      "Minimum of 6 tweets",
      "Use #BankrBotBase",
      "Tag @BankrBot and @cre8corelabs",
      "Follow both accounts"
    ]
  },
  {
    id: "3",
    title: "Video Contest: MetaCade",
    description:
      "Dive into the MetaCade platform, explore their game hub, and create a video that showcases the features, games, and overall user experience. Highlight what makes MetaCade unique, fun, and an exciting part of the Base ecosystem.",
    reward: {
      amount: 4000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1500 },
        { place: "2nd", amount: 1000 },
        { place: "3rd", amount: 700 },
        { place: "4th", amount: 500 },
        { place: "5th", amount: 300 }
      ]
    },
    deadline: "June 20, 2025",
    tags: ["Video", "Gaming", "Platform Review"],
    category: "Video",
    projectName: "MetaCade",
    projectLogo: metacade,
    rules: [
      "Max 2 minutes",
      "Must include real footage from the MetaCade hub",
      "Post on X using #MetaCadeOnBase",
      "Tag @MetaCade and @cre8corelabs",
      "Follow both accounts"
    ]
  },
  {
    id: "4",
    title: "Video Contest: QRBase",
    description:
      "Create a demo or story showing how QRBase simplifies QR code payments on Base.",
    reward: {
      amount: 2000,
      currency: "USDC",
      winners: 3,
      distribution: [
        { place: "1st", amount: 1000 },
        { place: "2nd", amount: 600 },
        { place: "3rd", amount: 400 }
      ]
    },
    deadline: "June 5, 2025",
    tags: ["Video", "Payments", "QR Code"],
    category: "Video",
    projectName: "QRBase",
    projectLogo: Qrbase
  },
  {
    id: "5",
    title: "Video Contest: Base – Onboard to Earn",
    description:
      "Create a compelling video showing how you successfully onboarded at least 3 new people into the Base ecosystem. Include a brief explanation of what Base is and why it matters, along with screenshots or clips of you guiding others.",
    reward: {
      amount: 10000,
      currency: "USDC",
      winners: 10,
      distribution: [
        { place: "Each winner", amount: 1000 }
      ]
    },
    deadline: "July 15, 2025",
    tags: ["Video", "Onboarding", "Tutorial"],
    category: "Video",
    projectName: "Base",
    projectLogo: baselogo,
    rules: [
      "Video length: 1–2 minutes",
      "Must onboard at least 3 people",
      "Post on X with hashtag #BaseOnboardChallenge",
      "Tag @base and @cre8corelabs",
      "Follow both accounts"
    ]
  },
  {
    id: "6",
    title: "Video Contest: Zora – Power to the Creators",
    description:
      "Create a video that clearly explains 'what Zora is' and how it's 'redefining the creator economy' by turning your content into tradeable coins — letting you earn directly from your audience.",
    reward: {
      amount: 5000,
      currency: "USDC",
      winners: 10,
      distribution: [
        { place: "Each winner", amount: 500 }
      ]
    },
    deadline: "June 25, 2025",
    tags: ["Video", "Creator Economy", "Content Coins"],
    category: "Video",
    projectName: "Zora",
    projectLogo: Zorapic,
    rules: [
      "Video must be original and creative",
      "Duration: Between 60–120 seconds",
      "Must be uploaded to Zora + shared on either X or YouTube",
      "Use #ZoraCreatorChallenge",
      "Tag @ourZORA and @cre8corelabs"
    ]
  },
  {
    id: "7",
    title: "Design Contest: Zora – Art Onchain",
    description:
      "Create original artwork or design that celebrates Zora's mission of empowering creators and building the onchain creator economy. Make something that spreads Zora's message in a bold, creative way.",
    reward: {
      amount: 3000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1200 },
        { place: "2nd", amount: 800 },
        { place: "3rd", amount: 500 },
        { place: "4th", amount: 300 },
        { place: "5th", amount: 200 }
      ]
    },
    deadline: "July 5, 2025",
    tags: ["Design", "Artwork", "Creator Economy"],
    category: "Design",
    projectName: "Zora",
    projectLogo: Zorapic,
    rules: [
      "Must be your original work",
      "Must be uploaded to Zora",
      "Share on X with #ZoraArtContest",
      "Tag @ourZORA, @Base and @cre8corelabs"
    ]
  },
  {
    id: "8",
    title: "Video Contest: Farcaster – The Future of Onchain Social",
    description:
      "Create a high-quality video that introduces Farcaster to the world as the best onchain social network. Break down what Farcaster is, Channels, Frames, and WarpWallet in a creative way.",
    reward: {
      amount: 4000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1500 },
        { place: "2nd", amount: 1000 },
        { place: "3rd", amount: 700 },
        { place: "4th", amount: 500 },
        { place: "5th", amount: 300 }
      ]
    },
    deadline: "July 10, 2025",
    tags: ["Video", "Social Network", "Onchain"],
    category: "Video",
    projectName: "Farcaster",
    projectLogo: farcaster,
    rules: [
      "Length: 1 to 2 minutes",
      "Post on X using #FarcasterOnBase",
      "Tag @farcaster_xyz and @cre8corelabs",
      "Follow both accounts"
    ]
  },
  {
    id: "9",
    title: "Thread Competition: Azza – AI-Powered P2P on WhatsApp",
    description:
      "Write a detailed and engaging thread introducing Azza, the AI agent built into WhatsApp that powers peer-to-peer (P2P) crypto trading across Africa — especially in Nigeria, South Africa, and Kenya.",
    reward: {
      amount: 2000,
      currency: "USDC",
      winners: 3,
      distribution: [
        { place: "1st", amount: 1000 },
        { place: "2nd", amount: 600 },
        { place: "3rd", amount: 400 }
      ]
    },
    deadline: "June 15, 2025",
    tags: ["Thread", "AI", "P2P Trading", "Africa"],
    category: "Thread",
    projectName: "Azza",
    projectLogo: Azzapic,
    rules: [
      "Minimum 6 tweets",
      "Use #AzzaP2P",
      "Tag @cre8corelabs and the official Azza handle",
      "Follow both accounts"
    ]
  },
  {
    id: "10",
    title: "Thread Competition: Coinbase Wallet – The Power Wallet for Web3",
    description:
      "Write an informative and captivating thread explaining why Coinbase Wallet is one of the most powerful and user-friendly wallets in Web3. Highlight key features like Instant Swap, Gasless Swaps, USDC Rewards, and more.",
    reward: {
      amount: 3000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1200 },
        { place: "2nd", amount: 800 },
        { place: "3rd", amount: 500 },
        { place: "4th", amount: 300 },
        { place: "5th", amount: 200 }
      ]
    },
    deadline: "June 30, 2025",
    tags: ["Thread", "Wallet", "Web3"],
    category: "Thread",
    projectName: "Coinbase Wallet",
    projectLogo: coinbase,
    rules: [
      "Minimum of 10 tweets",
      "Use #CoinbaseWalletThread",
      "Tag @coinbasewallet and @cre8corelabs",
      "Follow both accounts"
    ]
  },
  {
    id: "11",
    title: "Meme Contest: SEND – Tag It, Send It",
    description:
      "Create funny, creative memes or meme-style art that show people using SEND Tags to instantly send crypto on Base. Highlight the ease, simplicity, and social power of just tagging someone to transfer tokens.",
    reward: {
      amount: 2000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 800 },
        { place: "2nd", amount: 500 },
        { place: "3rd", amount: 300 },
        { place: "4th", amount: 250 },
        { place: "5th", amount: 150 }
      ]
    },
    deadline: "June 20, 2025",
    tags: ["Meme", "Payments", "Social"],
    category: "Meme",
    projectName: "SEND",
    projectLogo: send,
    rules: [
      "Post on X using #SendTagMeme",
      "Tag @send and @cre8corelabs",
      "Follow both accounts",
      "Meme must be original"
    ]
  },
  {
    id: "12",
    title: "Thread Competition: Ohara AI – Code, Build & Vibe Onchain",
    description:
      "Write an insightful thread introducing Ohara AI, the intelligent onchain coding assistant for the Base ecosystem. Show how it can be used to vibe with code, ship faster, and even build mini apps on Farcaster with ease.",
    reward: {
      amount: 3000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1200 },
        { place: "2nd", amount: 800 },
        { place: "3rd", amount: 500 },
        { place: "4th", amount: 300 },
        { place: "5th", amount: 200 }
      ]
    },
    deadline: "July 5, 2025",
    tags: ["Thread", "AI", "Coding", "Development"],
    category: "Thread",
    projectName: "Ohara AI",
    projectLogo: ohara,
    rules: [
      "Minimum 6 tweets",
      "Use #OharaAIOnBase",
      "Tag @cre8corelabs and the official Ohara AI handle",
      "Follow both accounts"
    ]
  },
  {
    id: "13",
    title: "Meme Contest: Predict Base – Predict the Future, Win the Internet",
    description:
      "Create hilarious and creative memes that showcase how Predict Base is revolutionizing the onchain prediction market on Base. Focus on the thrill of predicting real events onchain and the meme-ification of onchain predictions.",
    reward: {
      amount: 2000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 800 },
        { place: "2nd", amount: 500 },
        { place: "3rd", amount: 300 },
        { place: "4th", amount: 250 },
        { place: "5th", amount: 150 }
      ]
    },
    deadline: "June 25, 2025",
    tags: ["Meme", "Prediction Markets", "Onchain"],
    category: "Meme",
    projectName: "Predict Base",
    projectLogo: predictbase,
    rules: [
      "Post on X with #PredictBaseMemes",
      "Tag @cre8corelabs and the Predict Base handle",
      "Follow both accounts",
      "Keep it original, fun, and Base-native"
    ]
  },
  {
    id: "14",
    title: "Video Contest: Metopia – Learn, Verify, Earn",
    description:
      "Create an engaging and informative video explaining how Metopia is reshaping education by offering AI-driven learning and verifiable credentials on Base. Highlight how users can verify their learning achievements and earn rewards.",
    reward: {
      amount: 4000,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1500 },
        { place: "2nd", amount: 1000 },
        { place: "3rd", amount: 700 },
        { place: "4th", amount: 500 },
        { place: "5th", amount: 300 }
      ]
    },
    deadline: "July 15, 2025",
    tags: ["Video", "Education", "AI Learning"],
    category: "Video",
    projectName: "Metopia",
    projectLogo: metopia,
    rules: [
      "Length: 1–2 minutes",
      "Post on X using #MetopiaOnBase",
      "Tag @Metopia and @cre8corelabs",
      "Follow both accounts"
    ]
  },
  {
    id: "15",
    title: "Meme Contest: Own the Doge – The Doge Reigns Supreme",
    description:
      "Create hilarious, creative Doge-themed memes that capture the spirit of the Own the Doge project. Your memes should celebrate all things Doge and crypto in fun, witty ways.",
    reward: {
      amount: 3500,
      currency: "USDC",
      winners: 5,
      distribution: [
        { place: "1st", amount: 1500 },
        { place: "2nd", amount: 800 },
        { place: "3rd", amount: 500 },
        { place: "4th", amount: 400 },
        { place: "5th", amount: 300 }
      ]
    },
    deadline: "July 10, 2025",
    tags: ["Meme", "Doge", "NFT"],
    category: "Meme",
    projectName: "Own the Doge",
    projectLogo: ownthedoge,
    rules: [
      "Post your meme on X with #OwnTheDogeMemeContest",
      "Tag @OwnTheDoge and @cre8corelabs",
      "Follow both accounts",
      "Memes must be original, funny, and relevant to the Doge culture"
    ]
  }
];

export default function BountiesPage() {
  const categories = ["All", "Video", "Thread", "Development", "Writeathon", "Design", "Meme"]
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
          {activeCategory === "Meme" && (
            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)]">
              <h2 className="text-xl font-semibold mb-2">Meme Bounties</h2>
              <p className="text-gray-600">Create original, funny, and engaging memes that promote projects and concepts in the Base ecosystem.</p>
            </div>
          )}
        </div>

        {/* Bounty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <div key={bounty.id} className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] hover:shadow-[inset_0_0_12px_rgba(13,83,221,0.25)] rounded-xl overflow-hidden transition-all duration-300">
              {/* Project Logo Header */}
              <div className="relative h-48 w-full bg-gradient-to-r from-[#0D53DD]/10 to-[#0D53DD]/5 flex items-center justify-center p-4 border-b border-[#0D53DD]/10">
                <div className="h-36 w-36 relative">
                  <Image 
                    src={bounty.projectLogo} 
                    alt={bounty.projectName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-[#0D53DD]">{bounty.projectName}</span>
                  </div>
                  <div className="flex gap-2">
                    {bounty.difficulty && (
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
                    )}
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
                                : bounty.category === "Meme"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-pink-100 text-pink-800"
                      }`}
                    >
                      {bounty.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{bounty.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{bounty.description}</p>

                {/* Prize Pool */}
                <div className="bg-[#0D53DD]/5 rounded-lg p-3 mb-4">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-[#0D53DD] mr-2" />
                    <span className="text-lg font-semibold text-[#0D53DD]">
                      Prize Pool: {bounty.reward.amount} {bounty.reward.currency}
                    </span>
                  </div>
                  
                  {bounty.reward.winners && (
                    <div className="flex items-center mb-2">
                      <Trophy className="h-4 w-4 text-[#DCBD7A] mr-2" />
                      <span className="text-sm font-medium">
                        Winners: {bounty.reward.winners}
                      </span>
                    </div>
                  )}
                  
                  {bounty.reward.distribution && (
                    <div className="mt-2 space-y-1">
                      {bounty.reward.distribution.map((prize, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{prize.place}</span>
                          <span className="font-medium">{prize.amount} {bounty.reward.currency}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
