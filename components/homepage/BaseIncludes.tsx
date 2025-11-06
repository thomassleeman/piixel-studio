import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  FileEdit,
  Shield,
  Server,
  Clock,
  Mail,
  FileStack,
  Check,
} from "lucide-react"

const includes = [
  {
    icon: Globe,
    title: "Professional Responsive Website",
    description: "Beautiful on all devices - mobile, tablet, and desktop",
  },
  {
    icon: FileEdit,
    title: "Content Management System",
    description: "You can edit everything - no developer needed for updates",
  },
  {
    icon: Shield,
    title: "Custom Domain & SSL",
    description: "Your own domain name with secure HTTPS encryption",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "Fast, reliable hosting with automatic updates and backups",
  },
  {
    icon: Clock,
    title: "1 Hour Developer Time",
    description: "Monthly development time for tweaks, updates, or additions",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Direct access to your developer for questions and help",
  },
  {
    icon: FileStack,
    title: "Multiple Pages",
    description: "As many pages as your business needs - no artificial limits",
  },
  {
    icon: Check,
    title: "No Setup Fees",
    description: "Get started immediately - just £45/month, nothing more",
  },
]

export function BaseIncludes() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2">
            Base Package
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What&apos;s Included in Your Base
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Everything you need to get a professional website up and running
          </p>
          <p className="text-3xl font-bold text-primary">
            £45/month
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {includes.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
