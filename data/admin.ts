/**
 * Structure des données éditables depuis l'admin.
 * Au départ : lecture/écriture JSON local ; plus tard API / Firebase.
 */

import type { ProjectData, HeroData, CardData } from './types';

export interface EditablePage {
  id: string;
  name: string;
  href?: string;
  hero?: Partial<HeroData>;
  sections?: Record<string, { title?: string; content?: string; image?: string }>;
  cards?: Partial<CardData>[];
}

export interface AdminConfig {
  siteName: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export const adminEditablePages: EditablePage[] = [
  { id: 'home', name: 'Accueil', href: '/' },
  { id: 'univers', name: 'Notre univers', href: '/notre-univers' },
  { id: 'solutions', name: 'Solutions', href: '/solutions' },
  { id: 'sur-mesure', name: 'Sur-mesure', href: '/sur-mesure' },
  { id: 'realisations', name: 'Réalisations', href: '/realisations' },
  { id: 'materiaux', name: 'Matériaux', href: '/materiaux' },
  { id: 'partenaire', name: 'Devenir partenaire', href: '/devenir-partenaire' },
  { id: 'contact', name: 'Contact', href: '/contact' },
];

export type ProjectsStore = ProjectData[];
