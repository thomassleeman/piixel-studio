"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface Module {
  id: string
  name: string
  price: number
  setup?: number
  description: string
}

const modules: Module[] = [
  {
    id: "member-portal",
    name: "Member Portal",
    price: 25,
    description: "Password-protected content areas",
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    price: 35,
    description: "24/7 AI-powered support",
  },
  {
    id: "smart-forms",
    name: "Smart Forms",
    price: 20,
    description: "Advanced form functionality",
  },
  {
    id: "booking",
    name: "Booking System",
    price: 40,
    setup: 75,
    description: "Appointment scheduling",
  },
  {
    id: "client-dashboard",
    name: "Client Dashboard",
    price: 60,
    setup: 375,
    description: "Customer portal access",
  },
  {
    id: "directory",
    name: "Directory",
    price: 50,
    setup: 225,
    description: "Searchable listings",
  },
]

export function Pricing() {
  const [selectedModules, setSelectedModules] = useState<Set<string>>(new Set())

  const toggleModule = (moduleId: string) => {
    const newSelection = new Set(selectedModules)
    if (newSelection.has(moduleId)) {
      newSelection.delete(moduleId)
    } else {
      newSelection.add(moduleId)
    }
    setSelectedModules(newSelection)
  }

  const calculateTotal = () => {
    const basePrice = 45
    const modulesTotal = modules
      .filter((m) => selectedModules.has(m.id))
      .reduce((sum, m) => sum + m.price, 0)
    return basePrice + modulesTotal
  }

  const calculateSetupFees = () => {
    return modules
      .filter((m) => selectedModules.has(m.id) && m.setup)
      .reduce((sum, m) => sum + (m.setup || 0), 0)
  }

  const total = calculateTotal()
  const setupFees = calculateSetupFees()

  return (
    <section id="pricing" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with the base, add modules as you need them
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Base Website Card */}
          <div className="lg:col-span-1">
            <Card className="border-primary border-2 h-full">
              <CardHeader>
                <Badge className="w-fit mb-2">Required</Badge>
                <CardTitle className="text-2xl">Base Website</CardTitle>
                <CardDescription className="text-base">
                  Your foundation - everything you need to get started
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">£45</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Professional responsive website</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Content management system</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Custom domain & SSL</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Hosting & maintenance</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">1 hour developer time/month</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Start Here
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Add-On Modules */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Add-On Modules</CardTitle>
                <CardDescription className="text-base">
                  Select the modules you need - you can add or remove them anytime
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {modules.map((module) => {
                    const isSelected = selectedModules.has(module.id)
                    return (
                      <button
                        key={module.id}
                        onClick={() => toggleModule(module.id)}
                        className={`text-left p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                          isSelected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold">{module.name}</h3>
                          <div className={`h-5 w-5 rounded border-2 flex items-center justify-center ${
                            isSelected ? "border-primary bg-primary" : "border-border"
                          }`}>
                            {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant={isSelected ? "default" : "secondary"}>
                            £{module.price}/mo
                          </Badge>
                          {module.setup && (
                            <Badge variant="outline" className="text-xs">
                              £{module.setup} setup
                            </Badge>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Calculator Summary */}
        {(selectedModules.size > 0 || true) && (
          <Card className="max-w-3xl mx-auto mt-8 border-primary">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Your Monthly Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Base website + {selectedModules.size} module{selectedModules.size !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    £{total}
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  {setupFees > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      + £{setupFees} one-time setup
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Additional Services */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Need more developer time?</p>
          <Badge variant="outline" className="text-sm">
            Additional developer time: £75/hour
          </Badge>
        </div>
      </div>
    </section>
  )
}
