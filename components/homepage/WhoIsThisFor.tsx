import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Store, TrendingUp } from "lucide-react"

const audiences = [
  {
    icon: Briefcase,
    title: "Service Businesses",
    description: "Consultants, trainers, therapists, coaches, and professional service providers who need to showcase expertise and accept bookings.",
    examples: ["Management consultants", "Personal trainers", "Therapists & counselors", "Business coaches"],
  },
  {
    icon: Users,
    title: "Membership Sites",
    description: "Gyms, clubs, online courses, and communities that need member portals, protected content, and recurring subscriptions.",
    examples: ["Online course creators", "Fitness clubs", "Professional associations", "Exclusive communities"],
  },
  {
    icon: Store,
    title: "Local Businesses",
    description: "Salons, studios, restaurants, and local shops that need professional presence, bookings, and customer engagement.",
    examples: ["Hair & beauty salons", "Yoga studios", "Restaurants & cafes", "Local retail shops"],
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    description: "Anyone outgrowing Wix or Squarespace who needs advanced features without the agency price tag.",
    examples: ["Startups scaling up", "Small businesses expanding", "Side hustles going pro", "Entrepreneurs building"],
  },
]

export function WhoIsThisFor() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Who Is This For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for businesses that have outgrown DIY platforms but aren&apos;t ready for enterprise solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {audiences.map((audience) => {
            const Icon = audience.icon
            return (
              <Card key={audience.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 rounded-xl p-3 w-fit mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{audience.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Perfect for:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {audience.examples.map((example) => (
                        <li key={example} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
