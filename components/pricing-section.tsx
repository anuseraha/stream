"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Growth",
    features: [
      "Up to 5 user agents",
      "20K conversations per month",
      "Bulk broadcast",
      "1 chatbot (flow)",
      "API & webhooks",
      "Google Sheet integration",
      "Payment gateways",
      "Lead ad automations",
    ],
    popular: false,
  },
  {
    name: "Pro",
    features: [
      "Up to 15 user agents",
      "Up to 30K conversations per month",
      "10 chatbots",
      "Native WhatsApp flows",
      "API & webhooks",
      "Google Sheet integration",
      "Payment gateways",
      "FB lead ad automation",
      "Appointment booking system",
      "WhatsApp store",
      "Shopify/WooCommerce/Ecwid integration",
      "All integrations",
      "ChatGPT integrations",
      "OpenAI chat using business data",
      "Text & voice conversation AI",
      "Custom integration support",
    ],
    popular: true,
  },
  {
    name: "Business",
    features: [
      "Up to 50 user agents",
      "Up to 100K conversations per month",
      "API & webhooks",
      "Google Sheet integration",
      "Payment gateways",
      "Lead ad automation",
      "WhatsApp store",
      "Shopify/WooCommerce/Ecwid integration",
      "OpenAI chat using business data",
      "Text & voice conversation AI",
      "Custom integration support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false) // You can remove this later if not used elsewhere

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Unlock the Full Potential
          <br />
          of Your Business
        </h2>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "bg-card border rounded-2xl p-6 text-left relative border-border",
                plan.popular ? "border-primary shadow-lg" : ""
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-foreground mb-4">{plan.name}</h3>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={cn(
                  "w-full py-3 rounded-full font-medium transition-colors bg-muted text-foreground hover:bg-muted/80",
                  plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                )}
              >
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
