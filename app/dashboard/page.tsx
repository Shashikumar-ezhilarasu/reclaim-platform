import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, DollarSign, Search } from "lucide-react"

export default function DashboardPage() {
  // Mock data for lost items
  const lostItems = [
    {
      id: "1",
      name: "Blue Backpack",
      description: "Navy blue Northface backpack with laptop inside",
      location: "Central Park, New York",
      date: "2023-03-01",
      status: "active",
      bounty: 50,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "iPhone 14 Pro",
      description: "Black iPhone with red case, slightly scratched screen",
      location: "Starbucks on 5th Avenue",
      date: "2023-03-05",
      status: "matched",
      bounty: 100,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "3",
      name: "Car Keys",
      description: "Toyota car keys with a rabbit foot keychain",
      location: "Gym locker room",
      date: "2023-03-10",
      status: "recovered",
      bounty: 25,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Mock data for found items
  const foundItems = [
    {
      id: "1",
      name: "Wallet",
      description: "Brown leather wallet with initials 'JD'",
      location: "Bus Stop on Main Street",
      date: "2023-03-02",
      status: "reported",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "Umbrella",
      description: "Black umbrella with wooden handle",
      location: "Coffee shop downtown",
      date: "2023-03-07",
      status: "matched",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your lost and found items</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Link href="/report-lost">
            <Button>Report Lost Item</Button>
          </Link>
          <Link href="/report-found">
            <Button variant="outline">Report Found Item</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-8">
        <Tabs defaultValue="lost" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="lost">Lost Items</TabsTrigger>
            <TabsTrigger value="found">Found Items</TabsTrigger>
          </TabsList>
          <TabsContent value="lost" className="space-y-4">
            {lostItems.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">No lost items reported</p>
                  <p className="text-muted-foreground mb-4">You haven't reported any lost items yet.</p>
                  <Link href="/report-lost">
                    <Button>Report Lost Item</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              lostItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-[100px] h-[100px]">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            {item.status === "active" && (
                              <Badge
                                variant="outline"
                                className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                              >
                                Active
                              </Badge>
                            )}
                            {item.status === "matched" && (
                              <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                                Potential Match
                              </Badge>
                            )}
                            {item.status === "recovered" && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                                Recovered
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                          <div className="flex items-center text-muted-foreground">
                            <DollarSign className="h-4 w-4 mr-1" />
                            <span>{item.bounty} USD</span>
                          </div>
                          <Link href={`/items/lost/${item.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>
          <TabsContent value="found" className="space-y-4">
            {foundItems.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">No found items reported</p>
                  <p className="text-muted-foreground mb-4">You haven't reported any found items yet.</p>
                  <Link href="/report-found">
                    <Button>Report Found Item</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              foundItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-[100px] h-[100px]">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            {item.status === "reported" && (
                              <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                                Reported
                              </Badge>
                            )}
                            {item.status === "matched" && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                                Matched
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-1">{item.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Link href={`/items/found/${item.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

