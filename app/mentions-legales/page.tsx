import type { Metadata } from 'next';
import { siteName } from '@/data/common';

export const metadata: Metadata = {
  title: `Mentions légales – ${siteName}`,
  description: 'Mentions légales et informations juridiques.',
};

export default function MentionsLegalesPage() {
  return (
    <article className="section-padding bg-background container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-2xl md:text-3xl text-text">Mentions légales</h1>
      <p className="mt-4 font-body text-text/90">
        Page en cours de rédaction. Les mentions légales seront disponibles prochainement.
      </p>
    </article>
  );
}
