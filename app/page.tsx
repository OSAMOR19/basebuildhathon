"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import FilterTabs from "@/components/filter-tabs"
import HackathonSection from "@/components/hackathon-section"
import type { HackathonCardProps } from "@/components/hackathon-card"
import Image from "next/image"
import Titan from "@/components/images/titan.svg"
import Basetittan from "@/components/images/basetitan.svg"
import Rugpull from "@/components/images/rugpull.svg"
import Modular from "@/components/images/modular.svg"
import Paris from "@/components/images/parishack.svg"
import Penn from "@/components/images/penn.svg"
import Consensus from "@/components/images/consensus.svg"
import ETHGlobal from "@/components/images/ethglobal.svg"
import Blockhain from "@/components/images/blockchainhack.svg"

// Sample data
const categories = ["All", "Design", "Development", "Content"]

const ongoingHackathons: HackathonCardProps[] = [
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
    imageUrl: Basetittan,
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
    imageUrl: Rugpull,
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
    imageUrl: Modular,
  },
]

const upcomingHackathons: HackathonCardProps[] = [
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
    imageUrl: Paris,
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
    location: "Philadelphia, Pennsylvania, USA",
    imageUrl: Penn,
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
    imageUrl: Titan,
  },
]

const pastHackathons: HackathonCardProps[] = [
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
    imageUrl: Consensus,
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
    imageUrl: ETHGlobal,
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
    imageUrl: Blockhain,
  },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredOngoing, setFilteredOngoing] = useState(ongoingHackathons)
  const [filteredUpcoming, setFilteredUpcoming] = useState(upcomingHackathons)
  const [filteredPast, setFilteredPast] = useState(pastHackathons)

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredOngoing(ongoingHackathons)
      setFilteredUpcoming(upcomingHackathons)
      setFilteredPast(pastHackathons)
    } else {
      // In a real app, you would filter based on categories
      // This is just a simple simulation
      setFilteredOngoing(ongoingHackathons.filter((_, index) => index % 2 === 0))
      setFilteredUpcoming(upcomingHackathons.filter((_, index) => index % 2 === 0))
      setFilteredPast(pastHackathons.filter((_, index) => index % 2 === 0))
    }
  }, [activeFilter])

  return (
    <div className="pt-5">
      <HeroSection />

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 filter-pill text-sm font-medium transition-all duration-150 ease-in-out ${
                  activeFilter === category 
                    ? "bg-[#EDF2FF] text-[#0D53DD] border border-[#93B7FF]" 
                    : "bg-[#F2F4F7] text-[#344054] border border-transparent hover:bg-[#E4E7EC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <HackathonSection title="Ongoing hackathons" hackathons={filteredOngoing} viewAllLink="/hackathons/ongoing" />

        <HackathonSection
          title="Upcoming hackathons"
          hackathons={filteredUpcoming}
          viewAllLink="/hackathons/upcoming"
        />

        <HackathonSection title="Past hackathons" hackathons={filteredPast} viewAllLink="/hackathons/past" />
      </div>
    </div>
  )
}
