import Image from "next/image"
import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"

export interface HackathonCardProps {
  id: string
  date: string
  title: string
  description: string
  reward: {
    amount: number
    currency: string
  }
  location: string
  imageUrl: string
}

export default function HackathonCard({
  id,
  date,
  title,
  description,
  reward,
  location,
  imageUrl,
}: HackathonCardProps) {
  return (
    <Link href={`/hackathons/${id}`} className="block">
      <div className="rounded-xl p-4 sm:p-6 bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] hover:shadow-[inset_0_0_12px_rgba(13,83,221,0.25)] transition-all duration-300">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white mx-auto sm:mx-0">
            <Image
              src={imageUrl || "/placeholder.svg?height=80&width=80"}
              alt={title}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1 text-center sm:text-left">{date}</div>
            <h3 className="text-xl font-bold mb-2 text-[#101828] text-center sm:text-left">{title}</h3>
            <p className="text-sm text-[#344054] mb-3 line-clamp-3">{description}</p>
            <div className="flex items-center justify-center sm:justify-start text-[#0D53DD] font-bold mb-2 text-lg">
              {reward.amount} {reward.currency}
            </div>
            <div className="flex items-center justify-center sm:justify-start text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="self-center mt-2 sm:mt-0 flex justify-center sm:block">
            <div className="w-8 h-8 flex items-center justify-center bg-[#F2F4F7] rounded-full">
              <ChevronRight className="h-5 w-5 text-[#0D53DD]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
