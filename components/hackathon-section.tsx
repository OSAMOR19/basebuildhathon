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
    <section className="py-10">
      <div className="flex justify-between items-center mb-8">
        <button className="bg-[#0D53DD] text-white rounded-full px-8 py-2.5 text-sm font-medium hover:bg-[#0D53DD]/90">{title}</button>
        <Link href={viewAllLink} className="text-sm font-medium text-[#0D53DD] hover:text-[#0D53DD]/80">
          View all
        </Link>
      </div>

      <div className="space-y-6">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="animate-on-scroll opacity-0">
            <HackathonCard {...hackathon} />
          </div>
        ))}
      </div>
    </section>
  )
}
