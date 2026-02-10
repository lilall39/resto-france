import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import {
  surMesureHero,
  surMesureProcess,
  surMesureServices,
  surMesureCta,
  surMesureMeta,
} from '@/data/sur-mesure';

export const metadata: Metadata = {
  title: surMesureMeta.title,
  description: surMesureMeta.description,
  openGraph: { title: surMesureMeta.title, description: surMesureMeta.description },
  twitter: { card: 'summary_large_image', title: surMesureMeta.title, description: surMesureMeta.description },
};

export default function SurMesurePage() {
  return (
    <>
      <Hero data={surMesureHero} compact />
      <Section data={surMesureProcess} />
      <section className="section-padding bg-muted" aria-labelledby="services-title">
        <div className="container mx-auto px-4">
          <h2 id="services-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Nos prestations
          </h2>
          <Grid cols={3}>
            {surMesureServices.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
      <CTA data={surMesureCta} variant="secondary" />
    </>
  );
}
