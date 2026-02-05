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
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Portfolio />
      <Stats />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  )
}
