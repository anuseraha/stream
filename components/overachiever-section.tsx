"use client"

import { useEffect, useState } from "react"

function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}</span>
}

export function OverachieverSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              
Seamlessly Integrate Forms,<span className="text-primary">Payments & CTWA </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
             Run Facebook & Instagram ads that drive traffic to WhatsApp. Boost lead generation by 5X and increase conversions 2-3X instantly!
             Run ads directly from Connect Stream, intelligently segment your leads, and create chatbot flows to automate your entire process!
            </p>
            <p className="text-muted-foreground mb-8">
              Experience the Newest WhatsApp Features First with Connect Stream!
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Explore
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">📊 WhatsApp API Metrics</h3>
              <p className="text-xs text-muted-foreground">Tracks the real-time success rate of WhatsApp Business API message delivery, reads, and failures.</p>
            </div>

            <div className="flex items-end justify-center py-8">
              <span className="text-8xl font-bold text-primary">
                <AnimatedNumber target={96} />
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
              <span>Delivery Score</span>
              <span>Updated Dec 25, 2035</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
