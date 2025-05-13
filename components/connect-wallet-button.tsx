"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'

export function ConnectWalletButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const handleConnect = async () => {
    setIsLoading(true)
    try {
      await open()
    } catch (error) {
      console.error("Connection error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = async () => {
    setIsLoading(true)
    try {
      await disconnect()
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

  return (
    <>
      {isConnected && address ? (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formatAddress(address)}</span>
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
