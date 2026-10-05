import Image from 'next/image'
import { SpinningBadge } from '@/components/spinning-badge'

type BlobPortraitProps = {
  src: string
  alt: string
}

export function BlobPortrait({ src, alt }: BlobPortraitProps) {
  return (
    <div className="relative mx-auto w-[78%] max-w-[420px] md:w-full md:max-w-[560px]">
      <div className="blob-shape animate-blob-shadow absolute inset-0 translate-x-3 translate-y-4 bg-accent/25 blur-2xl" aria-hidden />

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
