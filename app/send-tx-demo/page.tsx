"use client"

import { SendTransactionButton } from "@/components/send-transaction-button"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { useAccount, useNetwork } from "wagmi"

export default function SendTxDemoPage() {
  const { isConnected } = useAccount()
  const { chain } = useNetwork()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Send Transaction Demo</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-medium mb-2">Wallet Status</h2>
            {isConnected ? (
              <div className="text-green-600 font-medium">
                Connected to {chain?.name || "unknown network"}
              </div>
            ) : (
              <div className="text-amber-600 font-medium">
                Not connected
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full">
              <h2 className="text-lg font-medium mb-2">1. Connect Your Wallet</h2>
              <div className="flex justify-center">
                <ConnectWalletButton />
              </div>
            </div>
            
            <div className="w-full">
              <h2 className="text-lg font-medium mb-2">2. Send a Transaction</h2>
              <p className="text-sm text-gray-600 mb-4">
                This will send a small amount of ETH/BASE on mainnet.
                Make sure you're connected to Base or Ethereum mainnet.
              </p>
              <div className="flex justify-center">
                <SendTransactionButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
