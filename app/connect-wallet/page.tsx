"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Wallet, Shield, AlertCircle, CheckCircle } from "lucide-react"

export default function ConnectWalletPage() {
  const router = useRouter()
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = async () => {
    setConnecting(true)

    // Simulate wallet connection
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock successful connection
    setConnected(true)
    setWalletAddress("0x1234...5678")
    setConnecting(false)
  }

  const handleDisconnect = () => {
    setConnected(false)
    setWalletAddress("")
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Connect Wallet</h1>
          <p className="text-muted-foreground">Secure your transactions with blockchain technology</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Wallet Connection
            </CardTitle>
            <CardDescription>Connect your wallet to enable secure bounty payments and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            {connected ? (
              <div className="space-y-4">
                <Alert variant="default" className="bg-green-500/10 text-green-500 border-green-500/20">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Wallet Connected</AlertTitle>
                  <AlertDescription>Your wallet is successfully connected to Reclaim.</AlertDescription>
                </Alert>
                <div className="p-4 border rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Connected Address</div>
                  <div className="font-mono font-medium">{walletAddress}</div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Alert variant="outline" className="bg-muted">
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Connect your wallet to enable secure transactions and bounty payments on the blockchain.
                  </AlertDescription>
                </Alert>

                <Tabs defaultValue="metamask">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="metamask">MetaMask</TabsTrigger>
                    <TabsTrigger value="coinbase">Coinbase</TabsTrigger>
                    <TabsTrigger value="walletconnect">WalletConnect</TabsTrigger>
                  </TabsList>
                  <TabsContent value="metamask" className="p-4 border rounded-lg mt-4 text-center">
                    <div className="flex justify-center mb-4">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.3168 3L13.3168 8.4L14.8418 5.025L21.3168 3Z"
                          fill="#E17726"
                          stroke="#E17726"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.68317 3L10.6082 8.475L9.15817 5.025L2.68317 3Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3832 16.275L16.2332 19.5L20.8332 20.7L22.1332 16.35L18.3832 16.275Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.8667 16.35L3.1667 20.7L7.7667 19.5L5.6167 16.275L1.8667 16.35Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5167 10.65L6.2167 12.525L10.7667 12.75L10.6167 7.8L7.5167 10.65Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.4833 10.65L13.3333 7.725L13.2333 12.75L17.7833 12.525L16.4833 10.65Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.7667 19.5L10.4667 18.15L8.1167 16.375L7.7667 19.5Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5333 18.15L16.2333 19.5L15.8833 16.375L13.5333 18.15Z"
                          fill="#E27625"
                          stroke="#E27625"
                          strokeWidth="0.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm mb-4">Connect with MetaMask, the most popular Ethereum wallet</p>
                    <Button onClick={handleConnect} disabled={connecting}>
                      {connecting ? "Connecting..." : "Connect MetaMask"}
                    </Button>
                  </TabsContent>
                  <TabsContent value="coinbase" className="p-4 border rounded-lg mt-4 text-center">
                    <div className="flex justify-center mb-4">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          fill="#0052FF"
                        />
                        <path
                          d="M12 6.5C9.0975 6.5 6.75 8.8475 6.75 11.75C6.75 14.6525 9.0975 17 12 17C14.9025 17 17.25 14.6525 17.25 11.75C17.25 8.8475 14.9025 6.5 12 6.5ZM9.25 11.75C9.25 10.2325 10.4825 9 12 9C13.5175 9 14.75 10.2325 14.75 11.75C14.75 13.2675 13.5175 14.5 12 14.5C10.4825 14.5 9.25 13.2675 9.25 11.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-sm mb-4">Connect with Coinbase Wallet for easy crypto transactions</p>
                    <Button onClick={handleConnect} disabled={connecting}>
                      {connecting ? "Connecting..." : "Connect Coinbase"}
                    </Button>
                  </TabsContent>
                  <TabsContent value="walletconnect" className="p-4 border rounded-lg mt-4 text-center">
                    <div className="flex justify-center mb-4">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.08 10.82C9.01 7.89 13.99 7.89 16.92 10.82L17.26 11.16C17.4 11.3 17.4 11.54 17.26 11.68L16.16 12.78C16.09 12.85 15.98 12.85 15.91 12.78L15.43 12.3C13.35 10.22 9.65 10.22 7.57 12.3L7.05 12.82C6.98 12.89 6.87 12.89 6.8 12.82L5.7 11.72C5.56 11.58 5.56 11.34 5.7 11.2L6.08 10.82ZM19.18 13.08L20.14 14.04C20.28 14.18 20.28 14.42 20.14 14.56L15.54 19.16C15.4 19.3 15.16 19.3 15.02 19.16L11.9 16.04C11.87 16.01 11.81 16.01 11.78 16.04L8.66 19.16C8.52 19.3 8.28 19.3 8.14 19.16L3.54 14.56C3.4 14.42 3.4 14.18 3.54 14.04L4.5 13.08C4.64 12.94 4.88 12.94 5.02 13.08L8.14 16.2C8.17 16.23 8.23 16.23 8.26 16.2L11.38 13.08C11.52 12.94 11.76 12.94 11.9 13.08L15.02 16.2C15.05 16.23 15.11 16.23 15.14 16.2L18.26 13.08C18.42 12.94 18.66 12.94 18.8 13.08H19.18Z"
                          fill="#3B99FC"
                        />
                      </svg>
                    </div>
                    <p className="text-sm mb-4">Connect with WalletConnect to use with various mobile wallets</p>
                    <Button onClick={handleConnect} disabled={connecting}>
                      {connecting ? "Connecting..." : "Connect WalletConnect"}
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Back
            </Button>
            {connected && (
              <Button variant="destructive" onClick={handleDisconnect}>
                Disconnect Wallet
              </Button>
            )}
          </CardFooter>
        </Card>

        <div className="mt-6">
          <Alert variant="outline">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Your wallet is only used for secure transactions. We never store your private keys.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}

