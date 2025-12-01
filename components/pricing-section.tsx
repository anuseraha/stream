"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    description: "10 user maximum, good for individuals and small teams.",
    price: { monthly: 0, annual: 0 },
    features: [
      "Collaborate with up to 10 user",
      "Unlimited tasks",
      "Unlimited projects",
      "Project dashboards",
      "25 GB storage file",
      "Unlimited activity log",
      "Standard AI-powered task automation",
      "Email support",
      "100 Automations per month",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "For teams that require a centralized platform to manage their work.",
    price: { monthly: 29, annual: 25 },
    features: [
      "Everything in Free plan, plus:",
      "Collaborate with up to 200 user",
      "Timeline view",
      "Project dashboards",
      "250 GB storage file",
      "Advanced search",
      "Advanced AI-powered task automation",
      "Integration with popular tools",
      "250 Automations per month",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For big team that need to align departments and teams.",
    price: { monthly: 49, annual: 42 },
    features: [
      "Collaborate with up to 500 user",
      "Advanced reporting",
      "Unlimited projects",
      "Data Shuttle",
      "500 GB storage file",
      "Premium Support",
      "Custom AI-powered task automation",
      "Premium Support",
      "600 Automations per month",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Unlock the Full Potential
          <br />
          of Your Team
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          With flexible pricing plans, you can choose the option that best fits your needs and budget.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn("text-sm", !isAnnual ? "text-foreground font-medium" : "text-muted-foreground")}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={cn("relative w-14 h-7 rounded-full transition-colors", isAnnual ? "bg-primary" : "bg-muted")}
          >
            <span
              className={cn(
                "absolute top-1 w-5 h-5 bg-white rounded-full transition-transform",
                isAnnual ? "translate-x-8" : "translate-x-1",
              )}
            />
          </button>
          <span className={cn("text-sm", isAnnual ? "text-foreground font-medium" : "text-muted-foreground")}>
            Annual
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">-15%</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "bg-card border rounded-2xl p-6 text-left relative",
                plan.popular ? "border-primary shadow-lg" : "border-border",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  US${isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  {plan.price.monthly === 0 ? "free forever" : isAnnual ? "billed annually" : "billed monthly"}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 rounded-full font-medium transition-colors",
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80",
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
