'use client'

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { usePrivy } from '@privy-io/react-auth'

export function PrivyConnectButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { login, logout, authenticated, user, ready } = usePrivy()

  const handleConnect = async () => {
    setIsLoading(true)
    try {
      await login()
    } catch (error) {
      console.error("Connection error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = async () => {
    setIsLoading(true)
    try {
      await logout()
    } catch (error) {
      console.error("Disconnect error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Format address for display (0x1234...5678)
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  // Wait for Privy to be ready
  if (!ready) {
    return (
      <button
        className="bg-[#DCBD7A] filter-pill text-black rounded-lg px-6 py-2 font-semibold text-sm transition-colors"
        disabled={true}
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
        Loading...
      </button>
    )
  }

  return (
    <>
      {authenticated && user ? (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {user.wallet?.address ? formatAddress(user.wallet.address) : user.email?.address || 'Connected'}
          </span>
          <button
            className="bg-[#DCBD7A] filter-pill text-black rounded-lg px-4 py-2 font-semibold text-sm transition-colors"
            onClick={handleDisconnect}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                Disconnecting...
              </>
            ) : (
              "Disconnect"
            )}
          </button>
        </div>
      ) : (
        <button
          className="bg-[#DCBD7A] filter-pill text-black rounded-lg px-6 py-2 font-semibold text-sm transition-colors"
          onClick={handleConnect}
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
      )}
    </>
  )
}
