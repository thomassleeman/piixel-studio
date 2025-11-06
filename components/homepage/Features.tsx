import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Bot,
  FileText,
  Calendar,
  LayoutDashboard,
  FolderTree,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Member Portals",
    description: "Password-protected content areas for courses, resources, or membership sites. Perfect for online communities and exclusive content.",
    price: "£25/mo",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "24/7 support trained on your business content. Automatically answer customer questions and qualify leads while you sleep.",
    price: "£35/mo",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    icon: FileText,
    title: "Smart Forms",
    description: "Conditional logic, multi-step workflows, file uploads, and integrations. Collect exactly the data you need.",
    price: "£20/mo",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Real scheduling that integrates with your business. Accept appointments, manage availability, and sync with your calendar.",
    price: "£40/mo",
    setup: "£75 setup",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    icon: LayoutDashboard,
    title: "Client Dashboards",
    description: "Let clients log in and see their data, documents, invoices, or project status. Build transparency and reduce support requests.",
    price: "£60/mo",
    setup: "£375 setup",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300",
  },
  {
    icon: FolderTree,
    title: "Directories",
    description: "Searchable listings for properties, products, team members, or any structured content. Filterable and fully customizable.",
    price: "£50/mo",
    setup: "£225 setup",
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Features That Actually Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced functionality that DIY platforms can&apos;t offer. Add them to your base website anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`${feature.color} rounded-xl p-3 w-fit mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="text-sm">
                      {feature.price}
                    </Badge>
                    {feature.setup && (
                      <Badge variant="secondary" className="text-sm">
                        {feature.setup}
                      </Badge>
                    )}
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
