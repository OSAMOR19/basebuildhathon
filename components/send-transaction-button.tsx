"use client"

import { useState } from "react"
import { useAccount, useSendTransaction, useNetwork, useSwitchNetwork } from "wagmi"
import { parseEther } from "viem"
import { base, mainnet } from "wagmi/chains"
import { Loader2 } from "lucide-react"

// Recipient address - replace with your desired recipient
const RECIPIENT_ADDRESS = "0x0000000000000000000000000000000000000000"
const TRANSACTION_AMOUNT = "0.001" // ETH or BASE amount to send

export function SendTransactionButton() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle")
  const [txHash, setTxHash] = useState<string | null>(null)

  const { sendTransaction } = useSendTransaction({
    onSuccess(data) {
      setStatus("success")
      setTxHash(data.hash)
      console.log("Transaction successful:", data.hash)
    },
    onError(error) {
      setStatus("error")
      console.error("Transaction error:", error)
    },
  })

  const isMainnet = chain?.id === mainnet.id || chain?.id === base.id

  const handleSendTransaction = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first")
      return
    }

    if (!isMainnet) {
      // If not on mainnet, try to switch
      if (switchNetwork) {
        switchNetwork(base.id)
        return
      } else {
        alert("Please switch to Base or Ethereum mainnet manually")
        return
      }
    }

    try {
      setStatus("pending")
      sendTransaction({
        to: RECIPIENT_ADDRESS,
        value: parseEther(TRANSACTION_AMOUNT),
      })
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
                href={`https://${chain?.id === base.id ? "basescan.org" : "etherscan.io"}/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View on {chain?.id === base.id ? "Basescan" : "Etherscan"}
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

  return (
    <div className="flex flex-col items-center">
      <button
        className={`bg-[#DCBD7A] filter-pill text-black rounded-lg px-6 py-2 font-semibold text-sm transition-colors ${
          !isConnected || status === "pending" ? "opacity-70 cursor-not-allowed" : ""
        }`}
        onClick={handleSendTransaction}
        disabled={!isConnected || status === "pending"}
      >
        {status === "pending" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
            Sending...
          </>
        ) : (
          `Send ${TRANSACTION_AMOUNT} ${chain?.id === base.id ? "BASE" : "ETH"}`
        )}
      </button>
      {renderStatus()}
      {!isMainnet && isConnected && (
        <div className="mt-2 text-sm text-amber-600">
          Please switch to Base or Ethereum mainnet
        </div>
      )}
    </div>
  )
}
