import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, DollarSign, Globe, Users } from "lucide-react"

// This would come from an API in a real application
const getGrantData = (id: string) => {
  const grants = {
    aave: {
      id: "aave",
      name: "Aave",
      description:
        "Aave Grants DAO is funding bold builders and experimental thinkers pushing the boundaries of DeFi on Base.",
      longDescription: `
        <p>Aave Grants DAO is dedicated to supporting innovative projects that push the boundaries of decentralized finance (DeFi) on the Base blockchain. We're looking for bold builders and experimental thinkers who are passionate about creating the future of finance.</p>
        
        <h3>What We Fund:</h3>
        <ul>
          <li>DeFi protocols and applications built on Base</li>
          <li>Tools and infrastructure that enhance the Aave ecosystem</li>
          <li>Research projects focused on DeFi innovation</li>
          <li>Educational content about Aave and DeFi concepts</li>
          <li>Community initiatives that drive adoption</li>
        </ul>
        
        <h3>Grant Sizes:</h3>
        <p>Our grants typically range from $5,000 to $50,000 USD, depending on the scope and potential impact of the project. Larger grants may be considered for exceptional projects with significant potential.</p>
        
        <h3>Selection Criteria:</h3>
        <ul>
          <li>Innovation: How novel and creative is the approach?</li>
          <li>Impact: How will this benefit the Aave and Base ecosystems?</li>
          <li>Feasibility: Can the team execute on their vision?</li>
          <li>Sustainability: Does the project have a path to long-term viability?</li>
          <li>Open Source: We prioritize projects that contribute to the open-source community</li>
        </ul>
      `,
      logoUrl: "/placeholder.svg?height=200&width=200",
      website: "https://aavegrants.org",
      twitter: "@AaveGrants",
      totalFunding: "$2,000,000",
      fundedProjects: 45,
      applicationUrl: "https://example.com/apply",
      categories: ["DeFi", "Infrastructure", "Research", "Education"],
    },
    mantra: {
      id: "mantra",
      name: "Mantra",
      description:
        "It is designed to accelerate builders who are shaping the future of Real World Assets (RWAs), compliance-ready DeFi, and regulated blockchain infrastructure in Asia and beyond.",
      longDescription: `
        <p>Mantra Grants is designed to accelerate builders who are shaping the future of Real World Assets (RWAs), compliance-ready DeFi, and regulated blockchain infrastructure in Asia and beyond.</p>
        
        <h3>Focus Areas:</h3>
        <ul>
          <li>Real World Asset tokenization and infrastructure</li>
          <li>Compliance solutions for DeFi applications</li>
          <li>Regulated blockchain infrastructure</li>
          <li>Cross-border payment solutions</li>
          <li>Financial inclusion initiatives in emerging markets</li>
        </ul>
        
        <h3>Grant Program Details:</h3>
        <p>Our grants program offers financial support, mentorship, and networking opportunities to promising projects. We work closely with regulatory bodies and financial institutions to help bridge the gap between traditional finance and blockchain technology.</p>
        
        <h3>Eligibility:</h3>
        <ul>
          <li>Projects must focus on one or more of our key areas</li>
          <li>Teams should demonstrate technical expertise and domain knowledge</li>
          <li>Projects should have a clear roadmap and milestones</li>
          <li>Preference for teams based in or focused on Asian markets</li>
        </ul>
        
        <h3>Application Process:</h3>
        <p>Applications are reviewed on a rolling basis. After initial screening, shortlisted projects will be invited for an interview with our team. Successful applicants will receive funding in tranches based on milestone achievements.</p>
      `,
      logoUrl: "/placeholder.svg?height=200&width=200",
      website: "https://mantra.finance/grants",
      twitter: "@MantraFinance",
      totalFunding: "$5,000,000",
      fundedProjects: 28,
      applicationUrl: "https://example.com/apply",
      categories: ["RWAs", "Compliance", "Infrastructure", "Payments"],
    },
    // Add more grants as needed
  }

  return grants[id as keyof typeof grants]
}

export default function GrantDetailPage({ params }: { params: { id: string } }) {
  const grant = getGrantData(params.id)

  if (!grant) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold">Grant not found</h1>
        <Link href="/grants" className="text-primary hover:underline mt-4 inline-block">
          Back to grants
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <Link href="/grants" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to grants
        </Link>

        <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-white rounded-xl p-6 flex items-center justify-center">
                <Image
                  src={grant.logoUrl || "/placeholder.svg"}
                  alt={grant.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl font-bold mb-4 text-[#101828]">{grant.name} Grants</h1>

              <p className="text-[#344054] mb-6">{grant.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span>
                    Total Funding: <strong>{grant.totalFunding}</strong>
                  </span>
                </div>

                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span>
                    Projects Funded: <strong>{grant.fundedProjects}</strong>
                  </span>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-2" />
                  <a
                    href={grant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {grant.website.replace("https://", "")}
                  </a>
                </div>

                <div>
                  <span>Twitter: </span>
                  <a
                    href={`https://twitter.com/${grant.twitter.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {grant.twitter}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {grant.categories.map((category) => (
                  <span key={category} className="bg-[#93B7FF3D] text-[#344054] px-3 py-1 rounded-lg text-sm">
                    {category}
                  </span>
                ))}
              </div>

              <a
                href={grant.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#101828]">About this Grant Program</h2>

          <div
            className="prose max-w-none text-[#344054]"
            dangerouslySetInnerHTML={{ __html: grant.longDescription }}
          />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#101828]">Ready to apply?</h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={grant.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block text-center"
              >
                Apply Now
              </a>

              <Link
                href="/grants"
                className="border border-[#D0D5DD] text-[#344054] rounded-lg px-6 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors inline-block text-center"
              >
                Explore More Grants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
