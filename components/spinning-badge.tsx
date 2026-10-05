import { ArrowUpRight } from 'lucide-react'

type SpinningBadgeProps = {
  text: string
}

export function SpinningBadge({ text }: SpinningBadgeProps) {
  const ringText = `${text} • ${text} • `

  return (
    <div
      className="relative flex size-24 items-center justify-center rounded-full bg-background/90 shadow-xl ring-1 ring-border backdrop-blur sm:size-28 md:size-36"
      role="status"
      aria-label={text}
    >
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full" aria-hidden>
        <defs>
          <path id="badge-ring-path" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text
          className="fill-accent font-mono text-[7.6px] font-semibold uppercase"
          textLength={232}
          lengthAdjust="spacing"
        >
          <textPath href="#badge-ring-path" startOffset="0" textLength={232} lengthAdjust="spacing">
            {ringText}
          </textPath>
        </text>
      </svg>

      <span className="relative flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground md:size-11">
        <ArrowUpRight className="size-4 md:size-5" strokeWidth={2.25} />
      </span>
    </div>
  )
}
