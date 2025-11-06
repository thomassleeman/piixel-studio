import { Hero } from "@/components/homepage/Hero"
import { ProblemSolution } from "@/components/homepage/ProblemSolution"
import { Features } from "@/components/homepage/Features"
import { HowItWorks } from "@/components/homepage/HowItWorks"
import { BaseIncludes } from "@/components/homepage/BaseIncludes"
import { Pricing } from "@/components/homepage/Pricing"
import { WhoIsThisFor } from "@/components/homepage/WhoIsThisFor"
import { FAQ } from "@/components/homepage/FAQ"
import { FinalCTA } from "@/components/homepage/FinalCTA"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <BaseIncludes />
      <Pricing />
      <WhoIsThisFor />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
