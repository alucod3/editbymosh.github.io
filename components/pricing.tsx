"use client"

import React from "react"

import { Check, ImageIcon, Smartphone, Film, Gift } from "lucide-react"

interface PricingTier {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  price: string
  priceMax: string
  unit: string
  features: string[]
  popular: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Thumbnails",
    icon: ImageIcon,
    price: "$5",
    priceMax: "$20",
    unit: "Per thumbnail",
    features: [
      "Click-focused designs that stand out",
      "24hr typical turnaround",
      "Unlimited revisions",
    ],
    popular: false,
  },
  {
    name: "Short-Form",
    icon: Smartphone,
    price: "$10",
    priceMax: "$30",
    unit: "Per video",
    features: [
      "Scroll-stopping hooks & editing",
      "Platform-ready (TikTok, Reels, Shorts)",
      "Fast turnaround & revisions",
    ],
    popular: true,
  },
  {
    name: "Long-Form",
    icon: Film,
    price: "$25",
    priceMax: "$60",
    unit: "Per video",
    features: [
      "Full cinematic editing & storytelling",
      "Custom style tailored to you",
      "Flexible deadlines & revisions",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/3 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
            Services & Pricing
          </span>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Transparent <span className="text-neon">Pricing</span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
            High-quality work with clear pricing. No hidden fees. Unlimited revisions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.08)] ${
                tier.popular
                  ? "border-neon/40 bg-card neon-border-glow"
                  : "border-border bg-card hover:border-neon/20"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-neon px-4 py-1 text-xs font-bold uppercase text-background">
                    Popular
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="mb-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary">
                  <tier.icon size={22} className="text-neon" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {tier.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-lg text-muted-foreground">- {tier.priceMax}</span>
                </div>
                <span className="text-sm text-muted-foreground">{tier.unit}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-neon" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Gift size={16} className="mt-0.5 shrink-0 text-neon" />
                  <span className="text-sm font-medium text-neon">FREE sample available</span>
                </li>
              </ul>

              {/* CTA */}
              <a
                href="https://discord.gg/YOUR_DISCORD"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-all ${
                  tier.popular
                    ? "bg-neon text-background hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
                    : "border border-border bg-secondary text-foreground hover:border-neon/30"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="h-4 w-4 text-neon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Payment via <span className="font-medium text-foreground">Discord</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Open to short-term or long-term work. Unlimited revisions.
          </p>
        </div>
      </div>
    </section>
  )
}
