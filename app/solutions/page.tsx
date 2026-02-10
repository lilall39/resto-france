import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import {
  solutionsHero,
  solutionsIntro,
  solutionsBySegment,
  solutionsCta,
  solutionsMeta,
} from '@/data/solutions';

export const metadata: Metadata = {
  title: solutionsMeta.title,
  description: solutionsMeta.description,
  openGraph: { title: solutionsMeta.title, description: solutionsMeta.description },
  twitter: { card: 'summary_large_image', title: solutionsMeta.title, description: solutionsMeta.description },
};

export default function SolutionsPage() {
  return (
    <>
      <Hero data={solutionsHero} compact />
      <Section data={solutionsIntro} />
      <section className="section-padding bg-muted" aria-labelledby="segments-title">
        <div className="container mx-auto px-4">
          <h2 id="segments-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Par type d&apos;établissement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(['restaurants', 'fast-casual', 'fast-food'] as const).map((anchorId, index) => (
              <section key={anchorId} id={anchorId}>
                <Card data={solutionsBySegment[index]} />
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTA data={solutionsCta} />
    </>
  );
}
