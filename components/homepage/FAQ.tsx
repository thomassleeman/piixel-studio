"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to get my site?",
    answer: "Most base websites are ready within 1-2 weeks. We'll work with you to gather content, choose a design direction, and get you launched quickly. Add-on modules can be added at any time and typically take 1-2 weeks each depending on complexity.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no long-term contracts. Cancel anytime with 30 days notice. We believe in earning your business every month by providing excellent service and value.",
  },
  {
    question: "What if I need something custom?",
    answer: "That's what we do! Your monthly subscription includes 1 hour of developer time for customizations. Need more? Additional developer time is available at £75/hour. We can build almost anything your business needs.",
  },
  {
    question: "Can I edit my own content?",
    answer: "Yes! Every website includes a user-friendly content management system (CMS). You can edit text, images, and pages yourself without any coding knowledge. We'll train you on how to use it during onboarding.",
  },
  {
    question: "What's included in the monthly developer hour?",
    answer: "Your 1 hour per month can be used for content updates, small design tweaks, bug fixes, adding new pages, or minor feature additions. Hours don't roll over, but most clients find 1 hour per month is plenty for ongoing maintenance.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts. You pay month-to-month and can cancel with 30 days notice. Setup fees for certain modules are one-time charges, but the monthly subscription has no commitment beyond the current month.",
  },
  {
    question: "Do you work with existing websites?",
    answer: "Yes! If you have an existing website that needs upgrading or migrating, we can often incorporate it into our subscription model. Get in touch and we'll discuss your specific situation.",
  },
  {
    question: "What technology do you use?",
    answer: "We build with modern, professional tools and frameworks chosen for each project. All sites are responsive, fast, secure, and built with best practices. We handle all the technical details so you don't have to worry about them.",
  },
  {
    question: "Can I upgrade or downgrade modules?",
    answer: "Yes! Add or remove modules anytime. When you add a module, you'll pay the monthly fee from that point forward (plus any setup fee if applicable). When you remove a module, you'll stop being charged at your next billing cycle.",
  },
  {
    question: "What if I need help or support?",
    answer: "Every subscription includes email support with direct access to your developer. We typically respond within 24 hours on business days. For urgent issues, we prioritize quick responses.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Piixel
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
