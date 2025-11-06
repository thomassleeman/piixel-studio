"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Bot,
  FileText,
  Calendar,
  LayoutDashboard,
  FolderTree,
  ArrowRight,
  Plus
} from "lucide-react"

const modules = [
  { name: "Member Portal", price: "£25/mo", icon: Users, color: "bg-blue-100 text-blue-600", position: "top-0 left-0" },
  { name: "AI Chatbot", price: "£35/mo", icon: Bot, color: "bg-purple-100 text-purple-600", position: "top-0 right-0" },
  { name: "Smart Forms", price: "£20/mo", icon: FileText, color: "bg-green-100 text-green-600", position: "bottom-0 left-0" },
  { name: "Booking System", price: "£40/mo", icon: Calendar, color: "bg-orange-100 text-orange-600", position: "top-1/2 -translate-y-1/2 right-0" },
  { name: "Client Dashboard", price: "£60/mo", icon: LayoutDashboard, color: "bg-pink-100 text-pink-600", position: "bottom-0 right-0" },
  { name: "Directory", price: "£50/mo", icon: FolderTree, color: "bg-cyan-100 text-cyan-600", position: "top-1/2 -translate-y-1/2 left-0" },
]

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                From £45/month
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build Your Website.{" "}
                <span className="text-primary">Add What You Need.</span>{" "}
                <span className="text-muted-foreground">When You Need It.</span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl max-w-xl">
                Subscribe to a professional website for <strong className="text-foreground">£45/month</strong>.
                Add booking systems, member portals, AI chatbots, and more — only pay for what you need.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="text-base group"
              >
                See Pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("how-it-works")}
                className="text-base"
              >
                How It Works
              </Button>
            </div>
          </div>

          {/* Right Column: Modular Visualization */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Base Website - Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Connection lines */}
                <div className="absolute inset-0">
                  {modules.map((module, index) => (
                    <div
                      key={index}
                      className="absolute w-full h-full"
                    >
                      <svg
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ overflow: "visible" }}
                      >
                        <line
                          x1="50%"
                          y1="50%"
                          x2={index % 3 === 0 ? "0%" : index % 3 === 1 ? "100%" : "50%"}
                          y2={index < 3 ? "0%" : "100%"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="text-border opacity-50"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Base Card */}
                <div className="bg-card border-4 border-primary rounded-2xl shadow-2xl p-8 w-64 h-64 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold text-center mb-2">Base Website</h3>
                  <Badge className="text-base px-4 py-1">£45/month</Badge>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Your foundation
                  </p>
                </div>
              </div>
            </div>

            {/* Module Cards - Orbiting around base */}
            {modules.map((module, index) => {
              const Icon = module.icon
              const angle = (index / modules.length) * 2 * Math.PI - Math.PI / 2
              const radius = 220
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={module.name}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-105"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="bg-card border-2 border-border rounded-xl shadow-lg p-4 w-40 hover:shadow-xl transition-shadow">
                    <div className={`${module.color} rounded-lg p-3 mb-3 inline-flex`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{module.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{module.price}</p>
                    <Plus className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
