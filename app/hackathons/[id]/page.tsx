import Image from "next/image"
import Link from "next/link"
import cliza from "@/components/images/cliza.jpg"
import bankr from "@/components/images/bankrbot.jpg"
import ohara from "@/components/images/ohara.jpg" 
import Qrbase from "@/components/images/qrbase.jpg"
import baselogo from "@/components/images/baselogoblue.jpg"
import { MapPin, Calendar, Users, Trophy, ArrowLeft } from "lucide-react"

// This would come from an API in a real application
const getHackathonData = (id: string) => {
  const hackathons = {
    "1": {
      id: "1",
      date: "June 15, 2025",
      title: "Cliza DeFi Innovation Hackathon",
      description:
        "Join Cliza for a 2-day hackathon focused on building innovative DeFi solutions on Base. Open to developers of all skill levels with mentorship opportunities and networking with the Cliza team.",
      longDescription: `
        <p>The Cliza DeFi Innovation Hackathon is a premier event for developers interested in building the future of decentralized finance on Base. This 2-day virtual event brings together builders of all skill levels to create innovative DeFi solutions.</p>
        
        <h3>Focus Areas:</h3>
        <ul>
          <li>Decentralized lending and borrowing protocols</li>
          <li>Yield optimization strategies</li>
          <li>Cross-chain DeFi solutions</li>
          <li>User-friendly DeFi interfaces</li>
          <li>DeFi analytics and risk assessment tools</li>
        </ul>
        
        <h3>Schedule:</h3>
        <p>Day 1: Kickoff, team formation, and development<br>
        Day 2: Final development, presentations, and judging</p>
        
        <h3>Prizes:</h3>
        <p>A total prize pool of 2,500 USDC will be distributed among the top projects, with additional opportunities for continued development support and potential integration with the Cliza ecosystem.</p>
        
        <h3>Who Should Participate:</h3>
        <p>Developers, designers, and DeFi enthusiasts of all skill levels are welcome. Whether you're a seasoned blockchain developer or just getting started, this hackathon provides a supportive environment to learn and build.</p>
      `,
      reward: {
        amount: 2500,
        currency: "USDC",
      },
      location: "Virtual",
      imageUrl: cliza,
      organizer: "Cliza",
      participants: "100+",
      registrationUrl: "https://example.com/register-cliza",
      tags: ["DeFi", "Lending", "Base", "Finance"],
    },
    "2": {
      id: "2",
      date: "July 10, 2025",
      title: "Ohara NFT Marketplace Buildathon",
      description: "Create next-generation NFT marketplace solutions with Ohara. This hackathon focuses on building user-friendly interfaces and innovative features for NFT trading on Base.",
      longDescription: `
        <p>The Ohara NFT Marketplace Buildathon invites developers and designers to reimagine the future of NFT marketplaces on Base. This in-person event in New York City will bring together creative minds to build innovative solutions for NFT creation, discovery, and trading.</p>
        
        <h3>Challenge Areas:</h3>
        <ul>
          <li>User-friendly NFT marketplace interfaces</li>
          <li>Enhanced discovery mechanisms for NFTs</li>
          <li>Creator tools and royalty systems</li>
          <li>Social features for NFT communities</li>
          <li>Cross-platform NFT interoperability</li>
        </ul>
        
        <h3>Event Details:</h3>
        <p>The buildathon will take place over two days at a premier tech hub in New York City. Participants will have access to mentors from Ohara and the broader NFT ecosystem, as well as networking opportunities with industry leaders.</p>
        
        <h3>Prizes and Opportunities:</h3>
        <p>Beyond the 3,000 USDC prize pool, winning teams will have the opportunity to integrate their solutions with the Ohara platform, gaining exposure to thousands of NFT enthusiasts and creators.</p>
        
        <h3>Requirements:</h3>
        <p>Basic knowledge of blockchain concepts and some experience with web development is helpful but not required. Teams should include at least one member with design skills to ensure solutions are both functional and user-friendly.</p>
      `,
      reward: {
        amount: 3000,
        currency: "USDC",
      },
      location: "New York City, USA",
      imageUrl: ohara,
      organizer: "Ohara",
      participants: "150+",
      registrationUrl: "https://example.com/register-ohara",
      tags: ["NFT", "Marketplace", "Design", "Creator Economy"],
    },
    "3": {
      id: "3",
      date: "August 5, 2025",
      title: "Bankr Base DeFi Challenge",
      description:
        "Bankr invites developers to build financial applications on Base that solve real-world banking problems. Focus areas include lending protocols, payment solutions, and financial inclusion.",
      longDescription: `
        <p>The Bankr Base DeFi Challenge is an intensive hackathon focused on bridging traditional finance and DeFi through innovative applications built on Base. Taking place in London, this event brings together developers, financial experts, and blockchain enthusiasts to create solutions that address real-world banking challenges.</p>
        
        <h3>Challenge Tracks:</h3>
        <ul>
          <li>Decentralized lending and credit scoring</li>
          <li>Cross-border payment solutions</li>
          <li>Financial inclusion tools for underbanked populations</li>
          <li>DeFi risk management and insurance</li>
          <li>Banking-as-a-Service (BaaS) on blockchain</li>
        </ul>
        
        <h3>Event Format:</h3>
        <p>This three-day hackathon includes workshops led by financial experts and Base developers, dedicated hacking time, and a final presentation day where teams showcase their solutions to a panel of judges from both the banking and blockchain industries.</p>
        
        <h3>Prize Structure:</h3>
        <p>The total prize pool of 4,000 USDC will be distributed across multiple categories, with additional investment opportunities available for the most promising projects. Bankr is committed to supporting continued development of exceptional solutions beyond the hackathon.</p>
        
        <h3>Participant Requirements:</h3>
        <p>This hackathon is ideal for developers with experience in financial applications or DeFi protocols, though teams with diverse backgrounds are encouraged to participate. Knowledge of smart contract development is beneficial but not required.</p>
      `,
      reward: {
        amount: 4000,
        currency: "USDC",
      },
      location: "London, UK",
      imageUrl: bankr,
      organizer: "Bankr Base",
      participants: "200+",
      registrationUrl: "https://example.com/register-bankr",
      tags: ["Banking", "Finance", "Payments", "Inclusion"],
    },
    "4": {
      id: "4",
      date: "September 20, 2025",
      title: "QR Base Web3 Identity Hackathon",
      description:
        "Join QR Base to build innovative identity solutions using QR technology on the Base blockchain. Create applications that bridge physical and digital identity verification in a secure, decentralized manner.",
      longDescription: `
        <p>The QR Base Web3 Identity Hackathon challenges developers to reimagine identity verification and management using QR technology on the Base blockchain. This virtual event focuses on creating secure, user-friendly solutions that bridge the gap between physical and digital identity.</p>
        
        <h3>Innovation Areas:</h3>
        <ul>
          <li>Decentralized identity verification systems</li>
          <li>QR-based authentication mechanisms</li>
          <li>Privacy-preserving identity solutions</li>
          <li>Physical-to-digital identity bridges</li>
          <li>Credential management and verification</li>
        </ul>
        
        <h3>Hackathon Structure:</h3>
        <p>This virtual hackathon spans one week, with the first weekend dedicated to kickoff sessions and team formation, followed by five days of development with daily office hours from QR Base mentors, and concluding with final presentations and judging.</p>
        
        <h3>Rewards:</h3>
        <p>Beyond the 2,000 USDC prize pool, winning teams will receive technical support to further develop their solutions and potential integration opportunities with QR Base's ecosystem of identity products.</p>
        
        <h3>Ideal Participants:</h3>
        <p>This hackathon welcomes developers interested in identity solutions, privacy technology, and QR applications. Teams with experience in zero-knowledge proofs, verifiable credentials, or mobile development will find this challenge particularly engaging.</p>
      `,
      reward: {
        amount: 2000,
        currency: "USDC",
      },
      location: "Virtual",
      imageUrl: Qrbase,
      organizer: "QR Base",
      participants: "120+",
      registrationUrl: "https://example.com/register-qrbase",
      tags: ["Identity", "QR", "Privacy", "Authentication"],
    },
    // Add more hackathons as needed
  }

  return hackathons[id as keyof typeof hackathons]
}

