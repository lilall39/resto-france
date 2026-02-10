import Link from 'next/link';
import type { CTAData } from '@/data/types';

interface CTAProps {
  data: CTAData;
  /** Fond primary (accent) ou secondary (sombre) */
  variant?: 'primary' | 'secondary';
}

export default function CTA({ data, variant = 'primary' }: CTAProps) {
  const isSecondary = variant === 'secondary';
  const bgClass = isSecondary ? 'bg-secondary' : 'bg-primary';
  const textClass = 'text-white';

  return (
    <section className={`section-padding ${bgClass} ${textClass}`} aria-labelledby="cta-title">
      <div className="container mx-auto px-4 text-center">
        <h2 id="cta-title" className="font-display text-2xl md:text-3xl">
          {data.title}
        </h2>
        <p className="mt-3 max-w-xl mx-auto opacity-95 font-body">
          {data.description}
        </p>
        <div className="mt-8">
          <Link
            href={data.buttonHref}
            className="inline-block bg-white text-primary hover:bg-white/95 font-body font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center mx-auto"
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
