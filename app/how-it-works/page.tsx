import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Upload,
  Sparkles,
  Bell,
  Shield,
  ArrowRight,
} from "lucide-react";
import { IMAGES } from "@/lib/constants";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Report Lost Items",
      description:
        "Provide details about your lost item including name, image, last known location, and optional bounty. Alerts are sent to nearby users to increase recovery chances.",
      image: IMAGES.HOW_IT_WORKS.REPORT_LOST,
    },
    {
      icon: <Upload className="h-12 w-12 text-primary" />,
      title: "Report Found Items",
      description:
        "Finders can upload details and location to help owners reclaim belongings. The community-driven approach encourages good Samaritans to participate.",
      image: IMAGES.HOW_IT_WORKS.REPORT_FOUND,
    },
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "AI-Powered Matching",
      description:
        "Our AI matches lost items with found reports using image recognition and text analysis. This ensures accurate and faster item identification even with vague descriptions.",
      image: IMAGES.HOW_IT_WORKS.AI_MATCHING,
    },
    {
      icon: <Bell className="h-12 w-12 text-primary" />,
      title: "Personalized Alerts",
      description:
        "Users receive geo-fencing alerts and notifications when matches are found. This location-based approach increases the chances of recovery.",
      image: IMAGES.HOW_IT_WORKS.NOTIFICATIONS,
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Secure Transactions",
      description:
        "Blockchain-based wallet integration ensures secure bounty payments. This transparent system builds trust between item owners and finders.",
      image: IMAGES.HOW_IT_WORKS.SECURE_TRANSACTIONS,
    },
  ];

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 mt-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            How Reclaim Works
          </h1>
          <p className="text-xl text-muted-foreground">
            Reclaim transforms lost-and-found into a rewarding community effort
            using AI and blockchain technology.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Card className="border-none shadow-none">
                  <CardHeader className="pb-2">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Join our community and experience the future of lost and found.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report-lost">
              <Button size="lg" className="gap-1">
                Report Lost Item <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/report-found">
              <Button size="lg" variant="outline">
                Report Found Item
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
