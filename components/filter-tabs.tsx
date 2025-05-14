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
    <div className="flex flex-nowrap gap-2 sm:gap-3 mb-4 sm:mb-8 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-150 ease-in-out whitespace-nowrap flex-shrink-0 ${
            activeCategory === category 
              ? "bg-[#EDF2FF] text-[#0D53DD] border border-[#0D53DD]" 
              : "bg-[#F2F4F7] text-[#344054] border border-transparent hover:bg-[#E4E7EC]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
