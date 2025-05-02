"use client"

import { useState } from "react"

interface FilterTabsProps {
  categories: string[]
  onFilterChange: (category: string) => void
}

export default function FilterTabs({ categories, onFilterChange }: FilterTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-150 ease-in-out ${
            activeCategory === category ? "bg-[#93B7FF3D] text-[#344054]" : "border border-[#D0D5DD] text-[#344054]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
