import type { Metadata } from 'next';
import { siteName } from '@/data/common';

export const metadata: Metadata = {
  title: `CGV – ${siteName}`,
  description: 'Conditions générales de vente.',
};

export default function CGVPage() {
  return (
    <article className="section-padding bg-background container mx-auto px-4 max-w-3xl">
      <h1 className="font-display text-2xl md:text-3xl text-text">Conditions générales de vente</h1>
      <p className="mt-4 font-body text-text/90">
        Page en cours de rédaction. Les CGV seront disponibles prochainement.
      </p>
    </article>
  );
}
