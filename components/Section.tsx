import Image from 'next/image';
import type { SectionData } from '@/data/types';

interface SectionProps {
  data: SectionData;
  /** Inverser layout image à gauche / texte à droite sur desktop */
  reverse?: boolean;
  /** Id pour ancres */
  id?: string;
}

export default function Section({ data, reverse = false, id }: SectionProps) {
  return (
    <section className="section-padding bg-background" id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 gap-10 md:gap-16 items-center ${data.image ? 'lg:grid-cols-2' : ''}`}
        >
          {data.image && (
            <div className={reverse ? 'lg:order-2' : ''}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={data.image}
                  alt={data.imageAlt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
          <div className={reverse ? 'lg:order-1' : ''}>
            <h2 id={id ? `${id}-title` : undefined} className="font-display text-2xl md:text-3xl text-text">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="mt-2 text-primary font-body font-medium">{data.subtitle}</p>
            )}
            <div className="mt-4 prose prose-text max-w-none text-text/90 font-body">
              <p className="whitespace-pre-line">{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
