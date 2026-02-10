import type { HeroData, SectionData, CardData, CTAData } from './types';

export const partenaireHero: HeroData = {
  title: 'Devenir partenaire',
  subtitle: 'Rejoignez un réseau d\'experts au service de la restauration.',
  ctaText: 'Candidater',
  ctaHref: '/contact',
  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
  imageAlt: 'Partenariat Resto France',
};

export const partenaireIntro: SectionData = {
  title: 'Pourquoi nous rejoindre ?',
  subtitle: 'Un partenariat gagnant-gagnant',
  content: 'Nous recherchons des fabricants, artisans et revendeurs qui partagent notre exigence qualité et notre volonté d\'accompagner les professionnels. En devenant partenaire, vous accédez à notre portefeuille de projets et à une équipe commerciale qui qualifie les demandes. En contrepartie, nous attendons des délais tenus, une qualité constante et une relation transparente.',
};

export const partenaireBenefits: CardData[] = [
  {
    title: 'Volume de commandes',
    text: 'Des projets réguliers en France et une planification qui permet d\'optimiser la production.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    imageAlt: 'Volume et planification',
  },
  {
    title: 'Visibilité',
    text: 'Vos réalisations sont présentées dans notre showroom et sur notre site aux côtés de nos références.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80',
    imageAlt: 'Visibilité partenaire',
  },
  {
    title: 'Exigence qualité',
    text: 'Nous valorisons les savoir-faire et les matériaux durables. Un cahier des charges clair pour chaque projet.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80',
    imageAlt: 'Qualité partenaire',
  },
];

export const partenaireCta: CTAData = {
  title: 'Prêt à collaborer ?',
  description: 'Présentez votre entreprise et vos capacités : nous étudions chaque candidature avec attention.',
  buttonText: 'Envoyer ma candidature',
  buttonHref: '/contact?sujet=partenaire',
};

export const partenaireMeta = {
  title: 'Devenir partenaire – Resto France',
  description: 'Rejoignez le réseau Resto France : fabricants et artisans au service de l\'aménagement pour la restauration.',
};
