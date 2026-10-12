import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-28 py-16 md:py-32 lg:py-40', className)}>
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-8">
        {eyebrow && (
          <p className="eyebrow mb-8 flex items-center gap-3 md:mb-12">
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-[#d7ff7b] to-[#41e324]" />
            <span aria-hidden className="font-mono text-[11px] font-bold text-dev-blue-text dark:text-dev-blue">//</span>
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
