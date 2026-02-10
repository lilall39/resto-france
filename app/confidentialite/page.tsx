import type { Metadata } from 'next';
import { siteName } from '@/data/common';

export const metadata: Metadata = {
  title: `Confidentialité – ${siteName}`,
  description: 'Politique de confidentialité et protection des données.',
};

export default function ConfidentialitePage() {
  return (
    <article className="section-padding bg-background container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-2xl md:text-3xl text-text">Politique de confidentialité</h1>
      <p className="mt-4 font-body text-text/90">
        Page en cours de rédaction. La politique de confidentialité sera disponible prochainement.
      </p>
    </article>
  );
}
