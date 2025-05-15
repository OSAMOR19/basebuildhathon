"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, Upload, CheckCircle } from "lucide-react"
import background from "@/components/images/background.svg"
import floating from "@/components/images/herofloating.svg"

export default function CreatorPage() {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState("")
  const [skills, setSkills] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const categories = [
    "Development", 
    "Design", 
    "Content Creation", 
    "Marketing", 
    "Community Management"
  ]
  
  const skillOptions: Record<string, string[]> = {
    "Development": ["Solidity", "React", "Node.js", "Rust", "Go", "Smart Contracts"],
    "Design": ["UI/UX", "Graphic Design", "3D Modeling", "Animation", "Branding"],
    "Content Creation": ["Technical Writing", "Video Production", "Social Media", "Blogging"],
    "Marketing": ["Growth Hacking", "Analytics", "SEO", "Paid Advertising"],
    "Community Management": ["Moderation", "Event Planning", "Discord Management", "Telegram"]
  }
  
  const handleCategoryChange = (cat: string) => {
    setCategory(cat)
    setSkills([])
  }
  
  const toggleSkill = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter(s => s !== skill))
    } else {
      setSkills([...skills, skill])
    }
  }
  
  const handleFileClick = () => {
    fileInputRef.current?.click()
  }
  
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
            <h2 className="text-2xl font-bold mb-6">Tell us about yourself</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A] bg-white text-gray-900" 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A] bg-white text-gray-900" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A] min-h-[120px] bg-white text-gray-900" 
                  placeholder="Tell us a bit about yourself and your experience"
                />
              </div>
              
              <div className="pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#DCBD7A] text-black py-3 rounded-lg font-medium hover:bg-[#DCBD7A]/90 transition-colors"
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
            <h2 className="text-2xl font-bold mb-6">Select your expertise</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A] appearance-none bg-white text-gray-900"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
              </div>
              
              {category && (
                <div>
                  <label className="block text-sm font-medium mb-2">Skills</label>
                  <div className="grid grid-cols-2 gap-3">
                    {skillOptions[category].map((skill) => (
                      <div 
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                          skills.includes(skill) 
                            ? 'border-[#DCBD7A] bg-[#DCBD7A]/10 text-black' 
                            : 'border-gray-300 hover:border-[#DCBD7A]/50 bg-white text-gray-900'
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
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
                  disabled={!category || skills.length === 0}
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
            <h2 className="text-2xl font-bold mb-6">Upload your portfolio</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div 
                onClick={handleFileClick}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#DCBD7A] transition-colors bg-white"
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden" 
                  multiple
                />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Portfolio URL (optional)</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DCBD7A] bg-white text-gray-900" 
                  placeholder="https://yourportfolio.com"
                />
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
                    "Complete Application"
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
      
      {/* Floating Astronaut */}
      <motion.div
        className="absolute -right-20 bottom-0 opacity-20 z-0 hidden lg:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0, -2, 0],
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
          width={400} 
          height={400} 
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
            <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to become a creator on Base. We'll review your application and get back to you within 2-3 business days.
            </p>
            <a 
              href="/"
              className="inline-block bg-[#DCBD7A] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#DCBD7A]/90 transition-colors"
            >
              Return to Home
            </a>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join as a Creator</h1>
              <p className="text-lg text-white/90 max-w-xl">
                Apply to become a creator on Base and start earning by participating in bounties and hackathons.
              </p>
            </div>
            
            <div className="w-full">
              <div className="flex justify-center mb-8">
                <div className="flex items-center">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          i <= step 
                            ? 'bg-[#DCBD7A] text-black' 
                            : 'bg-white/30 text-white'
                        }`}
                      >
                        {i}
                      </div>
                      {i < 3 && (
                        <div 
                          className={`w-10 h-1 ${
                            i < step ? 'bg-[#DCBD7A]' : 'bg-white/30'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {renderStep()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}