"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, LogOut } from "lucide-react"
import { PrivyConnectButton } from "./privy-connect-button"
import Profileicon from "@/components/images/baseavatar1.svg"
import { usePrivy } from "@privy-io/react-auth"
import logo from "@/components/images/creatcorelogo.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const { authenticated, ready } = usePrivy()

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

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-sm py-2" : "py-4"
      }`}
      style={{ backgroundColor: 'rgba(240, 246, 252, 0.8)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-14 mr-1">
            <Image src={logo} alt="Base Logo" fill className="object-contain" />
          </div>
          <span className="text-primary font-semibold">Cr8CoreLabs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/hackathons" className="nav-link hover:text-[#DCBD7A] transition-colors">
            Hackathons
          </Link>
          <Link href="/bounties" className="nav-link hover:text-[#DCBD7A] transition-colors">
            Bounties
          </Link>
          <Link href="/grants" className="nav-link hover:text-[#DCBD7A] transition-colors">
            Grants
          </Link>
          <Link href="/projects" className="nav-link hover:text-[#DCBD7A] transition-colors">
           Jobs
          </Link>
          <Link href="/about" className="nav-link hover:text-[#DCBD7A] transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {authenticated ? (
            <div className="relative">
              <button 
                className="flex items-center space-x-2 bg-[#DCBD7A]/10 rounded-full py-1 px-2 hover:bg-[#DCBD7A]/20 transition-colors"
                onClick={toggleProfileDropdown}
              >
                <div className="h-8 w-8 rounded-full overflow-hidden relative">
                  <Image src={Profileicon} alt="User Avatar" width={32} height={32} />
                </div>
                <ChevronDown className="h-4 w-4 text-[#DCBD7A]" />
              </button>
              
              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link 
                    href="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full overflow-hidden relative">
                <Image src={Profileicon} alt="Profile" width={32} height={32} />
              </div>
              <PrivyConnectButton />
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 shadow-md p-4" style={{ backgroundColor: 'rgba(147, 183, 255, 0.9)' }}>
          <nav className="flex flex-col space-y-4">
            <Link href="/hackathons" className="nav-link hover:text-[#DCBD7A]" onClick={() => setIsMenuOpen(false)}>
              Hackathons
            </Link>
            <Link href="/bounties" className="nav-link hover:text-[#DCBD7A]" onClick={() => setIsMenuOpen(false)}>
              Bounties
            </Link>
            <Link href="/grants" className="nav-link hover:text-[#DCBD7A]" onClick={() => setIsMenuOpen(false)}>
              Grants
            </Link>
            <Link href="/projects" className="nav-link hover:text-[#DCBD7A]" onClick={() => setIsMenuOpen(false)}>
              Jobs
            </Link>
            <Link href="/about" className="nav-link hover:text-[#DCBD7A]" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            {authenticated ? (
              <div className="pt-2 border-t border-white/20">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-8 w-8 rounded-full overflow-hidden relative">
                    <Image src={Profileicon} alt="User Avatar" width={32} height={32} />
                  </div>
                  <span className="font-medium">Your Account</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3 pt-2">
                <div className="h-8 w-8 rounded-full overflow-hidden relative">
                  <Image src={Profileicon} alt="Profile" width={32} height={32} />
                </div>
                <PrivyConnectButton />
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
