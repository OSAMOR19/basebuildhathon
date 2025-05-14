'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiConfig } from 'wagmi'
import { ReactNode } from 'react'
import { config, projectId } from './wagmi-config'

// Configure Web3Modal
createWeb3Modal({
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#DCBD7A', // Match your app's primary color
  },
  // Customize wallet selection
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust Wallet
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa', // Coinbase Wallet
  ],
  includeWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust Wallet
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa', // Coinbase Wallet
  ],
  // Disable all other wallet options
  enableExplorer: false,
  enableAnalytics: false,
  enableOnramp: false,
  enableWalletConnect: true, // Keep WalletConnect protocol enabled for Trust Wallet
})

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  )
}
