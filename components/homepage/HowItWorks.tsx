import { Card, CardContent } from "@/components/ui/card";
import { Globe, Plus, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Globe,
    title: "Start with a template",
    description: "Subscribe to a professional website for £19/month",
    features: [
      "Custom domain",
      "Content management system",
      "Hosting & maintenance",
      "1 hour developer time/month",
    ],
  },
  {
    number: "2",
    icon: Plus,
    title: "Add The Functionality You Need",
    description: "Select modules that fit your business",
    features: [
      "No complex setup",
      "We build them for you",
      "Only pay for what you use",
      "Add or remove anytime",
    ],
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Grow Over Time",
    description: "Add features as your business grows",
    features: [
      "Cancel or modify anytime",
      "No long-term contracts",
      "Scale up or down",
      "Always in control",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}

                <Card className="relative z-10 h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Number badge */}
                      <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="bg-secondary rounded-xl p-4 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-2 text-sm text-left w-full">
                        {step.features.map((feature) => (
                          <li key={feature} className="flex gap-2 items-start">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
