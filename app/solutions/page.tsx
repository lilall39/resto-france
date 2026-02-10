import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
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
      <Section data={solutionsIntro} id="restaurants" />
      <section className="section-padding bg-muted" aria-labelledby="segments-title">
        <div className="container mx-auto px-4">
          <h2 id="segments-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Par type d&apos;établissement
          </h2>
          <Grid cols={3}>
            {solutionsBySegment.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
      <CTA data={solutionsCta} />
    </>
  );
}
