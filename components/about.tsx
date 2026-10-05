import Image from 'next/image'
import { about } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { Section } from './section'

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            {about.heading}
          </h2>
          {about.paragraphs.length > 0 && (
            <div className="mt-8 flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <p className="eyebrow mb-4">Recognition</p>
          <ul className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:-mx-8 md:px-8 lg:mx-0 lg:px-0">
            {about.awards.map((award) => (
              <li
                key={`${award.title}-${award.year}`}
                className="w-56 shrink-0 snap-start rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-accent/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={award.image} alt="" fill sizes="224px" className="object-cover" />
                </div>
                <div className="p-2 pt-4">
                  <p className="font-medium leading-snug">{award.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{award.org}</p>
                  <p className="mt-3 font-mono text-xs text-accent">{award.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
