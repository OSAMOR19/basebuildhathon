import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Users, Trophy, ArrowLeft } from "lucide-react"

// This would come from an API in a real application
const getHackathonData = (id: string) => {
  const hackathons = {
    "1": {
      id: "1",
      date: "April 23, 2025",
      title: "Base x Titan Blockchain Hackathon",
      description:
        "A 3-hour, hands-on hackathon powered by OnchainKit and Base, designed for participants from various backgrounds—including designers, marketers, and students—to build onchain applications using AI tools. The event emphasizes creativity over coding expertise, encouraging projects with minimal code.",
      longDescription: `
        <p>Join us for an exciting 3-hour hackathon that brings together diverse talents to build innovative onchain applications using AI tools. This event is perfect for participants of all backgrounds, whether you're a designer, marketer, student, or developer.</p>
        
        <p>The Base x Titan Blockchain Hackathon focuses on creativity rather than coding expertise. We believe that great ideas can come from anywhere, and our goal is to provide a platform where participants can explore the possibilities of blockchain technology without being limited by technical barriers.</p>
        
        <h3>What to Expect:</h3>
        <ul>
          <li>Hands-on experience with OnchainKit and Base</li>
          <li>Guidance from experienced mentors</li>
          <li>Networking opportunities with like-minded individuals</li>
          <li>Chance to win prizes and recognition</li>
        </ul>
        
        <h3>Schedule:</h3>
        <p>10:00 AM - Welcome and Introduction<br>
        10:30 AM - Team Formation<br>
        11:00 AM - Hacking Begins<br>
        1:30 PM - Project Submissions<br>
        2:00 PM - Presentations and Judging<br>
        2:45 PM - Awards Ceremony</p>
        
        <h3>Judging Criteria:</h3>
        <p>Projects will be evaluated based on creativity, innovation, practicality, and presentation. The emphasis is on creative solutions rather than technical complexity.</p>
      `,
      reward: {
        amount: 1500,
        currency: "USDC",
      },
      location: "California state university, Fullerton, USA",
      imageUrl: "/placeholder.svg?height=200&width=200",
      organizer: "Base & Titan Blockchain",
      participants: "150+",
      registrationUrl: "https://example.com/register",
      tags: ["AI", "Blockchain", "Creativity", "Innovation"],
    },
    "2": {
      id: "2",
      date: "April 23, 2025",
      title: "RugPull survivor hack-DeFi defense buildaton",
      description: "Build tools that detect scams, simulate transactions, auto-flag suspicious projects",
      longDescription: `
        <p>The RugPull Survivor Hack-DeFi Defense Buildaton is dedicated to creating tools and solutions that protect users from scams and fraudulent projects in the DeFi space.</p>
        
        <p>In this hackathon, participants will work on developing innovative tools that can detect potential scams, simulate transactions to identify risks, and automatically flag suspicious projects before users invest their funds.</p>
        
        <h3>Focus Areas:</h3>
        <ul>
          <li>Scam detection algorithms</li>
          <li>Transaction simulation tools</li>
          <li>Risk assessment frameworks</li>
          <li>User-friendly security interfaces</li>
          <li>Community alert systems</li>
        </ul>
        
        <h3>Why This Matters:</h3>
        <p>As DeFi continues to grow, so does the risk of scams and fraudulent projects. By building better defense mechanisms, we can make the ecosystem safer for everyone and accelerate mainstream adoption.</p>
        
        <h3>Schedule:</h3>
        <p>Day 1: Problem definition and team formation<br>
        Day 2: Development and mentorship sessions<br>
        Day 3: Final presentations and judging</p>
      `,
      reward: {
        amount: 2500,
        currency: "USDC",
      },
      location: "Kenya, India, Thailand, Singapore, Philippines, and virtually in Buenos Aires",
      imageUrl: "/placeholder.svg?height=200&width=200",
      organizer: "DeFi Security Alliance",
      participants: "200+",
      registrationUrl: "https://example.com/register",
      tags: ["DeFi", "Security", "Anti-Scam", "Blockchain"],
    },
    "3": {
      id: "3",
      date: "April 23, 2025",
      title: "Modular World-Base x OP Stack Challenge",
      description:
        "A 3-hour, hands-on hackathon powered by OnchainKit and Base, designed for participants from various backgrounds.",
      longDescription: `
        <p>The Modular World-Base x OP Stack Challenge brings together developers, designers, and blockchain enthusiasts to explore the potential of modular blockchain architecture using Base and the OP Stack.</p>
        
        <p>This hackathon focuses on building applications that leverage the modularity and scalability of the OP Stack to create innovative solutions across various domains.</p>
        
        <h3>Challenge Areas:</h3>
        <ul>
          <li>Interoperability solutions</li>
          <li>Cross-chain applications</li>
          <li>Layer 2 optimizations</li>
          <li>User experience improvements</li>
        </ul>
        
        <h3>Prizes:</h3>
        <p>A total prize pool of 3000 USDC will be distributed among the top projects, with additional opportunities for continued development support from Base and OP Stack partners.</p>
        
        <h3>Requirements:</h3>
        <p>Participants should have basic knowledge of blockchain concepts. Technical coding experience is helpful but not required, as we welcome contributions in design, documentation, and user experience.</p>
      `,
      reward: {
        amount: 3000,
        currency: "USDC",
      },
      location: "Virtual",
      imageUrl: "/placeholder.svg?height=200&width=200",
      organizer: "Base & OP Stack Foundation",
      participants: "175+",
      registrationUrl: "https://example.com/register",
      tags: ["OP Stack", "Modular", "Layer 2", "Scaling"],
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
                  <span key={tag} className="bg-[#93B7FF3D] text-[#344054] px-3 py-1 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={hackathon.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#101828]">About this Hackathon</h2>

          <div
            className="prose max-w-none text-[#344054]"
            dangerouslySetInnerHTML={{ __html: hackathon.longDescription }}
          />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#101828]">Ready to participate?</h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={hackathon.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors inline-block text-center"
              >
                Register Now
              </a>

              <Link
                href="/hackathons"
                className="border border-[#D0D5DD] text-[#344054] rounded-lg px-6 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors inline-block text-center"
              >
                Explore More Hackathons
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
