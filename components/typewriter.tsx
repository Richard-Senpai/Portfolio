'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type TypewriterProps = {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  holdDuration?: number
  className?: string
}

export function Typewriter({
  phrases,
  typingSpeed = 85,
  deletingSpeed = 45,
  holdDuration = 1800,
  className,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let delay = isDeleting ? deletingSpeed : typingSpeed

    if (!isDeleting && text === current) {
      delay = holdDuration
    } else if (isDeleting && text === '') {
      delay = 400
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true)
        return
      }
      if (isDeleting && text === '') {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
        return
      }
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, holdDuration])

  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <span className={cn('relative block', className)} aria-live="polite" aria-atomic="true">
      <span className="sr-only">{phrases.join(', ')}</span>
      {/* Invisible sizer keeps the heading height stable while phrases type and delete */}
      <span aria-hidden className="invisible">
        {longest}
        <span className="ml-1 inline-block w-[3px] md:w-1" />
      </span>
      <span aria-hidden className="absolute inset-0">
        {text}
        <span className="animate-cursor-blink ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-sm bg-accent align-baseline md:w-1" />
      </span>
    </span>
  )
}
