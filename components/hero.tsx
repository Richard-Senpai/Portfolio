import { ArrowDown, Download } from 'lucide-react'
import { BlobPortrait } from '@/components/blob-portrait'
import { Typewriter } from '@/components/typewriter'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 md:pt-48">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-8">
        <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-10 lg:gap-16">
          <div className="animate-rise order-first w-full md:order-last md:w-[48%] md:shrink-0" style={{ animationDelay: '80ms' }}>
            <BlobPortrait src={profile.avatar} alt={`Portrait of ${profile.name}`} />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span
              className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available for Work
            </span>

            <h1
              className="animate-rise mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ animationDelay: '160ms' }}
            >
              Hey, I&apos;m {profile.name} —{' '}
              <Typewriter phrases={profile.roles} className="text-muted-foreground" />
            </h1>

            <p
              className="animate-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: '240ms' }}
            >
              {profile.tagline}
            </p>

            <div
              className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start"
              style={{ animationDelay: '320ms' }}
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Let&apos;s talk
                <ArrowDown className="size-4" />
              </a>
              <a
                href={profile.cvUrl}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-28 md:mt-40">
          <p className="text-balance text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            {profile.statement}
          </p>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-surface p-8">
                <dd className="text-5xl font-semibold tracking-tight text-accent md:text-6xl">{stat.value}</dd>
                <dt className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16 border-y border-border py-6 md:mt-24">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="animate-marquee flex w-max shrink-0 items-center" aria-label="Past clients">
            {[...profile.clients, ...profile.clients].map((client, i) => (
              <li
                key={`${client}-${i}`}
                className="px-10 text-xl font-semibold tracking-tight text-muted-foreground/70 md:px-14 md:text-2xl"
                aria-hidden={i >= profile.clients.length}
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
