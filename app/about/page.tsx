import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            About <span className="text-primary">Cr8CoreLabs</span>
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Cr8core Labs is a community-powered platform built on the Base blockchain, designed to solve distribution challenges in the Base ecosystem through engaging, creator-driven competitions, bounties, and job opportunities.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of creativity and community. That's why we're building a home for creators, builders, and projects to connect, collaborate, and grow together.
            </p>

            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Contests & Bounties</h3>
            <p className="text-lg text-gray-600 mb-4">
              We host fun and rewarding challenges across multiple categories including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
              <li className="text-lg">Design (UI/UX, branding, graphics)</li>
              <li className="text-lg">Video Creation (explainer videos, content marketing)</li>
              <li className="text-lg">Thread Writing (X/Twitter threads, blogs, educational content)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-8">
              Projects can list their bounties, and creators can compete to win rewards and recognition.
            </p>

            <h3 className="text-xl font-semibold mb-3">Job Board for Builders & Creators</h3>
            <p className="text-lg text-gray-600 mb-8">
              A dedicated space where projects on Base can list roles and opportunities — from technical gigs to community-focused roles. Whether you're a dev, designer, or marketer, there's a spot for you.
            </p>

            <h3 className="text-xl font-semibold mb-3">Grant Distribution</h3>
            <p className="text-lg text-gray-600 mb-8">
              We also facilitate small grants for promising contributors and initiatives that align with the Base ecosystem's growth. These grants are designed to spark innovation and give builders the support they need to get started.
            </p>

            <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] mt-8 mb-8">
              <p className="text-lg font-medium text-gray-800">
                Cr8core Labs isn't just a platform — it's a movement to supercharge distribution, creativity, and talent across Base. Whether you're a project looking to grow or a creator looking to earn and showcase your skills, Cr8core Labs is where it happens.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Why Build on Cr8core Labs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Low Cost</h3>
                <p className="text-gray-600">
                  Base offers significantly lower transaction fees compared to Ethereum mainnet, making it more
                  accessible for developers and users.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Ethereum Security</h3>
                <p className="text-gray-600">
                  As an Ethereum L2, Base inherits the security guarantees of Ethereum, ensuring your assets and
                  applications are protected.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
                <p className="text-gray-600">
                  Base provides a seamless developer experience with familiar tools and comprehensive documentation to
                  help you build quickly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Ecosystem Growth</h3>
                <p className="text-gray-600">
                  Join a rapidly growing ecosystem of developers, projects, and users building the future of
                  decentralized applications.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-4">
              Be part of the Cr8core Labs community and help shape the future of the Base ecosystem. Whether you're a
              developer, creator, or enthusiast, there's a place for you.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://twitter.com/cre8corelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D53DD] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0D53DD]/90 transition-colors"
              >
                Follow on X
              </a>
              <a
                href="https://discord.gg/cre8corelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#5865F2]/90 transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
