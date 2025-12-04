"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is Whatsapp business Api pricing structured?",
    answer:
      "WhatsApp follows a conversation-based pricing model, categorized into Marketing, Utility, Authentication, and Service conversations, each with different charges.",
  },
  {
    question: "Are incoming messages from users free?",
    answer:
      "Yes, all incoming messages from users are free. Charges apply only when a business responds, initiating a paid conversation.",
  },
  {
    question: "what are the charges for marketing conversations?",
    answer:
      "Marketing Conversations, which include promotional messages, cost ₹0.88 per conversation (for Indian users)",
  },
  {
    question: "Are service conversations free?",
    answer:
      "Yes, Service Conversations (user-initiated support chats) are completely free for all businesses using Connect Stream.",
  },
  {
    question: "Is there a separate fee for using whatsapp templates?",
    answer:
      "No, there is no extra charge for using templates, but template messages fall under paid conversation categories based on their purpose.",
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
