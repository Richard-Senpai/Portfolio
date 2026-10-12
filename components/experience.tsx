'use client'

import { useEffect, useRef, useState } from 'react'
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import { timeline } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Section } from './section'

const icons = [Sparkles, Briefcase, GraduationCap]

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState<boolean[]>(() => timeline.map(() => false))

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setRevealed(timeline.map(() => true))
      setProgress(1)
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = list.getBoundingClientRect()
      const focusLine = window.innerHeight * 0.55
      const travelled = focusLine - rect.top
      const ratio = Math.min(1, Math.max(0, travelled / rect.height))
      setProgress(ratio)

      let nextActive = 0
      itemRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= focusLine) nextActive = i
      })
      setActiveIndex(nextActive)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = itemRefs.current.indexOf(entry.target as HTMLLIElement)
          if (index === -1) return
          setRevealed((prev) => (prev[index] ? prev : prev.map((v, i) => (i === index ? true : v))))
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  return (
    <Section id="education" eyebrow="Education & Experience">
      <Reveal>
        <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
          Where I&apos;ve been and what I&apos;ve learned along the way.
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute bottom-0 left-[5px] top-0 w-px bg-border md:left-[calc(180px+2rem+23px)]"
        >
          <div
            className="w-full origin-top bg-accent transition-[height] duration-150 ease-out motion-reduce:transition-none"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        <ol ref={listRef} className="flex flex-col">
          {timeline.map((item, i) => {
            const Icon = icons[i % icons.length]
            const isLast = i === timeline.length - 1
            const isActive = i === activeIndex
            const isPast = i < activeIndex
            const isVisible = revealed[i]

            return (
              <li
                key={item.title}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                style={{ transitionDelay: isVisible ? `${i * 60}ms` : '0ms' }}
                className={cn(
                  'relative grid gap-4 pl-8 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:grid-cols-[180px_48px_1fr] md:gap-8 md:pl-0',
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
                )}
              >
                <p
                  className={cn(
                    'font-mono text-sm transition-colors duration-500 md:pt-3 md:text-right',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {item.range}
                </p>

                <span
                  aria-hidden
                  className={cn(
                    'absolute left-0 top-1.5 size-[11px] rounded-full border-2 transition-[background-color,border-color,transform] duration-500 md:hidden',
                    isActive || isPast ? 'border-accent bg-accent' : 'border-border bg-background',
                    isActive && 'scale-125 shadow-[0_0_0_4px] shadow-accent/20',
                  )}
                />

                <div className="relative hidden md:flex md:flex-col md:items-center">
                  <span
                    className={cn(
                      'relative z-10 flex size-12 items-center justify-center rounded-full border bg-surface transition-[border-color,box-shadow,transform] duration-500',
                      isActive ? 'scale-105 border-accent shadow-[0_0_0_6px] shadow-accent/15' : isPast ? 'border-accent/60' : 'border-border',
                    )}
                  >
                    <Icon className={cn('size-4 transition-colors duration-500', isActive || isPast ? 'text-accent-text' : 'text-muted-foreground')} />
                  </span>
                </div>

                <div className={isLast ? 'pb-0' : 'pb-12 md:pb-16'}>
                  <div
                    className={cn(
                      'rounded-2xl border bg-surface p-6 transition-[border-color,box-shadow,transform] duration-500 md:p-8',
                      isActive ? 'border-accent/60 shadow-[0_24px_60px_-40px] shadow-accent/40' : 'border-border hover:border-accent/40',
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{item.title}</h3>
                        <p className="mt-1 text-sm font-medium text-accent-text">{item.org}</p>
                      </div>
                      <Icon className="size-5 shrink-0 text-muted-foreground md:hidden" />
                    </div>
                    <p
                      className={cn(
                        'mt-4 text-pretty leading-relaxed transition-colors duration-500',
                        isActive ? 'text-foreground/80' : 'text-muted-foreground',
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
