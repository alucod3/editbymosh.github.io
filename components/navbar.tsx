"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-1 font-heading text-lg font-bold tracking-tight text-foreground">
          edit<span className="text-neon">by</span>mosh
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-neon"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://discord.gg/YOUR_DISCORD"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-neon px-5 py-2 text-sm font-semibold text-background transition-all hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] md:inline-flex"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-neon"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/YOUR_DISCORD"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-neon px-5 py-2.5 text-center text-sm font-semibold text-background transition-all hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
