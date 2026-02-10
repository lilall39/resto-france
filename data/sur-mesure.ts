import type { HeroData, SectionData, CardData, CTAData } from './types';

export const surMesureHero: HeroData = {
  title: 'Sur-mesure & Savoir-faire',
  subtitle: 'De l\'idée à l\'inauguration : conception et réalisation d\'espaces uniques.',
  ctaText: 'Parler de mon projet',
  ctaHref: '/contact',
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
  imageAlt: 'Aménagement sur mesure restaurant',
};

export const surMesureProcess: SectionData = {
  title: 'Notre processus',
  subtitle: 'Étape par étape',
  content: 'Chaque projet sur mesure commence par une écoute de vos besoins : type de restauration, nombre de couverts, budget et délais. Nous établissons ensuite des plans et des propositions visuelles. Une fois validés, notre atelier fabrique ou fait fabriquer les éléments (mobilier, comptoirs, cloisons). La pose et le suivi sont assurés par nos équipes jusqu\'à la remise des clés.',
  image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
  imageAlt: 'Conception et atelier',
};

export const surMesureServices: CardData[] = [
  {
    title: 'Étude & conception',
    text: 'Plans, vues 3D et échantillons pour valider l\'ambiance et les dimensions avant fabrication.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    imageAlt: 'Étude et conception',
  },
  {
    title: 'Fabrication',
    text: 'Travail du bois, du métal et des surfaces en atelier ou avec des partenaires sélectionnés.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
    imageAlt: 'Fabrication sur mesure',
  },
  {
    title: 'Pose & SAV',
    text: 'Installation sur site et suivi après livraison pour garantir la pérennité de l\'aménagement.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    imageAlt: 'Pose et installation',
  },
];

export const surMesureCta: CTAData = {
  title: 'Un projet sur mesure ?',
  description: 'Présentez-nous votre lieu et vos objectifs : nous vous recontactons sous 48 h.',
  buttonText: 'Soumettre mon projet',
  buttonHref: '/contact',
};

export const surMesureMeta = {
  title: 'Sur-mesure & Savoir-faire – Resto France',
  description: 'Conception et réalisation d\'aménagements sur mesure pour restaurants et espaces de restauration. De l\'étude à la pose.',
};
