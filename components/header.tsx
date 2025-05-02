"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { ConnectWalletButton } from "./connect-wallet-button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleConnect = () => {
    setIsConnected(true)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-header shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <Image src="/baselogo.png" alt="Base Logo" fill className="object-contain" />
          </div>
          <span className="text-primary font-semibold">Base</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/hackathons" className="nav-link">
            Hackathons
          </Link>
          <Link href="/bounties" className="nav-link">
            Bounties
          </Link>
          <Link href="/grants" className="nav-link">
            Grants
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isConnected ? (
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="User Avatar" width={32} height={32} />
              </div>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-600" />
            </div>
          ) : (
            <ConnectWalletButton onConnect={handleConnect} />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/hackathons" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Hackathons
            </Link>
            <Link href="/bounties" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Bounties
            </Link>
            <Link href="/grants" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Grants
            </Link>
            <Link href="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            {!isConnected && (
              <ConnectWalletButton
                onConnect={() => {
                  handleConnect()
                  setIsMenuOpen(false)
                }}
              />
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
