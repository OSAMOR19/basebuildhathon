"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      className="relative w-full max-w-[1280px] mx-auto h-[600px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-3xl mt-20 px-6"
      ref={containerRef}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/baseheropicbg.png" alt="Hero Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 staggered-fade-in"
        >
          Earn on <span className="text-[#175CF7]">base</span> by doing what you do best
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl max-w-2xl mb-8 staggered-fade-in"
        >
          A market place where creators, builders, & degen thinkers get paid to create, contribute & engage
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 staggered-fade-in"
        >
          <Link
            href="/creator"
            className="bg-[#175CF7] text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-[#1252E0] transition-colors"
          >
            Become a creator
          </Link>
          <Link
            href="/bounty"
            className="bg-transparent border border-white text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Post a bounty
          </Link>
        </motion.div>

        {/* Avatars and Join Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-8 right-8 flex items-center"
        >
          <div className="flex -space-x-2 mr-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                <Image src={`/placeholder.svg?height=32&width=32`} alt={`User ${i}`} width={32} height={32} />
              </div>
            ))}
          </div>
          <span className="text-sm font-semibold">Join 20,700+</span>
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="w-2 h-2 rounded-full bg-white"></button>
        <button className="w-2 h-2 rounded-full bg-white/50"></button>
      </div>
    </section>
  )
}
