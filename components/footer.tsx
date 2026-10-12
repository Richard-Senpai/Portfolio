import { ArrowUp } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { footerQuote, profile } from '@/lib/portfolio-data'

const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`

const socials = [
  { label: 'X', href: mailHref, Icon: FaXTwitter, external: false },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn, external: true },
  { label: 'Instagram', href: profile.socials.instagram, Icon: FaInstagram, external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-8 md:py-28">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-serif text-4xl italic leading-tight tracking-tight text-balance md:text-6xl">
            &ldquo;{footerQuote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            — {footerQuote.author}
          </figcaption>
        </figure>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-1">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-[color,background-color,transform] duration-300 hover:scale-110 hover:bg-accent-tint hover:text-accent-text"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href="#home"
                aria-label="Back to top"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent-text"
              >
                <ArrowUp className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
