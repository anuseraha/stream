"use client"

import { useEffect, useState, useRef } from "react"

function AnimatedStat({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
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
  }, [target, isVisible])

  return (
    <div ref={ref}>
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {count.toLocaleString()}
        {suffix}
      </span>
    </div>
  )
}

const stats = [
  { value: 100, suffix: "+", label: "Customers on WhatsApp" },
  { value: 45-50, suffix: "+", label: "Better Conversions" },
  { value: 90, suffix: "%", label: "Faster Than Email" },
  { value: 80, suffix: "%", label: "Businesses Rely on It" },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why WhatsApp?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          WhatsApp is the ultimate platform for actionable notifications and customer support!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedStat target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
