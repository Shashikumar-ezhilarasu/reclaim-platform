import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Upload, Sparkles, Bell } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Report Lost Items",
      description:
        "Provide details about your lost item including name, image, last known location, and optional bounty.",
    },
    {
      icon: <Upload className="h-10 w-10 text-primary" />,
      title: "Report Found Items",
      description: "Upload details and location of items you've found to help owners reclaim their belongings.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "AI-Powered Matching",
      description: "Our AI matches lost items with found reports using image recognition and text analysis.",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Personalized Alerts",
      description: "Receive geo-fencing alerts and notifications when matches are found for your items.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Reclaim transforms lost-and-found into a rewarding community effort.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background">
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

