'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Section } from './section'

const pad = (n: number) => String(n).padStart(2, '0')

export function Work() {
  const [index, setIndex] = useState(0)
  const total = projects.length
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const project = projects[index]

  return (
    <Section id="work" eyebrow="Work Highlights">
      <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
          Selected projects that shipped and performed.
        </h2>
        <div className="flex items-center gap-3">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-foreground">{pad(index + 1)}</span> / {pad(total)}
          </p>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent-text"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent-text"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <article
          key={project.title}
          className="animate-rise overflow-hidden rounded-2xl border border-border bg-surface"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${total}`}
        >
          <div className="relative aspect-video w-full overflow-hidden border-b border-border">
            <Image
              src={project.image}
              alt={`Screenshot of the ${project.title} website`}
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-top"
              priority={index === 0}
            />
            <span className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-xl border border-border bg-background/90 font-semibold backdrop-blur md:left-6 md:top-6">
              {project.title.charAt(0)}
            </span>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
                {project.description}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <dt className="eyebrow">Year</dt>
                  <dd className="mt-2 font-mono text-sm">{project.year}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-2 text-sm">{project.role}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Type</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => {
                      const tagStyle =
                        tag === 'Full Custom Web Build'
                          ? 'bg-dev-blue-tint text-dev-blue-text border-dev-blue/30'
                          : tag === 'Complete Brand Identity'
                            ? 'bg-dev-pink-tint text-dev-pink-text border-dev-pink/30'
                            : 'bg-accent-tint text-accent-text border-accent/30'
                      return (
                        <span
                          key={tag}
                          className={cn(
                            'rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
                            tagStyle,
                          )}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Platform</dt>
                  <dd className="mt-2 text-sm">{project.platform}</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-start md:items-end">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#d7ff7b] to-[#41e324] px-6 text-sm font-semibold text-[#0A0A0A] shadow-sm transition-all hover:brightness-105 hover:shadow-[0_0_24px_-4px_rgba(65,227,36,0.4)]"
              >
                Let&apos;s talk
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </article>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Project slides">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${p.title}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-gradient-to-r from-[#d7ff7b] to-[#41e324]' : 'w-1.5 bg-border hover:bg-muted-foreground',
              )}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
