"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, DollarSign, Clock, CheckCircle } from "lucide-react"
import background from "@/components/images/background.svg"
import floating from "@/components/images/herofloating.svg"

export default function BountyPage() {
  const [step, setStep] = useState(1)
  const [bountyType, setBountyType] = useState("")
  const [timeline, setTimeline] = useState("")
  const [budget, setBudget] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const bountyTypes = [
    {
      id: "development",
      title: "Development",
      description: "Smart contracts, dApps, or other technical tasks",
      icon: "💻"
    },
    {
      id: "design",
      title: "Design",
      description: "UI/UX, graphics, illustrations, or animations",
      icon: "🎨"
    },
    {
      id: "content",
      title: "Content",
      description: "Articles, videos, tutorials, or documentation",
      icon: "📝"
    },
    {
      id: "community",
      title: "Community",
      description: "Moderation, events, or community growth",
      icon: "👥"
    }
  ]
  
  const timelineOptions = [
    { id: "less-than-week", label: "Less than a week" },
    { id: "1-2-weeks", label: "1-2 weeks" },
    { id: "2-4-weeks", label: "2-4 weeks" },
    { id: "1-3-months", label: "1-3 months" },
    { id: "3-plus-months", label: "3+ months" }
  ]
  
  const budgetOptions = [
    { id: "less-than-500", label: "Less than $500", value: "$100 - $500" },
    { id: "500-1000", label: "$500 - $1,000", value: "$500 - $1,000" },
    { id: "1000-5000", label: "$1,000 - $5,000", value: "$1,000 - $5,000" },
    { id: "5000-10000", label: "$5,000 - $10,000", value: "$5,000 - $10,000" },
    { id: "10000-plus", label: "$10,000+", value: "$10,000+" }
  ]
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }
  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full"
          >
            <h2 className="text-2xl font-bold mb-6">Bounty Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Bounty Title</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A]" 
                  placeholder="Enter a clear, descriptive title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bounty Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {bountyTypes.map((type) => (
                    <div 
                      key={type.id}
                      onClick={() => setBountyType(type.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        bountyType === type.id 
                          ? 'border-[#DCBD7A] bg-[#DCBD7A]/10' 
                          : 'border-gray-300 hover:border-[#DCBD7A]/50'
                      }`}
                    >
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">{type.icon}</span>
                        <div>
                          <h3 className="font-medium">{type.title}</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A] min-h-[120px]" 
                  placeholder="Describe the bounty in detail, including requirements and deliverables"
                />
              </div>
              
              <div className="pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#DCBD7A] text-black py-3 rounded-lg font-medium hover:bg-[#DCBD7A]/90 transition-colors"
                  disabled={!bountyType}
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        )
      
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full"
          >
            <h2 className="text-2xl font-bold mb-6">Timeline & Budget</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Expected Timeline</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {timelineOptions.map((option) => (
                    <div 
                      key={option.id}
                      onClick={() => setTimeline(option.id)}
                      className={`px-4 py-3 rounded-lg border cursor-pointer transition-colors flex items-center ${
                        timeline === option.id 
                          ? 'border-[#DCBD7A] bg-[#DCBD7A]/10' 
                          : 'border-gray-300 hover:border-[#DCBD7A]/50'
                      }`}
                    >
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {budgetOptions.map((option) => (
                    <div 
                      key={option.id}
                      onClick={() => setBudget(option.id)}
                      className={`px-4 py-3 rounded-lg border cursor-pointer transition-colors flex items-center ${
                        budget === option.id 
                          ? 'border-[#DCBD7A] bg-[#DCBD7A]/10' 
                          : 'border-gray-300 hover:border-[#DCBD7A]/50'
                      }`}
                    >
                      <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Skills Required</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A]" 
                  placeholder="e.g., Solidity, React, UI Design (comma separated)"
                />
              </div>
              
              <div className="pt-4 flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 bg-transparent border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="w-1/2 bg-[#DCBD7A] text-black py-3 rounded-lg font-medium hover:bg-[#DCBD7A]/90 transition-colors"
                  disabled={!timeline || !budget}
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        )
      
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A]" 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A]" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company/Project (optional)</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A]" 
                  placeholder="Your company or project name"
                />
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-[#DCBD7A] hover:underline">Terms of Service</a> and <a href="#" className="text-[#DCBD7A] hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div className="pt-4 flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/2 bg-transparent border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#DCBD7A] text-black py-3 rounded-lg font-medium hover:bg-[#DCBD7A]/90 transition-colors flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting...</span>
                  ) : (
                    "Post Bounty"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )
      
      default:
        return null
    }
  }
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#93B7FF] z-0">
        <Image 
          src={background} 
          alt="Background Wave" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute -left-20 top-40 opacity-20 z-0 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image 
          src={floating} 
          alt="Astronaut" 
          width={300} 
          height={300} 
          className="object-contain"
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Bounty Posted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Your bounty has been submitted and is now under review. Once approved, it will be visible to our community of creators.
            </p>
            <a 
              href="/"
              className="inline-block bg-[#DCBD7A] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#DCBD7A]/90 transition-colors"
            >
              Return to Home
            </a>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-10">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Post a <span className="text-[#DCBD7A]">Bounty</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg max-w-2xl mx-auto"
              >
                Find talented creators to help bring your project to life
              </motion.p>
            </div>
            
            {/* Steps Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center max-w-xs w-full">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 flex items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= i ? 'bg-[#DCBD7A] text-black' : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {i}
                    </div>
                    {i < 3 && (
                      <div 
                        className={`flex-1 h-1 ${
                          step > i ? 'bg-[#DCBD7A]' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              {renderStep()}
            </div>
          </>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 z-0 hidden lg:block">
        <motion.div
          className="w-20 h-20 rounded-full bg-[#DCBD7A]/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="absolute top-40 right-20 z-0 hidden lg:block">
        <motion.div
          className="w-12 h-12 rounded-full bg-white/20"
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}