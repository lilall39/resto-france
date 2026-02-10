import type { NavLink, ContactInfo, PageMeta } from './types';

export const siteName = 'Resto France';

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Sur-mesure', href: '/sur-mesure' },
  { label: 'Matériaux', href: '/materiaux' },
  { label: 'Contact', href: '/contact' },
];

export const contactInfo: ContactInfo = {
  phone: '+33 1 23 45 67 89',
  email: 'contact@restofrance.fr',
  address: '123 avenue de la Restauration, 75001 Paris',
  hours: 'Lun–Ven 9h–18h',
};

export const footerLinks = {
  solutions: [
    { label: 'Restaurants', href: '/solutions#restaurants' },
    { label: 'Fast casual', href: '/solutions#fast-casual' },
    { label: 'Fast food', href: '/solutions#fast-food' },
  ],
  company: [
    { label: 'Notre univers', href: '/notre-univers' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Devenir partenaire', href: '/devenir-partenaire' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/cgv' },
    { label: 'Confidentialité', href: '/confidentialite' },
  ],
};

export const defaultMeta: PageMeta = {
  title: `${siteName} – Mobilier & aménagement pour professionnels de la restauration`,
  description: 'Mobilier, vaisselle et aménagement sur mesure pour restaurants, fast casual et fast food en France.',
  ogImage: '/og-default.jpg',
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.restofrance.fr';
