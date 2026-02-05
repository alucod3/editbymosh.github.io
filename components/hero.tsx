"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Zap, Clock, MessageCircle } from "lucide-react"

const roles = ["Video Editor", "Thumbnail Designer", "Motion Artist", "Content Creator"]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      </div>

      <div
        className={`relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Availability Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse-neon rounded-full bg-neon" />
          <span className="text-xs font-medium text-neon">Available for New Projects</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">
            {"I Craft "}
            <span className="neon-glow text-neon">{roles[roleIndex]}</span>
            {" Content"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          I create{" "}
          <span className="font-medium text-foreground">scroll-stopping thumbnails</span>,{" "}
          <span className="font-medium text-foreground">cinematic long-form edits</span>, and{" "}
          <span className="font-medium text-foreground">viral short-form content</span> {" "}
          with clean, professional editing and impactful storytelling.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: Zap, label: "Fast Turnaround" },
            { icon: MessageCircle, label: "Quick Replies" },
            { icon: Clock, label: "FREE Samples" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2"
            >
              <badge.icon size={14} className="text-neon" />
              <span className="text-xs font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://discord.gg/YOUR_DISCORD"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-bold text-background transition-all hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            DM Me on Discord
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-neon/30 hover:bg-secondary"
          >
            View My Work
            <ArrowDown size={14} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-float">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
