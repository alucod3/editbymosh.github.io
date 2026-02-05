import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeBanner } from "@/components/marquee-banner"
import { Portfolio } from "@/components/portfolio"
import { Stats } from "@/components/stats"
import { Pricing } from "@/components/pricing"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Grid background */}
      <div className="bg-grid grid-fade pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      {/* Global VHS noise */}
      <div className="vhs-overlay pointer-events-none fixed inset-0 z-[1] opacity-[0.015]" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeBanner />
        <Portfolio />
        <Stats />
        <Pricing />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
