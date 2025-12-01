"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AI-powered task automation work?",
    answer:
      "Our AI analyzes your work patterns, priorities, and deadlines to automatically categorize, prioritize, and even complete routine tasks. It learns from your behavior to provide personalized suggestions and automations.",
  },
  {
    question: "Can I integrate Tasky with other tools?",
    answer:
      "Yes! Tasky integrates seamlessly with popular tools like Slack, Google Workspace, Microsoft 365, Notion, and many more. Our Professional and Enterprise plans offer even more integration options.",
  },
  {
    question: "Is my data secure with Tasky?",
    answer:
      "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and other major security standards. Your data is always encrypted at rest and in transit.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your billing cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Our Free plan lets you explore Tasky's core features with up to 10 users at no cost. You can upgrade to Professional or Enterprise whenever you're ready for more advanced features.",
  },
]

export function FaqSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center mb-12">
          Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
