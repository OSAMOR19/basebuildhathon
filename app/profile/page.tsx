"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePrivy } from '@privy-io/react-auth'
import { 
  Github, 
  Twitter, 
  Globe, 
  Award, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  Code, 
  FileText, 
  Video, 
  Palette, 
  MessageSquare
} from "lucide-react"
import { PrivyConnectButton } from "@/components/privy-connect-button"
import Profileicon from "@/components/images/baseavatar1.svg"

// Mock data for demonstration
const profileData = {
  name: "Alex Johnson",
  username: "alexj",
  bio: "Full-stack developer and designer specializing in Web3 applications. Building on Base since 2024.",
  joinedDate: "May 2024",
  walletAddress: "0x1234...5678",
  socialLinks: [
    { type: "twitter", url: "https://twitter.com/alexj" },
    { type: "github", url: "https://github.com/alexj" },
    { type: "website", url: "https://alexj.dev" }
  ],
  skills: ["React", "Solidity", "UI/UX Design", "Smart Contracts", "TypeScript"],
  badges: [
    { name: "Early Builder", description: "Joined Base ecosystem early" },
    { name: "Hackathon Winner", description: "Won Base Hackathon 2024" },
    { name: "Top Contributor", description: "Top 10 contributor" }
  ]
}

const ongoingBounties = [
  {
    id: "b1",
    title: "Build a Cross-Chain Bridge UI",
    type: "Development",
    deadline: "July 25, 2025",
    reward: "6000 USDC",
    status: "In Progress",
    progress: 65
  },
  {
    id: "b2",
    title: "Create Educational Content for Base Developers",
    type: "Content",
    deadline: "June 5, 2025",
    reward: "3000 USDC",
    status: "In Progress",
    progress: 40
  }
]

const completedBounties = [
  {
    id: "b3",
    title: "Design Base Wallet Mobile UI Kit",
    type: "Design",
    completedDate: "April 15, 2025",
    reward: "2500 USDC",
    feedback: "Excellent work, exceeded expectations"
  },
  {
    id: "b4",
    title: "Develop Base Chain Analytics Dashboard",
    type: "Development",
    completedDate: "March 10, 2025",
    reward: "7500 USDC",
    feedback: "Great implementation, very intuitive UI"
  }
]

const submittedWork = [
  {
    id: "w1",
    title: "Base Wallet UI Kit",
    type: "Design",
    date: "April 15, 2025",
    preview: "/work-preview-1.png",
    bountyId: "b3"
  },
  {
    id: "w2",
    title: "Base Chain Analytics Dashboard",
    type: "Development",
    date: "March 10, 2025",
    preview: "/work-preview-2.png",
    bountyId: "b4"
  },
  {
    id: "w3",
    title: "Cross-Chain Bridge UI (WIP)",
    type: "Development",
    date: "July 10, 2025",
    preview: "/work-preview-3.png",
    bountyId: "b1"
  }
]

