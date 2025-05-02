import Image from "next/image"
import Link from "next/link"

interface GrantCardProps {
  id: string
  name: string
  description: string
  logoUrl: string
}

export default function GrantCard({ id, name, description, logoUrl }: GrantCardProps) {
  return (
    <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] hover:shadow-[inset_0_0_12px_rgba(13,83,221,0.25)] rounded-xl flex flex-col items-center p-6 transition-all duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <Image
          src={logoUrl || "/placeholder.svg?height=96&width=96"}
          alt={name}
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      <p className="text-sm text-gray-600 mb-6 text-center">{description}</p>
      <Link
        href={`/grants/${id}/apply`}
        className="bg-primary text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-button transition-colors"
      >
        Apply now
      </Link>
    </div>
  )
}
