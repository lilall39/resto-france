import type { HeroData, SectionData, CardData, CTAData } from './types';

export const materiauxHero: HeroData = {
  title: 'Matériaux & Collections',
  subtitle: 'Bois, métal, pierre et vaisselle : des gammes pour tous les univers.',
  ctaText: 'Voir les collections',
  ctaHref: '#collections',
  image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1200&q=80',
  imageAlt: 'Matériaux et finitions',
};

export const materiauxIntro: SectionData = {
  title: 'Des matériaux choisis pour durer',
  subtitle: 'Qualité et esthétique',
  content: 'Nous sélectionnons des essences de bois, des finitions métal et des pierres naturelles adaptées à un usage intensif. Nos collections de vaisselle sont testées en lave-vaisselle professionnel et disponibles en plusieurs coloris pour s\'adapter à votre charte. Du classique au contemporain, chaque gamme peut être mixée pour un rendu cohérent.',
};

export const materiauxCollections: CardData[] = [
  {
    title: 'Bois massif & stratifié',
    text: 'Chêne, hêtre, noyer et stratifiés haute résistance pour tables, plans de travail et cloisons.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    imageAlt: 'Bois massif mobilier',
  },
  {
    title: 'Métal & inox',
    text: 'Châssis de chaises, pieds de tables, comptoirs et équipements cuisine en acier et inox.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
    imageAlt: 'Métal et inox',
  },
  {
    title: 'Vaisselle professionnelle',
    text: 'Assiettes, bols, couverts et verres en grès, porcelaine et verre trempé. Lave-vaisselle 90 °C.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba429f5044?w=600&q=80',
    imageAlt: 'Vaisselle professionnelle',
  },
];

export const materiauxCta: CTAData = {
  title: 'Trouver la bonne combinaison',
  description: 'En showroom ou sur plan, nous vous aidons à choisir les matériaux et les couleurs.',
  buttonText: 'Rendez-vous showroom',
  buttonHref: '/contact',
};

export const materiauxMeta = {
  title: 'Matériaux & Collections – Resto France',
  description: 'Bois, métal, pierre et vaisselle professionnelle. Collections durables pour restaurants et fast casual.',
};
