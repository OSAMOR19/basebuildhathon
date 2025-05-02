import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#E9ECEF] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Community Column */}
          <div className="md:col-span-3">
            <h3 className="text-[#4D5761] font-semibold mb-6">Community</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/hackathons" className="text-[#6C757D] hover:text-primary transition-colors">
                  Explore hackathons
                </Link>
              </li>
              <li>
                <Link href="/bounties" className="text-[#6C757D] hover:text-primary transition-colors">
                  Organize a bounty
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-[#6C757D] hover:text-primary transition-colors">
                  Post a grant
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3">
            <h3 className="text-[#4D5761] font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/hackathons" className="text-[#6C757D] hover:text-primary transition-colors">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link href="/bounties" className="text-[#6C757D] hover:text-primary transition-colors">
                  Bounties
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-[#6C757D] hover:text-primary transition-colors">
                  Grants
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#6C757D] hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#6C757D] hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-3">
            <h3 className="text-[#4D5761] font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-[#6C757D] hover:text-primary transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-[#6C757D] hover:text-primary transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-[#6C757D] hover:text-primary transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Tagline and Social Icons */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-6 text-[#495057]">
              Become a <span className="text-[#FF00AA]">creative</span> by building your ideas to life on BASE
            </h2>

            <div className="flex space-x-4 mt-6">
              <Link
                href="https://twitter.com/base"
                className="w-12 h-12 rounded-full bg-[#DEE2E6] flex items-center justify-center hover:bg-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                    fill="#495057"
                  />
                </svg>
              </Link>
              <Link
                href="https://t.me/base"
                className="w-12 h-12 rounded-full bg-[#DEE2E6] flex items-center justify-center hover:bg-gray-300 transition-colors"
                aria-label="Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.2581 2.99785C21.9502 2.73548 21.5556 2.58898 21.1432 2.58898C20.8671 2.58898 20.5911 2.64673 20.3326 2.76223L2.45162 10.1889C1.71271 10.4911 1.24233 10.9903 1.08646 11.6322C0.930587 12.2741 1.10583 12.9353 1.57621 13.4923C1.59546 13.5116 1.61471 13.5308 1.63396 13.55L4.76007 16.676C4.95657 16.8725 5.21895 16.9879 5.50058 16.9879C5.58683 16.9879 5.67308 16.9783 5.75933 16.9591L9.86484 15.9222L12.5375 18.5949C12.9129 18.9703 13.4121 19.1861 13.9306 19.1861C14.4491 19.1861 14.9483 18.9703 15.3237 18.5949L16.5916 17.327C16.6878 17.2308 16.7456 17.1061 16.7456 16.9687C16.7456 16.8314 16.6878 16.7067 16.5916 16.6105L14.1499 14.1688L18.0348 12.2741L20.1432 14.3825C20.2394 14.4787 20.3641 14.5365 20.5014 14.5365C20.6387 14.5365 20.7634 14.4787 20.8596 14.3825L22.1275 13.1146C22.9241 12.318 23.1976 11.1847 22.8954 10.1312C22.6894 9.38228 22.1275 8.55646 21.1817 7.99947L22.7219 3.37823C22.7988 3.14511 22.5788 2.99785 22.2581 2.99785Z"
                    fill="#495057"
                  />
                </svg>
              </Link>
              <Link
                href="https://discord.gg/base"
                className="w-12 h-12 rounded-full bg-[#DEE2E6] flex items-center justify-center hover:bg-gray-300 transition-colors"
                aria-label="Discord"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                    fill="#495057"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#CED4DA] pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <Image src="/baselogo.png" alt="Base Logo" fill className="object-contain" />
              </div>
              <span className="text-[#495057] font-semibold">Logo</span>
            </Link>
          </div>
          <p className="text-sm text-[#6C757D]">&copy; 2025, Base all right reserved</p>
        </div>
      </div>
    </footer>
  )
}
