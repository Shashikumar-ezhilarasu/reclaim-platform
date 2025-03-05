import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I lost my laptop at the airport and thought it was gone forever. Thanks to Reclaim, someone found it and I got it back within 24 hours!",
      name: "Sarah Johnson",
      role: "Marketing Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The bounty system motivated me to return a lost wallet I found. It feels good to help others and get rewarded for honesty.",
      name: "Michael Chen",
      role: "College Student",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a frequent traveler, I've lost items before. Reclaim's geo-fencing alerts helped me recover my expensive headphones at a coffee shop.",
      name: "Emily Rodriguez",
      role: "Travel Blogger",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See how Reclaim has helped people recover their lost belongings.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

