"use client"

import { useState } from "react"
import FilterTabs from "@/components/filter-tabs"
import HackathonCard from "@/components/hackathon-card"
import type { HackathonCardProps } from "@/components/hackathon-card"
import Image from "next/image"
import cliza from "@/components/images/cliza.jpg"
import bankr from "@/components/images/bankrbot.jpg"
import ohara from "@/components/images/ohara.jpg" 
import Qrbase from "@/components/images/qrbase.jpg"
import baselogo from "@/components/images/baselogoblue.jpg"

// Sample data - in a real app, this would come from an API
const allHackathons: HackathonCardProps[] = [
  {
    id: "1",
    date: "June 15, 2025",
    title: "Cliza DeFi Innovation Hackathon",
    description:
      "Join Cliza for a 2-day hackathon focused on building innovative DeFi solutions on Base. Open to developers of all skill levels with mentorship opportunities and networking with the Cliza team.",
    reward: {
      amount: 2500,
      currency: "USDC",
    },
    location: "Virtual",
    imageUrl: cliza,
  },
  {
    id: "2",
    date: "July 10, 2025",
    title: "Ohara NFT Marketplace Buildathon",
    description: "Create next-generation NFT marketplace solutions with Ohara. This hackathon focuses on building user-friendly interfaces and innovative features for NFT trading on Base.",
    reward: {
      amount: 3000,
      currency: "USDC",
    },
    location: "New York City, USA",
    imageUrl: ohara,
  },
  {
    id: "3",
    date: "August 5, 2025",
    title: "Bankr Base DeFi Challenge",
    description:
      "Bankr invites developers to build financial applications on Base that solve real-world banking problems. Focus areas include lending protocols, payment solutions, and financial inclusion.",
    reward: {
      amount: 4000,
      currency: "USDC",
    },
    location: "London, UK",
    imageUrl: bankr,
  },
  {
    id: "4",
    date: "September 20, 2025",
    title: "QR Base Web3 Identity Hackathon",
    description:
      "Join QR Base to build innovative identity solutions using QR technology on the Base blockchain. Create applications that bridge physical and digital identity verification in a secure, decentralized manner.",
    reward: {
      amount: 2000,
      currency: "USDC",
    },
    location: "Virtual",
    imageUrl: Qrbase,
  },
]

export default function HackathonsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const categories = ["All", "Virtual", "In-Person"]

  // Filter hackathons based on selected category
  const filteredHackathons = allHackathons.filter((hackathon) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Virtual") return hackathon.location.toLowerCase().includes("virtual")
    if (activeFilter === "In-Person") return !hackathon.location.toLowerCase().includes("virtual")
    return true
  })

  return (
    <div className="pt-20">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Featured Partner Hackathons</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exclusive hackathons from our premier partners: Cliza, Ohara, Bankr Base, and QR Base. Build innovative projects and win rewards.
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
