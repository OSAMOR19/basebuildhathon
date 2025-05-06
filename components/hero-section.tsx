"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import background from "@/components/images/background.svg"
import floating from "@/components/images/herofloating.svg"
import avatar1 from "@/components/images/baseavatar1.svg"
import avatar2 from "@/components/images/baseavatar2.svg"
import avatar3 from "@/components/images/baseavatar3.svg"
import avatar4 from "@/components/images/baseavatar4.svg"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation for floating elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const rotateAnimation = {
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

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
      className="relative w-full h-full overflow-hidden mt-0 px-0"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0  z-0 min-h-screen w-full">
        <Image 
          src={background} 
          alt="Background Wave" 
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto min-h-[650px] sm:min-h-[650px] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className="overflow-hidden">
              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight"
              >
                <motion.span 
                  animate={{ 
                    color: ["#000", "#DCBD7A", "#000"],
                    transition: { duration: 5, repeat: Infinity }
                  }}
                >
                  Earn
                </motion.span> on{" "}
                <motion.span 
                  className="text-[#DCBD7A]"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  Base
                </motion.span>
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight"
              >
                doing what you do
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-6">
              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                best
              </motion.h1>
            </div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-base md:text-lg max-w-md mb-8"
            >
              A market place where creators, builders, & degen thinkers get paid to create, contribute & engage
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Link
                href="/creator"
                className="bg-[#DCBD7A] text-black px-8 py-3 filter-pill font-semibold text-sm hover:bg-[#DCBD7A]/90 transition-colors"
              >
                Become a creator
              </Link>
              <Link
                href="/bounty"
                className="bg-transparent border border-[#DCBD7A] text-black px-8 py-3 filter-pill font-semibold text-sm hover:bg-[#DCBD7A]/10 transition-colors"
              >
                Post a bounty
              </Link>
            </motion.div>

            <div className="flex justify-center">
                  {/* Avatars and Join Count */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex  items-center mt-12"
            >
              <div className="flex -space-x-3 mr-3">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={avatar1} alt="User 1" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={avatar2} alt="User 2" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={avatar3} alt="User 3" width={32} height={32} />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={avatar4} alt="User 4" width={32} height={32} />
                </div>
              </div>
              <span className="text-sm font-semibold">Join 20,700+</span>
            </motion.div>
            </div>

            
          </div>

          {/* Right Side - Astronaut Image with Floating Elements */}
          <div className="relative h-[450px] md:h-[450px] lg:h-[550px] flex items-center justify-center">
            {/* Main Astronaut */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              className="relative z-10 transform-gpu"
            >
              <Image 
                src={floating} 
                alt="Astronaut" 
                width={1000} 
                height={1000} 
                className="object-contain"
                priority
              />
              
              
              
              <motion.div 
                className="absolute bottom-[25%] left-[15%] w-8 h-8"
                animate={{
                  rotate: [0, 360],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-8 h-8 rounded-full bg-white blur-[1px]"></div>
              </motion.div>
              
             
              
              {/* Light Bulb Icon */}
              <motion.div 
                className="absolute top-[10%] right-[30%]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-10 h-10">
                  <svg viewBox="0 0 24 24" fill="#DCBD7A">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 13.58V16H10V13.58C8.2 12.63 7 10.95 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 10.95 15.8 12.63 14 13.58ZM9 20H15V21C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21V20Z" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Speech Bubble */}
              <motion.div 
                className="absolute top-[25%] right-[5%]"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-16 h-12 bg-[#DCBD7A] rounded-lg flex items-center justify-center relative">
                  <div className="absolute -bottom-2 left-2 w-4 h-4 bg-[#DCBD7A] transform rotate-45"></div>
                  <div className="w-10 h-1 bg-white rounded-full mb-1"></div>
                  <div className="w-7 h-1 bg-white rounded-full mt-1"></div>
                </div>
              </motion.div>
              
              {/* Star */}
              <motion.div 
                className="absolute bottom-[35%] right-[20%]"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [0.8, 1, 0.8],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-8 text-[#DCBD7A]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
