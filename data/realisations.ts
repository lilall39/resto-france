import type { HeroData, ProjectData, CTAData } from './types';

export const realisationsHero: HeroData = {
  title: 'Réalisations',
  subtitle: 'Des projets qui incarnent notre savoir-faire et la confiance de nos clients.',
  ctaText: 'Votre projet',
  ctaHref: '/contact',
  image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
  imageAlt: 'Réalisations Resto France',
};

export const realisationsList: ProjectData[] = [
  {
    id: 'brasserie-centre-ville',
    title: 'Brasserie du Centre',
    category: 'Restaurant traditionnel',
    description: 'Salle de 80 couverts avec banquettes en cuir, tables en chêne et luminaires sur mesure. Vaisselle coordonnée et dressage soigné.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    imageAlt: 'Brasserie du Centre',
    location: 'Lyon',
    year: '2024',
  },
  {
    id: 'fast-casual-bio',
    title: 'Green Bowl',
    category: 'Fast casual',
    description: 'Comptoir de commande, tables hautes et assises modulables. Ambiance végétale et matériaux recyclés.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    imageAlt: 'Green Bowl fast casual',
    location: 'Bordeaux',
    year: '2024',
  },
  {
    id: 'bistro-terrasse',
    title: 'Le Bistro des Halles',
    category: 'Restaurant',
    description: 'Terrasse couverte et salle intérieure. Mobilier extérieur résistant, chauffage et éclairage intégrés.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    imageAlt: 'Bistro des Halles',
    location: 'Paris',
    year: '2023',
  },
  {
    id: 'food-truck-base',
    title: 'Base cuisine Food Truck',
    category: 'Équipement pro',
    description: 'Aménagement de l\'arrière-cuisine et zone de préparation pour une flotte de food trucks.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80',
    imageAlt: 'Base cuisine food truck',
    location: 'Toulouse',
    year: '2023',
  },
  {
    id: 'cantine-entreprise',
    title: 'Cantine d\'entreprise',
    category: 'Restauration collective',
    description: 'Salle de 120 couverts, buffet chaud et froid, vaisselle et mobilier adaptés au flux.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
    imageAlt: 'Cantine entreprise',
    location: 'Nantes',
    year: '2023',
  },
  {
    id: 'bar-a-vins',
    title: 'Bar à vins & tapas',
    category: 'Bar / restauration',
    description: 'Comptoir en zinc, étagères à bouteilles et tables basses. Ambiance chaleureuse et fonctionnelle.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba429f5044?w=800&q=80',
    imageAlt: 'Bar à vins',
    location: 'Marseille',
    year: '2022',
  },
];

export const realisationsCta: CTAData = {
  title: 'Prochain projet : le vôtre',
  description: 'Discutons de votre restaurant, fast casual ou fast food : nous vous proposons un devis sur mesure.',
  buttonText: 'Nous contacter',
  buttonHref: '/contact',
};

export const realisationsMeta = {
  title: 'Réalisations – Resto France',
  description: 'Découvrez nos réalisations : restaurants, fast casual, cantines et bars. Mobilier et aménagement sur mesure.',
};
