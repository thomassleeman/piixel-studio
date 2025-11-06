import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Outgrown Wix? Can&apos;t Afford an Agency?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bridge the gap between DIY platforms and expensive custom agencies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* DIY Platforms */}
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">DIY Platforms</CardTitle>
              <p className="text-2xl font-bold text-muted-foreground">£13/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">Limited features</span>
                </li>
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">Hit a wall with advanced functionality</span>
                </li>
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">No developer support</span>
                </li>
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">Cookie-cutter templates</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Piixel - Highlighted */}
          <Card className="relative border-primary border-2 shadow-lg md:scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Piixel</CardTitle>
              <p className="text-2xl font-bold">£45-£150/month</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Professional development</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Add features as you grow</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Real developer included</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Cancel anytime</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Custom Agencies */}
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-xl">Custom Agencies</CardTitle>
              <p className="text-2xl font-bold text-muted-foreground">£5k-£50k upfront</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">Months of waiting</span>
                </li>
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">Expensive changes</span>
                </li>
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">No ongoing support included</span>
                </li>
                <li className="flex gap-2">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">Huge upfront investment</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
