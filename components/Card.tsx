import Link from 'next/link';
import Image from 'next/image';
import type { CardData } from '@/data/types';

interface CardProps {
  data: CardData;
  /** Afficher le bouton même si buttonText n'est pas fourni (lien "En savoir plus") */
  showButton?: boolean;
}

export default function Card({ data, showButton = false }: CardProps) {
  const hasButton = data.buttonText || showButton;
  const href = data.buttonHref || '#';

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-muted hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-text">{data.title}</h3>
        <p className="mt-2 text-text/80 font-body text-sm flex-1">{data.text}</p>
        {hasButton && (
          <div className="mt-4">
            <Link
              href={href}
              className="inline-flex items-center font-body font-medium text-primary hover:text-primary/80 transition-colors min-h-[44px]"
            >
              {data.buttonText || 'En savoir plus'}
              <span className="ml-1" aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
