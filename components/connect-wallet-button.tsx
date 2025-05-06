"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface ConnectWalletButtonProps {
  onConnect: () => void
}

export function ConnectWalletButton({ onConnect }: ConnectWalletButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    // Simulate modal opening
    setTimeout(() => {
      setIsLoading(false)
      setIsModalOpen(true)
    }, 500)
  }

  const handleWalletSelect = () => {
    setIsModalOpen(false)
    onConnect()
  }

  return (
    <>
      <button
        className="bg-[#DCBD7A] filter-pill text-black rounded-lg px-6 py-2 font-semibold text-sm  transition-colors"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
            Connecting...
          </>
        ) : (
          "Connect wallet"
        )}
      </button>

      {/* Wallet Connection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Connect Wallet</h3>
            <p className="text-gray-600 mb-4">Choose your preferred wallet provider</p>
            <div className="space-y-3">
              <WalletOption name="MetaMask" icon="🦊" onClick={handleWalletSelect} />
              <WalletOption name="WalletConnect" icon="🔗" onClick={handleWalletSelect} />
              <WalletOption name="Coinbase Wallet" icon="🪙" onClick={handleWalletSelect} />
            </div>
            <button
              className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function WalletOption({
  name,
  icon,
  onClick,
}: {
  name: string
  icon: string
  onClick: () => void
}) {
  return (
    <button
      className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
      onClick={onClick}
    >
      <span className="text-2xl mr-3">{icon}</span>
      <span className="font-medium">{name}</span>
    </button>
  )
}
