import { Code2, Layers, Palette, PenTool, ShoppingBag, Zap } from 'lucide-react'
import { techStack } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { Section } from './section'

const icons = [PenTool, Zap, ShoppingBag, Palette, Code2, Layers]

export function TechStack() {
  return (
    <Section id="tech" eyebrow="Tech Stack">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:sticky lg:top-32">
            See how my expertise with these tools drives better results.
          </h2>
        </Reveal>

        <ul className="flex flex-col divide-y divide-border">
          {techStack.map((tool, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal as="li" key={tool.name} delay={i * 60} className="py-6 first:pt-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-semibold tracking-tight md:text-lg">{tool.name}</h3>
                      <span className="font-mono text-sm text-accent">{tool.level}%</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
                    <div
                      role="progressbar"
                      aria-valuenow={tool.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${tool.name} proficiency`}
                      className="mt-4 h-1 w-full overflow-hidden rounded-full bg-border"
                    >
                      <div className="h-full rounded-full bg-accent" style={{ width: `${tool.level}%` }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
