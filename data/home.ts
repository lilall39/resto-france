import type { HeroData, CardData, CTAData, SectionData } from './types';

export const homeHero: HeroData = {
  title: 'L\'art de la table au service de votre restaurant',
  subtitle: 'Mobilier, vaisselle et aménagement sur mesure pour créer l\'ambiance qui valorise votre cuisine.',
  ctaText: 'Découvrir nos solutions',
  ctaHref: '/solutions',
  image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  imageAlt: 'Salle de restaurant élégante avec mobilier et luminaires',
};

export const homeIntro: SectionData = {
  title: 'Votre partenaire aménagement',
  subtitle: 'Depuis plus de vingt ans, nous accompagnons les professionnels de la restauration.',
  content: 'De la table au comptoir, du fast casual au restaurant gastronomique, nous concevons des espaces où le confort des convives et l\'efficacité des équipes font la différence. Mobilier robuste, vaisselle soignée et conseil personnalisé : tout est pensé pour durer et séduire.',
  image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
  imageAlt: 'Mobilier et vaisselle professionnels en situation',
};

export const homeCategories: CardData[] = [
  {
    title: 'Mobilier professionnel',
    text: 'Tables, chaises, banquettes et comptoirs conçus pour les flux et la résistance au quotidien.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
    imageAlt: 'Mobilier de restaurant',
    buttonText: 'Voir les solutions',
    buttonHref: '/solutions',
  },
  {
    title: 'Vaisselle & arts de la table',
    text: 'Assiettes, couverts et verres qui subliment le plat et résistent au lave-vaisselle professionnel.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba429f5044?w=600&q=80',
    imageAlt: 'Vaisselle et couverts en situation',
    buttonText: 'Découvrir',
    buttonHref: '/materiaux',
  },
  {
    title: 'Aménagement sur mesure',
    text: 'Conception d\'espaces adaptés à votre concept, du plan à la pose.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    imageAlt: 'Aménagement sur mesure restaurant',
    buttonText: 'En savoir plus',
    buttonHref: '/sur-mesure',
  },
];

export const homeCta: CTAData = {
  title: 'Prêt à transformer votre espace ?',
  description: 'Échangeons sur votre projet : concept, volume, budget et délais.',
  buttonText: 'Nous contacter',
  buttonHref: '/contact',
};

export const homeMeta = {
  title: 'Resto France – Mobilier & aménagement pour restaurants en France',
  description: 'Mobilier professionnel, vaisselle et aménagement sur mesure pour restaurants, fast casual et fast food. Conseils et réalisations partout en France.',
};
