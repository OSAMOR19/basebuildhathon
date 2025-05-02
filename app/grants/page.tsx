"use client"
import GrantCard from "@/components/grant-card"

interface GrantData {
  id: string
  name: string
  description: string
  logoUrl: string
}

const grantsData: GrantData[] = [
  {
    id: "aave",
    name: "Aave",
    description:
      "Aave Grants DAO is funding bold builders and experimental thinkers pushing the boundaries of DeFi on Base.",
    logoUrl: "/images/grants/aave-placeholder.svg",
  },
  {
    id: "mantra",
    name: "Mantra",
    description:
      "It is designed to accelerate builders who are shaping the future of Real World Assets (RWAs), compliance-ready DeFi, and regulated blockchain infrastructure in Asia and beyond.",
    logoUrl: "/images/grants/mantra-placeholder.svg",
  },
  {
    id: "fasttoken",
    name: "Fasttoken",
    description:
      "It is to fund visionary builders shaping the future of on-chain gaming, entertainment dApps, and real-time blockchain experiences on the Fasttoken ecosystem.",
    logoUrl: "/images/grants/fasttoken-placeholder.svg",
  },
  {
    id: "virtual-protocol",
    name: "Virtual protocol",
    description:
      "It is a protocol that is designed to fund builders who are creating innovative solutions for decentralized virtual experiences, digital identity, and metaverse infrastructure.",
    logoUrl: "/images/grants/virtual-protocol-placeholder.svg",
  },
  {
    id: "wormhole",
    name: "Wormhole",
    description:
      "It is an ecosystem fund that supports builders at the forefront of cross-chain innovation, focusing on interoperability solutions, multi-chain dApps, and bridging technologies.",
    logoUrl: "/images/grants/wormhole-placeholder.svg",
  },
  {
    id: "kaito",
    name: "Kaito",
    description:
      "Kaito Grants is funding builders creating natural forms of decentralized AI, focusing on on-chain reasoning, data ownership, and autonomous agents.",
    logoUrl: "/images/grants/kaito-placeholder.svg",
  },
]

export default function GrantsPage() {
  return (
    <div className="pt-[100px] max-w-[1280px] mx-auto px-6">
      <div className="mb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Explore Grants for builders on BASE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Secure financial backing to bring your innovative to life. Apply now and receive funding to develop new
            ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grantsData.map((grant) => (
            <GrantCard
              key={grant.id}
              id={grant.id}
              name={grant.name}
              description={grant.description}
              logoUrl={grant.logoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
