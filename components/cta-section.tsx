import { Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neon/[0.02] to-background" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">
            Ready to{" "}
            <span className="neon-glow text-neon">Level Up</span>{" "}
            Your Content?
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-pretty text-base text-muted-foreground md:text-lg">
          {"DM me your content idea or references. I'm open to discuss anything and I reply quick!"}
        </p>

        <a
          href="https://discord.gg/YOUR_DISCORD"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-2 rounded-full bg-neon px-8 py-4 text-sm font-bold text-background transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.4)]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
          DM Me on Discord
        </a>

        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Sparkles size={14} className="text-neon" />
          I reply fast!
        </p>
      </div>
    </section>
  )
}
