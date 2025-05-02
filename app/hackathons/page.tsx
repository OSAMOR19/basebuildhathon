"use client"

import { useState } from "react"
import FilterTabs from "@/components/filter-tabs"
import HackathonCard from "@/components/hackathon-card"
import type { HackathonCardProps } from "@/components/hackathon-card"

// Sample data - in a real app, this would come from an API
const allHackathons: HackathonCardProps[] = [
  {
    id: "1",
    date: "April 23, 2025",
    title: "Base x Titan Blockchain Hackathon",
    description:
      "A 3-hour, hands-on hackathon powered by OnchainKit and Base, designed for participants from various backgrounds—including designers, marketers, and students—to build onchain applications using AI tools. The event emphasizes creativity over coding expertise, encouraging projects with minimal code.",
    reward: {
      amount: 1500,
      currency: "USDC",
    },
    location: "California state university, Fullerton, USA",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    date: "April 23, 2025",
    title: "RugPull survivor hack-DeFi defense buildaton",
    description: "Build tools that detect scams, simulate transactions, auto-flag suspicious projects",
    reward: {
      amount: 2500,
      currency: "USDC",
    },
    location: "Kenya, India, Thailand, Singapore, Philippines, and virtually in Buenos Aires",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    date: "April 23, 2025",
    title: "Modular World-Base x OP Stack Challenge",
    description:
      "A 3-hour, hands-on hackathon powered by OnchainKit and Base, designed for participants from various backgrounds.",
    reward: {
      amount: 3000,
      currency: "USDC",
    },
    location: "Virtual",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "4",
    date: "May 5-6, 2025",
    title: "Paris Blockchain Week Hackathon 2025",
    description:
      "This hybrid hackathon invites developers worldwide to create decentralized applications (dApps) that address real-world problems. Participants will engage in online challenges leading up to an intensive in-person event in Paris, culminating in presentations to industry leaders and blockchain experts.",
    reward: {
      amount: 100,
      currency: "ETH in total",
    },
    location: "Paris, France",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "5",
    date: "May 23, 2025",
    title: "Penn Blockchain Conference",
    description:
      "An annual hackathon hosted by the Penn Blockchain Conference, inviting developers, designers, and entrepreneurs to build innovative blockchain solutions. The event includes mentorship, workshops, and opportunities to present projects to industry leaders.",
    reward: {
      amount: 1500,
      currency: "USDC",
    },
    location: "New York City, USA",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "6",
    date: "June 23, 2025",
    title: "Base x Titan Blockchain Hackathon",
    description:
      "A 3-hour, hands-on hackathon powered by OnchainKit and Base, designed for participants from various backgrounds—including designers, marketers, and students—to build onchain applications using AI tools. The event emphasizes creativity over coding expertise, encouraging projects with minimal code.",
    reward: {
      amount: 20000,
      currency: "USDC",
    },
    location: "Toronto, Canada",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "7",
    date: "January 14-16, 2025",
    title: "Consensus 2025 Hackathon",
    description:
      "As part of North America's largest blockchain conference, this three-day hackathon gathers top developers to build groundbreaking Web3 projects. Participants will have opportunities to pitch to leading investors, receive mentorship, and compete for substantial prizes.",
    reward: {
      amount: 2000,
      currency: "USDC",
    },
    location: "Toronto, Canada",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "8",
    date: "January 23, 2025",
    title: "ETHGlobal New York 2025",
    description:
      "A 3-hour, hands-on hackathon powered by OnchainKit and Base, designed for participants from various backgrounds—including designers, marketers, and students—to build onchain applications using AI tools. The event emphasizes creativity over coding expertise, encouraging projects with minimal code.",
    reward: {
      amount: 15000,
      currency: "USDC",
    },
    location: "Hybrid (Online and Panama City, Panama)",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "9",
    date: "March 4, 2025",
    title: "Blockchain Hackathon 2025 – Tashkent",
    description:
      "A 10 hour intensive hackathon where participants develop decentralized applications. The event offers mentorship from blockchain experts and a prize fund of 100,000,000 UZS, encouraging innovation in the blockchain space.",
    reward: {
      amount: 1500,
      currency: "USDC",
    },
    location: "Tashkent, Uzbekistan",
    imageUrl: "/placeholder.svg?height=80&width=80",
  },
]

export default function HackathonsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const categories = ["All", "Upcoming", "Ongoing", "Past", "Virtual", "In-Person"]

  // Filter hackathons based on selected category
  // This is a simplified example - in a real app, you would have more sophisticated filtering
  const filteredHackathons = allHackathons.filter((hackathon) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Virtual") return hackathon.location.toLowerCase().includes("virtual")
    if (activeFilter === "In-Person") return !hackathon.location.toLowerCase().includes("virtual")
    // For upcoming, ongoing, past - in a real app you would compare dates
    return true
  })

  return (
    <div className="pt-20">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hackathons on BASE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join exciting hackathons, build innovative projects, and win rewards while contributing to the Base
            ecosystem.
          </p>
        </div>

        <FilterTabs categories={categories} onFilterChange={setActiveFilter} />

        <div className="space-y-4 mt-8">
          {filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} className="animate-on-scroll opacity-0">
              <HackathonCard {...hackathon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
