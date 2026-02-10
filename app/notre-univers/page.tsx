import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import { universHero, universStory, universValues, universMeta } from '@/data/univers';
import { solutionsCta } from '@/data/solutions';

export const metadata: Metadata = {
  title: universMeta.title,
  description: universMeta.description,
  openGraph: { title: universMeta.title, description: universMeta.description },
  twitter: { card: 'summary_large_image', title: universMeta.title, description: universMeta.description },
};

export default function NotreUniversPage() {
  return (
    <>
      <div className="max-h-[35vh] md:max-h-[42vh] overflow-hidden">
        <Hero data={universHero} compact />
      </div>
      <div className="pb-6 md:pb-8">
        <Section data={universStory} />
      </div>
      <section className="section-padding bg-muted -mt-2 md:-mt-4 pt-8 md:pt-10 pb-10 md:pb-16" aria-labelledby="values-title">
        <div className="container mx-auto px-4">
          <h2 id="values-title" className="font-display text-3xl md:text-4xl text-text text-center mb-10">
            Nos valeurs
          </h2>
          <Grid cols={3}>
            {universValues.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
      <CTA data={solutionsCta} variant="secondary" />
    </>
  );
}
