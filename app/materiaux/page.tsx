import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import {
  materiauxHero,
  materiauxIntro,
  materiauxCollections,
  materiauxCta,
  materiauxMeta,
} from '@/data/materiaux';

export const metadata: Metadata = {
  title: materiauxMeta.title,
  description: materiauxMeta.description,
  openGraph: { title: materiauxMeta.title, description: materiauxMeta.description },
  twitter: { card: 'summary_large_image', title: materiauxMeta.title, description: materiauxMeta.description },
};

export default function MateriauxPage() {
  return (
    <>
      <Hero data={materiauxHero} compact />
      <Section data={materiauxIntro} id="collections" />
      <section className="section-padding bg-muted" aria-labelledby="collections-title">
        <div className="container mx-auto px-4">
          <h2 id="collections-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Nos collections
          </h2>
          <Grid cols={3}>
            {materiauxCollections.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
      <CTA data={materiauxCta} />
    </>
  );
}
