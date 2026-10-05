'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const INTERACTIVE_SELECTOR = 'a, button, img, [role="button"], input, textarea, select, label, summary'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (hover: hover)')
    const update = () => setEnabled(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove('has-custom-cursor')
      return
    }

    document.documentElement.classList.add('has-custom-cursor')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }
    let frame = 0

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null
      setHovering(Boolean(el?.closest(INTERACTIVE_SELECTOR)))
    }

    const tick = () => {
      current.x += (target.x - current.x) * 0.16
      current.y += (target.y - current.y) * 0.16
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      }
      frame = window.requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      window.cancelAnimationFrame(frame)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-[100] rounded-full transition-[width,height,background-color,border-color,opacity] duration-300 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        hovering ? 'size-14 border-2 border-accent bg-accent/10' : 'size-3 border-2 border-accent/80 bg-accent/80',
      )}
    />
  )
}
