import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, DollarSign, ArrowLeft } from "lucide-react"

// This would come from an API in a real application
const getBountyData = (id: string) => {
  const bounties = {
    "1": {
      id: "1",
      title: "Build a Base Chain Block Explorer",
      description:
        "Create a user-friendly block explorer for Base Chain that allows users to search transactions, view block details, and track wallet activities with a clean, intuitive interface.",
      longDescription: `
        <p>We're looking for a talented developer to build a comprehensive block explorer for Base Chain. This tool will be essential for users to navigate and understand the blockchain, providing transparency and accessibility.</p>
        
        <h3>Requirements:</h3>
        <ul>
          <li>Clean, intuitive user interface that works well on both desktop and mobile</li>
          <li>Fast search functionality for transactions, blocks, and addresses</li>
          <li>Detailed transaction views with clear visualization of data</li>
          <li>Wallet activity tracking with historical data</li>
          <li>API endpoints for developers to integrate with</li>
          <li>Open-source codebase with clear documentation</li>
        </ul>
        
        <h3>Technical Specifications:</h3>
        <ul>
          <li>Must be built using React or Next.js</li>
          <li>Should connect directly to Base Chain nodes</li>
          <li>Implement efficient caching for improved performance</li>
          <li>Support for wallet connections (MetaMask, WalletConnect, etc.)</li>
          <li>Responsive design for all device sizes</li>
        </ul>
        
        <h3>Deliverables:</h3>
        <ul>
          <li>Complete source code in a GitHub repository</li>
          <li>Deployment instructions and documentation</li>
          <li>User guide explaining all features</li>
          <li>Demo video showcasing the functionality</li>
        </ul>
      `,
      reward: {
        amount: 5000,
        currency: "USDC",
      },
      deadline: "June 15, 2025",
      tags: ["Development", "UI/UX", "Blockchain"],
      difficulty: "Medium",
      submissionUrl: "https://example.com/submit",
      postedBy: "Base Foundation",
      postedDate: "May 1, 2025",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    "2": {
      id: "2",
      title: "Design Base Wallet Mobile UI Kit",
      description:
        "Create a comprehensive UI kit for Base wallet mobile applications, including components for transaction history, asset management, and wallet connection flows.",
      longDescription: `
        <p>We're seeking a talented designer to create a comprehensive UI kit for Base wallet mobile applications. This kit will serve as the foundation for developers building wallet interfaces on the Base ecosystem.</p>
        
        <h3>Requirements:</h3>
        <ul>
          <li>Complete set of UI components for mobile wallet applications</li>
          <li>Designs for transaction history views</li>
          <li>Asset management screens and components</li>
          <li>Wallet connection flows and modals</li>
          <li>Dark and light mode variants</li>
          <li>Accessibility considerations built-in</li>
        </ul>
        
        <h3>Deliverables:</h3>
        <ul>
          <li>Figma design file with organized components</li>
          <li>Component documentation explaining usage guidelines</li>
          <li>Design system tokens (colors, typography, spacing)</li>
          <li>Interactive prototype demonstrating key user flows</li>
          <li>Design handoff specifications for developers</li>
        </ul>
        
        <h3>Style Guidelines:</h3>
        <ul>
          <li>Follow Base brand colors and typography</li>
          <li>Modern, clean aesthetic with focus on usability</li>
          <li>Ensure all components are adaptable for different screen sizes</li>
          <li>Consider internationalization in your designs</li>
        </ul>
      `,
      reward: {
        amount: 2500,
        currency: "USDC",
      },
      deadline: "May 30, 2025",
      tags: ["Design", "Mobile", "UI Kit"],
      difficulty: "Medium",
      submissionUrl: "https://example.com/submit",
      postedBy: "Base Design Team",
      postedDate: "April 15, 2025",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    // Add more bounties as needed
  }

  return bounties[id as keyof typeof bounties]
}

export default function BountyDetailPage({ params }: { params: { id: string } }) {
  const bounty = getBountyData(params.id)

  if (!bounty) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold">Bounty not found</h1>
        <Link href="/bounties" className="text-primary hover:underline mt-4 inline-block">
          Back to bounties
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <Link href="/bounties" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to bounties
        </Link>

        <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="mb-2">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    bounty.difficulty === "Easy"
                      ? "bg-green-100 text-green-800"
                      : bounty.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {bounty.difficulty}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-4 text-[#101828]">{bounty.title}</h1>

              <p className="text-[#344054] mb-6">{bounty.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold text-primary">
                    {bounty.reward.amount} {bounty.reward.currency}
                  </span>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span>Deadline: {bounty.deadline}</span>
                </div>

                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span>Posted: {bounty.postedDate}</span>
                </div>

                <div>
                  <span className="font-semibold">Posted by:</span> {bounty.postedBy}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {bounty.tags.map((tag) => (
                  <span key={tag} className="bg-[#93B7FF3D] text-[#344054] px-3 py-1 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={bounty.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block"
              >
                Submit Solution
              </a>
            </div>

            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <Image
                  src={bounty.imageUrl || "/placeholder.svg"}
                  alt={bounty.title}
                  width={200}
                  height={200}
                  className="object-contain mx-auto mb-4"
                />

                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Ready to take on this challenge?</h3>
                  <a
                    href={bounty.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block w-full"
                  >
                    Submit Solution
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#101828]">Bounty Details</h2>

          <div
            className="prose max-w-none text-[#344054]"
            dangerouslySetInnerHTML={{ __html: bounty.longDescription }}
          />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#101828]">How to Submit</h3>
            <p className="mb-4">To submit your solution, please follow these steps:</p>
            <ol className="list-decimal pl-5 mb-6 space-y-2">
              <li>Complete your project according to the requirements</li>
              <li>Upload your code to a GitHub repository</li>
              <li>Create a demo video or live demo if applicable</li>
              <li>Fill out the submission form with all required information</li>
              <li>Submit before the deadline</li>
            </ol>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={bounty.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block text-center"
              >
                Submit Solution
              </a>

              <Link
                href="/bounties"
                className="border border-[#D0D5DD] text-[#344054] rounded-lg px-6 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors inline-block text-center"
              >
                Explore More Bounties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
