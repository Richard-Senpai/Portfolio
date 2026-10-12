import Image from 'next/image'
import { SpinningBadge } from '@/components/spinning-badge'

type BlobPortraitProps = {
  src: string
  alt: string
}

export function BlobPortrait({ src, alt }: BlobPortraitProps) {
  return (
    <div className="relative mx-auto w-[78%] max-w-[420px] md:w-full md:max-w-[560px]">
      {/* Soft blurred glow mixing green with a hint of blue and pink at subtle low opacity */}
      <div
        className="blob-shape animate-blob-shadow absolute inset-0 translate-x-3 translate-y-4 blur-2xl opacity-60 dark:opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, rgba(215, 255, 123, 0.35) 0%, rgba(65, 227, 36, 0.25) 45%, rgba(77, 97, 244, 0.15) 75%, rgba(205, 136, 255, 0.12) 100%)',
        }}
        aria-hidden
      />
      <div
        className="blob-shape absolute -inset-2 blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(77, 97, 244, 0.3) 0%, rgba(205, 136, 255, 0.25) 50%, rgba(65, 227, 36, 0.2) 100%)',
        }}
        aria-hidden
      />

      <div className="blob-shape animate-blob relative aspect-[4/5] w-full overflow-hidden bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 768px) 45vw, 80vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" aria-hidden />
      </div>

      <div className="absolute -bottom-3 right-1 sm:-bottom-4 sm:right-3 md:bottom-2 md:right-4">
        <SpinningBadge text="AVAILABLE FOR WORK" />
      </div>
    </div>
  )
}
