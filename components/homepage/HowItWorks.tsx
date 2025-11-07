import { Card, CardContent } from "@/components/ui/card"
import { Palette, FileEdit, Puzzle } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Palette,
    title: "Choose Your Template & Customize",
    description: "Browse our collection of professional Tailwind Pro templates and select the design that fits your brand. You control the colours, fonts, and visual style - we handle the technical implementation. No coding required on your end.",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"
  },
  {
    number: "2",
    icon: FileEdit,
    title: "Add Your Content",
    description: "Using our intuitive Sanity CMS, you can easily manage all your website content - text, images, pages, and blog posts. Everything is simple to update, with a user-friendly interface that feels natural from day one.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    number: "3",
    icon: Puzzle,
    title: "Bolt On The Functionality You Need",
    description: "This is where Piixel shines. Need a member portal? Booking system? AI chatbot? We integrate proven, cloud-based services that just work. No cobbled-together plugins or half-baked solutions - just reliable functionality that businesses actually need, installed properly by an experienced developer.",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple process. Professional results. Genuine functionality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}

                <Card className="relative z-10 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Number badge */}
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`${step.color} rounded-xl p-4 mb-4`}>
                        <Icon className="h-8 w-8" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom summary */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-secondary/30 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-lg leading-relaxed">
                <span className="font-bold text-foreground">The result: </span>
                <span className="text-muted-foreground">
                  A professional website with the advanced features DIY platforms can't offer, delivered at a fraction of agency costs, with ongoing support included.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
