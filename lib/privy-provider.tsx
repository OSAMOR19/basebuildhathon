'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { ReactNode, useEffect, useState } from 'react'
import { base, mainnet } from 'viem/chains'

// Using a temporary App ID for development
// You should replace this with your own App ID from https://console.privy.io/
const PRIVY_APP_ID = 'cmanjeouv042lkq0mpmnxzi33'

export function PrivyAuthProvider({ children }: { children: ReactNode }) {
  // Use this to prevent hydration errors
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#0D53DD',
          logo: 'https://basebuildhathon.vercel.app/baselogo.png',
        },
        supportedChains: [base, mainnet],
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        }
      }}
    >
      {children}
    </PrivyProvider>
  )
}
