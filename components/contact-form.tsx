'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

const fieldClass =
  'peer w-full border-0 border-b border-border bg-transparent py-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none md:py-5 md:text-lg aria-[invalid=true]:border-destructive'

export function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please tell me your name.'
    if (!values.email.trim()) next.email = 'Please add an email so I can reply.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'That email doesn’t look right.'
    return next
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    const subject = `${profile.emailSubject} — ${values.name.trim()}`
    const body = [values.message.trim(), '', `— ${values.name.trim()}`, values.email.trim()].join('\n')
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex w-full flex-col gap-2 md:gap-4">
      <div className="flex flex-col">
        <label htmlFor="contact-name" className="sr-only">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="What’s your name?"
          value={values.name}
          onChange={update('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={fieldClass}
        />
        <FieldError id="contact-name-error" message={errors.name} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Where can I reach you?"
          value={values.email}
          onChange={update('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={fieldClass}
        />
        <FieldError id="contact-email-error" message={errors.email} />
      </div>

      <div className="flex flex-col">
        <label htmlFor="contact-message" className="sr-only">
          Project details
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={1}
          placeholder="Tell me a little about what you’re building…"
          value={values.message}
          onChange={update('message')}
          className={cn(fieldClass, 'min-h-[3.5rem] resize-none leading-relaxed field-sizing-content md:min-h-[4rem]')}
        />
      </div>

      <div className="mt-6 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-8">
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent pl-6 pr-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {sent ? 'Opened your mail app' : 'Send message'}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`}
          className="text-base text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline md:text-lg"
        >
          {profile.email}
        </a>
      </div>
    </form>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="pt-2 text-xs text-destructive">
      {message}
    </p>
  )
}
