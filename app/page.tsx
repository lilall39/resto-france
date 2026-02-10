import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import CTA from '@/components/CTA';
import {
  homeHero,
  homeIntro,
  homeCategories,
  homeCta,
  homeMeta,
} from '@/data/home';
import { realisationsList, realisationsHero } from '@/data/realisations';
import { surMesureCta, surMesureHero } from '@/data/sur-mesure';

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  openGraph: { title: homeMeta.title, description: homeMeta.description },
  twitter: { card: 'summary_large_image', title: homeMeta.title, description: homeMeta.description },
};

const homeHeroData = {
  ...homeHero,
  title: 'Restaurants, fast casual & fast food',
  subtitle: '◇ Mobilier pro ◇ Vaisselle ◇ Aménagement sur mesure ◇ partout en France ◇',
  ctaText: 'Découvrir nos solutions',
};

export default function HomePage() {
  const categoriesWithRealisations = [
    { ...homeCategories[0], buttonText: 'Découvrir', buttonHref: '/materiaux' },
    {
      ...homeCategories[1],
      buttonHref: '/materiaux',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
      imageAlt: homeCategories[1].imageAlt,
    },
    { ...homeCategories[2], buttonHref: '/sur-mesure' },
    {
      title: 'Réalisations',
      text: realisationsHero.subtitle,
      image: realisationsHero.image,
      imageAlt: realisationsHero.imageAlt,
      buttonText: 'Voir les réalisations',
      buttonHref: '/realisations',
    },
  ];

  const featuredProjects = realisationsList.slice(0, 4).map((p) => ({
    title: p.title,
    text: `${p.location ?? ''} ${p.year ?? ''} · ${p.description}`.trim(),
    image: p.image,
    imageAlt: p.imageAlt,
    buttonHref: '/realisations',
  }));

  return (
    <>
      {/* 1. Hero — titre et sous-titre ajustés localement pour harmonie */}
      <div className="[&_h1]:!text-2xl [&_h1]:md:!text-3xl [&_h1]:lg:!text-4xl [&_h1+*]:!text-xl [&_h1+*]:md:!text-2xl [&_h1+*]:!font-medium [&_h1+*]:tracking-tight">
        <Hero data={homeHeroData} />
      </div>

      {/* 2. Accroche */}
      <section className="section-padding bg-background" aria-labelledby="accroche-title">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
          <h2 id="accroche-title" className="font-display text-2xl md:text-3xl text-text">
            {homeIntro.title}
          </h2>
          <p className="mt-3 text-text/80 font-body">{homeIntro.subtitle}</p>
          <p className="mt-6">
            <Link
              href="/notre-univers"
              className="inline-flex items-center font-body font-medium text-primary hover:text-primary/80 min-h-[44px]"
            >
              En savoir plus
              <span className="ml-1" aria-hidden>→</span>
            </Link>
          </p>
          </div>
        </div>
      </section>

      {/* 3. Catégories (catalogue) - 4 cartes en 2×2 desktop, 1 col mobile */}
      <section className="section-padding bg-muted" aria-labelledby="categories-title">
        <div className="container mx-auto px-4">
          <h2 id="categories-title" className="font-display text-2xl md:text-3xl text-text text-center">
            Nos catégories
          </h2>
          <p className="mt-3 text-center text-text/70 font-body text-sm md:text-base max-w-xl mx-auto mb-10">
            Pour restaurants, fast casual & fast food — Mobilier professionnel, vaisselle & aménagement sur mesure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {categoriesWithRealisations.map((card, index) => (
              <Card key={`category-${index}-${card.title}`} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projets / Inspiration */}
      <section className="section-padding bg-background" aria-labelledby="projets-title">
        <div className="container mx-auto px-4">
          <h2 id="projets-title" className="font-display text-2xl md:text-3xl text-text text-center mb-10">
            Réalisations & inspiration
          </h2>
          <Grid cols={2}>
            {featuredProjects.map((card) => (
              <Card key={card.title} data={{ ...card, buttonText: 'Voir le projet' }} showButton />
            ))}
          </Grid>
          <p className="mt-8 text-center">
            <Link
              href="/realisations"
              className="inline-flex items-center font-body font-medium text-primary hover:text-primary/80 min-h-[44px] px-6 py-3 rounded-lg border border-primary"
            >
              Voir toutes les réalisations
            </Link>
          </p>
        </div>
      </section>

      {/* 5. Sur-mesure */}
      <section className="section-padding bg-muted" aria-labelledby="surmesure-title">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-background">
              <Image
                src={surMesureHero.image}
                alt={surMesureHero.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 id="surmesure-title" className="font-display text-2xl md:text-3xl text-text">
                {surMesureCta.title}
              </h2>
              <p className="mt-3 text-text/80 font-body">{surMesureCta.description}</p>
              <p className="mt-6">
                <Link
                  href={surMesureCta.buttonHref}
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-body font-medium px-6 py-3 rounded-lg min-h-[44px] flex items-center justify-center"
                >
                  {surMesureCta.buttonText}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTA data={homeCta} variant="secondary" />
    </>
  );
}
