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
              From Overwhelmed to <span className="text-primary">Overachiever</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Streamline tasks, boost productivity, and enhance collaboration with our AI-powered task management
              platform, designed to help teams work smarter, not harder, and achieve their goals with ease and
              efficiency.
            </p>
            <p className="text-muted-foreground mb-8">
              Get more done in less time, reduce stress, and increase job satisfaction with our AI-driven task
              management.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Make a Task
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Productivity Score</h3>
              <p className="text-xs text-muted-foreground">Represents your current productivity score</p>
            </div>

            <div className="flex items-end justify-center py-8">
              <span className="text-8xl font-bold text-primary">
                <AnimatedNumber target={96} />
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
              <span>Productivity Score</span>
              <span>Updated Dec 25, 2035</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
