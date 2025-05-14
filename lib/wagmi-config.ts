import { configureChains, createConfig } from 'wagmi'
import { mainnet, sepolia, base, baseSepolia } from 'wagmi/chains'
import { CoinbaseWalletConnector } from '@wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from '@wagmi/connectors/injected'
import { WalletConnectConnector } from '@wagmi/connectors/walletConnect'
import { publicProvider } from '@wagmi/core/providers/public'

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

if (!projectId) {
  console.warn('Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID environment variable')
}

const { chains, publicClient } = configureChains(
  [mainnet, sepolia, base, baseSepolia],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new InjectedConnector({ 
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId,
        showQrModal: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Base Buildhathon App',
      },
    }),
  ],
})
