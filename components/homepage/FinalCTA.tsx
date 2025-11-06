import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Ready to Build Your Professional Website?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a base. Add features as you grow. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="xl" className="text-lg group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="outline" className="text-lg" asChild>
              <a href="mailto:hello@piixel.com">
                <Mail className="mr-2 h-5 w-5" />
                Talk to a Developer
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No long-term contracts • Cancel anytime • Professional development included
          </p>
        </div>
      </div>
    </section>
  )
}
