import Link from 'next/link';
import Image from 'next/image';
import type { HeroData } from '@/data/types';

interface HeroProps {
  data: HeroData;
  /** Optionnel : hauteur réduite pour pages internes */
  compact?: boolean;
}

export default function Hero({ data, compact = false }: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-muted ${compact ? 'min-h-[40vh] md:min-h-[50vh]' : 'min-h-[70vh] md:min-h-[85vh]'}`}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-text/50" aria-hidden />
      </div>

      <div className={`relative container mx-auto px-4 flex flex-col justify-center py-16 md:py-24 ${compact ? 'min-h-[40vh] md:min-h-[50vh]' : 'min-h-[70vh] md:min-h-[85vh]'}`}>
        <h1 id="hero-title" className="font-display text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-lg max-w-2xl">
          {data.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/95 max-w-xl drop-shadow">
          {data.subtitle}
        </p>
        <div className="mt-8">
          <Link
            href={data.ctaHref}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-body font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {data.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
