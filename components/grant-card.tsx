import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface GrantCardProps {
  id: string
  name: string
  description: string
  logoUrl: string // Keeping for backward compatibility
}

export default function GrantCard({ id, name, description, logoUrl }: GrantCardProps) {
  const [imgError, setImgError] = useState(false);
  
  // Use the SVG if available, or fallback to the provided logoUrl, or use a placeholder
  const imageSrc = !imgError 
    ? `/images/grants/${id}.svg` 
    : (logoUrl || "/placeholder.svg?height=96&width=96");

  return (
    <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] hover:shadow-[inset_0_0_12px_rgba(13,83,221,0.25)] rounded-xl flex flex-col items-center p-6 transition-all duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={name}
          width={96}
          height={96}
          className="object-cover"
          onError={() => setImgError(true)}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      <p className="text-sm text-gray-600 mb-6 text-center">{description}</p>
      <Link
        href={`/grants/${id}/apply`}
        className="bg-[#0D53DD] text-white rounded-full px-8 py-2.5 text-sm font-medium hover:bg-[#0D53DD]/90 transition-colors w-full text-center"
      >
        Apply now
      </Link>
    </div>
  )
}
