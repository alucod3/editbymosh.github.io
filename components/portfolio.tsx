"use client"

import React from "react"

import { useState } from "react"
import { Play, ImageIcon, Film, Smartphone, ExternalLink } from "lucide-react"
import Image from "next/image"

type Category = "short-form" | "long-form" | "thumbnails"

interface PortfolioItem {
  id: number
  title: string
  category: Category
  niche: string
  image: string
  youtubeUrl?: string
}

const categories: { key: Category; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { key: "short-form", label: "Short-Form", icon: Smartphone },
  { key: "long-form", label: "Long-Form", icon: Film },
  { key: "thumbnails", label: "Thumbnails", icon: ImageIcon },
]

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Viral Short Edit", category: "short-form", niche: "Lifestyle", image: "/portfolio/short-1.jpg", youtubeUrl: "" },
  { id: 2, title: "Gaming Montage", category: "short-form", niche: "Gaming", image: "/portfolio/short-2.jpg", youtubeUrl: "" },
  { id: 3, title: "Product Showcase", category: "short-form", niche: "E-Commerce", image: "/portfolio/short-3.jpg", youtubeUrl: "" },
  { id: 4, title: "Documentary Style", category: "long-form", niche: "Education", image: "/portfolio/long-1.jpg", youtubeUrl: "" },
  { id: 5, title: "Vlog Edit", category: "long-form", niche: "Travel", image: "/portfolio/long-2.jpg", youtubeUrl: "" },
  { id: 6, title: "Tutorial Video", category: "long-form", niche: "Tech", image: "/portfolio/long-3.jpg", youtubeUrl: "" },
  { id: 7, title: "YouTube Thumbnail", category: "thumbnails", niche: "YouTube", image: "/portfolio/thumb-1.jpg" },
  { id: 8, title: "Podcast Cover", category: "thumbnails", niche: "Podcast", image: "/portfolio/thumb-2.jpg" },
  { id: 9, title: "Course Thumbnail", category: "thumbnails", niche: "Education", image: "/portfolio/thumb-3.jpg" },
]

const categoryDescriptions: Record<Category, string> = {
  "short-form": "High-energy, fast-paced edits optimized for TikTok, YouTube Shorts & Reels. Clean cuts, perfect pacing, maximum retention.",
  "long-form": "Cinematic storytelling and professional editing for YouTube videos, documentaries, and vlogs. Seamless flow and visual impact.",
  thumbnails: "Click-focused designs that stand out in the feed. Bold typography, compelling compositions, and scroll-stopping visuals.",
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("short-form")

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            My <span className="text-neon">Work</span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-neon text-background shadow-[0_0_15px_rgba(200,255,0,0.3)]"
                  : "glass-btn text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const hasYouTube = item.youtubeUrl && item.youtubeUrl.trim() !== ""
            const Wrapper = hasYouTube ? "a" : "div"
            const wrapperProps = hasYouTube
              ? {
                  href: item.youtubeUrl,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {}

            return (
              <Wrapper
                key={item.id}
                {...wrapperProps}
                className="glass-card group relative overflow-hidden rounded-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.category === "thumbnails" ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon bg-neon/10">
                        <ImageIcon size={20} className="text-neon" />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neon bg-neon/10">
                        <Play size={20} className="text-neon" fill="currentColor" />
                      </div>
                    )}
                  </div>

                  {/* YouTube badge */}
                  {hasYouTube && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-neon backdrop-blur-sm">
                      <ExternalLink size={10} />
                      YouTube
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                    {item.niche}
                  </span>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
