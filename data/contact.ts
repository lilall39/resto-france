import type { HeroData, CTAData } from './types';
import { contactInfo } from './common';

export const contactHero: HeroData = {
  title: 'Contact',
  subtitle: 'Échangeons sur votre projet d\'aménagement ou votre candidature partenaire.',
  ctaText: 'Nous appeler',
  ctaHref: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
  image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80',
  imageAlt: 'Contact Resto France',
};

export const contactFormLabels = {
  name: 'Nom / Société',
  email: 'E-mail',
  phone: 'Téléphone',
  subject: 'Sujet',
  message: 'Votre message',
  submit: 'Envoyer',
  success: 'Message envoyé. Nous vous recontactons sous 48 h.',
  error: 'Une erreur est survenue. Réessayez ou contactez-nous par téléphone.',
};

export const contactSubjects = [
  'Demande de devis',
  'Projet sur mesure',
  'Candidature partenaire',
  'Information générale',
  'SAV / Pièces détachées',
];

export const contactMeta = {
  title: 'Contact – Resto France',
  description: 'Contactez Resto France pour votre projet de mobilier, vaisselle ou aménagement pour restaurant. Devis et rendez-vous.',
};