export default function HackathonDetailPage({ params }: { params: { id: string } }) {
  const hackathon = getHackathonData(params.id)

  if (!hackathon) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold">Hackathon not found</h1>
        <Link href="/hackathons" className="text-primary hover:underline mt-4 inline-block">
          Back to hackathons
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <Link href="/hackathons" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to hackathons
        </Link>

        <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                <Image
                  src={hackathon.imageUrl || "/placeholder.svg"}
                  alt={hackathon.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4">
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {hackathon.date}
              </div>

              <h1 className="text-3xl font-bold mb-4 text-[#101828]">{hackathon.title}</h1>

              <p className="text-[#344054] mb-6">{hackathon.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span>{hackathon.location}</span>
                </div>

                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span>Expected participants: {hackathon.participants}</span>
                </div>

                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold text-primary">
                    {hackathon.reward.amount} {hackathon.reward.currency}
                  </span>
                </div>

                <div>
                  <span className="font-semibold">Organized by:</span> {hackathon.organizer}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F2F4F7] text-[#344054] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={hackathon.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#101828]">About This Hackathon</h2>
          <div
            className="prose max-w-none text-[#344054]"
            dangerouslySetInnerHTML={{ __html: hackathon.longDescription }}
          />
        </div>
      </div>
    </div>
  )
}
