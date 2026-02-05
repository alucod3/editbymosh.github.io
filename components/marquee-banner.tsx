export function MarqueeBanner() {
  const items = [
    "VIDEO EDITING",
    "THUMBNAILS",
    "SHORT-FORM",
    "LONG-FORM",
    "MOTION GRAPHICS",
    "COLOR GRADING",
    "SOUND DESIGN",
    "STORYTELLING",
  ]

  return (
    <div className="section-scanline relative overflow-hidden border-y border-neon/[0.06] py-4">
      <div className="flex animate-marquee gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
          </span>
        ))}
      </div>
    </div>
  )
}
