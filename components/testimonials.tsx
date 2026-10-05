'use client'

import { useState } from 'react'
import { testimonials } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Section } from './section'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const item = testimonials.items[active]

  return (
    <Section id="testimonials" eyebrow="Testimonials">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Here&apos;s what people are saying.
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {testimonials.stats.map((stat) => (
              <div key={stat.label} className="bg-surface p-6">
                <dd className="text-4xl font-semibold tracking-tight text-accent md:text-5xl">{stat.value}</dd>
                <dt className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={100}>
          <figure
            key={active}
            className="animate-rise relative rounded-2xl border border-border bg-surface p-8 md:p-12"
          >
            <span aria-hidden className="absolute left-8 top-4 font-serif text-[120px] leading-none text-accent md:left-12">
              &ldquo;
            </span>
            <blockquote className="relative pt-14 text-pretty text-xl leading-relaxed md:text-2xl">{item.quote}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent-tint font-mono text-xs font-semibold text-accent">
                {item.initials}
              </span>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center gap-3" role="tablist" aria-label="Choose a testimonial">
            {testimonials.items.map((t, i) => (
              <button
                key={t.role}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial from ${t.role}`}
                onClick={() => setActive(i)}
                className={cn(
                  'flex size-12 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-all',
                  i === active
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent',
                )}
              >
                {t.initials}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
