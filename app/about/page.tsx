import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            About <span className="text-primary">Base</span>
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain.
              It's built on the Optimism OP Stack, a standardized, open-source, and shared system for scaling Ethereum.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to create a marketplace where creators, builders, and doers get paid to ideate, contribute,
              and earn. We believe in empowering the next generation of blockchain developers and creators by providing
              them with the tools, resources, and opportunities they need to succeed.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why Build on Base?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">Low Cost</h3>
                <p className="text-gray-600">
                  Base offers significantly lower transaction fees compared to Ethereum mainnet, making it more
                  accessible for developers and users.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">High Security</h3>
                <p className="text-gray-600">
                  Built on the battle-tested Optimism OP Stack, Base inherits the security properties of Ethereum while
                  scaling transaction throughput.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
                <p className="text-gray-600">
                  Base is EVM-equivalent, meaning developers can use familiar tools and languages to build on Base with
                  minimal changes to their workflow.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">Growing Ecosystem</h3>
                <p className="text-gray-600">
                  Join a thriving community of developers, creators, and users building the future of decentralized
                  applications on Base.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 mb-4">
              We offer various programs to support builders and creators in the Base ecosystem:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li className="text-gray-600">
                <strong>Hackathons:</strong> Regular hackathons with prizes and mentorship to encourage innovation.
              </li>
              <li className="text-gray-600">
                <strong>Bounties:</strong> Specific tasks with rewards for contributors to help improve the ecosystem.
              </li>
              <li className="text-gray-600">
                <strong>Grants:</strong> Financial support for promising projects building on Base.
              </li>
              <li className="text-gray-600">
                <strong>Educational Resources:</strong> Tutorials, documentation, and workshops to help developers get
                started.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Join the Community</h2>
            <p className="text-lg text-gray-600 mb-6">
              Become part of the Base community and connect with other builders, creators, and enthusiasts.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="https://twitter.com/base" className="btn-primary">
                Twitter
              </Link>
              <Link href="https://discord.gg/base" className="btn-primary">
                Discord
              </Link>
              <Link href="https://github.com/base" className="btn-primary">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
