import type { HeroData, SectionData, CardData, CTAData } from './types';

export const solutionsHero: HeroData = {
  title: 'Solutions pour les professionnels',
  subtitle: 'Restaurants, fast casual, fast food : des offres adaptées à chaque concept.',
  ctaText: 'Échanger sur mon projet',
  ctaHref: '/contact',
  image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80',
  imageAlt: 'Espace restauration professionnel',
};

export const solutionsIntro: SectionData = {
  title: 'Un équipement pensé pour votre activité',
  subtitle: 'Du traditionnel au contemporain',
  content: 'Que vous ouvriez un restaurant de centre-ville, un fast casual ou un point de vente à emporter, nous proposons des gammes et des configurations qui répondent aux normes, aux flux et à l\'image que vous voulez donner. Mobilier modulable, vaisselle coordonnée et aménagement clé en main ou sur mesure.',
};

export const solutionsBySegment: CardData[] = [
  {
    title: 'Restaurants traditionnels',
    text: 'Salles à l\'ambiance soignée, tables et chaises confortables, vaisselle qui met en valeur la cuisine. Nous travaillons les matériaux nobles et les finitions pour un rendu premium.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    imageAlt: 'Restaurant traditionnel',
    buttonText: 'Voir les réalisations',
    buttonHref: '/realisations?segment=restaurant',
  },
  {
    title: 'Fast casual',
    text: 'Espaces conviviaux, assises variées et comptoirs ergonomiques. Un équilibre entre rapidité de service et confort pour prolonger le temps sur place.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
    imageAlt: 'Fast casual',
    buttonText: 'En savoir plus',
    buttonHref: '/sur-mesure',
  },
  {
    title: 'Fast food & take-away',
    text: 'Mobilier résistant, faciles à entretenir et conformes aux normes d\'hygiène. Optimisation des zones de préparation et de service pour un débit maîtrisé.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',
    imageAlt: 'Fast food et take-away',
    buttonText: 'Nous contacter',
    buttonHref: '/contact',
  },
];

export const solutionsCta: CTAData = {
  title: 'Quel concept pour vous ?',
  description: 'Décrivons ensemble votre projet et trouvons la solution la plus adaptée.',
  buttonText: 'Prendre rendez-vous',
  buttonHref: '/contact',
};

export const solutionsMeta = {
  title: 'Solutions professionnelles – Resto France',
  description: 'Mobilier et aménagement pour restaurants, fast casual et fast food. Offres adaptées à chaque concept en France.',
};
