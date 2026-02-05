"use client"

import { useEffect, useState, useRef } from "react"

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 200, suffix: "+", label: "Videos Edited" },
  { value: 500, suffix: "+", label: "Thumbnails Created" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-neon md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border bg-card/50 px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
