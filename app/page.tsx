import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import { homeHero, homeIntro, homeCategories, homeCta, homeMeta } from '@/data/home';

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  openGraph: { title: homeMeta.title, description: homeMeta.description },
  twitter: { card: 'summary_large_image', title: homeMeta.title, description: homeMeta.description },
};

export default function HomePage() {
  return (
    <>
      <Hero data={homeHero} />
      <Section data={homeIntro} />
      <section className="section-padding bg-muted" aria-labelledby="categories-title">
        <div className="container mx-auto px-4">
          <h2 id="categories-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Nos univers
          </h2>
          <Grid cols={3}>
            {homeCategories.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
      <CTA data={homeCta} variant="secondary" />
    </>
  );
}
