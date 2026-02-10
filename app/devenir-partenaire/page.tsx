import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import {
  partenaireHero,
  partenaireIntro,
  partenaireBenefits,
  partenaireCta,
  partenaireMeta,
} from '@/data/partenaire';

export const metadata: Metadata = {
  title: partenaireMeta.title,
  description: partenaireMeta.description,
  openGraph: { title: partenaireMeta.title, description: partenaireMeta.description },
  twitter: { card: 'summary_large_image', title: partenaireMeta.title, description: partenaireMeta.description },
};

export default function DevenirPartenairePage() {
  return (
    <>
      <div className="max-h-[35vh] md:max-h-[42vh] overflow-hidden">
        <Hero data={partenaireHero} compact />
      </div>
      <Section data={partenaireIntro} />
      <section className="section-padding bg-muted" aria-labelledby="benefits-title">
        <div className="container mx-auto px-4">
          <h2 id="benefits-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Les avantages du partenariat
          </h2>
          <Grid cols={3}>
            {partenaireBenefits.map((card) => (
              <Card key={card.title} data={card} />
            ))}
          </Grid>
        </div>
      </section>
      <div className="[&_a]:!py-4 [&_a]:!text-lg [&_a]:!min-h-[52px] [&_a]:!font-semibold">
        <CTA data={partenaireCta} variant="secondary" />
      </div>
    </>
  );
}
