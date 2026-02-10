import type { HeroData, SectionData, CardData } from './types';

export const universHero: HeroData = {
  title: 'Notre univers',
  subtitle: 'Une équipe passionnée au service des professionnels de la restauration.',
  ctaText: 'Nos solutions',
  ctaHref: '/solutions',
  image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80',
  imageAlt: 'Équipe et savoir-faire Resto France',
};

export const universStory: SectionData = {
  title: 'Une histoire de confiance',
  subtitle: 'Depuis plus de vingt ans',
  content: 'Resto France est née de la volonté de proposer aux restaurateurs un interlocuteur unique : mobilier, vaisselle et aménagement dans une même approche. Nous connaissons les contraintes des salles, des cuisines et des flux ; nous savons ce qui tient dans le temps et ce qui plaît aux clients. Notre atelier et notre showroom sont le reflet de cet engagement : qualité, conseil et réactivité.',
  image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
  imageAlt: 'Showroom et atelier Resto France',
};

export const universValues: CardData[] = [
  {
    title: 'Qualité & durabilité',
    text: 'Sélection rigoureuse des matériaux et des fournisseurs pour un mobilier qui traverse les années.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80',
    imageAlt: 'Qualité des matériaux',
  },
  {
    title: 'Conseil personnalisé',
    text: 'Chaque projet est unique. Nous vous accompagnons du premier croquis à la livraison.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    imageAlt: 'Conseil et accompagnement',
  },
  {
    title: 'Réactivité',
    text: 'Délais tenus, SAV réactif et pièces détachées pour limiter toute interruption d\'activité.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    imageAlt: 'Livraison et suivi',
  },
];

export const universMeta = {
  title: 'Notre univers – Resto France',
  description: 'Découvrez l\'équipe et les valeurs de Resto France : qualité, conseil et réactivité au service des professionnels de la restauration.',
};