export default function ProfilePage() {
  const { authenticated, ready } = usePrivy()
  const [activeTab, setActiveTab] = useState("ongoing")
  
  const getTabIcon = (type: string) => {
    switch(type) {
      case "Development": return <Code className="h-4 w-4" />;
      case "Design": return <Palette className="h-4 w-4" />;
      case "Content": return <FileText className="h-4 w-4" />;
      case "Video": return <Video className="h-4 w-4" />;
      case "Thread": return <MessageSquare className="h-4 w-4" />;
      default: return <Briefcase className="h-4 w-4" />;
    }
  };

  return (
    <div className="pt-[100px] max-w-[1280px] mx-auto px-6 pb-20">
      {/* Profile Header */}
      <div className="bg-[#E2E2E2B2]/70 rounded-xl p-8 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Image */}
          <div className="relative">
            <div className="h-32 w-32 rounded-full overflow-hidden relative border-4 border-white shadow-lg">
              <Image 
                src={Profileicon} 
                alt="Profile" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            {authenticated && (
              <div className="absolute bottom-0 right-0 bg-green-500 h-6 w-6 rounded-full border-2 border-white"></div>
            )}
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold">{profileData.name}</h1>
                <p className="text-gray-600">@{profileData.username} • Joined {profileData.joinedDate}</p>
              </div>
              
              {!authenticated ? (
                <PrivyConnectButton />
              ) : (
                <button className="bg-[#0D53DD] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0D53DD]/90 transition-colors">
                  Edit Profile
                </button>
              )}
            </div>
            
            <p className="text-gray-700 mb-6 max-w-3xl">{profileData.bio}</p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              {profileData.socialLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.url}
                  className="flex items-center gap-2 text-[#0D53DD] hover:underline"
                  target="_blank"
                >
                  {link.type === "twitter" && <Twitter className="h-4 w-4" />}
                  {link.type === "github" && <Github className="h-4 w-4" />}
                  {link.type === "website" && <Globe className="h-4 w-4" />}
                  {link.type === "twitter" ? "@alexj" : link.type === "github" ? "github.com/alexj" : "alexj.dev"}
                </Link>
              ))}
            </div>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {profileData.skills.map((skill, index) => (
                <span key={index} className="bg-[#EDF2FF] text-[#0D53DD] px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Connected Wallet */}
            {authenticated && (
              <div className="bg-[#F8FAFC] p-4 rounded-lg inline-block">
                <p className="text-sm text-gray-600 mb-1">Connected Wallet</p>
                <p className="font-mono text-sm">{profileData.walletAddress}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Badges Section */}
      <div className="bg-[#E2E2E2B2]/70 rounded-xl p-6 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-[#0D53DD]" />
          Achievements & Badges
        </h2>
        <div className="flex flex-wrap gap-4">
          {profileData.badges.map((badge, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#EDF2FF] flex items-center justify-center text-[#0D53DD]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{badge.name}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex border-b mb-6">
        <button 
          className={`px-6 py-3 font-medium text-sm ${activeTab === 'ongoing' ? 'border-b-2 border-[#0D53DD] text-[#0D53DD]' : 'text-gray-600'}`}
          onClick={() => setActiveTab('ongoing')}
        >
          Ongoing Bounties
        </button>
        <button 
          className={`px-6 py-3 font-medium text-sm ${activeTab === 'completed' ? 'border-b-2 border-[#0D53DD] text-[#0D53DD]' : 'text-gray-600'}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed Bounties
        </button>
        <button 
          className={`px-6 py-3 font-medium text-sm ${activeTab === 'work' ? 'border-b-2 border-[#0D53DD] text-[#0D53DD]' : 'text-gray-600'}`}
          onClick={() => setActiveTab('work')}
        >
          Submitted Work
        </button>
      </div>
      
      {/* Tab Content */}
      <div>
        {/* Ongoing Bounties */}
        {activeTab === 'ongoing' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingBounties.map((bounty) => (
              <div key={bounty.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getTabIcon(bounty.type)}
                    <span className="text-sm font-medium text-gray-600">{bounty.type}</span>
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                    {bounty.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{bounty.title}</h3>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Due: {bounty.deadline}</span>
                  </div>
                  <span className="text-sm font-medium text-[#0D53DD]">{bounty.reward}</span>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">{bounty.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#0D53DD] h-2 rounded-full" 
                      style={{ width: `${bounty.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button className="w-full bg-[#0D53DD] text-white py-2 rounded-lg hover:bg-[#0D53DD]/90 transition-colors text-sm font-medium">
                    Continue Working
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Completed Bounties */}
        {activeTab === 'completed' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedBounties.map((bounty) => (
              <div key={bounty.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getTabIcon(bounty.type)}
                    <span className="text-sm font-medium text-gray-600">{bounty.type}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{bounty.title}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Completed: {bounty.completedDate}</span>
                  </div>
                  <span className="text-sm font-medium text-[#0D53DD]">{bounty.reward}</span>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Feedback:</span> {bounty.feedback}
                  </p>
                </div>
                
                <div className="mt-4">
                  <button className="w-full border border-[#0D53DD] text-[#0D53DD] py-2 rounded-lg hover:bg-[#EDF2FF] transition-colors text-sm font-medium">
                    View Submission
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Submitted Work */}
        {activeTab === 'work' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {submittedWork.map((work) => (
              <div key={work.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gray-200 relative">
                  {/* This would be the work preview image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {work.type === "Design" && <Palette className="h-12 w-12" />}
                    {work.type === "Development" && <Code className="h-12 w-12" />}
                    {work.type === "Content" && <FileText className="h-12 w-12" />}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#0D53DD]">{work.type}</span>
                    <span className="text-sm text-gray-500">{work.date}</span>
                  </div>
                  
                  <h3 className="font-semibold mb-3">{work.title}</h3>
                  
                  <button className="w-full bg-[#0D53DD] text-white py-2 rounded-lg hover:bg-[#0D53DD]/90 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
