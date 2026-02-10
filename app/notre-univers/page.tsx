import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import { universHero, universStory, universValues, universMeta } from '@/data/univers';

export const metadata: Metadata = {
  title: universMeta.title,
  description: universMeta.description,
  openGraph: { title: universMeta.title, description: universMeta.description },
  twitter: { card: 'summary_large_image', title: universMeta.title, description: universMeta.description },
};

export default function NotreUniversPage() {
  return (
    <>
      <Hero data={universHero} compact />
      <Section data={universStory} />
      <section className="section-padding bg-muted" aria-labelledby="values-title">
        <div className="container mx-auto px-4">
          <h2 id="values-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Nos valeurs
          </h2>
          <Grid cols={3}>
            {universValues.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}
