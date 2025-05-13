import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, base, baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

if (!projectId) {
  console.warn('Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID environment variable')
}

export const config = createConfig({
  chains: [mainnet, sepolia, base, baseSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({ projectId }),
    coinbaseWallet({ 
      appName: 'Base Buildhathon App',
    }),
  ],
})
