import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Web3ModalProvider } from "@/lib/web3modal-provider"


const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-nunito-sans",
})

export const metadata: Metadata = {
  title: "Earn on Base",
  description: "A marketplace where creators, builders & doers get paid to ideate, contribute & earn.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Web3ModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
