"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Img1 from "@/components/images/baseheroimg.svg"
import Img2 from "@/components/images/baseheroimg.svg"
import Img3 from "@/components/images/baseheroimg.svg"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: Img1,
      title: <>Earn on <span className="text-[#0D53DD]">base</span> by doing<br className="hidden sm:block" /> what you do best</>,
      description: "A market place where creators, builders, & degen thinkers get paid to create, contribute & engage"
    },
    {
      image: Img2,
      title: <>Build your <span className="text-[#0D53DD]">project</span><br className="hidden sm:block" /> on BASE</>,
      description: "Join the ecosystem of developers building the future of decentralized applications"
    },
    {
      image: Img3,
      title: <>Connect with<br className="hidden sm:block" /> the <span className="text-[#0D53DD]">community</span></>,
      description: "Collaborate, learn, and grow with other builders in the vibrant BASE ecosystem"
    }
  ]

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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section
      className="relative w-full max-w-[1280px] mx-auto h-[550px] sm:h-[550px] md:h-[550px] overflow-hidden rounded-[20px] mt-16 px-0"
      ref={containerRef}
    >
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src={slide.image} 
            alt={`Hero Background ${index + 1}`} 
            fill
            sizes="(max-width: 1290px) 100vw, 1280px"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute "></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`w-full transition-opacity duration-700 absolute ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl md:text-7xl text-white font-extrabold mb-6 leading-tight"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-white max-w-2xl mx-auto mb-8"
            >
              {slide.description}
            </motion.p>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-auto relative top-24 sm:top-32"
        >
          <Link
            href="/creator"
            className="bg-[#0D53DD] filter-pill text-white px-8 py-3 font-semibold text-sm hover:bg-[#0D53DD]/90 transition-colors"
          >
            Become a creator
          </Link>
          <Link
            href="/bounty"
            className="bg-transparent border border-white text-white filter-pill px-8 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Post a bounty
          </Link>
        </motion.div>

        {/* Avatars and Join Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-10 right-10 flex items-center"
        >
          <div className="flex -space-x-3 mr-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                <Image src={`/placeholder.svg?height=32&width=32`} alt={`User ${i}`} width={32} height={32} />
              </div>
            ))}
          </div>
          <span className="text-sm font-semibold">Join 20,700+</span>
        </motion.div>
      </div>

      {/* Carousel Navigation Dots - Clickable */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
