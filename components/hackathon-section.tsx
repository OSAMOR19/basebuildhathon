"use client"
import Link from "next/link"
import HackathonCard, { type HackathonCardProps } from "./hackathon-card"

interface HackathonSectionProps {
  title: string
  hackathons: HackathonCardProps[]
  viewAllLink: string
}

export default function HackathonSection({ title, hackathons, viewAllLink }: HackathonSectionProps) {
  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <button className="bg-[#175CF7] text-white rounded-lg px-6 py-3 text-sm font-semibold">{title}</button>
        <Link href={viewAllLink} className="text-sm text-gray-600 hover:text-primary">
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="animate-on-scroll opacity-0">
            <HackathonCard {...hackathon} />
          </div>
        ))}
      </div>
    </section>
  )
}
