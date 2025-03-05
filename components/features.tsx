import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Shield, Award, Zap, MapPin, Search } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Alert Signs",
      description: "Virtual notifications to nearby users increase the chances of finding your lost items.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "AI Matching",
      description: "Advanced algorithms ensure accurate and faster item identification and matching.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Bounty System",
      description: "Motivate active participation in the community with secure, blockchain-based rewards.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Geo-fencing",
      description: "Location-based alerts notify users when they're near a reported lost or found item.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Transactions",
      description: "Blockchain-based wallet integration ensures transparent and secure bounty payments.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Smart Search",
      description: "Find items even with vague descriptions using our advanced search capabilities.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Innovative solutions that make Reclaim the future of lost and found.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

