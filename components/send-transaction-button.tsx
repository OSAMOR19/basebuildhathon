"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { usePrivy } from '@privy-io/react-auth'
import { base, mainnet } from 'viem/chains'

// Recipient address - replace with your desired recipient
const RECIPIENT_ADDRESS = "0x0000000000000000000000000000000000000000"
const TRANSACTION_AMOUNT = "0.001" // ETH or BASE amount to send

export function SendTransactionButton() {
  const { authenticated, user, ready, sendTransaction, getChainId } = usePrivy()
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle")
  const [txHash, setTxHash] = useState<string | null>(null)
  const [currentChain, setCurrentChain] = useState<typeof base | typeof mainnet | null>(null)

  // Get the user's wallet if available
  const wallet = user?.wallet

  useEffect(() => {
    const fetchChainId = async () => {
      if (ready && authenticated) {
        const chainId = await getChainId()
        if (chainId === mainnet.id) {
          setCurrentChain(mainnet)
        } else if (chainId === base.id) {
          setCurrentChain(base)
        }
      }
    }
    fetchChainId()
  }, [ready, authenticated, getChainId])

  const isMainnet = currentChain?.id === mainnet.id || currentChain?.id === base.id

  const handleSendTransaction = async () => {
    if (!authenticated || !wallet) {
      alert("Please connect your wallet first")
      return
    }

    try {
      setStatus("pending")
      
      // Using Privy's sendTransaction method
      const tx = await sendTransaction({
        wallet: wallet.address,
        to: RECIPIENT_ADDRESS,
        value: BigInt(parseFloat(TRANSACTION_AMOUNT) * 10**18), // Convert to wei
      })
      
      setStatus("success")
      setTxHash(tx.hash)
      console.log("Transaction successful:", tx.hash)
    } catch (error) {
      console.error("Failed to send transaction:", error)
      setStatus("error")
    }
  }

  // Render status message
  const renderStatus = () => {
    switch (status) {
      case "pending":
        return (
          <div className="mt-2 text-sm text-amber-600">
            Transaction pending...
          </div>
        )
      case "success":
        return (
          <div className="mt-2 text-sm text-green-600">
            Transaction successful!{" "}
            {txHash && (
              <a
                href={`https://${currentChain?.id === base.id ? "basescan.org" : "etherscan.io"}/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View on {currentChain?.id === base.id ? "Basescan" : "Etherscan"}
              </a>
            )}
          </div>
        )
      case "error":
        return (
          <div className="mt-2 text-sm text-red-600">
            Transaction failed. Please try again.
          </div>
        )
      default:
        return null
    }
  }

  // Wait for Privy to be ready
  if (!ready) {
    return (
      <div className="flex flex-col items-center">
        <button
          className="bg-[#DCBD7A] filter-pill text-black rounded-lg px-6 py-2 font-semibold text-sm transition-colors opacity-70 cursor-not-allowed"
          disabled={true}
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
          Loading...
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className={`bg-[#DCBD7A] filter-pill text-black rounded-lg px-6 py-2 font-semibold text-sm transition-colors ${
          !authenticated || status === "pending" ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleSendTransaction}
        disabled={!authenticated || status === "pending"}
      >
        {status === "pending" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
            Sending...
          </>
        ) : (
          `Send ${TRANSACTION_AMOUNT} ${currentChain?.id === base.id ? "BASE" : "ETH"}`
        )}
      </button>
      {renderStatus()}
      {!isMainnet && authenticated && (
        <div className="mt-2 text-sm text-amber-600">
          Please switch to Base or Ethereum mainnet
        </div>
      )}
    </div>
  )
}
