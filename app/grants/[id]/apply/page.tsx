"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ApplyPage() {
  const params = useParams();
  // Handle the case where params might be null
  const grantId = params ? (params.id as string) : '';
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    projectDescription: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the data to a backend
    console.log("Submitting application for grant:", grantId, formData)
    alert("Application submitted successfully!")
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Apply for Grant</h1>
          <p className="text-lg text-gray-600">
            Complete the form below to apply for this grant opportunity.
          </p>
        </div>

        <div className="bg-[#E2E2E2B2]/70 shadow-[inset_0_0_8px_rgba(13,83,221,0.2)] rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Name of your project"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Describe your project, goals, and how it relates to this grant opportunity..."
                rows={6}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 