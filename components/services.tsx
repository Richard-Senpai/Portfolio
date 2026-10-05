'use client'

import { Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { services } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Section } from './section'

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <Section id="services" eyebrow="Services">
      <Reveal>
        <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
          What I can do for your brand.
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12 divide-y divide-border border-y border-border">
        {services.map((service, i) => {
          const open = i === active
          const panelId = `service-panel-${i}`
          return (
            <div key={service.title}>
              <h3>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-9"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                    <span
                      className={cn(
                        'text-3xl font-semibold tracking-tight transition-colors md:text-5xl',
                        open ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground',
                      )}
                    >
                      {service.title}
                    </span>
                  </span>
                  <span
                    className={cn(
                      'flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                      open
                        ? 'rotate-45 border-accent bg-accent text-accent-foreground'
                        : 'border-border text-muted-foreground group-hover:border-accent group-hover:text-accent',
                    )}
                  >
                    <Plus className="size-5" />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-label={`${service.title} details`}
                className={cn(
                  'grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12 md:pb-14">
                    <div className="flex flex-col gap-3">
                      {service.images.map((img, j) => (
                        <div
                          key={img}
                          className={cn(
                            'relative aspect-[16/7] overflow-hidden rounded-2xl border border-border',
                            j === 1 && 'md:ml-10',
                          )}
                        >
                          <Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover object-top" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center">
                      <ul className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Reveal>
    </Section>
  )
}
