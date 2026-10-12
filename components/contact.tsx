import { FaWhatsapp } from 'react-icons/fa6'
import { profile } from '@/lib/portfolio-data'
import { ContactForm } from './contact-form'
import { Reveal } from './reveal'
import { Section } from './section'

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal className="flex flex-col items-start gap-8">
          <h2 className="max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
            Have a project in mind? Let&apos;s make it something people remember.
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Drop a few details in the form, or reach me directly. I usually reply within one business day.
          </p>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent-text"
          >
            <span className="flex size-11 items-center justify-center rounded-full border border-accent text-accent-text transition-[transform,background-color,color] duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground">
              <FaWhatsapp className="size-5" aria-hidden />
            </span>
            Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:pt-2">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
