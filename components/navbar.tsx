'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 md:top-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-[1240px] items-center justify-between rounded-full border border-border bg-background/80 pl-5 pr-2 shadow-[0_1px_0_0_var(--border)] backdrop-blur-xl"
      >
        <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <Image
            src={profile.logo}
            alt={`${profile.name} logo`}
            width={36}
            height={36}
            className="size-9 object-contain"
            priority
          />
          <span>{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-sm transition-colors hover:text-accent',
                  active === link.href ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    'absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300',
                    active === link.href ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex size-9 items-center justify-center rounded-full text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-3xl border border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0',
        )}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-2xl px-4 py-3 text-lg font-medium transition-colors hover:bg-accent-tint hover:text-accent',
                  active === link.href ? 'text-accent' : 'text-foreground',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
